import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
  inject,
  signal,
  computed,
  input,
  ViewEncapsulation

} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Task } from '@models/task';
import { FakeRedis } from '@services/fake-redis';
import { Loading } from '@utils/loading/loading';
import { timer, take } from 'rxjs';

@Component({
  selector: 'app-output-tasks',
  imports: [
    CommonModule,
    Loading

  ],
  templateUrl: './output-tasks.html',
  styleUrl: './output-tasks.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputTasks implements OnInit, AfterViewInit {
 public html = input.required<string>();

  private sanitizer = inject(DomSanitizer);

  public sanitizedHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.html()));

  isLoading = signal(true);

  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  private fakeRedis = inject(FakeRedis);

  private tasks!: Array<Task>;

  ngOnInit(): void {
    const tasks = this.fakeRedis.findAll();
    this.tasks = tasks;

  }

  ngAfterViewInit(): void {
    timer(1500).pipe(take(1)).subscribe(() => {
      this.isLoading.set(false)
      this.initTasksComponent();

    });

  }

  private initTasksComponent(): void {
    const host = this.element.nativeElement as HTMLElement;
    const shadowDom = host.shadowRoot;

    const addBtn = shadowDom?.querySelector("#add-btn") as HTMLButtonElement;

    this.renderer.listen(addBtn, "click", () => {
      const input = shadowDom?.querySelector("#task-input") as HTMLInputElement;
      const title = input.value;
      (input as HTMLInputElement).value = ""

      const created = this.create(title);

      if (created === null) return;

      if (created === undefined) {
        const emptyTask = shadowDom?.querySelector("#empty-task-msg") as HTMLSpanElement;

        this.renderer.addClass(emptyTask, "container__tasks-empty-task");

        timer(1500).pipe(take(1)).subscribe(() => this.renderer.removeClass(emptyTask, "container__tasks-empty-task"));

        console.error("Error: Título é obrigatório");

        return;

      }

      this.tasks = this.findAll();

      const task = this.tasks.slice(-1)[0];

      this.createTasksUI(shadowDom!, task);

    });

    this.tasks.forEach((el) => this.createTasksUI(shadowDom!, el));

  }

  private createTasksUI(shadowDom: ShadowRoot, task: Task): void {
    const ul = shadowDom?.querySelector("#task-list");

    const li = this.renderer.createElement("li") as HTMLLIElement;
    const span = this.renderer.createElement("span") as HTMLSpanElement;
    const delButton = this.renderer.createElement("button") as HTMLButtonElement;

    span.textContent = task.title;

    this.renderer.addClass(span, "container__tasks-task-text");

    if (task.done) this.renderer.addClass(span, "container__tasks-task-completed");

    this.renderer.listen(span, "click", () => {
      span.classList.toggle("container__tasks-task-completed");

      const done = span.classList.contains("container__tasks-task-completed");
      const newTask = {
        id: task.id,
        title: task.title,
        done

        } satisfies Task;

        this.update(newTask);

    });

    delButton.textContent = "Excluir";

    this.renderer.addClass(delButton, "container__tasks-delete-btn");
    this.renderer.listen(delButton, "click", () => {
      this.renderer.removeChild(ul, li);
      this.delete(task.id);
      this.tasks = this.findAll();

    });

    this.renderer.appendChild(li, span);
    this.renderer.appendChild(li, delButton);

    this.renderer.appendChild(ul, li);

  }

  private create(title: string): Task | null | undefined {
    return this.fakeRedis.create(title);

  }

  private update(task: Task): void {
    this.fakeRedis.update(task);

  }

  private findAll(): Array<Task> {
    return this.fakeRedis.findAll();

  }

  private delete(id: number): void {
    this.fakeRedis.delete(id);

  }

}

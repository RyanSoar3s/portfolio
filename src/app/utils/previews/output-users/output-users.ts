import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  inject,
  input,
  computed,
  ViewEncapsulation,
  signal,
  ElementRef,
  Renderer2

} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '@models/user';
import { FakeMongodb } from '@services/fake-mongodb';
import { Loading } from '@utils/loading/loading';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-output-users',
  imports: [
    CommonModule,
    Loading

  ],
  templateUrl: './output-users.html',
  styleUrl: './output-users.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutputUsers implements OnInit, AfterViewInit {
  public html = input.required<string>();

  private sanitizer = inject(DomSanitizer);

  public sanitizedHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.html()));

  isLoading = signal(true);

  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  private fakeMongoDB = inject(FakeMongodb);

  private users!: Array<User>;

  ngOnInit(): void {
    this.users = this.fakeMongoDB.findAll();

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

    const form = shadowDom?.querySelector("#userForm") as HTMLFormElement;

    this.renderer.listen(form, "submit", (event: Event) => {
      event.preventDefault();

      const name = shadowDom?.querySelector("#name") as HTMLInputElement;
      const email = shadowDom?.querySelector("#email") as HTMLInputElement;

      const user = {
        name: name.value,
        email: email.value

      } satisfies Omit<User, "id">;

      name.value = "";
      email.value = "";

      const users = this.create(user);

      if (!users) return;

      this.users = this.findAll();

      const lastUser = this.users.slice(-1)[0];
      this.createTasksUI(shadowDom!, lastUser);

    })

    if (!this.users.length) this.createTasksUI(shadowDom!, {} as User);
    this.users.forEach((user) => this.createTasksUI(shadowDom!, user));

  }

  private createTasksUI(shadowDom: ShadowRoot, user: User): void {
    const div = shadowDom.querySelector("#userList") as HTMLDivElement;

    if (!this.users.length) {
      const p = this.renderer.createElement("p") as HTMLParagraphElement;
      p.textContent = "Nenhum usuário.";

      this.renderer.appendChild(div, p);

      return;

    }

    const p = div.querySelector("p") as HTMLParagraphElement;

    if (p) this.renderer.removeChild(div, p);

    const wrapper = this.renderer.createElement("div") as HTMLDivElement;
    const spanName = this.renderer.createElement("span") as HTMLSpanElement;
    const spanEmail = this.renderer.createElement("span") as HTMLSpanElement;
    const button = this.renderer.createElement("button") as HTMLButtonElement;

    spanName.textContent = `Nome: ${user.name}`;
    spanEmail.textContent = `Email: ${user.email}`;
    button.textContent = "Excluir";

    this.renderer.addClass(button, "container__users-btn-delete");
    this.renderer.listen(button, "click", () => {
      this.renderer.removeChild(div, wrapper);
      this.renderer.removeChild(div, button);

      this.delete(user.id);

      this.users = this.findAll();

      if (!this.users.length) {
        const p = this.renderer.createElement("p") as HTMLParagraphElement;
        p.textContent = "Nenhum usuário.";

        this.renderer.appendChild(div, p);

      }

    });

    this.renderer.appendChild(wrapper, spanName);
    this.renderer.appendChild(wrapper, spanEmail);
    this.renderer.appendChild(div, wrapper);
    this.renderer.appendChild(div, button);

  }

  private create(user: Omit<User, "id">): User | null {
    return this.fakeMongoDB.create(user);

  }

  private findAll(): Array<User> {
    return this.fakeMongoDB.findAll();


  }

  private delete(id: number): void {
    this.fakeMongoDB.delete(id);

  }

}

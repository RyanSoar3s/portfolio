import { Injectable } from '@angular/core';
import { Task } from '@models/task';

@Injectable({
  providedIn: 'root',
})
export class FakeRedis {
  private listKey = "tasks";
  private idKey = "task:id";

  private get taskIds(): Array<number> {
    return JSON.parse(localStorage.getItem(this.listKey) || "[]");
  }

  private set taskIds(value: Array<number>) {
    localStorage.setItem(this.listKey, JSON.stringify(value));

  }

  private taskKey(id: number): string {
    return `task:${id}`;

  }

  private nextId(): number {
    const id = Number(localStorage.getItem(this.idKey) || 0) + 1;
    localStorage.setItem(this.idKey, id.toString());
    return id;

  }

  create(title: string): Task | null | undefined {
    if (!title) return undefined;

    const existing = this.findAll().find((task) => task.title === title);

    if (existing) return null;

    const id = this.nextId();

    const task: Task = {
      id,
      title,
      done: false

    };

    localStorage.setItem(this.taskKey(id), JSON.stringify(task));
    this.taskIds = [ ...this.taskIds, id ];

    return task;

  }

  findAll(): Array<Task> {
    return this.taskIds
      .map((id) => localStorage.getItem(this.taskKey(id)))
      .filter(Boolean)
      .map((task) => JSON.parse(task as string));

  }

  findById(id: number): Task | undefined {
    const task = localStorage.getItem(this.taskKey(id));
    return (task) ? JSON.parse(task) : undefined;

  }

  update(data: Task): Task | undefined {
    const task = this.findById(data.id);
    if (!task) return undefined;

    const updatedTask = { ...task, ...data };
    localStorage.setItem(this.taskKey(data.id), JSON.stringify(updatedTask));

    return updatedTask;

  }

  delete(id: number): void {
    localStorage.removeItem(this.taskKey(id));
    this.taskIds = this.taskIds.filter((taskId) => taskId !== id);

  }

}

import { Injectable } from '@angular/core';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root',
})
export class FakeMongodb {
  private storageKey = "users";
  private idKey = "users:id";

  private get users(): Array<User> {
    return JSON.parse(localStorage.getItem(this.storageKey) || "[]");

  }

  private set users(value: Array<User>) {
    localStorage.setItem(this.storageKey, JSON.stringify(value));

  }

  private nextId(): number {
    const id = Number(localStorage.getItem(this.idKey) || 0) + 1;
    localStorage.setItem(this.idKey, id.toString());
    return id;

  }

  private emailExists(email: string, ignoreId?: number): boolean {
    return this.users.some(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.id !== ignoreId

    );

  }

  create(user: Omit<User, "id">): User | null {
    if (this.emailExists(user.email)) return null;

    const newUser: User = {
      id: this.nextId(),
      ...user

    };

    this.users = [ ...this.users, newUser ];
    return newUser;

  }

  findAll(): Array<User> {
    return this.users;

  }

  delete(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);

  }

}

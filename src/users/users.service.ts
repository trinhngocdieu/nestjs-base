import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = {
      id: this.users.length + 1,
      username,
      password: hashedPassword,
    };
    this.users.push(user);
    return user;
  }
}
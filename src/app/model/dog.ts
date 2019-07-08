import { User } from './user';

export class Dog {
  private id = Date.now();
  name: string;
  breed: string;
  subbreed: string;
  owner: User;
  url: string;
}

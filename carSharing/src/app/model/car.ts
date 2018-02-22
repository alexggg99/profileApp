import {User} from "./user";

export interface Car {
  id: number;
  model: string;
  seats: number;
  user: User
}

import {Car} from "./car";
import {User} from "./user";

export interface Trip {
  id: number;
  date: string;
  sourcePoint: string;
  destination: string;
  car: Car
  users: User[];
  joined: boolean;
  _links: any;
}

import {Car} from "./car";

export interface Trip {
  id: number;
  date: string;
  sourcePoint: string;
  destination: string;
  car: Car
}

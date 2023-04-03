import { Car } from "./car.interface";

export interface Order {
  client_name: string;
  client_email: string;
  items: Car[];
  total: number;
}

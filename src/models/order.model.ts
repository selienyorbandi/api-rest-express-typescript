import { Schema, model } from "mongoose";
import { Car } from "../interfaces/car.interface";
import { Order } from "./../interfaces/order.interface";

const OrderSchema = new Schema<Order>(
  {
    client_name: {
      type: String,
      required: true,
    },
    client_email: {
      type: String,
      required: true,
    },
    items: {
      type: Array<Car>(),
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const OrderModel = model("Orders", OrderSchema);

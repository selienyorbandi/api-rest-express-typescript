import { Schema, model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const CarSchema = new Schema<Car>(
  {
    name: {
      type: String,
      text: true,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      text: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CarModel = model("Cars", CarSchema);

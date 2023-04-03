import { Router } from "express";
import {
  deleteCar,
  getCar,
  getCars,
  postCar,
  searchCars,
  updateCar,
} from "../controllers/car";

const router = Router();

router.get("/", getCars);

router.get("/:id", getCar);

router.get("/search/:textSearch", searchCars);

router.post("/", postCar);

router.put("/:id", updateCar);

router.delete("/:id", deleteCar);

export { router };

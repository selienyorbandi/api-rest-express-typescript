import { Car } from "../interfaces/car.interface";
import { CarModel } from "../models/car.model";

const insertCar = async (car: Car) => {
  return await CarModel.create(car);
};

const getAllCars = async () => {
  return await CarModel.find({});
};

const getCarById = async (id: string) => {
  return await CarModel.findOne({ _id: id });
};

const getCarsByFullTextSearch = async (searchQuery: string) => {
  return await CarModel.find({ $text: { $search: searchQuery } });
};

const updateCarById = async (id: string, car: Car) => {
  return await CarModel.findByIdAndUpdate(id, car);
};

const deleteCarById = async (id: string) => {
  return await CarModel.findByIdAndDelete(id);
};

export {
  insertCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
  getCarsByFullTextSearch,
};

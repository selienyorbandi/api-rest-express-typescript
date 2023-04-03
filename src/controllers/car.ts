import { Request, Response } from "express";
import {
  deleteCarById,
  getAllCars,
  getCarsByFullTextSearch,
  getCarById,
  insertCar,
  updateCarById,
} from "../services/car";
import { handleHttpError } from "../utils/error.handle";

const getCar = async (req: Request, res: Response) => {
  try {
    const responseCar = await getCarById(req.params.id);
    res.send(responseCar);
  } catch (error) {
    handleHttpError(res, `ERROR_GETTING_ITEM: ${error}`, 500);
  }
};

const searchCars = async (req: Request, res: Response) => {
  try {
    const responseCar = await getCarsByFullTextSearch(req.params.textSearch);
    res.send(responseCar);
  } catch (error) {
    handleHttpError(res, `ERROR_GETTING_ITEM: ${error}`, 500);
  }
};

const getCars = async (req: Request, res: Response) => {
  try {
    const responseCars = await getAllCars();
    res.send(responseCars);
  } catch (error) {
    handleHttpError(res, `ERROR_GETTING_ITEMS: ${error}`, 500);
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const responseCar = await updateCarById(req.params.id, req.body);
    res.send(`${responseCar} was successfully updated`);
  } catch (error) {
    handleHttpError(res, `ERROR_UPDATING_ITEM: ${error}`, 500);
  }
};

const postCar = async (req: Request, res: Response) => {
  try {
    const responseCar = await insertCar(req.body);
    res.send(`${responseCar} was successfully created`);
  } catch (error) {
    handleHttpError(res, `ERROR_CREATING_ITEM: ${error}`, 500);
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const responseCar = await deleteCarById(req.params.id);
    res.send(`${responseCar} was successfully deleted`);
  } catch (error) {
    handleHttpError(res, `ERROR_DELETING_ITEM: ${error}`, 500);
  }
};

export { getCar, getCars, updateCar, postCar, deleteCar, searchCars };

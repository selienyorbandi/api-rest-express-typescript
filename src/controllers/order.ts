import { Request, Response } from "express";
import {
  deleteOrderById,
  getAllOrders,
  getOrderById,
  insertOrder,
  updateOrderById,
} from "../services/order";
import { handleHttpError } from "../utils/error.handle";

const getOrder = async (req: Request, res: Response) => {
  try {
    const responseOrder = await getOrderById(req.params.id);
    res.send(responseOrder);
  } catch (error) {
    handleHttpError(res, `ERROR_GETTING_ITEM: ${error}`, 500);
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const responseOrders = await getAllOrders();
    res.send({
      responseOrders,
      message: "Solo para usuarios con JWT valido",
    });
  } catch (error) {
    handleHttpError(res, `ERROR_GETTING_ITEMS: ${error}`, 500);
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const responseOrder = await updateOrderById(req.params.id, req.body);
    res.send(`${responseOrder} was successfully updated`);
  } catch (error) {
    handleHttpError(res, `ERROR_UPDATING_ITEM: ${error}`, 500);
  }
};

const postOrder = async (req: Request, res: Response) => {
  try {
    const responseOrder = await insertOrder(req.body);
    res.send(`${responseOrder} was successfully created`);
  } catch (error) {
    handleHttpError(res, `ERROR_CREATING_ITEM: ${error}`, 500);
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const responseOrder = await deleteOrderById(req.params.id);
    res.send(`${responseOrder} was successfully deleted`);
  } catch (error) {
    handleHttpError(res, `ERROR_DELETING_ITEM: ${error}`, 500);
  }
};

export { getOrder, getOrders, updateOrder, postOrder, deleteOrder };

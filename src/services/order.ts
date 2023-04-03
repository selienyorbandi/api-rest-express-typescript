import { Order } from "../interfaces/order.interface";
import { OrderModel } from "../models/order.model";

const insertOrder = async (Order: Order) => {
  return await OrderModel.create(Order);
};

const getAllOrders = async () => {
  return await OrderModel.find({});
};

const getOrderById = async (id: string) => {
  return await OrderModel.findOne({ _id: id });
};

const updateOrderById = async (id: string, Order: Order) => {
  return await OrderModel.findByIdAndUpdate(id, Order);
};

const deleteOrderById = async (id: string) => {
  return await OrderModel.findByIdAndDelete(id);
};

export {
  insertOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};

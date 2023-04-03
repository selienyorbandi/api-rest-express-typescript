import "dotenv/config";
import mongoose from "mongoose";

const MONGO_DB_URI = <string>process.env.MONGO_DB_URI;

const connectDBWithRetry = () => {
  mongoose
    .connect(MONGO_DB_URI)
    .then(() => {
      console.log("*********** MongoDB is connected ***********");
    })
    .catch((err) => {
      console.log(
        `*********** MongoDB connection unsuccessful, retry after 5 seconds. ***********${err}`
      );
      setTimeout(connectDBWithRetry, 5000);
    });
};

export { connectDBWithRetry };

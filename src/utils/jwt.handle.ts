import { sign, verify } from "jsonwebtoken";
import { ObjectId } from "mongoose";

const JWT_SECRET = <string>process.env.JWT_SECRET;

const generateToken = ({
  email,
  id,
  name,
}: {
  email: string;
  id: string;
  name: string;
}) => {
  const jwt = sign({ email, id, name }, JWT_SECRET, { expiresIn: "2h" });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(<string>jwt, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };

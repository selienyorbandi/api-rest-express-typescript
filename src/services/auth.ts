import { User } from "./../interfaces/user.interface";
import { handleHttpError } from "./../utils/error.handle";
import { Auth } from "../interfaces/auth.interface";
import { UserModel } from "../models/user.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (req: User) => {
  const { email, password, name } = req;
  const user = await UserModel.findOne({ email });
  if (user) throw new Error("USER_ALREADY_EXISTS");
  const hashPassword = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: hashPassword,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("USER_NOT_FOUND");

  const isPasswordValid = await verify(password, user.password);
  if (!isPasswordValid) throw new Error("INVALID_PASSWORD");

  const token = generateToken({
    email: user.email,
    id: user._id.toString(),
    name: user.name,
  });

  const data = {
    jwt: token,
    user: {
      email: user.email,
      name: user.name,
    },
  };

  return data;
};

export { registerNewUser, loginUser };

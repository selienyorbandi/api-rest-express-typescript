import { compare, hash } from "bcryptjs";

const encrypt = async (password: string) => {
  return await hash(password, 10);
};

const verify = async (password: string, hashPassword: string) => {
  return await compare(password, hashPassword);
};

export { encrypt, verify };

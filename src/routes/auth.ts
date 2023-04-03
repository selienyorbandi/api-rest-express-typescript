import { Router } from "express";
import { loginUserCtrl, registerUserCtrl } from "../controllers/auth";

const router = Router();

router.post("/login", loginUserCtrl);
router.post("/register", registerUserCtrl);

export { router };

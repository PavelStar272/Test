import { Router } from "express";
import { controller } from "./authController.js";

const router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);

export const userRouter = router;

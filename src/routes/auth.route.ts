import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const authRoutes = Router();

// authRoutes.post("/verify-email", authController.verifyEmail);

// authRoutes.post("/login", authController.login);

authRoutes.post("/register", authController.register);

authRoutes.get("/me", authController.me);

authRoutes.post("/logout", authController.logout);

authRoutes.post("/refresh-token", authController.refreshToken);

export default authRoutes;

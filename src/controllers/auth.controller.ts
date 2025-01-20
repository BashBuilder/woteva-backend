import { User } from "../model/user.model";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as yup from "yup";

export const authController = {
  // Implement registration logic here using the user model from sequelize.
  register: async (req: Request, res: Response, next: NextFunction) => {
    const { username, password, email } = req.body;
    const schema = yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required().min(8),
      email: yup.string().required().email(),
    });

    try {
      await schema.validate({ username, password, email });
      // Check if user already exists
      const existingUser = await User.findOne({ where: { email } });
      console.log(existingUser);
      // if (existingUser) {
      //   return res.status(400).json({ message: "User already exists" });
      // }
      // // Hash the password
      // const hashedPassword = await bcrypt.hash(password, 10);
      // // Create new user
      // const newUser = await User.create({
      //   username,
      //   email,
      //   password: hashedPassword,
      // });
      // // Generate JWT token
      // // if (!process.env.JWT_SECRET) {
      // //   throw new Error("JWT_SECRET is not defined");
      // // }
      // const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, {
      //   expiresIn: "1h",
      // });
      res.status(200).json({ body: req.body });
      // res.status(201).json({ token, user: newUser });
    } catch (error) {
      console.log((error as Error).message);
      res.status(400).json({ message: (error as Error).message });
    }
  },

  login: async () => {
    // Implement login logic here
  },
  logout: async () => {},
  me: async () => {},
  refreshToken: async () => {},
};

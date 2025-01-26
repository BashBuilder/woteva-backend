import bcrypt from "bcrypt";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import * as yup from "yup";
import { User } from "../model/user.model";
import { Request, Response } from "express";

export const authController = {
  // Implement registration logic here using the user model from sequelize.
  register: async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const schema = yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required().min(8),
      email: yup.string().required().email(),
    });

    // console.log(await User.findAll());

    try {
      // await schema.validate({ username, password, email });
      // const existingUser = await User.findOne({
      //   where: {
      //     [Op.or]: [{ email }, { username }],
      //   },
      // });
      // console.log(existingUser);
      // return res.json({ hello: "world" });
      // if (existingUser) {
      //   return res.status(400).json({ message: "User already exists" });
      // }
      // const hashedPassword = await bcrypt.hash(password, 10);
      // const newUser = await User.create({
      //   username,
      //   email,
      //   password: hashedPassword,
      // });
      // if (!process.env.JWT_SECRET) {
      //   throw new Error("JWT_SECRET is not defined");
      // }
      // const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, {
      //   expiresIn: "1h",
      // });
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

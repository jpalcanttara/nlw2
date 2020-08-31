import { Request, Response } from "express";
import db from "../database/connection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secret } from "../config/auth";
import mailer from "../modules/mailer";
import crypto from "crypto";

export default class UsersController {
  async index(request: Request, response: Response) {}

  async create(request: Request, response: Response) {
    const { name, last_name, email, password } = request.body;

    const trx = await db.transaction();

    try {
      const uniqEmail = await trx("users").where("email", email);

      if (uniqEmail.length > 0) {
        response.status(400).json({ erro: "Email is alredy use" });
      }

      const passEncript = await bcrypt.hash(password, 8);

      await trx("users").insert({
        name,
        last_name,
        email,
        password: passEncript,
      });

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();

      return response.status(400).json({
        error: "Unexpected error while creating new user",
      });
    }
  }

  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const usersFind = await db("users").where("email", email);

      const user = usersFind[0];

      if (!user) {
        return response.status(400).json({ error: "User not found" });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return response.status(400).json({ error: "Invalid password" });
      }

      user.password = undefined;

      const token = jwt.sign({ id: user.id }, secret);

      response.json({ token, user });
    } catch (error) {
      return response.status(400).json({ error: "Unexpected error" });
    }
  }

  async forgotPass(request: Request, response: Response) {
    const { email } = request.body;

    const trx = await db.transaction();
    try {
      const user = await trx("users").where("email", email).first();

      if (!user) {
        return response.status(400).json({ error: "User not found" });
      }

      const newPassword = crypto.randomBytes(8).toString("hex");

      await mailer.sendMail({
        to: email,
        from: "jpalcantara2@hotmail.com",
        subject: "Nova senha - Proffy",
        text: `Sua nova senha é: ${newPassword}`,
      });

      const passEncript = await bcrypt.hash(newPassword, 8);

      await trx("users").where("id", user.id).update({ password: passEncript });

      trx.commit();
      response.status(201).send();
    } catch (error) {
      trx.rollback();
      response.status(400).json({ message: "Unexpected erro, try again" });
    }
  }
}

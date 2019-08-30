import { Response, Request } from "express";
import UsuarioModel, { Usuario } from "../models/Usuario";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { cpus } from "os";

class UserController {
  constructor() {}

  public registrarUsuario(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      bcrypt.hash(password, 10).then(hash => {
        const usuarios: Usuario = new UsuarioModel({
          email: email,
          password: hash,
          activo: "1"
        });
        usuarios
          .save()
          .then(result => {
            res.status(200).send({ message: result });
          })
          .catch(error => {
            res.status(500).send({ error: error });
          });
      });
    } catch (error) {
      console.log(error);
    }
  }

  public loginUsuario(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const usuarios: Usuario = new UsuarioModel({ email, password });
      UsuarioModel.findOne({ email: usuarios.email }).then(user => {
        if (!user) {
          return res.status(401).json({ message: "No se encontro el usuario" });
        }
        bcrypt
          .compare(password, user.password)
          .then(result => {
            return result;
          })
          .then(result => {
            if (result) {
              const token = jwt.sign(
                {
                  email: usuarios.email,
                  userdId: usuarios._id
                },
                "putoElQueLee",
                {
                  expiresIn: "1h"
                }
              );
              res.status(200).json({
                token: token
              });
            } else {
              res.status(401).json({
                message: "badPassword"
              });
            }
          })
          .catch((error: any) => {
            res.status(500).json({ error: error });
          });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const userController = new UserController();

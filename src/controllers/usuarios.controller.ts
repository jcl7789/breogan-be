import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UsuarioModel, { Usuario } from "../models/Usuario";
import { SECRET_PASS } from "../constants";
import { sendErrorResponse, ACTIVE, CLIENT, ResponseData } from "./shared";


class UserController {

  constructor() { }

  public registrarUsuario(req: Request, res: Response) {
    const requestData: Usuario = req.body;
    bcrypt.hash(requestData.password, 10).then(hash => {
      new UsuarioModel({
        email: requestData.email,
        password: hash,
        activo: ACTIVE,
        tipo: requestData.tipo | CLIENT
      }).save()
        .then(result => {
          res.status(200).json({ id: result._id, message: "Agregado" });
        })
        .catch(error => {
          if (error.errors) {
            if (error.errors.email) {
              if (String(error.errors.email.kind) === 'unique') {
                res.status(201).json({ code: -1, message: error.errors.email.value + ' ya se encuentra registrado.' });
              }
              if (String(error.errors.email.message) === 'notEmail') {
                res.status(201).json({ code: -1, message: error.errors.email.value + ' no es un mail valido.' });
              }
            }
          }
          sendErrorResponse(error, res);
        });
    }).catch((error) => {
      sendErrorResponse(error, res);
    });
  }

  public loginUsuario(req: Request, res: Response) {
    const requestData: Usuario = req.body;
    const usuarios: Usuario = new UsuarioModel(requestData);
    UsuarioModel.findOne({ email: usuarios.email }).then(user => {
      if (!user) {
        return res.status(401).json({ code: -1, message: "No se encontro el usuario" });
      }
      bcrypt
        .compare(requestData.password, user.password)
        .then(result => {
          if (result) {
            const token = jwt.sign(
              {
                email: usuarios.email,
                userdId: usuarios._id
              },
              SECRET_PASS,
              {
                expiresIn: "1h"
              }
            );
            res.status(200).json({
              token: token,
              expiresIn: 3600,
              id: usuarios._id
            });
          } else {
            res.status(401).json({
              code: -1,
              message: "Contraseña incorrecta"
            });
          }
        })
        .catch((error) => {
          sendErrorResponse(error, res);
        });
    }).catch((error) => {
      sendErrorResponse(error, res);
    });
  }

  obtenerTodosUsers(req: Request, res: Response) {
    UsuarioModel.find()
      .then((result) => {
        if (result.length > 0) {
          res.status(200).send(result);
        } else {
          res.status(204).send()
        }
      })
      .catch((error) => {
        sendErrorResponse(error, res);
      });
  }

  actualizarUsuario(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  cambiarPassword(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const requestData: Usuario = req.body;
      bcrypt.hash(requestData.password, 10).then(hash => {
        UsuarioModel.updateOne({ _id: id }, { "password": hash })
          .then((result) => {
            if (result.n && result.n > 0) {
              res.send(new ResponseData(result, "Password modificada con éxito"));
            } else {
              res.status(204).send();
            }
          })
          .catch((error) => {
            sendErrorResponse(error, res, "No se pudo cambiar la clave");
          });
      }).catch((error) => {
        sendErrorResponse(error, res, "Error al encriptar la clave");
      });
    } catch (error) {
      sendErrorResponse(error, res, "Error al cambiar la clave.")
    }
  }

  bleachingPassword(req: Request, res: Response) { 
    try {
      const { id } = req.params;
      bcrypt.hash("123456", 10).then(hash => {
        UsuarioModel.updateOne({ _id: id }, { "password": hash })
          .then((result) => {
            if (result.n && result.n > 0) {
              res.send(new ResponseData(result, "Password blanqueada con éxito"));
            } else {
              res.status(204).send();
            }
          })
          .catch((error) => {
            sendErrorResponse(error, res, "No se pudo cambiar la clave");
          });
      }).catch((error) => {
        sendErrorResponse(error, res, "Error al encriptar la clave");
      });
    } catch (error) {
      sendErrorResponse(error, res, "Error al cambiar la clave.")
    }
  }

}

export const userController = new UserController();

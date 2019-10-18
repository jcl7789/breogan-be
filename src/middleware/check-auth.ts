import { SECRET_PASS } from "../constants";
import jwt from "jsonwebtoken";

module.exports = (req: any, res: any, next: any) => {
    try {
        const token = req.header.authorization;
        jwt.verify(token, SECRET_PASS);
        next();
    } catch (error) {
        res.status(401).json({ message: "Inicia sesion para ver esto." });
    }
}
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization;
        jwt.verify(token, "PutoElQueLee");
        next();
    } catch (error) {
        res.status(401).json({ message: "Inicia sesion para ver esto." });
    }
}
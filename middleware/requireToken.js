const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = function (req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid token" });
      } else {
        req.user = { username: decodeToken.username };
        next();
      }
    })
  } else {
    res.status(400).json({ message: "Token not found" })
  }
};
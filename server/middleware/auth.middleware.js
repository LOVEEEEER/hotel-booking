const tokenService = require("../services/token.service");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    // Bearer token value
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      console.log("error");
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const data = tokenService.validateAccess(token);

    if (!data) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = data;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

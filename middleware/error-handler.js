module.exports = (err, req, res, next) => {
  console.log("📢 [errorHandler.js:2]", err);
  if (err.name === "Internal Server Error") {
    res.status(500).json({
      code: "500",
      type: "Internal Server Error",
      message: err.message,
    });
  } else if (err.name === "SequelizeValidationError") {
    const errors = err.errors.map((element) => element.message);
    res.status(400).json({
      code: "400",
      type: "Bad Request",
      message: errors,
    });
  } else if (err.name === "SequelizeUniqueConstraintError") {
    const errors = err.errors.map((element) => element.message);
    res.status(400).json({
      code: 400,
      type: "Bad Request",
      message: errors,
    });
  } else if (err.name === "Bad Request") {
    res.status(400).json({
      code: 400,
      type: "Bad Request",
      message: err.message,
    });
  } else if (err.name === "JsonWebTokenError") {
    res.status(400).json({
      code: 400,
      type: "Bad Request",
      message: "Please login first",
    });
  } else if (err.name === "Unauthorized") {
    res.status(401).json({
      code: 401,
      type: "Unauthorized",
      message: err.message,
    });
  } else if (err.name === "SequelizeDatabaseError") {
    res.status(500).json({
      code: 500,
      type: "Internal Server Error",
      message: err.message,
    });
  } else if (err.name === "Not Found") {
    res.status(404).json({
      code: 404,
      type: "Not Found",
      message: err.message,
    });
  } else if (err.name === "SequelizeForeignKeyConstraintError") {
    res.status(500).json({
      code: 500,
      type: "Internal Server Error",
      message: `Cannot Delete or Update: ${err.table} is referenced on another table`,
    });
  } else if (err.name === "Failure") {
    res.status(400).json({
      code: 400,
      type: "Bad Request",
      message: err.message,
    });
  } else if (err.name === "Forbidden") {
    res.status(403).json({
      code: 403,
      type: "Forbidden",
      message: err.message,
    });
  } else {
    res.status(500).json({
      code: 500,
      type: "Internal Server Error",
      message: err.message,
    });
  }
};

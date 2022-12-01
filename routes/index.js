const router = require("express").Router();

const route_movie = require("./route_movie");

router.use("/API/v1/Movies", route_movie);

module.exports = router;

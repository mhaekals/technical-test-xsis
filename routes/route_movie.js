const express = require("express");
const Movie_Controller = require("../controllers/controller_movie");
const router = express.Router();

router.get("/", Movie_Controller.get_all_movies);
router.post("/", Movie_Controller.add_movie);
router.get("/:id", Movie_Controller.get_movie);
router.patch("/:id", Movie_Controller.update_movie);
router.delete("/:id", Movie_Controller.delete_movie);

module.exports = router;

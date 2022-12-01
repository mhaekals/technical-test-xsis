const { Movie } = require("../models");
const moment = require("moment");

class Movie_Service {
  static async get_all_movies(req) {
    const get_movies = await Movie.findAll({});

    if (get_movies) {
      const result = get_movies.map((el) => {
        el.dataValues.createdAt = moment(el.dataValues.createdAt).format(
          "YYYY-MM-DD HH:MM:SS"
        );
        el.dataValues.updatedAt = moment(el.dataValues.updatedAt).format(
          "YYYY-MM-DD HH:MM:SS"
        );

        return el;
      });

      return result;
    }
  }

  static async get_movie(req) {
    const { id } = req.params;
    const get_movies = await Movie.findOne({
      where: {
        id,
      },
    });

    if (get_movies) {
      return {
        ...get_movies.dataValues,
        createdAt: moment(get_movies.createdAt).format("YYYY-MM-DD HH:MM:SS"),
        updatedAt: moment(get_movies.updatedAt).format("YYYY-MM-DD HH:MM:SS"),
      };
    } else {
      return {
        message: "user not found!",
      };
    }
  }

  static async add_movie(req) {
    const { title, description, rating, image } = req.body;

    if (!title) return "title cannot be empty!";
    if (!description) return "description cannot be empty!";
    if (!rating) return "rating cannot be empty!";

    const result = await Movie.create({
      title,
      description,
      rating,
      image: image ? image : "",
    });

    // console.log("<<<<<<<", result);

    return {
      ...result.dataValues,
      createdAt: moment(result.createdAt).format("YYYY-MM-DD HH:MM:SS"),
      updatedAt: moment(result.updatedAt).format("YYYY-MM-DD HH:MM:SS"),
    };
  }

  static async update_movie(req) {
    const { id } = req.params;
    const { title, description, rating, image } = req.body;
    const obj = {};

    if (title) obj.title = title;
    if (description) obj.description = description;
    if (rating) obj.rating = rating;
    if (image) obj.image = image;

    const result = await Movie.update(obj, {
      where: {
        id,
      },
    });

    if (result) {
      const get_movies = await Movie.findOne({
        where: {
          id,
        },
      });

      return {
        ...get_movies.dataValues,
        createdAt: moment(get_movies.createdAt).format("YYYY-MM-DD HH:MM:SS"),
        updatedAt: moment(get_movies.updatedAt).format("YYYY-MM-DD HH:MM:SS"),
      };
    }
  }

  static async delete_movie(req) {
    const { id } = req.params;

    const result = await Movie.destroy({
      where: {
        id,
      },
    });

    // console.log("<<<<<<<", result);

    if (result) {
      return "movie deleted!";
    }
  }
}

module.exports = Movie_Service;

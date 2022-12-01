const Movie_Service = require("../services/service_movie");

class Movie_Controller {
  static async get_all_movies(req, res, next) {
    try {
      const result = await Movie_Service.get_all_movies(req);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async get_movie(req, res, next) {
    try {
      const result = await Movie_Service.get_movie(req);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async add_movie(req, res, next) {
    try {
      const result = await Movie_Service.add_movie(req);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async update_movie(req, res, next) {
    try {
      const result = await Movie_Service.update_movie(req);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async delete_movie(req, res, next) {
    try {
      const result = await Movie_Service.delete_movie(req);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Movie_Controller;

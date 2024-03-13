import { Movie } from "../models";
import { MovieResponse } from "../services/interfaces";

export const movieAdapter = (response: MovieResponse): Movie => {
  return {
    title: response.Title,
    year: response.Year,
    rated: response.Rated,
    genre: response.Genre,
    director: response.Director,
    writer: response.Writer,
    actors: response.Actors.split(","),
    plot: response.Plot,
    poster: response.Poster || "",
    ratings: response.Ratings.map((data) => ({
      source: data.Source,
      value: data.Value,
    })),
    imdbRating: ratingNormalizer(response.imdbRating),
    imdbVotes: response.imdbVotes,
    imdbID: response.imdbID,
    type: response.Type,
  };
};

const ratingNormalizer = (imdbRating: string): number => {
  const percentage = (parseFloat(imdbRating) * 100) / 10;

  return (percentage * 5) / 100;
};

import { MovieSearchModel, SearchResult } from "../models";
import { MovieSearchResponse, Search } from "../services/interfaces";

export const searchAdapter = (result: Search[]): MovieSearchModel[] => {
  return result.map((data) => ({
    imdbID: data.imdbID,
    title: data.Title,
    year: data.Year,
    poster: data.Poster,
  }));
};

export const searchResultAdapter = (
  data: MovieSearchResponse
): SearchResult => {
  return {
    response: data.Response,
    error: data.Error,
  };
};

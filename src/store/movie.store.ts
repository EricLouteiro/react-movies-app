import { create } from "zustand";
import { MovieSearchModel, MovieStore, SearchResult } from "../models";

export const movieStore = create<MovieStore>((set) => ({
  recommended: [],
  current: [],
  searchMovies: [],
  add: (data, type) =>
    set((state) => {
      const existMovie = state[type].find(
        (movie) => movie.imdbID == data.imdbID
      );
      if (!existMovie) {
        return { [type]: [...state[type], data] };
      }
      return { [type]: state[type] };
    }),
  setSelectedMovie: (data) => set(() => ({ selectedMovie: data })),
  clearSelected: () => set(() => ({ selectedMovie: null })),
  setSearchSelection: (data: string) => set(() => ({ searchSelection: data })),
  setSearchResult: (data: SearchResult) => set(() => ({ searchResult: data })),
  addMovieSearch: (data: MovieSearchModel[]) =>
    set(() => ({ searchMovies: data })),
}));

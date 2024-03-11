import { create } from "zustand";
import { MovieStore } from "../models";

export const movieStore = create<MovieStore>((set) => ({
  recommended: [],
  current: [],
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
}));

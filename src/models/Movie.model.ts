export interface MovieStore {
  recommended: Movie[];
  current: Movie[];
  add: (data: Movie, type: "recommended" | "current") => void;
}

export interface Movie {
  title: string;
  year: string;
  rated: string;
  genre: string;
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  poster?: string;
  ratings: Rating[];
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
}

export interface Rating {
  source: string;
  value: string;
}

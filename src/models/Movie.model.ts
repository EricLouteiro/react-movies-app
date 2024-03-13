export interface MovieStore {
  recommended: Movie[];
  current: Movie[];
  searchMovies: MovieSearchModel[];
  selectedMovie?: Movie | null;
  searchSelection?: string | null;
  searchResult?: SearchResult;
  add: (data: Movie, type: "recommended" | "current") => void;
  setSelectedMovie: (data: Movie) => void;
  clearSelected: () => void;
  setSearchSelection: (imdbId: string) => void;
  setSearchResult: (data: SearchResult) => void;
  addMovieSearch: (data: MovieSearchModel[]) => void;
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
  imdbRating: number;
  imdbVotes: string;
  imdbID: string;
  type: string;
}

export interface Rating {
  source: string;
  value: string;
}

export interface SearchResult {
  response: "True" | "False";
  error?: string;
}

export interface MovieSearchModel {
  title: string;
  year: string;
  imdbID: string;
  poster?: string;
}

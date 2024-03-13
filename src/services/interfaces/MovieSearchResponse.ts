export interface MovieSearchResponse {
  Search: Search[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster?: string;
}

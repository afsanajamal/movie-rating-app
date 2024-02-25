export interface MovieProps {
  movieData: Movie;
}

export interface RatingProps {
  average_rating: number;
  ratingCount: number;
  disable: boolean;
}

export interface Movie {
  movie_id: string;
  title: string;
  description: string;
  poster_url: string;
  average_rating: number;
  total_ratings: number;
  genre: string;
}

export type MovieState = {
  movieList: Movie[];
};

export type MovieAction = {
  type: string;
  value: Movie[];
};

export type DispatchType = (args: MovieAction) => MovieAction;

export type MovieType = {
  movie_id: "";
  title: "";
  description: "";
  poster_url: "";
  average_rating: "";
  total_ratings: "";
  genre: "";
};

interface InitialState {
  value: number;
  movieList: Movie[];
  selectedMovie: Movie;
  searchKey: string;
}
const UpdateMovieAction: string = "Movie";

export default InitialState;
export { UpdateMovieAction };

export interface MovieProps {
  movieData: Movie;
}

export interface RatingProps {
  //   movieRating: {
  rating: number;
  ratingCount: number;
  //   };
}

export interface Movie {
  id: number;
  title: string;
  imgSrc: string;
  rating: number;
  ratingGiven: number;
}

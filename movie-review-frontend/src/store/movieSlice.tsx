import InitialState, { Movie, UpdateMovieAction } from "../common/Interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
  value: 0,
  movieList: [],
  selectedMovie: {
    movie_id: "",
    title: "",
    description: "",
    poster_url: "",
    average_rating: 5,
    total_ratings: 5,
    genre: "",
  },
  searchKey: "",
};

export const movieSlice = createSlice({
  name: UpdateMovieAction,
  initialState: initialState,
  reducers: {
    showMovie: (state, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movieList = action.payload;
    },
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
  },
});

export const { showMovie, setMovies, setSearchKey } = movieSlice.actions;
export default movieSlice.reducer;

import * as reduxTypes from "../common/Interfaces";
import { axiosGet, axiosPost } from "../util/axios.util";

export const insertMovie = (movie: reduxTypes.Movie) =>
  axiosPost("movie", { ...movie });

export const removeMovie = (movie: reduxTypes.Movie) =>
  axiosPost("movie", { ...movie });

export const getMovies = () => axiosGet("movies", {});

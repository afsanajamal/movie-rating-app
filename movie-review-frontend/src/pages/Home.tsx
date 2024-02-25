import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Col, Row } from "antd";
// import { useSelector, shallowEqual, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { Movie } from "../common/Interfaces";
import { getMovies } from "../store/actions";
import { RootState } from "../store/config";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../store/movieSlice";

import "./styles/Home.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const movieList: Movie[] = useSelector(
    (state: RootState) => state.movie.movieList
  );
  const movieSearch: string = useSelector(
    (state: RootState) => state.movie.searchKey
  );
  const [movieData, setMovieData] = useState<Movie[]>([]);

  const filterMovies = (dataList: Movie[], key: string) => {
    console.log("check the type of data", dataList);
    return dataList.filter((data: Movie) => data.title.includes(key));
  };

  useEffect(() => {
    if (!movieList.length) {
      const fetchMovieList = getMovies();
      fetchMovieList.then((res: any) => {
        setMovieData(res.data.data);
        dispatch(setMovies(res.data.data));
      });
    } else {
      setMovieData(movieList);
    }
  }, []);
  return (
    <>
      <div className="">
        <Header />
        <main>
          <div className="notification grid place-items-center duration-300 ">
            <div className="flex items-center justify-center m-[20px] mx-[30px] rounded-lg bg-[#1e293b] w-[350px] h-[35px]">
              <h4 className="">Your favourite movies</h4>
            </div>
          </div>
          <Row className="p-16">
            {movieData &&
              filterMovies(movieData, movieSearch).map((movie: Movie) => (
                <>
                  <Col xs={24} md={12} lg={8} xl={4}>
                    <MovieCard movieData={movie} />
                  </Col>
                </>
              ))}
          </Row>
        </main>
        <footer className="bg-[#333e4d] w-full h-[50px] top-[2550px] bottom-0 left-0 right-0 md:top-[1950px] lg:top-[1670px] xl:top-[1540px] 2xl:top-[1140px] duration-300">
          <p className="text-center m-4 text-sm">
            {" "}
            Copyright <span className="text-[#b5d2ff]">Movie rating</span>
          </p>
          <div className="bg-[#1e293b] w-full h-[30px] -mt-2 text-center text-sm">
            <p className="p-1">Designed by Mumu</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Home;

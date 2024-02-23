import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Rating from "../components/Rating";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../common/helper";
import { RootState } from "../store/config";
import { getMovies } from "../store/actions";
import { useParams } from "react-router-dom";
import { setMovies } from "../store/movieSlice";
import { Movie } from "../common/Interfaces";
import "./styles/Home.css";

const MoviePage: React.FC = () => {
  const { id } = useParams<String | any>();
  const dispatch = useDispatch();
  const movieList: Movie[] = useSelector(
    (state: RootState) => state.movie.movieList
  );

  const movie = movieList.find((movie) => movie.movie_id == (id as string));

  useEffect(() => {
    if (!movieList.length) {
      const fetchMovieList = getMovies();
      fetchMovieList.then((res: any) => {
        dispatch(setMovies(res.data.data));
      });
    }
  }, []);
  const tagColor: any = {
    drama: "bg-blue-200",
    action: "bg-red-200",
    comedy: "bg-yellow-200",
  };

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
          {movie && (
            <Row className="py-16 px-24">
              <Col span={24}>
                <Row>
                  <Col span={8}>
                    <img src={getImage(movie.poster_url)} />
                  </Col>
                  <Col span={16}>
                    <div className="w-3/4">
                      <h4 className="text-4xl m-4 text-left">{movie.title}</h4>
                      <p className="text-2xl text-left my-4 p-2 w-[300px] rounded">
                        <Rating
                          average_rating={movie.average_rating}
                          ratingCount={movie.total_ratings}
                        />
                      </p>
                      <div className="block text-left ml-8">
                        <span
                          className={`${
                            tagColor[JSON.parse(movie.genre)[0]]
                          } text-black text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}
                        >
                          {JSON.parse(movie.genre)[0]}
                        </span>
                        <p className="border border-blue-100 p-8 mt-8 rounded text-lg">
                          {movie.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </main>
        <footer className="bg-[#333e4d] w-full h-[50px] top-[2550px] bottom-0 left-0 right-0 md:top-[1950px] lg:top-[1670px] xl:top-[1540px] 2xl:top-[1140px] duration-300">
          <p className="text-center m-4 text-sm">
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
export default MoviePage;

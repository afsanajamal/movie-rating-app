import React from "react";
import { Row, Col } from "antd";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { getImage } from "../common/helper";
import { Movie, MovieProps } from "../common/Interfaces";
import { useDispatch } from "react-redux";
import { showMovie } from "../store/movieSlice";
import Rating from "./Rating";

const MovieCard: React.FC<MovieProps> = ({ movieData }: MovieProps) => {
  const dispatch = useDispatch();
  const setImage = (movieData: Movie) => {
    dispatch(showMovie(movieData));
  };
  return (
    <>
      <div className="p-4">
        <div className="p-2 bg-black rounded-lg outline outline-[#80b1ff]">
          <Link to={`/movie/${movieData.movie_id}`}>
            <img
              onClick={() => {
                setImage(movieData);
              }}
              className="shadow-[0_0_10px_3px_#80b1ff] rounded-lg mb-2"
              src={movieData.poster_url}
              alt="post2"
            />
          </Link>
          <Row>
            {/* <Col span={3}></Col> */}
            <Col span={20} className="flex">
              <FaHeart size={24} className="block mx-auto mt-3" />
              <p className="text-xl my-2">{movieData.title.substring(0, 15)}</p>
            </Col>
          </Row>
          <Rating
            average_rating={movieData.average_rating}
            ratingCount={movieData.total_ratings}
          />
          <p className="text-sm">{movieData.description.substring(0, 60)}...</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

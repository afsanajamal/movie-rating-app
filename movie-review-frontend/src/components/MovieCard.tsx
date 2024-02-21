import React from "react";
import { Row, Col } from "antd";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MovieProps } from "../common/Interfaces";
import Rating from "./Rating";

const MovieCard: React.FC<MovieProps> = ({ movieData }: MovieProps) => {
  return (
    <>
      <div className="p-4">
        <div className="p-2 bg-black rounded-lg outline outline-[#80b1ff]">
          <Link to={`/movie/${movieData.id}`}>
            <img
              className="shadow-[0_0_10px_3px_#80b1ff] rounded-lg mb-2"
              src={movieData.imgSrc}
              alt="post2"
            />
          </Link>
          <Row>
            {/* <Col span={3}></Col> */}
            <Col span={20} className="flex">
              <FaHeart size={24} className="block mx-auto mt-3" />

              <p className="text-xl my-2">{movieData.title}</p>
            </Col>
          </Row>
          <Rating rating={3} ratingCount={14} />
          <p className="text-sm">
            sdfsdfd fasd fs d ffsadf df f df sdfasdfdsfsdsd fds f
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

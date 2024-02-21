import React, { useEffect } from "react";
// import axios from "axios";
import { Col, Row } from "antd";
import post1 from "../assets/images/post1.jpg";
// import post2 from "../assets/images/post2.jpg";
// import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
// import { MovieProps } from "../common/Interfaces";
// import "./Movie.css";
// import { Movie } from "../common/Interfaces";

import "./styles/Home.css";

// const baseURL = "http://127.0.0.1:8000";

const MoviePage: React.FC = () => {
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
          <Row className="py-16 px-24">
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <img src={post1} />
                </Col>
                <Col span={16}>
                  <div className="w-3/4">
                    <h4 className="text-4xl m-4 text-left">Avangersdsfasf</h4>
                    <p className="text-2xl text-left m-4 p-2 bg-blue-300 w-[300px] rounded">
                      {" "}
                      Title description
                    </p>
                    <div className="block text-left ml-8">
                      <span className="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Default
                      </span>
                      <span className="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        Red
                      </span>
                      <p className="border border-blue-100 p-8 mt-8 rounded text-lg">
                        One of the weapons Marvel used in its climb to
                        comic-book dominance was a willingness to invent new
                        characters at a dizzying speed. There are so many Marvel
                        universes, indeed, that some superheroes do not even
                        exist in one another's worlds, preventing gridlock. The
                        Avengers however do share the same time and space
                        continuum, although in recent years, they've been
                        treated in separate, single-superhero movies. One
                        assumes the idle Avengers follow the exploits of the
                        employed ones on the news. "The Avengers," much awaited
                        by Marvel comics fans, assembles all of the Avengers in
                        one film: Iron Man, Captain America, Thor, the Hulk, the
                        Black Widow and Hawkeye. This is like an all-star game,
                        or the chef's sampling menu at a fancy restaurant.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
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
export default MoviePage;

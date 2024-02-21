import React, { useEffect } from "react";
// import axios from "axios";
import { Col, Row } from "antd";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { Movie } from "../common/Interfaces";

import "./styles/Home.css";

// const baseURL = "http://127.0.0.1:8000";

const movieData: Movie[] = [
  {
    id: 1,
    imgSrc: post1,
    title: "Avengers Endgame",
    rating: 4,
    ratingGiven: 13,
  },
  {
    id: 2,
    imgSrc: post2,
    title: "Avengers Endgame",
    rating: 4.5,
    ratingGiven: 15,
  },
  {
    id: 3,
    imgSrc: post2,
    title: "Avengers Endgame",
    rating: 3,
    ratingGiven: 23,
  },
  {
    id: 4,
    imgSrc: post1,
    title: "Avengers Endgame",
    rating: 4.8,
    ratingGiven: 26,
  },
  {
    id: 5,
    imgSrc: post2,
    title: "Avengers Endgame",
    rating: 4.2,
    ratingGiven: 33,
  },
  {
    id: 6,
    imgSrc: post1,
    title: "Avengers Endgame",
    rating: 4,
    ratingGiven: 14,
  },
  {
    id: 7,
    imgSrc: post2,
    title: "Avengers Endgame",
    rating: 4.2,
    ratingGiven: 33,
  },
  {
    id: 8,
    imgSrc: post1,
    title: "Avengers Endgame",
    rating: 4,
    ratingGiven: 14,
  },
  {
    id: 9,
    imgSrc: post2,
    title: "Avengers Endgame",
    rating: 4.2,
    ratingGiven: 33,
  },
  {
    id: 10,
    imgSrc: post1,
    title: "Avengers Endgame",
    rating: 4,
    ratingGiven: 14,
  },
];

const Home: React.FC = () => {
  // const [test, setTest] = useState<string>('');
  useEffect(() => {
    // axios.get(`${baseURL}/api/test`).then(() => {
    //   // setTest(response.data);
    // });
  }, []);
  return (
    <>
      <div className="">
        <Header />
        <main>
          <div className="notification grid place-items-center duration-300 ">
            <div className="flex items-center justify-center m-[20px] mx-[30px] rounded-lg bg-[#1e293b] w-[350px] h-[35px]">
              {/* <span className="px-3 mx-2 text-sm rounded-full text-[#1e293b] bg-[#80b1ff]">Alert</span>
              <p>Boomark for future visit.</p>
              <span className="close-notif cursor-pointer text-[20px] mt-[8px] ml-[20px]" onClick={()=>{
                  console.log("check")
                }}>
                <i className="close-circle-outline"></i>
              </span> */}
              <h4 className="">Your favourite movies</h4>
            </div>
          </div>
          <Row className="p-16">
            {movieData &&
              movieData.map((movie: Movie) => (
                <>
                  <Col span={4}>
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

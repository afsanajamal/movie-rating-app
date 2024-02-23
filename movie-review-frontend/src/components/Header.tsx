import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchKey } from "../store/movieSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const searchItem: any = (event: any) => {
    console.log("check on search", event.target.value);
    const key: string = event.target.value;
    dispatch(setSearchKey(key));
  };
  return (
    <>
      <nav className="main-menu">
        <div className="expand-menu bg-[#333e4d] w-full h-[60px] md:flex md:h-[70px] md:justify-between md:items-center">
          <div className="flex justify-start">
            <span className="text-3xl py-3 cursor-pointer text-[#b5d2ff] mx-3 md:hidden block">
              <i
                className="menu-outline"
                onClick={() => {
                  console.log("check");
                }}
              ></i>
            </span>
            <span className="text-2xl py-3 font-extrabold text-[#b5d2ff] md:mx-8 md:text-left z-50">
              <Link to="/">Movie Ratings</Link>
            </span>
          </div>
          <form
            method="GET"
            className="mb-3 md:hidden -my-[50px] mx-3 float-right"
          >
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 w-[150px] text-sm text-white bg-[#1e293b] rounded-md pl-10 focus:outline-none focus:bg-[#202940] focus:text-white"
                placeholder="Search..."
                // autocomplete="off"
              />
            </div>
          </form>
          <div className="expand md:flex hidden top-[-400px]">
            <ul className="bg-[#333e4d] duration-300 md:h-[40px] h-[10px] text-center leading-[35px] md:inline-flex md:my-3">
              <li className="mx-3">
                <a className="text-md hover:text-lg" href="#">
                  Drama
                </a>
              </li>
              <li className="mx-3">
                <a className="text-md hover:text-lg" href="#">
                  Actions
                </a>
              </li>
              <li className="mx-3">
                <a className="text-md hover:text-lg" href="#">
                  Comedy
                </a>
              </li>
              <li className="mx-3">
                <a className="text-md hover:text-lg" href="#">
                  Favourite
                </a>
              </li>
              <li className="mx-3">
                <a className="text-md hover:text-lg" href="#">
                  Others
                </a>
              </li>
              <li className="mx-3">
                <form method="GET" className="mb-3 hidden md:flex">
                  <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      name="q"
                      className="py-2 w-[200px] text-sm text-white bg-[#1e293b] rounded-md pl-10 focus:outline-none focus:bg-[#202940] focus:text-white"
                      placeholder="Search..."
                      // autocomplete="off"
                      onInput={(e) => searchItem(e)}
                    />
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

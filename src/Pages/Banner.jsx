import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.Originals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  return (
    <header
      style={{
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
      className="text-white object-contain h-[810px] relative"
    >
      <div className="ml-[67px] pt-[140px] h-[190px] w-fit">
        
        <div className=" mt-[200px]">
        <h1 className="text-5xl font-extrabold pb-[0.3rem]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="w-[45rem] leading-[1.3] pt-4 text-[26px] max-w-[636px] h-[80px] font-normal font-sans">
          {truncate(movie?.overview, 150)}
        </h1>
          <button className=" mt-[55px] w-[175px] h-[62px] cursor-pointer text-black text-[22px]  leading-7 outline-none border-none font-bold rounded-[0.2vw] px-8 mr-4 py-4 bg-[#FFFFFF]  hover:text-white hover:bg-[#333333] duration-200">
            Play
          </button>
          <button className="w-[276px] h-[62px] cursor-pointer text-white text-[22px]  leading-7 outline-none border-none font-bold rounded-[0.2vw] px-8 py-4 bg-[#333333] bg-opacity-50 hover:text-black hover:bg-[#e6e6e6] duration-200">
            My List
          </button>
        </div>
      </div>
      {/* <div className="w-52 h-3"></div> */}
    </header>
  );
};

export default Banner;
// .fadeout{
//   height: 7.4rem;
//   background-image: linear-gradiant(
//       180deg,
//       transparent,
//       rgba(37, 37, 37, 0.61),
//       #141414
//   );
// };

import axios from "../axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "398",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="overflow-visible">
      <h1 className="text-white text-3xl ml-3">{title}</h1>
      <div
        className={`flex space-x-[5px] w-full  overflow-x-scroll p-4 pb-[25px] pl-4 scrollbar scrollbar-track-transparent hover:scrollbar-thumb-netflixRed ${
          title === "NETFLIX SPECIALS" && "-space-x-4 -ml-8"
        }`}
      >
        {movies.map((movie) => (
          <>
            {title === "NETFLIX SPECIALS" && (
              <img
                src={require("../Assets/Nlogo.png")}
                className="relative h-11 left-6 top-3 object-contain z-20 m-0 p-0 inline-block"
                alt=""
              />
            )}
            <img
              key={movie.id}
              src={
                title === "NETFLIX SPECIALS"
                  ? `${base_url}${movie.poster_path}`
                  : `${base_url}${movie.backdrop_path}`
              }
              alt={movie.original_title}
              className={`duration-[400ms] cursor-pointer object-contain ${
                title === "NETFLIX SPECIALS"
                  ? "h-[400px] hover:scale-[1.05] hover:z-10 inline-block"
                  : "h-44 hover:scale-110 hover:z-10"
              }`}
              onClick={() => handleClick(movie)}
            />
          </>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

import React from "react";
import requests from "../requests";
import Banner from "./Banner";
import Row from "./Row";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="absolute z-30 top-[607px] ml-[60px]">
        <Row title="Upcomming" fetchUrl={requests.upcomming} />
        <Row title="Trending Now" fetchUrl={requests.popular} />
        <Row title="NETFLIX SPECIALS" fetchUrl={requests.Originals} />
        <Row title="Mystery Movies" fetchUrl={requests.Mystery} />
        <Row title="Action Movies" fetchUrl={requests.Action} />
        <Row title="Thriller Movies" fetchUrl={requests.Thriller} />
        <Row title="History Movies" fetchUrl={requests.History} />
        <Row title="Animation Movies" fetchUrl={requests.Animation} />
      </div>
    </>
  );
};

export default Home;

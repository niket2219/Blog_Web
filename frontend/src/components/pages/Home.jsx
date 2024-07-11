import React, { useContext, useState } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import HeroSection from "../miniComponents/HeroSection";
import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
import { Context } from "../../main";
import Counters from "../miniComponents/Counters";
import Marqu from "../miniComponents/Marqu";
import MainBar from "../layout/MainBar";
import Services from "../miniComponents/Services";

const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);
  const marqueestyle = {
    color: "white",
    width: "80%",
    margin: "auto",
  };

  return (
    <>
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        {/* <HeroSection /> */}
        <Marqu />
        <MainBar />
        <Services />
        <Counters />
        <TrendingBlogs />
        <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
        <PopularAuthors />
      </article>
    </>
  );
};

export default Home;

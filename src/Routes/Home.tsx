import { Outlet } from "react-router-dom";
import {
  Banner,
  Box,
  BoxsContainer,
  HomeMain,
  Loader,
  MetaBanner,
  Row,
  Slider,
  SliderImage,
} from "../Components/component";

import React, { useEffect } from "react";
import { getMovieDefault } from "../api";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IApiMovieDefault } from "../Types";
import { makeImagePath } from "../util";
import Sliders from "../Components/Slider";

function Home() {
  const { isPending, error, data } = useQuery<IApiMovieDefault>({
    queryKey: ["getMovie", "nowPlaying"],
    queryFn: () => getMovieDefault("movie/now_playing"),
  });

  console.log(data);

  return (
    <HomeMain className="Home">
      {isPending && <Loader>loading ...</Loader>}
      <Banner className="top-banner" $bgImage={data?.results[0].backdrop_path}>
        <MetaBanner>
          <h2 className="title">{data?.results[0].title}</h2>
          <p className="overview">{data?.results[0].overview}</p>
        </MetaBanner>
      </Banner>

      <Sliders data={data} />

      <Outlet></Outlet>
      <ReactQueryDevtools initialIsOpen={false} />
    </HomeMain>
  );
}

export default Home;

import { Outlet, useMatch, useNavigate, useParams } from "react-router-dom";
import {
  Banner,
  Box,
  BoxsContainer,
  HomeMain,
  ImgBox,
  Loader,
  MetaBanner,
  ModalBox,
  ModalOverlay,
  Row,
  Slider,
  SliderImage,
} from "../Components/component";

import React, { useEffect, useState } from "react";
import { getMovieDefault } from "../api";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IApiMovieDefault } from "../Types";
import { makeImagePath } from "../util";
import Sliders from "../Components/Slider";
import { AnimatePresence } from "framer-motion";

function Home() {
  const { isPending, error, data } = useQuery<IApiMovieDefault>({
    queryKey: ["getMovie", "nowPlaying"],
    queryFn: () => getMovieDefault("movie/now_playing"),
  });

  // console.log(data);
  const navigate = useNavigate();
  const match = useMatch("/browse/modal/:id");

  const DataForMovieModal1 =
    match?.params.id &&
    data?.results.find((element) =>
      !match.params.id
        ? false
        : String(element.id) === match.params.id
        ? true
        : false
    );
  // console.log("DataForMovieModal1", DataForMovieModal1);

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

      <AnimatePresence>
        {match ? (
          <ModalOverlay
            onClick={() => navigate("/browse")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalBox layoutId={match?.params.id}>
              {DataForMovieModal1 && (
                <>
                  <ImgBox
                    className="modal__main-banner"
                    $src={makeImagePath(DataForMovieModal1.poster_path, "400")}
                  >
                    <h1 className="modal__title">{DataForMovieModal1.title}</h1>
                  </ImgBox>
                  <p className="modal__overview">
                    {DataForMovieModal1.overview}
                  </p>
                </>
              )}
            </ModalBox>
          </ModalOverlay>
        ) : null}
      </AnimatePresence>

      {/* <Outlet /> */}
    </HomeMain>
  );
}

export default Home;

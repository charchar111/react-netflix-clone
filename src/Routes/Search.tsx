import {
  Outlet,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
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

export default function Search() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("keyword"));

  return (
    <HomeMain className="Home">
      검색 결과 기능은 아직 구현되지 않았습니다.
    </HomeMain>
  );
}

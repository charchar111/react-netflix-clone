import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Headers from "../Components/Header";
import { useRecoilState } from "recoil";
import { searchOpenAtom } from "../atom";

import { useEffect } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Root() {
  const [searchOpen, setSearchOpen] = useRecoilState(searchOpenAtom);
  console.log("home", process.env.PUBLIC_URL);
  const body = document.body;

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(pathname, process.env.PUBLIC_URL);
    if (pathname === `${process.env.PUBLIC_URL}`) navigate("browse");
  }, [pathname, navigate]);

  useEffect(() => {
    const handleSearchOpenState = function (event: MouseEvent) {
      const searchBar = document.getElementById("header__search-bar");
      const searchIcon = document.getElementById("header__search-icon");

      if (
        searchOpen &&
        event.target !== searchBar &&
        event.target !== searchIcon
      ) {
        setSearchOpen(false);
      }
    };

    body.addEventListener("click", handleSearchOpenState);
    //  바디 클릭 시. 서치바 닫음

    return () => body.removeEventListener("click", handleSearchOpenState);
  }, [setSearchOpen, searchOpen, body]);

  return (
    <div className="Root">
      <Headers></Headers>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default Root;

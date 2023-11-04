import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Headers from "../Components/Header";
import { useRecoilState } from "recoil";
import { searchOpenAtom } from "../atom";

import { useEffect } from "react";

function Root() {
  const [searchOpen, setSearchOpen] = useRecoilState(searchOpenAtom);

  const body = document.body;

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") navigate("/browse");
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
    </div>
  );
}

export default Root;

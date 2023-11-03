import { Link, useLocation, useMatch, useParams } from "react-router-dom";
import { Btn, Circle, Header, Nav, SearchBar, Svg } from "./component";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { headerVariant, logoVariants, searchBarVariant } from "../variants";

import { useRecoilState } from "recoil";
import { searchOpenAtom } from "../atom";
import { useEffect } from "react";

function Headers() {
  const pathname = useLocation().pathname;
  const [searchOpen, setSearchOpen] = useRecoilState(searchOpenAtom);
  const inputAnimation = useAnimation();
  const headerAnimation = useAnimation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (event) => {
    if (event > 40) {
      headerAnimation.start("scrollDown");
    } else {
      headerAnimation.start("top");
    }
  });

  // 방법1
  // const toggleSearchBar = function () {
  //   setSearchOpen((current) => !current);
  // };

  // 방법2
  const toggleSearchBar = function () {
    setSearchOpen((current) => !current);
  };

  const handler1 = function () {
    if (!searchOpen) {
      inputAnimation.start({
        opacity: 0,
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        opacity: 1,
        scaleX: 1,
        transition: {
          type: "tween",
        },
      });
    }
  };

  useEffect(handler1, [searchOpen]);

  return (
    <Header variants={headerVariant} animate={headerAnimation}>
      <Nav>
        <ul>
          <div className="header-ul__column1">
            <li className="svg-logo">
              <Link className="svg" to="/browse">
                <Svg
                  variants={logoVariants}
                  whileHover="active"
                  initial="normal"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-153.6 -69.1855 1331.2 415.113"
                >
                  <motion.path
                    fill="#d81f26"
                    d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"
                  />
                </Svg>
              </Link>
            </li>
            <li>
              <Link to="/browse">홈</Link>
              {pathname == "/browse" ? (
                <Circle layoutId="header-circle" />
              ) : null}
            </li>
            <li>
              <Link to="/browse/genre/83">시리즈</Link>
              {pathname == "/browse/genre/83" ? (
                <Circle layoutId="header-circle" />
              ) : null}
            </li>
            <li>
              <Link to="/browse/genre/34399">영화</Link>
              {pathname == "/browse/genre/34399" ? (
                <Circle layoutId="header-circle" />
              ) : null}
            </li>
            <li>
              <Link to="/latest">NEW! 요즘 대세 콘텐츠</Link>
              {pathname == "/latest" ? (
                <Circle layoutId="header-circle" />
              ) : null}
            </li>
            <li>
              <Link to="/browse/my-list">내가 찜한 리스트</Link>
              {pathname == "/browse/my-list" ? (
                <Circle layoutId="header-circle" />
              ) : null}
            </li>
            <li>
              <Link to="/browse/genre/original-audio">언어별로 찾아보기</Link>
              {pathname == "/browse/genre/original-audio" ? (
                <Circle layoutId="header-circle" />
              ) : null}
            </li>
          </div>
          <div className="header-ul__column2">
            <li className="search-bar">
              <SearchBar
                animate={inputAnimation}
                id="header__search-bar"
                variants={searchBarVariant}
                // custom={searchOpen}
                initial="initial"
                // animate="animate"
                placeholder="search for content"
              />

              <Btn
                className="searchBar-btn"
                variants={searchBarVariant}
                custom={searchOpen}
                animate="animateIcon"
                onClick={toggleSearchBar}
              >
                <i
                  id="header__search-icon"
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </Btn>
            </li>
            <li>
              <button>키즈</button>
            </li>
            <li>
              <button>
                <i className="fa-regular fa-bell"></i>
              </button>
            </li>
            <li>
              <div>
                <img src="" alt="" />
                <i className="fa-solid fa-user"></i>
                <span>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
              </div>
            </li>
          </div>
        </ul>
      </Nav>
    </Header>
  );
}

export default Headers;

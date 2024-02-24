import { useAnimation } from "framer-motion";
import { searchBarVariant } from "../variants";
import { Btn, SearchBar, SearchForm } from "./component";
import { useRecoilState } from "recoil";
import { searchOpenAtom } from "../atom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IHeaderSearchForm } from "../Types";
import { useNavigate } from "react-router-dom";

export default function HeaderSearchForm() {
  const inputAnimation = useAnimation();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useRecoilState(searchOpenAtom);
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

  const { register, handleSubmit } = useForm<IHeaderSearchForm>();

  useEffect(handler1, [searchOpen]);

  const onValid = function (data: IHeaderSearchForm) {
    console.log(data);
    navigate(`${process.env.PUBLIC_URL}/search?keyword=${data.keyword}`);
  };
  const onInValid = function () {};

  return (
    <SearchForm onSubmit={handleSubmit(onValid, onInValid)}>
      <SearchBar
        {...register("keyword", { required: true, minLength: 2 })}
        animate={inputAnimation}
        id="header__search-bar"
        variants={searchBarVariant}
        // custom={searchOpen}
        initial="initial"
        // animate="animate"
        placeholder="search for content"
      />
      <Btn
        type="button"
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
    </SearchForm>
  );
}

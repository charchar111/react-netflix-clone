import { motion } from "framer-motion";
import styled from "styled-components";
import { makeImagePath } from "../util";

export const Circle = styled(motion.div)`
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColors.primary};
`;

export const Nav = styled(motion.nav)``;

export const Header = styled(motion.header)`
  background-color: transparent;
  position: fixed;
  width: 100%;
  font-size: 1.5rem;
  top: 0;

  nav {
    background-image: linear-gradient(
      180deg,
      rgba(20, 20, 20, 0.7) 10%,
      transparent
    );
    height: 68px;
  }
  ul {
    padding: 0 4vw;
    display: flex;
    justify-content: space-between;
    height: 100%;

    .header-ul__column1,
    .header-ul__column2 {
      display: flex;
      align-items: center;
      height: 100%;

      li.search-bar {
        display: flex;
        align-items: center;
      }
      li {
        position: relative;
        margin-left: 18px;
        position: relative;
        ${Circle} {
          margin: 0 auto;
          margin-top: 10px;
          left: 0;
          right: 0;
        }

        .searchBar-btn {
          position: absolute;
          left: 90%;
        }
      }
      li.svg-logo {
        margin: 0;
        margin-left: -14px;
        a.svg {
          display: block;
          height: 100%;
          svg {
            max-height: 40px;
            height: 4vw;
            min-height: 30px;
          }
        }
      }
    }
  }
`;

export const Svg = styled(motion.svg)``;

export const SearchBar = styled(motion.input)`
  background-color: ${(props) => props.theme.bgColors.background};
  border: 2px solid ${(props) => props.theme.borderColors.background};
  transform-origin: right;
  padding: 5px;
  padding-left: 25px;
  color: ${(props) => props.theme.textColors.background};
`;

export const Btn = styled(motion.button)``;

export const HomeMain = styled.main`
  /* overflow-x: hidden; */
  /* overflow: hidden; */
`;

export const Loader = styled.section`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div<{ $bgImage: string | undefined }>`
  background-image: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7)),
    ${(props) =>
      `url(${props.$bgImage ? makeImagePath(props.$bgImage) : "none"})`};
  background-size: cover;
  height: 70vh;
  display: flex;
  align-items: center;
`;

export const MetaBanner = styled.div`
  width: 30%;
  padding-left: 20px;
  h2.title {
    font-size: 2em;
    font-weight: 600;
    letter-spacing: 0.5em;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  p.overview {
    line-height: 1.2;
  }
`;

export const Slider = styled.div`
  margin-top: -20px;
`;

export const Row = styled(motion.div)`
  position: relative;
  overflow: hidden;
  padding: 7vw 0;
  height: 25vw;
`;

export const BoxsContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
`;

export const Box = styled(motion.div)`
  cursor: pointer;

  overflow: hidden;
  border-radius: 10px;
  height: fit-content;

  &:first-of-type {
    transform-origin: center left;
  }

  &:last-of-type {
    transform-origin: center right;
  }
`;

export const SliderImage = styled.img`
  max-width: 100%;
  position: relative;
`;

export const SlideBtn = styled(motion.button)`
  position: absolute;
  z-index: 3;
  height: 100%;
  top: 50%;
  font-size: 5rem;
  transform: translateY(-50%);

  padding: 0 1%;
  &.SlideBtn-left {
    left: 0;
    transform-origin: left top;
    /* background-image(); */
  }

  &.SlideBtn-right {
    right: 0;
    transform-origin: right top;
    text-align: right;
  }
`;

export const Info = styled(motion.div)`
  padding: 10px 10px 20px;

  background-color: ${(props) => props.theme.bgColors.modal};
  opacity: 0;
  /* opacity: 1; */
  /* 테스트ㅇ용 임시 설정 */

  h4 {
    text-align: center;
    font-size: 17px;
  }
`;

export const ModalOverlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled(motion.div)`
  width: 40%;
  min-width: 340px;
  border-radius: 15px;

  background-color: ${(props) => props.theme.bgColors.modal};
  padding: 10px;
  box-sizing: border-box;
  .modal__title {
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 90%;
    left: 10%;
  }

  .modal__overview {
  }
`;

export const ImgBox = styled.div<{ $src: string | undefined }>`
  width: 80%;
  min-width: 320px;
  height: 70vh;
  background-size: cover;
  background-position: center;
  position: relative;

  margin: 0 auto;
  margin-bottom: 20px;
  background-image: ${(props) =>
    `linear-gradient(transparent 40%, rgba(20,20,20,1)),url(${props.$src})`};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

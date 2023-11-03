import { AnimatePresence, useAnimate, useAnimation } from "framer-motion";
import { IApiMovieDefault } from "../Types";
import { makeImagePath } from "../util";
import {
  Box,
  BoxsContainer,
  Row,
  SlideBtn,
  Slider,
  SliderImage,
} from "./component";
import { useState } from "react";
import { sliderBtnVariant, sliderVariant } from "../variants";

export default function Sliders({
  data,
}: {
  data: IApiMovieDefault | undefined;
}) {
  const [isHoverSlider, setIsHoverSlider] = useState(false);
  const [sliderInitialItem, setSliderInitialItem] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  console.log("slider");
  console.log(sliderInitialItem);
  const onMouseEnterRow = function () {
    setIsHoverSlider(true);
  };

  const onMouseEnterLeave = function () {
    setIsHoverSlider(false);
  };

  const onClickSliderElement = function (
    event: React.MouseEvent<HTMLDivElement>
  ) {
    console.log(event);
  };

  const onClickSliderNextBtn = function (
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    setSlideDirection("left");
    setSliderInitialItem((current) => {
      const newCurrent = current + 7;
      if (newCurrent > 20) return 14;
      return newCurrent;
    });
  };

  const onClickSliderPrevtBtn = function (
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    setSlideDirection("right");
    setSliderInitialItem((current) => {
      const newCurrent = current - 7;
      if (newCurrent < 0) return 0;
      return newCurrent;
    });
  };

  return (
    <Slider className="slider">
      <Row
        onMouseEnter={onMouseEnterRow}
        onMouseLeave={onMouseEnterLeave}
        className="row"
      >
        {isHoverSlider && (
          <>
            <SlideBtn
              onClick={onClickSliderPrevtBtn}
              variants={sliderBtnVariant}
              initial="initial"
              whileHover="animate"
              className="SlideBtn-left"
            >
              <span className="angle">
                <i className="fa-solid fa-angle-left"></i>
              </span>
            </SlideBtn>
            <SlideBtn
              onClick={onClickSliderNextBtn}
              variants={sliderBtnVariant}
              initial="initial"
              whileHover="animate"
              className="SlideBtn-right"
            >
              <span className="angle">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </SlideBtn>
          </>
        )}

        <BoxsContainer className="row-wrapper">
          <AnimatePresence initial={false} custom={slideDirection} mode="wait">
            {data?.results.map(
              (element, index) =>
                index >= sliderInitialItem &&
                index < sliderInitialItem + 13 && (
                  <Box
                    variants={sliderVariant}
                    custom={slideDirection}
                    // initial="enter"
                    // animate="place"
                    exit="exit"
                    key={index}
                    onClick={onClickSliderElement}
                    className={`row-item${index}`}
                  >
                    <SliderImage
                      src={makeImagePath(element.poster_path, "300")}
                      alt=""
                    />
                  </Box>
                )
            )}
          </AnimatePresence>
        </BoxsContainer>
      </Row>
    </Slider>
  );
}

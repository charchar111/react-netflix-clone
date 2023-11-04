import {
  AnimatePresence,
  animate,
  useAnimate,
  useAnimation,
} from "framer-motion";
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

const OFFSET = 6;

export default function Sliders({
  data,
}: {
  data: IApiMovieDefault | undefined;
}) {
  const [disableSlide, setDisableSlide] = useState(false);
  const [sliderInitialItem, setSliderInitialItem] = useState(0);
  const [isHoverSlider, setIsHoverSlider] = useState(false);
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
    if (!data) return;
    if (disableSlide) return;
    setSlideDirection("left");
    const maxIndex = Math.floor((data.results.length - 1) / OFFSET) - 1;
    setDisableSlide(true);
    setSliderInitialItem((current) => (maxIndex === current ? 0 : current + 1));
  };

  const onClickSliderPrevtBtn = function (
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    if (!data) return;
    if (disableSlide) return;
    setSlideDirection("right");
    const maxIndex = Math.floor((data.results.length - 1) / OFFSET) - 1;
    setDisableSlide(true);
    setSliderInitialItem((current) => (maxIndex === current ? 0 : current + 1));
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

        <AnimatePresence
          custom={slideDirection}
          onExitComplete={() => setDisableSlide(false)}
          initial={false}
        >
          <BoxsContainer
            key={sliderInitialItem}
            className="row-wrapper"
            variants={sliderVariant}
            custom={slideDirection}
            initial="enter"
            animate="place"
            exit="exit"
            transition={{ duration: 0.5, type: "tween" }}
          >
            {data?.results
              .slice(1)
              .slice(OFFSET * sliderInitialItem, OFFSET * sliderInitialItem + 6)
              .map((element, index) => (
                <Box
                  whileHover={{
                    scale: 1.3,
                    y: -30,
                    zIndex: 2,
                    transition: { duration: 0.2, delay: 0.5, type: "tween" },
                  }}
                  key={element.id}
                >
                  <SliderImage
                    src={makeImagePath(element.poster_path, "300")}
                  />
                </Box>
              ))}
          </BoxsContainer>
        </AnimatePresence>
      </Row>
    </Slider>
  );
}

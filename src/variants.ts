// header component
export const logoVariants = {
  normal: { fillOpacity: 1, stroke: "transparent", strokeWidth: 0 },
  active: {
    fillOpacity: 0,
    stroke: "white",
    strokeWidth: 3,
    transition: {
      duration: 0.5,
    },
  },
};

export const searchBarVariant = {
  initial: (searchOpen: boolean) => ({
    scaleX: 0,
    opacity: 0,
  }),
  animate: (searchOpen: boolean) => ({
    scaleX: searchOpen ? 1 : 0,
    opacity: searchOpen ? 1 : 0,
    transition: {
      type: "tween",
    },
  }),

  initialIcon: (searchOpen: boolean) => ({ x: "90%" }),
  animateIcon: (searchOpen: boolean) => ({
    left: searchOpen ? "3%" : "",
    transition: {},
  }),
};

export const headerVariant = {
  top: {
    backgroundColor: "rgba(20,20,20,0)",
    transition: { duration: 0.3 },
  },
  scrollDown: {
    backgroundColor: "rgba(20,20,20,1)",
    transition: { duration: 0.3 },
  },
};

// home component

export const sliderVariant = {
  enter: (slideDirection: string) => ({
    x:
      slideDirection === "left"
        ? window.innerWidth - 10
        : -window.innerWidth + 10,
  }),
  place: {
    x: 0,
  },
  exit: (slideDirection: string) => ({
    x:
      slideDirection === "left"
        ? -window.innerWidth + 10
        : window.innerWidth - 10,
  }),
};

export const sliderBtnVariant = {
  initial: {
    backgroundColor: "rgba(0,0,0,0)",
    transform: "scaleX(1) translateY(-50%)",
  },
  animate: {
    backgroundColor: "rgba(0,0,0,0.4)",
    transform: "scaleX(1.1) translateY(-50%)",
  },
};

export const sliderBoxVariant = {
  whileHover: {
    scale: 1.3,
    y: -30,
    zIndex: 2,
    transition: { duration: 0.2, delay: 0.5, type: "tween" },
  },
};

export const sliderInfoVariant = {
  whileHover: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.5, type: "tween" },
  },
};

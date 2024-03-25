export const slideup = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.5, delay: i * 0.03 },
  }),
  exit: {
    opacity: 0,
    y: "100%",
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    transition: { duration: 1, delay: i * 0.04 },
  }),
  exit: {
    opacity: 0,
  },
};


export const scaleAnimations = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
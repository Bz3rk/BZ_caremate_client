
export const slideUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
export const slideDown = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
export const slideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
export const slideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
export const dotLoader = (delay) => {
  return {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        delay: delay,
      },
    },
  };
};

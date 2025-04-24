global.requestAnimationFrame = global.requestAnimationFrame || function raf(cb) {
  return setTimeout(cb, 0);
};

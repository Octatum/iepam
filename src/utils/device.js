export const breakpoints = {
  mobile: 640,
  tablet: 832,
  laptop: 1024,
  desktop: 2560,
};


/*
mobile: 764,
tablet: 1024,
laptop: 1440,
desktop: 2560,
*/

export const breakpointsList = Object.keys(breakpoints).map(
  key => `${breakpoints[key] / 16}em`
);

export const device = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakpoints[label] / 16;
  accumulator[label] = `@media (min-width: ${emSize}em)`;
  return accumulator;
}, {});

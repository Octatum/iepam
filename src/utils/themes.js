import styledComponentsRhythm from '@ceteio/styled-components-rhythm';

const rhythm = styledComponentsRhythm({
  baseFontSize: 1,
  rhythmHeight: 0.75,
  defaultLineHeight: 1.2,
  capHeights: {
    Roboto: 0.72,
  },
  debug: true,
});

const theme = {
  color: {
    light: 'white',
    dark: '#333',
    black: 'black',
    lightGray: '#C4C4C4',
    darkGray: '#6C6C6C',
    footer: '#D4D4D4',
  },
  font: {
    main: 'Roboto',
  },

  ...rhythm.theme,
};

export default theme;

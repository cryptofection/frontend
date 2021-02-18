import { alpha } from 'utils';

const colors = {
  modes: {
    light: {
      background: '#eff6ff',
      primary: '#ffffff',
      secondary: '#eff6ff',

      skeletonStart: alpha('black', 0.2),
      skeletonEnd: alpha('black', 0.05),
    },
    dark: {
      background: '#1d1d42',
      primary: '#141432',
      secondary: '#1b1a43',

      skeletonStart: alpha('white', 0.2),
      skeletonEnd: alpha('white', 0.05),
    },
  },
};

export default colors;

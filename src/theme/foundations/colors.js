import { alpha, lighten } from 'utils';

const colors = {
  modes: {
    light: {
      background: '#e2daf1',
      primary: '#ffffff',
      secondary: '#f4f1fa',



      action: '#3F51B5',

      success: '#4caf50',
      warning: '#ffc107',
      error: '#f44336',

      skeletonStart: alpha('black', 0.2),
      skeletonEnd: alpha('black', 0.05),
    },
    dark: {
      background: '#1d1d42',
      primary: '#141432',
      secondary: '#1b1a43',


      

      action: '#4e2ecf',

      success: lighten('#4caf50', 0.2),
      warning: lighten('#ffc107', 0.2),
      error: lighten('#f44336', 0.2),

      skeletonStart: alpha('white', 0.2),
      skeletonEnd: alpha('white', 0.05),
    },
  },
};

export default colors;

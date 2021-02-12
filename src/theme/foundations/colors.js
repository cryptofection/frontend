import { alpha, lighten } from 'utils';

const colors = {
  modes: {
    light: {
      background: '#CCC',

      primary: '#E8E8E8',
      primaryShade: '#E0E0E0',

      secondary: '#F2F2F2',
      secondaryShade: '#E8E8E8',

      action: '#3F51B5',

      success: '#4caf50',
      warning: '#ffc107',
      error: '#f44336',

      skeletonStart: alpha('black', 0.2),
      skeletonEnd: alpha('black', 0.05),
    },
    dark: {
      background: '#000',

      primary: '#1C1C21',
      primaryShade: '#212126',

      secondary: '#26262C',
      secondaryShade: '#34343C',

      action: '#F5B250',

      success: lighten('#4caf50', 0.2),
      warning: lighten('#ffc107', 0.2),
      error: lighten('#f44336', 0.2),

      skeletonStart: alpha('white', 0.2),
      skeletonEnd: alpha('white', 0.05),
    },
  },
};

export default colors;

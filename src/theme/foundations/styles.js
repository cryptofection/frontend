import { color } from 'utils';

const styles = {
  global: (props) => ({
    html: {
      fontSize: '62.5%',
    },
    body: {
      backgroundColor: color('background')(props),
      fontSize: '1.6rem',
      p: ['10px', '20px'],
      w: '100vw',
      h: '100vh',
      minH: '568px',
    },
    '#root': {
      w: '100%',
      h: '100%',
    },
    '::-webkit-scrollbar': {
      width: ['6px', '8px'],
      height: ['6px', '8px'],
      borderRadius: '100px',
      bgColor:
        props.colorMode === 'light'
          ? 'rgba(0, 0, 0, 0.1)'
          : 'rgba(255, 255, 255, 0.1)',
    },
    '::-webkit-scrollbar-thumb': {
      bgColor: props.colorMode === 'light' ? '#3f51b5' : '#F5B250',
      height: '6px',
      borderRadius: '100px',
    },
    '::-webkit-scrollbar-button': {
      width: 0,
      height: 0,
      display: 'none',
    },
    '::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },
  }),
};

export default styles;

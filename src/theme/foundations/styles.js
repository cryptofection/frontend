import { alpha, color } from 'utils';

const styles = {
  global: (props) => ({
    html: {
      fontSize: '62.5%',
    },
    body: {
      backgroundColor: color('background')(props),
      fontSize: '1.6rem',
      p: '20px',
      w: '100vw',
      h: '100vh',
      minH: '568px',
    },
    '#root': {
      w: '100%',
      h: '100%',
    },
    '::-webkit-scrollbar': {
      width: ['6px', '10px'],
      height: ['6px', '10px'],
    },
    '::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 6px ${alpha('black', props.colorMode ? 0.2 : 0.3)}`,
      borderRadius: 8,
    },
    '::-webkit-scrollbar-thumb': {
      bgColor: props.colorMode === 'light' ? '#3f51b5' : '#F5B250',
      outline: 'none',
      borderRadius: 8,
    },
  }),
};

export default styles;

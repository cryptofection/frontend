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
      width: '28px',
      height: '18px',
    },
    '::-webkit-scrollbar-thumb': {
      bgColor: props.colorMode === 'light' ? '#3f51b5' : '#F5B250',
      height: '6px',
      border: '10px solid rgba(0, 0, 0, 0)',
      backgroundClip: 'padding-box',
      '-webkit-border-radius': '200px',
      '-webkit-box-shadow':
        'inset -3px -3px 0px rgba(0, 0, 0, 0.05), inset 3px 3px 0px rgba(0, 0, 0, 0.05)',
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

const color = (colorName) => (props) => {
  const { colorMode } = props;
  const { modes } = props.theme.colors;

  return modes[colorMode][colorName];
};

export default color;

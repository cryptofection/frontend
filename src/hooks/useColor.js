import { useTheme, useColorMode } from '@chakra-ui/react';
import { alpha } from 'utils';

const useColor = () => {
  const theme = useTheme();
  const { colorMode: mode, toggleColorMode: toggle } = useColorMode();
  const { modes } = theme.colors;

  const color = (colorName, inverted = false) =>
    modes[!inverted ? mode : mode === 'light' ? 'dark' : 'light'][colorName];

  const pick = (lightPick, darkPick) =>
    mode === 'light' ? lightPick : darkPick;

  const pickAlpha = (lightAlpha, darkAlpha, inverted = false) =>
    inverted
      ? pick(alpha('white', lightAlpha), alpha('black', darkAlpha))
      : pick(alpha('black', lightAlpha), alpha('white', darkAlpha));

  return { mode, color, pick, pickAlpha, toggle };
};

export default useColor;

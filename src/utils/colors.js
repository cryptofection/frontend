import Color from 'color';

export const alpha = (color, alphaValue = 1) =>
  Color(color).alpha(alphaValue).rgb().string();

export const lighten = (color, value = 0, alphaValue = 1) =>
  alpha(Color(color).lighten(value).rgb().string(), alphaValue);

export const darken = (color, value = 0, alphaValue = 1) =>
  alpha(Color(color).darken(value).rgb().string(), alphaValue);

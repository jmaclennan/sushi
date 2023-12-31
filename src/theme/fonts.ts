const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = {
  sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
  heading: ['Jost', ...defaultTheme.fontFamily.sans],
  "heading-secondary": ['Chewy', ...defaultTheme.fontFamily.sans],
  scroll: ['Yatra One', ...defaultTheme.fontFamily.sans],
};

const fontSize = {
  xs: ['1rem', { lineHeight: '1rem' }],
  sm: ['1.2rem', { lineHeight: '1.6rem' }],
  base: ['1.35rem', { lineHeight: '1.85rem' }],
  lg: ['2rem', { lineHeight: '2.5rem' }],
  xl: ['2.75rem', { lineHeight: '3.125rem' }],
  '2xl': ['3.75rem', { lineHeight: '4.375rem' }],
  '3xl': ['4.5rem', { lineHeight: '5.625rem' }],
  '4xl': ['6rem', { lineHeight: '7.5rem' }],
  '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
};
const fonts = {
  fontFamily,
  fontSize,
};

exports.fonts = fonts;

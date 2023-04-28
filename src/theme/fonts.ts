const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = {
  sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
}

const fontSize = {
  xs: ['.75rem', { lineHeight: '1rem' }],
  sm: ['.875rem', { lineHeight: '1.25rem' }],
  base: ['1.125rem', { lineHeight: '1.5rem' }],
  lg: ['1.5rem', { lineHeight: '1.875rem' }],
  xl: ['2.5rem', { lineHeight: '3.125rem' }],
  '2xl': ['3.75rem', { lineHeight: '4.375rem' }],
  '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
}

const fonts = {
	fontFamily,
	fontSize,
}

exports.fonts = fonts;
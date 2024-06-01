const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: { colors: { redprimary: '#e30611', blueprimary: '#4b76ba' } },
    fontFamily: {
      arial: ['Arial'],
      sans: ['ui-sans-serif'],
    },
  },
  plugins: [require('tailwindcss-animated')],
};

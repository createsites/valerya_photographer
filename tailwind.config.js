const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  lineClamp: require("@tailwindcss/line-clamp"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    fontFamily: {
      'head': ['Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1050px',
    },
    // для расширения (добавление к уже существующим стилям)
    extend: {
      colors: {
        'deeppink': '#9b168b',
        'whitetext': '#fcfcfc',
      }
    },
  },
  plugins: plugins,
};

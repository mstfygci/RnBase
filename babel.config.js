module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['./src/utils/babel-plugin-transform-render-if'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};

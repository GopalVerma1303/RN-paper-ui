module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-paper/babel',
    [
      'module-resolver',
      {
        alias: {
          assets: './assets',
        },
      },
    ],
  ],
};

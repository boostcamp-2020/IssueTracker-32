module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 폴리필 사용 방식 지정
        corejs: {
          version: 3,
        },
      },
    ],
    '@babel/preset-react',
  ],
};

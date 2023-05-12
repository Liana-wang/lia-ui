module.exports = function (modules) {
  return {
    babelrc: false,
    presets: [
      [
        '@babel/preset-env', {
          modules,
          targets: {
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11'],
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-classes',
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: modules === false ? 'es' : 'lib',
          style: true,
        },
      ],
    ]
  }
}

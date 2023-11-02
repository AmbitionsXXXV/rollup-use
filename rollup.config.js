import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

module.exports = {
  // 打包入口
  input: './lib/index.js',
  // 出口
  // output: {
  //   format: 'umd',
  //   name: 'etcRollup',
  //   file: './dist/bundle.umd.js',
  // },
  external: ['lodash'],
  // 多出口
  output: [
    {
      format: 'umd',
      name: 'etcRollup',
      file: './build/bundle.umd.js',
      globals: {
        lodash: '_',
      },
    },
    {
      format: 'cjs',
      file: './build/bundle.cjs.js',
    },
    {
      format: 'amd',
      file: './build/bundle.amd.js',
    },
    {
      format: 'iife',
      name: 'etcIIFE',
      file: './build/bundle.browser.js',
      globals: {
        lodash: '_',
      },
    },
    {
      format: 'es',
      file: './build/bundle.js',
    },
    {
      format: 'es',
      file: './build/bundle.min.js',
      // plugins: [terser()],
    },
  ],
  plugins: [
    terser(),
    commonjs(),
    nodeResolve(),
    babel({ exclude: /node_modules/, babelHelpers: 'bundled' }),
  ],
}

import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'rollup'
import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'

export default [
  defineConfig({
    input: './packages/index.ts',
    output: [
      {
        exports: 'named',
        preserveModules: true,
        dir: 'dist/lib',
        format: 'cjs',
      },
      {
        exports: 'named',
        preserveModules: true,
        dir: 'dist/es',
        format: 'es',
      },
      {
        dir: 'dist/dist',
        preserveModules: false,
        format: 'es',
      },
    ],
    external: ['react', 'react-dom', '/node_modules/'],
    plugins: [
      del({ targets: 'dist/*' }),
      resolve(),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
      }),
      typescript({
        tsconfig: 'tsconfig.app.json',
        tslib: 'tslib',
      }),
      babel({
        babelHelpers: 'bundled',
        include: 'src/**',
        exclude: 'node_modules/**',
        extensions: ['.js', '.ts', 'jsx', 'tsx'],
      }),
      terser(),
      copy({
        targets: [
          { src: './package.json', dest: 'dist' },
          { src: 'LICENSE', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
        ],
      }),
    ],
  }),
]

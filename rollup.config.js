import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'rollup'
import babel from '@rollup/plugin-babel'

export default [
  defineConfig({
    input: './packages/index.ts',
    output: [
      {
        exports: 'named',
        dir: 'dist/lib',
        format: 'cjs',
      },
      {
        exports: 'named',
        dir: 'dist/es',
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
    ],
  }),
]

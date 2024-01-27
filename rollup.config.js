import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'rollup'
import babel from '@rollup/plugin-babel'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default [
  defineConfig({
    input: path.resolve(__dirname, './packages/index.ts'),
    output: [
      {
        exports: 'named',
        dir: path.resolve(__dirname, 'dist/lib'),
        format: 'cjs',
      },
      {
        exports: 'named',
        dir: path.resolve(__dirname, 'dist/es'),
        format: 'es',
      },
    ],
    external: ['react', 'react-dom', '/node_modules/'],
    plugins: [
      del({ targets: path.resolve(__dirname, 'dist/*') }),
      resolve(),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
      }),
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.app.json'),
        tslib: 'tslib',
      }),
      babel({
        babelHelpers: 'bundled',
        include: path.resolve(__dirname, 'packages/**'),
        exclude: path.resolve(__dirname, 'node_modules/**'),
        extensions: ['.js', '.ts', 'jsx', 'tsx'],
      }),
      terser(),
    ],
  }),
]

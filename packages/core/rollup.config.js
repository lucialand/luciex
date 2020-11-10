import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      name: 'Luciex',
      format: 'umd',
    },
    {
      file: 'dist/index.umd.min.js',
      name: 'Luciex',
      format: 'umd',
      plugins: [terser()],
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
    {
      file: 'dist/index.es.min.js',
      format: 'es',
      plugins: [terser()],
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.cjs.min.js',
      format: 'cjs',
      plugins: [terser()],
    },
  ],
  plugins: [typescript({ useTsconfigDeclarationDir: true })],
};

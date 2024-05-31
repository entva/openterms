import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';

const extensions = ['.js', '.ts'];

export default [
  {
    plugins: [
      del({ targets: 'lib/*' }),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      babel({ exclude: /node_modules/, babelHelpers: 'runtime' }),
      resolve({ browser: true, extensions }),
      commonjs({ extensions }),
    ],
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named', // Disable warning for default imports
      },
    ],
  },
];

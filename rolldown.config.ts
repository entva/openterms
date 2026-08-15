import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig([
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      dir: 'lib',
      entryFileNames: (chunk) => (chunk.name.endsWith('.d') ? 'index.d.ts' : 'index.esm.js'),
      format: 'es',
      sourcemap: true,
    },
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'lib',
      entryFileNames: 'index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named', // Disable warning for default imports
    },
  },
]);

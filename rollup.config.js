import sveltePreprocess from 'svelte-preprocess';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import fileSize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const prod = !process.env.ROLLUP_WATCH;
const dev = !prod;

function serve() {
  let server;

  function toExit() {
    if (server) {
      server.kill(0);
    }
  }

  return {
    writeBundle() {
      if (server) {
        return;
      }

      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        },
      );

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.ts',

  output: {
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },

  plugins: [
    svelte({
      preprocess: sveltePreprocess({ sourceMap: dev }),
      emitCss: false,
      compilerOptions: {
        dev: dev,
      },
    }),
    alias({
      resolve: ['.svelte', '.ts'],
      entries: [
        { find: '~components', replacement: './src/components' },
      ],
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    json(),
    dev && serve(),
    dev && livereload('public'),
    prod && terser(),
    prod &&
      fileSize({
        showMinifiedSize: true,
        showGzippedSize: true,
      }),
  ],

  watch: {
    clearScreen: false,
  },
};

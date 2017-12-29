import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import sass from 'node-sass';
import CleanCSS from 'clean-css';
import { minify as minifyHtml } from 'html-minifier';
import {nameLibrary,PATH_SRC,PATH_DIST} from './config-library.js';

const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};

export default {
  entry: PATH_SRC+nameLibrary+'.ts',
  format: 'umd',
  moduleName: nameLibrary,
  external: [
    '@angular/core',
    '@angular/common',
    "@angular/platform-browser",
    "rxjs/Rx",
    "@angular/forms"
  ],
  sourceMap:true,
  dest:PATH_DIST+nameLibrary+".umd.js",
  plugins: [
    angular(
      {
      preprocessors:{
        template: template => minifyHtml(template, htmlminOpts),
        style: scss => {
            const css = sass.renderSync({ 
              data: scss,
              includePaths: ['src/lib/styles/'],
            }).css;
            return cssmin.minify(css).styles;
        },
      }
    }
    ),
    typescript({
      typescript:require('typescript')
    }),
    resolve({
      module: true,
      main: true
    }),
     commonjs({
      include: 'node_modules/**',
     })
  ],
   onwarn: warning => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) != -1) return;
    console.error(warning);
  }
};
import path from 'path';
import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { svelteOutputTarget } from '@stencil/svelte-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import { generateJsonDocs } from './src/customElementDocGenerator';

export const config: Config = {
  // Stencil 1 defaults:
  // buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    shadowDomShim: true,
  },

  namespace: 'Bulmil',
  globalStyle: 'bulmil.scss',
  plugins: [
    sass({
      includePaths: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, '../../node_modules'),
      ],
      injectGlobalPaths: ['src/styles/main.scss'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@bulmil/core',
      proxiesFile: '../react/src/components.ts',
      loaderDir: 'dist/loader',
    }),

    angularOutputTarget({
      componentCorePackage: '@bulmil/core',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
    }),

    vueOutputTarget({
      componentCorePackage: '@bulmil/core',
      proxiesFile: '../vue/src/components.ts',
    }),

    svelteOutputTarget({
      accessors: true,
      componentCorePackage: '@bulmil/core',
      proxiesFile: '../svelte/src/proxies.ts',
    }),

    { type: 'dist' },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    { type: 'docs-readme', strict: true },
    {
      type: 'custom',
      generator: generateJsonDocs,
      name: 'custom-element-docs',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    emulate: [
      {
        userAgent: 'iPhone',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
      },
      {
        userAgent: 'Android',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
      },
    ],
  },
  preamble: 'Bulmil - MIT License',
};

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
        // paths serve as alias
        'npm:': '/node_modules/'
    },
    /* . . . */
    map: {
      // our app is within the app folder
        'app': 'app',
        /* . . . */
        '@angular/core': 'npm:@angular/core/fesm2022/core.mjs',
        '@angular/common': 'npm:@angular/common/fesm2022/common.mjs',
        '@angular/common/http': 'npm:@angular/common/fesm2022/http.mjs',
        '@angular/compiler': 'npm:@angular/compiler/fesm2022/compiler.mjs',
        '@angular/platform-browser': 'npm:@angular/platform-browser/fesm2022/platform-browser.mjs',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs',
        '@angular/router': 'npm:@angular/router/fesm2022/router.mjs',
        '@angular/router/upgrade': 'npm:@angular/router/fesm2022/upgrade.mjs',
        '@angular/forms': 'npm:@angular/forms/fesm2022/forms.mjs',
        'rxjs': 'node_modules/rxjs',
        'rxjs/operators': 'node_modules/rxjs/dist/mjs/operators',
        'tslib': 'npm:tslib/tslib.js',
        'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
        '@angular/upgrade/static': 'npm:@angular/upgrade/fesm2022/static.mjs',
        /* . . . */
    },
    transpiler: 'plugin-babel',
    /* . . . */
    packages: {
        /* . . . */
        // 'app': {
        //   main: 'main',
        //   defaultExtension: 'ts'
        // },
        // 'rxjs': {main: 'Rx'}
        app: {
          main: 'main.js',
          defaultExtension: 'ts',
          meta: {
            './*.js': {
              loader: 'systemjs-angular-loader.js'
            }
          }
        },
        'rxjs': {
          defaultExtension: 'js',
          format: 'mjs',
          main: 'main.js'
        },
        'rxjs/operators': {
          defaultExtension: 'js',
          format: 'mjs',
          main: 'main.js'
        },
        'meta': {
            '*.mjs': {
              babelOptions: {
                es2015: false
              }
            }
        }
        /* . . . */
    }
  });
})(this);

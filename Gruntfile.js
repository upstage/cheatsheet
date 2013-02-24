/*
 * Assemble Example: Grid
 * http://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */


module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    config: grunt.file.readJSON('config.json'),

    // Assemble static files from templates and data.
    assemble: {
      options: {
        engine: 'handlebars',
        helpers: '<%= config.helpers %>',
        preprocessors: '<%= config.preprocessors %>',
        docs: true,
        production: false,
        flatten: true,
        assets: 'assets',
        data: ['src/data/cheatsheet.json']
      },
      pages: {
        options: {
          layout:   'src/layouts/layout-default.hbs',
          partials: 'src/partials/**/*.hbs'
        },

        // Build project pages. ('dest': ['source'])
        files: { '.' : ['src/pages/*.hbs'] }
      }
    },

    // Compile LESS to CSS
    less: {
      compile: {
        options: {
          paths: ['src/less', 'src/less/bootstrap'] },
        files: {
      //    'assets/css/bootstrap.css':  ['src/less/bootstrap/bootstrap.less'],
          'assets/css/cheatsheet.css': ['src/less/cheatsheet.less'],
        }
      }
    },

    watch: {
      src: {
        files: [ 'src/**/*.*' ],
        tasks: [ 'assemble' ]
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-less');


  // Default task to be run.
  grunt.registerTask('default', [
    'assemble',
    'less'
  ]);

};

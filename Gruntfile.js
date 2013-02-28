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

    // Template paths, for convenience
    layouts:  'src/templates/layouts/',
    pages:    'src/templates/pages/',
    partials: 'src/templates/partials/',

    // Build static files from templates and data.
    assemble: {
      options: {
        assets: 'assets',
        data: ['src/data/cheatsheet.json']
      },
      pages: {
        options: {
          layout:   '<%= layouts %>/default.hbs',
          partials: '<%= partials %>/**/*.hbs'
        },
        files: {
          '.' : [ '<%= pages %>/cheatsheet.hbs' ]
        }
      }
    },

    // Compile LESS to CSS
    less: {
      compile: {
        options: {
          paths: [ 'src/styles', 'src/styles/bootstrap']
        },
        files: {
          'assets/css/cheatsheet.css': ['src/styles/cheatsheet.less'],
        }
      }
    },

    watch: {
      src: {
        files: [ 'src/**/*.*' ],
        tasks: [ 'assemble', 'less' ]
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task to be run.
  grunt.registerTask('default', [
    'assemble',
    'less',
    'watch'
  ]);

};

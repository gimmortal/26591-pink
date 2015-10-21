'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = {
    pkg: grunt.file.readJSON('package.json'),

    less: {
      style: {
        files: {
          'css/style.css': 'less/style.less'
        }
      }
    },

    cmq: {
      style: {
        files: {
          "css/style.css": ["css/style.css"]
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        report: "qzip"
      },
      style: {
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      style: {
        src: 'css/*.css'
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["less/**/*.less"]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expanded: true,
          src: ["img/**/*.{png,jpg,gif,svg}"]
        }]
        }
      },

    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        caseSensitive: true,
        keepClosingSlash: false
      },
      html: {
        files: {
          "index.min.html": "index.html"
        }
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          //cwd: "source",
          src: [
            "img/**",
            "js/**",
            "font/**",
            "*.html"
          ],
          dest: "build",
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    watch: {
      style: {
        files: ['less/**/*.less'],
        tasks: ['less', 'postcss'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  };

  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "cmq",
    "postcss",
    "cssmin",
    "imagemin",
    "htmlmin"
  ]);

  //config = require('./.gosha')(grunt, config);

  grunt.initConfig(config);
};

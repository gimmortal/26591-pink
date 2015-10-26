'use strict';

module.exports = {
  copy: {
    gosha: {
      files: [{
        expand: true,
        src: [
          'source/*.html',
          'source/css/**',
          'source/img/**',
          'source/js/**',
          'source/font/**'
        ],
        dest: 'gosha',
      }]
    }
  },

  clean: {
    gosha: [
      'gosha/img/README',
      'gosha/js/README',
      'gosha/css/README'
    ]
  },

  lintspaces: {
    codestyle: {
      src: [
        '*.html',
        'js/*.js',
        'less/*.less',
        'sass/*.sass',
        'sass/*.scss'
      ],
      options: {
        editorconfig: '.editorconfig'
      }
    }
  }
};

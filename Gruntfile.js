'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    less: {
      build: {
        files: {
          "styles/css/main.css": "styles/less/main.less"
        }
      }
    }
  });

  grunt.registerTask('default', ['less:build']);
  grunt.registerTask('build', ['less:build']);
};

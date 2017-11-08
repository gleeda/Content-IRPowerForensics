'use strict';

module.exports = function (grunt) {
  grunt.config.init({
    // TODO: add grunt config here
  });

  grunt.registerTask('build', function () {
    grunt.log.writeln('building things');
  });

  grunt.registerTask('test', function () {
    grunt.log.writeln('testing things');
  });

  grunt.registerTask('default', ['build', 'test']);
};

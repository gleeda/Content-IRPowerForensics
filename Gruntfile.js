'use strict';

const execSync = require('child_process').execSync;
const path = require('path');

module.exports = function (grunt) {
  grunt.config.init({
    // TODO: add grunt config here
  });

  grunt.registerTask('build', function () {
    const vswhere = path.join('tools', 'vswhere.exe');
    const vsPath = execSync(`${vswhere} -legacy -property InstallationPath -latest`, { encoding: 'utf8' }).trim();

    const vsvarsPath = path.join(vsPath, 'Common7', 'Tools', 'vsvars32.bat');

    const cwd = path.join('src', 'PowerForensics');
    const csproj = 'PowerForensics.csproj';
    const outPath = path.join(__dirname, 'build');

    const msbuildCmd = `msbuild "${csproj}" /t:Clean,Build /p:OutputPath="${outPath}"`;

    const output = execSync(`"${vsvarsPath}" && ${msbuildCmd}`, { encoding: 'utf8', cwd: cwd });
    grunt.log.ok(output);
  });

  grunt.registerTask('test', function () {
    grunt.log.writeln('testing things');
  });

  grunt.registerTask('default', ['build', 'test']);
};

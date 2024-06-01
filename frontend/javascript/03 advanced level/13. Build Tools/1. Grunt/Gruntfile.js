module.exports = function(grunt) {
    grunt.initConfig({
      // Define tasks and configurations here
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/*.js'],
          dest: 'dist/bundle.js',
        },
      },
      uglify: {
        dist: {
          files: {
            'dist/bundle.min.js': ['dist/bundle.js'],
          },
        },
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['concat', 'uglify']);
  };
  
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    htmlcompressor: {
      compile: {
        files: {
          'build/contacts.html': 'client/views/contacts.html'
        },
        options: {
          type: 'html'
        }
      }
    },
    concat: {
      dist: {
        src: ['client/js/controllers/*'],
        dest: 'build/scripts.js'
      }
    },
    watch: {
      files: ['client/views/contacts.html'],
      tasks: ['htmlcompressor']
    }
  });

  grunt.registerTask('sayhello', function() {
    console.log('Hello!')
  }) 
  
  grunt.registerTask('default', ['sayhello']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-htmlcompressor');
};
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    "css/slideshow.css": "less/slideshow.less"
                }
            }
        },
        watch: {
            less: {
               files: ["less/*.less"],
               tasks: ["less"]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
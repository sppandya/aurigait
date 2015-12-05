module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: ['app/**/*.jsx','actions/*.js','stores/**/*.js'],
                tasks: ['browserify']
            }
        },

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['app/**/*.jsx'],
                dest: 'public/js/compiler.server/bundle.js'
            }
        },
        nodemon: {
            dev: {
                script: 'bin/www',
                options:{
                    ext:'js,jsx,html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', [
        'browserify'
    ]);
};

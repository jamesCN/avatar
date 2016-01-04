module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'assets/css',
      dest: 'dest'
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/css/*.css',
        dest: 'dest/<%= pkg.name %>.min.css'
      }
    },
    concat: {
      options: {
        process: function(src, filepath) {
          return src;
          //return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        },
        stripBanners: 'block',
      },
      basic: {
        src: ['<%= dirs.src %>/base.css', '<%= dirs.src %>/layout.css', '<%= dirs.src %>/font.css', '<%= dirs.src %>/color.css',
        '<%= dirs.src %>/common.css',
        '<%= dirs.src %>/index.css',
        '<%= dirs.src %>/article.css',
        '<%= dirs.src %>/view.css',
        '<%= dirs.src %>/trip.css',
        '<%= dirs.src %>/detail.css'],
        dest: '<%= dirs.dest %>/avatar.css'
      }
    }
  });

  // 代码合并工具
  grunt.loadNpmTasks('grunt-contrib-concat');

  // js合并压缩任务插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // css合并压缩组件
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat']);

};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'dev/css',
      dest: 'test',
      destName: 'xblog'
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
        src: [
        '<%= dirs.src %>/lib/iconfont/iconfont.css',
        '<%= dirs.src %>/base.css', 
        '<%= dirs.src %>/layout.css', 
        '<%= dirs.src %>/font.css', 
        '<%= dirs.src %>/color.css',
        '<%= dirs.src %>/common.css',
        '<%= dirs.src %>/index.css',
        '<%= dirs.src %>/article.css',
        '<%= dirs.src %>/view.css',
        '<%= dirs.src %>/trip.css',
        '<%= dirs.src %>/detail.css'],
        dest: '<%= dirs.dest %>/<%= dirs.destName %>.css'
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path
          // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

          // includes files within path and its sub-directories
          {expand: true, flatten: true, src: ['<%= dirs.src %>/lib/iconfont/*','!<%= dirs.src %>/lib/iconfont/iconfont.css'], dest:'<%= dirs.dest %>/', filter: 'isFile'},

          // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
    },

  });

  // 代码合并工具
  grunt.loadNpmTasks('grunt-contrib-concat');
  // js合并压缩任务插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // css合并压缩组件
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-copy');
  // 默认被执行的任务列表。
  //grunt.registerTask('default', ['copy', 'concat']);
  grunt.registerTask('default', [ 'concat']);

};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      css_src: 'dev/css',
      js_src: 'dev/js',
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
        '<%= dirs.css_src %>/lib/iconfont/iconfont.css',
        '<%= dirs.css_src %>/base.css', 
        '<%= dirs.css_src %>/layout.css', 
        '<%= dirs.css_src %>/font.css', 
        '<%= dirs.css_src %>/color.css',
        '<%= dirs.css_src %>/common.css',
        '<%= dirs.css_src %>/index.css',
        '<%= dirs.css_src %>/article.css',
        '<%= dirs.css_src %>/view.css',
        '<%= dirs.css_src %>/trip.css',
        '<%= dirs.css_src %>/detail.css'],
        dest: '<%= dirs.dest %>/<%= dirs.destName %>.css'
      },
      extras: {
        src: ['<%= dirs.js_src %>/lib/jquery.js', 
        '<%= dirs.js_src %>/lib/tmpl.js',
        '<%= dirs.js_src %>/core/hashParser.js',
        '<%= dirs.js_src %>/core/xRouter.js',
        '<%= dirs.js_src %>/module/*.js',
        '<%= dirs.js_src %>/main.js'
        ],
        dest: '<%= dirs.dest %>/<%= dirs.destName %>.js',
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
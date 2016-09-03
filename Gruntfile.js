module.exports = function(grunt) {

	"use strict";

	// Load configs from .js files in /grunt
	require('load-grunt-config')(grunt, {
		init: true,
		loadGruntTasks: {

			pattern: 'grunt-*',
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});

	// Register Tasks
	grunt.registerTask('serve', 'shell:jekyllServe');
	grunt.registerTask('default',
		['clean',
		'sass',
		'postcss',
		'imagemin:svg',
		'imagemin:workImg',
		'string-replace',
		'svgstore',
		'jshint',
		'concat',
		'uglify',
		'newer:imagemin:raster',
		'shell:jekyllBuild',
		'watch']
		);
	grunt.registerTask('svg',
		['imagemin:svg',
		'svgstore',
		'shell:jekyllBuild']
		);
	
};
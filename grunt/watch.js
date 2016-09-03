module.exports = {
	options: {
		livereload: true
	},
	site: {
        files: ['_pages/**/*.html', '_layouts/**/*.html', '_posts/**/*.md', '_includes/**/*.html' 
        , '_data/*.*', '_config.yml', '_config-dev.yml'],
        tasks: ['shell:jekyllBuild']
    },
    js: {
    	files: ['js/_dev/**/*.js'],
    	tasks: ['jshint', 'concat', 'uglify', 'shell:jekyllBuild']
    },
    css: {
        files: ['_scss/**/*.scss'],
        tasks: ['sass', 'postcss', 'shell:jekyllBuild']
    },
    svg: {
    	files: ['img/_dev/svg/**/*.svg'],
    	tasks: ['clean:svg', 'imagemin:svg', 'imagemin:workImg', 'string-replace', 'svgstore', 'shell:jekyllBuild']
    },
    img: {
        files: ['img/_dev/**/*'],
        tasks: ['clean:raster', 'newer:imagemin:raster', 'shell:jekyllBuild']
    },
    grunt: {
        files: ['Gruntfile.js', 'grunt/*.js'],
        tasks: ['default']
    }
}
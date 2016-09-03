module.exports = {
	raster: {
		files: [{
	    	expand: true,                       // Enable dynamic expansion
	    	cwd: 'img/_dev/',                   // Src matches are relative to this path
	    	src: ['**/*.{png,jpg,gif}'],        // Actual patterns to match
	    	dest: 'img/dist/'                   // Destination path prefix
	      }]
	},
	svg: {
		files: [{
	    	expand: true,                       // Enable dynamic expansion
	    	cwd: 'img/_dev/svg/',               // Src matches are relative to this path
	    	src: ['**/*.svg'],   		        // Actual patterns to match
	    	dest: 'img/_temp/'                  // Destination path prefix
	      }],
	    options: {
	    	svgoPlugins: [
	    	{ removeTitle: true },
	    	{ cleanupIDs: false }
	    	],
	    }
	},
	workImg: {
		files: {
			'img/_temp/expandia__work-img.svg': 'img/_dev/svg/expandia__work-img.svg'
		},
	    options: {
	    	svgoPlugins: [
	    	{ removeTitle: true },
	    	{ cleanupIDs: false }
	    	],
	    }
	}
}
module.exports = {
	options: {
		map: true,
		failOnError: true,

		processors: [
			require('pixrem')(), // add fallbacks for rem units
			require('autoprefixer')(), // add vendor prefixes
			require('cssnano')() // minify the result
		]
		},
	dist: {
      src: 'css/*.css'
    }
}
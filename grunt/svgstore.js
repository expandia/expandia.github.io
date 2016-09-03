module.exports = {
	options: {
		prefix : "svg-",
		cleanup: false,
		svg: {
			style: "display: none;"
		}
	},
	default: {
		files: {
			"_includes/svg-defs.svg": ["img/_temp/*.svg"]
		}
	}
}
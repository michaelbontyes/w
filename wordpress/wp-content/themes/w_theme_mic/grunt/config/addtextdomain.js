// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
	options: {
		textdomain: '<%= pkg.theme.textdomain %>',
		updateDomains: ['w_theme_mic'] // Hard-coded by default
	},
	php: {
		files: {
			src: [
				'<%= files.php %>',
				'!<%= paths.hybridCore %>**/*.php'
			]
		}
	},
	flagshiplibrary: {
		options: {
			updateDomains: ['flagship-library']
		},
		files: {
			src: [
				'<%= paths.theme %>includes/vendor/flagship-library/**/*.php'
			]
		}
	}
};

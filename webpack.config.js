const path = require( 'path' )
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' )
// @wordpress/scripts config.
const wordpressConfig = require( '@wordpress/scripts/config/webpack.config' )
// @wordpress/scripts helper which generates entry points from any '**/block.json' in 'src'.
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' )

// See svgo.config.js to configure SVG manipulation.

module.exports = {
	...wordpressConfig,
	entry: {
		// Everything outputs to build/.
		...getWebpackEntryPoints(),
		// 'example/output': './path/to/dir/entrypoint.js',
		'css/lonewolf': path.join( __dirname, '/src/css/lonewolf.scss' ),
		'css/lonewolf-admin': path.join( __dirname, '/src/css/lonewolf-admin.scss' ),
		'css/lonewolf-editor': path.join( __dirname, '/src/css/lonewolf-editor.scss' ),
		'css/lonewolf-dev': path.join( __dirname, '/src/css/lonewolf-dev.scss' ),
		'js/lonewolf': path.join( __dirname, '/src/js/lonewolf' ),
		// Legacy support for old page until migration to blocks is complete.
		'css/old': path.join( __dirname, '/src/css/old.scss' ),
		'js/old': path.join( __dirname, '/src/js/old' ),
	},
	plugins: [
		...wordpressConfig.plugins,
		new BrowserSyncPlugin( {
			proxy: 'localhost:8001', // Live WordPress site. Using IP breaks it.
			ui: { port: 3001 }, // BrowserSync UI.
			port: 3000, // Dev port on localhost.
			logLevel: 'debug',
			reload: false, // false = webpack handles reloads (not sure if this works with files option).
			browser: "google-chrome-stable",
			files: [
				'src/**',
				'classes/**',
				'patterns/**',
				'parts/**',
				'templates/**',
				'**/**.json'
			]
		} )
	]
}

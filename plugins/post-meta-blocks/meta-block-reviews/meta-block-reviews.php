<?php
/**
 * Plugin Name:       meta-block-reviews
 * Description:       A custom 'Reviews' post type with custom fields.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Jefferson Real
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       meta-block-reviews
 *
 * @package           meta-block-reviews
 * @link              https://kinsta.com/blog/dynamic-blocks/
 * @link              https://kinsta.com/blog/wordpress-add-meta-box-to-post/
 * @link              https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 */

// Define constants.
define( 'CPTREV_DEBUG', defined( 'WP_DEBUG' ) && WP_DEBUG === true );
define( 'CPTREV_DIR', trailingslashit( __DIR__ ) );

// Setup PHP namespace.
require_once CPTREV_DIR . '/classes/autoload.php';

// Setup this plugin.
use BigupWeb\CPT_Review\Initialise;
new Initialise();


return;
// DEBUG action priority.
function dump_post_types_list() {
	$cpts = get_post_types( '', 'names' );
	echo '<pre>';
	foreach ( $cpts as $cpt ) {
		echo $cpt . "\n";
	}
	echo '</pre>';
}
add_action( 'init', 'dump_post_types_list', 99, 1 );

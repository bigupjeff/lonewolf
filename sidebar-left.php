<?php


/**
 * Lonewolf Theme Template File - Left Sidebar.
 *
 * @package lonewolf
 * @author Jefferson Real <me@jeffersonreal.uk>
 * @copyright Copyright 2023 Jefferson Real
 */
?>

<aside class="dip">

	<?php if ( is_active_sidebar( 'sidebar-left' ) ) : ?>
		<?php dynamic_sidebar( 'sidebar-left' ); ?>
	<?php else : ?>
		<!-- Time to add some widgets! -->
	<?php endif; ?>
	
</aside>

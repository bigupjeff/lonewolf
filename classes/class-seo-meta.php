<?php
/**
 * SEO Metadata Component
 *
 * Note to self: This would be better suited to a function in functions.php or a standalone plugin.
 *
 * @package lonewolf
 * @author Jefferson Real <me@jeffersonreal.uk>
 * @copyright Copyright 2023 Jefferson Real
 */

namespace BigupWeb\Lonewolf;

/**
 * PHP Class: Seo_Meta
 *
 * Builds and inserts SEO metadata into the head.
 */
class Seo_Meta {

	/**
	 * Variable meta
	 *
	 * @var array array of meta variables.
	 */
	public $meta;

	/**
	 * Variable head_meta
	 *
	 * @var string complete output ready for <head>.
	 */
	public $head_meta;

	/**
	 * Initialise the class on each new instance.
	 */
	public function __construct() {
		$this->meta      = $this->build_meta_vars();
		$this->head_meta = $this->generate_head_meta( $this->meta );
	}

	/**
	 * Print the SEO Meta output.
	 */
	public function print_head_meta() {
		echo $this->head_meta;
	}

	/**
	 * Append forward slash to strings where not already present.
	 *
	 * @param string $url A URL.
	 */
	public function enforce_forward_slash( $url ) {
		if ( $url !== '' && substr( $url, -1 ) !== '/' ) {
			$url = $url . '/';
		}
		return $url;
	}


	/**
	 * Return the first non-empty array value as a string.
	 *
	 * @return string The first non-empty value or empty string on failure.
	 * @param array $array The array to check for non-empty values.
	 */
	public function first_not_empty( $array ) {
		$string = '';
		if ( is_array( $array ) ) {
			foreach ( $array as &$value ) {
				$trimmed = trim( $value, ' ' );
				if ( ! empty( $trimmed ) ) {
					$string = $trimmed;
					goto end;
				}
			}
			end:
			unset( $value );
			if ( empty( $string ) ) {
				$string = '';
			}
		}
		return $string;
	}


	/**
	 * Parse string with regular expression to find an image src.
	 *
	 * @return string image src string without quotes.
	 * @param string $content The passed content to search.
	 */
	public function extract_image_from_content( $content ) {
		$url = '';

		if ( isset( $content ) && $content !== '' ) {

			if ( is_array( $content ) ) {
				implode( $content );
			}

			$regex = '/src="([^"]*)"/';
			preg_match_all( $regex, $content, $matches, PREG_PATTERN_ORDER );

			if ( isset( $matches[0][0] ) ) {
				$match    = $matches[0][0];
				$urlParts = explode( '"', $match, 3 );
				$url      = $urlParts[1];

			} else {
				$url = '';
			}
		} else {
			$url = '';
		}
			return $url;
	}

	/**
	 * Populate the SEO meta variables.
	 *
	 * @return array Array of meta variables.
	 */
	public function build_meta_vars() {

		/* Constants (need a source) */
		$lw_siteauthor = 'Jefferson Real';
		$lw_localealt  = 'en_US';
		$lw_objecttype = 'website';
		$lw_robots     = 'index, follow, nocache, noarchive';

		/* Sitewide */
		$lw_sitetitle = wp_strip_all_tags( get_bloginfo( 'name', 'display' ) );
		$lw_blogtitle = wp_strip_all_tags( get_the_title( get_option( 'page_for_posts', true ) ) );
		$lw_sitedesc  = wp_strip_all_tags( get_bloginfo( 'description', 'display' ) );
		$lw_siteurl   = esc_url( home_url( $path = '/', $scheme = 'https' ) );
		$lw_sitelogo  = esc_url( wp_get_attachment_url( get_theme_mod( 'custom_logo' ) ) );
		$lw_locale    = wp_strip_all_tags( get_bloginfo( 'language' ) );
		$lw_charset   = wp_strip_all_tags( get_bloginfo( 'charset' ) );
		$lw_themeuri  = get_template_directory_uri();

		/* Page-Specific */
		$post = get_post();// Set up the post manually
		setup_postdata( $post );
		$lw_postid      = get_the_ID();
		$lw_postcontent = get_post_field( 'post_content', $lw_postid, '' );
		$lw_postimage   = esc_url( $this->extract_image_from_content( $lw_postcontent ) );
		$lw_posttitle   = wp_strip_all_tags( get_the_title() );
		$lw_permalink   = esc_url( get_permalink() );

		/* Set scope */
		$lw_catexcerpt   = '';
		$lw_archivetitle = '';
		$lw_postexcerpt  = '';
		$lw_postauthor   = '';

		/* scrape conditionally by page type */
		if ( is_category() ) { // User may have set desc
			$lw_catexcerpt = preg_split( '/[.?!]/', wp_strip_all_tags( category_description(), true ) )[0] . '.';
		}
		if ( is_archive() ) { // Also matches categories (don't set vars twice)
			$lw_archivetitle = wp_strip_all_tags( post_type_archive_title( '', false ) );
			$lw_thumbnail    = esc_url( get_the_post_thumbnail_url( $lw_postid ) );
		} else {
			$lw_postexcerpt = preg_split( '/[.?!]/', wp_strip_all_tags( $lw_postcontent, true ) )[0] . '.';
			$lw_postauthor  = wp_strip_all_tags( get_the_author() );
			$lw_thumbnail   = esc_url( get_the_post_thumbnail_url( $lw_postid ) );
		}

		/* choose the most suitable scraped value with preference order by page type */
		if ( is_front_page() ) { // Homepage.
			$lw_title   = ucwords( $lw_sitetitle );
			$lw_desc    = ucfirst( $this->first_not_empty( array( $lw_sitedesc, $lw_postexcerpt ) ) );
			$lw_author  = ucwords( $this->first_not_empty( array( $lw_siteauthor, $lw_postauthor ) ) );
			$lw_canon   = $this->enforce_forward_slash( $lw_siteurl );
			$lw_ogimage = $this->first_not_empty( array( $lw_sitelogo, $lw_thumbnail, $lw_postimage ) );
		} elseif ( is_home() ) { // Posts Page.
			$lw_title   = ucwords( $this->first_not_empty( array( $lw_blogtitle, $lw_sitetitle ) ) );
			$lw_desc    = ucfirst( $this->first_not_empty( array( $lw_postexcerpt, $lw_sitedesc ) ) );
			$lw_author  = ucwords( $lw_siteauthor );
			$lw_canon   = $this->enforce_forward_slash( $lw_permalink );
			$lw_ogimage = $this->first_not_empty( array( $lw_thumbnail, $lw_sitelogo, $lw_postimage ) );
		} elseif ( is_category() ) {
			$lw_title   = ucwords( $this->first_not_empty( array( $lw_archivetitle, $lw_posttitle ) ) );
			$lw_desc    = ucfirst( $this->first_not_empty( array( $lw_catexcerpt, $lw_postexcerpt, $lw_sitedesc ) ) );
			$lw_author  = ucwords( $this->first_not_empty( array( $lw_postauthor, $lw_siteauthor ) ) );
			$lw_canon   = $this->enforce_forward_slash( $lw_permalink );
			$lw_ogimage = $this->first_not_empty( array( $lw_thumbnail, $lw_postimage, $lw_sitelogo ) );
		} elseif ( is_archive() ) { // Auto-gen 'cats'.
			$lw_title   = ucwords( $this->first_not_empty( array( $lw_archivetitle, $lw_posttitle ) ) );
			$lw_desc    = ucfirst( $this->first_not_empty( array( $lw_catexcerpt, $lw_postexcerpt, $lw_sitedesc ) ) );
			$lw_author  = ucwords( $this->first_not_empty( array( $lw_postauthor, $lw_siteauthor ) ) );
			$lw_canon   = $this->enforce_forward_slash( $lw_permalink );
			$lw_ogimage = $this->first_not_empty( array( $lw_thumbnail, $lw_postimage, $lw_sitelogo ) );
		} elseif ( is_singular() ) { // These vars should be reliable.
			$lw_title   = ucwords( $lw_posttitle );
			$lw_desc    = ucfirst( $lw_postexcerpt );
			$lw_author  = ucwords( $lw_postauthor );
			$lw_canon   = $this->enforce_forward_slash( $lw_permalink );
			$lw_ogimage = $this->first_not_empty( array( $lw_postimage, $lw_thumbnail, $lw_sitelogo ) );
		} else {
			echo '<!-- SEO META FALLBACK - WP TEMLPATE NOT MATCHED -->';
			$lw_title   = ucwords( $this->first_not_empty( array( $lw_posttitle, $lw_archivetitle, $lw_sitetitle ) ) );
			$lw_desc    = ucfirst( $this->first_not_empty( array( $lw_postexcerpt, $lw_catexcerpt, $lw_sitedesc ) ) );
			$lw_author  = ucwords( $this->first_not_empty( array( $lw_postauthor, $lw_siteauthor ) ) );
			$lw_canon   = $this->enforce_forward_slash( $lw_permalink );
			$lw_ogimage = $this->first_not_empty( array( $lw_thumbnail, $lw_postimage, $lw_sitelogo ) );
		}

		return $meta = array(
			'title'       => $lw_title,
			'desc'        => $lw_desc,
			'author'      => $lw_author,
			'canon'       => $lw_canon,
			'ogimage'     => $lw_ogimage,
			'ogtitle'     => $lw_title,
			'robots'      => $lw_robots,
			'ogtype'      => $lw_objecttype,
			'ogurl'       => $lw_canon,
			'oglocale'    => $lw_locale,
			'oglocalealt' => $lw_localealt,
			'ogdesc'      => $lw_desc,
			'ogsitename'  => $lw_sitetitle,
			'charset'     => $lw_charset,
			'themeuri'    => $lw_themeuri,
		);

	}

	/**
	 * Generate the head meta HTML.
	 *
	 * @return string HTML to be inserted into head.
	 * @param array $meta The array of SEO meta data variables.
	 */
	public static function generate_head_meta( $meta ) {

		$head_meta = <<<EOF
<meta charset="{$meta["charset"]}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Site verification (to be removed from this template) -->
<meta name="google-site-verification" content="g9mEcBrJ4uTyVj7KYmGbbuAzqRkeMA2jIJth4hM5Dns" />
<meta name="msvalidate.01" content="0245B24FF2B31489A65C5541B284D4D8" />
<!-- SEO Meta -->
<title>{$meta["title"]}</title>
<meta name="description" content="{$meta["desc"]}">
<meta name="author" content="{$meta["author"]}">
<meta name="robots" content="{$meta["robots"]}">
<link rel="canonical" href="{$meta["canon"]}">
<!-- Open Graph Meta - <html> namespace must match og:type -->
<meta property="og:title" content="{$meta["ogtitle"]}">
<meta property="og:type" content="{$meta["ogtype"]}">
<meta property="og:image" content="{$meta["ogimage"]}">
<meta property="og:url" content="{$meta["ogurl"]}">
<meta property="og:locale" content="{$meta["oglocale"]}">
<meta property="og:locale:alternate" content="{$meta["oglocalealt"]}">
<meta property="og:description" content="{$meta["ogdesc"]}">
<meta property="og:site_name" content="{$meta["ogsitename"]}">
<!-- Branding Meta -->
<!-- Favicon and Web App Definitions -->
<meta name="application-name" content="Jefferson Real - Web Development">
<meta name="msapplication-TileColor" content="#fff">
<meta name="msapplication-TileImage" content="{$meta["themeuri"]}/imagery/favicon/mstile-144x144.png">
<meta name="msapplication-square70x70logo" content="{$meta["themeuri"]}/imagery/favicon/mstile-70x70.png">
<meta name="msapplication-square150x150logo" content="{$meta["themeuri"]}/imagery/favicon/mstile-150x150.png">
<meta name="msapplication-wide310x150logo" content="{$meta["themeuri"]}/imagery/favicon/mstile-310x150.png">
<meta name="msapplication-square310x310logo" content="{$meta["themeuri"]}/imagery/favicon/mstile-310x310.png">
<!-- Mobile Browser Colours -->
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#262422">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#262422">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="#262422">
<!-- Favicons and vendor-specific icons -->
<link rel="shortcut icon" href="{$meta["themeuri"]}/imagery/favicon/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" sizes="57x57" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="114x114" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="72x72" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="144x144" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="60x60" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="120x120" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="76x76" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="152x152" href="{$meta["themeuri"]}/imagery/favicon/apple-touch-icon-152x152.png">
<link rel="icon" type="image/png" href="{$meta["themeuri"]}/imagery/favicon/favicon-196x196.png" sizes="196x196">
<link rel="icon" type="image/png" href="{$meta["themeuri"]}/imagery/favicon/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="{$meta["themeuri"]}/imagery/favicon/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="{$meta["themeuri"]}/imagery/favicon/favicon-16x16.png" sizes="16x16">
<link rel="icon" type="image/png" href="{$meta["themeuri"]}/imagery/favicon/favicon-128.png" sizes="128x128">
<!-- lw_head end -->
EOF;

		return $head_meta;
	}

}

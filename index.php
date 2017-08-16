<?php
/**
 * Plugin Name: Colby Updates
 * Description: A component and shortcode for display posts from a WP REST endpoint.
 * Author: John Watkins, Colby Communications
 */

add_action( 'wp_enqueue_scripts', function() {
	global $post;

	if ( has_shortcode( $post->post_content, 'colby-updates' ) ) {
		$min = PROD === true ? '.min' : '';
		$dist = plugin_dir_url( __FILE__ ) . 'dist';

		$package_json = json_decode( file_get_contents( __DIR__ . '/package.json' ) )
			?: (object) [ 'version' => '1.0.1' ];

		wp_enqueue_script(
			'colby-updates',
			"$dist/colby-wp-react-updates$min.js",
			['react', 'react-dom', 'prop-types', 'date-fns'],
			$package_json->version,
			true
		);

		wp_enqueue_style(
			'colby-updates',
			"$dist/colby-wp-react-updates$min.css",
			['colby-bootstrap'],
			$package_json->version
		);
	}
 }, 10, 1 );



function render_colby_updates_shortcode( $atts ) {
	if ( ! $atts['endpoint'] ) {
		return '';
	}

	$more_link = '';
	if ( $atts['more-link'] ) {
		$more_link = "data-more-link={$atts['more-link']}";
	}

	return "
<div
  data-colby-updates
  data-endpoint=\"{$atts['endpoint']}\"
  $more_link
  >
</div>
";
}

function add_site_preview_shortcode() {
	add_shortcode( 'colby-updates', 'render_colby_updates_shortcode' );
}
add_action( 'init', 'add_site_preview_shortcode' );

<?php

add_action( 'wp_enqueue_scripts', function () {
	global $post;

	if ( has_shortcode( $post->post_content, 'colby-updates' ) ) {
		$min = PROD === true ? '.min' : '';
		$dist = plugin_dir_url( __FILE__ ) . '../../dist';

		$package_json = json_decode( file_get_contents( __DIR__ . '/../../package.json' ) )
			?: (object) [ 'version' => '1.0.1' ];

		wp_enqueue_script(
			$package_json->name,
			"$dist/{$package_json->name}$min.js",
			[ 'react', 'react-dom', 'prop-types', 'date-fns' ],
			$package_json->version,
			true
		);

		wp_enqueue_style(
			$package_json->name,
			"$dist/{$package_json->name}$min.css",
			[ 'colby-bootstrap' ],
			$package_json->version
		);
	}
}, 10, 1 );

<?php

function render_colby_updates_shortcode( $atts ) {
	if ( ! $atts['endpoint'] ) {
		return '';
	}

	$more_link = '';
	if ( ! empty( $atts['more-link'] ) ) {
		$more_link = "data-more-link={$atts['more-link']}";
	}

	$title = '';
	if ( ! empty( $atts['title'] ) ) {
		$title = "data-title={$atts['title']}";
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

function add_colby_updates_shortcode() {
	add_shortcode( 'colby-updates', 'render_colby_updates_shortcode' );
}
add_action( 'init', 'add_colby_updates_shortcode' );

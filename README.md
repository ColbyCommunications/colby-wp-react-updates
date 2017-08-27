# colby-wp-react-updates

A component and shortcode for display posts from a WP REST endpoint.

## Usage

### Shortcode

```HTML
[colby-updates endpoint="//rest-endpoint" more-link="//more-link"]
```

#### Shortcode atts

**endpoint** *(required)* The WordPress REST API endpoint to fetch posts from.

**more-link** *(optional)* A URL to link to below the updates. If omitted, no link shows.

**title** *(optional)* The title of the section. Default "Updates".

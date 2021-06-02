module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                // Specify the URL of the WordPress source
                baseUrl: `localhost/wordpress/`,
                protocol: `http`,
                // Indicates if a site is hosted on WordPress.com
                hostingWPCOM: false,
                // Specify which URL structures to fetch
                includedRoutes: [
                  '**/posts',
                  '**/tags',
                  '**/categories'
                ]
            }
        }
    ]
}
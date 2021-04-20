module.exports = {
  siteMetadata: {
    title: `Mateusz Kłysz - Portfolio`,
    description: `Proste portfolio napisane przy użyciu GatsbyJS, frameworku bazowanego na React`,
    author: `Mateusz Kłysz`,
    date: `2021`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates/`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`, `/contact`],
        appendScript: `${__dirname}/src/utils/sw.js`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateusz Kłysz - Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-eu-central-1.graphcms.com/v2/cknos54dl844s01xm5ym9b0s1/master",
        buildMarkdownNodes: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/templates/layout.js`),
      },
    },
  ],
};

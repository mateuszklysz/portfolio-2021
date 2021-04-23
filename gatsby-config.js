module.exports = {
  siteMetadata: {
    title: `Portfolio - Mateusz Kłysz`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio - Mateusz Kłysz`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/svg/manifest_logo.svg`,
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

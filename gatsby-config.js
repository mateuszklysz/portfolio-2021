module.exports = {
  siteMetadata: {
    title: `Mateusz Kłysz - Portfolio`,
    description: `Proste portfolio napisane przy użyciu Gatsby, frameworku bazowanego na React`,
    author: `@nickyy00`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mateusz-klysz-portfolio`,
        short_name: `mateusz-k`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
  ],
};

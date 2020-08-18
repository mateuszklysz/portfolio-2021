module.exports = {
  siteMetadata: {
    title: `Mateusz Kłysz - Portfolio`,
    description: `Proste portfolio napisane przy użyciu Gatsby, frameworku bazowanego na React`,
    author: `Mateusz Kłysz`,
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
        background_color: `#121212`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
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
        layout: require.resolve(`./src/layouts/layout.js`),
      },
    },
  ],
};

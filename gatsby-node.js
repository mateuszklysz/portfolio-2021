exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/templates/project-page.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

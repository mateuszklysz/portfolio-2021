exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: { allGraphCmsProject },
  } = await graphql(`
    query {
      allGraphCmsProject {
        nodes {
          slug
        }
      }
    }
  `);
  // Programmatically Creating Pages
  allGraphCmsProject.nodes.forEach(data => {
    createPage({
      path: data.slug,
      component: require.resolve(
        `./src/templates/project-page/project-page.js`
      ),
      context: { slug: data.slug },
    });
  });
};

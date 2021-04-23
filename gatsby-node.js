exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: { allGraphCmsProject },
  } = await graphql(`
    query {
      allGraphCmsProject {
        nodes {
          content {
            markdownNode {
              childMdx {
                body
              }
            }
          }
          title
          technologies
          github
          date
          site
          slug
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
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
      context: { data: data },
    });
  });
};

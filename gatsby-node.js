const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/templates/blogPost.js");
  const blogTemplate = path.resolve("./src/templates/blog.js");

  return graphql(`
    {
      allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          title
          subtitle
          slug
          image {
            fluid {
              src
            }
          }
          createdAt
        }
      }
    }
  `).then((result) => {
    if (result.errors) throw result.errors;

    const posts = result.data.allContentfulPost.nodes;

    paginate({
      createPage,
      items: posts,
      itemsPerPage: 3,
      pathPrefix: "/blog",
      component: blogTemplate,
    });

    posts.forEach((post, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1];
      const prev = index === 0 ? null : posts[index - 1];

      createPage({
        path: post.slug,
        component: postTemplate,
        context: {
          slug: post.slug,
          prev,
          next,
        },
      });
    });
  });
};

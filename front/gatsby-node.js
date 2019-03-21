const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect, createPage } = actions;

  createRedirect({
    fromPath: '/biblioteca',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: '/bienestar',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: '/revista',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: '/ludoteca',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  });

  return new Promise((resolve, reject) => {
    const externalCourseTemplate = path.resolve('src/templates/ExternalCourses.jsx');

    resolve(
      graphql(`
      query getAllEnlacesExternos{
        allStrapiEnlacesexternos{
          edges{
            node{
              title
            }
          }
        }
      }
      `)
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        
        let enlacesExternos = result.data.allStrapiEnlacesexternos;

        enlacesExternos.edges.forEach(edge => {
          createPage({
            path: `/educacion/cursos-externos/${edge.node.title}`,
            component: externalCourseTemplate,
            context: {
              title: edge.node.title,
            }
          })
        })
      
      })
    )
  });
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

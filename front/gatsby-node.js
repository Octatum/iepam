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
    const catalogoComponent = path.resolve('src/templates/Catalogo.jsx');

    resolve(
      graphql(`
      query getAllEnlacesExternos{
        enlaces: allStrapiEnlacesexternos{
          edges{
            node{
              title
            }
          }
        }
        categorias: allStrapiCategoriaeducacions{
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
                
        let enlacesExternos = result.data.enlaces;

        enlacesExternos.edges.forEach(edge => {
          createPage({
            path: `/educacion/cursos-externos/${edge.node.title}`,
            component: externalCourseTemplate,
            context: {
              title: edge.node.title,
            }
          })
        })

        let categorias = result.data.categorias;
        //const fixedCategorias = categorias.edges.map(edge => createRouteFromString(edge.node.title));
        const fixedCategorias = categorias.edges.map(edge => edge.node.title);
      
       fixedCategorias.forEach(categ => {
          createPage({
            //path: `/educacion/catalogo/${createRouteFromString(categ)}`,
            path: `/educacion/catalogo/${categ}`,
            component: catalogoComponent,
            context: {
              title: categ,
              allCateg: fixedCategorias
            }
          })
        });
      
      })
    )
  });
};

function createRouteFromString(string) {
  return string.replace(' ', '_').toLowerCase().replace(/\W/g, '');
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

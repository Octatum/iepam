

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/biblioteca',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: '/bienestar',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: '/revista',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: '/ludoteca',
    toPath: '/BuildingSite',
    redirectInBrowser: true,
  })
  
  return;
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
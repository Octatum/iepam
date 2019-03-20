'use strict';

/**
 * Enlacesexternos.js controller
 *
 * @description: A set of functions called "actions" for managing `Enlacesexternos`.
 */

module.exports = {

  /**
   * Retrieve enlacesexternos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.enlacesexternos.search(ctx.query);
    } else {
      return strapi.services.enlacesexternos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a enlacesexternos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.enlacesexternos.fetch(ctx.params);
  },

  /**
   * Count enlacesexternos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.enlacesexternos.count(ctx.query);
  },

  /**
   * Create a/an enlacesexternos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.enlacesexternos.add(ctx.request.body);
  },

  /**
   * Update a/an enlacesexternos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.enlacesexternos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an enlacesexternos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.enlacesexternos.remove(ctx.params);
  }
};

'use strict';

/**
 * Temas.js controller
 *
 * @description: A set of functions called "actions" for managing `Temas`.
 */

module.exports = {

  /**
   * Retrieve temas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.temas.search(ctx.query);
    } else {
      return strapi.services.temas.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a temas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.temas.fetch(ctx.params);
  },

  /**
   * Count temas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.temas.count(ctx.query);
  },

  /**
   * Create a/an temas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.temas.add(ctx.request.body);
  },

  /**
   * Update a/an temas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.temas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an temas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.temas.remove(ctx.params);
  }
};

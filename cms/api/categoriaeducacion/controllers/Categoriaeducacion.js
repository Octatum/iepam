'use strict';

/**
 * Categoriaeducacion.js controller
 *
 * @description: A set of functions called "actions" for managing `Categoriaeducacion`.
 */

module.exports = {

  /**
   * Retrieve categoriaeducacion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.categoriaeducacion.search(ctx.query);
    } else {
      return strapi.services.categoriaeducacion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a categoriaeducacion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.categoriaeducacion.fetch(ctx.params);
  },

  /**
   * Count categoriaeducacion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.categoriaeducacion.count(ctx.query);
  },

  /**
   * Create a/an categoriaeducacion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.categoriaeducacion.add(ctx.request.body);
  },

  /**
   * Update a/an categoriaeducacion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.categoriaeducacion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an categoriaeducacion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.categoriaeducacion.remove(ctx.params);
  }
};

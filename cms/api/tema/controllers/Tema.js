'use strict';

/**
 * Tema.js controller
 *
 * @description: A set of functions called "actions" for managing `Tema`.
 */

module.exports = {

  /**
   * Retrieve tema records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tema.search(ctx.query);
    } else {
      return strapi.services.tema.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tema record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tema.fetch(ctx.params);
  },

  /**
   * Count tema records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tema.count(ctx.query);
  },

  /**
   * Create a/an tema record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tema.add(ctx.request.body);
  },

  /**
   * Update a/an tema record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tema.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tema record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tema.remove(ctx.params);
  }
};

'use strict';

/**
 * Cursosexternos.js controller
 *
 * @description: A set of functions called "actions" for managing `Cursosexternos`.
 */

module.exports = {

  /**
   * Retrieve cursosexternos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cursosexternos.search(ctx.query);
    } else {
      return strapi.services.cursosexternos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cursosexternos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cursosexternos.fetch(ctx.params);
  },

  /**
   * Count cursosexternos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cursosexternos.count(ctx.query);
  },

  /**
   * Create a/an cursosexternos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cursosexternos.add(ctx.request.body);
  },

  /**
   * Update a/an cursosexternos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cursosexternos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cursosexternos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cursosexternos.remove(ctx.params);
  }
};

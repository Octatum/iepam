'use strict';

/**
 * Anuncioseducacion.js controller
 *
 * @description: A set of functions called "actions" for managing `Anuncioseducacion`.
 */

module.exports = {

  /**
   * Retrieve anuncioseducacion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.anuncioseducacion.search(ctx.query);
    } else {
      return strapi.services.anuncioseducacion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a anuncioseducacion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.anuncioseducacion.fetch(ctx.params);
  },

  /**
   * Count anuncioseducacion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.anuncioseducacion.count(ctx.query);
  },

  /**
   * Create a/an anuncioseducacion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.anuncioseducacion.add(ctx.request.body);
  },

  /**
   * Update a/an anuncioseducacion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.anuncioseducacion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an anuncioseducacion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.anuncioseducacion.remove(ctx.params);
  }
};

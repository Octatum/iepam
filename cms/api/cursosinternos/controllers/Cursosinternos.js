'use strict';

/**
 * Cursosinternos.js controller
 *
 * @description: A set of functions called "actions" for managing `Cursosinternos`.
 */

module.exports = {

  /**
   * Retrieve cursosinternos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cursosinternos.search(ctx.query);
    } else {
      return strapi.services.cursosinternos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cursosinternos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cursosinternos.fetch(ctx.params);
  },

  /**
   * Count cursosinternos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cursosinternos.count(ctx.query);
  },

  /**
   * Create a/an cursosinternos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cursosinternos.add(ctx.request.body);
  },

  /**
   * Update a/an cursosinternos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cursosinternos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cursosinternos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cursosinternos.remove(ctx.params);
  }
};

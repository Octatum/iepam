'use strict';

/**
 * Homepresentationslides.js controller
 *
 * @description: A set of functions called "actions" for managing `Homepresentationslides`.
 */

module.exports = {

  /**
   * Retrieve homepresentationslides records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.homepresentationslides.search(ctx.query);
    } else {
      return strapi.services.homepresentationslides.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a homepresentationslides record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.homepresentationslides.fetch(ctx.params);
  },

  /**
   * Count homepresentationslides records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.homepresentationslides.count(ctx.query);
  },

  /**
   * Create a/an homepresentationslides record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.homepresentationslides.add(ctx.request.body);
  },

  /**
   * Update a/an homepresentationslides record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.homepresentationslides.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an homepresentationslides record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.homepresentationslides.remove(ctx.params);
  }
};

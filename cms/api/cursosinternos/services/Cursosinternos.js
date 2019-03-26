'use strict';

/**
 * Cursosinternos.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all cursosinternos.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('cursosinternos', params);
    // Select field to populate.
    const populate = Cursosinternos.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Cursosinternos
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(filters.populate || populate);
  },

  /**
   * Promise to fetch a/an cursosinternos.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Cursosinternos.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Cursosinternos
      .findOne(_.pick(params, _.keys(Cursosinternos.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count cursosinternos.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('cursosinternos', params);

    return Cursosinternos
      .countDocuments()
      .where(filters.where);
  },

  /**
   * Promise to add a/an cursosinternos.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Cursosinternos.associations.map(ast => ast.alias));
    const data = _.omit(values, Cursosinternos.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Cursosinternos.create(data);

    // Create relational data and return the entry.
    return Cursosinternos.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an cursosinternos.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Cursosinternos.associations.map(a => a.alias));
    const data = _.omit(values, Cursosinternos.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Cursosinternos.updateOne(params, data, { multi: true });

    // Update relational data and return the entry.
    return Cursosinternos.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an cursosinternos.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Cursosinternos.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Cursosinternos
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Cursosinternos.associations.map(async association => {
        if (!association.via || !data._id || association.dominant) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an cursosinternos.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('cursosinternos', params);
    // Select field to populate.
    const populate = Cursosinternos.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Cursosinternos.attributes).reduce((acc, curr) => {
      switch (Cursosinternos.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Cursosinternos
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};

'use-strict';

const _ = require('lodash');

module.exports = {
  getAnswer: async (ctx) => {
    console.log(ctx);
    return ctx.send(200);
  }
}
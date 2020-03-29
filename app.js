'use strict';

module.exports = async (fastify, opts) => {
  fastify.register(require('./services/healthcheck'), {});
};

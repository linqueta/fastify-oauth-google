'use strict';

module.exports = async (fastify, opts) => {
  fastify.register(require('./plugins/login/google'), {});

  fastify.register(require('./services/healthcheck'), {});
  fastify.register(require('./services/login/google/callback'), {});
};

'use strict';

module.exports = async (fastify, opts) => {
  fastify.register(require('fastify-cookie'), {
    secret: "my-secret", // for cookies signature
    parseOptions: {}     // options for parsing cookies
  })

  fastify.register(require('./plugins/login/google'), {});

  fastify.register(require('./services/healthcheck'), {});
  fastify.register(require('./services/login/google/callback'), {});
};

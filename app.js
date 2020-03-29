'use strict';

module.exports = async (fastify, _opts) => {
  fastify.register(require('fastify-cookie'), {
    secret: 'my-secret', // for cookies signature
    parseOptions: {}     // options for parsing cookies
  });

  fastify.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    }
  });

  fastify.register(require('./plugins/login/google'), {});

  fastify.register(require('./services/healthcheck'), {});
  fastify.register(require('./services/login/page'), {});
  fastify.register(require('./services/login/google/callback'), {});
};

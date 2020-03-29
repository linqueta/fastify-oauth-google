'use strict';

module.exports = async function (fastify) {
  fastify.get('/healthcheck', async () => { return { success: true }; });
};
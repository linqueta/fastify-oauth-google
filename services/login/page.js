'use strict';

module.exports = async function (fastify) {
  fastify.get('/login', async (req, reply) => {
    reply.view('/templates/parent.ejs', {});
    return reply;
  }
  );
};
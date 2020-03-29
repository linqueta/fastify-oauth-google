'use strict';

module.exports = async function (fastify) {
  fastify.get('/login/google/callback', function (request, reply) {
    fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, (err, result) => {
      if (err) {
        return reply.send(err)
      }

      return reply.send(result)
    })
  });
};
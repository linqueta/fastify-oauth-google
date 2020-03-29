'use strict';

module.exports = async function (fastify) {
  fastify.get('/login/google/callback', function (request, reply) {
    fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, (err, result) => {
      if (err) {
        return reply.send(err)
      }

      reply
        .setCookie('google', result.id_token, {
          domain: 'linqueta.com',
          path: '/'
        })
        .send({ result })

      return
    })
  });
};
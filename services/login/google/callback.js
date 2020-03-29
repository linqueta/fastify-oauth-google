'use strict';

module.exports = async function (fastify) {
  fastify.get('/login/google/callback', function (request, reply) {
    fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request, (err) => {
      if (err) {
        return reply.send(err);
      }

      reply
        .setCookie('googleToken', 'YOUR_GOOGLE_ID_TOKEN_SHOULD_BE_RETURNED_HERE', { //result.id_token
          domain: 'linqueta.com',
          path: '/'
        })
        .view('/templates/window.ejs', {});
      return reply;
    });
  });
};
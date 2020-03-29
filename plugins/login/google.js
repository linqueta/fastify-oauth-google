'use strict';

const fp = require('fastify-plugin');
const oauthPlugin = require('fastify-oauth2');

module.exports = fp(async function (fastify) {
  fastify.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['profile'],
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID,
        secret: process.env.GOOGLE_CLIENT_SECRET
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION
    },
    startRedirectPath: '/login/google',
    callbackUri: 'http://local.linqueta.com:3000/login/google/callback'
  });
});
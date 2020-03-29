'use strict';

const Fastify = require('fastify');
const fp = require('fastify-plugin');
const App = require('../app');

function config() {
  return {};
}

function build() {
  const app = Fastify();
  app.register(fp(App), config());
  afterAll(() => {
    app.close();
  });
  return app;
}

module.exports = {
  config,
  build
};
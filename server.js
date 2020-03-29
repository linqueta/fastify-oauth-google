'use strict';

require('dotenv').config();

const Fastify = require('fastify');
const app = Fastify({
  logger: true,
  pluginTimeout: 10000
});

process.on('SIGINT', async () => {
  await app.close();
  process.exit(0);
});

app.register(require('./app.js'));

const port = process.env.PORT || 3000;
const address = process.env.FASTIFY_ADDRESS || '127.0.0.1';

app.listen(port, address, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
module.exports = {
  apps: [{
    name: 'otter',
    script: 'server.js',
    instances: '<PM2_INSTANCES>',
    exec_mode: 'cluster',
    max_memory_restart: '<PM2_MAX_MEMORY>'
  }]
};

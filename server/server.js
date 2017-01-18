'use strict';
const hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 8000,
  routes: {
    files: {
      relativeTo: path.join(__dirname, '..', 'public')
    }
  }
});

server.register(inert, (err) => {
  if (err) {
    throw err;
  }
});

server.route(
  {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: '../public'
      }
    }
  }
);

module.exports = server;

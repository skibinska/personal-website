const test = require('tape');
const server = require('../../server/server');

test('Check the index route', t => {
  const options = {
    method: 'GET',
    url: '/'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

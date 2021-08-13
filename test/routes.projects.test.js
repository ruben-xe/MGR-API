const assert = require('assert');
const proxyquire = require('proxyquire');

const { projectsMock, ProjectsServiceMock } = require('../utils/mocks/projects.js');
const testServer = require('../utils/testServer');

describe('routes - projects', function() {
  const route = proxyquire('../routes/projects', {
    '../services/projects': ProjectsServiceMock
  });

  const request = testServer(route);
  describe('GET /projects', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/projects').expect(200, done);
    });

    it('should respond with the list of projects', function(done) {
      request.get('/api/projects').end((err, res) => {
        assert.deepEqual(res.body, {
          data: projectsMock,
          message: 'projects listed'
        });

        done();
      });
    });
  });
});

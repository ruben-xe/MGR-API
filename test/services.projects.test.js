const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { projectsMock } = require('../utils/mocks/projects');

describe('services - projects', function() {
  const ProjectsServices = proxyquire('../services/projects', {
    '../lib/mongo': MongoLibMock
  });

  const projectsService = new ProjectsServices();

  describe('when getProjects method is called', async function() {
    it('should call the getall MongoLib method', async function() {
      await projectsService.getProjects({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of projects', async function() {
      const result = await projectsService.getProjects({});
      const expected = projectsMock;
      assert.deepEqual(result, expected);
    });
  });
});

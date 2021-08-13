const sinon = require('sinon');

const { projectsMock, filteredProjectsMock } = require('./projects');

const getAllStub = sinon.stub();
getAllStub.withArgs('projects').resolves(projectsMock);

const tagQuery = { tags: { $in: ['Archived'] } };
getAllStub.withArgs('projects', tagQuery).resolves(filteredProjectsMock('Archived'));

const createStub = sinon.stub().resolves(projectsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};

const MongoLib = require('../lib/mongo');

class UserProjectsService {
  constructor() {
    this.collection = 'user-projects';
    this.mongoDB = new MongoLib();
  }

  async getUserProjects({ userId }) {
    const query = userId && { userId };
    const userProjects = await this.mongoDB.getAll(this.collection, query);

    return userProjects || [];
  }

  async createUserProject({ userProject }) {
    const createdUserProjectId = await this.mongoDB.create(
      this.collection,
      userProject
    );

    return createdUserProjectId;
  }

  async deleteUserProject({ userProjectId }) {
    const deletedUserProjectId = await this.mongoDB.delete(
      this.collection,
      userProjectId
    );

    return deletedUserProjectId;
  }
}

module.exports = UserProjectsService;

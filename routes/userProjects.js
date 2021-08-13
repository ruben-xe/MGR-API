const express = require('express');
const passport = require('passport');

const UserProjectsService = require('../services/userProjects');
const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const { projectIdSchema } = require('../utils/schemas/projects');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserProjectSchema } = require('../utils/schemas/userProjects');

// JWT strategy
require('../utils/auth/strategies/jwt');

function userProjectsApi(app) {
  const router = express.Router();
  app.use('/api/user-projects', router);

  const userProjectsService = new UserProjectsService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-projects']),
    validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
      const { userId } = req.query;

      try {
        const userProjects = await userProjectsService.getUserProjects({ userId });

        res.status(200).json({
          data: userProjects,
          message: 'user projects listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-Projects']),
    validationHandler(createUserProjectSchema),
    async function(req, res, next) {
      const { body: userProject } = req;

      try {
        const createdUserProjectId = await userProjectsService.createUserProject({
          userProject
        });

        res.status(201).json({
          data: createdUserProjectId,
          message: 'user project created'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:userProjectId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-projects']),
    validationHandler({ userProjectId: projectIdSchema }, 'params'),
    async function(req, res, next) {
      const { userProjectId } = req.params;

      try {
        const deletedUserProjectId = await userProjectsService.deleteUserProject({
          userProjectId
        });

        res.status(200).json({
          data: deletedUserProjectId,
          message: 'user project deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userProjectsApi;

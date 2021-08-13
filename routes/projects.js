const express = require('express');
const passport = require('passport');
const ProjectsService = require('../services/projects');

const {
  projectIdSchema,
  createProjectSchema,
  updateProjectSchema
} = require('../utils/schemas/projects');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

// JWT strategy
require('../utils/auth/strategies/jwt');

function projectsApi(app) {
  const router = express.Router();
  app.use('/api/projects', router);

  const projectsService = new ProjectsService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:projects']),
    async function(req, res, next) {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;

      try {
        const projects = await projectsService.getProjects({ tags });

        res.status(200).json({
          data: projects,
          message: 'projects listed'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:projectId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:projects']),
    validationHandler({ projectId: projectIdSchema }, 'params'),
    async function(req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { projectId } = req.params;

      try {
        const project = await projectsService.getProject({ projectId });
        
        res.status(200).json({
          data: project,
          message: 'project retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:projects']),
    validationHandler(createProjectSchema),
    async function(req, res, next) {
      const { body: project } = req;
      try {

        const createdProjectId = await projectsService.createProject({ project });

        res.status(201).json({
          data: createdProjectId,
          message: 'project created'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:projectId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:projects']),
    validationHandler({ projectId: projectIdSchema }, 'params'),
    validationHandler(updateProjectSchema),
    async function(req, res, next) {
      const { projectId } = req.params;
      const { body: project } = req;

      try {
        const updatedProjectId = await projectsService.updateProject({
          projectId,
          project
        });

        res.status(200).json({
          data: updatedProjectId,
          message: 'project updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:projectId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:projects']),
    validationHandler({ projectId: projectIdSchema }, 'params'),
    async function(req, res, next) {
      const { projectId } = req.params;

      try {
        const deleteProjectId = await projectsService.deleteProject({ projectId });

        res.status(200).json({
          data: deleteProjectId,
          message: 'project deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = projectsApi;

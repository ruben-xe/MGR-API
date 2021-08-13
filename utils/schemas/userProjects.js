const joi = require('@hapi/joi');

const { projectIdSchema } = require('./projects');
const { userIdSchema } = require('./users');

const userProjectIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserProjectSchema = {
  userId: userIdSchema,
  projectId: projectIdSchema
};

module.exports = {
  userProjectIdSchema,
  createUserProjectSchema
};

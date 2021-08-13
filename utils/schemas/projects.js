const joi = require('@hapi/joi');

const projectIdSchema = joi.any();
// const projectIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const projectCategorySchema = joi.string().max(80);
const projectTitleSchema = joi.string().max(80);
const projectDescriptionSchema = joi.string().max(300);
const projectPlaceSchema = joi.string().max(80);
const projectTenderDateSchema = joi.string().max(80);
const projectStartOfWorkSchema = joi.string().max(80);
const projectEndOfWorkSchema = joi.string().max(80);
const projectConstructionSiteStatusSchema = joi.any()
const projectObservationsSchema = joi.any()
// const projectConstructionSiteStatusSchema = joi.array().items(joi.string().max(50));
// const projectYearSchema = joi
//   .number()
//   .min(1888)
//   .max(2077);
// const projectCoverSchema = joi.string().uri();
// const projectDescriptionSchema = joi.string().max(300);
// const projectDurationSchema = joi
//   .number()
//   .min(1)
//   .max(300);
// const projectContentRatingSchema = joi.string().max(5);
// const projectSourceSchema = joi.string().uri();

const createProjectSchema = {
  category: projectCategorySchema.required(),
  title: projectTitleSchema.required(),
  description: projectDescriptionSchema.required(),
  place: projectPlaceSchema.required(),
  tenderDate: projectTenderDateSchema.required(),
  startOfWork: projectStartOfWorkSchema.required(),
  endOfWork: projectEndOfWorkSchema.required(),
  constructionSiteStatus: projectConstructionSiteStatusSchema,
  observations: projectObservationsSchema
};

const updateProjectSchema = {
  category: projectCategorySchema,
  title: projectTitleSchema,
  description: projectDescriptionSchema,
  place: projectPlaceSchema,
  tenderDate: projectTenderDateSchema,
  startOfWork: projectStartOfWorkSchema,
  endOfWork: projectEndOfWorkSchema,
  constructionSiteStatus: projectConstructionSiteStatusSchema,
  observations: projectObservationsSchema
};

module.exports = {
  projectIdSchema,
  createProjectSchema,
  updateProjectSchema
};

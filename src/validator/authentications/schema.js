const Joi = require('joi');

const PostAuthenticationPayloadScema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const PutAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const DeleteAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  PostAuthenticationPayloadScema,
  PutAuthenticationPayloadSchema,
  DeleteAuthenticationPayloadSchema,
};

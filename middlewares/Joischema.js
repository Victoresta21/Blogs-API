const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email().required()
    .messages(
      { 'email.required': '"email" is required' },
    ),
  password: Joi.string().min(6).required()
    .messages(
      { 
        'string.min': '"password" length must be 6 characters long',
      },
    ),
  image: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required()
    .messages(
      { 
        'email.required': '"email" is required',
        'email.empty': '"email" is not allowed to be empty',
      },
    ),
  password: Joi.string().required()
    .messages(
      { 
        'string.required': '"password" is required',
        'string.empty': '"password" is not allowed to be empty',
      },
    ),
});

module.exports = {
  userSchema,
  loginSchema,
};

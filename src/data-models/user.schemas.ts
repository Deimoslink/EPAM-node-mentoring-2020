import * as Joi from '@hapi/joi';

export const createUserSchema = Joi.object({
    login: Joi.string().alphanum().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).required(),
    isDeleted: Joi.boolean()
});

export const updateUserSchema = Joi.object({
    login: Joi.string().alphanum().optional(),
    password: Joi.string().alphanum().optional(),
    age: Joi.number().min(4).max(130).optional(),
    isDeleted: Joi.boolean().optional()
});

export const getUsersQuerySchema = Joi.object({
    loginSubstring: Joi.string().optional(),
    limit: Joi.number().optional()
});

const { celebrate, Joi } = require('celebrate'); // библиотека валидации
Joi.objectId = require('joi-objectid')(Joi); // для избежания ошибки objectId

// Данные о фильме
const createMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    trailerLink: Joi.string().required(),
    thumbnail: Joi.string().required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

// удалить фильм
const delMovie = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().required(),
  }),
});

module.exports = {
  createMovie,
  delMovie,
};

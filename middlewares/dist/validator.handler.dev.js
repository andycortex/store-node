"use strict";

var boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return function (req, res, next) {
    var data = req[property];

    var _schema$validate = schema.validate(data, {
      abortEarly: false
    }),
        error = _schema$validate.error;

    if (error) {
      next(boom.badRequest(error));
    }

    next();
  };
}

module.exports = validatorHandler;
"use strict";

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    var output = err.output;
    res.status(output.statusCode).json(output.payload);
  }

  next(err);
}

module.exports = {
  logErrors: logErrors,
  errorHandler: errorHandler,
  boomErrorHandler: boomErrorHandler
};
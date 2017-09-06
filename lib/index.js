'use strict';

module.exports = init;

function init(config) {

  return middleware;
}

function middleware(req,res,next) {

  const hostname = req.hostname;
  const path = req.path;

  console.log({ hostname, path });
  next();
}

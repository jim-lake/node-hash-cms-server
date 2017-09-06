'use strict';

const _ = require('lodash');
const async = require('async');
const express = require('express');
const mysql = require('mysql');
const http = require('http');
const morgan = require('morgan');
const cookie_parser = require('cookie-parser');
const hash_cms_server = require('..');

const db_config = {
  "host": process.env.DB_HOST,
  "user": process.env.DB_USER || "cms",
  "password": process.env.DB_PASSWORD || "password",
  "database": process.env.DB_NAME || "cms",
};
const db_pool = mysql.createPool(db_config);

const app = express();
const port = process.env.PORT || 3000;
app.set('port',port);
app.use(morgan('[:date] :method :url :status :res[content-length] - :response-time ms'));
app.use(cookie_parser());

const cms_config = {
  db_pool,
};
app.use(hash_cms_server(cms_config));

app.listen(port,() => {
  console.log("example listening on port:",port);
});

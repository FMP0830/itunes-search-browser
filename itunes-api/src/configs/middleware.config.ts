const bodyParser = require('body-parser');
const logger = require('morgan');
const express = require('express');
const path = require('path');

module.exports = (app: any) => {
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static(path.join(__dirname, '..', 'public')));
};

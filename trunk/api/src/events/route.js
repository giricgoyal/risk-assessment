'use strict';

// import npm modules
var express = require('express');
var router = express.Router();
var passport = require('passport');

// import project modules
var controller = require('./controller');

router.get('/:threat',
    (req, res, next) => {
        next();
    },
    controller.getEvents
);

module.exports = router;
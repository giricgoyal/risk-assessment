'use strict';

var Model = require('./model');
var utility = require('../common/utility');

var controller = {};

controller.getEvents = function(req, res, next) {
    var obj = req.body;
    obj.deletedOn = null;

    var promise = Model.find(obj).exec();

    promise.then(function(resp) {
        res.status(200).json({
            result: resp
        });
    }, function(err) {
        res.status(400).json({
            result: err,
            message: 'An error occured.'
        });
    });
};

module.exports = controller;
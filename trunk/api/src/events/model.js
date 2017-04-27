'use strict';

var mongoose = require('mongoose');
var commonModel = require('../common/model');
var utility = require('../common/utility');

// model
var model = commonModel.extendBase();
model.add({
    event_id: {
        type: String
    },
    event_name: {
        type: String
    },
    risk_class: {
        type: String
    },
    risk_type: {
        type: String
    },
    risk_group: {
        type: String
    },
    threat: {
        type: String
    },
    super_region: {
        type: String
    },
    country: {
        type: String
    },
    country_iso2: {
        type: String
    },
    location: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    },
    local_time: {
        type: Number
    },
    magnitude_1: {
        type: String
    },
    value_1: {
        type: Number
    },
    magnitude_2: {
        type: String
    },
    value_2: {
        type: Number
    },
    magnitude_3: {
        type: String
    },
    value_3: {
        type: Number
    },
    fatalities: {
        type: Number
    },
    affected_people: {
        type: Number
    },
    economic_loss: {
        type: Number
    }
});

// indices


var mongooseModel = mongoose.model('events', model);

module.exports = mongooseModel;
'use strict';

var mongoose = require('mongoose');
var commonModel = require('../common/model');
var utility = require('../common/utility');

// model
var model = commonModel.extendBase();
model.add({
    country_iso2: {
        type: String
    },
    country: {
        type: String
    },
    average_annual_gdp: {
        type: Number
    },
    total_exposure_value: {
        type: Number
    },
    preparedness_index: {
        type: Number
    },
    coverage_gap: {
        type: Number
    },
    top_threat_1: {
        type: String
    },
    exposure_value_1: {
        type: Number
    },
    top_threat_2: {
        type: String
    },
    exposure_value_2: {
        type: Number
    },
    top_threat_3: {
        type: String
    },
    exposure_value_3: {
        type: Number
    },
    top_threat_4: {
        type: String
    },
    exposure_value_4: {
        type: Number
    },
    top_threat_5: {
        type: String
    },
    exposure_value_5: {
        type: Number
    }
});

// indices


var mongooseModel = mongoose.model('genome_base', model);

module.exports = mongooseModel;
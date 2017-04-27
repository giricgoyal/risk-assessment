'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Model = require('./src/users/model');
var ClientModel = require('./src/users/clients/model');
var GenomeModel = require('./src/genome-base/model');
var EventModel = require('./src/events/model');
var utility = require('./src/common/utility');
var async = require('async');

mongoose.Promise = require('bluebird');

var config = require('./config/config');
console.log('connecting to ', config.mongodb.ip, config.mongodb.db);
var mongoUri = 'mongodb://' + config.mongodb.ip + '/' + config.mongodb.db;
mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error', function() {
    throw new Error('unable to connect to database at ' + mongoUri);
});

var addUser = function() {
    var userobj = {
        firstname: 'Giric',
        lastname: 'Goyal',
        phonenumber: 9818827376,
        password: 'P@ssw0rd',
        email: 'giricgoyal@silicosense.com',
        admin: true
    };

    var promise = Model.findOne({
        deletedOn: null,
        phonenumber: 9818827376
    }).exec();

    promise.then((response) => {
        if (response && response._id) {

            var promise = Model.update({
                phonenumber: 9818827376
            }, {
                $set: {
                    updatedOn: new Date(),
                    email: 'giricgoyal@silicosense.com'
                }
            }).exec();

            promise.then((response) => {
                console.log('admin added');
            }, function(err) {
                console.error(err);
            });
        } else {

            userobj = new Model(userobj);

            var clientObj = {
                phonenumber: userobj.phonenumber,
                clientId: utility.generateRandomString(),
                clientSecret: utility.generateRandomString(),
            };

            clientObj = new ClientModel(clientObj);

            var clientPromise = clientObj.save();

            var userpromise = userobj.save();
            userpromise.then(function(result) {
                clientPromise.then(function(innerRes) {
                    console.log('added');
                }, function(err) {
                    console.error(err);
                });
            }, function(err) {
                console.error(err);
            });
        }
    });
};

var populateData = function(file, collection, model) {
    const csvFilePath = `data/${file}`;
    const csv = require('csvtojson');
    var json = [];
    console.log('Reading file ' + csvFilePath);
    var counter = 0;
    csv()
        .fromFile(csvFilePath)
        .on('json', (jsonObj) => {
            json.push(jsonObj);
        })
        .on('done', (error) => {
            if (error) {
                console.log(error);
                return;
            } else {

                var mi = require('mongoimport');

                var conf = {
                    fields: json, // {array} data to import 
                    db: config.mongodb.db,
                    collection: collection,
                    host: config.mongodb.ip,
                    username: '',
                    password: '',
                    callback: (err, db) => {} // {function} [optional] 
                };

                model.remove({}).exec().then((resp) => {
                    mi(conf);
                    console.log("done");
                }, (err) => {
                    console.log(err);
                });
            }
        });
};

// addUser();
populateData('genome-base.csv', 'genome_base', GenomeModel);
populateData('events.csv', 'events', EventModel);
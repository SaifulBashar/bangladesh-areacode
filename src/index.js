"use strict"
const _ = require("lodash");
const data = require("../data/nwd.json");

exports.all = function () {
    return data;
}
exports.find = function (location) {
    let areaDetails = _.find(data,{"location":location});
    return areaDetails.code;
}
exports.areaCode=function (code) {
    let locationArray = [];
    _.forEach(data, function(value) {
        if(value.code == code){
            locationArray.push(value.location);
        }
    });
    return locationArray;
}


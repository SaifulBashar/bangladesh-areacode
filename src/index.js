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


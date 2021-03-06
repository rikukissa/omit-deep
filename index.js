'use strict';

var isObject = require('isobject');
var forOwn = require('for-own');
var omit = require('omit-keys');

module.exports = function omitDeep(obj, props) {
  var o = {};

  forOwn(obj, function (value, key) {
    if (isObject(value)) {
      o[key] = omitDeep(value, props);
    } else {
      o[key] = value;
    }
  });

  return omit(o, props);
};
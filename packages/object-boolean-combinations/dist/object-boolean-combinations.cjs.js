/**
 * object-boolean-combinations
 * Consumes a defaults object with booleans, generates all possible variations of it
 * Version: 2.12.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-boolean-combinations/
 */

'use strict';

var intersection = require('lodash.intersection');
var pull = require('lodash.pull');
var isObject = require('lodash.isplainobject');
var clone = require('lodash.clonedeep');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var intersection__default = /*#__PURE__*/_interopDefaultLegacy(intersection);
var pull__default = /*#__PURE__*/_interopDefaultLegacy(pull);
var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);
var clone__default = /*#__PURE__*/_interopDefaultLegacy(clone);

function objectBooleanCombinations(originalIncomingObject, originalOverrideObject) {
  var forceBool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  function combinations(n) {
    var r = [];
    for (var i = 0; i < 1 << n; i++) {
      var c = [];
      for (var j = 0; j < n; j++) {
        c.push(i & 1 << j ? 1 : 0);
      }
      r.push(c);
    }
    return r;
  }
  if (!originalIncomingObject) {
    throw new Error("[THROW_ID_01] missing input object");
  }
  if (!isObject__default['default'](originalIncomingObject)) {
    throw new Error("[THROW_ID_02] the first input object must be a true object");
  }
  if (originalOverrideObject && !isObject__default['default'](originalOverrideObject)) {
    throw new Error("[THROW_ID_03] the second override object must be a true object");
  }
  var incomingObject = clone__default['default'](originalIncomingObject);
  var overrideObject = clone__default['default'](originalOverrideObject);
  var propertiesToMix = Object.keys(incomingObject);
  var outcomingObjectsArray = [];
  var propertiesToBeOverridden;
  var override = false;
  if (overrideObject && Object.keys(overrideObject).length !== 0) {
    override = true;
  }
  if (override) {
    propertiesToBeOverridden = intersection__default['default'](Object.keys(overrideObject), Object.keys(incomingObject));
    propertiesToBeOverridden.forEach(function (elem) {
      return pull__default['default'](propertiesToMix, elem);
    });
  }
  var boolCombinations = combinations(Object.keys(propertiesToMix).length);
  var tempObject = {};
  boolCombinations.forEach(function (elem1, index1) {
    tempObject = {};
    propertiesToMix.forEach(function (elem2, index2) {
      tempObject[elem2] = boolCombinations[index1][index2] === 1 ? forceBool ? true : 1 : forceBool ? false : 0;
    });
    outcomingObjectsArray.push(tempObject);
  });
  if (override) {
    outcomingObjectsArray.forEach(function (elem3) {
      return propertiesToBeOverridden.forEach(function (elem4) {
        elem3[elem4] = overrideObject[elem4];
      });
    });
  }
  return outcomingObjectsArray;
}

module.exports = objectBooleanCombinations;

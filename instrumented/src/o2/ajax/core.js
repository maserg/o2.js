/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['ajax/core.js']) {
  _$jscoverage['ajax/core.js'] = [];
  _$jscoverage['ajax/core.js'][1] = 0;
  _$jscoverage['ajax/core.js'][15] = 0;
  _$jscoverage['ajax/core.js'][38] = 0;
  _$jscoverage['ajax/core.js'][39] = 0;
}
_$jscoverage['ajax/core.js'][1]++;
"use strict";
_$jscoverage['ajax/core.js'][15]++;
var stringCore = require("./node_modules/o2.string/core");
_$jscoverage['ajax/core.js'][38]++;
exports.sayHi = (function () {
  _$jscoverage['ajax/core.js'][39]++;
  return stringCore.sayHi();
});
_$jscoverage['ajax/core.js'].source = ["'use strict';","","/*"," *  This program is distributed under the terms of the MIT license."," *  Please see the LICENSE.md file for details."," */","","/**"," *  An **XMLHttpRequest** helper module."," *"," * @module o2.ajax"," * @requires o2.string"," */","","var stringCore = require('./node_modules/o2.string/core');","","/**"," * @class o2.ajax.core"," * @uses o2.string.core"," */","","/**"," * Returns a welcome `String`."," *"," * Usage example:"," *"," * @example"," *     var ajaxUtil = require('ajax/core');"," *"," *     // `greeting` will be a welcome text of type `String`."," *     var greeting = ajaxUtil.sayHi();"," *"," * @method sayHi"," * @static"," *"," * @returns {String} The welcome `String`."," */","exports.sayHi = function() {","    return stringCore.sayHi();","};"];

'use strict';

/*
 * o2.js JavaScript Framework (http://o2js.com - info@o2js.com)
 *
 * This program is distributed under the terms of the MIT license.
 * Please see the LICENSE.md file for details.
 */

exports.noop = function() {};

exports.identity = function(x) {return x;};

/**
 * Executes **delegate** on the next possible time slice.
 *
 * @param {Function} delegate
 */
exports.next = function(delegate) {
    setTimeout(delegate, 0);
};

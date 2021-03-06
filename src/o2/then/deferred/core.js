'use strict';

/*
 * o2.js JavaScript Framework (http://o2js.com - info@o2js.com)
 *
 * This program is distributed under the terms of the MIT license.
 * Please see the LICENSE.md file for details.
 */

var Promise = require('../promise/core'),

    state = require('./state/core'),

    isPromise, noop,

    privates = require('./privates/core'),
    reject = privates.reject,
    resolve = privates.resolve,
    chain = privates.chain,

    validation = require('../../validation/core'),
    functional = require('../../functional/core');

if (!validation) {
    throw new Error('Please run `npm install o2.validation` first.');
}

if (!functional) {
    throw new Error('Please run `npm install o2.functional` first.');
}

isPromise = validation.isPromise;
noop = functional.noop;

function Deferred() {
    this.state = state.PENDING;
    this.outcome = null;
    this.futures = [];
    this.promise = new Promise(this, Deferred);
}

Deferred.prototype.resolve = function(value) {
    if (isPromise(value)) {
        chain(this, value);

        this.resolve = noop;

        return;
    }

    resolve(this, value);

    this.resolve = noop;
};

Deferred.prototype.reject = function(reason) {
    this.state = state.REJECTED;
    this.outcome = reason;

    reject(this, reason);

    this.reject = noop;
};

module.exports = Deferred;

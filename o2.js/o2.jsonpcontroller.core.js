/**
 * @module   jsonpcontroller
 * @requires core
 * @requires ajaxcontroller
 * @requires jsonpstate
 * @requires objecthelper
 *
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 *
 *  lastModified: 2012-02-16 13:19:12.065723
 * -->
 *
 * <p>A <code>JSONP</code> controller that implements the
 * <strong>Observer</strong> pattern.</p>
 */
(function(framework, window) {
    'use strict';

//    var _         = framework.protecteds;
/*    var alias     = _.alias;
    var attr      = _.getAttr;
    var construct = _.construct;
    var create    = _.create;
    var def       = _.define;
    var obj       = _.getObject;
    var proto     = _.proto;
    var require   = _.require;*/

    /*
     * Aliases
     */

    var nill = require('nill');

    var state = require('JsonpState');

    var copyMethods = require('ObjectHelper', 'copyMethods');

    /**
     * @class o2.JsonpController
     * @extends o2.AjaxController
     *
     * <p>A JSONP <code>Controller</code>. Registers itself to {@link
     * JsonpState} <code>Observable</code> upon construction.</p>
     *
     * <p>Implements the <code>Observer</code> interface.</p>
     */

    /**
     * @constructor o2.JsonpController.JsonpController
     *
     * See
     * http://download.oracle.com/javase/1.4.2/docs/api/java/util/Observer.html
     *
     * @param {String} jsonp - the current jsonp unique identifier.
     * @param {Object} args - an associative array in the form
     * {timeout:[timeoutInMilliSeconds], ontimeout: [function]}
     * both attributes are optional.
     */
    var me = construct('JsonpController', function(jsonp, args) {
        this.jsonp = jsonp;
        this.timeout = (args && args.timeout) || null;
        this.ontimeout = (args && args.ontimeout) || nill;

        // Register self.
        state.addObserver(this);
    });

    /*
     * State
     */
    var purgeQueue = [];

    var base = attr(framework, 'AjaxController');
    var self = attr(framework, 'JsonpController');

    // A quick way of inheriting methods.
    copyMethods(self.prototype, base.prototype);

    /*
     *
     */
    var sp = self.prototype;

    /**
     * @function {override} o2.JsonpController.update
     *
     * <p>Overrides {@link o2.AjaxController.update}.</p>
     *
     * @param {JsonpState} observable - the <code>Observable</code> state
     * object.
     * @param {Object} data - parameters passed from the
     * <code>Observable</code> to this <code>Observer</code>.
     *
     * @see o2.AjaxController.update
     */
    sp.update = function(data) {
        if (!data.isTimedOut) {
            return;
        }

        // Unregister self from the observable.
        this.unregister(observable);

        // Abort the request.
        window[this.jsonp] = nill;

        // Purge former requests to prevent memory leak.
        purgeQueue.push(this.jsonp);

        while (purgeQueue.length > 1) {
            delete window[purgeQueue.shift()];
        }

        // Execute callback.
        this.ontimeout();
    };

    /**
     * @function {override} o2.JsonpController.unregister
     *
     * <p>Overrides {@link o2.AjaxController.unregister}.</p>
     *
     * <p>Unregisters this object from its associated observable.
     * (<em>i.e. <strong>JsonpState</strong></em>)</p>
     */
    sp.unregister = function() {
        if (this.isDeleted) {
            return;
        }

        state.deleteObserver(this);
    };

}(this.o2, this));
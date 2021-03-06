define([
    '../../core',
    '../../string/core'
], function(
    o2,
    StringUtil
) {
    'use strict';

        /*
         * # Module Exports
         */

    var exports = {},

        /*
         * # Aliases
         */

        /*
         * core
         */
        $ = o2.$,

        /*
         * string.core
         */
        concat = StringUtil.concat,

        /*
         * # Common Constants
         */

        kBeginOrBlank = '(\\s|^)',
        kBlank = ' ',
        kEndOrBlank = '(\\s|$)',

        /*
         * # To be Overridden
         */

        // CHECK: use one of these w/o defining here (defining after the fn)
        // and check if jshint complains.
        createClassNameRegExp ,
        hasClass,
        addClass,
        removeClass;

    exports.createClassNameRegExp = function(c) {
        return new RegExp(concat(kBeginOrBlank, c, kEndOrBlank));
    };

    /*
     *
     */
    createClassNameRegExp = exports.createClassNameRegExp;

    exports.hasClass = function(el, c) {
        el = $(el);

        if (!el) {return false;}

        return createClassNameRegExp(c).test(el.className);
    };

    /*
     *
     */
    hasClass = exports.hasClass;

    exports.addClass = function(el, c) {
        el = $(el);

        if (!el) {return;}
        if (hasClass(el, c)) {return;}

        el.className += concat(kBlank, c);
    };

    /*
     *
     */
    addClass = exports.addClass;

    exports.removeClass = function(el, c) {
        el = $(el);

        if (!el) {return;}
        if (!hasClass(el, c)) {return;}

        el.className = el.className.replace(createClassNameRegExp(c), kBlank);
    };

    /*
     *
     */
    removeClass = exports.removeClass;

    exports.toggleClass = function(el, c, state) {
        if (state !== undefined) {
            if (state) {
                addClass(el, c);

                return;
            }

            removeClass(el, c);

            return;
        }

        if (hasClass(el, c)) {
            removeClass(el, c);

            return;
        }

        addClass(el, c);
    };

    return exports;
});

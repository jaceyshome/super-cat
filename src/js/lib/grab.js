import $ from 'jquery';

/**
 * Reference： https://bitbucket.org/sydneyuni/garfield
 * Helps you "grab" DOM element targets relative to a scope Element. Think of it as a semi-scoped instance of $ with extra sugar.
 * The target can be specified in four ways:
 *
 * - A regular selector (.example), in which case elements will be selected relative to the scope, depending on the direction
 * - A selector starting with an ID (#example .example), in which case an element will be selected from anywhere in the document
 * - A data attribute key (@example), in which case the attribute specified will be used to try to find an element using the first two rules
 * - A jQuery or DOM element, in which case it will be immediately returned as a jQuery object
 *
 * `grab` is intended to make it easy to work with configurable properties and attributes.
 *
 * ## Examples
 *
 * Basic usage:
 *
 * ```
 * <div class="items" data-items=".item">
 *      <div class="item" id="item"></div>
 * </div>
 *  ```
 * All these will return the same element:
 *
 * ```
 * grab('.item', $('.items'));
 * grab('#item', $('.items'));
 * grab('@item', $('.items'));
 * ```
 *
 * Since `grab` is intended mainly for use with config options, it's more useful when you combine it with a configuration object to allow users to pass in a variety of option values:
 *
 * ```
 * function myBehaviour(config, el) {
 *      let $el = $(el);
 *      let $items = grab(config.items, $el);
 *      $items.doSomethingAmazing();
 * }
 *
 * myBehaviour({ items: '.item' }, '.some-element');
 * myBehaviour({ items: $('<div class="item"></div>') }, '.some-other-element');
 * myBehaviour({ items: '@items' }, $('<div class="some-third-element" data-items=".item"><div class="item"></div></div>'))
 * ```
 *
 * @param {Object} target - The target element, selector or attribute name
 * @param {Object} scope - The element to grab relative to (e.g. select inside, or before or after, or the location of the selector attribute)
 * @param {string} direction - The direction to select in ("before"; before scope element, "after"; after scope element, "inside"; Default, inside scope element)
 * @returns {Object} - jQuery element
 */
let grab = function(target, scope, direction = 'inside') {
    if (target instanceof $) {
        return target;
    }

    if (target instanceof Element) {
        return $(target);
    }

    if (typeof target !== 'string') {
        console.warn("Invalid target type.");
        return $();
    }

    if (target.charAt(0) == '@') {
        target = $(scope).data()[$.camelCase(target.substring(1))];
    }

    if (target.charAt(0) == '#') {
        if (direction && direction != 'inside') {
            console.warn(`ID selector (${direction}) combined with direction '${direction}' won't work as expected.`);
        }

        return $(target);
    }

    let method;
    if (direction == 'before') {
        method = 'prevAll';
    } else if (direction == 'next') {
        method = 'nextAll';
    } else {
        if (direction && direction != 'inside' ) {
            console.warn(`Trying to use invalid grab direction '${direction}'.`);
        }
        method = 'find';
    }

    return $(scope)[method](target);
};

export default grab;

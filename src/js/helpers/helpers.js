import {Booleans} from './booleans';
import {Browser} from './browser';
import {Colors} from './colors';
import {Dates} from './dates';
import {Element} from './element';
import {Objects} from './objects';
import {Numbers} from './numbers';
import {Strings} from './strings';
import {URI} from './uri';
import {View} from './view';
import {XML} from './xml';


/**
 * A collection of the helpers classes: Strings, Booleans, Colors and Numbers
 * @example
 *  Helpers.Numbers.isNumber(0);
 *  // -> true
 *  Helpers.Strings.random(4);
 *  // -> af2d
 * @type {{Booleans: Booleans, Numbers: Numbers, Colors: Colors, Strings: Strings}}
 */
let Helpers = {
    Booleans,
    Browser,
    Colors,
    Dates,
    Element,
    Numbers,
    Objects,
    Strings,
    URI,
    View,
    XML
};

export { Helpers };

import $ from 'jquery';
import _ from 'lodash';
import {Constants} from '../lib/constants';
import grab from '../lib/grab';

/**
 * Element utils
 */
class Element {

    /**
     *
     * @param {!String} name - the property 'data-js-el' value
     * @param {!$element} $target - the candidate container
     * @param options
     * @returns {$element|element} - element will be jquery element or dom element
     */
    static get (name, $target, options={attribute: Constants.ELEMENT_PROPERTY}) {
        if(name.startsWith("$")) {
            //return jquery element
            return $(Element.get(name.substr(1), $target));
        }
        //return dom element
        return name ? grab(`[${options.attribute}='${_.kebabCase(name)}']`, $target)[0] : null;
    }

    /**
     * Add 'data-js-el' property and value to $element
     * @param name
     * @param element
     */
    static addProperty(name, element, options={attribute: Constants.ELEMENT_PROPERTY}) {
        $(element).attr(options.attribute, _.kebabCase(name));
    }

    /**
     * List elements in a container
     * @param name
     * @param $container
     * @param options
     * @returns {*}
     */
     static listElements(name, $container, options={attribute: Constants.ELEMENT_PROPERTY}) {
        if(Array.isArray(name)) {
            return _.map(name, (candidate)=> {
                return {name: candidate, el: Element.get(candidate, $container)};
            });
        }
        if(_.isString(name)) {
            return _.map(grab(`[${options.attribute}="${_.kebabCase(name)}"]`, $container), (el)=> {
                return $(el);
            });
        }
        return undefined;
    }


}


export { Element };

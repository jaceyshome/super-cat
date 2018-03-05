import {Element} from './element';
import superviews from 'superviews';


const argstr = "m";
const mode = "browser";

//TODO View helpers to create dynamic view template from static view
/**
 * Dynamic view class
 */
class View {

    /**
     * Create view template fn
     * @param name
     * @param tpl
     */
    static createTemplateFn(tpl, name) {
        return superviews(tpl, name, argstr, mode);
    }

    static convertToTemplateFn($el) {
        let result = $el.html();
    }

}

export {View};
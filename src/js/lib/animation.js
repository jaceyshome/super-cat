import { Helpers } from "../helpers/helpers";
import _ from "lodash";
import $ from 'jquery';

/**
 * It defines all the javascript based animations across all sites
 */
class Animation {

    static scrollTop(position, runtime) {
        position = position || 0;
        runtime = runtime || 100;
        $("html, body").animate({scrollTop:position}, runtime);
    }

}

export {Animation};

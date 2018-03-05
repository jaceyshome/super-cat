import FeaturedComponent from '../../../js/lib/featured-component';
import {configurable} from '../../../js/lib/config';     //configurable object, is used to initalize the this.config abject and initial state

import {catListCounterTplFn} from './cat-list-counter-tpl';

//jshint-ignore
@configurable({
    title: null,
})
//jshint-ignore-end

/**
 * Cat list counter demo
 *
 * @example <div class="b-js-cat-list-counter"></div>
 */
export class CatListCounter extends FeaturedComponent {
    /**
     * @param {!Object} el - This component
     * @param {Object} options - the configurable options
     */
    constructor(el, options) {
        super(el, options);

        this._data = [
            {name: "cat 1", counter: 1},
            {name: "cat 2", counter: 2},
            {name: "cat 3", counter: 3}
        ];

        /**
         * catListCounterTplFn is compiled by the 'gulp build-view-templates' task
         * it appends itself to this.$el
         */
        this._createDynamicPartial({
            templateFn: catListCounterTplFn,
            data: this._data
        });

        //Get title jquery object and set the value with config title
        this._childElements.$title.html(this.config.title);
    }


    /*---------------------------- view handlers ----------------------------*/
    clickCat(cat) {
        cat.counter += 1;
    }

    /*---------------------------- Init() --------------------------------------*/
    /**
     * Return a new instance of this component
     * @param {Object} el - the component
     * @param {Object} options - the component options
     * @returns {Object} this component
     */
    static init(el, options) {
        return new CatListCounter(el, options);
    }

}

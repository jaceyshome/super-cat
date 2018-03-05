import FeaturedComponent from '../../../js/lib/featured-component';
import _ from 'lodash';
import {Helpers} from '../../../js/helpers/helpers';
import {configurable} from '../../../js/lib/config';     //configurable object, is used to initalize the this.config abject and initial state
import {catListTplFn} from './cat-list-tpl';
import CatService from '../cat-service';


//jshint-ignore
@configurable({

})
//jshint-ignore-end

/**
 * Cat list component
 *
 * @example <div class="b-js-cat-list"></div>
 */
export class CatList extends FeaturedComponent {
    /**
     * @param {!Object} el - This component
     * @param {Object} options - the configurable options
     */
    constructor(el, options) {
        super(el, options);

        //-------------------- initialise ---------------------
        //Subscribe to "cats" and "selectedCat" of this._data in CatService
        this._subscribeToData(CatService, "cats", this.handleNotification);
        this._subscribeToData(CatService, "selectedCat", this.handleNotification);

        //Create this._data
        this._data = {
            cats: this._notifications.cats.proxy,
            selectedCat: this._notifications.selectedCat.proxy,
            description: "Click a cat to show the detail"
        };

        //Create dynamic partial
        this._dynamicPartial = this._createDynamicPartial({
            templateFn: catListTplFn,
            data: this._data
        });

        this._proxy = this._dynamicPartial.vm.proxy;
        this._callHook();
    }



    /*--------------------- data service notification handlers --------------------------*/
    handleNotification(keyPath, data) {
        this._dynamicPartial.view.render();
    }



    /*---------------------------- view handlers ----------------------------*/
    //View handlers are public functions
    addCat() {
        this._proxy.cats.push({
            name: Helpers.Strings.random(8),
            counter: 1,
            src: "http://lorempixel.com/400/300/cats/"
        });
    }

    clickCat(cat) {
        this._proxy.description = "Great";
        cat.counter += 1;
    }

    editCat(cat) {
        Object.assign(this._proxy.selectedCat, cat);
    }

    deleteCat(cat) {
        _.remove(this._proxy.cats, candidate => Object.is(candidate.name, cat.name));
    }

    /*---------------------------- Init() --------------------------------------*/
    /**
     * Return a new instance of this component
     * @param {Object} el - the component
     * @param {Object} options - the component options
     * @returns {Object} this component
     */
    static init(el, options) {
        return new CatList(el, options);
    }

}

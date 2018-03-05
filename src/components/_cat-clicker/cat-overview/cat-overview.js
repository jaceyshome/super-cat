import FeaturedComponent from '../../../js/lib/featured-component';
import _ from 'lodash';
import {Helpers} from '../../../js/helpers/helpers';
import {configurable} from '../../../js/lib/config';     //configurable object, is used to initalize the this.config abject and initial state
import {catListCounterTplFn} from '../cat-list-counter/cat-list-counter-tpl';
import CatService from '../cat-service';


//jshint-ignore
@configurable({

})
//jshint-ignore-end

/**
 * Cat list component
 *
 * @example <div class="b-js-cat-overview"></div>
 */
export class CatOverview extends FeaturedComponent {
    /**
     * @param {!Object} el - This component
     * @param {Object} options - the configurable options
     */
    constructor(el, options) {
        super(el, options);

        //-------------------- initialise ---------------------
        this._data = this._createSubscriptionData(
            CatService,
            ["cats", "selectedCat", "state"]
        );

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
    clickCat(cat) {
        this._proxy.description = "Great";
        cat.counter += 1;
        this._proxy.selectedCat.counter += 1;
        Object.assign(this._proxy.selectedCat, cat);
        this._proxy.state.selectedCat = CatService.SELECTED_CAT_STATE_READ;
    }

    editCat(cat) {
        Object.assign(this._proxy.selectedCat, cat);
        this._proxy.state.selectedCat = CatService.SELECTED_CAT_STATE_EDIT;
    }

    deleteCat(cat) {
        this._proxy.cats.splice(this._proxy.cats.indexOf(cat), 1);
        if(cat.name === this._proxy.selectedCat.name) {
            Helpers.Objects.destroy(this._proxy.selectedCat);
        }
    }

    /*---------------------------- Init() --------------------------------------*/
    /**
     * Return a new instance of this component
     * @param {Object} el - the component
     * @param {Object} options - the component options
     * @returns {Object} this component
     */
    static init(el, options) {
        return new CatOverview(el, options);
    }

}

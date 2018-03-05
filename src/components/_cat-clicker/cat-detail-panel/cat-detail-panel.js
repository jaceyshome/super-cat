import FeaturedComponent from '../../../js/lib/featured-component';
import _ from 'lodash';
import {configurable} from '../../../js/lib/config';     //configurable object, is used to initalize the this.config abject and initial state
import {Helpers} from '../../../js/helpers/helpers';
import CatService from '../cat-service';


//jshint-ignore
@configurable({
})
//jshint-ignore-end

/**
 * Cat detail panel
 *
 * @example <div class="b-js-cat-detail-panel"></div>
 */
export class CatDetailPanel extends FeaturedComponent {

    /**
     * @param {!Object} el - This component
     * @param {Object} options - the configurable options
     */
    constructor(el, options) {
        super(el, options);

        /* ------------ initialise --------- */
        this._subscribeToData(CatService, "cats", this.handleLoadedCatList);
        this._subscribeToData(CatService, "selectedCat", this.handleNotification);

        this._data = {
            selectedCat: this._notifications.selectedCat.proxy
        };

    }



    /*----------------- handlers ------------------*/
    handleLoadedCatList(keyPath, cats) {
        let initialSelectedCat = this._getInitialSelectedCat();
        let selectedCat = cats.find(cat => cat.name === initialSelectedCat.name);
        if(selectedCat !== undefined) {
            Object.assign(this._data.selectedCat, selectedCat);
        }
        this._unsubscribe(CatService, "cats");
    }

    handleNotification(keyPath, data) {
        this._childElements.$name.html(data.name ? data.name : '');
        this._childElements.$counter.html(data.counter ? data.counter : '');
        this._childElements.$src.attr("src", data.src ? data.src : '');
    }



    /*---------------------------- helpers ----------------------------*/
    _getInitialSelectedCat() {
        let cat = {};
        this._listElements(["name", "src", "counter"], this.$el)
            .forEach((item, index)=> {
                Object.defineProperty(cat, item.name,
                    {
                        value: (index === 1) ? $(item.el).attr("src") : $(item.el).html(),
                        writable: true
                    }
                );
            });
        return cat;
    }


    /*---------------------------- Init() --------------------------------------*/
    /**
     * Return a new instance of this component
     * @param {Object} el - the component
     * @param {Object} options - the component options
     * @returns {Object} this component
     */
    static init(el, options) {
        return new CatDetailPanel(el, options);
    }

}

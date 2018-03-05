import FeaturedComponent from '../../../js/lib/featured-component';
import _ from 'lodash';
import {configurable} from '../../../js/lib/config';     //configurable object, is used to initalize the this.config abject and initial state
import CatService from '../cat-service';

//jshint-ignore
@configurable({
})
//jshint-ignore-end

/**
 * Cat detail panel
 *
 * @example <div class="b-js-cat-description-panel"></div>
 */
export class CatDescriptionPanel extends FeaturedComponent {

    /**
     * @param {!Object} el - This component
     * @param {Object} options - the configurable options
     */
    constructor(el, options) {
        super(el, options);

        /* ------------ initialise --------- */
        this._data = this._createSubscriptionData(CatService, "selectedCat", this.handleNotification);
        this._childElements.$buttonLike.click(this.onClickButtonLike);
    }



    /*----------------- handlers ------------------*/
    handleNotification(keyPath, data) {
        this._childElements.$name.html(data.name ? data.name : '');
        this._childElements.$counter.html(data.counter ? data.counter : '');
    }



    /*---------------------------- helpers ----------------------------*/
    onClickButtonLike(e) {
        if(this._data.selectedCat) {
            this._data.selectedCat.counter += 1;
            this._childElements.$counter.html(this._data.selectedCat.counter);
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
        return new CatDescriptionPanel(el, options);
    }

}

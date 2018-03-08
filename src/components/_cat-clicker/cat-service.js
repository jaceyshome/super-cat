import {Helpers} from '../../js/helpers/helpers';
import {Http} from "../../js/lib/http";
import DataService from '../../js/lib/data-service';
import _ from 'lodash';

const dataUrl = "../../assets/data/example/cat.json";


class CatService extends DataService {


    constructor() {
        super();

        this._data = {
            selectedCat: {},
            state: { selectedCat: this.SELECTED_CAT_STATE_READ },
            cats: []
        };

        //---------- init -----------
        this.fetchData();

    }

    fetchData(uri=dataUrl) {
        Http.get(uri).then((result)=> {
            Object.assign(this._data.cats, result);
            this.broadcastDataChanges("cats");
        });
    }

    _handleObservingDataChanges(changes, keyPath) {

        if(Object.is(keyPath, "cats")){
            this._syncSelectedCat(changes);
        }
        if(Object.is(keyPath, "selectedCat")){
            this._syncCatInCats(changes);
        }
        this.broadcastDataChanges(keyPath);

        return true;
    }

    _syncSelectedCat(changes) {
        let change = changes[changes.length - 1];
        if(this._data.selectedCat && change.target.name === this._data.selectedCat.name){
            Object.assign(this._data.selectedCat, change.target);
            this.broadcastDataChanges("selectedCat");
        }
    }

    _syncCatInCats(changes) {
        let change = changes[changes.length - 1];
        let cat = _.find(this._data.cats, cat => cat.name === change.target.name);
        if(Object.is(cat, undefined)) {
            return;
        }
        Object.assign(cat, change.target);
        this.broadcastDataChanges("cats");
    }

}

export default new CatService(); //Return a singleton class

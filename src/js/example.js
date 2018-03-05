//Global object, everything should be in this global object to avoid global environment pollution
import './lib/garfield';
import $ from 'jquery';
import BluePromise from 'bluebird';
import {Constants} from './lib/constants';

/**
 * ------------------------- Global config ---------------------------------
 */
try {
    //API: http://bluebirdjs.com/docs/api/promise.config.html
    BluePromise.config({
        //warnings: true,                   // Enable warnings
        //longStackTraces: true,            // Enable long stack traces
        cancellation: true,                 // Enable cancellation, for cancelling promise
        //monitoring: true                  // Enable monitoring
    });
} catch (e) {
    console.warn(e);
}

if (!window[Constants.GLOBAL_INSTANCE]) {
    window[Constants.GLOBAL_INSTANCE] = {};
}

if (!window[Constants.GLOBAL_INSTANCE].garfield) {
    window[Constants.GLOBAL_INSTANCE].garfield = new Garfield();
}

let garfield = window[Constants.GLOBAL_INSTANCE].garfield;



/**
 * ------------------------- Import components -----------------------------
 * Import components to be used for binding (below). If you want to register your component you have to import it, here first then bind it below.
 */
import { CatList } from 'components/_cat-clicker/cat-list/cat-list';
import { CatDetailPanel } from 'components/_cat-clicker/cat-detail-panel/cat-detail-panel';
import { CatDescriptionPanel } from 'components/_cat-clicker/cat-description-panel/cat-description-panel';
import { CatListCounter } from 'components/_cat-clicker/cat-list-counter/cat-list-counter';



/**
 * ------------------------- Bind components -----------------------------
 */
// Bindings for regular components. Add your component here to register it.
garfield.bind('.b-js-cat-detail-panel', CatDetailPanel);
garfield.bind('.b-js-cat-description-panel', CatDescriptionPanel);
garfield.bind('.b-js-cat-list', CatList);
garfield.bind('.b-js-cat-list-counter', CatListCounter);



/**
 * ------------------------- init  -----------------------------
 */
garfield.init();

import {Helpers} from '../../js/helpers/helpers';
import {Http} from "../../js/lib/http";
import _ from 'lodash';
import ObservableSlim from 'observable-slim';

/**
 * DataService handles shared data and methods between components
 * It observes shared data changes and notify changes to other components
 */
export default class DataService {

    constructor() {

        this._handleObservingDataChanges = this._handleObservingDataChanges.bind(this);

        /**
         * Shared data
         * @type {Object}
         * @example
         *      {
         *          cats: []
         *          selectedCat: {}
         *      }
         * @private
         */
        this._data = {};

        /**
         * The collection of this._data objects' proxies
         * @type {Set}
         * @private
         * @example
         *      this._observers.get("cats") returns the proxy of this._data.cats
         *      this._observers.get("selectedCat") returns the proxy of this._data.selectedCat
         */
        this._observers = new Map();

        /**
         * The collection of subscribers, each of subscribers subscribe to an observer
         * @type {Array}
         * @private
         * @example
         *      componentA.cats -> _observers["cats"]
         *      componentB.cats -> _observers["cats"]
         */
        this._subscribers = new Set();
    }



    /*---------------------------- public functions -------------------------*/
    /**
     * Create a subscriber  changes
     * @param keyPath
     * @param handler
     * @param instance
     * @returns {{id: *, key: *, proxy: *, fn: *}}
     */
    subscribe(keyPath, handler, instance) {

        if ( Object.is(keyPath, undefined) ) {
            throw new Error('keyPath is required to subscribe data service');
        }
        if( Object.is(handler, undefined)) {
            throw new Error('fn is required to subscribe data service');
        }
        const subscriber = {
            instance: instance,
            id: Helpers.Strings.random(6),
            keyPath: keyPath,
            handler: handler,
            proxy: this._getObserver(keyPath)
        };
        this._subscribers.add(subscriber);
        return subscriber;
    }

    /**
     * Unsubscribe a subscriber
     * @param subscriber
     */
    unsubscribe(subscriber) {
        this._subscribers.delete(subscriber);
    }

    /**
     * Unsubscribe all subscribers
     */
    unsubscribeAll() {
        this._subscribers.clear();
    }

    /**
     * Notify all subscribed data object changes
     * Use it after loading the data from the server.
     * @param {String} keyPath - key path of the this._data
     * @param {Object} excluded - subscriber, excluded subscriber
     * @example
     * ```
     * this._data.currentSite = {name: "corporate"};
     * //subscribers listen to the currentSite changes
     *
     * this.broadcastDataChanges("currentSite");
     * //tell all subscribers "currentSite" which has changed
     *
     * ```
     *
     * An example `/src/components/_cat-clicker/cat-service.js`
     *
     * @private
     */
    broadcastDataChanges(keyPath, excluded) {
        let data = this._data[keyPath];

        for (let subscriber of this._subscribers) {
            if(Object.is(subscriber, undefined)) {
                return;
            }
            if(Object.is(subscriber.keyPath, keyPath) && !Object.is(excluded, subscriber)) {
                subscriber.handler(keyPath, data);
            }
        }
    }
    
    /**
     * Destroy this service
     */
    destroy() {
        this.unsubscribeAll();
        for (const prop in this) {
            if(this.hasOwnProperty(prop)){
                delete this[prop];
            }
        }
    }

    /*-------------------------- private functions -------------------------*/
    /**
     * Create observable proxy for a target object
     * @param keyPath {String}
     * @param handler
     * @returns {*}
     * @private
     */
    _getObserver(keyPath , handler=this._handleObservingDataChanges) {
        if(!this._observers.has(keyPath)) {
            this._observers.set(keyPath, ObservableSlim.create(
                this._data[keyPath], true, (changes)=> {
                    handler(changes, keyPath);
                }
            ));
        }
        return this._observers.get(keyPath);
    }

    /**
     * Subscriber proxy set handler
     * @param changes
     * @returns {boolean} - default true
     * @private
     * @override
     */
    _handleObservingDataChanges(changes, keyPath) {
        this.broadcastDataChanges(keyPath);
        return true;
    }

}

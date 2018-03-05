import $ from 'jquery';
import {Constants} from './constants';
import {Helpers} from '../helpers/helpers';
import {DynamicView} from './dynamic-view';
import _ from 'lodash';
import ObservableSlim from 'observable-slim';

/**
 * Enhanced ./component.js component. A component extended from this class has as
 * a controller to manage view template and view models.
 *
 * run init() to activate a component. It has a list of default properties and methods
 * this.$el - this component
 * this.config - configurable options
 * this._childElements - get its dom/jquery elements
 * this._data - get and set data
 */
export default class FeaturedComponent {

    /**
     *
     * @param el
     * @param options
     */
    constructor(el, options) {
        this.$el = $(el);
        this._id = `${this.constructor.name}-${Helpers.Strings.random(4)}`;

        // If a configurable decorator is used, configuration will be done automatically
        if (typeof this.configure === 'function') {
            this.configure(options, this.$el);
        }

        /**
         * get child elements
         * @type {Proxy}
         * @example
         *
         * <button data-js-el="button-submit">Submit</button>
         * this._childElements.buttonSubmit //return the dom element <button>
         * this._childElements.$buttonSubmit //return the jquery element <button>
         */
        this._childElements = this._createChildElements(this.$el);

        /**
         * Data object for get and set data
         * @type {Object} data - data object
         * @private
         */
        this._data = {};

        /**
         * The collection of dynamic partials
         * @type {Set}
         * @private
         */
        this._dynamicPartials = new Set();

        /**
         * The collection of data service notifications
         * @type {Proxy}
         */
        this._notifications = this._initNotifications();

        /**
         * Bind this keyword into public functions
         */
        this._bindThisToHandlers();

    }



    /*----------------------------- methods of creating partial, proxy, model and view etc ---------------------------*/
    /**
     * Create a dynamic partial
     * @param {Object} options - options include Incremental dom templateFn, view model
     * @param {function} options.templateFn - Incremental dom templateFn,
     * @param {$element} options.container - the dynamic view container, jquery element, default is this.$el
     * @param {Object} options.vm - view model of the view, leave it undefined to create a view model. two partials can share a same view model
     * @param {Object} options.data - the data of the view model, default is this._data
     * @param {Object} options.proxy - the proxy of the view model data, leave it undefined to create a new proxy
     * @param {function} options.handlers - view model handlers, e.g. vm.handlers.submitForm(), leave it undefined to use this element public functions(view handlers)
     * @param {function} options.callback - view model proxy observer changes callback function, leave it undefined to refresh the partial view every.
     * @returns {Object} - a dynamic partial
     * @private
     */
    _createDynamicPartial(options={templateFn, $container, vm:{data, proxy, handlers}, data, proxy, handlers, callback}) {
        if ( Object.is(options, undefined) ) {
            console.error('options params is not provided');
            return undefined;
        }
        if( Object.is(options.templateFn, undefined) ) {
            console.error('to initialise an dynamic partial, a template function is necessary ');
            return undefined;
        }

        let id = `${this._id}-${Helpers.Strings.random(4)}`;
        let $container = options.$container || this.$el;
        let view, vm, data, handlers, proxy, partial;

        let callback = options.callback || function(changes){ if(view){ view.render(); } };

        if(Object.is(options.vm, undefined)) {
            data = options.data || this._data ;
            handlers = options.handlers || this._createDefaultViewHandlers();
            proxy = options.proxy || this._createProxy(data, options.callback || callback);
            vm =  this._createViewModel({data, proxy, handlers, id});
        } else {
            vm = options.vm;
        }

        view = this._createDynamicView({templateFn: options.templateFn, $container, vm, id});
        partial = {id, view, vm, $container, callback};

        this._dynamicPartials.add(partial);

        return partial;
    }

    /**
     * Create default view handlers from this object, the collect has the public functions, which doesn't start with underscore "_" and is not "on", "off" or "destroy"
     */
    _createDefaultViewHandlers() {
        return new Proxy({}, {
            get: (target, property, receiver) => {
                if(!this._validateHandlerProperty(property)){
                    console.error("a view handler shouldn't be a private function or compnent destroy function");
                    return undefined;
                }
                return this[property];
            }
        });
    }

    /**
     * Create a dynamic view with Incremental DOM templateFn, view model etc
     * @param {Function} templateFn - Incremental DOM templateFn
     * @param {DOM|$Element} container - the dynamic view holder
     * @param {Object} vm - view model
     * @param {Proxy} vm.proxy - view model proxy, mapped to this._data
     * @param {Object} vm.data - this._data
     * @param {Object} vm.handlers - view model handlers, default are the public functions of this component instance
     * @param id - dynamic view id
     * @returns {DynamicView}
     * @private
     */
    _createDynamicView({templateFn, $container=this.$el, vm, id}) {
        return new DynamicView({templateFn, $container, vm, id});
    }

    /**
     * Create a view model
     * @param options
     * @returns {{id: string, data: *, proxy: (proxy|*), handlers: *}}
     * @example
     * @private
     */
    _createViewModel(options={data, proxy, handlers, id}) {
        return {
            id: options.id ? `${options.id}-vm` : `vm-${Helpers.Strings.random(8)}`,
            data: options.data,
            proxy: options.proxy,
            handlers: options.handlers
        };
    }

    /**
     * Create an observable proxy
     * @param {Object} data - proxy target data
     * @param {function} callback - observable data changes handler
     * @returns {Proxy} proxy
     * @private
     */
    _createProxy(data, callback) {
        return ObservableSlim.create(data, true, callback);
    }

    /**
     * Return a proxy to get a child element
     * @returns {Proxy} - default to this._childElements
     */
    _createChildElements(candidate) {
        return new Proxy(candidate, {
            get: (target, property, receiver) => {
                return Helpers.Element.get(property, target);
            }
        });
    }



    /*--------------------------- element helpers ----------------------------- */
    /**
     * Helper function to get child element
     * @param name
     * @param attribute
     * @private
     */
    _getElement(name, attribute=Constants.ELEMENT_PROPERTY) {
        return Helpers.Element.get(name, this.$el, {attribute: attribute});
    }

    /**
     * List elements
     * @param name
     * @param attribute
     * @returns {*}
     * @private
     */
    _listElements(name, attribute=Constants.ELEMENT_PROPERTY) {
        return Helpers.Element.listElements(name, this.$el, {attribute: attribute});
    }

    /**
     * Bind this to public functions
     * @private
     */
    _bindThisToHandlers() {
        for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
            let method = this[name];
            // Supposedly you'd like to skip constructor
            if (!(method instanceof Function) || method === this || !this._validateHandlerProperty(name)) {
                continue;
            }
            this[name] = this[name].bind(this);
        }
    }

    /**
     * Helper to exclude functions from view handlers
     * @param property
     * @returns {boolean}
     * @private
     */
    _validateHandlerProperty(property) {
        let excludedNames = ["destroy", "on", "off", "configure"];
        return !(property.startsWith("_") || (typeof this[property] !== "function") || !Object.is(excludedNames.find((name)=>{return name === property;}), undefined));
    }


    /**
     * Call garfield init to hook js components to the target container
     * It is used to call garfield to hook js components to the target container
     * @private
     */
    _callHook(container=this.$el[0]) {
        if(window[Constants.GLOBAL_INSTANCE]) {
            window[Constants.GLOBAL_INSTANCE].garfield.init(container);
            
        } else {
            throw new Error("Global instance missing, call hook fail");
        }
    }



    /*--------------------------- subscriptions  ----------------------------- */
    /**
     * Subscribe to a data service data with keypath
     * @param {DataService} dataService
     * @param {String} keyPath - the keyPath of the data in DataService
     * @param {function} notifier - default is this.handleNotification fucntion
     * @private
     */
    _subscribeToData(dataService, keyPath, notifier=this.handleNotification) {
        if ( Object.is(dataService, undefined) ) {
            console.error('dataService is not provided');
            return;
        }

        if ( Object.is(keyPath, undefined) ) {
            console.error('mapping keyPath is not provided');
            return;
        }

        this._notifications.push(dataService.subscribe(keyPath, notifier, this._id));
    }

    /**
     * Create mapped data, shorthand function to create a mapped data from a dataService
     * @param {DataService} dataService
     * @param {String} keyPaths
     * @param {Object} preset - preset data
     * @returns {Object}
     * @private
     */
    _createSubscriptionData(dataService, keyPaths, preset={}, notifier=this.handleNotification) {
        if ( Object.is(dataService, undefined) ) {
            console.error('dataService is not provided');
            return;
        }

        if ( Object.is(keyPaths, undefined) ) {
            console.error('mapping keyPaths are not provided');
            return;
        }

        if(Object.is(this._notifications,undefined)){
            this._notifications = this._initNotifications();
        }

        let mappedData = Object.assign({}, preset);
        let _keyPaths = Array.isArray(keyPaths) ? keyPaths : [keyPaths];

        if(Array.isArray(_keyPaths)) {
            _.forEach(_keyPaths, (keyPath)=> {
                let notification = dataService.subscribe(keyPath, notifier, this._id);
                this._notifications.push(notification);
                mappedData[keyPath] = notification.proxy;
            });
        }

        return mappedData;

    }

    /**
     * Initialise notification object
     * @returns {Proxy}
     * @private
     */
    _initNotifications() {
        return new Proxy([], {
            get: (notifications, prop) => {
                // The default behavior to return the value; prop is usually an integer
                if (prop in notifications) {
                    return notifications[prop];
                }

                let result;
                for (let notification of notifications) {
                    if (notification.keyPath === prop) {
                        result = notification;
                    }
                }

                return result;
            }
        });
    }

    /**
     * Default notification handler
     * @public
     */
    handleNotification(keyPath, data) {}

    /**
     * Remove notification
     * @param keyPath
     * @param dataService
     * @private
     */
    _unsubscribe(dataService, keyPath) {
        if(dataService) {
            dataService.unsubscribe(this._notifications[keyPath]);
        }
        this._notifications.splice(this._notifications.indexOf(this._notifications[keyPath]),1);
    }



    /*---------------------------- events ---------------------------*/
    /**
     * Automatically adds a namespace to a jQuery "events" parameter using this.config.jqNs.
     */
    _namespaceEvents(events) {
        if (!this.config || !this.config.jqNs) {
            console.warn("You need to set this.config.jqNs for event auto-namespacing to work.");
            return events;
        }

        if (typeof events !=='string') {
            console.warn("Auto-namespacing doesn't work for events passed as an object; calling 'off' won't work as expected and may break your code.");
            return events;
        }

        return events.split(/\s+/).map(event => `${event}.${this.config.jqNs}`).join(' ');
    }



    /*----------------------------  Public methods ---------------------------*/
    /**
     * Shorthand way to register for events with this component's DOM element. Auto-namespaces all event names passed
     * using this.config.jqNs.
     * @public
     */
    on(events, ...args) {
        return this.$el.on.call(this.$el, this._namespaceEvents(events), ...args);
    }

    /**
     * Shorthand way to register events
     * @param events
     * @param args
     * @returns {*}
     * @public
     */
    one(events, ...args) {
        return this.$el.one.call(this.$el, this._namespaceEvents(events), ...args);
    }

    /**
     * Unregister events registered with on.
     * @public
     */
    off(events, ...args) {
        if (!events && this.config && this.config.jqNs) {
            // 'off' allows for a null argument for events, which will remove everything in the component's namespace (if defined)
            events = `.${this.config.jqNs}`;
        } else {
            events = this._namespaceEvents(events);
        }

        return this.$el.off.call(this.$el, events, ...args);
    }

    /**
     * Remove registered event listeners and clean up references.
     * @public
     */
    destroy() {
        delete this._data;
        this._dynamicPartials.clear();
        this.$el.empty();
        Helpers.Objects.destroy(this);
        this.off();
    }

    /**
     * Default initialiser for Garfield, override to add your own behaviour
     * @public
     */
    static init(el, options) {
        console.warn("Using inherited init method from Component may not work in IE9.");
        return new this(el, options);
    }

}

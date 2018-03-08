System.register(['jquery', './constants', '../helpers/helpers', './dynamic-view', 'lodash', 'observable-slim'], function (_export) {
    'use strict';

    var $, Constants, Helpers, DynamicView, _, ObservableSlim, FeaturedComponent;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_constants) {
            Constants = _constants.Constants;
        }, function (_helpersHelpers) {
            Helpers = _helpersHelpers.Helpers;
        }, function (_dynamicView) {
            DynamicView = _dynamicView.DynamicView;
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_observableSlim) {
            ObservableSlim = _observableSlim['default'];
        }],
        execute: function () {
            FeaturedComponent = (function () {
                function FeaturedComponent(el, options) {
                    _classCallCheck(this, FeaturedComponent);

                    this.$el = $(el);
                    this._id = this.constructor.name + '-' + Helpers.Strings.random(4);

                    if (typeof this.configure === 'function') {
                        this.configure(options, this.$el);
                    }

                    this._childElements = this._createChildElements(this.$el);

                    this._data = {};

                    this._dynamicPartials = new Set();

                    this._notifications = this._initNotifications();

                    this._bindThisToHandlers();
                }

                _createClass(FeaturedComponent, [{
                    key: '_createDynamicPartial',
                    value: function _createDynamicPartial() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? { templateFn: templateFn, $container: $container, vm: { data: data, proxy: proxy, handlers: handlers }, data: data, proxy: proxy, handlers: handlers, callback: callback } : arguments[0];
                        return (function () {
                            if (Object.is(options, undefined)) {
                                console.error('options params is not provided');
                                return undefined;
                            }
                            if (Object.is(options.templateFn, undefined)) {
                                console.error('to initialise an dynamic partial, a template function is necessary ');
                                return undefined;
                            }

                            var id = this._id + '-' + Helpers.Strings.random(4);
                            var $container = options.$container || this.$el;
                            var view = undefined,
                                vm = undefined,
                                data = undefined,
                                handlers = undefined,
                                proxy = undefined,
                                partial = undefined;

                            var callback = options.callback || function (changes) {
                                if (view) {
                                    view.render();
                                }
                            };

                            if (Object.is(options.vm, undefined)) {
                                data = options.data || this._data;
                                handlers = options.handlers || this._createDefaultViewHandlers();
                                proxy = options.proxy || this._createProxy(data, options.callback || callback);
                                vm = this._createViewModel({ data: data, proxy: proxy, handlers: handlers, id: id });
                            } else {
                                vm = options.vm;
                            }

                            view = this._createDynamicView({ templateFn: options.templateFn, $container: $container, vm: vm, id: id });
                            partial = { id: id, view: view, vm: vm, $container: $container, callback: callback };

                            this._dynamicPartials.add(partial);

                            return partial;
                        }).apply(this, arguments);
                    }
                }, {
                    key: '_createDefaultViewHandlers',
                    value: function _createDefaultViewHandlers() {
                        var _this = this;

                        return new Proxy({}, {
                            get: function get(target, property, receiver) {
                                if (!_this._validateHandlerProperty(property)) {
                                    console.error("a view handler shouldn't be a private function or compnent destroy function");
                                    return undefined;
                                }
                                return _this[property];
                            }
                        });
                    }
                }, {
                    key: '_createDynamicView',
                    value: function _createDynamicView(_ref) {
                        var templateFn = _ref.templateFn;
                        var _ref$$container = _ref.$container;
                        var $container = _ref$$container === undefined ? this.$el : _ref$$container;
                        var vm = _ref.vm;
                        var id = _ref.id;

                        return new DynamicView({ templateFn: templateFn, $container: $container, vm: vm, id: id });
                    }
                }, {
                    key: '_createViewModel',
                    value: function _createViewModel() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? { data: data, proxy: proxy, handlers: handlers, id: id } : arguments[0];

                        return {
                            id: options.id ? options.id + '-vm' : 'vm-' + Helpers.Strings.random(8),
                            data: options.data,
                            proxy: options.proxy,
                            handlers: options.handlers
                        };
                    }
                }, {
                    key: '_createProxy',
                    value: function _createProxy(data, callback) {
                        return ObservableSlim.create(data, true, callback);
                    }
                }, {
                    key: '_createChildElements',
                    value: function _createChildElements(candidate) {
                        return new Proxy(candidate, {
                            get: function get(target, property, receiver) {
                                return Helpers.Element.get(property, target);
                            }
                        });
                    }
                }, {
                    key: '_getElement',
                    value: function _getElement(name) {
                        var attribute = arguments.length <= 1 || arguments[1] === undefined ? Constants.ELEMENT_PROPERTY : arguments[1];

                        return Helpers.Element.get(name, this.$el, { attribute: attribute });
                    }
                }, {
                    key: '_listElements',
                    value: function _listElements(name) {
                        var attribute = arguments.length <= 1 || arguments[1] === undefined ? Constants.ELEMENT_PROPERTY : arguments[1];

                        return Helpers.Element.listElements(name, this.$el, { attribute: attribute });
                    }
                }, {
                    key: '_bindThisToHandlers',
                    value: function _bindThisToHandlers() {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = Object.getOwnPropertyNames(Object.getPrototypeOf(this))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var _name = _step.value;

                                var method = this[_name];

                                if (!(method instanceof Function) || method === this || !this._validateHandlerProperty(_name)) {
                                    continue;
                                }
                                this[_name] = this[_name].bind(this);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }, {
                    key: '_validateHandlerProperty',
                    value: function _validateHandlerProperty(property) {
                        var excludedNames = ["destroy", "on", "off", "configure"];
                        return !(property.startsWith("_") || typeof this[property] !== "function" || !Object.is(excludedNames.find(function (name) {
                            return name === property;
                        }), undefined));
                    }
                }, {
                    key: '_callHook',
                    value: function _callHook() {
                        var container = arguments.length <= 0 || arguments[0] === undefined ? this.$el[0] : arguments[0];

                        if (window[Constants.GLOBAL_INSTANCE]) {
                            window[Constants.GLOBAL_INSTANCE].garfield.init(container);
                        } else {
                            throw new Error("Global instance missing, call hook fail");
                        }
                    }
                }, {
                    key: '_subscribeToData',
                    value: function _subscribeToData(dataService, keyPath) {
                        var notifier = arguments.length <= 2 || arguments[2] === undefined ? this.handleNotification : arguments[2];

                        if (Object.is(dataService, undefined)) {
                            console.error('dataService is not provided');
                            return;
                        }

                        if (Object.is(keyPath, undefined)) {
                            console.error('mapping keyPath is not provided');
                            return;
                        }

                        this._notifications.push(dataService.subscribe(keyPath, notifier, this._id));
                    }
                }, {
                    key: '_createSubscriptionData',
                    value: function _createSubscriptionData(dataService, keyPaths) {
                        var _this2 = this;

                        var preset = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                        var notifier = arguments.length <= 3 || arguments[3] === undefined ? this.handleNotification : arguments[3];

                        if (Object.is(dataService, undefined)) {
                            console.error('dataService is not provided');
                            return;
                        }

                        if (Object.is(keyPaths, undefined)) {
                            console.error('mapping keyPaths are not provided');
                            return;
                        }

                        if (Object.is(this._notifications, undefined)) {
                            this._notifications = this._initNotifications();
                        }

                        var mappedData = Object.assign({}, preset);
                        var _keyPaths = Array.isArray(keyPaths) ? keyPaths : [keyPaths];

                        if (Array.isArray(_keyPaths)) {
                            _.forEach(_keyPaths, function (keyPath) {
                                var notification = dataService.subscribe(keyPath, notifier, _this2._id);
                                _this2._notifications.push(notification);
                                mappedData[keyPath] = notification.proxy;
                            });
                        }

                        return mappedData;
                    }
                }, {
                    key: '_initNotifications',
                    value: function _initNotifications() {
                        return new Proxy([], {
                            get: function get(notifications, prop) {
                                if (prop in notifications) {
                                    return notifications[prop];
                                }

                                var result = undefined;
                                var _iteratorNormalCompletion2 = true;
                                var _didIteratorError2 = false;
                                var _iteratorError2 = undefined;

                                try {
                                    for (var _iterator2 = notifications[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var notification = _step2.value;

                                        if (notification.keyPath === prop) {
                                            result = notification;
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                            _iterator2['return']();
                                        }
                                    } finally {
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }

                                return result;
                            }
                        });
                    }
                }, {
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {}
                }, {
                    key: '_unsubscribe',
                    value: function _unsubscribe(dataService, keyPath) {
                        if (dataService) {
                            dataService.unsubscribe(this._notifications[keyPath]);
                        }
                        this._notifications.splice(this._notifications.indexOf(this._notifications[keyPath]), 1);
                    }
                }, {
                    key: '_namespaceEvents',
                    value: function _namespaceEvents(events) {
                        var _this3 = this;

                        if (!this.config || !this.config.jqNs) {
                            console.warn("You need to set this.config.jqNs for event auto-namespacing to work.");
                            return events;
                        }

                        if (typeof events !== 'string') {
                            console.warn("Auto-namespacing doesn't work for events passed as an object; calling 'off' won't work as expected and may break your code.");
                            return events;
                        }

                        return events.split(/\s+/).map(function (event) {
                            return event + '.' + _this3.config.jqNs;
                        }).join(' ');
                    }
                }, {
                    key: 'on',
                    value: function on(events) {
                        var _$el$on;

                        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key];
                        }

                        return (_$el$on = this.$el.on).call.apply(_$el$on, [this.$el, this._namespaceEvents(events)].concat(args));
                    }
                }, {
                    key: 'one',
                    value: function one(events) {
                        var _$el$one;

                        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                            args[_key2 - 1] = arguments[_key2];
                        }

                        return (_$el$one = this.$el.one).call.apply(_$el$one, [this.$el, this._namespaceEvents(events)].concat(args));
                    }
                }, {
                    key: 'off',
                    value: function off(events) {
                        var _$el$off;

                        if (!events && this.config && this.config.jqNs) {
                            events = '.' + this.config.jqNs;
                        } else {
                            events = this._namespaceEvents(events);
                        }

                        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                            args[_key3 - 1] = arguments[_key3];
                        }

                        return (_$el$off = this.$el.off).call.apply(_$el$off, [this.$el, events].concat(args));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        delete this._data;
                        this._dynamicPartials.clear();
                        this.$el.empty();
                        Helpers.Objects.destroy(this);
                        this.off();
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        console.warn("Using inherited init method from Component may not work in IE9.");
                        return new this(el, options);
                    }
                }]);

                return FeaturedComponent;
            })();

            _export('default', FeaturedComponent);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9mZWF0dXJlZC1jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytEQWlCcUIsaUJBQWlCOzs7Ozs7Ozs7O21DQWhCOUIsU0FBUzs7c0NBQ1QsT0FBTzs7dUNBQ1AsV0FBVzs7Ozs7OztBQWNFLDZCQUFpQjtBQU92Qix5QkFQTSxpQkFBaUIsQ0FPdEIsRUFBRSxFQUFFLE9BQU8sRUFBRTswQ0FQUixpQkFBaUI7O0FBUTlCLHdCQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQix3QkFBSSxDQUFDLEdBQUcsR0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksU0FBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQUFBRSxDQUFDOztBQUduRSx3QkFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO0FBQ3RDLDRCQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3JDOztBQVdELHdCQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBTzFELHdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFPaEIsd0JBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDOztBQU1sQyx3QkFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7QUFLaEQsd0JBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2lCQUU5Qjs7NkJBcERnQixpQkFBaUI7OzJCQXNFYjs0QkFBQyxPQUFPLHlEQUFDLEVBQUMsVUFBVSxFQUFWLFVBQVUsRUFBRSxVQUFVLEVBQVYsVUFBVSxFQUFFLEVBQUUsRUFBQyxFQUFDLElBQUksRUFBSixJQUFJLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxRQUFR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QUFDLElBQUksQUFBRSxDQUFDO3lCQUNuQyxNQUFNO0FBQ0gsa0NBQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQzFDOzsyREFOVSxJQUFJO0FBQUosZ0NBQUk7OztBQVFmLCtCQUFPLFlBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxNQUFBLFlBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLFNBQUssSUFBSSxFQUFDLENBQUM7cUJBQ3ZEOzs7MkJBTU0sbUJBQUc7QUFDTiwrQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2xCLDRCQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDOUIsNEJBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakIsK0JBQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLDRCQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQ2Q7OzsyQkFNVSxjQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDckIsK0JBQU8sQ0FBQyxJQUFJLENBQUMsaUVBQWlFLENBQUMsQ0FBQztBQUNoRiwrQkFBTyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ2hDOzs7dUJBcmFnQixpQkFBaUI7OzsrQkFBakIsaUJBQWlCIiwiZmlsZSI6ImpzL2xpYi9mZWF0dXJlZC1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcbmltcG9ydCB7RHluYW1pY1ZpZXd9IGZyb20gJy4vZHluYW1pYy12aWV3JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgT2JzZXJ2YWJsZVNsaW0gZnJvbSAnb2JzZXJ2YWJsZS1zbGltJztcblxuLyoqXG4gKiBFbmhhbmNlZCAuL2NvbXBvbmVudC5qcyBjb21wb25lbnQuIEEgY29tcG9uZW50IGV4dGVuZGVkIGZyb20gdGhpcyBjbGFzcyBoYXMgYXNcbiAqIGEgY29udHJvbGxlciB0byBtYW5hZ2UgdmlldyB0ZW1wbGF0ZSBhbmQgdmlldyBtb2RlbHMuXG4gKlxuICogcnVuIGluaXQoKSB0byBhY3RpdmF0ZSBhIGNvbXBvbmVudC4gSXQgaGFzIGEgbGlzdCBvZiBkZWZhdWx0IHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAqIHRoaXMuJGVsIC0gdGhpcyBjb21wb25lbnRcbiAqIHRoaXMuY29uZmlnIC0gY29uZmlndXJhYmxlIG9wdGlvbnNcbiAqIHRoaXMuX2NoaWxkRWxlbWVudHMgLSBnZXQgaXRzIGRvbS9qcXVlcnkgZWxlbWVudHNcbiAqIHRoaXMuX2RhdGEgLSBnZXQgYW5kIHNldCBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlYXR1cmVkQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRlbCA9ICQoZWwpO1xuICAgICAgICB0aGlzLl9pZCA9IGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0tJHtIZWxwZXJzLlN0cmluZ3MucmFuZG9tKDQpfWA7XG5cbiAgICAgICAgLy8gSWYgYSBjb25maWd1cmFibGUgZGVjb3JhdG9yIGlzIHVzZWQsIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSBkb25lIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmUob3B0aW9ucywgdGhpcy4kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdldCBjaGlsZCBlbGVtZW50c1xuICAgICAgICAgKiBAdHlwZSB7UHJveHl9XG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIDxidXR0b24gZGF0YS1qcy1lbD1cImJ1dHRvbi1zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICogdGhpcy5fY2hpbGRFbGVtZW50cy5idXR0b25TdWJtaXQgLy9yZXR1cm4gdGhlIGRvbSBlbGVtZW50IDxidXR0b24+XG4gICAgICAgICAqIHRoaXMuX2NoaWxkRWxlbWVudHMuJGJ1dHRvblN1Ym1pdCAvL3JldHVybiB0aGUganF1ZXJ5IGVsZW1lbnQgPGJ1dHRvbj5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2NoaWxkRWxlbWVudHMgPSB0aGlzLl9jcmVhdGVDaGlsZEVsZW1lbnRzKHRoaXMuJGVsKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YSBvYmplY3QgZm9yIGdldCBhbmQgc2V0IGRhdGFcbiAgICAgICAgICogQHR5cGUge09iamVjdH0gZGF0YSAtIGRhdGEgb2JqZWN0XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb2xsZWN0aW9uIG9mIGR5bmFtaWMgcGFydGlhbHNcbiAgICAgICAgICogQHR5cGUge1NldH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2R5bmFtaWNQYXJ0aWFscyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBzZXJ2aWNlIG5vdGlmaWNhdGlvbnNcbiAgICAgICAgICogQHR5cGUge1Byb3h5fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9ucyA9IHRoaXMuX2luaXROb3RpZmljYXRpb25zKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmQgdGhpcyBrZXl3b3JkIGludG8gcHVibGljIGZ1bmN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmluZFRoaXNUb0hhbmRsZXJzKCk7XG5cbiAgICB9XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIG9mIGNyZWF0aW5nIHBhcnRpYWwsIHByb3h5LCBtb2RlbCBhbmQgdmlldyBldGMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkeW5hbWljIHBhcnRpYWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgaW5jbHVkZSBJbmNyZW1lbnRhbCBkb20gdGVtcGxhdGVGbiwgdmlldyBtb2RlbFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMudGVtcGxhdGVGbiAtIEluY3JlbWVudGFsIGRvbSB0ZW1wbGF0ZUZuLFxuICAgICAqIEBwYXJhbSB7JGVsZW1lbnR9IG9wdGlvbnMuY29udGFpbmVyIC0gdGhlIGR5bmFtaWMgdmlldyBjb250YWluZXIsIGpxdWVyeSBlbGVtZW50LCBkZWZhdWx0IGlzIHRoaXMuJGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMudm0gLSB2aWV3IG1vZGVsIG9mIHRoZSB2aWV3LCBsZWF2ZSBpdCB1bmRlZmluZWQgdG8gY3JlYXRlIGEgdmlldyBtb2RlbC4gdHdvIHBhcnRpYWxzIGNhbiBzaGFyZSBhIHNhbWUgdmlldyBtb2RlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmRhdGEgLSB0aGUgZGF0YSBvZiB0aGUgdmlldyBtb2RlbCwgZGVmYXVsdCBpcyB0aGlzLl9kYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMucHJveHkgLSB0aGUgcHJveHkgb2YgdGhlIHZpZXcgbW9kZWwgZGF0YSwgbGVhdmUgaXQgdW5kZWZpbmVkIHRvIGNyZWF0ZSBhIG5ldyBwcm94eVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuaGFuZGxlcnMgLSB2aWV3IG1vZGVsIGhhbmRsZXJzLCBlLmcuIHZtLmhhbmRsZXJzLnN1Ym1pdEZvcm0oKSwgbGVhdmUgaXQgdW5kZWZpbmVkIHRvIHVzZSB0aGlzIGVsZW1lbnQgcHVibGljIGZ1bmN0aW9ucyh2aWV3IGhhbmRsZXJzKVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuY2FsbGJhY2sgLSB2aWV3IG1vZGVsIHByb3h5IG9ic2VydmVyIGNoYW5nZXMgY2FsbGJhY2sgZnVuY3Rpb24sIGxlYXZlIGl0IHVuZGVmaW5lZCB0byByZWZyZXNoIHRoZSBwYXJ0aWFsIHZpZXcgZXZlcnkuXG4gICAgICogQHJldHVybnMge09iamVjdH0gLSBhIGR5bmFtaWMgcGFydGlhbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NyZWF0ZUR5bmFtaWNQYXJ0aWFsKG9wdGlvbnM9e3RlbXBsYXRlRm4sICRjb250YWluZXIsIHZtOntkYXRhLCBwcm94eSwgaGFuZGxlcnN9LCBkYXRhLCBwcm94eSwgaGFuZGxlcnMsIGNhbGxiYWNrfSkge1xuICAgICAgICBpZiAoIE9iamVjdC5pcyhvcHRpb25zLCB1bmRlZmluZWQpICkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignb3B0aW9ucyBwYXJhbXMgaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmKCBPYmplY3QuaXMob3B0aW9ucy50ZW1wbGF0ZUZuLCB1bmRlZmluZWQpICkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndG8gaW5pdGlhbGlzZSBhbiBkeW5hbWljIHBhcnRpYWwsIGEgdGVtcGxhdGUgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5ICcpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZCA9IGAke3RoaXMuX2lkfS0ke0hlbHBlcnMuU3RyaW5ncy5yYW5kb20oNCl9YDtcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSBvcHRpb25zLiRjb250YWluZXIgfHwgdGhpcy4kZWw7XG4gICAgICAgIGxldCB2aWV3LCB2bSwgZGF0YSwgaGFuZGxlcnMsIHByb3h5LCBwYXJ0aWFsO1xuXG4gICAgICAgIGxldCBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgfHwgZnVuY3Rpb24oY2hhbmdlcyl7IGlmKHZpZXcpeyB2aWV3LnJlbmRlcigpOyB9IH07XG5cbiAgICAgICAgaWYoT2JqZWN0LmlzKG9wdGlvbnMudm0sIHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIGRhdGEgPSBvcHRpb25zLmRhdGEgfHwgdGhpcy5fZGF0YSA7XG4gICAgICAgICAgICBoYW5kbGVycyA9IG9wdGlvbnMuaGFuZGxlcnMgfHwgdGhpcy5fY3JlYXRlRGVmYXVsdFZpZXdIYW5kbGVycygpO1xuICAgICAgICAgICAgcHJveHkgPSBvcHRpb25zLnByb3h5IHx8IHRoaXMuX2NyZWF0ZVByb3h5KGRhdGEsIG9wdGlvbnMuY2FsbGJhY2sgfHwgY2FsbGJhY2spO1xuICAgICAgICAgICAgdm0gPSAgdGhpcy5fY3JlYXRlVmlld01vZGVsKHtkYXRhLCBwcm94eSwgaGFuZGxlcnMsIGlkfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bSA9IG9wdGlvbnMudm07XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3ID0gdGhpcy5fY3JlYXRlRHluYW1pY1ZpZXcoe3RlbXBsYXRlRm46IG9wdGlvbnMudGVtcGxhdGVGbiwgJGNvbnRhaW5lciwgdm0sIGlkfSk7XG4gICAgICAgIHBhcnRpYWwgPSB7aWQsIHZpZXcsIHZtLCAkY29udGFpbmVyLCBjYWxsYmFja307XG5cbiAgICAgICAgdGhpcy5fZHluYW1pY1BhcnRpYWxzLmFkZChwYXJ0aWFsKTtcblxuICAgICAgICByZXR1cm4gcGFydGlhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgZGVmYXVsdCB2aWV3IGhhbmRsZXJzIGZyb20gdGhpcyBvYmplY3QsIHRoZSBjb2xsZWN0IGhhcyB0aGUgcHVibGljIGZ1bmN0aW9ucywgd2hpY2ggZG9lc24ndCBzdGFydCB3aXRoIHVuZGVyc2NvcmUgXCJfXCIgYW5kIGlzIG5vdCBcIm9uXCIsIFwib2ZmXCIgb3IgXCJkZXN0cm95XCJcbiAgICAgKi9cbiAgICBfY3JlYXRlRGVmYXVsdFZpZXdIYW5kbGVycygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh7fSwge1xuICAgICAgICAgICAgZ2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5fdmFsaWRhdGVIYW5kbGVyUHJvcGVydHkocHJvcGVydHkpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImEgdmlldyBoYW5kbGVyIHNob3VsZG4ndCBiZSBhIHByaXZhdGUgZnVuY3Rpb24gb3IgY29tcG5lbnQgZGVzdHJveSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkeW5hbWljIHZpZXcgd2l0aCBJbmNyZW1lbnRhbCBET00gdGVtcGxhdGVGbiwgdmlldyBtb2RlbCBldGNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0ZW1wbGF0ZUZuIC0gSW5jcmVtZW50YWwgRE9NIHRlbXBsYXRlRm5cbiAgICAgKiBAcGFyYW0ge0RPTXwkRWxlbWVudH0gY29udGFpbmVyIC0gdGhlIGR5bmFtaWMgdmlldyBob2xkZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm0gLSB2aWV3IG1vZGVsXG4gICAgICogQHBhcmFtIHtQcm94eX0gdm0ucHJveHkgLSB2aWV3IG1vZGVsIHByb3h5LCBtYXBwZWQgdG8gdGhpcy5fZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bS5kYXRhIC0gdGhpcy5fZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bS5oYW5kbGVycyAtIHZpZXcgbW9kZWwgaGFuZGxlcnMsIGRlZmF1bHQgYXJlIHRoZSBwdWJsaWMgZnVuY3Rpb25zIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogQHBhcmFtIGlkIC0gZHluYW1pYyB2aWV3IGlkXG4gICAgICogQHJldHVybnMge0R5bmFtaWNWaWV3fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NyZWF0ZUR5bmFtaWNWaWV3KHt0ZW1wbGF0ZUZuLCAkY29udGFpbmVyPXRoaXMuJGVsLCB2bSwgaWR9KSB7XG4gICAgICAgIHJldHVybiBuZXcgRHluYW1pY1ZpZXcoe3RlbXBsYXRlRm4sICRjb250YWluZXIsIHZtLCBpZH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHZpZXcgbW9kZWxcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHt7aWQ6IHN0cmluZywgZGF0YTogKiwgcHJveHk6IChwcm94eXwqKSwgaGFuZGxlcnM6ICp9fVxuICAgICAqIEBleGFtcGxlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY3JlYXRlVmlld01vZGVsKG9wdGlvbnM9e2RhdGEsIHByb3h5LCBoYW5kbGVycywgaWR9KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogb3B0aW9ucy5pZCA/IGAke29wdGlvbnMuaWR9LXZtYCA6IGB2bS0ke0hlbHBlcnMuU3RyaW5ncy5yYW5kb20oOCl9YCxcbiAgICAgICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIHByb3h5OiBvcHRpb25zLnByb3h5LFxuICAgICAgICAgICAgaGFuZGxlcnM6IG9wdGlvbnMuaGFuZGxlcnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gb2JzZXJ2YWJsZSBwcm94eVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gcHJveHkgdGFyZ2V0IGRhdGFcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIG9ic2VydmFibGUgZGF0YSBjaGFuZ2VzIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7UHJveHl9IHByb3h5XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY3JlYXRlUHJveHkoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGVTbGltLmNyZWF0ZShkYXRhLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgcHJveHkgdG8gZ2V0IGEgY2hpbGQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtQcm94eX0gLSBkZWZhdWx0IHRvIHRoaXMuX2NoaWxkRWxlbWVudHNcbiAgICAgKi9cbiAgICBfY3JlYXRlQ2hpbGRFbGVtZW50cyhjYW5kaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShjYW5kaWRhdGUsIHtcbiAgICAgICAgICAgIGdldDogKHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlcnMuRWxlbWVudC5nZXQocHJvcGVydHksIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBlbGVtZW50IGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IGNoaWxkIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRFbGVtZW50KG5hbWUsIGF0dHJpYnV0ZT1Db25zdGFudHMuRUxFTUVOVF9QUk9QRVJUWSkge1xuICAgICAgICByZXR1cm4gSGVscGVycy5FbGVtZW50LmdldChuYW1lLCB0aGlzLiRlbCwge2F0dHJpYnV0ZTogYXR0cmlidXRlfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdCBlbGVtZW50c1xuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2xpc3RFbGVtZW50cyhuYW1lLCBhdHRyaWJ1dGU9Q29uc3RhbnRzLkVMRU1FTlRfUFJPUEVSVFkpIHtcbiAgICAgICAgcmV0dXJuIEhlbHBlcnMuRWxlbWVudC5saXN0RWxlbWVudHMobmFtZSwgdGhpcy4kZWwsIHthdHRyaWJ1dGU6IGF0dHJpYnV0ZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyB0byBwdWJsaWMgZnVuY3Rpb25zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYmluZFRoaXNUb0hhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSkpIHtcbiAgICAgICAgICAgIGxldCBtZXRob2QgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgLy8gU3VwcG9zZWRseSB5b3UnZCBsaWtlIHRvIHNraXAgY29uc3RydWN0b3JcbiAgICAgICAgICAgIGlmICghKG1ldGhvZCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB8fCBtZXRob2QgPT09IHRoaXMgfHwgIXRoaXMuX3ZhbGlkYXRlSGFuZGxlclByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdGhpc1tuYW1lXS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIHRvIGV4Y2x1ZGUgZnVuY3Rpb25zIGZyb20gdmlldyBoYW5kbGVyc1xuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3ZhbGlkYXRlSGFuZGxlclByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgICAgIGxldCBleGNsdWRlZE5hbWVzID0gW1wiZGVzdHJveVwiLCBcIm9uXCIsIFwib2ZmXCIsIFwiY29uZmlndXJlXCJdO1xuICAgICAgICByZXR1cm4gIShwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX1wiKSB8fCAodHlwZW9mIHRoaXNbcHJvcGVydHldICE9PSBcImZ1bmN0aW9uXCIpIHx8ICFPYmplY3QuaXMoZXhjbHVkZWROYW1lcy5maW5kKChuYW1lKT0+e3JldHVybiBuYW1lID09PSBwcm9wZXJ0eTt9KSwgdW5kZWZpbmVkKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGdhcmZpZWxkIGluaXQgdG8gaG9vayBqcyBjb21wb25lbnRzIHRvIHRoZSB0YXJnZXQgY29udGFpbmVyXG4gICAgICogSXQgaXMgdXNlZCB0byBjYWxsIGdhcmZpZWxkIHRvIGhvb2sganMgY29tcG9uZW50cyB0byB0aGUgdGFyZ2V0IGNvbnRhaW5lclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NhbGxIb29rKGNvbnRhaW5lcj10aGlzLiRlbFswXSkge1xuICAgICAgICBpZih3aW5kb3dbQ29uc3RhbnRzLkdMT0JBTF9JTlNUQU5DRV0pIHtcbiAgICAgICAgICAgIHdpbmRvd1tDb25zdGFudHMuR0xPQkFMX0lOU1RBTkNFXS5nYXJmaWVsZC5pbml0KGNvbnRhaW5lcik7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdsb2JhbCBpbnN0YW5jZSBtaXNzaW5nLCBjYWxsIGhvb2sgZmFpbFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdWJzY3JpcHRpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIGRhdGEgc2VydmljZSBkYXRhIHdpdGgga2V5cGF0aFxuICAgICAqIEBwYXJhbSB7RGF0YVNlcnZpY2V9IGRhdGFTZXJ2aWNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVBhdGggLSB0aGUga2V5UGF0aCBvZiB0aGUgZGF0YSBpbiBEYXRhU2VydmljZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG5vdGlmaWVyIC0gZGVmYXVsdCBpcyB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbiBmdWNudGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3N1YnNjcmliZVRvRGF0YShkYXRhU2VydmljZSwga2V5UGF0aCwgbm90aWZpZXI9dGhpcy5oYW5kbGVOb3RpZmljYXRpb24pIHtcbiAgICAgICAgaWYgKCBPYmplY3QuaXMoZGF0YVNlcnZpY2UsIHVuZGVmaW5lZCkgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdkYXRhU2VydmljZSBpcyBub3QgcHJvdmlkZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggT2JqZWN0LmlzKGtleVBhdGgsIHVuZGVmaW5lZCkgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtYXBwaW5nIGtleVBhdGggaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ub3RpZmljYXRpb25zLnB1c2goZGF0YVNlcnZpY2Uuc3Vic2NyaWJlKGtleVBhdGgsIG5vdGlmaWVyLCB0aGlzLl9pZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBtYXBwZWQgZGF0YSwgc2hvcnRoYW5kIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG1hcHBlZCBkYXRhIGZyb20gYSBkYXRhU2VydmljZVxuICAgICAqIEBwYXJhbSB7RGF0YVNlcnZpY2V9IGRhdGFTZXJ2aWNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVBhdGhzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByZXNldCAtIHByZXNldCBkYXRhXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jcmVhdGVTdWJzY3JpcHRpb25EYXRhKGRhdGFTZXJ2aWNlLCBrZXlQYXRocywgcHJlc2V0PXt9LCBub3RpZmllcj10aGlzLmhhbmRsZU5vdGlmaWNhdGlvbikge1xuICAgICAgICBpZiAoIE9iamVjdC5pcyhkYXRhU2VydmljZSwgdW5kZWZpbmVkKSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RhdGFTZXJ2aWNlIGlzIG5vdCBwcm92aWRlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBPYmplY3QuaXMoa2V5UGF0aHMsIHVuZGVmaW5lZCkgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtYXBwaW5nIGtleVBhdGhzIGFyZSBub3QgcHJvdmlkZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKE9iamVjdC5pcyh0aGlzLl9ub3RpZmljYXRpb25zLHVuZGVmaW5lZCkpe1xuICAgICAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9ucyA9IHRoaXMuX2luaXROb3RpZmljYXRpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFwcGVkRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHByZXNldCk7XG4gICAgICAgIGxldCBfa2V5UGF0aHMgPSBBcnJheS5pc0FycmF5KGtleVBhdGhzKSA/IGtleVBhdGhzIDogW2tleVBhdGhzXTtcblxuICAgICAgICBpZihBcnJheS5pc0FycmF5KF9rZXlQYXRocykpIHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChfa2V5UGF0aHMsIChrZXlQYXRoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbm90aWZpY2F0aW9uID0gZGF0YVNlcnZpY2Uuc3Vic2NyaWJlKGtleVBhdGgsIG5vdGlmaWVyLCB0aGlzLl9pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9ucy5wdXNoKG5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICAgICAgbWFwcGVkRGF0YVtrZXlQYXRoXSA9IG5vdGlmaWNhdGlvbi5wcm94eTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcHBlZERhdGE7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIG5vdGlmaWNhdGlvbiBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaW5pdE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoW10sIHtcbiAgICAgICAgICAgIGdldDogKG5vdGlmaWNhdGlvbnMsIHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZGVmYXVsdCBiZWhhdmlvciB0byByZXR1cm4gdGhlIHZhbHVlOyBwcm9wIGlzIHVzdWFsbHkgYW4gaW50ZWdlclxuICAgICAgICAgICAgICAgIGlmIChwcm9wIGluIG5vdGlmaWNhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbnNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBub3RpZmljYXRpb24gb2Ygbm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uLmtleVBhdGggPT09IHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5vdGlmaWNhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgbm90aWZpY2F0aW9uIGhhbmRsZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgaGFuZGxlTm90aWZpY2F0aW9uKGtleVBhdGgsIGRhdGEpIHt9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgbm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIGtleVBhdGhcbiAgICAgKiBAcGFyYW0gZGF0YVNlcnZpY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91bnN1YnNjcmliZShkYXRhU2VydmljZSwga2V5UGF0aCkge1xuICAgICAgICBpZihkYXRhU2VydmljZSkge1xuICAgICAgICAgICAgZGF0YVNlcnZpY2UudW5zdWJzY3JpYmUodGhpcy5fbm90aWZpY2F0aW9uc1trZXlQYXRoXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9ucy5zcGxpY2UodGhpcy5fbm90aWZpY2F0aW9ucy5pbmRleE9mKHRoaXMuX25vdGlmaWNhdGlvbnNba2V5UGF0aF0pLDEpO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyoqXG4gICAgICogQXV0b21hdGljYWxseSBhZGRzIGEgbmFtZXNwYWNlIHRvIGEgalF1ZXJ5IFwiZXZlbnRzXCIgcGFyYW1ldGVyIHVzaW5nIHRoaXMuY29uZmlnLmpxTnMuXG4gICAgICovXG4gICAgX25hbWVzcGFjZUV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuanFOcykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiWW91IG5lZWQgdG8gc2V0IHRoaXMuY29uZmlnLmpxTnMgZm9yIGV2ZW50IGF1dG8tbmFtZXNwYWNpbmcgdG8gd29yay5cIik7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBldmVudHMgIT09J3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkF1dG8tbmFtZXNwYWNpbmcgZG9lc24ndCB3b3JrIGZvciBldmVudHMgcGFzc2VkIGFzIGFuIG9iamVjdDsgY2FsbGluZyAnb2ZmJyB3b24ndCB3b3JrIGFzIGV4cGVjdGVkIGFuZCBtYXkgYnJlYWsgeW91ciBjb2RlLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBldmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnRzLnNwbGl0KC9cXHMrLykubWFwKGV2ZW50ID0+IGAke2V2ZW50fS4ke3RoaXMuY29uZmlnLmpxTnN9YCkuam9pbignICcpO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFB1YmxpYyBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIHdheSB0byByZWdpc3RlciBmb3IgZXZlbnRzIHdpdGggdGhpcyBjb21wb25lbnQncyBET00gZWxlbWVudC4gQXV0by1uYW1lc3BhY2VzIGFsbCBldmVudCBuYW1lcyBwYXNzZWRcbiAgICAgKiB1c2luZyB0aGlzLmNvbmZpZy5qcU5zLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbihldmVudHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLm9uLmNhbGwodGhpcy4kZWwsIHRoaXMuX25hbWVzcGFjZUV2ZW50cyhldmVudHMpLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgd2F5IHRvIHJlZ2lzdGVyIGV2ZW50c1xuICAgICAqIEBwYXJhbSBldmVudHNcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbmUoZXZlbnRzLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbC5vbmUuY2FsbCh0aGlzLiRlbCwgdGhpcy5fbmFtZXNwYWNlRXZlbnRzKGV2ZW50cyksIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgZXZlbnRzIHJlZ2lzdGVyZWQgd2l0aCBvbi5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb2ZmKGV2ZW50cywgLi4uYXJncykge1xuICAgICAgICBpZiAoIWV2ZW50cyAmJiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5qcU5zKSB7XG4gICAgICAgICAgICAvLyAnb2ZmJyBhbGxvd3MgZm9yIGEgbnVsbCBhcmd1bWVudCBmb3IgZXZlbnRzLCB3aGljaCB3aWxsIHJlbW92ZSBldmVyeXRoaW5nIGluIHRoZSBjb21wb25lbnQncyBuYW1lc3BhY2UgKGlmIGRlZmluZWQpXG4gICAgICAgICAgICBldmVudHMgPSBgLiR7dGhpcy5jb25maWcuanFOc31gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzID0gdGhpcy5fbmFtZXNwYWNlRXZlbnRzKGV2ZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4kZWwub2ZmLmNhbGwodGhpcy4kZWwsIGV2ZW50cywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXJzIGFuZCBjbGVhbiB1cCByZWZlcmVuY2VzLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fZGF0YTtcbiAgICAgICAgdGhpcy5fZHluYW1pY1BhcnRpYWxzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuJGVsLmVtcHR5KCk7XG4gICAgICAgIEhlbHBlcnMuT2JqZWN0cy5kZXN0cm95KHRoaXMpO1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgaW5pdGlhbGlzZXIgZm9yIEdhcmZpZWxkLCBvdmVycmlkZSB0byBhZGQgeW91ciBvd24gYmVoYXZpb3VyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBpbml0KGVsLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVzaW5nIGluaGVyaXRlZCBpbml0IG1ldGhvZCBmcm9tIENvbXBvbmVudCBtYXkgbm90IHdvcmsgaW4gSUU5LlwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKGVsLCBvcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==

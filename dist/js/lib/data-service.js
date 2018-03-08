System.register(['../../js/helpers/helpers', '../../js/lib/http', 'lodash', 'observable-slim'], function (_export) {
    'use strict';

    var Helpers, Http, _, ObservableSlim, DataService;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_jsLibHttp) {
            Http = _jsLibHttp.Http;
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_observableSlim) {
            ObservableSlim = _observableSlim['default'];
        }],
        execute: function () {
            DataService = (function () {
                function DataService() {
                    _classCallCheck(this, DataService);

                    this._handleObserverDataChanges = this._handleObserverDataChanges.bind(this);

                    this._data = {};

                    this._observers = new Map();

                    this._subscribers = new Set();
                }

                _createClass(DataService, [{
                    key: 'subscribe',
                    value: function subscribe(keyPath, handler, instance) {

                        if (Object.is(keyPath, undefined)) {
                            throw new Error('keyPath is required to subscribe data service');
                        }
                        if (Object.is(handler, undefined)) {
                            throw new Error('fn is required to subscribe data service');
                        }
                        var subscriber = {
                            instance: instance,
                            id: Helpers.Strings.random(6),
                            keyPath: keyPath,
                            handler: handler,
                            proxy: this._createObservableProxy(keyPath)
                        };
                        this._subscribers.add(subscriber);
                        return subscriber;
                    }
                }, {
                    key: 'unsubscribe',
                    value: function unsubscribe(subscriber) {
                        this._subscribers['delete'](subscriber);
                    }
                }, {
                    key: 'unsubscribeAll',
                    value: function unsubscribeAll() {
                        this._subscribers.clear();
                    }
                }, {
                    key: 'broadcastDataChanges',
                    value: function broadcastDataChanges(keyPath, excluded) {
                        var data = this._data[keyPath];

                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this._subscribers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var subscriber = _step.value;

                                if (Object.is(subscriber, undefined)) {
                                    return;
                                }
                                if (Object.is(subscriber.keyPath, keyPath) && !Object.is(excluded, subscriber)) {
                                    subscriber.handler(keyPath, data);
                                }
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
                    key: 'destroy',
                    value: function destroy() {
                        this.unsubscribeAll();
                        for (var prop in this) {
                            if (this.hasOwnProperty(prop)) {
                                delete this[prop];
                            }
                        }
                    }
                }, {
                    key: '_createObservableProxy',
                    value: function _createObservableProxy(keyPath) {
                        var handler = arguments.length <= 1 || arguments[1] === undefined ? this._handleObserverDataChanges : arguments[1];

                        if (!this._observers.has(keyPath)) {
                            this._observers.set(keyPath, ObservableSlim.create(this._data[keyPath], true, function (changes) {
                                handler(changes, keyPath);
                            }));
                        }
                        return this._observers.get(keyPath);
                    }
                }, {
                    key: '_handleObserverDataChanges',
                    value: function _handleObserverDataChanges(changes, keyPath) {
                        this.broadcastDataChanges(keyPath);
                        return true;
                    }
                }]);

                return DataService;
            })();

            _export('default', DataService);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9kYXRhLXNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBDQVNxQixXQUFXOzs7Ozs7Ozt3Q0FUeEIsT0FBTzs7OEJBQ1AsSUFBSTs7Ozs7OztBQVFTLHVCQUFXO0FBRWpCLHlCQUZNLFdBQVcsR0FFZDswQ0FGRyxXQUFXOztBQVN4Qix3QkFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBTzdFLHdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFPaEIsd0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFPNUIsd0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztpQkFDakM7OzZCQS9CZ0IsV0FBVzs7MkJBMkNuQixtQkFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTs7QUFFbEMsNEJBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEVBQUc7QUFDakMsa0NBQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQzt5QkFDcEU7QUFDRCw0QkFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRTtBQUMvQixrQ0FBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO3lCQUMvRDtBQUNELDRCQUFNLFVBQVUsR0FBRztBQUNmLG9DQUFRLEVBQUUsUUFBUTtBQUNsQiw4QkFBRSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3QixtQ0FBTyxFQUFFLE9BQU87QUFDaEIsbUNBQU8sRUFBRSxPQUFPO0FBQ2hCLGlDQUFLLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQzt5QkFDOUMsQ0FBQztBQUNGLDRCQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQywrQkFBTyxVQUFVLENBQUM7cUJBQ3JCOzs7MkJBTVUscUJBQUMsVUFBVSxFQUFFO0FBQ3BCLDRCQUFJLENBQUMsWUFBWSxVQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ3hDOzs7MkJBS2EsMEJBQUc7QUFDYiw0QkFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDN0I7OzsyQkFxQm1CLDhCQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDcEMsNEJBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7QUFFL0IsaURBQXVCLElBQUksQ0FBQyxZQUFZLDhIQUFFO29DQUFqQyxVQUFVOztBQUNmLG9DQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQ2pDLDJDQUFPO2lDQUNWO0FBQ0Qsb0NBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDM0UsOENBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2lDQUNyQzs2QkFDSjs7Ozs7Ozs7Ozs7Ozs7O3FCQUNKOzs7MkJBS00sbUJBQUc7QUFDTiw0QkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RCLDZCQUFLLElBQU0sSUFBSSxJQUFJLElBQUksRUFBRTtBQUNyQixnQ0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDO0FBQ3pCLHVDQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDckI7eUJBQ0o7cUJBQ0o7OzsyQkFVcUIsZ0NBQUMsT0FBTyxFQUE0Qzs0QkFBekMsT0FBTyx5REFBQyxJQUFJLENBQUMsMEJBQTBCOztBQUNwRSw0QkFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzlCLGdDQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBQyxPQUFPLEVBQUk7QUFDbkMsdUNBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7NkJBQzdCLENBQ0osQ0FBQyxDQUFDO3lCQUNOO0FBQ0QsK0JBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3ZDOzs7MkJBU3lCLG9DQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDekMsNEJBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQywrQkFBTyxJQUFJLENBQUM7cUJBQ2Y7Ozt1QkF0SmdCLFdBQVc7OzsrQkFBWCxXQUFXIiwiZmlsZSI6ImpzL2xpYi9kYXRhLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hlbHBlcnN9IGZyb20gJy4uLy4uL2pzL2hlbHBlcnMvaGVscGVycyc7XG5pbXBvcnQge0h0dHB9IGZyb20gXCIuLi8uLi9qcy9saWIvaHR0cFwiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBPYnNlcnZhYmxlU2xpbSBmcm9tICdvYnNlcnZhYmxlLXNsaW0nO1xuXG4vKipcbiAqIERhdGFTZXJ2aWNlIGlzIHVzZWQgdG8gaGFuZGxlIHNoYXJlZCBkYXRhIGFuZCBtZXRob2RzIGJldHdlZW4gY29tcG9uZW50c1xuICogSXQgb2JzZXJ2ZXJzIHNoYXJlZCBkYXRhIGNoYW5nZXMgYW5kIG5vdGlmeSBjaGFuZ2VzIHRvIG90aGVyIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbih0aGlzOkRhdGFTZXJ2aWNlKX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2hhbmRsZU9ic2VydmVyRGF0YUNoYW5nZXMgPSB0aGlzLl9oYW5kbGVPYnNlcnZlckRhdGFDaGFuZ2VzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyc1xuICAgICAgICAgKiBAdHlwZSB7U2V0fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJzY3JpYmVyc1xuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHB1YmxpYyBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0ga2V5UGF0aFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHBhcmFtIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge3tpZDogKiwga2V5OiAqLCBwcm94eTogKiwgZm46ICp9fVxuICAgICAqL1xuICAgIHN1YnNjcmliZShrZXlQYXRoLCBoYW5kbGVyLCBpbnN0YW5jZSkge1xuXG4gICAgICAgIGlmICggT2JqZWN0LmlzKGtleVBhdGgsIHVuZGVmaW5lZCkgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2tleVBhdGggaXMgcmVxdWlyZWQgdG8gc3Vic2NyaWJlIGRhdGEgc2VydmljZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCBPYmplY3QuaXMoaGFuZGxlciwgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmbiBpcyByZXF1aXJlZCB0byBzdWJzY3JpYmUgZGF0YSBzZXJ2aWNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIGlkOiBIZWxwZXJzLlN0cmluZ3MucmFuZG9tKDYpLFxuICAgICAgICAgICAga2V5UGF0aDoga2V5UGF0aCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgICBwcm94eTogdGhpcy5fY3JlYXRlT2JzZXJ2YWJsZVByb3h5KGtleVBhdGgpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgYSBzdWJzY3JpYmVyXG4gICAgICogQHBhcmFtIHN1YnNjcmliZXJcbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBhbGwgc3Vic2NyaWJlcnNcbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIGRhdGEgb2JqZWN0IGNoYW5nZXNcbiAgICAgKiBVc2UgaXQgYWZ0ZXIgbG9hZGluZyB0aGUgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVBhdGggLSBrZXkgcGF0aCBvZiB0aGUgdGhpcy5fZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleGNsdWRlZCAtIHN1YnNjcmliZXIsIGV4Y2x1ZGVkIHN1YnNjcmliZXJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYFxuICAgICAqIHRoaXMuX2RhdGEuY3VycmVudFNpdGUgPSB7bmFtZTogXCJjb3Jwb3JhdGVcIn07XG4gICAgICogLy9zdWJzY3JpYmVycyBsaXN0ZW4gdG8gdGhlIGN1cnJlbnRTaXRlIGNoYW5nZXNcbiAgICAgKlxuICAgICAqIHRoaXMuYnJvYWRjYXN0RGF0YUNoYW5nZXMoXCJjdXJyZW50U2l0ZVwiKTtcbiAgICAgKiAvL3RlbGwgYWxsIHN1YnNjcmliZXJzIFwiY3VycmVudFNpdGVcIiB3aGljaCBoYXMgY2hhbmdlZFxuICAgICAqXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBBbiBleGFtcGxlIGAvc3JjL2NvbXBvbmVudHMvc3R5bGUtZ3VpZGUvc3R5bGUtZ3VpZGUtc2VydmljZS5qc2BcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYnJvYWRjYXN0RGF0YUNoYW5nZXMoa2V5UGF0aCwgZXhjbHVkZWQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhW2tleVBhdGhdO1xuXG4gICAgICAgIGZvciAobGV0IHN1YnNjcmliZXIgb2YgdGhpcy5fc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgIGlmKE9iamVjdC5pcyhzdWJzY3JpYmVyLCB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoT2JqZWN0LmlzKHN1YnNjcmliZXIua2V5UGF0aCwga2V5UGF0aCkgJiYgIU9iamVjdC5pcyhleGNsdWRlZCwgc3Vic2NyaWJlcikpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIoa2V5UGF0aCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGlzIHNlcnZpY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZih0aGlzLmhhc093blByb3BlcnR5KHByb3ApKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJpdmF0ZSBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHN1YnNjcmliZXIgcHJveHlcbiAgICAgKiBAcGFyYW0ga2V5UGF0aCB7U3RyaW5nfVxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY3JlYXRlT2JzZXJ2YWJsZVByb3h5KGtleVBhdGggLCBoYW5kbGVyPXRoaXMuX2hhbmRsZU9ic2VydmVyRGF0YUNoYW5nZXMpIHtcbiAgICAgICAgaWYoIXRoaXMuX29ic2VydmVycy5oYXMoa2V5UGF0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVycy5zZXQoa2V5UGF0aCwgT2JzZXJ2YWJsZVNsaW0uY3JlYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFba2V5UGF0aF0sIHRydWUsIChjaGFuZ2VzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihjaGFuZ2VzLCBrZXlQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fb2JzZXJ2ZXJzLmdldChrZXlQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVyIHByb3h5IHNldCBoYW5kbGVyXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBkZWZhdWx0IHRydWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9oYW5kbGVPYnNlcnZlckRhdGFDaGFuZ2VzKGNoYW5nZXMsIGtleVBhdGgpIHtcbiAgICAgICAgdGhpcy5icm9hZGNhc3REYXRhQ2hhbmdlcyhrZXlQYXRoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG59XG4iXX0=

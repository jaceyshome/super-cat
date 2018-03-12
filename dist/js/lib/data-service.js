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

                    this._handleObservingDataChanges = this._handleObservingDataChanges.bind(this);

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
                            proxy: this._getObserver(keyPath)
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
                    key: '_getObserver',
                    value: function _getObserver(keyPath) {
                        var handler = arguments.length <= 1 || arguments[1] === undefined ? this._handleObservingDataChanges : arguments[1];

                        if (!this._observers.has(keyPath)) {
                            this._observers.set(keyPath, ObservableSlim.create(this._data[keyPath], true, function (changes) {
                                handler(changes, keyPath);
                            }));
                        }
                        return this._observers.get(keyPath);
                    }
                }, {
                    key: '_handleObservingDataChanges',
                    value: function _handleObservingDataChanges(changes, keyPath) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QU8sQ0FBQyxFQUFFO0FBQzlCLGdDQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBQyxPQUFPLEVBQUk7QUFDbkMsdUNBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7NkJBQzdCLENBQ0osQ0FBQyxDQUFDO3lCQUNOO0FBQ0QsK0JBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3ZDOzs7MkJBUzBCLHFDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDMUMsNEJBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQywrQkFBTyxJQUFJLENBQUM7cUJBQ2Y7Ozt1QkE1SmdCLFdBQVc7OzsrQkFBWCxXQUFXIiwiZmlsZSI6ImpzL2xpYi9kYXRhLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hlbHBlcnN9IGZyb20gJy4uLy4uL2pzL2hlbHBlcnMvaGVscGVycyc7XG5pbXBvcnQge0h0dHB9IGZyb20gXCIuLi8uLi9qcy9saWIvaHR0cFwiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBPYnNlcnZhYmxlU2xpbSBmcm9tICdvYnNlcnZhYmxlLXNsaW0nO1xuXG4vKipcbiAqIFRoZSBkYXRhIHNlcnZpY2UgZm9sbG93cyB0aGUgb2JzZXJ2ZXIgcGF0dGVybiwgaXQgb2JzZXJ2ZXJzIGFuZCBicm9hZGNhc3RzIGRhdGEgY2hhbmdlcyBiZXR3ZWVuXG4gKiBkaWZmZXJlbnQgY29tcG9uZW50cyB3aXRoIGRhdGEtZHJpdmVuIHByb2Nlc3NpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZU9ic2VydmluZ0RhdGFDaGFuZ2VzID0gdGhpcy5faGFuZGxlT2JzZXJ2aW5nRGF0YUNoYW5nZXMuYmluZCh0aGlzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hhcmVkIGRhdGFcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICB7XG4gICAgICAgICAqICAgICAgICAgIGNhdHM6IFtdXG4gICAgICAgICAqICAgICAgICAgIHNlbGVjdGVkQ2F0OiB7fVxuICAgICAgICAgKiAgICAgIH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbGxlY3Rpb24gb2YgdGhpcy5fZGF0YSBvYmplY3RzJyBwcm94aWVzXG4gICAgICAgICAqIEB0eXBlIHtTZXR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgdGhpcy5fb2JzZXJ2ZXJzLmdldChcImNhdHNcIikgcmV0dXJucyB0aGUgcHJveHkgb2YgdGhpcy5fZGF0YS5jYXRzXG4gICAgICAgICAqICAgICAgdGhpcy5fb2JzZXJ2ZXJzLmdldChcInNlbGVjdGVkQ2F0XCIpIHJldHVybnMgdGhlIHByb3h5IG9mIHRoaXMuX2RhdGEuc2VsZWN0ZWRDYXRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVycyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbGxlY3Rpb24gb2Ygc3Vic2NyaWJlcnMsIGVhY2ggb2Ygc3Vic2NyaWJlcnMgc3Vic2NyaWJlIHRvIGFuIG9ic2VydmVyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICBjb21wb25lbnRBLmNhdHMgLT4gX29ic2VydmVyc1tcImNhdHNcIl1cbiAgICAgICAgICogICAgICBjb21wb25lbnRCLmNhdHMgLT4gX29ic2VydmVyc1tcImNhdHNcIl1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHVibGljIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzdWJzY3JpYmVyICBjaGFuZ2VzXG4gICAgICogQHBhcmFtIGtleVBhdGhcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHt7aWQ6ICosIGtleTogKiwgcHJveHk6ICosIGZuOiAqfX1cbiAgICAgKi9cbiAgICBzdWJzY3JpYmUoa2V5UGF0aCwgaGFuZGxlciwgaW5zdGFuY2UpIHtcblxuICAgICAgICBpZiAoIE9iamVjdC5pcyhrZXlQYXRoLCB1bmRlZmluZWQpICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXlQYXRoIGlzIHJlcXVpcmVkIHRvIHN1YnNjcmliZSBkYXRhIHNlcnZpY2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggT2JqZWN0LmlzKGhhbmRsZXIsIHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm4gaXMgcmVxdWlyZWQgdG8gc3Vic2NyaWJlIGRhdGEgc2VydmljZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSB7XG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBpZDogSGVscGVycy5TdHJpbmdzLnJhbmRvbSg2KSxcbiAgICAgICAgICAgIGtleVBhdGg6IGtleVBhdGgsXG4gICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgcHJveHk6IHRoaXMuX2dldE9ic2VydmVyKGtleVBhdGgpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgYSBzdWJzY3JpYmVyXG4gICAgICogQHBhcmFtIHN1YnNjcmliZXJcbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBhbGwgc3Vic2NyaWJlcnNcbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgYWxsIHN1YnNjcmliZWQgZGF0YSBvYmplY3QgY2hhbmdlc1xuICAgICAqIFVzZSBpdCBhZnRlciBsb2FkaW5nIHRoZSBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5UGF0aCAtIGtleSBwYXRoIG9mIHRoZSB0aGlzLl9kYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV4Y2x1ZGVkIC0gc3Vic2NyaWJlciwgZXhjbHVkZWQgc3Vic2NyaWJlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgXG4gICAgICogdGhpcy5fZGF0YS5jdXJyZW50U2l0ZSA9IHtuYW1lOiBcImNvcnBvcmF0ZVwifTtcbiAgICAgKiAvL3N1YnNjcmliZXJzIGxpc3RlbiB0byB0aGUgY3VycmVudFNpdGUgY2hhbmdlc1xuICAgICAqXG4gICAgICogdGhpcy5icm9hZGNhc3REYXRhQ2hhbmdlcyhcImN1cnJlbnRTaXRlXCIpO1xuICAgICAqIC8vdGVsbCBhbGwgc3Vic2NyaWJlcnMgXCJjdXJyZW50U2l0ZVwiIHdoaWNoIGhhcyBjaGFuZ2VkXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEFuIGV4YW1wbGUgYC9zcmMvY29tcG9uZW50cy9fY2F0LWNsaWNrZXIvY2F0LXNlcnZpY2UuanNgXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJyb2FkY2FzdERhdGFDaGFuZ2VzKGtleVBhdGgsIGV4Y2x1ZGVkKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVtrZXlQYXRoXTtcblxuICAgICAgICBmb3IgKGxldCBzdWJzY3JpYmVyIG9mIHRoaXMuX3N1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICBpZihPYmplY3QuaXMoc3Vic2NyaWJlciwgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKE9iamVjdC5pcyhzdWJzY3JpYmVyLmtleVBhdGgsIGtleVBhdGgpICYmICFPYmplY3QuaXMoZXhjbHVkZWQsIHN1YnNjcmliZXIpKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyKGtleVBhdGgsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhpcyBzZXJ2aWNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUFsbCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHByaXZhdGUgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvYnNlcnZhYmxlIHByb3h5IGZvciBhIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcGFyYW0ga2V5UGF0aCB7U3RyaW5nfVxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0T2JzZXJ2ZXIoa2V5UGF0aCAsIGhhbmRsZXI9dGhpcy5faGFuZGxlT2JzZXJ2aW5nRGF0YUNoYW5nZXMpIHtcbiAgICAgICAgaWYoIXRoaXMuX29ic2VydmVycy5oYXMoa2V5UGF0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVycy5zZXQoa2V5UGF0aCwgT2JzZXJ2YWJsZVNsaW0uY3JlYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFba2V5UGF0aF0sIHRydWUsIChjaGFuZ2VzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihjaGFuZ2VzLCBrZXlQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fb2JzZXJ2ZXJzLmdldChrZXlQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVyIHByb3h5IHNldCBoYW5kbGVyXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBkZWZhdWx0IHRydWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9oYW5kbGVPYnNlcnZpbmdEYXRhQ2hhbmdlcyhjaGFuZ2VzLCBrZXlQYXRoKSB7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0RGF0YUNoYW5nZXMoa2V5UGF0aCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuIl19

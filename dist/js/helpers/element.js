System.register(['jquery', 'lodash', '../lib/constants', '../lib/grab'], function (_export) {
    'use strict';

    var $, _, Constants, grab, Element;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_libConstants) {
            Constants = _libConstants.Constants;
        }, function (_libGrab) {
            grab = _libGrab['default'];
        }],
        execute: function () {
            Element = (function () {
                function Element() {
                    _classCallCheck(this, Element);
                }

                _createClass(Element, null, [{
                    key: 'get',
                    value: function get(name, $target) {
                        var options = arguments.length <= 2 || arguments[2] === undefined ? { attribute: Constants.ELEMENT_PROPERTY } : arguments[2];

                        if (name.startsWith("$")) {
                            return $(Element.get(name.substr(1), $target));
                        }

                        return name ? grab('[' + options.attribute + '=\'' + _.kebabCase(name) + '\']', $target)[0] : null;
                    }
                }, {
                    key: 'addProperty',
                    value: function addProperty(name, element) {
                        var options = arguments.length <= 2 || arguments[2] === undefined ? { attribute: Constants.ELEMENT_PROPERTY } : arguments[2];

                        $(element).attr(options.attribute, _.kebabCase(name));
                    }
                }, {
                    key: 'listElements',
                    value: function listElements(name, $container) {
                        var options = arguments.length <= 2 || arguments[2] === undefined ? { attribute: Constants.ELEMENT_PROPERTY } : arguments[2];

                        if (Array.isArray(name)) {
                            return _.map(name, function (candidate) {
                                return { name: candidate, el: Element.get(candidate, $container) };
                            });
                        }
                        if (_.isString(name)) {
                            return _.map(grab('[' + options.attribute + '="' + _.kebabCase(name) + '"]', $container), function (el) {
                                return $(el);
                            });
                        }
                        return undefined;
                    }
                }]);

                return Element;
            })();

            _export('Element', Element);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2hlbHBlcnMvZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBUU0sT0FBTzs7Ozs7Ozs7Ozs7O3NDQU5MLFNBQVM7Ozs7O0FBTVgsbUJBQU87eUJBQVAsT0FBTzswQ0FBUCxPQUFPOzs7NkJBQVAsT0FBTzs7MkJBU0UsYUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFtRDs0QkFBakQsT0FBTyx5REFBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLEVBQUM7O0FBQ3RFLDRCQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFFckIsbUNBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUNsRDs7QUFFRCwrQkFBTyxJQUFJLEdBQUcsSUFBSSxPQUFLLE9BQU8sQ0FBQyxTQUFTLFdBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBTSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7cUJBQzFGOzs7MkJBT2lCLHFCQUFDLElBQUksRUFBRSxPQUFPLEVBQW1EOzRCQUFqRCxPQUFPLHlEQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBQzs7QUFDN0UseUJBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ3pEOzs7MkJBU21CLHNCQUFDLElBQUksRUFBRSxVQUFVLEVBQW1EOzRCQUFqRCxPQUFPLHlEQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBQzs7QUFDbEYsNEJBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNwQixtQ0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFDLFNBQVMsRUFBSTtBQUM3Qix1Q0FBTyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUM7NkJBQ3BFLENBQUMsQ0FBQzt5QkFDTjtBQUNELDRCQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDakIsbUNBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQUssT0FBTyxDQUFDLFNBQVMsVUFBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFNLFVBQVUsQ0FBQyxFQUFFLFVBQUMsRUFBRSxFQUFJO0FBQ25GLHVDQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDaEIsQ0FBQyxDQUFDO3lCQUNOO0FBQ0QsK0JBQU8sU0FBUyxDQUFDO3FCQUNwQjs7O3VCQTlDQyxPQUFPOzs7K0JBb0RKLE9BQU8iLCJmaWxlIjoianMvaGVscGVycy9lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi4vbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgZ3JhYiBmcm9tICcuLi9saWIvZ3JhYic7XG5cbi8qKlxuICogRWxlbWVudCB1dGlsc1xuICovXG5jbGFzcyBFbGVtZW50IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHshU3RyaW5nfSBuYW1lIC0gdGhlIHByb3BlcnR5ICdkYXRhLWpzLWVsJyB2YWx1ZVxuICAgICAqIEBwYXJhbSB7ISRlbGVtZW50fSAkdGFyZ2V0IC0gdGhlIGNhbmRpZGF0ZSBjb250YWluZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHskZWxlbWVudHxlbGVtZW50fSAtIGVsZW1lbnQgd2lsbCBiZSBqcXVlcnkgZWxlbWVudCBvciBkb20gZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgKG5hbWUsICR0YXJnZXQsIG9wdGlvbnM9e2F0dHJpYnV0ZTogQ29uc3RhbnRzLkVMRU1FTlRfUFJPUEVSVFl9KSB7XG4gICAgICAgIGlmKG5hbWUuc3RhcnRzV2l0aChcIiRcIikpIHtcbiAgICAgICAgICAgIC8vcmV0dXJuIGpxdWVyeSBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm4gJChFbGVtZW50LmdldChuYW1lLnN1YnN0cigxKSwgJHRhcmdldCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmV0dXJuIGRvbSBlbGVtZW50XG4gICAgICAgIHJldHVybiBuYW1lID8gZ3JhYihgWyR7b3B0aW9ucy5hdHRyaWJ1dGV9PScke18ua2ViYWJDYXNlKG5hbWUpfSddYCwgJHRhcmdldClbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCAnZGF0YS1qcy1lbCcgcHJvcGVydHkgYW5kIHZhbHVlIHRvICRlbGVtZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRQcm9wZXJ0eShuYW1lLCBlbGVtZW50LCBvcHRpb25zPXthdHRyaWJ1dGU6IENvbnN0YW50cy5FTEVNRU5UX1BST1BFUlRZfSkge1xuICAgICAgICAkKGVsZW1lbnQpLmF0dHIob3B0aW9ucy5hdHRyaWJ1dGUsIF8ua2ViYWJDYXNlKG5hbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IGVsZW1lbnRzIGluIGEgY29udGFpbmVyXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gJGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgIHN0YXRpYyBsaXN0RWxlbWVudHMobmFtZSwgJGNvbnRhaW5lciwgb3B0aW9ucz17YXR0cmlidXRlOiBDb25zdGFudHMuRUxFTUVOVF9QUk9QRVJUWX0pIHtcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIF8ubWFwKG5hbWUsIChjYW5kaWRhdGUpPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7bmFtZTogY2FuZGlkYXRlLCBlbDogRWxlbWVudC5nZXQoY2FuZGlkYXRlLCAkY29udGFpbmVyKX07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZihfLmlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gXy5tYXAoZ3JhYihgWyR7b3B0aW9ucy5hdHRyaWJ1dGV9PVwiJHtfLmtlYmFiQ2FzZShuYW1lKX1cIl1gLCAkY29udGFpbmVyKSwgKGVsKT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuXG59XG5cblxuZXhwb3J0IHsgRWxlbWVudCB9O1xuIl19

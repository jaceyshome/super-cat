System.register(['../../../js/lib/featured-component', 'lodash', '../../../js/lib/config', '../../../js/helpers/helpers', '../cat-service'], function (_export) {
    'use strict';

    var FeaturedComponent, _, configurable, Helpers, CatService, CatDetailPanel;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_jsLibFeaturedComponent) {
            FeaturedComponent = _jsLibFeaturedComponent['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_jsLibConfig) {
            configurable = _jsLibConfig.configurable;
        }, function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_catService) {
            CatService = _catService['default'];
        }],
        execute: function () {
            CatDetailPanel = (function (_FeaturedComponent) {
                _inherits(CatDetailPanel, _FeaturedComponent);

                function CatDetailPanel(el, options) {
                    _classCallCheck(this, _CatDetailPanel);

                    _get(Object.getPrototypeOf(_CatDetailPanel.prototype), 'constructor', this).call(this, el, options);

                    this._subscribeToData(CatService, "cats", this.handleLoadedCatList);
                    this._subscribeToData(CatService, "selectedCat", this.handleNotification);

                    this._data = {
                        selectedCat: this._notifications.selectedCat.proxy
                    };
                }

                _createClass(CatDetailPanel, [{
                    key: 'handleLoadedCatList',
                    value: function handleLoadedCatList(keyPath, cats) {
                        var initialSelectedCat = this._getInitialSelectedCat();
                        var selectedCat = cats.find(function (cat) {
                            return cat.name === initialSelectedCat.name;
                        });
                        if (selectedCat !== undefined) {
                            Object.assign(this._data.selectedCat, selectedCat);
                        }
                        this._unsubscribe(CatService, "cats");
                    }
                }, {
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {
                        this._childElements.$name.html(data.name ? data.name : '');
                        this._childElements.$counter.html(data.counter ? data.counter : '');
                        this._childElements.$src.attr("src", data.src ? data.src : '');
                    }
                }, {
                    key: '_getInitialSelectedCat',
                    value: function _getInitialSelectedCat() {
                        var cat = {};
                        this._listElements(["name", "src", "counter"], this.$el).forEach(function (item, index) {
                            Object.defineProperty(cat, item.name, {
                                value: index === 1 ? $(item.el).attr("src") : $(item.el).html(),
                                writable: true
                            });
                        });
                        return cat;
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatDetailPanel(el, options);
                    }
                }]);

                var _CatDetailPanel = CatDetailPanel;
                CatDetailPanel = configurable({})(CatDetailPanel) || CatDetailPanel;
                return CatDetailPanel;
            })(FeaturedComponent);

            _export('CatDetailPanel', CatDetailPanel);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1kZXRhaWwtcGFuZWwvY2F0LWRldGFpbC1wYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUVBaUJhLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBZm5CLFlBQVk7O3dDQUNaLE9BQU87Ozs7O0FBY0YsMEJBQWM7MEJBQWQsY0FBYzs7QUFNWix5QkFORixjQUFjLENBTVgsRUFBRSxFQUFFLE9BQU8sRUFBRTs7O0FBQ3JCLDJHQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0FBR25CLHdCQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRSx3QkFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBRTFFLHdCQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1QsbUNBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLO3FCQUNyRCxDQUFDO2lCQUVMOzs2QkFqQlEsY0FBYzs7MkJBc0JKLDZCQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDL0IsNEJBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDdkQsNEJBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO21DQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsSUFBSTt5QkFBQSxDQUFDLENBQUM7QUFDekUsNEJBQUcsV0FBVyxLQUFLLFNBQVMsRUFBRTtBQUMxQixrQ0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQzt5QkFDdEQ7QUFDRCw0QkFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ3pDOzs7MkJBRWlCLDRCQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDOUIsNEJBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0QsNEJBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDcEUsNEJBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3FCQUNsRTs7OzJCQUtxQixrQ0FBRztBQUNyQiw0QkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsNEJBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDbkQsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssRUFBSTtBQUNyQixrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDaEM7QUFDSSxxQ0FBSyxFQUFFLEFBQUMsS0FBSyxLQUFLLENBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNqRSx3Q0FBUSxFQUFFLElBQUk7NkJBQ2pCLENBQ0osQ0FBQzt5QkFDTCxDQUFDLENBQUM7QUFDUCwrQkFBTyxHQUFHLENBQUM7cUJBQ2Q7OzsyQkFVVSxjQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDckIsK0JBQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUMxQzs7O3NDQWhFUSxjQUFjO0FBQWQsOEJBQWMsR0FUMUIsWUFBWSxDQUFDLEVBQ2IsQ0FBQyxDQVFXLGNBQWMsS0FBZCxjQUFjO3VCQUFkLGNBQWM7ZUFBUyxpQkFBaUIiLCJmaWxlIjoiY29tcG9uZW50cy9fY2F0LWNsaWNrZXIvY2F0LWRldGFpbC1wYW5lbC9jYXQtZGV0YWlsLXBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZlYXR1cmVkQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2pzL2xpYi9mZWF0dXJlZC1jb21wb25lbnQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7Y29uZmlndXJhYmxlfSBmcm9tICcuLi8uLi8uLi9qcy9saWIvY29uZmlnJzsgICAgIC8vY29uZmlndXJhYmxlIG9iamVjdCwgaXMgdXNlZCB0byBpbml0YWxpemUgdGhlIHRoaXMuY29uZmlnIGFiamVjdCBhbmQgaW5pdGlhbCBzdGF0ZVxuaW1wb3J0IHtIZWxwZXJzfSBmcm9tICcuLi8uLi8uLi9qcy9oZWxwZXJzL2hlbHBlcnMnO1xuaW1wb3J0IENhdFNlcnZpY2UgZnJvbSAnLi4vY2F0LXNlcnZpY2UnO1xuXG5cbi8vanNoaW50LWlnbm9yZVxuQGNvbmZpZ3VyYWJsZSh7XG59KVxuLy9qc2hpbnQtaWdub3JlLWVuZFxuXG4vKipcbiAqIENhdCBkZXRhaWwgcGFuZWxcbiAqXG4gKiBAZXhhbXBsZSA8ZGl2IGNsYXNzPVwiYi1qcy1jYXQtZGV0YWlsLXBhbmVsXCI+PC9kaXY+XG4gKi9cbmV4cG9ydCBjbGFzcyBDYXREZXRhaWxQYW5lbCBleHRlbmRzIEZlYXR1cmVkQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gZWwgLSBUaGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8qIC0tLS0tLS0tLS0tLSBpbml0aWFsaXNlIC0tLS0tLS0tLSAqL1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVUb0RhdGEoQ2F0U2VydmljZSwgXCJjYXRzXCIsIHRoaXMuaGFuZGxlTG9hZGVkQ2F0TGlzdCk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZVRvRGF0YShDYXRTZXJ2aWNlLCBcInNlbGVjdGVkQ2F0XCIsIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uKTtcblxuICAgICAgICB0aGlzLl9kYXRhID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRDYXQ6IHRoaXMuX25vdGlmaWNhdGlvbnMuc2VsZWN0ZWRDYXQucHJveHlcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tIGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaGFuZGxlTG9hZGVkQ2F0TGlzdChrZXlQYXRoLCBjYXRzKSB7XG4gICAgICAgIGxldCBpbml0aWFsU2VsZWN0ZWRDYXQgPSB0aGlzLl9nZXRJbml0aWFsU2VsZWN0ZWRDYXQoKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2F0ID0gY2F0cy5maW5kKGNhdCA9PiBjYXQubmFtZSA9PT0gaW5pdGlhbFNlbGVjdGVkQ2F0Lm5hbWUpO1xuICAgICAgICBpZihzZWxlY3RlZENhdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2RhdGEuc2VsZWN0ZWRDYXQsIHNlbGVjdGVkQ2F0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91bnN1YnNjcmliZShDYXRTZXJ2aWNlLCBcImNhdHNcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlTm90aWZpY2F0aW9uKGtleVBhdGgsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRFbGVtZW50cy4kbmFtZS5odG1sKGRhdGEubmFtZSA/IGRhdGEubmFtZSA6ICcnKTtcbiAgICAgICAgdGhpcy5fY2hpbGRFbGVtZW50cy4kY291bnRlci5odG1sKGRhdGEuY291bnRlciA/IGRhdGEuY291bnRlciA6ICcnKTtcbiAgICAgICAgdGhpcy5fY2hpbGRFbGVtZW50cy4kc3JjLmF0dHIoXCJzcmNcIiwgZGF0YS5zcmMgPyBkYXRhLnNyYyA6ICcnKTtcbiAgICB9XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgX2dldEluaXRpYWxTZWxlY3RlZENhdCgpIHtcbiAgICAgICAgbGV0IGNhdCA9IHt9O1xuICAgICAgICB0aGlzLl9saXN0RWxlbWVudHMoW1wibmFtZVwiLCBcInNyY1wiLCBcImNvdW50ZXJcIl0sIHRoaXMuJGVsKVxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2F0LCBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoaW5kZXggPT09IDEpID8gJChpdGVtLmVsKS5hdHRyKFwic3JjXCIpIDogJChpdGVtLmVsKS5odG1sKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2F0O1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluaXQoKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsIC0gdGhlIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbXBvbmVudCBvcHRpb25zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdChlbCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IENhdERldGFpbFBhbmVsKGVsLCBvcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==

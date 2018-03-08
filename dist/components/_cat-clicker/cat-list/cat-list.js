System.register(['../../../js/lib/featured-component', 'lodash', '../../../js/helpers/helpers', '../../../js/lib/config', './cat-list-tpl', '../cat-service'], function (_export) {
    'use strict';

    var FeaturedComponent, _, Helpers, configurable, catListTplFn, CatService, CatList;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_jsLibFeaturedComponent) {
            FeaturedComponent = _jsLibFeaturedComponent['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_jsLibConfig) {
            configurable = _jsLibConfig.configurable;
        }, function (_catListTpl) {
            catListTplFn = _catListTpl.catListTplFn;
        }, function (_catService) {
            CatService = _catService['default'];
        }],
        execute: function () {
            CatList = (function (_FeaturedComponent) {
                _inherits(CatList, _FeaturedComponent);

                function CatList(el, options) {
                    _classCallCheck(this, _CatList);

                    _get(Object.getPrototypeOf(_CatList.prototype), 'constructor', this).call(this, el, options);

                    this._subscribeToData(CatService, "cats", this.handleNotification);
                    this._subscribeToData(CatService, "selectedCat", this.handleNotification);

                    this._data = {
                        cats: this._notifications.cats.proxy,
                        selectedCat: this._notifications.selectedCat.proxy,
                        description: "Click a cat to show the detail"
                    };

                    this._dynamicPartial = this._createDynamicPartial({
                        templateFn: catListTplFn,
                        data: this._data
                    });

                    this._proxy = this._dynamicPartial.vm.proxy;
                    this._callHook();
                }

                _createClass(CatList, [{
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {
                        this._childElements.$loading.html('');
                        this._dynamicPartial.view.render();
                    }
                }, {
                    key: 'addCat',
                    value: function addCat() {
                        this._proxy.cats.push({
                            name: Helpers.Strings.random(8),
                            counter: 1,
                            src: "http://lorempixel.com/400/300/cats/"
                        });
                    }
                }, {
                    key: 'clickCat',
                    value: function clickCat(cat) {
                        this._proxy.description = "Great";
                        cat.counter += 1;
                    }
                }, {
                    key: 'selectCat',
                    value: function selectCat(cat) {
                        Object.assign(this._proxy.selectedCat, cat);
                    }
                }, {
                    key: 'deleteCat',
                    value: function deleteCat(cat) {
                        _.remove(this._proxy.cats, function (candidate) {
                            return Object.is(candidate.name, cat.name);
                        });
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatList(el, options);
                    }
                }]);

                var _CatList = CatList;
                CatList = configurable({})(CatList) || CatList;
                return CatList;
            })(FeaturedComponent);

            _export('CatList', CatList);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1saXN0L2NhdC1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrRUFtQmEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FqQlosT0FBTzs7d0NBQ1AsWUFBWTs7dUNBQ1osWUFBWTs7Ozs7QUFlUCxtQkFBTzswQkFBUCxPQUFPOztBQUtMLHlCQUxGLE9BQU8sQ0FLSixFQUFFLEVBQUUsT0FBTyxFQUFFOzs7QUFDckIsb0dBQU0sRUFBRSxFQUFFLE9BQU8sRUFBRTs7QUFJbkIsd0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25FLHdCQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7QUFHMUUsd0JBQUksQ0FBQyxLQUFLLEdBQUc7QUFDVCw0QkFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFDcEMsbUNBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLO0FBQ2xELG1DQUFXLEVBQUUsZ0NBQWdDO3FCQUNoRCxDQUFDOztBQUdGLHdCQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQUM5QyxrQ0FBVSxFQUFFLFlBQVk7QUFDeEIsNEJBQUksRUFBRSxJQUFJLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDOztBQUVILHdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUM1Qyx3QkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwQjs7NkJBNUJRLE9BQU87OzJCQWlDRSw0QkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzlCLDRCQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEMsNEJBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUN0Qzs7OzJCQU1LLGtCQUFHO0FBQ0wsNEJBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNsQixnQ0FBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMvQixtQ0FBTyxFQUFFLENBQUM7QUFDViwrQkFBRyxFQUFFLHFDQUFxQzt5QkFDN0MsQ0FBQyxDQUFDO3FCQUNOOzs7MkJBRU8sa0JBQUMsR0FBRyxFQUFFO0FBQ1YsNEJBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUNsQywyQkFBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7cUJBQ3BCOzs7MkJBRVEsbUJBQUMsR0FBRyxFQUFFO0FBQ1gsOEJBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQy9DOzs7MkJBRVEsbUJBQUMsR0FBRyxFQUFFO0FBQ1gseUJBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQSxTQUFTO21DQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDO3lCQUFBLENBQUMsQ0FBQztxQkFDaEY7OzsyQkFTVSxjQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDckIsK0JBQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNuQzs7OytCQXhFUSxPQUFPO0FBQVAsdUJBQU8sR0FWbkIsWUFBWSxDQUFDLEVBRWIsQ0FBQyxDQVFXLE9BQU8sS0FBUCxPQUFPO3VCQUFQLE9BQU87ZUFBUyxpQkFBaUIiLCJmaWxlIjoiY29tcG9uZW50cy9fY2F0LWNsaWNrZXIvY2F0LWxpc3QvY2F0LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmVhdHVyZWRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vanMvbGliL2ZlYXR1cmVkLWNvbXBvbmVudCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtIZWxwZXJzfSBmcm9tICcuLi8uLi8uLi9qcy9oZWxwZXJzL2hlbHBlcnMnO1xuaW1wb3J0IHtjb25maWd1cmFibGV9IGZyb20gJy4uLy4uLy4uL2pzL2xpYi9jb25maWcnOyAgICAgLy9jb25maWd1cmFibGUgb2JqZWN0LCBpcyB1c2VkIHRvIGluaXRhbGl6ZSB0aGUgdGhpcy5jb25maWcgYWJqZWN0IGFuZCBpbml0aWFsIHN0YXRlXG5pbXBvcnQge2NhdExpc3RUcGxGbn0gZnJvbSAnLi9jYXQtbGlzdC10cGwnO1xuaW1wb3J0IENhdFNlcnZpY2UgZnJvbSAnLi4vY2F0LXNlcnZpY2UnO1xuXG5cbi8vanNoaW50LWlnbm9yZVxuQGNvbmZpZ3VyYWJsZSh7XG5cbn0pXG4vL2pzaGludC1pZ25vcmUtZW5kXG5cbi8qKlxuICogQ2F0IGxpc3QgY29tcG9uZW50XG4gKlxuICogQGV4YW1wbGUgPGRpdiBjbGFzcz1cImItanMtY2F0LWxpc3RcIj48L2Rpdj5cbiAqL1xuZXhwb3J0IGNsYXNzIENhdExpc3QgZXh0ZW5kcyBGZWF0dXJlZENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBlbCAtIFRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgY29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbml0aWFsaXNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvL1N1YnNjcmliZSB0byBcImNhdHNcIiBhbmQgXCJzZWxlY3RlZENhdFwiIG9mIHRoaXMuX2RhdGEgaW4gQ2F0U2VydmljZVxuICAgICAgICB0aGlzLl9zdWJzY3JpYmVUb0RhdGEoQ2F0U2VydmljZSwgXCJjYXRzXCIsIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9EYXRhKENhdFNlcnZpY2UsIFwic2VsZWN0ZWRDYXRcIiwgdGhpcy5oYW5kbGVOb3RpZmljYXRpb24pO1xuXG4gICAgICAgIC8vQ3JlYXRlIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHtcbiAgICAgICAgICAgIGNhdHM6IHRoaXMuX25vdGlmaWNhdGlvbnMuY2F0cy5wcm94eSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2F0OiB0aGlzLl9ub3RpZmljYXRpb25zLnNlbGVjdGVkQ2F0LnByb3h5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgYSBjYXQgdG8gc2hvdyB0aGUgZGV0YWlsXCJcbiAgICAgICAgfTtcblxuICAgICAgICAvL0NyZWF0ZSBkeW5hbWljIHBhcnRpYWxcbiAgICAgICAgdGhpcy5fZHluYW1pY1BhcnRpYWwgPSB0aGlzLl9jcmVhdGVEeW5hbWljUGFydGlhbCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZUZuOiBjYXRMaXN0VHBsRm4sXG4gICAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3Byb3h5ID0gdGhpcy5fZHluYW1pY1BhcnRpYWwudm0ucHJveHk7XG4gICAgICAgIHRoaXMuX2NhbGxIb29rKCk7XG4gICAgfVxuXG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhdGEgc2VydmljZSBub3RpZmljYXRpb24gaGFuZGxlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGhhbmRsZU5vdGlmaWNhdGlvbihrZXlQYXRoLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkRWxlbWVudHMuJGxvYWRpbmcuaHRtbCgnJyk7XG4gICAgICAgIHRoaXMuX2R5bmFtaWNQYXJ0aWFsLnZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2aWV3IGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC8vVmlldyBoYW5kbGVycyBhcmUgcHVibGljIGZ1bmN0aW9uc1xuICAgIGFkZENhdCgpIHtcbiAgICAgICAgdGhpcy5fcHJveHkuY2F0cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IEhlbHBlcnMuU3RyaW5ncy5yYW5kb20oOCksXG4gICAgICAgICAgICBjb3VudGVyOiAxLFxuICAgICAgICAgICAgc3JjOiBcImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS80MDAvMzAwL2NhdHMvXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xpY2tDYXQoY2F0KSB7XG4gICAgICAgIHRoaXMuX3Byb3h5LmRlc2NyaXB0aW9uID0gXCJHcmVhdFwiO1xuICAgICAgICBjYXQuY291bnRlciArPSAxO1xuICAgIH1cblxuICAgIHNlbGVjdENhdChjYXQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9wcm94eS5zZWxlY3RlZENhdCwgY2F0KTtcbiAgICB9XG5cbiAgICBkZWxldGVDYXQoY2F0KSB7XG4gICAgICAgIF8ucmVtb3ZlKHRoaXMuX3Byb3h5LmNhdHMsIGNhbmRpZGF0ZSA9PiBPYmplY3QuaXMoY2FuZGlkYXRlLm5hbWUsIGNhdC5uYW1lKSk7XG4gICAgfVxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluaXQoKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsIC0gdGhlIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbXBvbmVudCBvcHRpb25zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdChlbCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IENhdExpc3QoZWwsIG9wdGlvbnMpO1xuICAgIH1cblxufVxuIl19

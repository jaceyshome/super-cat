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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1saXN0L2NhdC1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrRUFtQmEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FqQlosT0FBTzs7d0NBQ1AsWUFBWTs7dUNBQ1osWUFBWTs7Ozs7QUFlUCxtQkFBTzswQkFBUCxPQUFPOztBQUtMLHlCQUxGLE9BQU8sQ0FLSixFQUFFLEVBQUUsT0FBTyxFQUFFOzs7QUFDckIsb0dBQU0sRUFBRSxFQUFFLE9BQU8sRUFBRTs7QUFJbkIsd0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25FLHdCQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7QUFHMUUsd0JBQUksQ0FBQyxLQUFLLEdBQUc7QUFDVCw0QkFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFDcEMsbUNBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLO0FBQ2xELG1DQUFXLEVBQUUsZ0NBQWdDO3FCQUNoRCxDQUFDOztBQUdGLHdCQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQUM5QyxrQ0FBVSxFQUFFLFlBQVk7QUFDeEIsNEJBQUksRUFBRSxJQUFJLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDOztBQUVILHdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUM1Qyx3QkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwQjs7NkJBNUJRLE9BQU87OzJCQWlDRSw0QkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzlCLDRCQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDdEM7OzsyQkFNSyxrQkFBRztBQUNMLDRCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbEIsZ0NBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDL0IsbUNBQU8sRUFBRSxDQUFDO0FBQ1YsK0JBQUcsRUFBRSxxQ0FBcUM7eUJBQzdDLENBQUMsQ0FBQztxQkFDTjs7OzJCQUVPLGtCQUFDLEdBQUcsRUFBRTtBQUNWLDRCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDbEMsMkJBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO3FCQUNwQjs7OzJCQUVRLG1CQUFDLEdBQUcsRUFBRTtBQUNYLDhCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUMvQzs7OzJCQUVRLG1CQUFDLEdBQUcsRUFBRTtBQUNYLHlCQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQUEsU0FBUzttQ0FBSSxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQzt5QkFBQSxDQUFDLENBQUM7cUJBQ2hGOzs7MkJBU1UsY0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQ3JCLCtCQUFPLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDbkM7OzsrQkF2RVEsT0FBTztBQUFQLHVCQUFPLEdBVm5CLFlBQVksQ0FBQyxFQUViLENBQUMsQ0FRVyxPQUFPLEtBQVAsT0FBTzt1QkFBUCxPQUFPO2VBQVMsaUJBQWlCIiwiZmlsZSI6ImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1saXN0L2NhdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZlYXR1cmVkQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2pzL2xpYi9mZWF0dXJlZC1jb21wb25lbnQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vLi4vLi4vanMvaGVscGVycy9oZWxwZXJzJztcbmltcG9ydCB7Y29uZmlndXJhYmxlfSBmcm9tICcuLi8uLi8uLi9qcy9saWIvY29uZmlnJzsgICAgIC8vY29uZmlndXJhYmxlIG9iamVjdCwgaXMgdXNlZCB0byBpbml0YWxpemUgdGhlIHRoaXMuY29uZmlnIGFiamVjdCBhbmQgaW5pdGlhbCBzdGF0ZVxuaW1wb3J0IHtjYXRMaXN0VHBsRm59IGZyb20gJy4vY2F0LWxpc3QtdHBsJztcbmltcG9ydCBDYXRTZXJ2aWNlIGZyb20gJy4uL2NhdC1zZXJ2aWNlJztcblxuXG4vL2pzaGludC1pZ25vcmVcbkBjb25maWd1cmFibGUoe1xuXG59KVxuLy9qc2hpbnQtaWdub3JlLWVuZFxuXG4vKipcbiAqIENhdCBsaXN0IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlIDxkaXYgY2xhc3M9XCJiLWpzLWNhdC1saXN0XCI+PC9kaXY+XG4gKi9cbmV4cG9ydCBjbGFzcyBDYXRMaXN0IGV4dGVuZHMgRmVhdHVyZWRDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gZWwgLSBUaGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW5pdGlhbGlzZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy9TdWJzY3JpYmUgdG8gXCJjYXRzXCIgYW5kIFwic2VsZWN0ZWRDYXRcIiBvZiB0aGlzLl9kYXRhIGluIENhdFNlcnZpY2VcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9EYXRhKENhdFNlcnZpY2UsIFwiY2F0c1wiLCB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbik7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZVRvRGF0YShDYXRTZXJ2aWNlLCBcInNlbGVjdGVkQ2F0XCIsIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uKTtcblxuICAgICAgICAvL0NyZWF0ZSB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7XG4gICAgICAgICAgICBjYXRzOiB0aGlzLl9ub3RpZmljYXRpb25zLmNhdHMucHJveHksXG4gICAgICAgICAgICBzZWxlY3RlZENhdDogdGhpcy5fbm90aWZpY2F0aW9ucy5zZWxlY3RlZENhdC5wcm94eSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIGEgY2F0IHRvIHNob3cgdGhlIGRldGFpbFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9DcmVhdGUgZHluYW1pYyBwYXJ0aWFsXG4gICAgICAgIHRoaXMuX2R5bmFtaWNQYXJ0aWFsID0gdGhpcy5fY3JlYXRlRHluYW1pY1BhcnRpYWwoe1xuICAgICAgICAgICAgdGVtcGxhdGVGbjogY2F0TGlzdFRwbEZuLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5fZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wcm94eSA9IHRoaXMuX2R5bmFtaWNQYXJ0aWFsLnZtLnByb3h5O1xuICAgICAgICB0aGlzLl9jYWxsSG9vaygpO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIHNlcnZpY2Ugbm90aWZpY2F0aW9uIGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBoYW5kbGVOb3RpZmljYXRpb24oa2V5UGF0aCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9keW5hbWljUGFydGlhbC52aWV3LnJlbmRlcigpO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmlldyBoYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAvL1ZpZXcgaGFuZGxlcnMgYXJlIHB1YmxpYyBmdW5jdGlvbnNcbiAgICBhZGRDYXQoKSB7XG4gICAgICAgIHRoaXMuX3Byb3h5LmNhdHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBIZWxwZXJzLlN0cmluZ3MucmFuZG9tKDgpLFxuICAgICAgICAgICAgY291bnRlcjogMSxcbiAgICAgICAgICAgIHNyYzogXCJodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzMwMC9jYXRzL1wiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrQ2F0KGNhdCkge1xuICAgICAgICB0aGlzLl9wcm94eS5kZXNjcmlwdGlvbiA9IFwiR3JlYXRcIjtcbiAgICAgICAgY2F0LmNvdW50ZXIgKz0gMTtcbiAgICB9XG5cbiAgICBzZWxlY3RDYXQoY2F0KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fcHJveHkuc2VsZWN0ZWRDYXQsIGNhdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlQ2F0KGNhdCkge1xuICAgICAgICBfLnJlbW92ZSh0aGlzLl9wcm94eS5jYXRzLCBjYW5kaWRhdGUgPT4gT2JqZWN0LmlzKGNhbmRpZGF0ZS5uYW1lLCBjYXQubmFtZSkpO1xuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbml0KCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBjb21wb25lbnQgb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgc3RhdGljIGluaXQoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDYXRMaXN0KGVsLCBvcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==

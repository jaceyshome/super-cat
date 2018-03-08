System.register(['../../../js/lib/featured-component', 'lodash', '../../../js/helpers/helpers', '../../../js/lib/config', '../cat-list-counter/cat-list-counter-tpl', '../cat-service'], function (_export) {
    'use strict';

    var FeaturedComponent, _, Helpers, configurable, catListCounterTplFn, CatService, CatOverview;

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
        }, function (_catListCounterCatListCounterTpl) {
            catListCounterTplFn = _catListCounterCatListCounterTpl.catListCounterTplFn;
        }, function (_catService) {
            CatService = _catService['default'];
        }],
        execute: function () {
            CatOverview = (function (_FeaturedComponent) {
                _inherits(CatOverview, _FeaturedComponent);

                function CatOverview(el, options) {
                    _classCallCheck(this, _CatOverview);

                    _get(Object.getPrototypeOf(_CatOverview.prototype), 'constructor', this).call(this, el, options);

                    this._data = this._createSubscriptionData(CatService, ["cats", "selectedCat", "state"]);

                    this._dynamicPartial = this._createDynamicPartial({
                        templateFn: catListTplFn,
                        data: this._data
                    });

                    this._proxy = this._dynamicPartial.vm.proxy;
                    this._callHook();
                }

                _createClass(CatOverview, [{
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {
                        this._dynamicPartial.view.render();
                    }
                }, {
                    key: 'clickCat',
                    value: function clickCat(cat) {
                        this._proxy.description = "Great";
                        cat.counter += 1;
                        this._proxy.selectedCat.counter += 1;
                        Object.assign(this._proxy.selectedCat, cat);
                        this._proxy.state.selectedCat = CatService.SELECTED_CAT_STATE_READ;
                    }
                }, {
                    key: 'editCat',
                    value: function editCat(cat) {
                        Object.assign(this._proxy.selectedCat, cat);
                        this._proxy.state.selectedCat = CatService.SELECTED_CAT_STATE_EDIT;
                    }
                }, {
                    key: 'deleteCat',
                    value: function deleteCat(cat) {
                        this._proxy.cats.splice(this._proxy.cats.indexOf(cat), 1);
                        if (cat.name === this._proxy.selectedCat.name) {
                            Helpers.Objects.destroy(this._proxy.selectedCat);
                        }
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatOverview(el, options);
                    }
                }]);

                var _CatOverview = CatOverview;
                CatOverview = configurable({})(CatOverview) || CatOverview;
                return CatOverview;
            })(FeaturedComponent);

            _export('CatOverview', CatOverview);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1vdmVydmlldy9jYXQtb3ZlcnZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NGQW1CYSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O3dDQWpCaEIsT0FBTzs7d0NBQ1AsWUFBWTs7bUVBQ1osbUJBQW1COzs7OztBQWVkLHVCQUFXOzBCQUFYLFdBQVc7O0FBS1QseUJBTEYsV0FBVyxDQUtSLEVBQUUsRUFBRSxPQUFPLEVBQUU7OztBQUNyQix3R0FBTSxFQUFFLEVBQUUsT0FBTyxFQUFFOztBQUduQix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQ3JDLFVBQVUsRUFDVixDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQ25DLENBQUM7O0FBRUYsd0JBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0FBQzlDLGtDQUFVLEVBQUUsWUFBWTtBQUN4Qiw0QkFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO3FCQUNuQixDQUFDLENBQUM7O0FBRUgsd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzVDLHdCQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCOzs2QkFyQlEsV0FBVzs7MkJBMEJGLDRCQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDOUIsNEJBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUN0Qzs7OzJCQUtPLGtCQUFDLEdBQUcsRUFBRTtBQUNWLDRCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDbEMsMkJBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBQ2pCLDRCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBQ3JDLDhCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLDRCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3FCQUN0RTs7OzJCQUVNLGlCQUFDLEdBQUcsRUFBRTtBQUNULDhCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLDRCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3FCQUN0RTs7OzJCQUVRLG1CQUFDLEdBQUcsRUFBRTtBQUNYLDRCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFELDRCQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQzFDLG1DQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3lCQUNwRDtxQkFDSjs7OzJCQVNVLGNBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRTtBQUNyQiwrQkFBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ3ZDOzs7bUNBOURRLFdBQVc7QUFBWCwyQkFBVyxHQVZ2QixZQUFZLENBQUMsRUFFYixDQUFDLENBUVcsV0FBVyxLQUFYLFdBQVc7dUJBQVgsV0FBVztlQUFTLGlCQUFpQiIsImZpbGUiOiJjb21wb25lbnRzL19jYXQtY2xpY2tlci9jYXQtb3ZlcnZpZXcvY2F0LW92ZXJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZlYXR1cmVkQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2pzL2xpYi9mZWF0dXJlZC1jb21wb25lbnQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vLi4vLi4vanMvaGVscGVycy9oZWxwZXJzJztcbmltcG9ydCB7Y29uZmlndXJhYmxlfSBmcm9tICcuLi8uLi8uLi9qcy9saWIvY29uZmlnJzsgICAgIC8vY29uZmlndXJhYmxlIG9iamVjdCwgaXMgdXNlZCB0byBpbml0YWxpemUgdGhlIHRoaXMuY29uZmlnIGFiamVjdCBhbmQgaW5pdGlhbCBzdGF0ZVxuaW1wb3J0IHtjYXRMaXN0Q291bnRlclRwbEZufSBmcm9tICcuLi9jYXQtbGlzdC1jb3VudGVyL2NhdC1saXN0LWNvdW50ZXItdHBsJztcbmltcG9ydCBDYXRTZXJ2aWNlIGZyb20gJy4uL2NhdC1zZXJ2aWNlJztcblxuXG4vL2pzaGludC1pZ25vcmVcbkBjb25maWd1cmFibGUoe1xuXG59KVxuLy9qc2hpbnQtaWdub3JlLWVuZFxuXG4vKipcbiAqIENhdCBsaXN0IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlIDxkaXYgY2xhc3M9XCJiLWpzLWNhdC1vdmVydmlld1wiPjwvZGl2PlxuICovXG5leHBvcnQgY2xhc3MgQ2F0T3ZlcnZpZXcgZXh0ZW5kcyBGZWF0dXJlZENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBlbCAtIFRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgY29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbml0aWFsaXNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5fY3JlYXRlU3Vic2NyaXB0aW9uRGF0YShcbiAgICAgICAgICAgIENhdFNlcnZpY2UsXG4gICAgICAgICAgICBbXCJjYXRzXCIsIFwic2VsZWN0ZWRDYXRcIiwgXCJzdGF0ZVwiXVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2R5bmFtaWNQYXJ0aWFsID0gdGhpcy5fY3JlYXRlRHluYW1pY1BhcnRpYWwoe1xuICAgICAgICAgICAgdGVtcGxhdGVGbjogY2F0TGlzdFRwbEZuLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5fZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wcm94eSA9IHRoaXMuX2R5bmFtaWNQYXJ0aWFsLnZtLnByb3h5O1xuICAgICAgICB0aGlzLl9jYWxsSG9vaygpO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIHNlcnZpY2Ugbm90aWZpY2F0aW9uIGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBoYW5kbGVOb3RpZmljYXRpb24oa2V5UGF0aCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9keW5hbWljUGFydGlhbC52aWV3LnJlbmRlcigpO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmlldyBoYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBjbGlja0NhdChjYXQpIHtcbiAgICAgICAgdGhpcy5fcHJveHkuZGVzY3JpcHRpb24gPSBcIkdyZWF0XCI7XG4gICAgICAgIGNhdC5jb3VudGVyICs9IDE7XG4gICAgICAgIHRoaXMuX3Byb3h5LnNlbGVjdGVkQ2F0LmNvdW50ZXIgKz0gMTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9wcm94eS5zZWxlY3RlZENhdCwgY2F0KTtcbiAgICAgICAgdGhpcy5fcHJveHkuc3RhdGUuc2VsZWN0ZWRDYXQgPSBDYXRTZXJ2aWNlLlNFTEVDVEVEX0NBVF9TVEFURV9SRUFEO1xuICAgIH1cblxuICAgIGVkaXRDYXQoY2F0KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fcHJveHkuc2VsZWN0ZWRDYXQsIGNhdCk7XG4gICAgICAgIHRoaXMuX3Byb3h5LnN0YXRlLnNlbGVjdGVkQ2F0ID0gQ2F0U2VydmljZS5TRUxFQ1RFRF9DQVRfU1RBVEVfRURJVDtcbiAgICB9XG5cbiAgICBkZWxldGVDYXQoY2F0KSB7XG4gICAgICAgIHRoaXMuX3Byb3h5LmNhdHMuc3BsaWNlKHRoaXMuX3Byb3h5LmNhdHMuaW5kZXhPZihjYXQpLCAxKTtcbiAgICAgICAgaWYoY2F0Lm5hbWUgPT09IHRoaXMuX3Byb3h5LnNlbGVjdGVkQ2F0Lm5hbWUpIHtcbiAgICAgICAgICAgIEhlbHBlcnMuT2JqZWN0cy5kZXN0cm95KHRoaXMuX3Byb3h5LnNlbGVjdGVkQ2F0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbml0KCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBjb21wb25lbnQgb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgc3RhdGljIGluaXQoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDYXRPdmVydmlldyhlbCwgb3B0aW9ucyk7XG4gICAgfVxuXG59XG4iXX0=

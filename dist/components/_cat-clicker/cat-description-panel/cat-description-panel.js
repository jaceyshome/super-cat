System.register(['../../../js/lib/featured-component', 'lodash', '../../../js/lib/config', '../cat-service'], function (_export) {
    'use strict';

    var FeaturedComponent, _, configurable, CatService, CatDescriptionPanel;

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
        }, function (_catService) {
            CatService = _catService['default'];
        }],
        execute: function () {
            CatDescriptionPanel = (function (_FeaturedComponent) {
                _inherits(CatDescriptionPanel, _FeaturedComponent);

                function CatDescriptionPanel(el, options) {
                    _classCallCheck(this, _CatDescriptionPanel);

                    _get(Object.getPrototypeOf(_CatDescriptionPanel.prototype), 'constructor', this).call(this, el, options);

                    this._data = this._createSubscriptionData(CatService, "selectedCat", this.handleNotification);
                    this._childElements.$buttonLike.click(this.onClickButtonLike);
                }

                _createClass(CatDescriptionPanel, [{
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {
                        this._childElements.$name.html(data.name ? data.name : '');
                        this._childElements.$counter.html(data.counter ? data.counter : '');
                    }
                }, {
                    key: 'onClickButtonLike',
                    value: function onClickButtonLike(e) {
                        if (this._data.selectedCat) {
                            this._data.selectedCat.counter += 1;
                            this._childElements.$counter.html(this._data.selectedCat.counter);
                        }
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatDescriptionPanel(el, options);
                    }
                }]);

                var _CatDescriptionPanel = CatDescriptionPanel;
                CatDescriptionPanel = configurable({})(CatDescriptionPanel) || CatDescriptionPanel;
                return CatDescriptionPanel;
            })(FeaturedComponent);

            _export('CatDescriptionPanel', CatDescriptionPanel);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1kZXNjcmlwdGlvbi1wYW5lbC9jYXQtZGVzY3JpcHRpb24tcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dEQWVhLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FieEIsWUFBWTs7Ozs7QUFhUCwrQkFBbUI7MEJBQW5CLG1CQUFtQjs7QUFNakIseUJBTkYsbUJBQW1CLENBTWhCLEVBQUUsRUFBRSxPQUFPLEVBQUU7OztBQUNyQixnSEFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFOztBQUduQix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5Rix3QkFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNqRTs7NkJBWlEsbUJBQW1COzsyQkFpQlYsNEJBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUM5Qiw0QkFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMzRCw0QkFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztxQkFDdkU7OzsyQkFLZ0IsMkJBQUMsQ0FBQyxFQUFFO0FBQ2pCLDRCQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO0FBQ3ZCLGdDQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBQ3BDLGdDQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3JFO3FCQUNKOzs7MkJBV1UsY0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQ3JCLCtCQUFPLElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUMvQzs7OzJDQTNDUSxtQkFBbUI7QUFBbkIsbUNBQW1CLEdBVC9CLFlBQVksQ0FBQyxFQUNiLENBQUMsQ0FRVyxtQkFBbUIsS0FBbkIsbUJBQW1CO3VCQUFuQixtQkFBbUI7ZUFBUyxpQkFBaUIiLCJmaWxlIjoiY29tcG9uZW50cy9fY2F0LWNsaWNrZXIvY2F0LWRlc2NyaXB0aW9uLXBhbmVsL2NhdC1kZXNjcmlwdGlvbi1wYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZWF0dXJlZENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9qcy9saWIvZmVhdHVyZWQtY29tcG9uZW50JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2NvbmZpZ3VyYWJsZX0gZnJvbSAnLi4vLi4vLi4vanMvbGliL2NvbmZpZyc7ICAgICAvL2NvbmZpZ3VyYWJsZSBvYmplY3QsIGlzIHVzZWQgdG8gaW5pdGFsaXplIHRoZSB0aGlzLmNvbmZpZyBhYmplY3QgYW5kIGluaXRpYWwgc3RhdGVcbmltcG9ydCBDYXRTZXJ2aWNlIGZyb20gJy4uL2NhdC1zZXJ2aWNlJztcblxuLy9qc2hpbnQtaWdub3JlXG5AY29uZmlndXJhYmxlKHtcbn0pXG4vL2pzaGludC1pZ25vcmUtZW5kXG5cbi8qKlxuICogQ2F0IGRldGFpbCBwYW5lbFxuICpcbiAqIEBleGFtcGxlIDxkaXYgY2xhc3M9XCJiLWpzLWNhdC1kZXNjcmlwdGlvbi1wYW5lbFwiPjwvZGl2PlxuICovXG5leHBvcnQgY2xhc3MgQ2F0RGVzY3JpcHRpb25QYW5lbCBleHRlbmRzIEZlYXR1cmVkQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gZWwgLSBUaGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8qIC0tLS0tLS0tLS0tLSBpbml0aWFsaXNlIC0tLS0tLS0tLSAqL1xuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5fY3JlYXRlU3Vic2NyaXB0aW9uRGF0YShDYXRTZXJ2aWNlLCBcInNlbGVjdGVkQ2F0XCIsIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uKTtcbiAgICAgICAgdGhpcy5fY2hpbGRFbGVtZW50cy4kYnV0dG9uTGlrZS5jbGljayh0aGlzLm9uQ2xpY2tCdXR0b25MaWtlKTtcbiAgICB9XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLSBoYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGhhbmRsZU5vdGlmaWNhdGlvbihrZXlQYXRoLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkRWxlbWVudHMuJG5hbWUuaHRtbChkYXRhLm5hbWUgPyBkYXRhLm5hbWUgOiAnJyk7XG4gICAgICAgIHRoaXMuX2NoaWxkRWxlbWVudHMuJGNvdW50ZXIuaHRtbChkYXRhLmNvdW50ZXIgPyBkYXRhLmNvdW50ZXIgOiAnJyk7XG4gICAgfVxuXG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIG9uQ2xpY2tCdXR0b25MaWtlKGUpIHtcbiAgICAgICAgaWYodGhpcy5fZGF0YS5zZWxlY3RlZENhdCkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5zZWxlY3RlZENhdC5jb3VudGVyICs9IDE7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZEVsZW1lbnRzLiRjb3VudGVyLmh0bWwodGhpcy5fZGF0YS5zZWxlY3RlZENhdC5jb3VudGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluaXQoKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsIC0gdGhlIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbXBvbmVudCBvcHRpb25zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdChlbCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IENhdERlc2NyaXB0aW9uUGFuZWwoZWwsIG9wdGlvbnMpO1xuICAgIH1cblxufVxuIl19

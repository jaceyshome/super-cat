System.register(['../../../js/lib/featured-component', '../../../js/lib/config', './cat-list-counter-tpl'], function (_export) {
    'use strict';

    var FeaturedComponent, configurable, catListCounterTplFn, CatListCounter;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_jsLibFeaturedComponent) {
            FeaturedComponent = _jsLibFeaturedComponent['default'];
        }, function (_jsLibConfig) {
            configurable = _jsLibConfig.configurable;
        }, function (_catListCounterTpl) {
            catListCounterTplFn = _catListCounterTpl.catListCounterTplFn;
        }],
        execute: function () {
            CatListCounter = (function (_FeaturedComponent) {
                _inherits(CatListCounter, _FeaturedComponent);

                function CatListCounter(el, options) {
                    _classCallCheck(this, _CatListCounter);

                    _get(Object.getPrototypeOf(_CatListCounter.prototype), 'constructor', this).call(this, el, options);

                    this._data = [{ name: "cat 1", counter: 1 }, { name: "cat 2", counter: 2 }, { name: "cat 3", counter: 3 }];

                    this._createDynamicPartial({
                        templateFn: catListCounterTplFn,
                        data: this._data
                    });

                    this._childElements.$title.html(this.config.title);
                }

                _createClass(CatListCounter, [{
                    key: 'clickCat',
                    value: function clickCat(cat) {
                        cat.counter += 1;
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatListCounter(el, options);
                    }
                }]);

                var _CatListCounter = CatListCounter;
                CatListCounter = configurable({
                    title: null
                })(CatListCounter) || CatListCounter;
                return CatListCounter;
            })(FeaturedComponent);

            _export('CatListCounter', CatListCounter);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1saXN0LWNvdW50ZXIvY2F0LWxpc3QtY291bnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OERBZ0JhLGNBQWM7Ozs7Ozs7Ozs7Ozs7O3dDQWZuQixZQUFZOztxREFFWixtQkFBbUI7OztBQWFkLDBCQUFjOzBCQUFkLGNBQWM7O0FBS1oseUJBTEYsY0FBYyxDQUtYLEVBQUUsRUFBRSxPQUFPLEVBQUU7OztBQUNyQiwyR0FBTSxFQUFFLEVBQUUsT0FBTyxFQUFFOztBQUVuQix3QkFBSSxDQUFDLEtBQUssR0FBRyxDQUNULEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQzNCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQzNCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQzlCLENBQUM7O0FBTUYsd0JBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQUN2QixrQ0FBVSxFQUFFLG1CQUFtQjtBQUMvQiw0QkFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO3FCQUNuQixDQUFDLENBQUM7O0FBR0gsd0JBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0RDs7NkJBekJRLGNBQWM7OzJCQTZCZixrQkFBQyxHQUFHLEVBQUU7QUFDViwyQkFBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7cUJBQ3BCOzs7MkJBU1UsY0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQ3JCLCtCQUFPLElBQUksY0FBYyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDMUM7OztzQ0ExQ1EsY0FBYztBQUFkLDhCQUFjLEdBVjFCLFlBQVksQ0FBQztBQUNWLHlCQUFLLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBUVcsY0FBYyxLQUFkLGNBQWM7dUJBQWQsY0FBYztlQUFTLGlCQUFpQiIsImZpbGUiOiJjb21wb25lbnRzL19jYXQtY2xpY2tlci9jYXQtbGlzdC1jb3VudGVyL2NhdC1saXN0LWNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmVhdHVyZWRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vanMvbGliL2ZlYXR1cmVkLWNvbXBvbmVudCc7XG5pbXBvcnQge2NvbmZpZ3VyYWJsZX0gZnJvbSAnLi4vLi4vLi4vanMvbGliL2NvbmZpZyc7ICAgICAvL2NvbmZpZ3VyYWJsZSBvYmplY3QsIGlzIHVzZWQgdG8gaW5pdGFsaXplIHRoZSB0aGlzLmNvbmZpZyBhYmplY3QgYW5kIGluaXRpYWwgc3RhdGVcblxuaW1wb3J0IHtjYXRMaXN0Q291bnRlclRwbEZufSBmcm9tICcuL2NhdC1saXN0LWNvdW50ZXItdHBsJztcblxuLy9qc2hpbnQtaWdub3JlXG5AY29uZmlndXJhYmxlKHtcbiAgICB0aXRsZTogbnVsbCxcbn0pXG4vL2pzaGludC1pZ25vcmUtZW5kXG5cbi8qKlxuICogQ2F0IGxpc3QgY291bnRlciBkZW1vXG4gKlxuICogQGV4YW1wbGUgPGRpdiBjbGFzcz1cImItanMtY2F0LWxpc3QtY291bnRlclwiPjwvZGl2PlxuICovXG5leHBvcnQgY2xhc3MgQ2F0TGlzdENvdW50ZXIgZXh0ZW5kcyBGZWF0dXJlZENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBlbCAtIFRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgY29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IFtcbiAgICAgICAgICAgIHtuYW1lOiBcImNhdCAxXCIsIGNvdW50ZXI6IDF9LFxuICAgICAgICAgICAge25hbWU6IFwiY2F0IDJcIiwgY291bnRlcjogMn0sXG4gICAgICAgICAgICB7bmFtZTogXCJjYXQgM1wiLCBjb3VudGVyOiAzfVxuICAgICAgICBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjYXRMaXN0Q291bnRlclRwbEZuIGlzIGNvbXBpbGVkIGJ5IHRoZSAnZ3VscCBidWlsZC12aWV3LXRlbXBsYXRlcycgdGFza1xuICAgICAgICAgKiBpdCBhcHBlbmRzIGl0c2VsZiB0byB0aGlzLiRlbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY3JlYXRlRHluYW1pY1BhcnRpYWwoe1xuICAgICAgICAgICAgdGVtcGxhdGVGbjogY2F0TGlzdENvdW50ZXJUcGxGbixcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuX2RhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9HZXQgdGl0bGUganF1ZXJ5IG9iamVjdCBhbmQgc2V0IHRoZSB2YWx1ZSB3aXRoIGNvbmZpZyB0aXRsZVxuICAgICAgICB0aGlzLl9jaGlsZEVsZW1lbnRzLiR0aXRsZS5odG1sKHRoaXMuY29uZmlnLnRpdGxlKTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2aWV3IGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGNsaWNrQ2F0KGNhdCkge1xuICAgICAgICBjYXQuY291bnRlciArPSAxO1xuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbml0KCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBjb21wb25lbnQgb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgc3RhdGljIGluaXQoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDYXRMaXN0Q291bnRlcihlbCwgb3B0aW9ucyk7XG4gICAgfVxuXG59XG4iXX0=

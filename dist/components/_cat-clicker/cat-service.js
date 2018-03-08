System.register(['../../js/helpers/helpers', '../../js/lib/http', '../../js/lib/data-service', 'lodash'], function (_export) {
    'use strict';

    var Helpers, Http, DataService, _, dataUrl, CatService;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_jsLibHttp) {
            Http = _jsLibHttp.Http;
        }, function (_jsLibDataService) {
            DataService = _jsLibDataService['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }],
        execute: function () {
            dataUrl = "../../assets/data/example/cat.json";

            CatService = (function (_DataService) {
                _inherits(CatService, _DataService);

                function CatService() {
                    _classCallCheck(this, CatService);

                    _get(Object.getPrototypeOf(CatService.prototype), 'constructor', this).call(this);

                    this._data = {
                        selectedCat: {},
                        state: { selectedCat: this.SELECTED_CAT_STATE_READ },
                        cats: []
                    };

                    this.fetchData();
                }

                _createClass(CatService, [{
                    key: 'fetchData',
                    value: function fetchData() {
                        var _this = this;

                        var uri = arguments.length <= 0 || arguments[0] === undefined ? dataUrl : arguments[0];

                        Http.get(uri).then(function (result) {
                            Object.assign(_this._data.cats, result);
                            _this.broadcastDataChanges("cats");
                        });
                    }
                }, {
                    key: '_handleObservingDataChanges',
                    value: function _handleObservingDataChanges(changes, keyPath) {

                        if (Object.is(keyPath, "cats")) {
                            this._syncSelectedCat(changes);
                        }
                        if (Object.is(keyPath, "selectedCat")) {
                            this._syncCatInCats(changes);
                        }
                        this.broadcastDataChanges(keyPath);

                        return true;
                    }
                }, {
                    key: '_syncSelectedCat',
                    value: function _syncSelectedCat(changes) {
                        var change = changes[changes.length - 1];
                        if (this._data.selectedCat && change.target.name === this._data.selectedCat.name) {
                            Object.assign(this._data.selectedCat, change.target);
                            this.broadcastDataChanges("selectedCat");
                        }
                    }
                }, {
                    key: '_syncCatInCats',
                    value: function _syncCatInCats(changes) {
                        var change = changes[changes.length - 1];
                        var cat = _.find(this._data.cats, function (cat) {
                            return cat.name === change.target.name;
                        });
                        if (Object.is(cat, undefined)) {
                            return;
                        }
                        Object.assign(cat, change.target);
                        this.broadcastDataChanges("cats");
                    }
                }]);

                return CatService;
            })(DataService);

            _export('default', new CatService());
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1Q0FLTSxPQUFPLEVBR1AsVUFBVTs7Ozs7Ozs7Ozs7O3dDQVJSLE9BQU87OzhCQUNQLElBQUk7Ozs7Ozs7QUFJTixtQkFBTyxHQUFHLG9DQUFvQzs7QUFHOUMsc0JBQVU7MEJBQVYsVUFBVTs7QUFHRCx5QkFIVCxVQUFVLEdBR0U7MENBSFosVUFBVTs7QUFJUiwrQ0FKRixVQUFVLDZDQUlBOztBQUVSLHdCQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1QsbUNBQVcsRUFBRSxFQUFFO0FBQ2YsNkJBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7QUFDcEQsNEJBQUksRUFBRSxFQUFFO3FCQUNYLENBQUM7O0FBR0Ysd0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFFcEI7OzZCQWZDLFVBQVU7OzJCQWlCSCxxQkFBYzs7OzRCQUFiLEdBQUcseURBQUMsT0FBTzs7QUFDakIsNEJBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFJO0FBQzFCLGtDQUFNLENBQUMsTUFBTSxDQUFDLE1BQUssS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QyxrQ0FBSyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDckMsQ0FBQyxDQUFDO3FCQUNOOzs7MkJBRTBCLHFDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRTFDLDRCQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFDO0FBQzFCLGdDQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ2xDO0FBQ0QsNEJBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLEVBQUM7QUFDakMsZ0NBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ2hDO0FBQ0QsNEJBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFbkMsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7MkJBRWUsMEJBQUMsT0FBTyxFQUFFO0FBQ3RCLDRCQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6Qyw0QkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUM7QUFDNUUsa0NBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELGdDQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7eUJBQzVDO3FCQUNKOzs7MkJBRWEsd0JBQUMsT0FBTyxFQUFFO0FBQ3BCLDRCQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6Qyw0QkFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFBLEdBQUc7bUNBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7eUJBQUEsQ0FBQyxDQUFDO0FBQzFFLDRCQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQzFCLG1DQUFPO3lCQUNWO0FBQ0QsOEJBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQyw0QkFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNyQzs7O3VCQXJEQyxVQUFVO2VBQVMsV0FBVzs7K0JBeURyQixJQUFJLFVBQVUsRUFBRSIsImZpbGUiOiJjb21wb25lbnRzL19jYXQtY2xpY2tlci9jYXQtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vLi4vanMvaGVscGVycy9oZWxwZXJzJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcIi4uLy4uL2pzL2xpYi9odHRwXCI7XG5pbXBvcnQgRGF0YVNlcnZpY2UgZnJvbSAnLi4vLi4vanMvbGliL2RhdGEtc2VydmljZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBkYXRhVXJsID0gXCIuLi8uLi9hc3NldHMvZGF0YS9leGFtcGxlL2NhdC5qc29uXCI7XG5cblxuY2xhc3MgQ2F0U2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlIHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ2F0OiB7fSxcbiAgICAgICAgICAgIHN0YXRlOiB7IHNlbGVjdGVkQ2F0OiB0aGlzLlNFTEVDVEVEX0NBVF9TVEFURV9SRUFEIH0sXG4gICAgICAgICAgICBjYXRzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLSBpbml0IC0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG5cbiAgICB9XG5cbiAgICBmZXRjaERhdGEodXJpPWRhdGFVcmwpIHtcbiAgICAgICAgSHR0cC5nZXQodXJpKS50aGVuKChyZXN1bHQpPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9kYXRhLmNhdHMsIHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdERhdGFDaGFuZ2VzKFwiY2F0c1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZU9ic2VydmluZ0RhdGFDaGFuZ2VzKGNoYW5nZXMsIGtleVBhdGgpIHtcblxuICAgICAgICBpZihPYmplY3QuaXMoa2V5UGF0aCwgXCJjYXRzXCIpKXtcbiAgICAgICAgICAgIHRoaXMuX3N5bmNTZWxlY3RlZENhdChjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBpZihPYmplY3QuaXMoa2V5UGF0aCwgXCJzZWxlY3RlZENhdFwiKSl7XG4gICAgICAgICAgICB0aGlzLl9zeW5jQ2F0SW5DYXRzKGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0RGF0YUNoYW5nZXMoa2V5UGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX3N5bmNTZWxlY3RlZENhdChjaGFuZ2VzKSB7XG4gICAgICAgIGxldCBjaGFuZ2UgPSBjaGFuZ2VzW2NoYW5nZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmKHRoaXMuX2RhdGEuc2VsZWN0ZWRDYXQgJiYgY2hhbmdlLnRhcmdldC5uYW1lID09PSB0aGlzLl9kYXRhLnNlbGVjdGVkQ2F0Lm5hbWUpe1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9kYXRhLnNlbGVjdGVkQ2F0LCBjaGFuZ2UudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0RGF0YUNoYW5nZXMoXCJzZWxlY3RlZENhdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zeW5jQ2F0SW5DYXRzKGNoYW5nZXMpIHtcbiAgICAgICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbY2hhbmdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGNhdCA9IF8uZmluZCh0aGlzLl9kYXRhLmNhdHMsIGNhdCA9PiBjYXQubmFtZSA9PT0gY2hhbmdlLnRhcmdldC5uYW1lKTtcbiAgICAgICAgaWYoT2JqZWN0LmlzKGNhdCwgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24oY2F0LCBjaGFuZ2UudGFyZ2V0KTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3REYXRhQ2hhbmdlcyhcImNhdHNcIik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXRTZXJ2aWNlKCk7IC8vUmV0dXJuIGEgc2luZ2xldG9uIGNsYXNzXG4iXX0=

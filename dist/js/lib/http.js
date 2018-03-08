System.register(['jquery', 'lodash', 'bluebird'], function (_export) {
    'use strict';

    var $, _, Promise, Http;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_bluebird) {
            Promise = _bluebird['default'];
        }],
        execute: function () {
            Http = (function () {
                function Http() {
                    _classCallCheck(this, Http);
                }

                _createClass(Http, null, [{
                    key: 'get',
                    value: function get(url) {
                        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        var _ref$type = _ref.type;
                        var type = _ref$type === undefined ? 'json' : _ref$type;
                        var data = _ref.data;
                        var cb = _ref.cb;

                        return new Promise(function (resolve, reject, onCancel) {
                            return $.ajax(url, {
                                method: 'get',
                                data: data,
                                dataType: type,
                                contentType: type
                            }).done(function (data) {
                                if (typeof cb === 'function') {
                                    cb(data);
                                }
                                return resolve(data);
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                return reject(console.error(errorThrown));
                            }).always(resolve);
                        });
                    }
                }, {
                    key: 'post',
                    value: function post(url, _ref2) {
                        var _ref2$type = _ref2.type;
                        var type = _ref2$type === undefined ? 'json' : _ref2$type;
                        var data = _ref2.data;
                        var cb = _ref2.cb;

                        return new Promise(function (resolve, reject, onCancel) {
                            type = type || 'json';

                            $.ajax(url, {
                                method: 'post',
                                data: data,
                                dataType: type,
                                contentType: type
                            }).then(function (data) {
                                resolve(data);
                                if (typeof cb === 'function') {
                                    cb(data);
                                }
                            }, function (jqXHR, textStatus, errorThrown) {
                                reject(new Error(errorThrown));
                            });
                        });
                    }
                }, {
                    key: 'list',
                    value: function list() {}
                }, {
                    key: 'put',
                    value: function put() {}
                }]);

                return Http;
            })();

            _export('Http', Http);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9odHRwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1QkFJTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUFBSixnQkFBSTt5QkFBSixJQUFJOzBDQUFKLElBQUk7Ozs2QkFBSixJQUFJOzsyQkFRSSxhQUFDLEdBQUcsRUFBa0M7eUZBQUosRUFBRTs7NkNBQTdCLElBQUk7NEJBQUosSUFBSSw2QkFBRyxNQUFNOzRCQUFFLElBQUksUUFBSixJQUFJOzRCQUFFLEVBQUUsUUFBRixFQUFFOztBQUNwQywrQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0FBRW5ELG1DQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ2Ysc0NBQU0sRUFBRSxLQUFLO0FBQ2Isb0NBQUksRUFBRSxJQUFJO0FBQ1Ysd0NBQVEsRUFBRSxJQUFJO0FBQ2QsMkNBQVcsRUFBRSxJQUFJOzZCQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ2Qsb0NBQUcsT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO0FBQ3pCLHNDQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQ1o7QUFDRCx1Q0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBSztBQUN4Qyx1Q0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzZCQUM3QyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUV0QixDQUFDLENBQUM7cUJBQ047OzsyQkFTVSxjQUFDLEdBQUcsRUFBRSxLQUF5QixFQUFFO3lDQUEzQixLQUF5QixDQUF4QixJQUFJOzRCQUFKLElBQUksOEJBQUcsTUFBTTs0QkFBRSxJQUFJLEdBQXBCLEtBQXlCLENBQVQsSUFBSTs0QkFBRSxFQUFFLEdBQXhCLEtBQXlCLENBQUgsRUFBRTs7QUFDckMsK0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBSztBQUM5QyxnQ0FBSSxHQUFHLElBQUksSUFBSSxNQUFNLENBQUM7O0FBRXRCLDZCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLHNDQUFNLEVBQUUsTUFBTTtBQUNkLG9DQUFJLEVBQUUsSUFBSTtBQUNWLHdDQUFRLEVBQUUsSUFBSTtBQUNkLDJDQUFXLEVBQUUsSUFBSTs2QkFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksRUFBSztBQUNkLHVDQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZCxvQ0FBRyxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQUU7QUFDekIsc0NBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQ0FDWjs2QkFDSixFQUFFLFVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUs7QUFDbkMsc0NBQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzZCQUNsQyxDQUFDLENBQUM7eUJBRU4sQ0FBQyxDQUFDO3FCQUNOOzs7MkJBRVUsZ0JBQUcsRUFBRTs7OzJCQUVOLGVBQUcsRUFBRTs7O3VCQTFEYixJQUFJOzs7NEJBOERELElBQUkiLCJmaWxlIjoianMvbGliL2h0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuY2xhc3MgSHR0cCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9ICAtIHJlcXVlc3QgdXJsXG4gICAgICogQHBhcmFtIGRhdGEge29iamVjdH0gLSBkYXRhIHRvIHNlbmQgdG8gc2VydmVyXG4gICAgICogQHBhcmFtIGNiIHtmdW5jdGlvbn0gLSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9IC0gZGVmYXVsdCAnanNvbicsICdqc29ucCcsICdodG1sJ1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQodXJsLCB7dHlwZSA9ICdqc29uJywgZGF0YSwgY2J9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCwgb25DYW5jZWwpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29udGVudCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgIHJldHVybiAkLmFqYXgodXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiB0eXBlXG4gICAgICAgICAgICB9KS5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoY29uc29sZS5lcnJvcihlcnJvclRocm93bikpO1xuICAgICAgICAgICAgfSkuYWx3YXlzKHJlc29sdmUpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIEFKQVggcmVxdWVzdCB0byBnZXQgSlNPTiBkYXRhIGZyb20gdGhlIHNwZWNpZmllZCBVUkwgJiBtZXRob2RcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9ICAtIHJlcXVlc3QgdXJsXG4gICAgICogQHBhcmFtIGRhdGEge29iamVjdH0gLSBkYXRhIHRvIHNlbmQgdG8gc2VydmVyXG4gICAgICogQHBhcmFtIGNiIHtmdW5jdGlvbn0gLSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9IC0gZGVmYXVsdCBqc29uXG4gICAgICovXG4gICAgc3RhdGljIHBvc3QodXJsLCB7dHlwZSA9ICdqc29uJywgZGF0YSwgY2J9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBvbkNhbmNlbCkgPT4ge1xuICAgICAgICAgICAgdHlwZSA9IHR5cGUgfHwgJ2pzb24nO1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250ZW50IGZyb20gdGhlIHNlcnZlclxuICAgICAgICAgICAgJC5hamF4KHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IHR5cGVcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjYihkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvclRocm93bikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxpc3QoKSB7fVxuXG4gICAgc3RhdGljIHB1dCgpIHt9XG4gICAgXG59XG5cbmV4cG9ydCB7IEh0dHAgfTtcbiJdfQ==

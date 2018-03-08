System.register([], function (_export) {
    "use strict";

    var URI;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            URI = (function () {
                function URI() {
                    _classCallCheck(this, URI);
                }

                _createClass(URI, null, [{
                    key: "getParams",
                    value: function getParams() {
                        var params = {};
                        window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
                            params[$1] = $3;
                        });
                        return params;
                    }
                }, {
                    key: "setUriParams",
                    value: function setUriParams(params) {
                        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + (params ? '?' + params : '');
                        window.history.pushState({ path: newurl }, '', newurl);
                    }
                }]);

                return URI;
            })();

            _export("URI", URI);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2hlbHBlcnMvdXJpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUdNLEdBQUc7Ozs7Ozs7OztBQUFILGVBQUc7eUJBQUgsR0FBRzswQ0FBSCxHQUFHOzs7NkJBQUgsR0FBRzs7MkJBY1cscUJBQUc7QUFDZiw0QkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLDhCQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLEVBQUUsVUFBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDN0Ysa0NBQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7eUJBQ25CLENBQUMsQ0FBQztBQUNILCtCQUFPLE1BQU0sQ0FBQztxQkFDakI7OzsyQkFXa0Isc0JBQUMsTUFBTSxFQUFFO0FBQ3hCLDRCQUFJLE1BQU0sR0FBTSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsVUFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBRyxNQUFNLEdBQUcsR0FBRyxHQUFFLE1BQU0sR0FBRyxFQUFFLENBQUEsQUFBRyxDQUFDO0FBQzVILDhCQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3JEOzs7dUJBbENDLEdBQUc7OzsyQkFzQ0QsR0FBRyIsImZpbGUiOiJqcy9oZWxwZXJzL3VyaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBVcmxzIENsYXNzXG4qL1xuY2xhc3MgVVJJIHtcblxuICAgIC8qKlxuICAgICAqIEdldCB1cmwgcGFyYW1zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvL25hdmlnYXRpb24tcGFnZS5odG1sP2NhdGVnb3J5PWFkbWluaXN0cmF0aW9uJnRvcGljPXBlcnNvbmFsLWFkbWluaXN0cmF0aW9uXG4gICAgICogLy9yZXR1cm4gcGFyYW1zIHdpbGwgYmU6XG4gICAgICoge1xuICAgICAqICAgICAgY2F0ZWdvcnk6IFwiYWRtaW5pc3RyYXRpb25cIixcbiAgICAgKiAgICAgIHRvcGljOiBcInBlcnNvbmFsLWFkbWluaXN0cmF0aW9uXCJcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IHBhcmFtcyAtIFVybCBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UGFyYW1zKCkge1xuICAgICAgICBsZXQgcGFyYW1zID0ge307XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShuZXcgUmVnRXhwKFwiKFtePz0mXSspKD0oW14mXSopKT9cIiwgXCJnXCIpLCBmdW5jdGlvbigkMCwgJDEsICQyLCAkMykge1xuICAgICAgICAgICAgcGFyYW1zWyQxXSA9ICQzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXJsIHBhcmFtcyB0byB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zIC0gdXJsIHBhcmFtZXRlcnMsIGUuZy4gXCJjYXRlZ29yeT1hZG1pbmlzdHJhdGlvbiZ0b3BpYz1ob25ub3Vyc1wiXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIEhlbHBlcnMuVVJJLnNldFVyaVBhcmFtcygkLnBhcmFtKCB7IGNhdGVnb3J5OiBcImFkbWluXCIsIHRvcGljOiBcImhvbm5vdXJzXCIgfSkgKSxcbiAgICAgKiAgICAgIC8vdXJpIHdpbGwgaGF2ZSBjYXRlZ29yeT1hZG1pbiZ0b3BpYz1ob25ub3Vyc1xuICAgICAqICAgICAgLy8kLnBhcmFtIHdpbGwgY29udmVydCBvYmplY3QgdG8gbWFwcGluZyBzdHJpbmdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRVcmlQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIHZhciBuZXd1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7cGFyYW1zID8gJz8nKyBwYXJhbXMgOiAnJyB9YDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOm5ld3VybH0sJycsbmV3dXJsKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtVUkl9OyJdfQ==

System.register(["../helpers/helpers", "lodash", "jquery"], function (_export) {
    "use strict";

    var Helpers, _, $, Animation;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_helpersHelpers) {
            Helpers = _helpersHelpers.Helpers;
        }, function (_lodash) {
            _ = _lodash["default"];
        }, function (_jquery) {
            $ = _jquery["default"];
        }],
        execute: function () {
            Animation = (function () {
                function Animation() {
                    _classCallCheck(this, Animation);
                }

                _createClass(Animation, null, [{
                    key: "scrollTop",
                    value: function scrollTop(position, runtime) {
                        position = position || 0;
                        runtime = runtime || 100;
                        $("html, body").animate({ scrollTop: position }, runtime);
                    }
                }]);

                return Animation;
            })();

            _export("Animation", Animation);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQU9NLFNBQVM7Ozs7Ozs7O3NDQVBOLE9BQU87Ozs7Ozs7QUFPVixxQkFBUzt5QkFBVCxTQUFTOzBDQUFULFNBQVM7Ozs2QkFBVCxTQUFTOzsyQkFFSyxtQkFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ2hDLGdDQUFRLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQztBQUN6QiwrQkFBTyxHQUFHLE9BQU8sSUFBSSxHQUFHLENBQUM7QUFDekIseUJBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzFEOzs7dUJBTkMsU0FBUzs7O2lDQVVQLFNBQVMiLCJmaWxlIjoianMvbGliL2FuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlbHBlcnMgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIEl0IGRlZmluZXMgYWxsIHRoZSBqYXZhc2NyaXB0IGJhc2VkIGFuaW1hdGlvbnMgYWNyb3NzIGFsbCBzaXRlc1xuICovXG5jbGFzcyBBbmltYXRpb24ge1xuXG4gICAgc3RhdGljIHNjcm9sbFRvcChwb3NpdGlvbiwgcnVudGltZSkge1xuICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IDA7XG4gICAgICAgIHJ1bnRpbWUgPSBydW50aW1lIHx8IDEwMDtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOnBvc2l0aW9ufSwgcnVudGltZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7QW5pbWF0aW9ufTtcbiJdfQ==

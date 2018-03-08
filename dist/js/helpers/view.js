System.register(['./element', 'superviews'], function (_export) {
    'use strict';

    var Element, superviews, argstr, mode, View;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_element) {
            Element = _element.Element;
        }, function (_superviews) {
            superviews = _superviews['default'];
        }],
        execute: function () {
            argstr = "m";
            mode = "browser";

            View = (function () {
                function View() {
                    _classCallCheck(this, View);
                }

                _createClass(View, null, [{
                    key: 'createTemplateFn',
                    value: function createTemplateFn(tpl, name) {
                        return superviews(tpl, name, argstr, mode);
                    }
                }, {
                    key: 'convertToTemplateFn',
                    value: function convertToTemplateFn($el) {
                        var result = $el.html();
                    }
                }]);

                return View;
            })();

            _export('View', View);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2hlbHBlcnMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkJBSU0sTUFBTSxFQUNOLElBQUksRUFNSixJQUFJOzs7Ozs7OzsrQkFYRixPQUFPOzs7OztBQUlULGtCQUFNLEdBQUcsR0FBRztBQUNaLGdCQUFJLEdBQUcsU0FBUzs7QUFNaEIsZ0JBQUk7eUJBQUosSUFBSTswQ0FBSixJQUFJOzs7NkJBQUosSUFBSTs7MkJBT2lCLDBCQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0IsK0JBQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUM5Qzs7OzJCQUV5Qiw2QkFBQyxHQUFHLEVBQUU7QUFDNUIsNEJBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDM0I7Ozt1QkFiQyxJQUFJOzs7NEJBaUJGLElBQUkiLCJmaWxlIjoianMvaGVscGVycy92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuL2VsZW1lbnQnO1xuaW1wb3J0IHN1cGVydmlld3MgZnJvbSAnc3VwZXJ2aWV3cyc7XG5cblxuY29uc3QgYXJnc3RyID0gXCJtXCI7XG5jb25zdCBtb2RlID0gXCJicm93c2VyXCI7XG5cbi8vVE9ETyBWaWV3IGhlbHBlcnMgdG8gY3JlYXRlIGR5bmFtaWMgdmlldyB0ZW1wbGF0ZSBmcm9tIHN0YXRpYyB2aWV3XG4vKipcbiAqIER5bmFtaWMgdmlldyBjbGFzc1xuICovXG5jbGFzcyBWaWV3IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWV3IHRlbXBsYXRlIGZuXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdHBsXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVRlbXBsYXRlRm4odHBsLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBzdXBlcnZpZXdzKHRwbCwgbmFtZSwgYXJnc3RyLCBtb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udmVydFRvVGVtcGxhdGVGbigkZWwpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICRlbC5odG1sKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7Vmlld307Il19

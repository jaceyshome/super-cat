System.register(['jquery', '../helpers/helpers', 'incremental-dom'], function (_export) {
    'use strict';

    var $, Helpers, idom, DynamicView;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_helpersHelpers) {
            Helpers = _helpersHelpers.Helpers;
        }, function (_incrementalDom) {
            idom = _incrementalDom['default'];
        }],
        execute: function () {
            DynamicView = (function () {
                function DynamicView() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? { templateFn: templateFn, $container: $container, vm: vm, id: id } : arguments[0];

                    _classCallCheck(this, DynamicView);

                    if (Object.is(options, undefined)) {
                        throw new Error('options params is not provided');
                    }
                    if (Object.is(options.templateFn, undefined)) {
                        throw new Error('to initialise a view template function is necessary ');
                    }
                    if (Object.is(options.$container, undefined)) {
                        throw new Error('to initialise a container to mount template on is necessary ');
                    }

                    this._id = options.id ? options.id + '-view' : Helpers.Strings.random(8) + '-view';
                    this._el = document.createElement('div');
                    Helpers.Element.addProperty(this._id, this._el);

                    this._$container = options.$container;
                    this._templateFn = options.templateFn;
                    this._vm = options.vm;

                    this.render();
                    $(this._$container).append(this._el);
                }

                _createClass(DynamicView, [{
                    key: 'render',
                    value: function render() {
                        idom.patch(this._el, this._templateFn, this._vm);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        $(this._el).empty();
                        $(this._$container).empty();
                        for (var prop in this) {
                            if (this.hasOwnProperty(prop)) {
                                delete this[prop];
                            }
                        }
                    }
                }]);

                return DynamicView;
            })();

            _export('DynamicView', DynamicView);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9keW5hbWljLXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQVFhLFdBQVc7Ozs7Ozs7Ozs7c0NBUGhCLE9BQU87Ozs7O0FBT0YsdUJBQVc7QUFLVCx5QkFMRixXQUFXLEdBS2tDO3dCQUExQyxPQUFPLHlEQUFDLEVBQUMsVUFBVSxFQUFWLFVBQVUsRUFBRSxVQUFVLEVBQVYsVUFBVSxFQUFFLEVBQUUsRUFBRixFQUFFLEVBQUUsRUFBRSxFQUFGLEVBQUUsRUFBQzs7MENBTDNDLFdBQVc7O0FBTWhCLHdCQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFHO0FBQ2pDLDhCQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7cUJBQ3JEO0FBQ0Qsd0JBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFHO0FBQzVDLDhCQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7cUJBQzNFO0FBQ0Qsd0JBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFHO0FBQzVDLDhCQUFNLElBQUksS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7cUJBQ25GOztBQUdELHdCQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQU0sT0FBTyxDQUFDLEVBQUUsYUFBYSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBTyxDQUFDO0FBQ25GLHdCQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsMkJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVoRCx3QkFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3RDLHdCQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDdEMsd0JBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7QUFHdEIsd0JBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLHFCQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hDOzs2QkE1QlEsV0FBVzs7MkJBZ0NkLGtCQUFHO0FBQ0wsNEJBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEQ7OzsyQkFFTSxtQkFBRztBQUNOLHlCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLHlCQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzVCLDZCQUFLLElBQU0sSUFBSSxJQUFJLElBQUksRUFBRTtBQUNyQixnQ0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDO0FBQ3pCLHVDQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDckI7eUJBQ0o7cUJBQ0o7Ozt1QkE1Q1EsV0FBVyIsImZpbGUiOiJqcy9saWIvZHluYW1pYy12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcbmltcG9ydCBpZG9tIGZyb20gJ2luY3JlbWVudGFsLWRvbSc7XG5cblxuLyoqXG4gKiBEeW5hbWljIHZpZXcgY29tcG9uZW50IGlzIHVzaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljVmlldyB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBpbmNyZW1lbnRhbCBkb20gdmlld1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM9e3RlbXBsYXRlRm4sICRjb250YWluZXIsIHZtLCBpZH0pIHtcbiAgICAgICAgaWYgKCBPYmplY3QuaXMob3B0aW9ucywgdW5kZWZpbmVkKSApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignb3B0aW9ucyBwYXJhbXMgaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBPYmplY3QuaXMob3B0aW9ucy50ZW1wbGF0ZUZuLCB1bmRlZmluZWQpICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0byBpbml0aWFsaXNlIGEgdmlldyB0ZW1wbGF0ZSBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBPYmplY3QuaXMob3B0aW9ucy4kY29udGFpbmVyLCB1bmRlZmluZWQpICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0byBpbml0aWFsaXNlIGEgY29udGFpbmVyIHRvIG1vdW50IHRlbXBsYXRlIG9uIGlzIG5lY2Vzc2FyeSAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLSBwcml2YXRlIG9iamVjdHMgLS0tLS0tLS0tLS1cbiAgICAgICAgdGhpcy5faWQgPSBvcHRpb25zLmlkID8gYCR7b3B0aW9ucy5pZH0tdmlld2AgOiBgJHtIZWxwZXJzLlN0cmluZ3MucmFuZG9tKDgpfS12aWV3YDtcbiAgICAgICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgSGVscGVycy5FbGVtZW50LmFkZFByb3BlcnR5KHRoaXMuX2lkLCB0aGlzLl9lbCk7XG5cbiAgICAgICAgdGhpcy5fJGNvbnRhaW5lciA9IG9wdGlvbnMuJGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVGbiA9IG9wdGlvbnMudGVtcGxhdGVGbjtcbiAgICAgICAgdGhpcy5fdm0gPSBvcHRpb25zLnZtO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0gaW5pdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAkKHRoaXMuXyRjb250YWluZXIpLmFwcGVuZCh0aGlzLl9lbCk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQdWJsaWMgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlkb20ucGF0Y2godGhpcy5fZWwsIHRoaXMuX3RlbXBsYXRlRm4sIHRoaXMuX3ZtKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICAkKHRoaXMuX2VsKS5lbXB0eSgpO1xuICAgICAgICAkKHRoaXMuXyRjb250YWluZXIpLmVtcHR5KCk7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZih0aGlzLmhhc093blByb3BlcnR5KHByb3ApKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19

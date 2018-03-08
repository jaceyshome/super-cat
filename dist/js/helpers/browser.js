System.register(['jquery'], function (_export) {
    'use strict';

    var $, Browser;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            Browser = (function () {
                function Browser() {
                    _classCallCheck(this, Browser);
                }

                _createClass(Browser, null, [{
                    key: 'getAgent',
                    value: function getAgent() {
                        var ua = navigator.userAgent,
                            tem,
                            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                        if (/trident/i.test(M[1])) {
                            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                            return 'IE ' + (tem[1] || '');
                        }
                        if (M[1] === 'Chrome') {
                            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                            if (tem !== null) {
                                return tem.slice(1).join(' ').replace('OPR', 'Opera');
                            }
                        }
                        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                        if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);
                        return M.join(' ');
                    }
                }, {
                    key: 'getScrollTopPosition',
                    value: function getScrollTopPosition() {
                        if (typeof pageYOffset !== 'undefined') {
                            return pageYOffset;
                        } else {
                            var B = document.body;
                            var D = document.documentElement;
                            D = D.clientHeight ? D : B;
                            return D.scrollTop;
                        }
                    }
                }, {
                    key: 'getScrollLeftPosition',
                    value: function getScrollLeftPosition() {
                        return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
                    }
                }, {
                    key: 'getUserAgent',
                    value: function getUserAgent() {
                        return navigator.userAgent;
                    }
                }, {
                    key: 'getWindowSize',
                    value: function getWindowSize() {

                        return {
                            width: $(window).width() || window.innerWidth || window.document.documentElement.clientWidth || (window.document.body || window.document.getElementsByTagName('body')[0]).clientWidth,

                            height: $(window).height() || window.innerHeight || window.document.documentElement.clientHeight || (window.document.body || window.document.getElementsByTagName('body')[0]).clientHeight
                        };
                    }
                }]);

                return Browser;
            })();

            _export('Browser', Browser);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUUsV0FBVzs7QUFFckYsa0NBQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQzFCLE1BQU0sQ0FBQyxXQUFXLElBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksSUFDNUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUUsWUFBWTt5QkFDekYsQ0FBQztxQkFFTDs7O3VCQXZFQyxPQUFPOzs7K0JBMEVMLE9BQU8iLCJmaWxlIjoianMvaGVscGVycy9icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG4vKipcbiAqIEJyb3dzZXIgaGVscGVyIGNsYXNzXG4gKi9cbmNsYXNzIEJyb3dzZXIge1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2aWV3aW5nIHBhZ2UgYnJvd3NlciBuYW1lIGFuZCB2ZXJzaW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSBicm93c2VyIGFnZW50IG5hbWUgYW5kIHZlcnNpb24gZS5nLiBNU0lFIDlcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QWdlbnQoKSB7XG4gICAgICAgIHZhciB1YT0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgdGVtLFxuICAgICAgICAgICAgTT0gdWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXTtcbiAgICAgICAgaWYoL3RyaWRlbnQvaS50ZXN0KE1bMV0pKXtcbiAgICAgICAgICAgIHRlbT0gIC9cXGJydlsgOl0rKFxcZCspL2cuZXhlYyh1YSkgfHwgW107XG4gICAgICAgICAgICByZXR1cm4gJ0lFICcrKHRlbVsxXSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoTVsxXSA9PT0gJ0Nocm9tZScpe1xuICAgICAgICAgICAgdGVtPSB1YS5tYXRjaCgvXFxiKE9QUnxFZGdlKVxcLyhcXGQrKS8pO1xuICAgICAgICAgICAgaWYodGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbS5zbGljZSgxKS5qb2luKCcgJykucmVwbGFjZSgnT1BSJywgJ09wZXJhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgTSA9IE1bMl0/IFtNWzFdLCBNWzJdXTogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J107XG4gICAgICAgIGlmKCh0ZW0gPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKSkhPT0gbnVsbCkgTS5zcGxpY2UoMSwgMSwgdGVtWzFdKTtcbiAgICAgICAgcmV0dXJuIE0uam9pbignICcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIHRvcCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gYnJvd3NlciBzY3JvbGwgcG9zaXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0U2Nyb2xsVG9wUG9zaXRpb24oKXtcbiAgICAgICAgaWYodHlwZW9mIHBhZ2VZT2Zmc2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy9tb3N0IGJyb3dzZXJzIGV4Y2VwdCBJRSBiZWZvcmUgIzlcbiAgICAgICAgICAgIHJldHVybiBwYWdlWU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBCID0gZG9jdW1lbnQuYm9keTsgLy9JRSAncXVpcmtzJ1xuICAgICAgICAgICAgbGV0IEQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8vSUUgd2l0aCBkb2N0eXBlXG4gICAgICAgICAgICBEID0gKEQuY2xpZW50SGVpZ2h0KT8gRDogQjtcbiAgICAgICAgICAgIHJldHVybiBELnNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIGxlZnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIGJyb3dzZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGdldFNjcm9sbExlZnRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCkgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdXNlci1hZ2VudCBoZWFkZXJcbiAgICAgKiBleGFtcGxlOiBVc2VyLWFnZW50IGhlYWRlciBzZW50OiBNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xMl80KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNTcuMC4yOTg3LjEzMyBTYWZhcmkvNTM3LjM2XG4gICAgICovXG4gICAgc3RhdGljIGdldFVzZXJBZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFdpbmRvd1NpemUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiAgJCh3aW5kb3cpLndpZHRoKCkgfHxcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8XG4gICAgICAgICAgICAod2luZG93LmRvY3VtZW50LmJvZHkgfHwgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmNsaWVudFdpZHRoLFxuXG4gICAgICAgICAgICBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSB8fFxuICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IHx8XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fFxuICAgICAgICAgICAgKHdpbmRvdy5kb2N1bWVudC5ib2R5IHx8IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdKS5jbGllbnRIZWlnaHRcbiAgICAgICAgfTtcblxuICAgIH1cbn1cblxuZXhwb3J0IHtCcm93c2VyfTsiXX0=

System.register(['moment'], function (_export) {
    'use strict';

    var moment, Dates;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_moment) {
            moment = _moment['default'];
        }],
        execute: function () {
            Dates = (function () {
                function Dates() {
                    _classCallCheck(this, Dates);
                }

                _createClass(Dates, null, [{
                    key: 'getDateUTCFormat',
                    value: function getDateUTCFormat(candidate) {
                        return moment.utc(candidate)._f;
                    }
                }, {
                    key: 'getCurrentYear',
                    value: function getCurrentYear() {
                        return new Date().getFullYear();
                    }
                }, {
                    key: 'getHour',
                    value: function getHour(candidate) {
                        if (_.includes(this.getDateUTCFormat(candidate), "HH")) {
                            return moment(candidate).format('ha');
                        } else {
                            return '';
                        }
                    }
                }, {
                    key: 'getHourMinute',
                    value: function getHourMinute(candidate) {
                        if (_.includes(this.getDateUTCFormat(candidate), "HH:mm")) {
                            return moment(candidate).format('h.mma').replace('.00', '');
                        } else {
                            return '';
                        }
                    }
                }, {
                    key: 'getDate',
                    value: function getDate(candidate) {
                        return moment(candidate).format('D') + ' ' + moment(candidate).format('MMMM') + ' ' + moment(candidate).format('YYYY');
                    }
                }, {
                    key: 'getHourAndDate',
                    value: function getHourAndDate(candidate) {
                        if (_.isEmpty(this.getHour(candidate))) {
                            return this.getDate(candidate);
                        }
                        return this.getHour(candidate) + ', ' + this.getDate(candidate);
                    }
                }, {
                    key: 'getHourMinuteAndDate',
                    value: function getHourMinuteAndDate(candidate) {
                        if (_.isEmpty(this.getHour(candidate))) {
                            return this.getDate(candidate);
                        }
                        return this.getHourMinute(candidate) + ', ' + this.getDate(candidate);
                    }
                }]);

                return Dates;
            })();

            _export('Dates', Dates);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2hlbHBlcnMvZGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQVFNLEtBQUs7Ozs7Ozs7Ozs7O0FBQUwsaUJBQUs7eUJBQUwsS0FBSzswQ0FBTCxLQUFLOzs7NkJBQUwsS0FBSzs7MkJBRWdCLDBCQUFDLFNBQVMsRUFBRTtBQUMvQiwrQkFBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDbkM7OzsyQkFNb0IsMEJBQUc7QUFDcEIsK0JBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDbkM7OzsyQkFRYSxpQkFBQyxTQUFTLEVBQUU7QUFDdEIsNEJBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUc7QUFDcEQsbUNBQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDekMsTUFBTTtBQUNILG1DQUFPLEVBQUUsQ0FBQzt5QkFDYjtxQkFDSjs7OzJCQVFtQix1QkFBQyxTQUFTLEVBQUU7QUFDNUIsNEJBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDdEQsbUNBQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3lCQUMvRCxNQUFNO0FBQ0gsbUNBQU8sRUFBRSxDQUFDO3lCQUNiO3FCQUNKOzs7MkJBT2EsaUJBQUMsU0FBUyxFQUFFO0FBQ3RCLCtCQUFVLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFJO3FCQUN0SDs7OzJCQU9vQix3QkFBQyxTQUFTLEVBQUU7QUFDN0IsNEJBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7QUFDcEMsbUNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt5QkFDbEM7QUFDRCwrQkFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUc7cUJBQ25FOzs7MkJBTzBCLDhCQUFDLFNBQVMsRUFBRTtBQUNuQyw0QkFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtBQUNwQyxtQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUNsQztBQUNELCtCQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBRztxQkFDekU7Ozt1QkF6RUMsS0FBSzs7OzZCQTRFSCxLQUFLIiwiZmlsZSI6ImpzL2hlbHBlcnMvZGF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbi8qKlxuICpcbiAqIFRoZSBtYWluIHB1cnBvc2UgZm9yIHRoaXMgRGF0ZXMgY2xhc3MgaXMgdG8gbWFrZSBzdXJlIHRoZSBjb3Jwb3JhdGUgd2Vic2l0ZSBoYXMgdGhlIHN0YW5kYXJkIGRhdGUgZm9ybWF0IGFjcm9zcyB0aGUgd2hvbGUgc2l0ZS5cbiAqXG4gKiBUT0RPIG1vY2hhIFRlc3RcbiAqL1xuY2xhc3MgRGF0ZXMge1xuXG4gICAgc3RhdGljIGdldERhdGVVVENGb3JtYXQoY2FuZGlkYXRlKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKGNhbmRpZGF0ZSkuX2Y7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgeWVhclxuICAgICAqIHJldHVybiB7bnVtYmVyfSAtIGN1cnJlbnQgeWVhciwgZS5nLiAyMDE3XG4gICAgICovXG4gICAgc3RhdGljIGdldEN1cnJlbnRZZWFyKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGluIGEgZGF5LCBlLmcuIDEwYW0sIDVwbVxuICAgICAqIEBwYXJhbSBjYW5kaWRhdGUge0RhdGV9IC0gZGF0ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGhvdXIgaW4gYSBkYXksIGUuZy4gMTBhbSwgNXBtXG4gICAgICovXG4gICAgc3RhdGljIGdldEhvdXIoY2FuZGlkYXRlKSB7XG4gICAgICAgIGlmKF8uaW5jbHVkZXModGhpcy5nZXREYXRlVVRDRm9ybWF0KGNhbmRpZGF0ZSksIFwiSEhcIikgKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGNhbmRpZGF0ZSkuZm9ybWF0KCdoYScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGluIGEgZGF5LCBlLmcuIDEwOjQ1YW0sIDU6MzJwbVxuICAgICAqIE5vdGU6IDk6MDBhbSB3aWxsIGJlIDlhbVxuICAgICAqIEBwYXJhbSBjYW5kaWRhdGUge0RhdGV9IC0gZGF0ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IG1pbnV0ZSBpbiBhIGRheSwgZS5nLiAxMGFtLCA1cG1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SG91ck1pbnV0ZShjYW5kaWRhdGUpIHtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyh0aGlzLmdldERhdGVVVENGb3JtYXQoY2FuZGlkYXRlKSwgXCJISDptbVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChjYW5kaWRhdGUpLmZvcm1hdCgnaC5tbWEnKS5yZXBsYWNlKCcuMDAnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29ycG9yYXRlIHdlYnNpdGUgc3RhbmRhcmQgZGF0ZSwgZS5nLiAxNCBOb3ZlbWJlciAyMDE2LCB0aW1lIGZvcm1hdCB3aWxsIGJlIFlZWVktTU0tRERUSEg6bW06c3NcbiAgICAgKiBAcGFyYW0gY2FuZGlkYXRlIHtEYXRlfSAtIGRhdGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGRhdGUgc3RyaW5nIGUuZy4gMTIgTm92ZW1iZXIgMjAxNlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXREYXRlKGNhbmRpZGF0ZSkge1xuICAgICAgICByZXR1cm4gYCR7bW9tZW50KGNhbmRpZGF0ZSkuZm9ybWF0KCdEJyl9ICR7bW9tZW50KGNhbmRpZGF0ZSkuZm9ybWF0KCdNTU1NJyl9ICR7bW9tZW50KGNhbmRpZGF0ZSkuZm9ybWF0KCdZWVlZJyl9YCA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGhvdXIgYW5kIGRhdGVcbiAgICAgKiBAcGFyYW0gY2FuZGlkYXRlIHtEYXRlfSAtIGRhdGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGRhdGUgc3RyaW5nIGUuZy4gMTBhbSwgMTQgTm92ZW1iZXIgMjAxNlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRIb3VyQW5kRGF0ZShjYW5kaWRhdGUpIHtcbiAgICAgICAgaWYoIF8uaXNFbXB0eSh0aGlzLmdldEhvdXIoY2FuZGlkYXRlKSkgKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGUoY2FuZGlkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRIb3VyKGNhbmRpZGF0ZSl9LCAke3RoaXMuZ2V0RGF0ZShjYW5kaWRhdGUpfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGhvdXIsIG1pbnV0ZXMgYW5kIGRhdGVcbiAgICAgKiBAcGFyYW0gY2FuZGlkYXRlIHtEYXRlfSAtIGRhdGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGRhdGUgc3RyaW5nIGUuZy4gMTA6NDVhbSwgMTQgTm92ZW1iZXIgMjAxNlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRIb3VyTWludXRlQW5kRGF0ZShjYW5kaWRhdGUpIHtcbiAgICAgICAgaWYoIF8uaXNFbXB0eSh0aGlzLmdldEhvdXIoY2FuZGlkYXRlKSkgKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGUoY2FuZGlkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRIb3VyTWludXRlKGNhbmRpZGF0ZSl9LCAke3RoaXMuZ2V0RGF0ZShjYW5kaWRhdGUpfWA7XG4gICAgfVxufVxuXG5leHBvcnQge0RhdGVzfTsiXX0=

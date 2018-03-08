System.register(['lodash'], function (_export) {
    'use strict';

    var _, Objects;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_lodash) {
            _ = _lodash['default'];
        }],
        execute: function () {
            Objects = (function () {
                function Objects() {
                    _classCallCheck(this, Objects);
                }

                _createClass(Objects, null, [{
                    key: 'filterObjectProperties',
                    value: function filterObjectProperties(candidate, target) {
                        var result = {};

                        if (_.isUndefined(candidate) || _.isUndefined(instance)) {
                            return undefined;
                        }

                        if (!_.isObject(candidate)) {
                            console.warn("invalid object to convert: ", candidate);
                            return undefined;
                        }
                        _.forOwn(candidate, function (value, key) {
                            if (instance.hasOwnProperty(key)) {
                                result[key] = value;
                            }
                        });

                        return result;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(candidate) {
                        for (var key in candidate) {
                            if (candidate.hasOwnProperty(key)) {
                                delete candidate[key];
                            }
                        }
                        return candidate;
                    }
                }, {
                    key: 'makeEnum',
                    value: function makeEnum(name, values) {
                        function nameOf(value) {
                            var keys = Object.keys(values);
                            for (var index = 0; index < keys.length; index += 1) {
                                var key = keys[index];
                                if (values[key] === value) {
                                    return name + '.' + key;
                                }
                            }
                        }
                        var handler = {
                            set: function set(obj, prop, value) {
                                throw new TypeError('Enum is read only');
                            },
                            get: function get(obj, prop) {
                                if (prop === 'nameOf') {
                                    return nameOf.bind(obj);
                                }
                                if (!(prop in obj)) {
                                    throw new ReferenceError('Unknown enum key "' + prop + '"');
                                }
                                return Reflect.get(obj, prop);
                            },
                            deleteProperty: function deleteProperty(obj, prop) {
                                throw new TypeError('Enum is read only');
                            }
                        };
                        return new Proxy(values, handler);
                    }
                }]);

                return Objects;
            })();

            _export('Objects', Objects);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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bGUiOiJqcy9oZWxwZXJzL29iamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jbGFzcyBPYmplY3RzIHtcblxuICAgIC8qKlxuICAgICAqIEZpbHRlciBwcm9wZXJ0aWVzIG9mIHRoZSBjYW5kaWRhdGUgb2JqZWN0LCByZW1haW4gdGhlIHByb3BlcnRpZXMgaWYgdGhlIHRhcmdldCBpbnN0YW5jZSBoYXMgdGhlIHByb3BlcnR5XG4gICAgICogQHBhcmFtIGNhbmRpZGF0ZSB7IU9iamVjdH0gLSBjYW5kaWRhdGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHRhcmdldCB7IU9iamVjdH0gLSBtYXBwaW5nIHRhcmdldCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR8T2JqZWN0fSAtIHJlc3VsdCBhIG5ldyBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgZmlsdGVyT2JqZWN0UHJvcGVydGllcyhjYW5kaWRhdGUsIHRhcmdldCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG5cbiAgICAgICAgaWYoXy5pc1VuZGVmaW5lZChjYW5kaWRhdGUpIHx8IF8uaXNVbmRlZmluZWQoaW5zdGFuY2UpKXtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZighXy5pc09iamVjdChjYW5kaWRhdGUpKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImludmFsaWQgb2JqZWN0IHRvIGNvbnZlcnQ6IFwiLCBjYW5kaWRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBfLmZvck93bihjYW5kaWRhdGUsICh2YWx1ZSwga2V5KT0+IHtcbiAgICAgICAgICAgIGlmKGluc3RhbmNlLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbmRpZGF0ZSAtIGNhbmRpZGF0ZSBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzdHJveShjYW5kaWRhdGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICBpZihjYW5kaWRhdGUuaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNhbmRpZGF0ZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGVudW0gb2JqZWN0XG4gICAgICogQHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL2dlcmdvYi9qc1Byb3h5L2Jsb2IvbWFzdGVyLzAzLWVudW0tbmFtZW9mLmpzXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdmFsdWVzXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIG1ha2VFbnVtKG5hbWUsIHZhbHVlcykge1xuICAgICAgICBmdW5jdGlvbiBuYW1lT2YodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModmFsdWVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfS4ke2tleX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0ge1xuICAgICAgICAgICAgc2V0IChvYmosIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRW51bSBpcyByZWFkIG9ubHknKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgKG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAnbmFtZU9mJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZU9mLmJpbmQob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEocHJvcCBpbiBvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgVW5rbm93biBlbnVtIGtleSBcIiR7cHJvcH1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQob2JqLCBwcm9wKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVQcm9wZXJ0eSAob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRW51bSBpcyByZWFkIG9ubHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZXMsIGhhbmRsZXIpO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHtPYmplY3RzfTtcbiJdfQ==

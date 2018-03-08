System.register(["../helpers/helpers", "lodash"], function (_export) {
    "use strict";

    var Helpers, _, _presets, _conditions, Validate;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_helpersHelpers) {
            Helpers = _helpersHelpers.Helpers;
        }, function (_lodash) {
            _ = _lodash["default"];
        }],
        execute: function () {
            var _arguments = arguments;
            _presets = {
                'currency': {

                    pattern: /^-?\$?(([1-9][0-9]{0,2}(, ?[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/,
                    message: "You must enter a valid dollar amount"
                },

                'usydEmail': {
                    presets: ['email'],
                    pattern: /^\S+@(.+\.)?(sydney|usyd)\.edu\.au$/,
                    message: "Your email must end with sydney.edu.au or usyd.edu.au"
                },

                'email': {
                    pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/,
                    message: "You must enter a valid email address"

                },

                'number': {
                    pattern: /^-?[0-9]\d*(\.\d+)?$/,
                    message: "You must enter a number"
                }
            };
            _conditions = {

                'function': {},

                'maxValue': {
                    validate: function validate(val, expected) {
                        if (expected === null) {
                            return null;
                        }
                        return Helpers.Numbers.isNumber(val) && Helpers.Numbers.stripNonNumericCharacters(val) <= expected ? null : "You must enter a number of no more than " + expected;
                    }
                },

                'minValue': {
                    validate: function validate(val, expected) {
                        if (expected === null) {
                            return null;
                        }
                        return Helpers.Numbers.isNumber(val) && Helpers.Numbers.stripNonNumericCharacters(val) >= expected ? null : "You must enter a number of at least " + expected;
                    }
                },

                'maxLength': {
                    validate: function validate(val, expected) {
                        if (expected === null) {
                            return null;
                        }
                        return val.toString().length <= expected ? null : "You can only enter up to " + expected + " characters";
                    }
                },

                'minLength': {
                    validate: function validate(val, expected) {
                        if (expected === null) {
                            return null;
                        }
                        return val.toString().length >= expected ? null : "You must enter at least " + expected + " characters";
                    }
                },

                'pattern': {
                    validate: function validate(val, regExp) {
                        if (regExp === null) {
                            return null;
                        }
                        return RegExp(regExp).test(val) ? null : "Your input must match the pattern " + regExp;
                    }
                },

                'required': {
                    validate: function validate(val, required) {
                        if (required) {
                            return (/^(?!\s*$).+/.test(Helpers.Booleans.isTruthyValue(val) ? val : '') ? null : "You must complete this field"
                            );
                        }
                        return null;
                    }
                },

                'requires': {

                    validate: function validate(val, required) {
                        if (!Helpers.Booleans.isTruthyValue(val)) {
                            return null;
                        }

                        if (required === null || required === undefined || required && (typeof required != 'object' || !required.hasOwnProperty('value') || !required.hasOwnProperty('elementName'))) {
                            console.error("You need to provide an object with the properties {value, elementName} for 'requires' validation", _arguments);
                        }
                        return Helpers.Booleans.isTruthyValue(val) && Helpers.Booleans.isTruthyValue(required) && typeof required == 'object' && Helpers.Booleans.isTruthyValue(required.value) ? null : Helpers.Booleans.isTruthyValue(required) && typeof required == 'object' ? "You must complete " + required.elementName + " first" : "You must provide correct settings for required element first";
                    }
                },

                'match': {
                    validate: function validate(val, expected) {
                        return val == expected ? null : "Doesn't match";
                    }
                },

                'presets': {
                    validate: function validate(val, presets) {
                        if (presets === null) {
                            return null;
                        }
                        if (typeof presets == 'string') {
                            presets = eval("(" + presets + ")");
                        }
                        for (var i = 0; i < presets.length; i++) {
                            var result = Validate.exec({
                                value: val,
                                options: Validate.getPreset(presets[i])
                            });
                            if (result) {
                                return result;
                            }
                        }
                        return null;
                    }
                }
            };

            Validate = (function () {
                function Validate() {
                    _classCallCheck(this, Validate);
                }

                _createClass(Validate, null, [{
                    key: "exec",
                    value: function exec(candidate) {
                        if (!candidate.options) {
                            return null;
                        }

                        if (!Helpers.Booleans.isTruthyValue(candidate.value) && !candidate.options.required) {
                            return null;
                        }
                        for (var conditionName in candidate.options) {
                            var condition = this.getCondition(conditionName),
                                message = null;
                            if (condition) {
                                message = condition.validate(candidate.value, candidate.options[conditionName]);
                                if (!_.isEmpty(message)) {
                                    return candidate.options.message || candidate.options[conditionName + "Message"] || message || "You must enter a valid value";
                                }
                            }
                        }
                        return null;
                    }
                }, {
                    key: "getCondition",
                    value: function getCondition(key) {
                        return _conditions[key];
                    }
                }, {
                    key: "getPreset",
                    value: function getPreset(key) {
                        return _presets[key];
                    }
                }, {
                    key: "addPreset",
                    value: function addPreset(name, preset) {
                        if (_presets[name]) {
                            console.warn("Preset " + name + " has already been defined, ignoring");
                        } else {
                            _presets[name] = preset;
                        }
                        return null;
                    }
                }]);

                return Validate;
            })();

            _export("Validate", Validate);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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SSxDQUFDO3lCQUNmO0FBQ0QsNkJBQUssSUFBSSxhQUFhLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUN6QyxnQ0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7Z0NBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNqRSxnQ0FBSSxTQUFTLEVBQUU7QUFDWCx1Q0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDaEYsb0NBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ3JCLDJDQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUM1QixTQUFTLENBQUMsT0FBTyxDQUFLLGFBQWEsYUFBVyxJQUM5QyxPQUFPLElBQ1AsOEJBQThCLENBQUM7aUNBQ3RDOzZCQUNKO3lCQUNKO0FBQ0QsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7MkJBT2tCLHNCQUFDLEdBQUcsRUFBRTtBQUNyQiwrQkFBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzNCOzs7MkJBT2UsbUJBQUMsR0FBRyxFQUFFO0FBQ2xCLCtCQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEI7OzsyQkFRZSxtQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO0FBQzNCLDRCQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNoQixtQ0FBTyxDQUFDLElBQUksYUFBVyxJQUFJLHlDQUFzQyxDQUFDO3lCQUNyRSxNQUFNO0FBQ0gsb0NBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7eUJBQzNCO0FBQ0QsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7dUJBdkVDLFFBQVE7OztnQ0EwRU4sUUFBUSIsImZpbGUiOiJqcy9saWIvdmFsaWRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIFRoZSB2YWxpZGF0aW9uIGxpYnJhcnlcbiAqL1xuXG4vKipcbiAqICMjIFZhbGlkYXRpb24gcHJlc2V0XG4gKiBBIHByZXNldCBpcyBidWlsdCBieSBhIGdyb3VwIG9mIHZhbGlkYXRpb24gY29uZGl0aW9ucy4gVGhlIGlkZWEgaXMgdG8gcHJvdmlkZSBhIHByZS1jb25maWdcbiAqIHZhbGlkYXRpb24gb3B0aW9uIGZvciB0aGUgc2FtZSAndHlwZScgb2YgaW5wdXQgZmllbGQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vVXNlciBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWUgaW5wdXQgZmllbGRzIHdpbGwgbG9vayBsaWtlIHRoaXM6XG4gKiA8aW5wdXQgZGF0YS1tYXgtbGVuZ3RoPVwiMjU1XCIgcmVxdWlyZWQ9XCJ0cnVlXCIgZGF0YS1taW4tbGVuZ3RoPVwiMlwiIG5hbWU9XCJmaXJzdE5hbWVcIj5cbiAqIDxpbnB1dCBkYXRhLW1heC1sZW5ndGg9XCIyNTVcIiByZXF1aXJlZD1cInRydWVcIiBkYXRhLW1pbi1sZW5ndGg9XCIyXCIgbmFtZT1cImxhc3ROYW1lXCI+XG4gKlxuICpcbiAqIC8vSW5zdGVhZCBvZiByZXBlYXRpbmcgdGhlIGRhdGEtbWF4LWxlbmd0aCwgdGhlIGRhdGEtbWluLWxlbmd0aCBhbmQgdGhlIHJlcXVpcmVkIGZvciB0aGUgc2FtZSB0eXBlIG9mIGRhdGEgZmllbGQsXG4gKiAvL3dlIGNhbiB3cml0ZSBhIHByZXNldCA6XG4gKlxuICogJ3VzZXJOYW1lJyA9IHtcbiAqICAgICAgbWF4TGVuZ3RoPVwiMjU1XCIsXG4gKiAgICAgIG1pbkxlbmd0aD1cIjJcIixcbiAqICAgICAgcmVxdWlyZWQ9dHJ1ZSxcbiAqIH1cbiAqXG4gKlxuICogLy9XaXRoIHVzaW5nIHByZXNldFxuICogPGlucHV0IGRhdGEtcHJlc2V0cz1cIlt1c2VyTmFtZV1cIiBuYW1lPVwiZmlyc3ROYW1lXCI+XG4gKiA8aW5wdXQgZGF0YS1wcmVzZXRzPVwiW3VzZXJOYW1lXVwiIG5hbWU9XCJsYXN0TmFtZVwiPlxuICpcbiAqIC8vQW4gaW5wdXQgZmllbGQgY2FuIGhhdmUgbW9yZSB0aGFuIG9uZSBwcmVzZXRcbiAqIDxpbnB1dCBkYXRhLXByZXNldHM9XCJbZW1haWwsIHVzeWRFbWFpbCwgd2RkRW1haWxdXCIgbmFtZT1cImVtYWlsXCI+XG4gKlxuICogLy9QcmVzZXQgc3VwcG9ydHMgbmVzdGVkIHByZXNldHNcbiAqIHVzeWRFbWFpbCA9IHtcbiAqICAgICAgcHJlc2V0czogWydlbWFpbCddLFxuICogICAgICBtZXNzYWdlOiAnaW52YWxpZCB1c3lkIGVtYWlsJ1xuICogfVxuICpcbiAqL1xubGV0IF9wcmVzZXRzID0ge1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVuY3kgcHJlc2V0XG4gICAgICogUnVsZXM6IG5lZ2F0aXZlIG9yIHBvc2l0aXZlLCBvcHRpb25hbCAyIGRlY2ltYWwgLCBvcHRpb25hbCAkIHNpZ25cbiAgICAgKiBWYWxpZDpcbiAgICAgKiAtJDEsMDAwLDAwMC4wMFxuICAgICAqIDEwMDAwXG4gICAgICogMTAwMDAuNVxuICAgICAqIDk5OS45OSBnXG4gICAgICovXG4gICAgJ2N1cnJlbmN5Jzoge1xuXG4gICAgICAgIHBhdHRlcm46IC9eLT9cXCQ/KChbMS05XVswLTldezAsMn0oLCA/WzAtOV17M30pKil8WzAtOV0rKT8oXFwuWzAtOV17MSwyfSk/JC8sXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91IG11c3QgZW50ZXIgYSB2YWxpZCBkb2xsYXIgYW1vdW50XCJcbiAgICB9LFxuXG4gICAgJ3VzeWRFbWFpbCc6IHtcbiAgICAgICAgcHJlc2V0czogWydlbWFpbCddLFxuICAgICAgICBwYXR0ZXJuOiAvXlxcUytAKC4rXFwuKT8oc3lkbmV5fHVzeWQpXFwuZWR1XFwuYXUkLyxcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIGVtYWlsIG11c3QgZW5kIHdpdGggc3lkbmV5LmVkdS5hdSBvciB1c3lkLmVkdS5hdVwiXG4gICAgfSxcblxuICAgICdlbWFpbCc6IHtcbiAgICAgICAgcGF0dGVybjogL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16XFwtMC05XStcXC4pK1thLXpdezIsfSkpJC8sXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJcblxuICAgIH0sXG5cbiAgICAnbnVtYmVyJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXi0/WzAtOV1cXGQqKFxcLlxcZCspPyQvLFxuICAgICAgICBtZXNzYWdlOiBcIllvdSBtdXN0IGVudGVyIGEgbnVtYmVyXCJcbiAgICB9XG59O1xuXG4vKipcbiAqICMjIFZhbGlkYXRpb24gY29uZGl0aW9uXG4gKiBBIGNvbmRpdGlvbiBpcyBhIHZhbGlkYXRpb24gYmFzZSBlbGVtZW50LCBpdCByZXF1aXJlcyBleHBlY3RlZCB2YWx1ZSxcbiAqIGZvciBleGFtcGxlOiBkYXRhLW1heExlbmd0aD1cIntleHBlY3RlZFZhbHVlfVwiXG4gKiBUeXBpY2FsbHkgaXQgd2lsbCBoYXZlIHR3byBwcm9wZXJ0aWVzOlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gdmFsaWRhdGUgLSBUaGUgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2UgLSBUaGUgZGVmYXVsdCBtZXNzYWdlXG4gKlxuICpcbiAqL1xubGV0IF9jb25kaXRpb25zID0ge1xuXG4gICAgJ2Z1bmN0aW9uJzoge30sIC8vVE9ETyBmdW5jdGlvbiBjb25kaXRpb25cblxuICAgICdtYXhWYWx1ZSc6IHtcbiAgICAgICAgdmFsaWRhdGU6ICh2YWwsIGV4cGVjdGVkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoSGVscGVycy5OdW1iZXJzLmlzTnVtYmVyKHZhbCkgJiYgKEhlbHBlcnMuTnVtYmVycy5zdHJpcE5vbk51bWVyaWNDaGFyYWN0ZXJzKHZhbCkgPD0gZXhwZWN0ZWQpKSA/XG4gICAgICAgICAgICAgICAgbnVsbCA6IGBZb3UgbXVzdCBlbnRlciBhIG51bWJlciBvZiBubyBtb3JlIHRoYW4gJHtleHBlY3RlZH1gO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgJ21pblZhbHVlJzoge1xuICAgICAgICB2YWxpZGF0ZTogKHZhbCwgZXhwZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChIZWxwZXJzLk51bWJlcnMuaXNOdW1iZXIodmFsKSAmJiAoSGVscGVycy5OdW1iZXJzLnN0cmlwTm9uTnVtZXJpY0NoYXJhY3RlcnModmFsKSA+PSBleHBlY3RlZCkpID9cbiAgICAgICAgICAgICAgICBudWxsIDogYFlvdSBtdXN0IGVudGVyIGEgbnVtYmVyIG9mIGF0IGxlYXN0ICR7ZXhwZWN0ZWR9YDtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgICdtYXhMZW5ndGgnOiB7XG4gICAgICAgIHZhbGlkYXRlOiAodmFsLCBleHBlY3RlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV4cGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHZhbC50b1N0cmluZygpLmxlbmd0aCA8PSBleHBlY3RlZCkgP1xuICAgICAgICAgICAgICAgIG51bGwgOiBgWW91IGNhbiBvbmx5IGVudGVyIHVwIHRvICR7ZXhwZWN0ZWR9IGNoYXJhY3RlcnNgO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgJ21pbkxlbmd0aCc6IHtcbiAgICAgICAgdmFsaWRhdGU6ICh2YWwsIGV4cGVjdGVkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodmFsLnRvU3RyaW5nKCkubGVuZ3RoID49IGV4cGVjdGVkKSA/XG4gICAgICAgICAgICAgICAgbnVsbCA6IGBZb3UgbXVzdCBlbnRlciBhdCBsZWFzdCAke2V4cGVjdGVkfSBjaGFyYWN0ZXJzYDtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgICdwYXR0ZXJuJzoge1xuICAgICAgICAvL0V4YW1wbGU6IGRhdGEtcGF0dGVybj1cIl5bYS16XXs0fVxcXFxkezR9JFwiXG4gICAgICAgIHZhbGlkYXRlOiAodmFsLCByZWdFeHApID0+IHtcbiAgICAgICAgICAgIGlmIChyZWdFeHAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVnRXhwKHJlZ0V4cCkudGVzdCh2YWwpKSA/XG4gICAgICAgICAgICAgICAgbnVsbCA6IGBZb3VyIGlucHV0IG11c3QgbWF0Y2ggdGhlIHBhdHRlcm4gJHtyZWdFeHB9YDtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgICdyZXF1aXJlZCc6IHtcbiAgICAgICAgdmFsaWRhdGU6ICh2YWwsIHJlcXVpcmVkKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC9eKD8hXFxzKiQpLisvKS50ZXN0KEhlbHBlcnMuQm9vbGVhbnMuaXNUcnV0aHlWYWx1ZSh2YWwpID8gdmFsIDogJycpID9cbiAgICAgICAgICAgICAgICAgICAgbnVsbCA6IFwiWW91IG11c3QgY29tcGxldGUgdGhpcyBmaWVsZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogJ3JlcXVpcmVzJyBjb25kaXRpb24gdmFsaWRhdGVzIHRoZSBlbGVtZW50IHdoZXRoZXIgaXRzIHJlcXVpcmVzIGlzIHZhbGlkXG4gICAgICogIGZvciBleGFtcGxlLCBsb2dpbiBwYXNzd29yZCBkZXBlbmRzIG9uIGZpbmlzaGluZyB0aGUgbG9naW4gdXNlcm5hbWUsIHRoZVxuICAgICAqICBwYXNzd29yZCB2YWx1ZSBpcyBhIHRydXRoeSB2YWx1ZSxcbiAgICAgKiAgaWYgdGhlIHJlcXVpcmVkIHZhbHVlIHdoaWNoIHRoZSB1c2VybmFtZSBpcyBudWxsLCBpdCBpcyBpbnZhbGlkLFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgLSBUaGUgdmFsdWUgdG8gdmFsaWRhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWlyZWQgLSBUaGUgY2FuZGlkYXRlIG9iamVjdCB3aGljaCBjb250YWlucyB0aGUgdmFsdWUgdGhlIGVsZW1lbnQgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB7XG4gICAgICogICAgdmFsdWU6IDEyM1xuICAgICAqICAgIGVsZW1lbnROYW1lOiBcInVzZXIgbmFtZVwiXG4gICAgICogfVxuICAgICAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gLSBudWxsIGlmIHZhbGlkIGVsc2UgZGVmYXVsdCBtZXNzYWdlXG4gICAgICovXG4gICAgJ3JlcXVpcmVzJzoge1xuXG4gICAgICAgIHZhbGlkYXRlOiAodmFsLCByZXF1aXJlZCkgPT4ge1xuXG4gICAgICAgICAgICAvL1NraXAgaWYgdGhlIHZhbHVlIGlzIG5vdCBhIHRydXRoeSB2YWx1ZSBhcyBpZiBmb3IgYW4gZW1wdHkgZmllbGQsIHRoZSB2YWx1ZSBpcyBlbXB0eS5cbiAgICAgICAgICAgIGlmICghSGVscGVycy5Cb29sZWFucy5pc1RydXRoeVZhbHVlKHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9JZiB0aGUgcmVxdWlyZWQgaXMgbm90IGFuIG9iamVjdCwgcmV0dXJuIGEgbWVzc2FnZSB0byB0ZWxsIHRoZSBkZXZlbG9wZXIgdGhlIGNvbmZpZ3VyYXRpb24gaXMgd3JvbmcuXG4gICAgICAgICAgICBpZiggcmVxdWlyZWQgPT09IG51bGwgfHwgcmVxdWlyZWQgPT09IHVuZGVmaW5lZCB8fCAoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVxdWlyZWQgIT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgIXJlcXVpcmVkLmhhc093blByb3BlcnR5KCd2YWx1ZScpIHx8XG4gICAgICAgICAgICAgICAgICAgICFyZXF1aXJlZC5oYXNPd25Qcm9wZXJ0eSgnZWxlbWVudE5hbWUnKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBuZWVkIHRvIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMge3ZhbHVlLCBlbGVtZW50TmFtZX0gZm9yICdyZXF1aXJlcycgdmFsaWRhdGlvblwiLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICggSGVscGVycy5Cb29sZWFucy5pc1RydXRoeVZhbHVlKHZhbCkgJiZcbiAgICAgICAgICAgICAgICAgICAgSGVscGVycy5Cb29sZWFucy5pc1RydXRoeVZhbHVlKHJlcXVpcmVkKSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVxdWlyZWQgPT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICAgICAgSGVscGVycy5Cb29sZWFucy5pc1RydXRoeVZhbHVlKHJlcXVpcmVkLnZhbHVlKVxuICAgICAgICAgICAgICAgICkgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgSGVscGVycy5Cb29sZWFucy5pc1RydXRoeVZhbHVlKHJlcXVpcmVkKSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVxdWlyZWQgPT0gJ29iamVjdCcgP1xuICAgICAgICAgICAgICAgICAgICBgWW91IG11c3QgY29tcGxldGUgJHtyZXF1aXJlZC5lbGVtZW50TmFtZX0gZmlyc3RgIDpcbiAgICAgICAgICAgICAgICAgICAgYFlvdSBtdXN0IHByb3ZpZGUgY29ycmVjdCBzZXR0aW5ncyBmb3IgcmVxdWlyZWQgZWxlbWVudCBmaXJzdGBcbiAgICAgICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgJ21hdGNoJzoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWRhdGUgdGhlIGVxdWF0aW9uIG9mIHRoZSB2YWx1ZSB3aXRoIHRoZSBleHBlY3RlZCB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHZhbCAtIFRoZSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGV4cGVjdGVkIC0gVGhlIGV4cGVjdGVkIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICB2YWxpZGF0ZTogKHZhbCwgZXhwZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAodmFsID09IGV4cGVjdGVkKSA/XG4gICAgICAgICAgICAgICAgbnVsbCA6IFwiRG9lc24ndCBtYXRjaFwiO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgJ3ByZXNldHMnOiB7XG4gICAgICAgIHZhbGlkYXRlOiAodmFsLCBwcmVzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlc2V0cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcmVzZXRzID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy9qc2hpbnQtaWdub3JlXG4gICAgICAgICAgICAgICAgcHJlc2V0cyA9IGV2YWwoYCgke3ByZXNldHN9KWApO1xuICAgICAgICAgICAgICAgIC8vanNoaW50LWlnbm9yZS1lbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogVmFsaWRhdGUuZ2V0UHJlc2V0KHByZXNldHNbaV0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vKipcbiAqIFZhbGlkYXRlOiBzdGF0aWMgY2xhc3MsIHByb3ZpZGUgdmFsaWRhdGlvbiBmdW5jdGlvbnNcbiAqL1xuY2xhc3MgVmFsaWRhdGUge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FuZGlkYXRlIC0gVGhlIGNhbmRpZGF0ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd8bnVtYmVyfSBjYW5kaWRhdGUudmFsdWUgLSBUaGUgdmFsaWRhdGlvbiB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNhbmRpZGF0ZS5vcHRpb25zICAtIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMsIGEgbGlzdCBvZiB2YWxpZGF0aW9uIGNvbmRpdGlvbnMgYW5kIHByZXNldHNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIC8vb3B0aW9uc1xuICAgICAqIFtcbiAgICAgKiAgICAgJ21heFZhbHVlJyxcbiAgICAgKiAgICAgJ21pblZhbHVlJyxcbiAgICAgKiAgICAgJ3JlcXVpcmVkJ1xuICAgICAqIF1cbiAgICAgKiBAcmV0dXJucyB7bnVsbHxzdHJpbmd9IC0gbnVsbCBpZiB2YWxpZCwgZWxzZSBtZXNzYWdlIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBleGVjKGNhbmRpZGF0ZSkge1xuICAgICAgICAvL25vIG9wdGlvbnMsIGl0IGlzIG5vdCByZXF1aXJlZFxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvL3ZhbHVlIGlzIG51bGwgYW5kIGl0IGlzIG5vdCByZXF1aXJlZFxuICAgICAgICBpZiAoIUhlbHBlcnMuQm9vbGVhbnMuaXNUcnV0aHlWYWx1ZShjYW5kaWRhdGUudmFsdWUpICYmICFjYW5kaWRhdGUub3B0aW9ucy5yZXF1aXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgY29uZGl0aW9uTmFtZSBpbiBjYW5kaWRhdGUub3B0aW9ucykge1xuICAgICAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHRoaXMuZ2V0Q29uZGl0aW9uKGNvbmRpdGlvbk5hbWUpLCBtZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gY29uZGl0aW9uLnZhbGlkYXRlKGNhbmRpZGF0ZS52YWx1ZSwgY2FuZGlkYXRlLm9wdGlvbnNbY29uZGl0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGUub3B0aW9ucy5tZXNzYWdlIHx8ICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIG1lc3NhZ2Ugb3ZlcnJpZGVzIGFsbCB0aGUgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLm9wdGlvbnNbKGAke2NvbmRpdGlvbk5hbWV9TWVzc2FnZWApXSB8fCAgIC8vIGNvbmRpdGlvbiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlIHx8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIGRlZmF1bHQgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgbXVzdCBlbnRlciBhIHZhbGlkIHZhbHVlXCI7ICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2YWxpZGF0aW9uIGNvbmRpdGlvbiBieSBrZXkgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgY29uZGl0aW9uIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSB2YWxpZGF0aW9uIGNvbmRpdGlvbiBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29uZGl0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gX2NvbmRpdGlvbnNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmFsaWRhdGlvbiBwcmVzZXQgYnkga2V5IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIHByZXNldCBuYW1lXG4gICAgICogQHJldHVybnMge09iamVjdH0gLSBUaGUgdmFsaWRhdGlvbiBwcmVzZXQgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGdldFByZXNldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9wcmVzZXRzW2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgdmFsaWRhdGlvbiBwcmVzZXRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBwcmVzZXQgbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcmVzZXQgLSBUaGUgcHJlc2V0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRQcmVzZXQobmFtZSwgcHJlc2V0KSB7XG4gICAgICAgIGlmIChfcHJlc2V0c1tuYW1lXSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBQcmVzZXQgJHtuYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQsIGlnbm9yaW5nYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcHJlc2V0c1tuYW1lXSA9IHByZXNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCB7VmFsaWRhdGV9O1xuIl19

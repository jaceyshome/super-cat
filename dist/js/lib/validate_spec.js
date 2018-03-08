System.register(['./validate'], function (_export) {
    'use strict';

    var Validate;
    return {
        setters: [function (_validate) {
            Validate = _validate.Validate;
        }],
        execute: function () {
            describe('/src/js/lib/validate', function () {

                beforeEach(function () {
                    spyOn(console, 'log');
                    spyOn(console, 'warn');
                });

                afterEach(function () {});

                describe("Options", function () {

                    var exec = function exec(val) {
                        return Validate.exec({
                            value: val,
                            options: {
                                required: true,
                                pattern: "^[a-z]{4}\\d{4}$",
                                maxLength: 4,
                                minLength: 2
                            }
                        });
                    };

                    it("It should validate options in the user defined order.", function () {
                        expect(exec("")).toEqual("You must complete this field");
                        expect(exec("abcd")).toEqual("Your input must match the pattern ^[a-z]{4}\\d{4}$");
                        expect(exec("abcd1234")).toEqual("You can only enter up to 4 characters");
                    });
                });

                describe("Message", function () {
                    var message = "testing message";
                    it("It should return the user defined message for a condition.", function () {
                        expect(Validate.exec({
                            value: 2,
                            options: {
                                minValue: 8,
                                minValueMessage: message
                            }
                        })).toEqual(message);
                    });

                    it("The option.message should override all the default messages.", function () {
                        expect(Validate.exec({
                            value: 2,
                            options: {
                                minValue: 8,
                                minValueMessage: message,
                                message: "kill the robot"
                            }
                        })).toEqual("kill the robot");
                    });
                });

                describe('Conditions', function () {

                    xdescribe('function', function () {
                        it("(TODO) It should allow to create a function for complex validation.", function () {});
                    });

                    describe('maxValue', function () {
                        var exec = function exec(val, expected) {
                            return Validate.exec({
                                value: val,
                                options: { maxValue: expected }
                            });
                        };
                        var expected = 1;
                        var defaultMessage = 'You must enter a number of no more than ' + expected;
                        it('It should only accept number.', function () {
                            expect(exec("12/12/2014", 1)).toEqual(defaultMessage);
                        });

                        it('When the value is less than the maximum, it should return null.', function () {
                            expect(exec(0, 1)).toBeNull();
                            expect(exec(-20.10, -10.19)).toBeNull();
                            expect(exec("-20.10", -10.19)).toBeNull();
                        });

                        it('When the value equals the maximum, it should return null.', function () {
                            expect(exec(1, 1)).toBeNull();
                        });

                        it('When the value is more than the maximum, it should return the default message.', function () {
                            expect(exec(2, 1)).toEqual(defaultMessage);
                        });
                    });

                    describe('minValue', function () {
                        var exec = function exec(val, expected) {
                            return Validate.exec({
                                value: val,
                                options: { minValue: expected }
                            });
                        };
                        var expected = 1;
                        var defaultMessage = 'You must enter a number of at least ' + expected;
                        it('It should only accept number.', function () {
                            expect(exec("12/12/2014", 1)).toEqual(defaultMessage);
                        });

                        it('When the value is less than the minimum, it should return the default message.', function () {
                            expect(exec(0, expected)).toEqual(defaultMessage);
                        });

                        it('When the value equals the minimum, it should return null.', function () {
                            expect(exec(1, expected)).toBeNull();
                        });

                        it('When the value is more than the minimum, it should return null.', function () {
                            expect(exec(2, expected)).toBeNull();
                        });
                    });

                    describe('maxLength', function () {
                        var exec = function exec(val, expected) {
                            return Validate.exec({
                                value: val,
                                options: { maxLength: expected }
                            });
                        };
                        var expected = 10;
                        var defaultMessage = 'You can only enter up to ' + expected + ' characters';
                        it('When the value is less than the maximum length, it should return null.', function () {
                            expect(exec("testing", expected)).toBeNull();
                        });

                        it('When the value is equals the maximum length, it should return null.', function () {
                            expect(exec("0123456789", expected)).toBeNull();
                        });

                        it('When the value is more than the maximum length, it should return the default message.', function () {
                            expect(exec("testing max length", expected)).toEqual(defaultMessage);
                        });
                    });

                    describe('minLength', function () {
                        var exec = function exec(val, expected) {
                            return Validate.exec({
                                value: val,
                                options: { minLength: expected }
                            });
                        };
                        var expected = 10;
                        var defaultMessage = 'You must enter at least ' + expected + " characters";

                        it('When the value is more than the minimum length, it should return null.', function () {
                            expect(exec("testing min length", expected)).toBeNull();
                        });

                        it('When the value is equals the minimum length, it should return null.', function () {
                            expect(exec("0123456789", expected)).toBeNull();
                        });

                        it('When the value is less than the minimum length, it should return the default message.', function () {
                            expect(exec("testing", expected)).toEqual(defaultMessage);
                        });
                    });

                    describe('pattern', function () {
                        var exec = function exec(val, regExp) {
                            return Validate.exec({
                                value: val,
                                options: { pattern: regExp }
                            });
                        };
                        var defaultMessage = "Your input must match the pattern";

                        it('When the expected expression is null, it should return null.', function () {
                            expect(exec("testing")).toBeNull();
                        });

                        it('When the value matches the expression, it should return null.', function () {
                            expect(exec("abcd1234", "^[a-z]{4}\\d{4}$")).toBeNull();
                        });

                        it('When the value doesn\'t match the expression, it should return the default message.', function () {
                            expect(exec("abcd123", "^[a-z]{4}\\d{4}$")).toEqual(defaultMessage + ' ^[a-z]{4}\\d{4}$');
                        });
                    });

                    describe('required', function () {
                        var exec = function exec(val, required) {
                            return Validate.exec({
                                value: val,
                                options: { required: required }
                            });
                        };
                        var defaultMessage = "You must complete this field";

                        it('When the required is true and the value is not empty, it should return null.', function () {
                            expect(exec("testing", true)).toBeNull();
                        });

                        it('When the required is false or null, it should return null.', function () {
                            expect(exec(null, false)).toBeNull();
                            expect(exec()).toBeNull();
                        });

                        it('When the value is space, it should return the default message.', function () {
                            expect(exec("  ", true)).toEqual(defaultMessage);
                        });

                        it('When the value is null, it should return the default message.', function () {
                            expect(exec(null, true)).toEqual(defaultMessage);
                        });

                        it('When the value is undefined, it should return the default message.', function () {
                            expect(exec(undefined, true)).toEqual(defaultMessage);
                        });

                        it('When the value is an empty string, it should return the default message.', function () {
                            expect(exec('', true)).toEqual(defaultMessage);
                        });

                        it('When the value is an invalid number, it should return the default message.', function () {
                            expect(exec(NaN, true)).toEqual(defaultMessage);
                        });
                    });

                    describe('requires', function () {
                        var exec = function exec(val, requiredElementValue, requiredElementName) {
                            return Validate.exec({
                                value: val,
                                options: { requires: {
                                        value: requiredElementValue,
                                        elementName: requiredElementName
                                    }
                                }
                            });
                        };

                        var defaultMessage = "You must complete ${requiredElementName} first".replace("${requiredElementName}", 'user name');
                        var incorrectConfigMessage = "You must provide correct settings for required element first";

                        it('If the required object is not an object, it should return incorrect config message.', function () {

                            expect(Validate.exec({
                                value: 123,
                                options: { requires: null }
                            })).toEqual(incorrectConfigMessage);
                            expect(Validate.exec({
                                value: 123,
                                options: { requires: undefined }
                            })).toEqual(incorrectConfigMessage);
                            expect(Validate.exec({
                                value: 123,
                                options: { requires: 123 }
                            })).toEqual(incorrectConfigMessage);
                        });

                        it('When the depending value is not a truthy value, it should return the default message.', function () {
                            expect(exec(1, null, 'user name')).toEqual(defaultMessage);
                            expect(exec(1, undefined, 'user name')).toEqual(defaultMessage);
                            expect(exec(1, '', 'user name')).toEqual(defaultMessage);
                            expect(exec(1, NaN, 'user name')).toEqual(defaultMessage);
                        });

                        it('When the value and the depending value are truthy value, it should return null.', function () {
                            expect(exec(1, 1, 'user name')).toBeNull();
                            expect(exec('aa', 'bb', 'user name')).toBeNull();
                        });

                        it('When the value and the depending value are truthy value, it should return null.', function () {
                            expect(exec(1, 1, 'user name')).toBeNull();
                            expect(exec('aa', 'bb', 'user name')).toBeNull();
                        });

                        it('When the value is not a truthy value, no matter the depending value and the required field are truthy value or not, it should return null.', function () {
                            expect(exec(null, 1, 'user name')).toBeNull();
                            expect(exec(null, null, 'user name')).toBeNull();
                            expect(exec(NaN, 'bb', 'user name')).toBeNull();
                            expect(exec(NaN, undefined, 'user name')).toBeNull();
                            expect(exec(undefined, 'bb', null)).toBeNull();
                            expect(exec(undefined, NaN, 'user name')).toBeNull();
                            expect(exec('', 'bb', null)).toBeNull();
                            expect(exec('', '', '')).toBeNull();
                        });

                        it('When the value is not a truthy value and the option is null, it should return null.', function () {
                            expect(Validate.exec({
                                value: null,
                                options: { requires: null }
                            })).toBeNull();

                            expect(Validate.exec({
                                value: undefined,
                                options: { requires: null }
                            })).toBeNull();

                            expect(Validate.exec({
                                value: '',
                                options: { requires: null }
                            })).toBeNull();

                            expect(Validate.exec({
                                value: NaN,
                                options: { requires: null }
                            })).toBeNull();
                        });
                    });

                    describe('match', function () {
                        var exec = function exec(val, expected) {
                            return Validate.exec({
                                value: val,
                                options: { match: expected }
                            });
                        };
                        var defaultMessage = "Doesn't match";

                        it('When the value matches the expected value, it should return null.', function () {
                            expect(exec(23, "23")).toBeNull();
                        });

                        if (("When the value is not null and the expected value is null, it should return the default message.", function () {
                            expect(exec(23, null)).toEqual(defaultMessage);
                        })) ;

                        it('When the value doesn\'t match the expected value, it should return the default message.', function () {
                            expect(exec(23, "245")).toEqual(defaultMessage);
                        });
                    });
                });

                describe("Presets", function () {

                    describe("General rules", function () {

                        var alien = {
                            required: true,
                            maxValue: 90,
                            minValue: 10,
                            message: "you are not an alien"
                        };

                        var martian = {
                            required: true,
                            maxValue: 30,
                            minValue: 20,
                            message: "you are not a martian"
                        };

                        it("It should return null if the 'presets' is null.", function () {
                            expect(Validate.exec({
                                value: 1,
                                options: { presets: null }
                            })).toBeNull();
                        });

                        it("It should allow user to add and use a new preset.", function () {
                            Validate.addPreset("alien", alien);
                            expect(Validate.getPreset("alien")).toEqual(alien);
                            expect(Validate.exec({
                                value: 1,
                                options: { presets: ['alien'] }
                            })).toEqual("you are not an alien");
                            expect(Validate.exec(50, { presets: ['alien'] })).toBeNull();
                        });

                        it("It should not allow to override the defined preset.", function () {
                            var usydEmail = Validate.getPreset("usydEmail");
                            Validate.addPreset("usydEmail", martian);
                            expect(console.warn).toHaveBeenCalledWith("Preset usydEmail has already been defined, ignoring");
                            expect(Validate.getPreset("usydEmail")).toEqual(usydEmail);
                        });

                        it("It should allow nested preset.", function () {
                            var wddEmail = {
                                presets: ['email', 'usydEmail'],
                                pattern: /^wdd@sydney\.edu\.au$/,
                                message: "invalid WDD email"
                            };
                            var exec = function exec(val) {
                                return Validate.exec({
                                    value: val,
                                    options: { presets: ['wddEmail'] }
                                });
                            };
                            Validate.addPreset("wddEmail", wddEmail);
                            expect(exec("a@b.")).toEqual("invalid WDD email");
                            expect(exec("martian@alien.com")).toEqual("invalid WDD email");
                            expect(exec("marketing@sydney.edu.au")).toEqual("invalid WDD email");
                            expect(exec("wdd@sydney.edu.au")).toBeNull();
                        });

                        it("An array of presets shouldn't be merged together, it should return the individual preset message.", function () {
                            Validate.addPreset("alien", alien);
                            Validate.addPreset("martian", martian);
                            var exec = function exec(val) {
                                return Validate.exec({
                                    value: val,
                                    options: { presets: ['alien', 'martian'] }
                                });
                            };
                            expect(exec(100)).toEqual("you are not an alien");
                            expect(exec(80)).toEqual("you are not a martian");
                        });
                    });

                    describe("email", function () {
                        var exec = function exec(val) {
                            return Validate.exec({
                                value: val,
                                options: { presets: ['email'] }
                            });
                        };

                        it("It should return the default message for an invalid email.", function () {
                            expect(exec("a@b.")).toEqual("You must enter a valid email address");
                        });

                        it("It should return null for a valid email.", function () {
                            expect(exec("bacon@sydney.com")).toBeNull();
                        });
                    });

                    describe("number", function () {
                        var exec = function exec(val) {
                            return Validate.exec({
                                value: val,
                                options: { presets: ['number'] }
                            });
                        };

                        it("It should return the default message for a invalid number.", function () {
                            expect(exec("@#$!&")).toEqual("You must enter a number");
                            expect(exec("@#$!&123<.spab>")).toEqual("You must enter a number");
                        });

                        it("It should return null for a valid number.", function () {
                            expect(exec("10")).toBeNull();
                            expect(exec(1)).toBeNull();
                            expect(exec("-1.23")).toBeNull();
                            expect(exec(-1.23)).toBeNull();
                        });
                    });

                    describe("usydEmail", function () {
                        var exec = function exec(val) {
                            return Validate.exec({
                                value: val,
                                options: { presets: ['usydEmail'] }
                            });
                        };

                        var message = "Your email must end with sydney.edu.au or usyd.edu.au";

                        it("It should return the default message for an invalid usyd email.", function () {
                            expect(exec("bacon@sydney.com")).toEqual(message);
                            expect(exec("bacon@usyd.edu.au.mar")).toEqual(message);
                            expect(exec("bacon@sydney.edu.au.mar")).toEqual(message);
                            expect(exec("bacon.@sydney.edu.au.mar")).toEqual(message);
                            expect(exec(".bacon@sydney.edu.au.mar")).toEqual(message);
                            expect(exec("wdd-wdd@sydney.edu.au.mar")).toEqual(message);
                        });

                        it("It should return null for a valid usyd email.", function () {
                            expect(exec("bacon@sydney.edu.au")).toBeNull();
                            expect(exec("bacon@usyd.edu.au")).toBeNull();
                            expect(exec("usyd.wdd@usyd.edu.au")).toBeNull();
                        });
                    });

                    describe("currency", function () {
                        var exec = function exec(val) {
                            return Validate.exec({
                                value: val,
                                options: { presets: ['currency'] }
                            });
                        };
                        var message = "You must enter a valid dollar amount";

                        it("It should return null for a negative value.", function () {
                            expect(exec(-100.11)).toBeNull();
                        });

                        it("It should return null for a positive value.", function () {
                            expect(exec(100.11)).toBeNull();
                        });

                        it("It should return null for a value with no more than 2 decimal places.", function () {
                            expect(exec(100.1)).toBeNull();
                            expect(exec(100.12)).toBeNull();
                        });

                        it("It should return null for a value with a '$' sign.", function () {
                            expect(exec("$100.12")).toBeNull();
                            expect(exec("-$100.12")).toBeNull();
                        });

                        it("It should return the default message for a value with more than 3 decimal places.", function () {
                            expect(exec("-$100.123")).toEqual(message);
                            expect(exec("$100.123")).toEqual(message);
                            expect(exec("100.123")).toEqual(message);
                            expect(exec("-100.123")).toEqual(message);
                        });

                        it("It should return the default message for an invalid number.", function () {
                            expect(exec("%&@!")).toEqual(message);
                        });
                    });

                    describe("alumniDonation", function () {
                        var exec = function exec(val) {
                            return Validate.exec({
                                value: val,
                                options: { presets: "['alumniDonation']" }
                            });
                        };
                        var minValueMessage = "You must enter a value of at least $1";
                        var message = "You must enter a valid dollar amount";

                        Validate.addPreset('alumniDonation', {
                            presets: ['currency'],
                            presetsMessage: message,
                            minValue: 1,
                            minValueMessage: minValueMessage
                        });

                        it("It should return null for a value with no more than 2 decimal places.", function () {
                            expect(exec(100.1)).toBeNull();
                            expect(exec(100.12)).toBeNull();
                        });

                        xit('(TODO) It should return null for a value with the \'$\' sign.', function () {});

                        it('It should return null for an empty value.', function () {
                            expect(exec('')).toBeNull();
                        });

                        it('It should return "' + message + '" for an invalid number.', function () {
                            expect(exec("%&#@!")).toEqual(message);
                        });

                        it('It should return "' + message + '" for a value with more than 3 decimal places.', function () {
                            expect(exec("1.123")).toEqual(message);
                        });

                        it('It should return "' + minValueMessage + '" for the value less than $1.', function () {
                            expect(exec(0.12)).toEqual(minValueMessage);
                            expect(exec("0")).toEqual(minValueMessage);
                            expect(exec("-0.12")).toEqual(minValueMessage);
                        });
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsQ0FBQzt5QkFDMUMsQ0FBQyxDQUFDOztBQUVILDBCQUFFLHdCQUFzQixPQUFPLHFEQUFrRCxZQUFNO0FBQ25GLGtDQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUMxQyxDQUFDLENBQUM7O0FBRUgsMEJBQUUsd0JBQXNCLGVBQWUsb0NBQWlDLFlBQU07QUFDMUUsa0NBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDNUMsa0NBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDM0Msa0NBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQ2xELENBQUMsQ0FBQztxQkFFTixDQUFDLENBQUM7aUJBRU4sQ0FBQyxDQUFDO2FBRU4sQ0FBQyxDQUFDIiwiZmlsZSI6ImpzL2xpYi92YWxpZGF0ZV9zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGUgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuLy9KYXNtaW5lIHNweSBtb2NrOiBodHRwOi8vanNmaWRkbGUubmV0L2xhdmluamovWHpxRkwvXG5cbi8qKiBAdGVzdCB7VmFsaWRhdGV9ICovXG5kZXNjcmliZSgnL3NyYy9qcy9saWIvdmFsaWRhdGUnLCAoKSA9PiB7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgLy8gc2lub24uc3B5KGNvbnNvbGUsICdsb2cnKTtcbiAgICAgICAgLy8gc2lub24uc3B5KGNvbnNvbGUsICd3YXJuJyk7XG4gICAgICAgIHNweU9uKGNvbnNvbGUsICdsb2cnKTtcbiAgICAgICAgc3B5T24oY29uc29sZSwgJ3dhcm4nKTtcbiAgICB9KTtcblxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nLnJlc3RvcmUoKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuLnJlc3RvcmUoKTtcbiAgICB9KTtcblxuICAgIC8qKiBAdGVzdCB7VmFsaWRhdGUjZXhlY30gKi9cbiAgICBkZXNjcmliZShcIk9wdGlvbnNcIiwgKCkgPT4ge1xuXG4gICAgICAgIGxldCBleGVjID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogXCJeW2Etel17NH1cXFxcZHs0fSRcIixcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpdChcIkl0IHNob3VsZCB2YWxpZGF0ZSBvcHRpb25zIGluIHRoZSB1c2VyIGRlZmluZWQgb3JkZXIuXCIsICgpID0+IHtcbiAgICAgICAgICAgIGV4cGVjdChleGVjKFwiXCIpKS50b0VxdWFsKFwiWW91IG11c3QgY29tcGxldGUgdGhpcyBmaWVsZFwiKTtcbiAgICAgICAgICAgIGV4cGVjdChleGVjKFwiYWJjZFwiKSkudG9FcXVhbChcIllvdXIgaW5wdXQgbXVzdCBtYXRjaCB0aGUgcGF0dGVybiBeW2Etel17NH1cXFxcZHs0fSRcIik7XG4gICAgICAgICAgICBleHBlY3QoZXhlYyhcImFiY2QxMjM0XCIpKS50b0VxdWFsKFwiWW91IGNhbiBvbmx5IGVudGVyIHVwIHRvIDQgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIC8qKiBAdGVzdCB7VmFsaWRhdGUjZXhlY30gKi9cbiAgICBkZXNjcmliZShcIk1lc3NhZ2VcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IFwidGVzdGluZyBtZXNzYWdlXCI7XG4gICAgICAgIGl0KFwiSXQgc2hvdWxkIHJldHVybiB0aGUgdXNlciBkZWZpbmVkIG1lc3NhZ2UgZm9yIGEgY29uZGl0aW9uLlwiLCAoKSA9PiB7XG4gICAgICAgICAgICBleHBlY3QoXG4gICAgICAgICAgICAgICAgVmFsaWRhdGUuZXhlYyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZTogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlTWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudG9FcXVhbChtZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJUaGUgb3B0aW9uLm1lc3NhZ2Ugc2hvdWxkIG92ZXJyaWRlIGFsbCB0aGUgZGVmYXVsdCBtZXNzYWdlcy5cIiwgKCkgPT4ge1xuICAgICAgICAgICAgZXhwZWN0KFxuICAgICAgICAgICAgICAgIFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluVmFsdWU6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZU1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImtpbGwgdGhlIHJvYm90XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRvRXF1YWwoXCJraWxsIHRoZSByb2JvdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvKiogQHRlc3Qge19jb25kaXRpb25zfSAqL1xuICAgIGRlc2NyaWJlKCdDb25kaXRpb25zJywgKCkgPT4ge1xuXG4gICAgICAgIHhkZXNjcmliZSgnZnVuY3Rpb24nLCAoKSA9PiB7XG4gICAgICAgICAgIGl0KFwiKFRPRE8pIEl0IHNob3VsZCBhbGxvdyB0byBjcmVhdGUgYSBmdW5jdGlvbiBmb3IgY29tcGxleCB2YWxpZGF0aW9uLlwiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBAdGVzdCB7X2NvbmRpdGlvbnMjbWF4VmFsdWV9ICovXG4gICAgICAgIGRlc2NyaWJlKCdtYXhWYWx1ZScsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBleGVjID0gKHZhbCwgZXhwZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGUuZXhlYyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgbWF4VmFsdWU6IGV4cGVjdGVkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgZXhwZWN0ZWQgPSAxO1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRNZXNzYWdlID0gJ1lvdSBtdXN0IGVudGVyIGEgbnVtYmVyIG9mIG5vIG1vcmUgdGhhbiAnK2V4cGVjdGVkO1xuICAgICAgICAgICAgaXQoJ0l0IHNob3VsZCBvbmx5IGFjY2VwdCBudW1iZXIuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCIxMi8xMi8yMDE0XCIsIDEpKS50b0VxdWFsKGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgaXMgbGVzcyB0aGFuIHRoZSBtYXhpbXVtLCBpdCBzaG91bGQgcmV0dXJuIG51bGwuJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKDAsIDEpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKC0yMC4xMCwgLTEwLjE5KSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIi0yMC4xMFwiLCAtMTAuMTkpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSB2YWx1ZSBlcXVhbHMgdGhlIG1heGltdW0sIGl0IHNob3VsZCByZXR1cm4gbnVsbC4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMSwgMSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHZhbHVlIGlzIG1vcmUgdGhhbiB0aGUgbWF4aW11bSwgaXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlLicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygyLCAxKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEB0ZXN0IHtfY29uZGl0aW9ucyNtaW5WYWx1ZX0gKi9cbiAgICAgICAgZGVzY3JpYmUoJ21pblZhbHVlJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsLCBleHBlY3RlZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBtaW5WYWx1ZTogZXhwZWN0ZWQgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBleHBlY3RlZCA9IDE7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdE1lc3NhZ2UgPSAnWW91IG11c3QgZW50ZXIgYSBudW1iZXIgb2YgYXQgbGVhc3QgJytleHBlY3RlZDtcbiAgICAgICAgICAgIGl0KCdJdCBzaG91bGQgb25seSBhY2NlcHQgbnVtYmVyLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiMTIvMTIvMjAxNFwiLCAxKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHZhbHVlIGlzIGxlc3MgdGhhbiB0aGUgbWluaW11bSwgaXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlLicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygwLCBleHBlY3RlZCkpLnRvRXF1YWwoZGVmYXVsdE1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSB2YWx1ZSBlcXVhbHMgdGhlIG1pbmltdW0sIGl0IHNob3VsZCByZXR1cm4gbnVsbC4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMSwgZXhwZWN0ZWQpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSB2YWx1ZSBpcyBtb3JlIHRoYW4gdGhlIG1pbmltdW0sIGl0IHNob3VsZCByZXR1cm4gbnVsbC4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMiwgZXhwZWN0ZWQpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBAdGVzdCB7X2NvbmRpdGlvbnMjbWF4TGVuZ3RofSAqL1xuICAgICAgICBkZXNjcmliZSgnbWF4TGVuZ3RoJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsLCBleHBlY3RlZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBtYXhMZW5ndGg6IGV4cGVjdGVkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgZXhwZWN0ZWQgPSAxMDtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0TWVzc2FnZSA9ICdZb3UgY2FuIG9ubHkgZW50ZXIgdXAgdG8gJytleHBlY3RlZCsnIGNoYXJhY3RlcnMnO1xuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHZhbHVlIGlzIGxlc3MgdGhhbiB0aGUgbWF4aW11bSBsZW5ndGgsIGl0IHNob3VsZCByZXR1cm4gbnVsbC4nLCgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcInRlc3RpbmdcIiwgZXhwZWN0ZWQpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSB2YWx1ZSBpcyBlcXVhbHMgdGhlIG1heGltdW0gbGVuZ3RoLCBpdCBzaG91bGQgcmV0dXJuIG51bGwuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCIwMTIzNDU2Nzg5XCIsIGV4cGVjdGVkKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgaXMgbW9yZSB0aGFuIHRoZSBtYXhpbXVtIGxlbmd0aCwgaXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwidGVzdGluZyBtYXggbGVuZ3RoXCIsIGV4cGVjdGVkKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEB0ZXN0IHtfY29uZGl0aW9ucyNtaW5MZW5ndGh9ICovXG4gICAgICAgIGRlc2NyaWJlKCdtaW5MZW5ndGgnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhlYyA9ICh2YWwsIGV4cGVjdGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IG1pbkxlbmd0aDogZXhwZWN0ZWQgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBleHBlY3RlZCA9IDEwO1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRNZXNzYWdlID0gJ1lvdSBtdXN0IGVudGVyIGF0IGxlYXN0ICcrZXhwZWN0ZWQrXCIgY2hhcmFjdGVyc1wiO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgaXMgbW9yZSB0aGFuIHRoZSBtaW5pbXVtIGxlbmd0aCwgaXQgc2hvdWxkIHJldHVybiBudWxsLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwidGVzdGluZyBtaW4gbGVuZ3RoXCIsIGV4cGVjdGVkKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgaXMgZXF1YWxzIHRoZSBtaW5pbXVtIGxlbmd0aCwgaXQgc2hvdWxkIHJldHVybiBudWxsLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiMDEyMzQ1Njc4OVwiLCBleHBlY3RlZCkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHZhbHVlIGlzIGxlc3MgdGhhbiB0aGUgbWluaW11bSBsZW5ndGgsIGl0IHNob3VsZCByZXR1cm4gdGhlIGRlZmF1bHQgbWVzc2FnZS4nLCgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcInRlc3RpbmdcIiwgZXhwZWN0ZWQpKS50b0VxdWFsKGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKiogQHRlc3Qge19jb25kaXRpb25zI3BhdHRlcm59ICovXG4gICAgICAgIGRlc2NyaWJlKCdwYXR0ZXJuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsLCByZWdFeHApID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGUuZXhlYyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgcGF0dGVybjogcmVnRXhwIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgZGVmYXVsdE1lc3NhZ2UgPSBcIllvdXIgaW5wdXQgbXVzdCBtYXRjaCB0aGUgcGF0dGVyblwiO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgZXhwZWN0ZWQgZXhwcmVzc2lvbiBpcyBudWxsLCBpdCBzaG91bGQgcmV0dXJuIG51bGwuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCJ0ZXN0aW5nXCIpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSB2YWx1ZSBtYXRjaGVzIHRoZSBleHByZXNzaW9uLCBpdCBzaG91bGQgcmV0dXJuIG51bGwuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCJhYmNkMTIzNFwiLCBcIl5bYS16XXs0fVxcXFxkezR9JFwiKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgZG9lc25cXCd0IG1hdGNoIHRoZSBleHByZXNzaW9uLCBpdCBzaG91bGQgcmV0dXJuIHRoZSBkZWZhdWx0IG1lc3NhZ2UuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCJhYmNkMTIzXCIsIFwiXlthLXpdezR9XFxcXGR7NH0kXCIpKS50b0VxdWFsKGAke2RlZmF1bHRNZXNzYWdlfSBeW2Etel17NH1cXFxcZHs0fSRgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBAdGVzdCB7X2NvbmRpdGlvbnMjcmVxdWlyZWR9ICovXG4gICAgICAgIGRlc2NyaWJlKCdyZXF1aXJlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBleGVjID0gKHZhbCwgcmVxdWlyZWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGUuZXhlYyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgcmVxdWlyZWQ6IHJlcXVpcmVkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgZGVmYXVsdE1lc3NhZ2UgPSBcIllvdSBtdXN0IGNvbXBsZXRlIHRoaXMgZmllbGRcIjtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHJlcXVpcmVkIGlzIHRydWUgYW5kIHRoZSB2YWx1ZSBpcyBub3QgZW1wdHksIGl0IHNob3VsZCByZXR1cm4gbnVsbC4nLCgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcInRlc3RpbmdcIiwgdHJ1ZSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHJlcXVpcmVkIGlzIGZhbHNlIG9yIG51bGwsIGl0IHNob3VsZCByZXR1cm4gbnVsbC4nLCgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhudWxsLCBmYWxzZSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgaXMgc3BhY2UsIGl0IHNob3VsZCByZXR1cm4gdGhlIGRlZmF1bHQgbWVzc2FnZS4nLCgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIiAgXCIsIHRydWUpKS50b0VxdWFsKGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgaXMgbnVsbCwgaXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKG51bGwsIHRydWUpKS50b0VxdWFsKGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBpdCBzaG91bGQgcmV0dXJuIHRoZSBkZWZhdWx0IG1lc3NhZ2UuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWModW5kZWZpbmVkLCB0cnVlKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZywgaXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKCcnLCB0cnVlKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHZhbHVlIGlzIGFuIGludmFsaWQgbnVtYmVyLCBpdCBzaG91bGQgcmV0dXJuIHRoZSBkZWZhdWx0IG1lc3NhZ2UuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoTmFOLCB0cnVlKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvKiogQHRlc3Qge19jb25kaXRpb25zI3JlcXVpcmVzfSAqL1xuICAgICAgICBkZXNjcmliZSgncmVxdWlyZXMnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhlYyA9ICh2YWwsIHJlcXVpcmVkRWxlbWVudFZhbHVlLCByZXF1aXJlZEVsZW1lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IHJlcXVpcmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlcXVpcmVkRWxlbWVudFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiByZXF1aXJlZEVsZW1lbnROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBkZWZhdWx0TWVzc2FnZSA9IChcIllvdSBtdXN0IGNvbXBsZXRlICR7cmVxdWlyZWRFbGVtZW50TmFtZX0gZmlyc3RcIikucmVwbGFjZShcIiR7cmVxdWlyZWRFbGVtZW50TmFtZX1cIiwgJ3VzZXIgbmFtZScpO1xuICAgICAgICAgICAgbGV0IGluY29ycmVjdENvbmZpZ01lc3NhZ2UgPSBcIllvdSBtdXN0IHByb3ZpZGUgY29ycmVjdCBzZXR0aW5ncyBmb3IgcmVxdWlyZWQgZWxlbWVudCBmaXJzdFwiO1xuXG4gICAgICAgICAgICBpdCgnSWYgdGhlIHJlcXVpcmVkIG9iamVjdCBpcyBub3QgYW4gb2JqZWN0LCBpdCBzaG91bGQgcmV0dXJuIGluY29ycmVjdCBjb25maWcgbWVzc2FnZS4nLCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGV4cGVjdChWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEyMyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyByZXF1aXJlczogbnVsbCB9XG4gICAgICAgICAgICAgICAgfSkpLnRvRXF1YWwoaW5jb3JyZWN0Q29uZmlnTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTIzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IHJlcXVpcmVzOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgICAgIH0pKS50b0VxdWFsKGluY29ycmVjdENvbmZpZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEyMyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyByZXF1aXJlczogMTIzIH1cbiAgICAgICAgICAgICAgICB9KSkudG9FcXVhbChpbmNvcnJlY3RDb25maWdNZXNzYWdlKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSBkZXBlbmRpbmcgdmFsdWUgaXMgbm90IGEgdHJ1dGh5IHZhbHVlLCBpdCBzaG91bGQgcmV0dXJuIHRoZSBkZWZhdWx0IG1lc3NhZ2UuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMSwgbnVsbCwgJ3VzZXIgbmFtZScpKS50b0VxdWFsKGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygxLCB1bmRlZmluZWQsICd1c2VyIG5hbWUnKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMSwgJycsICd1c2VyIG5hbWUnKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMSwgTmFOLCAndXNlciBuYW1lJykpLnRvRXF1YWwoZGVmYXVsdE1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSB2YWx1ZSBhbmQgdGhlIGRlcGVuZGluZyB2YWx1ZSBhcmUgdHJ1dGh5IHZhbHVlLCBpdCBzaG91bGQgcmV0dXJuIG51bGwuJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMSwgMSwgJ3VzZXIgbmFtZScpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKCdhYScsICdiYicsICd1c2VyIG5hbWUnKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgYW5kIHRoZSBkZXBlbmRpbmcgdmFsdWUgYXJlIHRydXRoeSB2YWx1ZSwgaXQgc2hvdWxkIHJldHVybiBudWxsLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKDEsIDEsICd1c2VyIG5hbWUnKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygnYWEnLCAnYmInLCAndXNlciBuYW1lJykpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ1doZW4gdGhlIHZhbHVlIGlzIG5vdCBhIHRydXRoeSB2YWx1ZSwgbm8gbWF0dGVyIHRoZSBkZXBlbmRpbmcgdmFsdWUgYW5kIHRoZSByZXF1aXJlZCBmaWVsZCBhcmUgdHJ1dGh5IHZhbHVlIG9yIG5vdCwgaXQgc2hvdWxkIHJldHVybiBudWxsLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKG51bGwsIDEsICd1c2VyIG5hbWUnKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhudWxsLCBudWxsLCAndXNlciBuYW1lJykpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoTmFOLCAnYmInLCAndXNlciBuYW1lJykpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoTmFOLCB1bmRlZmluZWQsICd1c2VyIG5hbWUnKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyh1bmRlZmluZWQsICdiYicsIG51bGwpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKHVuZGVmaW5lZCwgTmFOLCAndXNlciBuYW1lJykpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoJycsICdiYicsIG51bGwpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKCcnLCAnJywgJycpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdXaGVuIHRoZSB2YWx1ZSBpcyBub3QgYSB0cnV0aHkgdmFsdWUgYW5kIHRoZSBvcHRpb24gaXMgbnVsbCwgaXQgc2hvdWxkIHJldHVybiBudWxsLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgcmVxdWlyZXM6IG51bGwgfVxuICAgICAgICAgICAgICAgIH0pKS50b0JlTnVsbCgpO1xuXG4gICAgICAgICAgICAgICAgZXhwZWN0KFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IHJlcXVpcmVzOiBudWxsIH1cbiAgICAgICAgICAgICAgICB9KSkudG9CZU51bGwoKTtcblxuICAgICAgICAgICAgICAgIGV4cGVjdChWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IHJlcXVpcmVzOiBudWxsIH1cbiAgICAgICAgICAgICAgICB9KSkudG9CZU51bGwoKTtcblxuICAgICAgICAgICAgICAgIGV4cGVjdChWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IE5hTixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyByZXF1aXJlczogbnVsbCB9XG4gICAgICAgICAgICAgICAgfSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEB0ZXN0IHtfY29uZGl0aW9ucyNtYXRjaH0gKi9cbiAgICAgICAgZGVzY3JpYmUoJ21hdGNoJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsLCBleHBlY3RlZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBtYXRjaDogZXhwZWN0ZWQgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0TWVzc2FnZSA9IFwiRG9lc24ndCBtYXRjaFwiO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgbWF0Y2hlcyB0aGUgZXhwZWN0ZWQgdmFsdWUsIGl0IHNob3VsZCByZXR1cm4gbnVsbC4nLCgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygyMywgXCIyM1wiKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihcIldoZW4gdGhlIHZhbHVlIGlzIG5vdCBudWxsIGFuZCB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgbnVsbCwgaXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlLlwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMjMsIG51bGwpKS50b0VxdWFsKGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnV2hlbiB0aGUgdmFsdWUgZG9lc25cXCd0IG1hdGNoIHRoZSBleHBlY3RlZCB2YWx1ZSwgaXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlLicsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKDIzLCBcIjI0NVwiKSkudG9FcXVhbChkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgLyoqIEB0ZXN0IHtfcHJlc2V0c30gKi9cbiAgICBkZXNjcmliZShcIlByZXNldHNcIiwgKCkgPT4ge1xuXG4gICAgICAgIGRlc2NyaWJlKFwiR2VuZXJhbCBydWxlc1wiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBhbGllbiA9IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZTogOTAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWU6IDEwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwieW91IGFyZSBub3QgYW4gYWxpZW5cIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IG1hcnRpYW4gPSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWU6IDMwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlOiAyMCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInlvdSBhcmUgbm90IGEgbWFydGlhblwiXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpdCggXCJJdCBzaG91bGQgcmV0dXJuIG51bGwgaWYgdGhlICdwcmVzZXRzJyBpcyBudWxsLlwiLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoVmFsaWRhdGUuZXhlYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToxLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge3ByZXNldHM6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8qKiBAdGVzdCB7VmFsaWRhdGUjYWRkUHJlc2V0fSAqL1xuICAgICAgICAgICAgaXQoXCJJdCBzaG91bGQgYWxsb3cgdXNlciB0byBhZGQgYW5kIHVzZSBhIG5ldyBwcmVzZXQuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBWYWxpZGF0ZS5hZGRQcmVzZXQoXCJhbGllblwiLCBhbGllbik7XG4gICAgICAgICAgICAgICAgZXhwZWN0KFZhbGlkYXRlLmdldFByZXNldChcImFsaWVuXCIpKS50b0VxdWFsKGFsaWVuKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoVmFsaWRhdGUuZXhlYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7cHJlc2V0czogWydhbGllbiddfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLnRvRXF1YWwoXCJ5b3UgYXJlIG5vdCBhbiBhbGllblwiKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoVmFsaWRhdGUuZXhlYyg1MCx7cHJlc2V0czogWydhbGllbiddfSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLyoqIEB0ZXN0IHtWYWxpZGF0ZSNhZGRQcmVzZXR9ICovXG4gICAgICAgICAgICBpdChcIkl0IHNob3VsZCBub3QgYWxsb3cgdG8gb3ZlcnJpZGUgdGhlIGRlZmluZWQgcHJlc2V0LlwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVzeWRFbWFpbCA9IFZhbGlkYXRlLmdldFByZXNldChcInVzeWRFbWFpbFwiKTtcbiAgICAgICAgICAgICAgICBWYWxpZGF0ZS5hZGRQcmVzZXQoXCJ1c3lkRW1haWxcIiwgbWFydGlhbik7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvbnNvbGUud2FybikudG9IYXZlQmVlbkNhbGxlZFdpdGgoXCJQcmVzZXQgdXN5ZEVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCwgaWdub3JpbmdcIik7XG4gICAgICAgICAgICAgICAgZXhwZWN0KFZhbGlkYXRlLmdldFByZXNldChcInVzeWRFbWFpbFwiKSkudG9FcXVhbCh1c3lkRW1haWwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiSXQgc2hvdWxkIGFsbG93IG5lc3RlZCBwcmVzZXQuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgd2RkRW1haWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNldHM6IFsnZW1haWwnLCAndXN5ZEVtYWlsJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9ed2RkQHN5ZG5leVxcLmVkdVxcLmF1JC8sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBXREQgZW1haWxcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTp2YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge3ByZXNldHM6IFsnd2RkRW1haWwnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgVmFsaWRhdGUuYWRkUHJlc2V0KFwid2RkRW1haWxcIiwgd2RkRW1haWwpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiYUBiLlwiKSkudG9FcXVhbChcImludmFsaWQgV0REIGVtYWlsXCIpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwibWFydGlhbkBhbGllbi5jb21cIikpLnRvRXF1YWwoXCJpbnZhbGlkIFdERCBlbWFpbFwiKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIm1hcmtldGluZ0BzeWRuZXkuZWR1LmF1XCIpKS50b0VxdWFsKFwiaW52YWxpZCBXREQgZW1haWxcIik7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCJ3ZGRAc3lkbmV5LmVkdS5hdVwiKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKiogQHRlc3Qge1ZhbGlkYXRlI2FkZFByZXNldH0gKi9cbiAgICAgICAgICAgIGl0KFwiQW4gYXJyYXkgb2YgcHJlc2V0cyBzaG91bGRuJ3QgYmUgbWVyZ2VkIHRvZ2V0aGVyLCBpdCBzaG91bGQgcmV0dXJuIHRoZSBpbmRpdmlkdWFsIHByZXNldCBtZXNzYWdlLlwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdGUuYWRkUHJlc2V0KFwiYWxpZW5cIiwgYWxpZW4pO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRlLmFkZFByZXNldChcIm1hcnRpYW5cIiwgbWFydGlhbik7XG4gICAgICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7cHJlc2V0czogWydhbGllbicsICdtYXJ0aWFuJ119XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMTAwKSkudG9FcXVhbChcInlvdSBhcmUgbm90IGFuIGFsaWVuXCIpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKDgwKSkudG9FcXVhbChcInlvdSBhcmUgbm90IGEgbWFydGlhblwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBAdGVzdCB7X3ByZXNldHMjZW1haWx9ICovXG4gICAgICAgIGRlc2NyaWJlKFwiZW1haWxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7cHJlc2V0czogWydlbWFpbCddfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaXQoXCJJdCBzaG91bGQgcmV0dXJuIHRoZSBkZWZhdWx0IG1lc3NhZ2UgZm9yIGFuIGludmFsaWQgZW1haWwuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcImFAYi5cIikpLnRvRXF1YWwoXCJZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJJdCBzaG91bGQgcmV0dXJuIG51bGwgZm9yIGEgdmFsaWQgZW1haWwuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcImJhY29uQHN5ZG5leS5jb21cIikpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvKiogQHRlc3Qge19wcmVzZXRzI251bWJlcn0gKi9cbiAgICAgICAgZGVzY3JpYmUoXCJudW1iZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7cHJlc2V0czogWydudW1iZXInXX1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGl0KFwiSXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlIGZvciBhIGludmFsaWQgbnVtYmVyLlwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCJAIyQhJlwiKSkudG9FcXVhbChcIllvdSBtdXN0IGVudGVyIGEgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiQCMkISYxMjM8LnNwYWI+XCIpKS50b0VxdWFsKFwiWW91IG11c3QgZW50ZXIgYSBudW1iZXJcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJJdCBzaG91bGQgcmV0dXJuIG51bGwgZm9yIGEgdmFsaWQgbnVtYmVyLlwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCIxMFwiKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygxKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIi0xLjIzXCIpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKC0xLjIzKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBAdGVzdCB7X3ByZXNldHMjdXN5ZEVtYWlsfSAqL1xuICAgICAgICBkZXNjcmliZShcInVzeWRFbWFpbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhlYyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGUuZXhlYyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtwcmVzZXRzOiBbJ3VzeWRFbWFpbCddfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIllvdXIgZW1haWwgbXVzdCBlbmQgd2l0aCBzeWRuZXkuZWR1LmF1IG9yIHVzeWQuZWR1LmF1XCI7XG5cbiAgICAgICAgICAgIGl0KFwiSXQgc2hvdWxkIHJldHVybiB0aGUgZGVmYXVsdCBtZXNzYWdlIGZvciBhbiBpbnZhbGlkIHVzeWQgZW1haWwuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcImJhY29uQHN5ZG5leS5jb21cIikpLnRvRXF1YWwobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCJiYWNvbkB1c3lkLmVkdS5hdS5tYXJcIikpLnRvRXF1YWwobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCJiYWNvbkBzeWRuZXkuZWR1LmF1Lm1hclwiKSkudG9FcXVhbChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcImJhY29uLkBzeWRuZXkuZWR1LmF1Lm1hclwiKSkudG9FcXVhbChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIi5iYWNvbkBzeWRuZXkuZWR1LmF1Lm1hclwiKSkudG9FcXVhbChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIndkZC13ZGRAc3lkbmV5LmVkdS5hdS5tYXJcIikpLnRvRXF1YWwobWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJJdCBzaG91bGQgcmV0dXJuIG51bGwgZm9yIGEgdmFsaWQgdXN5ZCBlbWFpbC5cIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiYmFjb25Ac3lkbmV5LmVkdS5hdVwiKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcImJhY29uQHVzeWQuZWR1LmF1XCIpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwidXN5ZC53ZGRAdXN5ZC5lZHUuYXVcIikpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvKiogQHRlc3Qge19wcmVzZXRzI2N1cnJlbmN5fSAqL1xuICAgICAgICBkZXNjcmliZShcImN1cnJlbmN5XCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBleGVjID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5leGVjKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge3ByZXNldHM6IFsnY3VycmVuY3knXX1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYSB2YWxpZCBkb2xsYXIgYW1vdW50XCI7XG5cbiAgICAgICAgICAgIGl0KFwiSXQgc2hvdWxkIHJldHVybiBudWxsIGZvciBhIG5lZ2F0aXZlIHZhbHVlLlwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoLTEwMC4xMSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJJdCBzaG91bGQgcmV0dXJuIG51bGwgZm9yIGEgcG9zaXRpdmUgdmFsdWUuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygxMDAuMTEpKS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiSXQgc2hvdWxkIHJldHVybiBudWxsIGZvciBhIHZhbHVlIHdpdGggbm8gbW9yZSB0aGFuIDIgZGVjaW1hbCBwbGFjZXMuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygxMDAuMSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMTAwLjEyKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIkl0IHNob3VsZCByZXR1cm4gbnVsbCBmb3IgYSB2YWx1ZSB3aXRoIGEgJyQnIHNpZ24uXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIiQxMDAuMTJcIikpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCItJDEwMC4xMlwiKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIkl0IHNob3VsZCByZXR1cm4gdGhlIGRlZmF1bHQgbWVzc2FnZSBmb3IgYSB2YWx1ZSB3aXRoIG1vcmUgdGhhbiAzIGRlY2ltYWwgcGxhY2VzLlwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCItJDEwMC4xMjNcIikpLnRvRXF1YWwobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCIkMTAwLjEyM1wiKSkudG9FcXVhbChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIjEwMC4xMjNcIikpLnRvRXF1YWwobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCItMTAwLjEyM1wiKSkudG9FcXVhbChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIkl0IHNob3VsZCByZXR1cm4gdGhlIGRlZmF1bHQgbWVzc2FnZSBmb3IgYW4gaW52YWxpZCBudW1iZXIuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYyhcIiUmQCFcIikpLnRvRXF1YWwobWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEB0ZXN0IHtBbHVtbmlEb25hdGlvbkZvcm19ICovXG4gICAgICAgIGRlc2NyaWJlKFwiYWx1bW5pRG9uYXRpb25cIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4ZWMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRlLmV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7cHJlc2V0czogXCJbJ2FsdW1uaURvbmF0aW9uJ11cIn1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgbWluVmFsdWVNZXNzYWdlID0gXCJZb3UgbXVzdCBlbnRlciBhIHZhbHVlIG9mIGF0IGxlYXN0ICQxXCI7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYSB2YWxpZCBkb2xsYXIgYW1vdW50XCI7XG5cbiAgICAgICAgICAgIC8vRklYTUU6IGl0IHNob3VsZCBsb2FkIHRoZSBhbHVtbmlEb25hdGlvbiBmcm9tXG4gICAgICAgICAgICAvLyB0aGUgL3NyYy9jb21wb25lbnRzL2FsdW1uaS1kb25hdGlvbi1mb3JtL2FsdW1uaS1kb25hdGlvbi1mb3JtLmpzXG5cbiAgICAgICAgICAgIFZhbGlkYXRlLmFkZFByZXNldCggJ2FsdW1uaURvbmF0aW9uJywge1xuICAgICAgICAgICAgICAgIHByZXNldHM6IFsnY3VycmVuY3knXSxcbiAgICAgICAgICAgICAgICBwcmVzZXRzTWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZTogMSxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZU1lc3NhZ2U6IG1pblZhbHVlTWVzc2FnZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiSXQgc2hvdWxkIHJldHVybiBudWxsIGZvciBhIHZhbHVlIHdpdGggbm8gbW9yZSB0aGFuIDIgZGVjaW1hbCBwbGFjZXMuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygxMDAuMSkpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoMTAwLjEyKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB4aXQoYChUT0RPKSBJdCBzaG91bGQgcmV0dXJuIG51bGwgZm9yIGEgdmFsdWUgd2l0aCB0aGUgJyQnIHNpZ24uYCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGV4cGVjdChleGVjKCckMTIzJykpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoYEl0IHNob3VsZCByZXR1cm4gbnVsbCBmb3IgYW4gZW1wdHkgdmFsdWUuYCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKCcnKSkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChgSXQgc2hvdWxkIHJldHVybiBcIiR7bWVzc2FnZX1cIiBmb3IgYW4gaW52YWxpZCBudW1iZXIuYCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiJSYjQCFcIikpLnRvRXF1YWwobWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoYEl0IHNob3VsZCByZXR1cm4gXCIke21lc3NhZ2V9XCIgZm9yIGEgdmFsdWUgd2l0aCBtb3JlIHRoYW4gMyBkZWNpbWFsIHBsYWNlcy5gLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGV4ZWMoXCIxLjEyM1wiKSkudG9FcXVhbChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChgSXQgc2hvdWxkIHJldHVybiBcIiR7bWluVmFsdWVNZXNzYWdlfVwiIGZvciB0aGUgdmFsdWUgbGVzcyB0aGFuICQxLmAsICgpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QoZXhlYygwLjEyKSkudG9FcXVhbChtaW5WYWx1ZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiMFwiKSkudG9FcXVhbChtaW5WYWx1ZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChleGVjKFwiLTAuMTJcIikpLnRvRXF1YWwobWluVmFsdWVNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19

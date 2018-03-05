import { Validate } from './validate';

//Jasmine spy mock: http://jsfiddle.net/lavinjj/XzqFL/

/** @test {Validate} */
describe('/src/js/lib/validate', () => {

    beforeEach(() => {
        // sinon.spy(console, 'log');
        // sinon.spy(console, 'warn');
        spyOn(console, 'log');
        spyOn(console, 'warn');
    });

    afterEach(() => {
        // console.log.restore();
        // console.warn.restore();
    });

    /** @test {Validate#exec} */
    describe("Options", () => {

        let exec = (val) => {
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

        it("It should validate options in the user defined order.", () => {
            expect(exec("")).toEqual("You must complete this field");
            expect(exec("abcd")).toEqual("Your input must match the pattern ^[a-z]{4}\\d{4}$");
            expect(exec("abcd1234")).toEqual("You can only enter up to 4 characters");
        });

    });

    /** @test {Validate#exec} */
    describe("Message", () => {
        let message = "testing message";
        it("It should return the user defined message for a condition.", () => {
            expect(
                Validate.exec({
                    value: 2,
                    options: {
                        minValue: 8,
                        minValueMessage: message
                    }
                })
            ).toEqual(message);
        });

        it("The option.message should override all the default messages.", () => {
            expect(
                Validate.exec({
                    value: 2,
                    options: {
                        minValue: 8,
                        minValueMessage: message,
                        message: "kill the robot"
                    }
                })
            ).toEqual("kill the robot");
        });
    });

    /** @test {_conditions} */
    describe('Conditions', () => {

        xdescribe('function', () => {
           it("(TODO) It should allow to create a function for complex validation.", () => {

           });
        });

        /** @test {_conditions#maxValue} */
        describe('maxValue', () => {
            let exec = (val, expected) => {
                return Validate.exec({
                    value: val,
                    options: { maxValue: expected }
                });
            };
            let expected = 1;
            let defaultMessage = 'You must enter a number of no more than '+expected;
            it('It should only accept number.',() => {
                expect(exec("12/12/2014", 1)).toEqual(defaultMessage);
            });

            it('When the value is less than the maximum, it should return null.', () => {
                expect(exec(0, 1)).toBeNull();
                expect(exec(-20.10, -10.19)).toBeNull();
                expect(exec("-20.10", -10.19)).toBeNull();
            });

            it('When the value equals the maximum, it should return null.', () => {
                expect(exec(1, 1)).toBeNull();
            });

            it('When the value is more than the maximum, it should return the default message.', () => {
                expect(exec(2, 1)).toEqual(defaultMessage);
            });
        });

        /** @test {_conditions#minValue} */
        describe('minValue', () => {
            let exec = (val, expected) => {
                return Validate.exec({
                    value: val,
                    options: { minValue: expected }
                });
            };
            let expected = 1;
            let defaultMessage = 'You must enter a number of at least '+expected;
            it('It should only accept number.',() => {
                expect(exec("12/12/2014", 1)).toEqual(defaultMessage);
            });

            it('When the value is less than the minimum, it should return the default message.', () => {
                expect(exec(0, expected)).toEqual(defaultMessage);
            });

            it('When the value equals the minimum, it should return null.', () => {
                expect(exec(1, expected)).toBeNull();
            });

            it('When the value is more than the minimum, it should return null.', () => {
                expect(exec(2, expected)).toBeNull();
            });
        });

        /** @test {_conditions#maxLength} */
        describe('maxLength', () => {
            let exec = (val, expected) => {
                return Validate.exec({
                    value: val,
                    options: { maxLength: expected }
                });
            };
            let expected = 10;
            let defaultMessage = 'You can only enter up to '+expected+' characters';
            it('When the value is less than the maximum length, it should return null.',() => {
                expect(exec("testing", expected)).toBeNull();
            });

            it('When the value is equals the maximum length, it should return null.',() => {
                expect(exec("0123456789", expected)).toBeNull();
            });

            it('When the value is more than the maximum length, it should return the default message.',() => {
                expect(exec("testing max length", expected)).toEqual(defaultMessage);
            });
        });

        /** @test {_conditions#minLength} */
        describe('minLength', () => {
            let exec = (val, expected) => {
                return Validate.exec({
                    value: val,
                    options: { minLength: expected }
                });
            };
            let expected = 10;
            let defaultMessage = 'You must enter at least '+expected+" characters";

            it('When the value is more than the minimum length, it should return null.',() => {
                expect(exec("testing min length", expected)).toBeNull();
            });

            it('When the value is equals the minimum length, it should return null.',() => {
                expect(exec("0123456789", expected)).toBeNull();
            });

            it('When the value is less than the minimum length, it should return the default message.',() => {
                expect(exec("testing", expected)).toEqual(defaultMessage);
            });
        });

        /** @test {_conditions#pattern} */
        describe('pattern', () => {
            let exec = (val, regExp) => {
                return Validate.exec({
                    value: val,
                    options: { pattern: regExp }
                });
            };
            let defaultMessage = "Your input must match the pattern";

            it('When the expected expression is null, it should return null.',() => {
                expect(exec("testing")).toBeNull();
            });

            it('When the value matches the expression, it should return null.',() => {
                expect(exec("abcd1234", "^[a-z]{4}\\d{4}$")).toBeNull();
            });

            it('When the value doesn\'t match the expression, it should return the default message.',() => {
                expect(exec("abcd123", "^[a-z]{4}\\d{4}$")).toEqual(`${defaultMessage} ^[a-z]{4}\\d{4}$`);
            });

        });

        /** @test {_conditions#required} */
        describe('required', () => {
            let exec = (val, required) => {
                return Validate.exec({
                    value: val,
                    options: { required: required }
                });
            };
            let defaultMessage = "You must complete this field";

            it('When the required is true and the value is not empty, it should return null.',() => {
                expect(exec("testing", true)).toBeNull();
            });

            it('When the required is false or null, it should return null.',() => {
                expect(exec(null, false)).toBeNull();
                expect(exec()).toBeNull();
            });

            it('When the value is space, it should return the default message.',() => {
                expect(exec("  ", true)).toEqual(defaultMessage);
            });

            it('When the value is null, it should return the default message.',() => {
                expect(exec(null, true)).toEqual(defaultMessage);
            });

            it('When the value is undefined, it should return the default message.',() => {
                expect(exec(undefined, true)).toEqual(defaultMessage);
            });

            it('When the value is an empty string, it should return the default message.',() => {
                expect(exec('', true)).toEqual(defaultMessage);
            });

            it('When the value is an invalid number, it should return the default message.',() => {
                expect(exec(NaN, true)).toEqual(defaultMessage);
            });

        });

        /** @test {_conditions#requires} */
        describe('requires', () => {
            let exec = (val, requiredElementValue, requiredElementName) => {
                return Validate.exec({
                    value: val,
                    options: { requires: {
                            value: requiredElementValue,
                            elementName: requiredElementName
                        }
                    }
                });
            };

            let defaultMessage = ("You must complete ${requiredElementName} first").replace("${requiredElementName}", 'user name');
            let incorrectConfigMessage = "You must provide correct settings for required element first";

            it('If the required object is not an object, it should return incorrect config message.',() => {

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

            it('When the depending value is not a truthy value, it should return the default message.',() => {
                expect(exec(1, null, 'user name')).toEqual(defaultMessage);
                expect(exec(1, undefined, 'user name')).toEqual(defaultMessage);
                expect(exec(1, '', 'user name')).toEqual(defaultMessage);
                expect(exec(1, NaN, 'user name')).toEqual(defaultMessage);
            });
            
            it('When the value and the depending value are truthy value, it should return null.',() => {
                expect(exec(1, 1, 'user name')).toBeNull();
                expect(exec('aa', 'bb', 'user name')).toBeNull();
            });

            it('When the value and the depending value are truthy value, it should return null.',() => {
                expect(exec(1, 1, 'user name')).toBeNull();
                expect(exec('aa', 'bb', 'user name')).toBeNull();
            });

            it('When the value is not a truthy value, no matter the depending value and the required field are truthy value or not, it should return null.',() => {
                expect(exec(null, 1, 'user name')).toBeNull();
                expect(exec(null, null, 'user name')).toBeNull();
                expect(exec(NaN, 'bb', 'user name')).toBeNull();
                expect(exec(NaN, undefined, 'user name')).toBeNull();
                expect(exec(undefined, 'bb', null)).toBeNull();
                expect(exec(undefined, NaN, 'user name')).toBeNull();
                expect(exec('', 'bb', null)).toBeNull();
                expect(exec('', '', '')).toBeNull();
            });

            it('When the value is not a truthy value and the option is null, it should return null.',() => {
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

        /** @test {_conditions#match} */
        describe('match', () => {
            let exec = (val, expected) => {
                return Validate.exec({
                    value: val,
                    options: { match: expected }
                });
            };
            let defaultMessage = "Doesn't match";

            it('When the value matches the expected value, it should return null.',() => {
                expect(exec(23, "23")).toBeNull();
            });

            if("When the value is not null and the expected value is null, it should return the default message.", () => {
                expect(exec(23, null)).toEqual(defaultMessage);
            });

            it('When the value doesn\'t match the expected value, it should return the default message.',() => {
                expect(exec(23, "245")).toEqual(defaultMessage);
            });

        });

    });

    /** @test {_presets} */
    describe("Presets", () => {

        describe("General rules", () => {

            let alien = {
                required: true,
                maxValue: 90,
                minValue: 10,
                message: "you are not an alien"
            };

            let martian = {
                required: true,
                maxValue: 30,
                minValue: 20,
                message: "you are not a martian"
            };

            it( "It should return null if the 'presets' is null.", ()=> {
                expect(Validate.exec({
                        value:1,
                        options: {presets: null}
                    })
                ).toBeNull();
            });

            /** @test {Validate#addPreset} */
            it("It should allow user to add and use a new preset.", () => {
                Validate.addPreset("alien", alien);
                expect(Validate.getPreset("alien")).toEqual(alien);
                expect(Validate.exec({
                            value:1,
                            options: {presets: ['alien']}
                        })
                ).toEqual("you are not an alien");
                expect(Validate.exec(50,{presets: ['alien']})).toBeNull();
            });

            /** @test {Validate#addPreset} */
            it("It should not allow to override the defined preset.", () => {
                let usydEmail = Validate.getPreset("usydEmail");
                Validate.addPreset("usydEmail", martian);
                expect(console.warn).toHaveBeenCalledWith("Preset usydEmail has already been defined, ignoring");
                expect(Validate.getPreset("usydEmail")).toEqual(usydEmail);
            });

            it("It should allow nested preset.", () => {
                let wddEmail = {
                    presets: ['email', 'usydEmail'],
                    pattern: /^wdd@sydney\.edu\.au$/,
                    message: "invalid WDD email"
                };
                let exec = (val) => {
                    return Validate.exec({
                            value:val,
                            options: {presets: ['wddEmail']}
                        });
                };
                Validate.addPreset("wddEmail", wddEmail);
                expect(exec("a@b.")).toEqual("invalid WDD email");
                expect(exec("martian@alien.com")).toEqual("invalid WDD email");
                expect(exec("marketing@sydney.edu.au")).toEqual("invalid WDD email");
                expect(exec("wdd@sydney.edu.au")).toBeNull();
            });

            /** @test {Validate#addPreset} */
            it("An array of presets shouldn't be merged together, it should return the individual preset message.", () => {
                Validate.addPreset("alien", alien);
                Validate.addPreset("martian", martian);
                let exec = (val) => {
                    return Validate.exec({
                        value: val,
                        options: {presets: ['alien', 'martian']}
                    });
                };
                expect(exec(100)).toEqual("you are not an alien");
                expect(exec(80)).toEqual("you are not a martian");
            });

        });

        /** @test {_presets#email} */
        describe("email", () => {
            let exec = (val) => {
                return Validate.exec({
                    value: val,
                    options: {presets: ['email']}
                });
            };

            it("It should return the default message for an invalid email.", () => {
                expect(exec("a@b.")).toEqual("You must enter a valid email address");
            });

            it("It should return null for a valid email.", () => {
                expect(exec("bacon@sydney.com")).toBeNull();
            });

        });

        /** @test {_presets#number} */
        describe("number", () => {
            let exec = (val) => {
                return Validate.exec({
                    value: val,
                    options: {presets: ['number']}
                });
            };

            it("It should return the default message for a invalid number.", () => {
                expect(exec("@#$!&")).toEqual("You must enter a number");
                expect(exec("@#$!&123<.spab>")).toEqual("You must enter a number");
            });

            it("It should return null for a valid number.", () => {
                expect(exec("10")).toBeNull();
                expect(exec(1)).toBeNull();
                expect(exec("-1.23")).toBeNull();
                expect(exec(-1.23)).toBeNull();
            });

        });

        /** @test {_presets#usydEmail} */
        describe("usydEmail", () => {
            let exec = (val) => {
                return Validate.exec({
                    value: val,
                    options: {presets: ['usydEmail']}
                });
            };

            let message = "Your email must end with sydney.edu.au or usyd.edu.au";

            it("It should return the default message for an invalid usyd email.", () => {
                expect(exec("bacon@sydney.com")).toEqual(message);
                expect(exec("bacon@usyd.edu.au.mar")).toEqual(message);
                expect(exec("bacon@sydney.edu.au.mar")).toEqual(message);
                expect(exec("bacon.@sydney.edu.au.mar")).toEqual(message);
                expect(exec(".bacon@sydney.edu.au.mar")).toEqual(message);
                expect(exec("wdd-wdd@sydney.edu.au.mar")).toEqual(message);
            });

            it("It should return null for a valid usyd email.", () => {
                expect(exec("bacon@sydney.edu.au")).toBeNull();
                expect(exec("bacon@usyd.edu.au")).toBeNull();
                expect(exec("usyd.wdd@usyd.edu.au")).toBeNull();
            });

        });

        /** @test {_presets#currency} */
        describe("currency", () => {
            let exec = (val) => {
                return Validate.exec({
                    value: val,
                    options: {presets: ['currency']}
                });
            };
            let message = "You must enter a valid dollar amount";

            it("It should return null for a negative value.", () => {
                expect(exec(-100.11)).toBeNull();
            });

            it("It should return null for a positive value.", () => {
                expect(exec(100.11)).toBeNull();
            });

            it("It should return null for a value with no more than 2 decimal places.", () => {
                expect(exec(100.1)).toBeNull();
                expect(exec(100.12)).toBeNull();
            });

            it("It should return null for a value with a '$' sign.", () => {
                expect(exec("$100.12")).toBeNull();
                expect(exec("-$100.12")).toBeNull();
            });

            it("It should return the default message for a value with more than 3 decimal places.", () => {
                expect(exec("-$100.123")).toEqual(message);
                expect(exec("$100.123")).toEqual(message);
                expect(exec("100.123")).toEqual(message);
                expect(exec("-100.123")).toEqual(message);
            });

            it("It should return the default message for an invalid number.", () => {
                expect(exec("%&@!")).toEqual(message);
            });
        });

        /** @test {AlumniDonationForm} */
        describe("alumniDonation", () => {
            let exec = (val) => {
                return Validate.exec({
                    value: val,
                    options: {presets: "['alumniDonation']"}
                });
            };
            let minValueMessage = "You must enter a value of at least $1";
            let message = "You must enter a valid dollar amount";

            //FIXME: it should load the alumniDonation from
            // the /src/components/alumni-donation-form/alumni-donation-form.js

            Validate.addPreset( 'alumniDonation', {
                presets: ['currency'],
                presetsMessage: message,
                minValue: 1,
                minValueMessage: minValueMessage
            });

            it("It should return null for a value with no more than 2 decimal places.", () => {
                expect(exec(100.1)).toBeNull();
                expect(exec(100.12)).toBeNull();
            });

            xit(`(TODO) It should return null for a value with the '$' sign.`, () => {
                // expect(exec('$123')).toBeNull();
            });

            it(`It should return null for an empty value.`, () => {
                expect(exec('')).toBeNull();
            });

            it(`It should return "${message}" for an invalid number.`, () => {
                expect(exec("%&#@!")).toEqual(message);
            });

            it(`It should return "${message}" for a value with more than 3 decimal places.`, () => {
                expect(exec("1.123")).toEqual(message);
            });

            it(`It should return "${minValueMessage}" for the value less than $1.`, () => {
                expect(exec(0.12)).toEqual(minValueMessage);
                expect(exec("0")).toEqual(minValueMessage);
                expect(exec("-0.12")).toEqual(minValueMessage);
            });

        });

    });

});

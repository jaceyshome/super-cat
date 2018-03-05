import { Helpers } from "../helpers/helpers";
import _ from "lodash";

/**
 * The validation library
 */

/**
 * ## Validation preset
 * A preset is built by a group of validation conditions. The idea is to provide a pre-config
 * validation option for the same 'type' of input field.
 *
 * @example
 * //User first name and last name input fields will look like this:
 * <input data-max-length="255" required="true" data-min-length="2" name="firstName">
 * <input data-max-length="255" required="true" data-min-length="2" name="lastName">
 *
 *
 * //Instead of repeating the data-max-length, the data-min-length and the required for the same type of data field,
 * //we can write a preset :
 *
 * 'userName' = {
 *      maxLength="255",
 *      minLength="2",
 *      required=true,
 * }
 *
 *
 * //With using preset
 * <input data-presets="[userName]" name="firstName">
 * <input data-presets="[userName]" name="lastName">
 *
 * //An input field can have more than one preset
 * <input data-presets="[email, usydEmail, wddEmail]" name="email">
 *
 * //Preset supports nested presets
 * usydEmail = {
 *      presets: ['email'],
 *      message: 'invalid usyd email'
 * }
 *
 */
let _presets = {

    /**
     * Currency preset
     * Rules: negative or positive, optional 2 decimal , optional $ sign
     * Valid:
     * -$1,000,000.00
     * 10000
     * 10000.5
     * 999.99 g
     */
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

/**
 * ## Validation condition
 * A condition is a validation base element, it requires expected value,
 * for example: data-maxLength="{expectedValue}"
 * Typically it will have two properties:
 * @property {Function} validate - The validation function
 * @property {string} message - The default message
 *
 *
 */
let _conditions = {

    'function': {}, //TODO function condition

    'maxValue': {
        validate: (val, expected) => {
            if (expected === null) {
                return null;
            }
            return (Helpers.Numbers.isNumber(val) && (Helpers.Numbers.stripNonNumericCharacters(val) <= expected)) ?
                null : `You must enter a number of no more than ${expected}`;
        }
    },


    'minValue': {
        validate: (val, expected) => {
            if (expected === null) {
                return null;
            }
            return (Helpers.Numbers.isNumber(val) && (Helpers.Numbers.stripNonNumericCharacters(val) >= expected)) ?
                null : `You must enter a number of at least ${expected}`;
        }
    },


    'maxLength': {
        validate: (val, expected) => {
            if (expected === null) {
                return null;
            }
            return (val.toString().length <= expected) ?
                null : `You can only enter up to ${expected} characters`;
        }
    },


    'minLength': {
        validate: (val, expected) => {
            if (expected === null) {
                return null;
            }
            return (val.toString().length >= expected) ?
                null : `You must enter at least ${expected} characters`;
        }
    },


    'pattern': {
        //Example: data-pattern="^[a-z]{4}\\d{4}$"
        validate: (val, regExp) => {
            if (regExp === null) {
                return null;
            }
            return (RegExp(regExp).test(val)) ?
                null : `Your input must match the pattern ${regExp}`;
        }
    },


    'required': {
        validate: (val, required) => {
            if (required) {
                return (/^(?!\s*$).+/).test(Helpers.Booleans.isTruthyValue(val) ? val : '') ?
                    null : "You must complete this field";
            }
            return null;
        }
    },

    /**
     * 'requires' condition validates the element whether its requires is valid
     *  for example, login password depends on finishing the login username, the
     *  password value is a truthy value,
     *  if the required value which the username is null, it is invalid,
     * @param {string} val - The value to validate
     * @param {Object} required - The candidate object which contains the value the element name
     * @param {string}
     *
     * @example
     * {
     *    value: 123
     *    elementName: "user name"
     * }
     * @returns {null|string} - null if valid else default message
     */
    'requires': {

        validate: (val, required) => {

            //Skip if the value is not a truthy value as if for an empty field, the value is empty.
            if (!Helpers.Booleans.isTruthyValue(val)) {
                return null;
            }

            //If the required is not an object, return a message to tell the developer the configuration is wrong.
            if( required === null || required === undefined || (
                required && (
                    typeof required != 'object' ||
                    !required.hasOwnProperty('value') ||
                    !required.hasOwnProperty('elementName')
                    )
                )
            ) {
                console.error("You need to provide an object with the properties {value, elementName} for 'requires' validation", arguments);
            }
            return ( Helpers.Booleans.isTruthyValue(val) &&
                    Helpers.Booleans.isTruthyValue(required) &&
                    typeof required == 'object' &&
                    Helpers.Booleans.isTruthyValue(required.value)
                ) ? null :
                    Helpers.Booleans.isTruthyValue(required) &&
                    typeof required == 'object' ?
                    `You must complete ${required.elementName} first` :
                    `You must provide correct settings for required element first`
                 ;
        }
    },


    'match': {
        /**
         * Validate the equation of the value with the expected value
         * @param {string|number} val - The value
         * @param {string|number} expected - The expected value
         */
        validate: (val, expected) => {
            return (val == expected) ?
                null : "Doesn't match";
        }
    },


    'presets': {
        validate: (val, presets) => {
            if (presets === null) {
                return null;
            }
            if (typeof presets == 'string') {
                //jshint-ignore
                presets = eval(`(${presets})`);
                //jshint-ignore-end
            }
            for (var i = 0; i < presets.length; i++) {
                let result = Validate.exec({
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


/**
 * Validate: static class, provide validation functions
 */
class Validate {

    /**
     *
     * @param {Object} candidate - The candidate object
     * @param {?string|number} candidate.value - The validation value
     * @param {Array} candidate.options  - The validation options, a list of validation conditions and presets
     * @example
     * //options
     * [
     *     'maxValue',
     *     'minValue',
     *     'required'
     * ]
     * @returns {null|string} - null if valid, else message string
     */
    static exec(candidate) {
        //no options, it is not required
        if (!candidate.options) {
            return null;
        }
        //value is null and it is not required
        if (!Helpers.Booleans.isTruthyValue(candidate.value) && !candidate.options.required) {
            return null;
        }
        for (var conditionName in candidate.options) {
            let condition = this.getCondition(conditionName), message = null;
            if (condition) {
                message = condition.validate(candidate.value, candidate.options[conditionName]);
                if (!_.isEmpty(message)) {
                    return candidate.options.message ||                     // option message overrides all the message
                        candidate.options[(`${conditionName}Message`)] ||   // condition message
                        message ||                                          // condition default message
                        "You must enter a valid value";                     // default message
                }
            }
        }
        return null;
    }

    /**
     * Get validation condition by key name
     * @param {string} key - The condition name
     * @returns {Object} - The validation condition object
     */
    static getCondition(key) {
        return _conditions[key];
    }

    /**
     * Get validation preset by key name
     * @param {string} key - The preset name
     * @returns {Object} - The validation preset object
     */
    static getPreset(key) {
        return _presets[key];
    }

    /**
     * Add a validation preset
     * @param {string} name - The preset name
     * @param {Object} preset - The preset object
     * @returns {null}
     */
    static addPreset(name, preset) {
        if (_presets[name]) {
            console.warn(`Preset ${name} has already been defined, ignoring`);
        } else {
            _presets[name] = preset;
        }
        return null;
    }
}

export {Validate};

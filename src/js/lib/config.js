import $ from 'jquery';

/**
 * Utility function for merging multiple objects or sets of Elements data-* attributes into a single configuration object.
 * @param {Object} baseConfig - The object to merge all configuration onto (will be modified)
 * @param {Array} configs - All additional items of configuration
 * @returns {Object} config - The merged configuration object (mergedConfig)
 */
function mergeConfig(baseConfig, ...configs) {
    configs.forEach((config) => {
        // If the config item passed is an element, retrieve values for all the data-* attributes that match known
        // config keys based on the `baseConfig`
        if (config instanceof Element || config instanceof $) {
            let elementConfig = $(config).data();
            config = {};
            let keys = Object.keys(elementConfig);
            for(let i in keys) {
                let elConfigKey = keys[i];
                if (baseConfig.hasOwnProperty(elConfigKey)) {
                    config[elConfigKey] = elementConfig[elConfigKey];
                }
            }
        }

        $.extend(true, baseConfig, config);
    });

    return baseConfig;
}

/**
 * Decorator for classes to allow them to provide a default set of config values, and merge them with options provided to
 * functions as objects or from DOM element data-* attributes. Configuration is stored on the `config` property and
 * can be set via:
 *
 * ```
 * (new YourClass()).configure({ someProp: 'value' }, $('.some-el'))
 * ```
 *
 * Note that you need to call `configure()` at least once before using the config property.
 * @param {Object} defaults - A default set of config values
 * @return {Class} class - The configuration class
 */
function configurable(defaults) {
    return (Class) => {
        let validConfigKeys = Object.keys(defaults);

        Class.prototype.configure = function(...configs) {
            // Clone the defaults onto our own local `config` object first time around
            if (typeof this.config == 'undefined') {
                this.config = $.extend(true, {}, defaults);
            }

            mergeConfig(this.config, ...configs);

        };

        return Class;
    };
}

/**
 * Perform a shallow copy, renaming any keys specified in the mapping parameter.
 *
 * @param {Object} mapping - An object where the keys are the names of the keys to map *from* and the values are the names of the keys to map *to*.
 * @param {Object} obj - The object to map keys for.
 * @param {boolean} keepUnmapped - Whether to keep keys not specified in the mapping (default: true)
 * @returns {Object} mappedObj - The object with keys mapped.
 */
function mapKeys(mapping, obj, keepUnmapped = true) {
    let mappedObj = {};
    for(let originalKey in obj) {
        if (obj.hasOwnProperty(originalKey) && (keepUnmapped || typeof mapping[originalKey] != "undefined")) {
            mappedObj[mapping[originalKey] || originalKey] = obj[originalKey];
        }
    }
    return mappedObj;
}

export { mergeConfig, configurable, mapKeys };

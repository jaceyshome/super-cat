System.register(['jquery'], function (_export) {
    'use strict';

    var $;

    function mergeConfig(baseConfig) {
        for (var _len = arguments.length, configs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            configs[_key - 1] = arguments[_key];
        }

        configs.forEach(function (config) {
            if (config instanceof Element || config instanceof $) {
                var elementConfig = $(config).data();
                config = {};
                var keys = Object.keys(elementConfig);
                for (var i in keys) {
                    var elConfigKey = keys[i];
                    if (baseConfig.hasOwnProperty(elConfigKey)) {
                        config[elConfigKey] = elementConfig[elConfigKey];
                    }
                }
            }

            $.extend(true, baseConfig, config);
        });

        return baseConfig;
    }

    function configurable(defaults) {
        return function (Class) {
            var validConfigKeys = Object.keys(defaults);

            Class.prototype.configure = function () {
                if (typeof this.config == 'undefined') {
                    this.config = $.extend(true, {}, defaults);
                }

                for (var _len2 = arguments.length, configs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    configs[_key2] = arguments[_key2];
                }

                mergeConfig.apply(undefined, [this.config].concat(configs));
            };

            return Class;
        };
    }

    function mapKeys(mapping, obj) {
        var keepUnmapped = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

        var mappedObj = {};
        for (var originalKey in obj) {
            if (obj.hasOwnProperty(originalKey) && (keepUnmapped || typeof mapping[originalKey] != "undefined")) {
                mappedObj[mapping[originalKey] || originalKey] = obj[originalKey];
            }
        }
        return mappedObj;
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            _export('mergeConfig', mergeConfig);

            _export('configurable', configurable);

            _export('mapKeys', mapKeys);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxhQUFTLFdBQVcsQ0FBQyxVQUFVLEVBQWM7MENBQVQsT0FBTztBQUFQLG1CQUFPOzs7QUFDdkMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBSztBQUd4QixnQkFBSSxNQUFNLFlBQVksT0FBTyxJQUFJLE1BQU0sWUFBWSxDQUFDLEVBQUU7QUFDbEQsb0JBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNyQyxzQkFBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLG9CQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3RDLHFCQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtBQUNmLHdCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsd0JBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUN4Qyw4QkFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDcEQ7aUJBQ0o7YUFDSjs7QUFFRCxhQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDOztBQUVILGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztBQWVELGFBQVMsWUFBWSxDQUFDLFFBQVEsRUFBRTtBQUM1QixlQUFPLFVBQUMsS0FBSyxFQUFLO0FBQ2QsZ0JBQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTVDLGlCQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxZQUFxQjtBQUU3QyxvQkFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFO0FBQ25DLHdCQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDOUM7O21EQUptQyxPQUFPO0FBQVAsMkJBQU87OztBQU0zQywyQkFBVyxtQkFBQyxJQUFJLENBQUMsTUFBTSxTQUFLLE9BQU8sRUFBQyxDQUFDO2FBRXhDLENBQUM7O0FBRUYsbUJBQU8sS0FBSyxDQUFDO1NBQ2hCLENBQUM7S0FDTDs7QUFVRCxhQUFTLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUF1QjtZQUFyQixZQUFZLHlEQUFHLElBQUk7O0FBQzlDLFlBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNuQixhQUFJLElBQUksV0FBVyxJQUFJLEdBQUcsRUFBRTtBQUN4QixnQkFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFlBQVksSUFBSSxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLENBQUEsQUFBQyxFQUFFO0FBQ2pHLHlCQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyRTtTQUNKO0FBQ0QsZUFBTyxTQUFTLENBQUM7S0FDcEI7Ozs7Ozs7bUNBRVEsV0FBVzs7b0NBQUUsWUFBWTs7K0JBQUUsT0FBTyIsImZpbGUiOiJqcy9saWIvY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciBtZXJnaW5nIG11bHRpcGxlIG9iamVjdHMgb3Igc2V0cyBvZiBFbGVtZW50cyBkYXRhLSogYXR0cmlidXRlcyBpbnRvIGEgc2luZ2xlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IGJhc2VDb25maWcgLSBUaGUgb2JqZWN0IHRvIG1lcmdlIGFsbCBjb25maWd1cmF0aW9uIG9udG8gKHdpbGwgYmUgbW9kaWZpZWQpXG4gKiBAcGFyYW0ge0FycmF5fSBjb25maWdzIC0gQWxsIGFkZGl0aW9uYWwgaXRlbXMgb2YgY29uZmlndXJhdGlvblxuICogQHJldHVybnMge09iamVjdH0gY29uZmlnIC0gVGhlIG1lcmdlZCBjb25maWd1cmF0aW9uIG9iamVjdCAobWVyZ2VkQ29uZmlnKVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbmZpZyhiYXNlQ29uZmlnLCAuLi5jb25maWdzKSB7XG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgICAgLy8gSWYgdGhlIGNvbmZpZyBpdGVtIHBhc3NlZCBpcyBhbiBlbGVtZW50LCByZXRyaWV2ZSB2YWx1ZXMgZm9yIGFsbCB0aGUgZGF0YS0qIGF0dHJpYnV0ZXMgdGhhdCBtYXRjaCBrbm93blxuICAgICAgICAvLyBjb25maWcga2V5cyBiYXNlZCBvbiB0aGUgYGJhc2VDb25maWdgXG4gICAgICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGNvbmZpZyBpbnN0YW5jZW9mICQpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q29uZmlnID0gJChjb25maWcpLmRhdGEoKTtcbiAgICAgICAgICAgIGNvbmZpZyA9IHt9O1xuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50Q29uZmlnKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsQ29uZmlnS2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYmFzZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShlbENvbmZpZ0tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnW2VsQ29uZmlnS2V5XSA9IGVsZW1lbnRDb25maWdbZWxDb25maWdLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQuZXh0ZW5kKHRydWUsIGJhc2VDb25maWcsIGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYmFzZUNvbmZpZztcbn1cblxuLyoqXG4gKiBEZWNvcmF0b3IgZm9yIGNsYXNzZXMgdG8gYWxsb3cgdGhlbSB0byBwcm92aWRlIGEgZGVmYXVsdCBzZXQgb2YgY29uZmlnIHZhbHVlcywgYW5kIG1lcmdlIHRoZW0gd2l0aCBvcHRpb25zIHByb3ZpZGVkIHRvXG4gKiBmdW5jdGlvbnMgYXMgb2JqZWN0cyBvciBmcm9tIERPTSBlbGVtZW50IGRhdGEtKiBhdHRyaWJ1dGVzLiBDb25maWd1cmF0aW9uIGlzIHN0b3JlZCBvbiB0aGUgYGNvbmZpZ2AgcHJvcGVydHkgYW5kXG4gKiBjYW4gYmUgc2V0IHZpYTpcbiAqXG4gKiBgYGBcbiAqIChuZXcgWW91ckNsYXNzKCkpLmNvbmZpZ3VyZSh7IHNvbWVQcm9wOiAndmFsdWUnIH0sICQoJy5zb21lLWVsJykpXG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgeW91IG5lZWQgdG8gY2FsbCBgY29uZmlndXJlKClgIGF0IGxlYXN0IG9uY2UgYmVmb3JlIHVzaW5nIHRoZSBjb25maWcgcHJvcGVydHkuXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgLSBBIGRlZmF1bHQgc2V0IG9mIGNvbmZpZyB2YWx1ZXNcbiAqIEByZXR1cm4ge0NsYXNzfSBjbGFzcyAtIFRoZSBjb25maWd1cmF0aW9uIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNvbmZpZ3VyYWJsZShkZWZhdWx0cykge1xuICAgIHJldHVybiAoQ2xhc3MpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkQ29uZmlnS2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRzKTtcblxuICAgICAgICBDbGFzcy5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24oLi4uY29uZmlncykge1xuICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIGRlZmF1bHRzIG9udG8gb3VyIG93biBsb2NhbCBgY29uZmlnYCBvYmplY3QgZmlyc3QgdGltZSBhcm91bmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lcmdlQ29uZmlnKHRoaXMuY29uZmlnLCAuLi5jb25maWdzKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDbGFzcztcbiAgICB9O1xufVxuXG4vKipcbiAqIFBlcmZvcm0gYSBzaGFsbG93IGNvcHksIHJlbmFtaW5nIGFueSBrZXlzIHNwZWNpZmllZCBpbiB0aGUgbWFwcGluZyBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1hcHBpbmcgLSBBbiBvYmplY3Qgd2hlcmUgdGhlIGtleXMgYXJlIHRoZSBuYW1lcyBvZiB0aGUga2V5cyB0byBtYXAgKmZyb20qIGFuZCB0aGUgdmFsdWVzIGFyZSB0aGUgbmFtZXMgb2YgdGhlIGtleXMgdG8gbWFwICp0byouXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIG9iamVjdCB0byBtYXAga2V5cyBmb3IuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGtlZXBVbm1hcHBlZCAtIFdoZXRoZXIgdG8ga2VlcCBrZXlzIG5vdCBzcGVjaWZpZWQgaW4gdGhlIG1hcHBpbmcgKGRlZmF1bHQ6IHRydWUpXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBtYXBwZWRPYmogLSBUaGUgb2JqZWN0IHdpdGgga2V5cyBtYXBwZWQuXG4gKi9cbmZ1bmN0aW9uIG1hcEtleXMobWFwcGluZywgb2JqLCBrZWVwVW5tYXBwZWQgPSB0cnVlKSB7XG4gICAgbGV0IG1hcHBlZE9iaiA9IHt9O1xuICAgIGZvcihsZXQgb3JpZ2luYWxLZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkob3JpZ2luYWxLZXkpICYmIChrZWVwVW5tYXBwZWQgfHwgdHlwZW9mIG1hcHBpbmdbb3JpZ2luYWxLZXldICE9IFwidW5kZWZpbmVkXCIpKSB7XG4gICAgICAgICAgICBtYXBwZWRPYmpbbWFwcGluZ1tvcmlnaW5hbEtleV0gfHwgb3JpZ2luYWxLZXldID0gb2JqW29yaWdpbmFsS2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwcGVkT2JqO1xufVxuXG5leHBvcnQgeyBtZXJnZUNvbmZpZywgY29uZmlndXJhYmxlLCBtYXBLZXlzIH07XG4iXX0=

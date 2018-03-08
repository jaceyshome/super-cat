System.register([], function (_export) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            (function () {
                var Garfield,
                    filter,
                    each,
                    isArray,
                    isFunction,
                    tryCall,
                    toString = ({}).toString,
                    uid = 0;

                filter = function (input, callback) {
                    var out = [],
                        i = 0;
                    for (i = 0; i < input.length; i++) {
                        if (callback(input[i])) {
                            out.push(input[i]);
                        }
                    }
                    return out;
                };

                each = function (input, callback) {
                    var i;
                    for (i = 0; i < input.length; i++) {
                        callback(input[i], i);
                    }
                };

                isArray = function (obj) {
                    return toString.call(obj) === '[object Array]';
                };

                isFunction = function (fun) {
                    return typeof fun === 'function';
                };

                tryCall = function (fn, context, args, fallback, onError) {
                    try {
                        return fn.apply(context, args);
                    } catch (error) {
                        if (isFunction(onError)) {
                            try {
                                onError(error);
                            } catch (innerError) {
                                throw error;
                            }
                        } else {
                            throw error;
                        }
                    }
                    return fallback;
                };

                Garfield = function (options) {
                    var self = this;
                    this.bindings = [];
                    this.hooks = {};
                    options = options || {};

                    this.options = {
                        init: options.init || Garfield.defaults.init,
                        initAll: options.initAll || Garfield.defaults.initAll,
                        loader: options.loader || Garfield.defaults.loader
                    };

                    each(['beforeInit', 'beforeInitAll', 'afterInit', 'afterInitAll', 'beforeLoad', 'afterLoad', 'onBind', 'onInit', 'onSkipBinding', 'onSkipInit', 'onSkipInitAll', 'onError'], function (hookName) {
                        if (typeof options[hookName] !== 'undefined') {
                            self.addHook(hookName, options[hookName]);
                        }
                    });

                    this.select = options.select || Garfield.defaults.select;
                    this.require = options.require || Garfield.defaults.require;
                };

                Garfield.defaults = {
                    init: 'init',
                    initAll: 'initAll',
                    select: function select(selector, context) {
                        return context.querySelectorAll(selector);
                    },
                    require: window.require,
                    loader: 'require'
                };

                Garfield.loaders = {
                    "require": function require(paths, callback, error) {
                        this.require([paths], callback, error);
                    },
                    "systemjs": function systemjs(paths, callback, error) {
                        System['import'](paths).then(callback, error);
                    }
                };

                Garfield.prototype.load = function (paths, callback, error) {
                    Garfield.loaders[this.options.loader].call(this, paths, callback, error);
                };

                Garfield.prototype.processElementConfig = function (el, binding) {
                    return binding.config;
                };

                Garfield.prototype.addHook = function (name, hook) {
                    if (!isArray(this.hooks[name])) {
                        this.hooks[name] = [];
                    }

                    if (isArray(hook)) {
                        this.hooks[name].push.apply(this.hooks[name], hook);
                    } else if (isFunction(hook)) {
                        this.hooks[name].push(hook);
                    } else {
                        throw new Error('Invalid hook ' + typeof hook + ': ' + hook);
                    }
                };

                Garfield.prototype.callHook = function (name) {
                    var self = this,
                        hookArgs;

                    if (typeof this.hooks[name] !== 'undefined') {
                        hookArgs = [].slice.call(arguments, 1);
                        each(this.hooks[name], function (hook) {
                            try {
                                hook.apply(self, hookArgs);
                            } catch (error) {
                                if (name === 'onError') {
                                    throw error;
                                }
                                self.callHook('onError', error);
                            }
                        });

                        return true;
                    }

                    return false;
                };

                Garfield.prototype.bind = function () {
                    var self = this;

                    if (typeof arguments[0] === 'string') {
                        this.bindings.push({
                            id: uid++,
                            selector: arguments[0],
                            module: arguments[1]
                        });
                        this.callHook('onBind', this.bindings[this.bindings.length - 1]);
                    } else if (isArray(arguments[0])) {
                        each(arguments[0], function (binding) {
                            binding.id = uid++;
                            binding.module = binding.module || binding.require || undefined;
                            self.bindings.push(binding);
                            self.callHook('onBind', self.bindings[self.bindings.length - 1]);
                        });
                    } else if (typeof arguments[0] === "object") {
                        arguments[0].id = uid++;
                        arguments[0].module = arguments[0].module || arguments[0].require || undefined;
                        this.bindings.push(arguments[0]);
                        this.callHook('onBind', this.bindings[this.bindings.length - 1]);
                    } else {
                        throw new Error("Invalid binding format.");
                    }
                };

                Garfield.prototype.applyBinding = function (els, binding) {
                    var self = this,
                        applyModule,
                        errorHook = function errorHook(error) {
                        if (!self.callHook('onError', error)) {
                            throw error;
                        }
                    };

                    els = filter(els, function (el) {
                        if (typeof binding.filter === 'function' && tryCall(binding.filter, binding, [el], false, errorHook)) {
                            return false;
                        }

                        if (!binding.multiple && typeof el._garfieldBound !== 'undefined' && el._garfieldBound[binding.id]) {
                            return false;
                        }

                        if (typeof binding.config === 'object' && binding.config.disabled) {
                            return false;
                        }

                        return true;
                    });

                    if (els.length === 0) {
                        self.callHook('onSkipBinding', binding);
                        return;
                    }

                    applyModule = function (module) {
                        var initAll, initAllThisVal, init, initThisVal;

                        if (isFunction(binding.initAll)) {
                            initAll = binding.initAll;
                            initAllThisVal = self;
                        }

                        if (isFunction(binding.init)) {
                            init = binding.init;
                            initThisVal = self;
                        }

                        if (typeof module === 'object' || isFunction(module)) {
                            if (!initAll) {
                                initAll = module[binding.initAll || self.options.initAll];
                                initAllThisVal = module;
                            }

                            if (!init) {
                                init = module[binding.init || self.options.init];
                                initThisVal = module;
                            }

                            if (isFunction(module) && !initAll && !init) {
                                init = module;
                                initThisVal = module;
                            }
                        }

                        self.callHook('afterLoad', els, binding);

                        if (isFunction(initAll)) {
                            if (typeof binding.config === 'object' && binding.config.disabled) {
                                self.callHook('onSkipInitAll', els, binding);
                            } else {
                                self.callHook('beforeInitAll', els, binding);
                                tryCall(initAll, initAllThisVal, [els, binding.config], null, errorHook);
                                each(els, function (el) {
                                    (el._garfieldBound = el._garfieldBound || {})[binding.id] = true;
                                });
                                self.callHook('afterInitAll', els, binding);
                            }
                        }

                        if (isFunction(init)) {
                            each(els, function (el) {
                                var elConfig = self.processElementConfig(el, binding);
                                if (typeof elConfig === 'object' && elConfig.disabled) {
                                    self.callHook('onSkipInit', el, binding);
                                } else {
                                    self.callHook('beforeInit', el, binding);
                                    tryCall(init, initThisVal, [el, elConfig], null, errorHook);
                                    (el._garfieldBound = el._garfieldBound || {})[binding.id] = true;
                                    self.callHook('afterInit', el, binding);
                                }
                            });
                        }
                    };

                    if (typeof binding.module == 'string' || isArray(binding.module)) {
                        this.callHook('beforeLoad', els, binding);
                        this.load(binding.module, applyModule, function (error) {
                            self.callHook('onError', error);
                        });
                    } else if (isFunction(binding.module) || typeof binding.module == 'object') {
                        applyModule(binding.module);
                    }
                };

                Garfield.prototype.init = function (target) {
                    var i,
                        j,
                        binding,
                        elements,
                        self = this;

                    if (typeof target === 'undefined') {
                        target = window.document;
                    }

                    this.callHook('onInit', target);

                    each(this.bindings, function (binding) {
                        var els;

                        if (typeof binding.selector !== 'string') {
                            throw new Error("Invalid binding selector.");
                        }

                        els = self.select(binding.selector, target);

                        if (els.length > 0) {
                            self.applyBinding(els, binding);
                        } else {
                            self.callHook('onSkipBinding', binding);
                        }
                    });
                };

                if (typeof window.define !== 'undefined' && define.amd) {
                    define(function () {
                        return Garfield;
                    });
                } else {
                    window.Garfield = Garfield;
                }
            })();
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QzlCLDhCQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDNUI7O0FBRUQsd0JBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUVoQyx3QkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBUyxPQUFPLEVBQUU7QUFDbEMsNEJBQUksR0FBRyxDQUFDOztBQUVSLDRCQUFHLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDckMsa0NBQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQzt5QkFDaEQ7O0FBRUQsMkJBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRTVDLDRCQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2YsZ0NBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3lCQUNuQyxNQUFNO0FBQ0gsZ0NBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3lCQUMzQztxQkFDSixDQUFDLENBQUM7aUJBQ04sQ0FBQzs7QUFFRixvQkFBRyxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDbkQsMEJBQU0sQ0FBQyxZQUFXO0FBQUUsK0JBQU8sUUFBUSxDQUFDO3FCQUFFLENBQUMsQ0FBQztpQkFDM0MsTUFBTTtBQUNILDBCQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztpQkFDOUI7YUFDSixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJqcy9saWIvZ2FyZmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogR2FyZmllbGQgbG9hZGVyXG4qIFJlZmVyZW5jZe+8miBodHRwczovL2JpdGJ1Y2tldC5vcmcvc3lkbmV5dW5pL2dhcmZpZWxkXG4qKi9cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgR2FyZmllbGQsXG4gICAgICAgIGZpbHRlciwgZWFjaCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgdHJ5Q2FsbCxcbiAgICAgICAgdG9TdHJpbmcgPSAoe30pLnRvU3RyaW5nLFxuICAgICAgICB1aWQgPSAwO1xuXG4gICAgZmlsdGVyID0gZnVuY3Rpb24oaW5wdXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBvdXQgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY2FsbGJhY2soaW5wdXRbaV0pKSB7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcblxuICAgIGVhY2ggPSBmdW5jdGlvbihpbnB1dCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhpbnB1dFtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG5cbiAgICBpc0Z1bmN0aW9uID0gZnVuY3Rpb24oZnVuKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZnVuID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG5cbiAgICB0cnlDYWxsID0gZnVuY3Rpb24oZm4sIGNvbnRleHQsIGFyZ3MsIGZhbGxiYWNrLCBvbkVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24ob25FcnJvcikpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGlubmVyRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfTtcblxuICAgIEdhcmZpZWxkID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5ob29rcyA9IHt9O1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpbml0OiBvcHRpb25zLmluaXQgfHwgR2FyZmllbGQuZGVmYXVsdHMuaW5pdCxcbiAgICAgICAgICAgIGluaXRBbGw6IG9wdGlvbnMuaW5pdEFsbCB8fCBHYXJmaWVsZC5kZWZhdWx0cy5pbml0QWxsLFxuICAgICAgICAgICAgbG9hZGVyOiBvcHRpb25zLmxvYWRlciB8fCBHYXJmaWVsZC5kZWZhdWx0cy5sb2FkZXJcbiAgICAgICAgfTtcblxuICAgICAgICBlYWNoKFsgJ2JlZm9yZUluaXQnLCAnYmVmb3JlSW5pdEFsbCcsICdhZnRlckluaXQnLCAnYWZ0ZXJJbml0QWxsJywgJ2JlZm9yZUxvYWQnLCAnYWZ0ZXJMb2FkJywgJ29uQmluZCcsICdvbkluaXQnLCAnb25Ta2lwQmluZGluZycsICdvblNraXBJbml0JywgJ29uU2tpcEluaXRBbGwnLCAnb25FcnJvcicgXSwgZnVuY3Rpb24oaG9va05hbWUpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBvcHRpb25zW2hvb2tOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFkZEhvb2soaG9va05hbWUsIG9wdGlvbnNbaG9va05hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3QgPSBvcHRpb25zLnNlbGVjdCB8fCBHYXJmaWVsZC5kZWZhdWx0cy5zZWxlY3Q7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9IG9wdGlvbnMucmVxdWlyZSB8fCBHYXJmaWVsZC5kZWZhdWx0cy5yZXF1aXJlO1xuICAgIH07XG5cbiAgICBHYXJmaWVsZC5kZWZhdWx0cyA9IHtcbiAgICAgICAgaW5pdDogJ2luaXQnLFxuICAgICAgICBpbml0QWxsOiAnaW5pdEFsbCcsXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlOiB3aW5kb3cucmVxdWlyZSxcbiAgICAgICAgbG9hZGVyOiAncmVxdWlyZSdcbiAgICB9O1xuXG4gICAgR2FyZmllbGQubG9hZGVycyA9IHtcbiAgICAgICAgXCJyZXF1aXJlXCI6IGZ1bmN0aW9uKHBhdGhzLCBjYWxsYmFjaywgZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZShbIHBhdGhzIF0sIGNhbGxiYWNrLCBlcnJvcik7XG4gICAgICAgIH0sXG4gICAgICAgIFwic3lzdGVtanNcIjogZnVuY3Rpb24ocGF0aHMsIGNhbGxiYWNrLCBlcnJvcikge1xuICAgICAgICAgICAgU3lzdGVtLmltcG9ydChwYXRocykudGhlbihjYWxsYmFjaywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdhcmZpZWxkLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24ocGF0aHMsIGNhbGxiYWNrLCBlcnJvcikge1xuICAgICAgICBHYXJmaWVsZC5sb2FkZXJzW3RoaXMub3B0aW9ucy5sb2FkZXJdLmNhbGwodGhpcywgcGF0aHMsIGNhbGxiYWNrLCBlcnJvcik7XG4gICAgfTtcblxuICAgIC8vIFBsYWNlaG9sZGVyIGZvciBqcXVlcnkgZXRjIHRvIG92ZXJyaWRlIHdpdGggaXRzIG93biBlbGVtZW50IHByb2Nlc3NpbmcgY29uZmlnIHN0dWZmXG4gICAgLy8gVGFrZXMgdGhlIGJpbmRpbmcgYW5kIGVsZW1lbnQgYW5kIHJldHVybnMgdGhlIGNvbmZpZyB0byBiZSBwYXNzZWQgdG8gdGhlIGluaXQgbWV0aG9kXG4gICAgR2FyZmllbGQucHJvdG90eXBlLnByb2Nlc3NFbGVtZW50Q29uZmlnID0gZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmcuY29uZmlnO1xuICAgIH07XG5cbiAgICBHYXJmaWVsZC5wcm90b3R5cGUuYWRkSG9vayA9IGZ1bmN0aW9uKG5hbWUsIGhvb2spIHtcbiAgICAgICAgaWYoIWlzQXJyYXkodGhpcy5ob29rc1tuYW1lXSkpIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3NbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzQXJyYXkoaG9vaykpIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3NbbmFtZV0ucHVzaC5hcHBseSh0aGlzLmhvb2tzW25hbWVdLCBob29rKTtcbiAgICAgICAgfSBlbHNlIGlmKGlzRnVuY3Rpb24oaG9vaykpIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3NbbmFtZV0ucHVzaChob29rKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBob29rICcgKyAodHlwZW9mIGhvb2spICsgJzogJyArIGhvb2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdhcmZpZWxkLnByb3RvdHlwZS5jYWxsSG9vayA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgaG9va0FyZ3M7XG5cbiAgICAgICAgaWYodHlwZW9mIHRoaXMuaG9va3NbbmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBob29rQXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIGVhY2godGhpcy5ob29rc1tuYW1lXSwgZnVuY3Rpb24oaG9vaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhvb2suYXBwbHkoc2VsZiwgaG9va0FyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYobmFtZSA9PT0gJ29uRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxIb29rKCdvbkVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIC8vIG1vZHVsZTogWyBwYXRoLCBwYXRoIF0gfCBjYWxsYmFjayB8IG9iamVjdCB8IHBhdGgsXG4gICAgLy8gZmlsdGVyOiBmaWx0ZXIsXG4gICAgLy8gY29uZmlnOiBjb25maWdcbiAgICAvLyBpbml0OiAnaW5pdCcgfCBmdW5jdGlvblxuICAgIC8vIGluaXRBbGw6ICdpbml0QWxsJyB8IGZ1bmN0aW9uXG4gICAgLy8gbXVsdGlwbGU6IGZhbHNlXG4gICAgR2FyZmllbGQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiB1aWQrKyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogYXJndW1lbnRzWzFdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbEhvb2soJ29uQmluZCcsIHRoaXMuYmluZGluZ3NbdGhpcy5iaW5kaW5ncy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH0gZWxzZSBpZihpc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgIGVhY2goYXJndW1lbnRzWzBdLCBmdW5jdGlvbihiaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5pZCA9IHVpZCsrO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcubW9kdWxlID0gYmluZGluZy5tb2R1bGUgfHwgYmluZGluZy5yZXF1aXJlIHx8IHVuZGVmaW5lZDsgLy8gRml4IHVwIGJpbmRpbmdzIHN0aWxsIHVzaW5nIHRoZSBvbGQgXCJyZXF1aXJlXCIgcHJvcGVydHlcbiAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmdzLnB1c2goYmluZGluZyk7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsSG9vaygnb25CaW5kJywgc2VsZi5iaW5kaW5nc1tzZWxmLmJpbmRpbmdzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXS5pZCA9IHVpZCsrO1xuICAgICAgICAgICAgYXJndW1lbnRzWzBdLm1vZHVsZSA9IGFyZ3VtZW50c1swXS5tb2R1bGUgfHwgYXJndW1lbnRzWzBdLnJlcXVpcmUgfHwgdW5kZWZpbmVkOyAvLyBGaXggdXAgYmluZGluZ3Mgc3RpbGwgdXNpbmcgdGhlIG9sZCBcInJlcXVpcmVcIiBwcm9wZXJ0eVxuICAgICAgICAgICAgdGhpcy5iaW5kaW5ncy5wdXNoKGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgICB0aGlzLmNhbGxIb29rKCdvbkJpbmQnLCB0aGlzLmJpbmRpbmdzW3RoaXMuYmluZGluZ3MubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiaW5kaW5nIGZvcm1hdC5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR2FyZmllbGQucHJvdG90eXBlLmFwcGx5QmluZGluZyA9IGZ1bmN0aW9uKGVscywgYmluZGluZykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBhcHBseU1vZHVsZSxcbiAgICAgICAgICAgIGVycm9ySG9vayA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGNhbGwgdGhlIG9uRXJyb3IgaG9vayBhbmQgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIG5vbmUgYXJlIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICBpZighc2VsZi5jYWxsSG9vaygnb25FcnJvcicsIGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGVscyA9IGZpbHRlcihlbHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAvLyBUaGUgZmlsdGVyIGZvciB0aGlzIGJpbmRpbmcgaW5kaWNhdGVzIGl0IHNob3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGVsZW1lbnRcbiAgICAgICAgICAgIGlmKHR5cGVvZiBiaW5kaW5nLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0cnlDYWxsKGJpbmRpbmcuZmlsdGVyLCBiaW5kaW5nLCBbIGVsIF0sIGZhbHNlLCBlcnJvckhvb2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBoYXMgcHJldmlvdXNseSBiZWVuIGJvdW5kIHdpdGggdGhpcyBiaW5kaW5nLCBzbyB3ZSB3b24ndCBhcHBseSBpdCBhZ2FpbiB1bmxlc3NcbiAgICAgICAgICAgIC8vIHRoZSBiaW5kaW5nIGhhcyBzcGVjaWZpY2FsbHkgaW5kaWNhdGVkIHRoYXQncyBhbGxvd2VkXG4gICAgICAgICAgICBpZighYmluZGluZy5tdWx0aXBsZSAmJiAodHlwZW9mIGVsLl9nYXJmaWVsZEJvdW5kICE9PSAndW5kZWZpbmVkJyAmJiBlbC5fZ2FyZmllbGRCb3VuZFtiaW5kaW5nLmlkXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIGNvbmZpZ3VyZWQgYXMgYmVpbmcgZGlzYWJsZWQsIHRoZW4gZG9uJ3QgbG9hZCBpdFxuICAgICAgICAgICAgaWYodHlwZW9mIGJpbmRpbmcuY29uZmlnID09PSAnb2JqZWN0JyAmJiBiaW5kaW5nLmNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIGVsZW1lbnRzIGZvdW5kIG9yIGFsbCBmb3VuZCBlbGVtZW50cyB3b3VuZCB1cCBiZWluZyBmaWx0ZXJlZCBvdXRcbiAgICAgICAgaWYoZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZi5jYWxsSG9vaygnb25Ta2lwQmluZGluZycsIGJpbmRpbmcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHlNb2R1bGUgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgIHZhciBpbml0QWxsLCBpbml0QWxsVGhpc1ZhbCwgaW5pdCwgaW5pdFRoaXNWYWw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBiaW5kaW5nIHNwZWNpZmllcyBhbiBpbml0QWxsIGZ1bmN0aW9uLCB3ZSdsbCB1c2UgdGhhdCByYXRoZXIgdGhhbiB0cnlpbmcgdG8gZ2V0IG9uZSBvZmYgdGhlIG1vZHVsZSB3ZSBsb2FkZWRcbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oYmluZGluZy5pbml0QWxsKSkge1xuICAgICAgICAgICAgICAgIGluaXRBbGwgPSBiaW5kaW5nLmluaXRBbGw7XG4gICAgICAgICAgICAgICAgaW5pdEFsbFRoaXNWYWwgPSBzZWxmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTYW1lIGFzIGFib3ZlIGZvciB0aGUgaW5pdEFsbCBmdW5jdGlvbiwgY2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBjYWxsIHRoZSBiaW5kaW5nIGNvbmZpZydzIGluaXQgcHJvcGVydHlcbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oYmluZGluZy5pbml0KSkge1xuICAgICAgICAgICAgICAgIGluaXQgPSBiaW5kaW5nLmluaXQ7XG4gICAgICAgICAgICAgICAgaW5pdFRoaXNWYWwgPSBzZWxmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSBsb2FkZWQgc29tZXRoaW5nIHRoYXQgbG9va3MgbGlrZSBhbiBvYmplY3QsIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGdvdCBpbml0IGFuZC9vciBpbml0QWxsIG1ldGhvZHMgd2UgY2FuIGNhbGxcbiAgICAgICAgICAgIC8vIHRvIGluaXRpYWxpc2UgdGhpcyBiaW5kaW5nXG4gICAgICAgICAgICBpZih0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyB8fCBpc0Z1bmN0aW9uKG1vZHVsZSkpIHtcbiAgICAgICAgICAgICAgICBpZighaW5pdEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbml0QWxsID0gbW9kdWxlW2JpbmRpbmcuaW5pdEFsbCB8fCBzZWxmLm9wdGlvbnMuaW5pdEFsbF07XG4gICAgICAgICAgICAgICAgICAgIGluaXRBbGxUaGlzVmFsID0gbW9kdWxlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCFpbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXQgPSBtb2R1bGVbYmluZGluZy5pbml0IHx8IHNlbGYub3B0aW9ucy5pbml0XTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFRoaXNWYWwgPSBtb2R1bGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGZ1bmN0aW9uIGJ1dCBubyBpbml0IG9yIGluaXRBbGwgcHJvcGVydGllcywgc28gdHJ5IGp1c3QgY2FsbGluZyBpdFxuICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24obW9kdWxlKSAmJiAhaW5pdEFsbCAmJiAhaW5pdCkge1xuICAgICAgICAgICAgICAgICAgICBpbml0ID0gbW9kdWxlO1xuICAgICAgICAgICAgICAgICAgICBpbml0VGhpc1ZhbCA9IG1vZHVsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEhvb2soJ2FmdGVyTG9hZCcsIGVscywgYmluZGluZyk7XG5cbiAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHN1cHBvcnRzIGJlaW5nIGluaXRpYWxpc2VkIGFjcm9zcyBhIHNldCBvZiBlbGVtZW50cyBpbiBvbmUgZ29cbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oaW5pdEFsbCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgYmluZGluZy5jb25maWcgPT09ICdvYmplY3QnICYmIGJpbmRpbmcuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEhvb2soJ29uU2tpcEluaXRBbGwnLCBlbHMsIGJpbmRpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEhvb2soJ2JlZm9yZUluaXRBbGwnLCBlbHMsIGJpbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0cnlDYWxsKGluaXRBbGwsIGluaXRBbGxUaGlzVmFsLCBbIGVscywgYmluZGluZy5jb25maWcgXSwgbnVsbCwgZXJyb3JIb29rKTtcbiAgICAgICAgICAgICAgICAgICAgZWFjaChlbHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZWwuX2dhcmZpZWxkQm91bmQgPSBlbC5fZ2FyZmllbGRCb3VuZCB8fCB7fSlbYmluZGluZy5pZF0gPSB0cnVlOyAvLyBNYXJrIHRoZSBlbGVtZW50IGFzIGJvdW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxIb29rKCdhZnRlckluaXRBbGwnLCBlbHMsIGJpbmRpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgc3VwcG9ydHMgYmVpbmcgaW5pdGlhbGlzZWQgZm9yIGVhY2ggZWxlbWVudCBzZXBhcmF0ZWx5XG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKGluaXQpKSB7XG4gICAgICAgICAgICAgICAgZWFjaChlbHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbENvbmZpZyA9IHNlbGYucHJvY2Vzc0VsZW1lbnRDb25maWcoZWwsIGJpbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZWxDb25maWcgPT09ICdvYmplY3QnICYmIGVsQ29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxIb29rKCdvblNraXBJbml0JywgZWwsIGJpbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsSG9vaygnYmVmb3JlSW5pdCcsIGVsLCBiaW5kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeUNhbGwoaW5pdCwgaW5pdFRoaXNWYWwsIFsgZWwsIGVsQ29uZmlnIF0sIG51bGwsIGVycm9ySG9vayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZWwuX2dhcmZpZWxkQm91bmQgPSBlbC5fZ2FyZmllbGRCb3VuZCB8fCB7fSlbYmluZGluZy5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsSG9vaygnYWZ0ZXJJbml0JywgZWwsIGJpbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYodHlwZW9mIGJpbmRpbmcubW9kdWxlID09ICdzdHJpbmcnIHx8IGlzQXJyYXkoYmluZGluZy5tb2R1bGUpKSB7XG4gICAgICAgICAgICAvLyBTdHJpbmdzIGFuZCBhcnJheXMgb2Ygc3RyaW5ncyBtZWFuIHdlJ3JlIHRhbGtpbmcgYWJvdXQgXCJleHRlcm5hbFwiIG1vZHVsZXMgaS5lLiBSZXF1aXJlSlMsIFN5c3RlbUpTIGV0Y1xuICAgICAgICAgICAgdGhpcy5jYWxsSG9vaygnYmVmb3JlTG9hZCcsIGVscywgYmluZGluZyk7XG4gICAgICAgICAgICB0aGlzLmxvYWQoYmluZGluZy5tb2R1bGUsIGFwcGx5TW9kdWxlLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsbEhvb2soJ29uRXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmKGlzRnVuY3Rpb24oYmluZGluZy5tb2R1bGUpIHx8IHR5cGVvZiBiaW5kaW5nLm1vZHVsZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gT2JqZWN0cyBvciBmdW5jdGlvbnMgYXMgbW9kdWxlcyBtZWFucyB3ZSBqdXN0IGRpcmVjdGx5IGNhbGwgdGhlIGZ1bmN0aW9uIG9yIGNhbGwgaW5pdCBhbmQgaW5pdEFsbCBvbiB0aGUgb2JqZWN0IHByb3ZpZGVkXG4gICAgICAgICAgICBhcHBseU1vZHVsZShiaW5kaW5nLm1vZHVsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR2FyZmllbGQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgdmFyIGksIGosIGJpbmRpbmcsXG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxIb29rKCdvbkluaXQnLCB0YXJnZXQpO1xuXG4gICAgICAgIGVhY2godGhpcy5iaW5kaW5ncywgZnVuY3Rpb24oYmluZGluZykge1xuICAgICAgICAgICAgdmFyIGVscztcblxuICAgICAgICAgICAgaWYodHlwZW9mIGJpbmRpbmcuc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiaW5kaW5nIHNlbGVjdG9yLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzID0gc2VsZi5zZWxlY3QoYmluZGluZy5zZWxlY3RvciwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgaWYoZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFwcGx5QmluZGluZyhlbHMsIGJpbmRpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGxIb29rKCdvblNraXBCaW5kaW5nJywgYmluZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZih0eXBlb2Ygd2luZG93LmRlZmluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBHYXJmaWVsZDsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LkdhcmZpZWxkID0gR2FyZmllbGQ7XG4gICAgfVxufSkoKTtcbiJdfQ==

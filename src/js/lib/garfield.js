/**
* University of Sydney Garfield loader
* Reference： https://bitbucket.org/sydneyuni/garfield
**/
(function() {
    var Garfield,
        filter, each, isArray, isFunction, tryCall,
        toString = ({}).toString,
        uid = 0;

    filter = function(input, callback) {
        var out = [],
            i = 0;
        for(i = 0; i < input.length; i++) {
            if(callback(input[i])) {
                out.push(input[i]);
            }
        }
        return out;
    };

    each = function(input, callback) {
        var i;
        for(i = 0; i < input.length; i++) {
            callback(input[i], i);
        }
    };

    isArray = function(obj) {
        return toString.call(obj) === '[object Array]';
    };

    isFunction = function(fun) {
        return typeof fun === 'function';
    };

    tryCall = function(fn, context, args, fallback, onError) {
        try {
            return fn.apply(context, args);
        } catch(error) {
            if(isFunction(onError)) {
                try {
                    onError(error);
                } catch(innerError) {
                    throw error;
                }
            } else {
                throw error;
            }
        }
        return fallback;
    };

    Garfield = function(options) {
        var self = this;
        this.bindings = [];
        this.hooks = {};
        options = options || {};

        this.options = {
            init: options.init || Garfield.defaults.init,
            initAll: options.initAll || Garfield.defaults.initAll,
            loader: options.loader || Garfield.defaults.loader
        };

        each([ 'beforeInit', 'beforeInitAll', 'afterInit', 'afterInitAll', 'beforeLoad', 'afterLoad', 'onBind', 'onInit', 'onSkipBinding', 'onSkipInit', 'onSkipInitAll', 'onError' ], function(hookName) {
            if(typeof options[hookName] !== 'undefined') {
                self.addHook(hookName, options[hookName]);
            }
        });

        this.select = options.select || Garfield.defaults.select;
        this.require = options.require || Garfield.defaults.require;
    };

    Garfield.defaults = {
        init: 'init',
        initAll: 'initAll',
        select: function(selector, context) {
            return context.querySelectorAll(selector);
        },
        require: window.require,
        loader: 'require'
    };

    Garfield.loaders = {
        "require": function(paths, callback, error) {
            this.require([ paths ], callback, error);
        },
        "systemjs": function(paths, callback, error) {
            System.import(paths).then(callback, error);
        }
    };

    Garfield.prototype.load = function(paths, callback, error) {
        Garfield.loaders[this.options.loader].call(this, paths, callback, error);
    };

    // Placeholder for jquery etc to override with its own element processing config stuff
    // Takes the binding and element and returns the config to be passed to the init method
    Garfield.prototype.processElementConfig = function(el, binding) {
        return binding.config;
    };

    Garfield.prototype.addHook = function(name, hook) {
        if(!isArray(this.hooks[name])) {
            this.hooks[name] = [];
        }

        if(isArray(hook)) {
            this.hooks[name].push.apply(this.hooks[name], hook);
        } else if(isFunction(hook)) {
            this.hooks[name].push(hook);
        } else {
            throw new Error('Invalid hook ' + (typeof hook) + ': ' + hook);
        }
    };

    Garfield.prototype.callHook = function(name) {
        var self = this,
            hookArgs;

        if(typeof this.hooks[name] !== 'undefined') {
            hookArgs = [].slice.call(arguments, 1);
            each(this.hooks[name], function(hook) {
                try {
                    hook.apply(self, hookArgs);
                } catch(error) {
                    if(name === 'onError') {
                        throw error;
                    }
                    self.callHook('onError', error);
                }
            });

            return true;
        }

        return false;
    };

    // selector: selector,
    // module: [ path, path ] | callback | object | path,
    // filter: filter,
    // config: config
    // init: 'init' | function
    // initAll: 'initAll' | function
    // multiple: false
    Garfield.prototype.bind = function() {
        var self = this;

        if(typeof arguments[0] === 'string') {
            this.bindings.push({
                id: uid++,
                selector: arguments[0],
                module: arguments[1]
            });
            this.callHook('onBind', this.bindings[this.bindings.length - 1]);
        } else if(isArray(arguments[0])) {
            each(arguments[0], function(binding) {
                binding.id = uid++;
                binding.module = binding.module || binding.require || undefined; // Fix up bindings still using the old "require" property
                self.bindings.push(binding);
                self.callHook('onBind', self.bindings[self.bindings.length - 1]);
            });
        } else if (typeof arguments[0] === "object") {
            arguments[0].id = uid++;
            arguments[0].module = arguments[0].module || arguments[0].require || undefined; // Fix up bindings still using the old "require" property
            this.bindings.push(arguments[0]);
            this.callHook('onBind', this.bindings[this.bindings.length - 1]);
        } else {
            throw new Error("Invalid binding format.");
        }
    };

    Garfield.prototype.applyBinding = function(els, binding) {
        var self = this,
            applyModule,
            errorHook = function(error) {
                // Try to call the onError hook and throw an exception if none are registered
                if(!self.callHook('onError', error)) {
                    throw error;
                }
            };

        els = filter(els, function(el) {
            // The filter for this binding indicates it should not be applied to this element
            if(typeof binding.filter === 'function' && tryCall(binding.filter, binding, [ el ], false, errorHook)) {
                return false;
            }

            // The element has previously been bound with this binding, so we won't apply it again unless
            // the binding has specifically indicated that's allowed
            if(!binding.multiple && (typeof el._garfieldBound !== 'undefined' && el._garfieldBound[binding.id])) {
                return false;
            }

            // If the element is configured as being disabled, then don't load it
            if(typeof binding.config === 'object' && binding.config.disabled) {
                return false;
            }

            return true;
        });

        // No elements found or all found elements wound up being filtered out
        if(els.length === 0) {
            self.callHook('onSkipBinding', binding);
            return;
        }

        applyModule = function(module) {
            var initAll, initAllThisVal, init, initThisVal;

            // If the binding specifies an initAll function, we'll use that rather than trying to get one off the module we loaded
            if(isFunction(binding.initAll)) {
                initAll = binding.initAll;
                initAllThisVal = self;
            }

            // Same as above for the initAll function, check to see if we can call the binding config's init property
            if(isFunction(binding.init)) {
                init = binding.init;
                initThisVal = self;
            }

            // If we loaded something that looks like an object, check to see if it's got init and/or initAll methods we can call
            // to initialise this binding
            if(typeof module === 'object' || isFunction(module)) {
                if(!initAll) {
                    initAll = module[binding.initAll || self.options.initAll];
                    initAllThisVal = module;
                }

                if(!init) {
                    init = module[binding.init || self.options.init];
                    initThisVal = module;
                }

                // We have a function but no init or initAll properties, so try just calling it
                if(isFunction(module) && !initAll && !init) {
                    init = module;
                    initThisVal = module;
                }
            }

            self.callHook('afterLoad', els, binding);

            // The binding supports being initialised across a set of elements in one go
            if(isFunction(initAll)) {
                if(typeof binding.config === 'object' && binding.config.disabled) {
                    self.callHook('onSkipInitAll', els, binding);
                } else {
                    self.callHook('beforeInitAll', els, binding);
                    tryCall(initAll, initAllThisVal, [ els, binding.config ], null, errorHook);
                    each(els, function(el) {
                        (el._garfieldBound = el._garfieldBound || {})[binding.id] = true; // Mark the element as bound
                    });
                    self.callHook('afterInitAll', els, binding);
                }
            }

            // The binding supports being initialised for each element separately
            if(isFunction(init)) {
                each(els, function(el) {
                    var elConfig = self.processElementConfig(el, binding);
                    if(typeof elConfig === 'object' && elConfig.disabled) {
                        self.callHook('onSkipInit', el, binding);
                    } else {
                        self.callHook('beforeInit', el, binding);
                        tryCall(init, initThisVal, [ el, elConfig ], null, errorHook);
                        (el._garfieldBound = el._garfieldBound || {})[binding.id] = true;
                        self.callHook('afterInit', el, binding);
                    }
                });
            }
        };

        if(typeof binding.module == 'string' || isArray(binding.module)) {
            // Strings and arrays of strings mean we're talking about "external" modules i.e. RequireJS, SystemJS etc
            this.callHook('beforeLoad', els, binding);
            this.load(binding.module, applyModule, function(error) {
                self.callHook('onError', error);
            });
        } else if(isFunction(binding.module) || typeof binding.module == 'object') {
            // Objects or functions as modules means we just directly call the function or call init and initAll on the object provided
            applyModule(binding.module);
        }
    };

    Garfield.prototype.init = function(target) {
        var i, j, binding,
            elements,
            self = this;

        if(typeof target === 'undefined') {
            target = window.document;
        }

        this.callHook('onInit', target);

        each(this.bindings, function(binding) {
            var els;

            if(typeof binding.selector !== 'string') {
                throw new Error("Invalid binding selector.");
            }

            els = self.select(binding.selector, target);

            if(els.length > 0) {
                self.applyBinding(els, binding);
            } else {
                self.callHook('onSkipBinding', binding);
            }
        });
    };

    if(typeof window.define !== 'undefined' && define.amd) {
        define(function() { return Garfield; });
    } else {
        window.Garfield = Garfield;
    }
})();

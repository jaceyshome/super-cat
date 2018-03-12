!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["example.js"], ["github:components/jquery@1.11.3.js"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.register('lib/garfield.js', [], function (_export) {
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
                    toString = {}.toString,
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
$__System.register("components/_cat-clicker/cat-list/cat-list-tpl.js", ["npm:incremental-dom@0.5.1.js"], function($__export) {
  "use strict";
  var patch,
      elementOpen,
      elementClose,
      text,
      skip,
      currentElement,
      hoisted1,
      hoisted2,
      hoisted3,
      hoisted4,
      hoisted5,
      hoisted6,
      hoisted7,
      hoisted8,
      hoisted9,
      hoisted10,
      hoisted11,
      hoisted12,
      hoisted13,
      hoisted14,
      hoisted15,
      hoisted16,
      hoisted17,
      hoisted18,
      __target;
  function catListTplFn(vm) {
    elementOpen("div", "25fdd2c8-5e05-463a-bc96-32749f3c8a4f", hoisted1);
    elementOpen("h3");
    text("Cat list component");
    elementClose("h3");
    elementOpen("div", "65da92fe-cc01-4000-a551-1e4c3cc7dbbc", hoisted2);
    elementOpen("div", "729848a3-aa92-42fc-b306-417eb082af1c", hoisted3);
    elementOpen("p");
    text("" + (vm.proxy.description) + "");
    elementClose("p");
    elementClose("div");
    elementClose("div");
    elementOpen("div", "4d7dbea5-b3be-4270-88d2-ba5e14457613", hoisted4);
    elementOpen("div", "549bf84c-ef0d-430e-a219-401f75a5f242", hoisted5);
    elementOpen("a", "432c523c-4dc3-44f1-8e03-722fc856f988", hoisted6, "onclick", function($event) {
      var $element = this;
      vm.handlers.addCat();
    });
    text("create");
    elementClose("a");
    elementClose("div");
    elementClose("div");
    __target = vm.proxy.cats;
    if (__target) {
      ;
      (__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var cat = $value;
        var $key = "352ab5ac-a4bd-4182-b819-e8e4680f3a46_" + $item;
        elementOpen("div", $key, hoisted7);
        elementOpen("div", "7470d983-62f1-464f-8a2a-0c538280add2_" + $key, hoisted8);
        elementOpen("div", "e31cfa2d-a17a-400d-a8c9-b4512cde364b_" + $key, hoisted9);
        elementOpen("a", "aa1441b0-427b-43a4-84ec-e60712df99b8_" + $key, hoisted10, "onclick", function($event) {
          var $element = this;
          vm.handlers.clickCat(cat);
        });
        elementOpen("span");
        text("" + (cat.name) + " counts: " + (cat.counter) + "");
        elementClose("span");
        if (vm.proxy.selectedCat.name == cat.name) {
          text("                             (Selected)                         ");
        }
        elementClose("a");
        elementClose("div");
        elementOpen("div", "0f2b6bbe-ac33-4a37-b538-7503f3f242a7_" + $key, hoisted11);
        elementOpen("a", "1613b0b9-6b13-4983-8d37-d500e0be4f00_" + $key, hoisted12, "onclick", function($event) {
          var $element = this;
          vm.handlers.selectCat(cat);
        });
        text("select");
        elementClose("a");
        elementClose("div");
        elementOpen("div", "6eab4f5c-3ccd-43be-9b24-c9566b707755_" + $key, hoisted13);
        elementOpen("a", "62186afc-8d74-45e3-b76a-daaa18bfbf4b_" + $key, hoisted14, "onclick", function($event) {
          var $element = this;
          vm.handlers.deleteCat(cat);
        });
        text("delete");
        elementClose("a");
        elementClose("div");
        elementClose("div");
        elementClose("div");
      }, this);
    }
    elementClose("div");
    elementOpen("div", "e4ea2c7c-3420-4d9b-b554-c4bee7d1ec5a", hoisted15);
    elementOpen("h3");
    text("Cat description panel component");
    elementClose("h3");
    elementOpen("p");
    text("I have a ");
    elementOpen("b", "d9f96866-de27-4cf3-bdf2-641d1dc33476", hoisted16);
    text("" + (vm.proxy.selectedCat.name) + "");
    elementClose("b");
    text(" and I have visited he/she ");
    elementOpen("b", "fb02949c-9925-4816-97db-e403304cba0c", hoisted17);
    text("" + (vm.proxy.selectedCat.counter) + "");
    elementClose("b");
    text(" times. ");
    elementClose("p");
    elementOpen("a", "24bcfc90-391b-4c71-ae16-f7bdb091538b", hoisted18);
    text("like");
    elementClose("a");
    elementClose("div");
  }
  $__export("catListTplFn", catListTplFn);
  return {
    setters: [function($__m) {
      patch = $__m.patch;
      elementOpen = $__m.elementOpen;
      elementClose = $__m.elementClose;
      text = $__m.text;
      skip = $__m.skip;
      currentElement = $__m.currentElement;
    }],
    execute: function() {
      hoisted1 = ["style", "background-color: rgba(255,243,205,0.39); margin-bottom: 20px; padding: 20px;"];
      hoisted2 = ["class", "grid"];
      hoisted3 = ["class", "2/3 grid__cell"];
      hoisted4 = ["class", "grid"];
      hoisted5 = ["class", "2/3 grid__cell"];
      hoisted6 = ["href", "javascript:void(0);", "class", "btn btn-primary", "style", "padding: 2px 5px; margin-bottom: 10px;", "title", "add a cat"];
      hoisted7 = ["style", "margin-bottom: 5px;"];
      hoisted8 = ["class", "grid"];
      hoisted9 = ["class", "1/2 grid__cell"];
      hoisted10 = ["href", "javascript:void(0);", "class", "b-link--block b-link--no-underline", "title", "show cat details"];
      hoisted11 = ["class", "1/4 grid__cell"];
      hoisted12 = ["href", "javascript:void(0);", "class", "btn btn-primary", "style", "padding: 2px 5px;", "title", "edit cat"];
      hoisted13 = ["class", "1/4 grid__cell"];
      hoisted14 = ["href", "javascript:void(0);", "class", "btn btn-primary", "style", "padding: 2px 5px;", "title", "delete cat"];
      hoisted15 = ["class", "b-js-cat-description-panel b-component", "style", "background-color: rgba(173,184,230,0.49); padding: 10px;"];
      hoisted16 = ["data-js-el", "name"];
      hoisted17 = ["data-js-el", "counter"];
      hoisted18 = ["href", "javascript:void(0);", "class", "btn btn-primary", "title", "like cat", "data-js-el", "button-like"];
    }
  };
});

$__System.register('components/_cat-clicker/cat-list/cat-list.js', ['lib/featured-component.js', 'npm:lodash@4.17.5.js', 'helpers/helpers.js', 'lib/config.js', 'components/_cat-clicker/cat-list/cat-list-tpl.js', 'components/_cat-clicker/cat-service.js'], function (_export) {
    'use strict';

    var FeaturedComponent, _, Helpers, configurable, catListTplFn, CatService, CatList;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(_x, _x2, _x3) {
        var _again = true;_function: while (_again) {
            var object = _x,
                property = _x2,
                receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);if (parent === null) {
                    return undefined;
                } else {
                    _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;if (getter === undefined) {
                    return undefined;
                }return getter.call(receiver);
            }
        }
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_jsLibFeaturedComponent) {
            FeaturedComponent = _jsLibFeaturedComponent['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_jsLibConfig) {
            configurable = _jsLibConfig.configurable;
        }, function (_catListTpl) {
            catListTplFn = _catListTpl.catListTplFn;
        }, function (_catService) {
            CatService = _catService['default'];
        }],
        execute: function () {
            CatList = function (_FeaturedComponent) {
                _inherits(CatList, _FeaturedComponent);

                function CatList(el, options) {
                    _classCallCheck(this, _CatList);

                    _get(Object.getPrototypeOf(_CatList.prototype), 'constructor', this).call(this, el, options);

                    this._subscribeToData(CatService, "cats", this.handleNotification);
                    this._subscribeToData(CatService, "selectedCat", this.handleNotification);

                    this._data = {
                        cats: this._notifications.cats.proxy,
                        selectedCat: this._notifications.selectedCat.proxy,
                        description: "Click a cat to show the detail"
                    };

                    this._dynamicPartial = this._createDynamicPartial({
                        templateFn: catListTplFn,
                        data: this._data
                    });

                    this._proxy = this._dynamicPartial.vm.proxy;
                    this._callHook();
                }

                _createClass(CatList, [{
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {
                        this._childElements.$loading.html('');
                        this._dynamicPartial.view.render();
                    }
                }, {
                    key: 'addCat',
                    value: function addCat() {
                        this._proxy.cats.push({
                            name: Helpers.Strings.random(8),
                            counter: 1,
                            src: "http://lorempixel.com/400/300/cats/"
                        });
                    }
                }, {
                    key: 'clickCat',
                    value: function clickCat(cat) {
                        this._proxy.description = "Great";
                        cat.counter += 1;
                    }
                }, {
                    key: 'selectCat',
                    value: function selectCat(cat) {
                        Object.assign(this._proxy.selectedCat, cat);
                    }
                }, {
                    key: 'deleteCat',
                    value: function deleteCat(cat) {
                        _.remove(this._proxy.cats, function (candidate) {
                            return Object.is(candidate.name, cat.name);
                        });
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatList(el, options);
                    }
                }]);

                var _CatList = CatList;
                CatList = configurable({})(CatList) || CatList;
                return CatList;
            }(FeaturedComponent);

            _export('CatList', CatList);
        }
    };
});
$__System.register('components/_cat-clicker/cat-detail-panel/cat-detail-panel.js', ['lib/featured-component.js', 'npm:lodash@4.17.5.js', 'lib/config.js', 'helpers/helpers.js', 'components/_cat-clicker/cat-service.js'], function (_export) {
    'use strict';

    var FeaturedComponent, _, configurable, Helpers, CatService, CatDetailPanel;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(_x, _x2, _x3) {
        var _again = true;_function: while (_again) {
            var object = _x,
                property = _x2,
                receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);if (parent === null) {
                    return undefined;
                } else {
                    _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;if (getter === undefined) {
                    return undefined;
                }return getter.call(receiver);
            }
        }
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_jsLibFeaturedComponent) {
            FeaturedComponent = _jsLibFeaturedComponent['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_jsLibConfig) {
            configurable = _jsLibConfig.configurable;
        }, function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_catService) {
            CatService = _catService['default'];
        }],
        execute: function () {
            CatDetailPanel = function (_FeaturedComponent) {
                _inherits(CatDetailPanel, _FeaturedComponent);

                function CatDetailPanel(el, options) {
                    _classCallCheck(this, _CatDetailPanel);

                    _get(Object.getPrototypeOf(_CatDetailPanel.prototype), 'constructor', this).call(this, el, options);

                    this._subscribeToData(CatService, "cats", this.handleLoadedCatList);
                    this._subscribeToData(CatService, "selectedCat", this.handleNotification);

                    this._data = {
                        selectedCat: this._notifications.selectedCat.proxy
                    };
                }

                _createClass(CatDetailPanel, [{
                    key: 'handleLoadedCatList',
                    value: function handleLoadedCatList(keyPath, cats) {
                        var initialSelectedCat = this._getInitialSelectedCat();
                        var selectedCat = cats.find(function (cat) {
                            return cat.name === initialSelectedCat.name;
                        });
                        if (selectedCat !== undefined) {
                            Object.assign(this._data.selectedCat, selectedCat);
                        }
                        this._unsubscribe(CatService, "cats");
                    }
                }, {
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {
                        this._childElements.$name.html(data.name ? data.name : '');
                        this._childElements.$counter.html(data.counter ? data.counter : '');
                        this._childElements.$src.attr("src", data.src ? data.src : '');
                    }
                }, {
                    key: '_getInitialSelectedCat',
                    value: function _getInitialSelectedCat() {
                        var cat = {};
                        this._listElements(["name", "src", "counter"], this.$el).forEach(function (item, index) {
                            Object.defineProperty(cat, item.name, {
                                value: index === 1 ? $(item.el).attr("src") : $(item.el).html(),
                                writable: true
                            });
                        });
                        return cat;
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatDetailPanel(el, options);
                    }
                }]);

                var _CatDetailPanel = CatDetailPanel;
                CatDetailPanel = configurable({})(CatDetailPanel) || CatDetailPanel;
                return CatDetailPanel;
            }(FeaturedComponent);

            _export('CatDetailPanel', CatDetailPanel);
        }
    };
});
$__System.registerDynamic("npm:bluebird@3.5.1/js/browser/bluebird.js", [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

    (function ($__global) {
        /* */
        "format global";
        /* @preserve
         * The MIT License (MIT)
         * 
         * Copyright (c) 2013-2017 Petka Antonov
         * 
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         * 
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         * 
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         * 
         */
        /**
         * bluebird build version 3.5.1
         * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
        */

        !function (e) {
            if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
                var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.Promise = e();
            }
        }(function () {
            var define, module, exports;return function e(t, n, r) {
                function s(o, u) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                            var n = t[o][1][e];return s(n ? n : e);
                        }, l, l.exports, e, t, n, r);
                    }return n[o].exports;
                }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
            }({ 1: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var SomePromiseArray = Promise._SomePromiseArray;
                        function any(promises) {
                            var ret = new SomePromiseArray(promises);
                            var promise = ret.promise();
                            ret.setHowMany(1);
                            ret.setUnwrap();
                            ret.init();
                            return promise;
                        }

                        Promise.any = function (promises) {
                            return any(promises);
                        };

                        Promise.prototype.any = function () {
                            return any(this);
                        };
                    };
                }, {}], 2: [function (_dereq_, module, exports) {
                    "use strict";

                    var firstLineError;
                    try {
                        throw new Error();
                    } catch (e) {
                        firstLineError = e;
                    }
                    var schedule = _dereq_("./schedule");
                    var Queue = _dereq_("./queue");
                    var util = _dereq_("./util");

                    function Async() {
                        this._customScheduler = false;
                        this._isTickUsed = false;
                        this._lateQueue = new Queue(16);
                        this._normalQueue = new Queue(16);
                        this._haveDrainedQueues = false;
                        this._trampolineEnabled = true;
                        var self = this;
                        this.drainQueues = function () {
                            self._drainQueues();
                        };
                        this._schedule = schedule;
                    }

                    Async.prototype.setScheduler = function (fn) {
                        var prev = this._schedule;
                        this._schedule = fn;
                        this._customScheduler = true;
                        return prev;
                    };

                    Async.prototype.hasCustomScheduler = function () {
                        return this._customScheduler;
                    };

                    Async.prototype.enableTrampoline = function () {
                        this._trampolineEnabled = true;
                    };

                    Async.prototype.disableTrampolineIfNecessary = function () {
                        if (util.hasDevTools) {
                            this._trampolineEnabled = false;
                        }
                    };

                    Async.prototype.haveItemsQueued = function () {
                        return this._isTickUsed || this._haveDrainedQueues;
                    };

                    Async.prototype.fatalError = function (e, isNode) {
                        if (isNode) {
                            process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n");
                            process.exit(2);
                        } else {
                            this.throwLater(e);
                        }
                    };

                    Async.prototype.throwLater = function (fn, arg) {
                        if (arguments.length === 1) {
                            arg = fn;
                            fn = function () {
                                throw arg;
                            };
                        }
                        if (typeof setTimeout !== "undefined") {
                            setTimeout(function () {
                                fn(arg);
                            }, 0);
                        } else try {
                            this._schedule(function () {
                                fn(arg);
                            });
                        } catch (e) {
                            throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                        }
                    };

                    function AsyncInvokeLater(fn, receiver, arg) {
                        this._lateQueue.push(fn, receiver, arg);
                        this._queueTick();
                    }

                    function AsyncInvoke(fn, receiver, arg) {
                        this._normalQueue.push(fn, receiver, arg);
                        this._queueTick();
                    }

                    function AsyncSettlePromises(promise) {
                        this._normalQueue._pushOne(promise);
                        this._queueTick();
                    }

                    if (!util.hasDevTools) {
                        Async.prototype.invokeLater = AsyncInvokeLater;
                        Async.prototype.invoke = AsyncInvoke;
                        Async.prototype.settlePromises = AsyncSettlePromises;
                    } else {
                        Async.prototype.invokeLater = function (fn, receiver, arg) {
                            if (this._trampolineEnabled) {
                                AsyncInvokeLater.call(this, fn, receiver, arg);
                            } else {
                                this._schedule(function () {
                                    setTimeout(function () {
                                        fn.call(receiver, arg);
                                    }, 100);
                                });
                            }
                        };

                        Async.prototype.invoke = function (fn, receiver, arg) {
                            if (this._trampolineEnabled) {
                                AsyncInvoke.call(this, fn, receiver, arg);
                            } else {
                                this._schedule(function () {
                                    fn.call(receiver, arg);
                                });
                            }
                        };

                        Async.prototype.settlePromises = function (promise) {
                            if (this._trampolineEnabled) {
                                AsyncSettlePromises.call(this, promise);
                            } else {
                                this._schedule(function () {
                                    promise._settlePromises();
                                });
                            }
                        };
                    }

                    Async.prototype._drainQueue = function (queue) {
                        while (queue.length() > 0) {
                            var fn = queue.shift();
                            if (typeof fn !== "function") {
                                fn._settlePromises();
                                continue;
                            }
                            var receiver = queue.shift();
                            var arg = queue.shift();
                            fn.call(receiver, arg);
                        }
                    };

                    Async.prototype._drainQueues = function () {
                        this._drainQueue(this._normalQueue);
                        this._reset();
                        this._haveDrainedQueues = true;
                        this._drainQueue(this._lateQueue);
                    };

                    Async.prototype._queueTick = function () {
                        if (!this._isTickUsed) {
                            this._isTickUsed = true;
                            this._schedule(this.drainQueues);
                        }
                    };

                    Async.prototype._reset = function () {
                        this._isTickUsed = false;
                    };

                    module.exports = Async;
                    module.exports.firstLineError = firstLineError;
                }, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, debug) {
                        var calledBind = false;
                        var rejectThis = function (_, e) {
                            this._reject(e);
                        };

                        var targetRejected = function (e, context) {
                            context.promiseRejectionQueued = true;
                            context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
                        };

                        var bindingResolved = function (thisArg, context) {
                            if ((this._bitField & 50397184) === 0) {
                                this._resolveCallback(context.target);
                            }
                        };

                        var bindingRejected = function (e, context) {
                            if (!context.promiseRejectionQueued) this._reject(e);
                        };

                        Promise.prototype.bind = function (thisArg) {
                            if (!calledBind) {
                                calledBind = true;
                                Promise.prototype._propagateFrom = debug.propagateFromFunction();
                                Promise.prototype._boundValue = debug.boundValueFunction();
                            }
                            var maybePromise = tryConvertToPromise(thisArg);
                            var ret = new Promise(INTERNAL);
                            ret._propagateFrom(this, 1);
                            var target = this._target();
                            ret._setBoundTo(maybePromise);
                            if (maybePromise instanceof Promise) {
                                var context = {
                                    promiseRejectionQueued: false,
                                    promise: ret,
                                    target: target,
                                    bindingPromise: maybePromise
                                };
                                target._then(INTERNAL, targetRejected, undefined, ret, context);
                                maybePromise._then(bindingResolved, bindingRejected, undefined, ret, context);
                                ret._setOnCancel(maybePromise);
                            } else {
                                ret._resolveCallback(target);
                            }
                            return ret;
                        };

                        Promise.prototype._setBoundTo = function (obj) {
                            if (obj !== undefined) {
                                this._bitField = this._bitField | 2097152;
                                this._boundTo = obj;
                            } else {
                                this._bitField = this._bitField & ~2097152;
                            }
                        };

                        Promise.prototype._isBound = function () {
                            return (this._bitField & 2097152) === 2097152;
                        };

                        Promise.bind = function (thisArg, value) {
                            return Promise.resolve(value).bind(thisArg);
                        };
                    };
                }, {}], 4: [function (_dereq_, module, exports) {
                    "use strict";

                    var old;
                    if (typeof Promise !== "undefined") old = Promise;
                    function noConflict() {
                        try {
                            if (Promise === bluebird) Promise = old;
                        } catch (e) {}
                        return bluebird;
                    }
                    var bluebird = _dereq_("./promise")();
                    bluebird.noConflict = noConflict;
                    module.exports = bluebird;
                }, { "./promise": 22 }], 5: [function (_dereq_, module, exports) {
                    "use strict";

                    var cr = Object.create;
                    if (cr) {
                        var callerCache = cr(null);
                        var getterCache = cr(null);
                        callerCache[" size"] = getterCache[" size"] = 0;
                    }

                    module.exports = function (Promise) {
                        var util = _dereq_("./util");
                        var canEvaluate = util.canEvaluate;
                        var isIdentifier = util.isIdentifier;

                        var getMethodCaller;
                        var getGetter;
                        if (!true) {
                            var makeMethodCaller = function (methodName) {
                                return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
                            };

                            var makeGetter = function (propertyName) {
                                return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
                            };

                            var getCompiled = function (name, compiler, cache) {
                                var ret = cache[name];
                                if (typeof ret !== "function") {
                                    if (!isIdentifier(name)) {
                                        return null;
                                    }
                                    ret = compiler(name);
                                    cache[name] = ret;
                                    cache[" size"]++;
                                    if (cache[" size"] > 512) {
                                        var keys = Object.keys(cache);
                                        for (var i = 0; i < 256; ++i) delete cache[keys[i]];
                                        cache[" size"] = keys.length - 256;
                                    }
                                }
                                return ret;
                            };

                            getMethodCaller = function (name) {
                                return getCompiled(name, makeMethodCaller, callerCache);
                            };

                            getGetter = function (name) {
                                return getCompiled(name, makeGetter, getterCache);
                            };
                        }

                        function ensureMethod(obj, methodName) {
                            var fn;
                            if (obj != null) fn = obj[methodName];
                            if (typeof fn !== "function") {
                                var message = "Object " + util.classString(obj) + " has no method '" + util.toString(methodName) + "'";
                                throw new Promise.TypeError(message);
                            }
                            return fn;
                        }

                        function caller(obj) {
                            var methodName = this.pop();
                            var fn = ensureMethod(obj, methodName);
                            return fn.apply(obj, this);
                        }
                        Promise.prototype.call = function (methodName) {
                            var args = [].slice.call(arguments, 1);;
                            if (!true) {
                                if (canEvaluate) {
                                    var maybeCaller = getMethodCaller(methodName);
                                    if (maybeCaller !== null) {
                                        return this._then(maybeCaller, undefined, undefined, args, undefined);
                                    }
                                }
                            }
                            args.push(methodName);
                            return this._then(caller, undefined, undefined, args, undefined);
                        };

                        function namedGetter(obj) {
                            return obj[this];
                        }
                        function indexedGetter(obj) {
                            var index = +this;
                            if (index < 0) index = Math.max(0, index + obj.length);
                            return obj[index];
                        }
                        Promise.prototype.get = function (propertyName) {
                            var isIndex = typeof propertyName === "number";
                            var getter;
                            if (!isIndex) {
                                if (canEvaluate) {
                                    var maybeGetter = getGetter(propertyName);
                                    getter = maybeGetter !== null ? maybeGetter : namedGetter;
                                } else {
                                    getter = namedGetter;
                                }
                            } else {
                                getter = indexedGetter;
                            }
                            return this._then(getter, undefined, undefined, propertyName, undefined);
                        };
                    };
                }, { "./util": 36 }], 6: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, debug) {
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var async = Promise._async;

                        Promise.prototype["break"] = Promise.prototype.cancel = function () {
                            if (!debug.cancellation()) return this._warn("cancellation is disabled");

                            var promise = this;
                            var child = promise;
                            while (promise._isCancellable()) {
                                if (!promise._cancelBy(child)) {
                                    if (child._isFollowing()) {
                                        child._followee().cancel();
                                    } else {
                                        child._cancelBranched();
                                    }
                                    break;
                                }

                                var parent = promise._cancellationParent;
                                if (parent == null || !parent._isCancellable()) {
                                    if (promise._isFollowing()) {
                                        promise._followee().cancel();
                                    } else {
                                        promise._cancelBranched();
                                    }
                                    break;
                                } else {
                                    if (promise._isFollowing()) promise._followee().cancel();
                                    promise._setWillBeCancelled();
                                    child = promise;
                                    promise = parent;
                                }
                            }
                        };

                        Promise.prototype._branchHasCancelled = function () {
                            this._branchesRemainingToCancel--;
                        };

                        Promise.prototype._enoughBranchesHaveCancelled = function () {
                            return this._branchesRemainingToCancel === undefined || this._branchesRemainingToCancel <= 0;
                        };

                        Promise.prototype._cancelBy = function (canceller) {
                            if (canceller === this) {
                                this._branchesRemainingToCancel = 0;
                                this._invokeOnCancel();
                                return true;
                            } else {
                                this._branchHasCancelled();
                                if (this._enoughBranchesHaveCancelled()) {
                                    this._invokeOnCancel();
                                    return true;
                                }
                            }
                            return false;
                        };

                        Promise.prototype._cancelBranched = function () {
                            if (this._enoughBranchesHaveCancelled()) {
                                this._cancel();
                            }
                        };

                        Promise.prototype._cancel = function () {
                            if (!this._isCancellable()) return;
                            this._setCancelled();
                            async.invoke(this._cancelPromises, this, undefined);
                        };

                        Promise.prototype._cancelPromises = function () {
                            if (this._length() > 0) this._settlePromises();
                        };

                        Promise.prototype._unsetOnCancel = function () {
                            this._onCancelField = undefined;
                        };

                        Promise.prototype._isCancellable = function () {
                            return this.isPending() && !this._isCancelled();
                        };

                        Promise.prototype.isCancellable = function () {
                            return this.isPending() && !this.isCancelled();
                        };

                        Promise.prototype._doInvokeOnCancel = function (onCancelCallback, internalOnly) {
                            if (util.isArray(onCancelCallback)) {
                                for (var i = 0; i < onCancelCallback.length; ++i) {
                                    this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
                                }
                            } else if (onCancelCallback !== undefined) {
                                if (typeof onCancelCallback === "function") {
                                    if (!internalOnly) {
                                        var e = tryCatch(onCancelCallback).call(this._boundValue());
                                        if (e === errorObj) {
                                            this._attachExtraTrace(e.e);
                                            async.throwLater(e.e);
                                        }
                                    }
                                } else {
                                    onCancelCallback._resultCancelled(this);
                                }
                            }
                        };

                        Promise.prototype._invokeOnCancel = function () {
                            var onCancelCallback = this._onCancel();
                            this._unsetOnCancel();
                            async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
                        };

                        Promise.prototype._invokeInternalOnCancel = function () {
                            if (this._isCancellable()) {
                                this._doInvokeOnCancel(this._onCancel(), true);
                                this._unsetOnCancel();
                            }
                        };

                        Promise.prototype._resultCancelled = function () {
                            this.cancel();
                        };
                    };
                }, { "./util": 36 }], 7: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (NEXT_FILTER) {
                        var util = _dereq_("./util");
                        var getKeys = _dereq_("./es5").keys;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;

                        function catchFilter(instances, cb, promise) {
                            return function (e) {
                                var boundTo = promise._boundValue();
                                predicateLoop: for (var i = 0; i < instances.length; ++i) {
                                    var item = instances[i];

                                    if (item === Error || item != null && item.prototype instanceof Error) {
                                        if (e instanceof item) {
                                            return tryCatch(cb).call(boundTo, e);
                                        }
                                    } else if (typeof item === "function") {
                                        var matchesPredicate = tryCatch(item).call(boundTo, e);
                                        if (matchesPredicate === errorObj) {
                                            return matchesPredicate;
                                        } else if (matchesPredicate) {
                                            return tryCatch(cb).call(boundTo, e);
                                        }
                                    } else if (util.isObject(e)) {
                                        var keys = getKeys(item);
                                        for (var j = 0; j < keys.length; ++j) {
                                            var key = keys[j];
                                            if (item[key] != e[key]) {
                                                continue predicateLoop;
                                            }
                                        }
                                        return tryCatch(cb).call(boundTo, e);
                                    }
                                }
                                return NEXT_FILTER;
                            };
                        }

                        return catchFilter;
                    };
                }, { "./es5": 13, "./util": 36 }], 8: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var longStackTraces = false;
                        var contextStack = [];

                        Promise.prototype._promiseCreated = function () {};
                        Promise.prototype._pushContext = function () {};
                        Promise.prototype._popContext = function () {
                            return null;
                        };
                        Promise._peekContext = Promise.prototype._peekContext = function () {};

                        function Context() {
                            this._trace = new Context.CapturedTrace(peekContext());
                        }
                        Context.prototype._pushContext = function () {
                            if (this._trace !== undefined) {
                                this._trace._promiseCreated = null;
                                contextStack.push(this._trace);
                            }
                        };

                        Context.prototype._popContext = function () {
                            if (this._trace !== undefined) {
                                var trace = contextStack.pop();
                                var ret = trace._promiseCreated;
                                trace._promiseCreated = null;
                                return ret;
                            }
                            return null;
                        };

                        function createContext() {
                            if (longStackTraces) return new Context();
                        }

                        function peekContext() {
                            var lastIndex = contextStack.length - 1;
                            if (lastIndex >= 0) {
                                return contextStack[lastIndex];
                            }
                            return undefined;
                        }
                        Context.CapturedTrace = null;
                        Context.create = createContext;
                        Context.deactivateLongStackTraces = function () {};
                        Context.activateLongStackTraces = function () {
                            var Promise_pushContext = Promise.prototype._pushContext;
                            var Promise_popContext = Promise.prototype._popContext;
                            var Promise_PeekContext = Promise._peekContext;
                            var Promise_peekContext = Promise.prototype._peekContext;
                            var Promise_promiseCreated = Promise.prototype._promiseCreated;
                            Context.deactivateLongStackTraces = function () {
                                Promise.prototype._pushContext = Promise_pushContext;
                                Promise.prototype._popContext = Promise_popContext;
                                Promise._peekContext = Promise_PeekContext;
                                Promise.prototype._peekContext = Promise_peekContext;
                                Promise.prototype._promiseCreated = Promise_promiseCreated;
                                longStackTraces = false;
                            };
                            longStackTraces = true;
                            Promise.prototype._pushContext = Context.prototype._pushContext;
                            Promise.prototype._popContext = Context.prototype._popContext;
                            Promise._peekContext = Promise.prototype._peekContext = peekContext;
                            Promise.prototype._promiseCreated = function () {
                                var ctx = this._peekContext();
                                if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
                            };
                        };
                        return Context;
                    };
                }, {}], 9: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, Context) {
                        var getDomain = Promise._getDomain;
                        var async = Promise._async;
                        var Warning = _dereq_("./errors").Warning;
                        var util = _dereq_("./util");
                        var canAttachTrace = util.canAttachTrace;
                        var unhandledRejectionHandled;
                        var possiblyUnhandledRejection;
                        var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
                        var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
                        var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
                        var stackFramePattern = null;
                        var formatStack = null;
                        var indentStackFrames = false;
                        var printWarning;
                        var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 && (true || util.env("BLUEBIRD_DEBUG") || util.env("NODE_ENV") === "development"));

                        var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 && (debugging || util.env("BLUEBIRD_WARNINGS")));

                        var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

                        var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

                        Promise.prototype.suppressUnhandledRejections = function () {
                            var target = this._target();
                            target._bitField = target._bitField & ~1048576 | 524288;
                        };

                        Promise.prototype._ensurePossibleRejectionHandled = function () {
                            if ((this._bitField & 524288) !== 0) return;
                            this._setRejectionIsUnhandled();
                            var self = this;
                            setTimeout(function () {
                                self._notifyUnhandledRejection();
                            }, 1);
                        };

                        Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
                            fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, undefined, this);
                        };

                        Promise.prototype._setReturnedNonUndefined = function () {
                            this._bitField = this._bitField | 268435456;
                        };

                        Promise.prototype._returnedNonUndefined = function () {
                            return (this._bitField & 268435456) !== 0;
                        };

                        Promise.prototype._notifyUnhandledRejection = function () {
                            if (this._isRejectionUnhandled()) {
                                var reason = this._settledValue();
                                this._setUnhandledRejectionIsNotified();
                                fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
                            }
                        };

                        Promise.prototype._setUnhandledRejectionIsNotified = function () {
                            this._bitField = this._bitField | 262144;
                        };

                        Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
                            this._bitField = this._bitField & ~262144;
                        };

                        Promise.prototype._isUnhandledRejectionNotified = function () {
                            return (this._bitField & 262144) > 0;
                        };

                        Promise.prototype._setRejectionIsUnhandled = function () {
                            this._bitField = this._bitField | 1048576;
                        };

                        Promise.prototype._unsetRejectionIsUnhandled = function () {
                            this._bitField = this._bitField & ~1048576;
                            if (this._isUnhandledRejectionNotified()) {
                                this._unsetUnhandledRejectionIsNotified();
                                this._notifyUnhandledRejectionIsHandled();
                            }
                        };

                        Promise.prototype._isRejectionUnhandled = function () {
                            return (this._bitField & 1048576) > 0;
                        };

                        Promise.prototype._warn = function (message, shouldUseOwnTrace, promise) {
                            return warn(message, shouldUseOwnTrace, promise || this);
                        };

                        Promise.onPossiblyUnhandledRejection = function (fn) {
                            var domain = getDomain();
                            possiblyUnhandledRejection = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                        };

                        Promise.onUnhandledRejectionHandled = function (fn) {
                            var domain = getDomain();
                            unhandledRejectionHandled = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                        };

                        var disableLongStackTraces = function () {};
                        Promise.longStackTraces = function () {
                            if (async.haveItemsQueued() && !config.longStackTraces) {
                                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            if (!config.longStackTraces && longStackTracesIsSupported()) {
                                var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
                                var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
                                config.longStackTraces = true;
                                disableLongStackTraces = function () {
                                    if (async.haveItemsQueued() && !config.longStackTraces) {
                                        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                    }
                                    Promise.prototype._captureStackTrace = Promise_captureStackTrace;
                                    Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
                                    Context.deactivateLongStackTraces();
                                    async.enableTrampoline();
                                    config.longStackTraces = false;
                                };
                                Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
                                Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
                                Context.activateLongStackTraces();
                                async.disableTrampolineIfNecessary();
                            }
                        };

                        Promise.hasLongStackTraces = function () {
                            return config.longStackTraces && longStackTracesIsSupported();
                        };

                        var fireDomEvent = function () {
                            try {
                                if (typeof CustomEvent === "function") {
                                    var event = new CustomEvent("CustomEvent");
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = new CustomEvent(name.toLowerCase(), {
                                            detail: event,
                                            cancelable: true
                                        });
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                } else if (typeof Event === "function") {
                                    var event = new Event("CustomEvent");
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = new Event(name.toLowerCase(), {
                                            cancelable: true
                                        });
                                        domEvent.detail = event;
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                } else {
                                    var event = document.createEvent("CustomEvent");
                                    event.initCustomEvent("testingtheevent", false, true, {});
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = document.createEvent("CustomEvent");
                                        domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                }
                            } catch (e) {}
                            return function () {
                                return false;
                            };
                        }();

                        var fireGlobalEvent = function () {
                            if (util.isNode) {
                                return function () {
                                    return process.emit.apply(process, arguments);
                                };
                            } else {
                                if (!util.global) {
                                    return function () {
                                        return false;
                                    };
                                }
                                return function (name) {
                                    var methodName = "on" + name.toLowerCase();
                                    var method = util.global[methodName];
                                    if (!method) return false;
                                    method.apply(util.global, [].slice.call(arguments, 1));
                                    return true;
                                };
                            }
                        }();

                        function generatePromiseLifecycleEventObject(name, promise) {
                            return { promise: promise };
                        }

                        var eventToObjectGenerator = {
                            promiseCreated: generatePromiseLifecycleEventObject,
                            promiseFulfilled: generatePromiseLifecycleEventObject,
                            promiseRejected: generatePromiseLifecycleEventObject,
                            promiseResolved: generatePromiseLifecycleEventObject,
                            promiseCancelled: generatePromiseLifecycleEventObject,
                            promiseChained: function (name, promise, child) {
                                return { promise: promise, child: child };
                            },
                            warning: function (name, warning) {
                                return { warning: warning };
                            },
                            unhandledRejection: function (name, reason, promise) {
                                return { reason: reason, promise: promise };
                            },
                            rejectionHandled: generatePromiseLifecycleEventObject
                        };

                        var activeFireEvent = function (name) {
                            var globalEventFired = false;
                            try {
                                globalEventFired = fireGlobalEvent.apply(null, arguments);
                            } catch (e) {
                                async.throwLater(e);
                                globalEventFired = true;
                            }

                            var domEventFired = false;
                            try {
                                domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
                            } catch (e) {
                                async.throwLater(e);
                                domEventFired = true;
                            }

                            return domEventFired || globalEventFired;
                        };

                        Promise.config = function (opts) {
                            opts = Object(opts);
                            if ("longStackTraces" in opts) {
                                if (opts.longStackTraces) {
                                    Promise.longStackTraces();
                                } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
                                    disableLongStackTraces();
                                }
                            }
                            if ("warnings" in opts) {
                                var warningsOption = opts.warnings;
                                config.warnings = !!warningsOption;
                                wForgottenReturn = config.warnings;

                                if (util.isObject(warningsOption)) {
                                    if ("wForgottenReturn" in warningsOption) {
                                        wForgottenReturn = !!warningsOption.wForgottenReturn;
                                    }
                                }
                            }
                            if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
                                if (async.haveItemsQueued()) {
                                    throw new Error("cannot enable cancellation after promises are in use");
                                }
                                Promise.prototype._clearCancellationData = cancellationClearCancellationData;
                                Promise.prototype._propagateFrom = cancellationPropagateFrom;
                                Promise.prototype._onCancel = cancellationOnCancel;
                                Promise.prototype._setOnCancel = cancellationSetOnCancel;
                                Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback;
                                Promise.prototype._execute = cancellationExecute;
                                propagateFromFunction = cancellationPropagateFrom;
                                config.cancellation = true;
                            }
                            if ("monitoring" in opts) {
                                if (opts.monitoring && !config.monitoring) {
                                    config.monitoring = true;
                                    Promise.prototype._fireEvent = activeFireEvent;
                                } else if (!opts.monitoring && config.monitoring) {
                                    config.monitoring = false;
                                    Promise.prototype._fireEvent = defaultFireEvent;
                                }
                            }
                            return Promise;
                        };

                        function defaultFireEvent() {
                            return false;
                        }

                        Promise.prototype._fireEvent = defaultFireEvent;
                        Promise.prototype._execute = function (executor, resolve, reject) {
                            try {
                                executor(resolve, reject);
                            } catch (e) {
                                return e;
                            }
                        };
                        Promise.prototype._onCancel = function () {};
                        Promise.prototype._setOnCancel = function (handler) {
                            ;
                        };
                        Promise.prototype._attachCancellationCallback = function (onCancel) {
                            ;
                        };
                        Promise.prototype._captureStackTrace = function () {};
                        Promise.prototype._attachExtraTrace = function () {};
                        Promise.prototype._clearCancellationData = function () {};
                        Promise.prototype._propagateFrom = function (parent, flags) {
                            ;
                            ;
                        };

                        function cancellationExecute(executor, resolve, reject) {
                            var promise = this;
                            try {
                                executor(resolve, reject, function (onCancel) {
                                    if (typeof onCancel !== "function") {
                                        throw new TypeError("onCancel must be a function, got: " + util.toString(onCancel));
                                    }
                                    promise._attachCancellationCallback(onCancel);
                                });
                            } catch (e) {
                                return e;
                            }
                        }

                        function cancellationAttachCancellationCallback(onCancel) {
                            if (!this._isCancellable()) return this;

                            var previousOnCancel = this._onCancel();
                            if (previousOnCancel !== undefined) {
                                if (util.isArray(previousOnCancel)) {
                                    previousOnCancel.push(onCancel);
                                } else {
                                    this._setOnCancel([previousOnCancel, onCancel]);
                                }
                            } else {
                                this._setOnCancel(onCancel);
                            }
                        }

                        function cancellationOnCancel() {
                            return this._onCancelField;
                        }

                        function cancellationSetOnCancel(onCancel) {
                            this._onCancelField = onCancel;
                        }

                        function cancellationClearCancellationData() {
                            this._cancellationParent = undefined;
                            this._onCancelField = undefined;
                        }

                        function cancellationPropagateFrom(parent, flags) {
                            if ((flags & 1) !== 0) {
                                this._cancellationParent = parent;
                                var branchesRemainingToCancel = parent._branchesRemainingToCancel;
                                if (branchesRemainingToCancel === undefined) {
                                    branchesRemainingToCancel = 0;
                                }
                                parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
                            }
                            if ((flags & 2) !== 0 && parent._isBound()) {
                                this._setBoundTo(parent._boundTo);
                            }
                        }

                        function bindingPropagateFrom(parent, flags) {
                            if ((flags & 2) !== 0 && parent._isBound()) {
                                this._setBoundTo(parent._boundTo);
                            }
                        }
                        var propagateFromFunction = bindingPropagateFrom;

                        function boundValueFunction() {
                            var ret = this._boundTo;
                            if (ret !== undefined) {
                                if (ret instanceof Promise) {
                                    if (ret.isFulfilled()) {
                                        return ret.value();
                                    } else {
                                        return undefined;
                                    }
                                }
                            }
                            return ret;
                        }

                        function longStackTracesCaptureStackTrace() {
                            this._trace = new CapturedTrace(this._peekContext());
                        }

                        function longStackTracesAttachExtraTrace(error, ignoreSelf) {
                            if (canAttachTrace(error)) {
                                var trace = this._trace;
                                if (trace !== undefined) {
                                    if (ignoreSelf) trace = trace._parent;
                                }
                                if (trace !== undefined) {
                                    trace.attachExtraTrace(error);
                                } else if (!error.__stackCleaned__) {
                                    var parsed = parseStackAndMessage(error);
                                    util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n"));
                                    util.notEnumerableProp(error, "__stackCleaned__", true);
                                }
                            }
                        }

                        function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
                            if (returnValue === undefined && promiseCreated !== null && wForgottenReturn) {
                                if (parent !== undefined && parent._returnedNonUndefined()) return;
                                if ((promise._bitField & 65535) === 0) return;

                                if (name) name = name + " ";
                                var handlerLine = "";
                                var creatorLine = "";
                                if (promiseCreated._trace) {
                                    var traceLines = promiseCreated._trace.stack.split("\n");
                                    var stack = cleanStack(traceLines);
                                    for (var i = stack.length - 1; i >= 0; --i) {
                                        var line = stack[i];
                                        if (!nodeFramePattern.test(line)) {
                                            var lineMatches = line.match(parseLinePattern);
                                            if (lineMatches) {
                                                handlerLine = "at " + lineMatches[1] + ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                                            }
                                            break;
                                        }
                                    }

                                    if (stack.length > 0) {
                                        var firstUserLine = stack[0];
                                        for (var i = 0; i < traceLines.length; ++i) {

                                            if (traceLines[i] === firstUserLine) {
                                                if (i > 0) {
                                                    creatorLine = "\n" + traceLines[i - 1];
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                                var msg = "a promise was created in a " + name + "handler " + handlerLine + "but was not returned from it, " + "see http://goo.gl/rRqMUw" + creatorLine;
                                promise._warn(msg, true, promiseCreated);
                            }
                        }

                        function deprecated(name, replacement) {
                            var message = name + " is deprecated and will be removed in a future version.";
                            if (replacement) message += " Use " + replacement + " instead.";
                            return warn(message);
                        }

                        function warn(message, shouldUseOwnTrace, promise) {
                            if (!config.warnings) return;
                            var warning = new Warning(message);
                            var ctx;
                            if (shouldUseOwnTrace) {
                                promise._attachExtraTrace(warning);
                            } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
                                ctx.attachExtraTrace(warning);
                            } else {
                                var parsed = parseStackAndMessage(warning);
                                warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
                            }

                            if (!activeFireEvent("warning", warning)) {
                                formatAndLogError(warning, "", true);
                            }
                        }

                        function reconstructStack(message, stacks) {
                            for (var i = 0; i < stacks.length - 1; ++i) {
                                stacks[i].push("From previous event:");
                                stacks[i] = stacks[i].join("\n");
                            }
                            if (i < stacks.length) {
                                stacks[i] = stacks[i].join("\n");
                            }
                            return message + "\n" + stacks.join("\n");
                        }

                        function removeDuplicateOrEmptyJumps(stacks) {
                            for (var i = 0; i < stacks.length; ++i) {
                                if (stacks[i].length === 0 || i + 1 < stacks.length && stacks[i][0] === stacks[i + 1][0]) {
                                    stacks.splice(i, 1);
                                    i--;
                                }
                            }
                        }

                        function removeCommonRoots(stacks) {
                            var current = stacks[0];
                            for (var i = 1; i < stacks.length; ++i) {
                                var prev = stacks[i];
                                var currentLastIndex = current.length - 1;
                                var currentLastLine = current[currentLastIndex];
                                var commonRootMeetPoint = -1;

                                for (var j = prev.length - 1; j >= 0; --j) {
                                    if (prev[j] === currentLastLine) {
                                        commonRootMeetPoint = j;
                                        break;
                                    }
                                }

                                for (var j = commonRootMeetPoint; j >= 0; --j) {
                                    var line = prev[j];
                                    if (current[currentLastIndex] === line) {
                                        current.pop();
                                        currentLastIndex--;
                                    } else {
                                        break;
                                    }
                                }
                                current = prev;
                            }
                        }

                        function cleanStack(stack) {
                            var ret = [];
                            for (var i = 0; i < stack.length; ++i) {
                                var line = stack[i];
                                var isTraceLine = "    (No stack trace)" === line || stackFramePattern.test(line);
                                var isInternalFrame = isTraceLine && shouldIgnore(line);
                                if (isTraceLine && !isInternalFrame) {
                                    if (indentStackFrames && line.charAt(0) !== " ") {
                                        line = "    " + line;
                                    }
                                    ret.push(line);
                                }
                            }
                            return ret;
                        }

                        function stackFramesAsArray(error) {
                            var stack = error.stack.replace(/\s+$/g, "").split("\n");
                            for (var i = 0; i < stack.length; ++i) {
                                var line = stack[i];
                                if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
                                    break;
                                }
                            }
                            if (i > 0 && error.name != "SyntaxError") {
                                stack = stack.slice(i);
                            }
                            return stack;
                        }

                        function parseStackAndMessage(error) {
                            var stack = error.stack;
                            var message = error.toString();
                            stack = typeof stack === "string" && stack.length > 0 ? stackFramesAsArray(error) : ["    (No stack trace)"];
                            return {
                                message: message,
                                stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
                            };
                        }

                        function formatAndLogError(error, title, isSoft) {
                            if (typeof console !== "undefined") {
                                var message;
                                if (util.isObject(error)) {
                                    var stack = error.stack;
                                    message = title + formatStack(stack, error);
                                } else {
                                    message = title + String(error);
                                }
                                if (typeof printWarning === "function") {
                                    printWarning(message, isSoft);
                                } else if (typeof console.log === "function" || typeof console.log === "object") {
                                    console.log(message);
                                }
                            }
                        }

                        function fireRejectionEvent(name, localHandler, reason, promise) {
                            var localEventFired = false;
                            try {
                                if (typeof localHandler === "function") {
                                    localEventFired = true;
                                    if (name === "rejectionHandled") {
                                        localHandler(promise);
                                    } else {
                                        localHandler(reason, promise);
                                    }
                                }
                            } catch (e) {
                                async.throwLater(e);
                            }

                            if (name === "unhandledRejection") {
                                if (!activeFireEvent(name, reason, promise) && !localEventFired) {
                                    formatAndLogError(reason, "Unhandled rejection ");
                                }
                            } else {
                                activeFireEvent(name, promise);
                            }
                        }

                        function formatNonError(obj) {
                            var str;
                            if (typeof obj === "function") {
                                str = "[function " + (obj.name || "anonymous") + "]";
                            } else {
                                str = obj && typeof obj.toString === "function" ? obj.toString() : util.toString(obj);
                                var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                                if (ruselessToString.test(str)) {
                                    try {
                                        var newStr = JSON.stringify(obj);
                                        str = newStr;
                                    } catch (e) {}
                                }
                                if (str.length === 0) {
                                    str = "(empty array)";
                                }
                            }
                            return "(<" + snip(str) + ">, no stack trace)";
                        }

                        function snip(str) {
                            var maxChars = 41;
                            if (str.length < maxChars) {
                                return str;
                            }
                            return str.substr(0, maxChars - 3) + "...";
                        }

                        function longStackTracesIsSupported() {
                            return typeof captureStackTrace === "function";
                        }

                        var shouldIgnore = function () {
                            return false;
                        };
                        var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                        function parseLineInfo(line) {
                            var matches = line.match(parseLineInfoRegex);
                            if (matches) {
                                return {
                                    fileName: matches[1],
                                    line: parseInt(matches[2], 10)
                                };
                            }
                        }

                        function setBounds(firstLineError, lastLineError) {
                            if (!longStackTracesIsSupported()) return;
                            var firstStackLines = firstLineError.stack.split("\n");
                            var lastStackLines = lastLineError.stack.split("\n");
                            var firstIndex = -1;
                            var lastIndex = -1;
                            var firstFileName;
                            var lastFileName;
                            for (var i = 0; i < firstStackLines.length; ++i) {
                                var result = parseLineInfo(firstStackLines[i]);
                                if (result) {
                                    firstFileName = result.fileName;
                                    firstIndex = result.line;
                                    break;
                                }
                            }
                            for (var i = 0; i < lastStackLines.length; ++i) {
                                var result = parseLineInfo(lastStackLines[i]);
                                if (result) {
                                    lastFileName = result.fileName;
                                    lastIndex = result.line;
                                    break;
                                }
                            }
                            if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName || firstFileName !== lastFileName || firstIndex >= lastIndex) {
                                return;
                            }

                            shouldIgnore = function (line) {
                                if (bluebirdFramePattern.test(line)) return true;
                                var info = parseLineInfo(line);
                                if (info) {
                                    if (info.fileName === firstFileName && firstIndex <= info.line && info.line <= lastIndex) {
                                        return true;
                                    }
                                }
                                return false;
                            };
                        }

                        function CapturedTrace(parent) {
                            this._parent = parent;
                            this._promisesCreated = 0;
                            var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
                            captureStackTrace(this, CapturedTrace);
                            if (length > 32) this.uncycle();
                        }
                        util.inherits(CapturedTrace, Error);
                        Context.CapturedTrace = CapturedTrace;

                        CapturedTrace.prototype.uncycle = function () {
                            var length = this._length;
                            if (length < 2) return;
                            var nodes = [];
                            var stackToIndex = {};

                            for (var i = 0, node = this; node !== undefined; ++i) {
                                nodes.push(node);
                                node = node._parent;
                            }
                            length = this._length = i;
                            for (var i = length - 1; i >= 0; --i) {
                                var stack = nodes[i].stack;
                                if (stackToIndex[stack] === undefined) {
                                    stackToIndex[stack] = i;
                                }
                            }
                            for (var i = 0; i < length; ++i) {
                                var currentStack = nodes[i].stack;
                                var index = stackToIndex[currentStack];
                                if (index !== undefined && index !== i) {
                                    if (index > 0) {
                                        nodes[index - 1]._parent = undefined;
                                        nodes[index - 1]._length = 1;
                                    }
                                    nodes[i]._parent = undefined;
                                    nodes[i]._length = 1;
                                    var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

                                    if (index < length - 1) {
                                        cycleEdgeNode._parent = nodes[index + 1];
                                        cycleEdgeNode._parent.uncycle();
                                        cycleEdgeNode._length = cycleEdgeNode._parent._length + 1;
                                    } else {
                                        cycleEdgeNode._parent = undefined;
                                        cycleEdgeNode._length = 1;
                                    }
                                    var currentChildLength = cycleEdgeNode._length + 1;
                                    for (var j = i - 2; j >= 0; --j) {
                                        nodes[j]._length = currentChildLength;
                                        currentChildLength++;
                                    }
                                    return;
                                }
                            }
                        };

                        CapturedTrace.prototype.attachExtraTrace = function (error) {
                            if (error.__stackCleaned__) return;
                            this.uncycle();
                            var parsed = parseStackAndMessage(error);
                            var message = parsed.message;
                            var stacks = [parsed.stack];

                            var trace = this;
                            while (trace !== undefined) {
                                stacks.push(cleanStack(trace.stack.split("\n")));
                                trace = trace._parent;
                            }
                            removeCommonRoots(stacks);
                            removeDuplicateOrEmptyJumps(stacks);
                            util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
                            util.notEnumerableProp(error, "__stackCleaned__", true);
                        };

                        var captureStackTrace = function stackDetection() {
                            var v8stackFramePattern = /^\s*at\s*/;
                            var v8stackFormatter = function (stack, error) {
                                if (typeof stack === "string") return stack;

                                if (error.name !== undefined && error.message !== undefined) {
                                    return error.toString();
                                }
                                return formatNonError(error);
                            };

                            if (typeof Error.stackTraceLimit === "number" && typeof Error.captureStackTrace === "function") {
                                Error.stackTraceLimit += 6;
                                stackFramePattern = v8stackFramePattern;
                                formatStack = v8stackFormatter;
                                var captureStackTrace = Error.captureStackTrace;

                                shouldIgnore = function (line) {
                                    return bluebirdFramePattern.test(line);
                                };
                                return function (receiver, ignoreUntil) {
                                    Error.stackTraceLimit += 6;
                                    captureStackTrace(receiver, ignoreUntil);
                                    Error.stackTraceLimit -= 6;
                                };
                            }
                            var err = new Error();

                            if (typeof err.stack === "string" && err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
                                stackFramePattern = /@/;
                                formatStack = v8stackFormatter;
                                indentStackFrames = true;
                                return function captureStackTrace(o) {
                                    o.stack = new Error().stack;
                                };
                            }

                            var hasStackAfterThrow;
                            try {
                                throw new Error();
                            } catch (e) {
                                hasStackAfterThrow = "stack" in e;
                            }
                            if (!("stack" in err) && hasStackAfterThrow && typeof Error.stackTraceLimit === "number") {
                                stackFramePattern = v8stackFramePattern;
                                formatStack = v8stackFormatter;
                                return function captureStackTrace(o) {
                                    Error.stackTraceLimit += 6;
                                    try {
                                        throw new Error();
                                    } catch (e) {
                                        o.stack = e.stack;
                                    }
                                    Error.stackTraceLimit -= 6;
                                };
                            }

                            formatStack = function (stack, error) {
                                if (typeof stack === "string") return stack;

                                if ((typeof error === "object" || typeof error === "function") && error.name !== undefined && error.message !== undefined) {
                                    return error.toString();
                                }
                                return formatNonError(error);
                            };

                            return null;
                        }([]);

                        if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
                            printWarning = function (message) {
                                console.warn(message);
                            };
                            if (util.isNode && process.stderr.isTTY) {
                                printWarning = function (message, isSoft) {
                                    var color = isSoft ? "\u001b[33m" : "\u001b[31m";
                                    console.warn(color + message + "\u001b[0m\n");
                                };
                            } else if (!util.isNode && typeof new Error().stack === "string") {
                                printWarning = function (message, isSoft) {
                                    console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
                                };
                            }
                        }

                        var config = {
                            warnings: warnings,
                            longStackTraces: false,
                            cancellation: false,
                            monitoring: false
                        };

                        if (longStackTraces) Promise.longStackTraces();

                        return {
                            longStackTraces: function () {
                                return config.longStackTraces;
                            },
                            warnings: function () {
                                return config.warnings;
                            },
                            cancellation: function () {
                                return config.cancellation;
                            },
                            monitoring: function () {
                                return config.monitoring;
                            },
                            propagateFromFunction: function () {
                                return propagateFromFunction;
                            },
                            boundValueFunction: function () {
                                return boundValueFunction;
                            },
                            checkForgottenReturns: checkForgottenReturns,
                            setBounds: setBounds,
                            warn: warn,
                            deprecated: deprecated,
                            CapturedTrace: CapturedTrace,
                            fireDomEvent: fireDomEvent,
                            fireGlobalEvent: fireGlobalEvent
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 10: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        function returner() {
                            return this.value;
                        }
                        function thrower() {
                            throw this.reason;
                        }

                        Promise.prototype["return"] = Promise.prototype.thenReturn = function (value) {
                            if (value instanceof Promise) value.suppressUnhandledRejections();
                            return this._then(returner, undefined, undefined, { value: value }, undefined);
                        };

                        Promise.prototype["throw"] = Promise.prototype.thenThrow = function (reason) {
                            return this._then(thrower, undefined, undefined, { reason: reason }, undefined);
                        };

                        Promise.prototype.catchThrow = function (reason) {
                            if (arguments.length <= 1) {
                                return this._then(undefined, thrower, undefined, { reason: reason }, undefined);
                            } else {
                                var _reason = arguments[1];
                                var handler = function () {
                                    throw _reason;
                                };
                                return this.caught(reason, handler);
                            }
                        };

                        Promise.prototype.catchReturn = function (value) {
                            if (arguments.length <= 1) {
                                if (value instanceof Promise) value.suppressUnhandledRejections();
                                return this._then(undefined, returner, undefined, { value: value }, undefined);
                            } else {
                                var _value = arguments[1];
                                if (_value instanceof Promise) _value.suppressUnhandledRejections();
                                var handler = function () {
                                    return _value;
                                };
                                return this.caught(value, handler);
                            }
                        };
                    };
                }, {}], 11: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var PromiseReduce = Promise.reduce;
                        var PromiseAll = Promise.all;

                        function promiseAllThis() {
                            return PromiseAll(this);
                        }

                        function PromiseMapSeries(promises, fn) {
                            return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
                        }

                        Promise.prototype.each = function (fn) {
                            return PromiseReduce(this, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, this, undefined);
                        };

                        Promise.prototype.mapSeries = function (fn) {
                            return PromiseReduce(this, fn, INTERNAL, INTERNAL);
                        };

                        Promise.each = function (promises, fn) {
                            return PromiseReduce(promises, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, promises, undefined);
                        };

                        Promise.mapSeries = PromiseMapSeries;
                    };
                }, {}], 12: [function (_dereq_, module, exports) {
                    "use strict";

                    var es5 = _dereq_("./es5");
                    var Objectfreeze = es5.freeze;
                    var util = _dereq_("./util");
                    var inherits = util.inherits;
                    var notEnumerableProp = util.notEnumerableProp;

                    function subError(nameProperty, defaultMessage) {
                        function SubError(message) {
                            if (!(this instanceof SubError)) return new SubError(message);
                            notEnumerableProp(this, "message", typeof message === "string" ? message : defaultMessage);
                            notEnumerableProp(this, "name", nameProperty);
                            if (Error.captureStackTrace) {
                                Error.captureStackTrace(this, this.constructor);
                            } else {
                                Error.call(this);
                            }
                        }
                        inherits(SubError, Error);
                        return SubError;
                    }

                    var _TypeError, _RangeError;
                    var Warning = subError("Warning", "warning");
                    var CancellationError = subError("CancellationError", "cancellation error");
                    var TimeoutError = subError("TimeoutError", "timeout error");
                    var AggregateError = subError("AggregateError", "aggregate error");
                    try {
                        _TypeError = TypeError;
                        _RangeError = RangeError;
                    } catch (e) {
                        _TypeError = subError("TypeError", "type error");
                        _RangeError = subError("RangeError", "range error");
                    }

                    var methods = ("join pop push shift unshift slice filter forEach some " + "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

                    for (var i = 0; i < methods.length; ++i) {
                        if (typeof Array.prototype[methods[i]] === "function") {
                            AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
                        }
                    }

                    es5.defineProperty(AggregateError.prototype, "length", {
                        value: 0,
                        configurable: false,
                        writable: true,
                        enumerable: true
                    });
                    AggregateError.prototype["isOperational"] = true;
                    var level = 0;
                    AggregateError.prototype.toString = function () {
                        var indent = Array(level * 4 + 1).join(" ");
                        var ret = "\n" + indent + "AggregateError of:" + "\n";
                        level++;
                        indent = Array(level * 4 + 1).join(" ");
                        for (var i = 0; i < this.length; ++i) {
                            var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
                            var lines = str.split("\n");
                            for (var j = 0; j < lines.length; ++j) {
                                lines[j] = indent + lines[j];
                            }
                            str = lines.join("\n");
                            ret += str + "\n";
                        }
                        level--;
                        return ret;
                    };

                    function OperationalError(message) {
                        if (!(this instanceof OperationalError)) return new OperationalError(message);
                        notEnumerableProp(this, "name", "OperationalError");
                        notEnumerableProp(this, "message", message);
                        this.cause = message;
                        this["isOperational"] = true;

                        if (message instanceof Error) {
                            notEnumerableProp(this, "message", message.message);
                            notEnumerableProp(this, "stack", message.stack);
                        } else if (Error.captureStackTrace) {
                            Error.captureStackTrace(this, this.constructor);
                        }
                    }
                    inherits(OperationalError, Error);

                    var errorTypes = Error["__BluebirdErrorTypes__"];
                    if (!errorTypes) {
                        errorTypes = Objectfreeze({
                            CancellationError: CancellationError,
                            TimeoutError: TimeoutError,
                            OperationalError: OperationalError,
                            RejectionError: OperationalError,
                            AggregateError: AggregateError
                        });
                        es5.defineProperty(Error, "__BluebirdErrorTypes__", {
                            value: errorTypes,
                            writable: false,
                            enumerable: false,
                            configurable: false
                        });
                    }

                    module.exports = {
                        Error: Error,
                        TypeError: _TypeError,
                        RangeError: _RangeError,
                        CancellationError: errorTypes.CancellationError,
                        OperationalError: errorTypes.OperationalError,
                        TimeoutError: errorTypes.TimeoutError,
                        AggregateError: errorTypes.AggregateError,
                        Warning: Warning
                    };
                }, { "./es5": 13, "./util": 36 }], 13: [function (_dereq_, module, exports) {
                    var isES5 = function () {
                        "use strict";

                        return this === undefined;
                    }();

                    if (isES5) {
                        module.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            getDescriptor: Object.getOwnPropertyDescriptor,
                            keys: Object.keys,
                            names: Object.getOwnPropertyNames,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: isES5,
                            propertyIsWritable: function (obj, prop) {
                                var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
                                return !!(!descriptor || descriptor.writable || descriptor.set);
                            }
                        };
                    } else {
                        var has = {}.hasOwnProperty;
                        var str = {}.toString;
                        var proto = {}.constructor.prototype;

                        var ObjectKeys = function (o) {
                            var ret = [];
                            for (var key in o) {
                                if (has.call(o, key)) {
                                    ret.push(key);
                                }
                            }
                            return ret;
                        };

                        var ObjectGetDescriptor = function (o, key) {
                            return { value: o[key] };
                        };

                        var ObjectDefineProperty = function (o, key, desc) {
                            o[key] = desc.value;
                            return o;
                        };

                        var ObjectFreeze = function (obj) {
                            return obj;
                        };

                        var ObjectGetPrototypeOf = function (obj) {
                            try {
                                return Object(obj).constructor.prototype;
                            } catch (e) {
                                return proto;
                            }
                        };

                        var ArrayIsArray = function (obj) {
                            try {
                                return str.call(obj) === "[object Array]";
                            } catch (e) {
                                return false;
                            }
                        };

                        module.exports = {
                            isArray: ArrayIsArray,
                            keys: ObjectKeys,
                            names: ObjectKeys,
                            defineProperty: ObjectDefineProperty,
                            getDescriptor: ObjectGetDescriptor,
                            freeze: ObjectFreeze,
                            getPrototypeOf: ObjectGetPrototypeOf,
                            isES5: isES5,
                            propertyIsWritable: function () {
                                return true;
                            }
                        };
                    }
                }, {}], 14: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var PromiseMap = Promise.map;

                        Promise.prototype.filter = function (fn, options) {
                            return PromiseMap(this, fn, options, INTERNAL);
                        };

                        Promise.filter = function (promises, fn, options) {
                            return PromiseMap(promises, fn, options, INTERNAL);
                        };
                    };
                }, {}], 15: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, tryConvertToPromise, NEXT_FILTER) {
                        var util = _dereq_("./util");
                        var CancellationError = Promise.CancellationError;
                        var errorObj = util.errorObj;
                        var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

                        function PassThroughHandlerContext(promise, type, handler) {
                            this.promise = promise;
                            this.type = type;
                            this.handler = handler;
                            this.called = false;
                            this.cancelPromise = null;
                        }

                        PassThroughHandlerContext.prototype.isFinallyHandler = function () {
                            return this.type === 0;
                        };

                        function FinallyHandlerCancelReaction(finallyHandler) {
                            this.finallyHandler = finallyHandler;
                        }

                        FinallyHandlerCancelReaction.prototype._resultCancelled = function () {
                            checkCancel(this.finallyHandler);
                        };

                        function checkCancel(ctx, reason) {
                            if (ctx.cancelPromise != null) {
                                if (arguments.length > 1) {
                                    ctx.cancelPromise._reject(reason);
                                } else {
                                    ctx.cancelPromise._cancel();
                                }
                                ctx.cancelPromise = null;
                                return true;
                            }
                            return false;
                        }

                        function succeed() {
                            return finallyHandler.call(this, this.promise._target()._settledValue());
                        }
                        function fail(reason) {
                            if (checkCancel(this, reason)) return;
                            errorObj.e = reason;
                            return errorObj;
                        }
                        function finallyHandler(reasonOrValue) {
                            var promise = this.promise;
                            var handler = this.handler;

                            if (!this.called) {
                                this.called = true;
                                var ret = this.isFinallyHandler() ? handler.call(promise._boundValue()) : handler.call(promise._boundValue(), reasonOrValue);
                                if (ret === NEXT_FILTER) {
                                    return ret;
                                } else if (ret !== undefined) {
                                    promise._setReturnedNonUndefined();
                                    var maybePromise = tryConvertToPromise(ret, promise);
                                    if (maybePromise instanceof Promise) {
                                        if (this.cancelPromise != null) {
                                            if (maybePromise._isCancelled()) {
                                                var reason = new CancellationError("late cancellation observer");
                                                promise._attachExtraTrace(reason);
                                                errorObj.e = reason;
                                                return errorObj;
                                            } else if (maybePromise.isPending()) {
                                                maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
                                            }
                                        }
                                        return maybePromise._then(succeed, fail, undefined, this, undefined);
                                    }
                                }
                            }

                            if (promise.isRejected()) {
                                checkCancel(this);
                                errorObj.e = reasonOrValue;
                                return errorObj;
                            } else {
                                checkCancel(this);
                                return reasonOrValue;
                            }
                        }

                        Promise.prototype._passThrough = function (handler, type, success, fail) {
                            if (typeof handler !== "function") return this.then();
                            return this._then(success, fail, undefined, new PassThroughHandlerContext(this, type, handler), undefined);
                        };

                        Promise.prototype.lastly = Promise.prototype["finally"] = function (handler) {
                            return this._passThrough(handler, 0, finallyHandler, finallyHandler);
                        };

                        Promise.prototype.tap = function (handler) {
                            return this._passThrough(handler, 1, finallyHandler);
                        };

                        Promise.prototype.tapCatch = function (handlerOrPredicate) {
                            var len = arguments.length;
                            if (len === 1) {
                                return this._passThrough(handlerOrPredicate, 1, undefined, finallyHandler);
                            } else {
                                var catchInstances = new Array(len - 1),
                                    j = 0,
                                    i;
                                for (i = 0; i < len - 1; ++i) {
                                    var item = arguments[i];
                                    if (util.isObject(item)) {
                                        catchInstances[j++] = item;
                                    } else {
                                        return Promise.reject(new TypeError("tapCatch statement predicate: " + "expecting an object but got " + util.classString(item)));
                                    }
                                }
                                catchInstances.length = j;
                                var handler = arguments[i];
                                return this._passThrough(catchFilter(catchInstances, handler, this), 1, undefined, finallyHandler);
                            }
                        };

                        return PassThroughHandlerContext;
                    };
                }, { "./catch_filter": 7, "./util": 36 }], 16: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
                        var errors = _dereq_("./errors");
                        var TypeError = errors.TypeError;
                        var util = _dereq_("./util");
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        var yieldHandlers = [];

                        function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
                            for (var i = 0; i < yieldHandlers.length; ++i) {
                                traceParent._pushContext();
                                var result = tryCatch(yieldHandlers[i])(value);
                                traceParent._popContext();
                                if (result === errorObj) {
                                    traceParent._pushContext();
                                    var ret = Promise.reject(errorObj.e);
                                    traceParent._popContext();
                                    return ret;
                                }
                                var maybePromise = tryConvertToPromise(result, traceParent);
                                if (maybePromise instanceof Promise) return maybePromise;
                            }
                            return null;
                        }

                        function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
                            if (debug.cancellation()) {
                                var internal = new Promise(INTERNAL);
                                var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
                                this._promise = internal.lastly(function () {
                                    return _finallyPromise;
                                });
                                internal._captureStackTrace();
                                internal._setOnCancel(this);
                            } else {
                                var promise = this._promise = new Promise(INTERNAL);
                                promise._captureStackTrace();
                            }
                            this._stack = stack;
                            this._generatorFunction = generatorFunction;
                            this._receiver = receiver;
                            this._generator = undefined;
                            this._yieldHandlers = typeof yieldHandler === "function" ? [yieldHandler].concat(yieldHandlers) : yieldHandlers;
                            this._yieldedPromise = null;
                            this._cancellationPhase = false;
                        }
                        util.inherits(PromiseSpawn, Proxyable);

                        PromiseSpawn.prototype._isResolved = function () {
                            return this._promise === null;
                        };

                        PromiseSpawn.prototype._cleanup = function () {
                            this._promise = this._generator = null;
                            if (debug.cancellation() && this._finallyPromise !== null) {
                                this._finallyPromise._fulfill();
                                this._finallyPromise = null;
                            }
                        };

                        PromiseSpawn.prototype._promiseCancelled = function () {
                            if (this._isResolved()) return;
                            var implementsReturn = typeof this._generator["return"] !== "undefined";

                            var result;
                            if (!implementsReturn) {
                                var reason = new Promise.CancellationError("generator .return() sentinel");
                                Promise.coroutine.returnSentinel = reason;
                                this._promise._attachExtraTrace(reason);
                                this._promise._pushContext();
                                result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                                this._promise._popContext();
                            } else {
                                this._promise._pushContext();
                                result = tryCatch(this._generator["return"]).call(this._generator, undefined);
                                this._promise._popContext();
                            }
                            this._cancellationPhase = true;
                            this._yieldedPromise = null;
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._promiseFulfilled = function (value) {
                            this._yieldedPromise = null;
                            this._promise._pushContext();
                            var result = tryCatch(this._generator.next).call(this._generator, value);
                            this._promise._popContext();
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._promiseRejected = function (reason) {
                            this._yieldedPromise = null;
                            this._promise._attachExtraTrace(reason);
                            this._promise._pushContext();
                            var result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                            this._promise._popContext();
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._resultCancelled = function () {
                            if (this._yieldedPromise instanceof Promise) {
                                var promise = this._yieldedPromise;
                                this._yieldedPromise = null;
                                promise.cancel();
                            }
                        };

                        PromiseSpawn.prototype.promise = function () {
                            return this._promise;
                        };

                        PromiseSpawn.prototype._run = function () {
                            this._generator = this._generatorFunction.call(this._receiver);
                            this._receiver = this._generatorFunction = undefined;
                            this._promiseFulfilled(undefined);
                        };

                        PromiseSpawn.prototype._continue = function (result) {
                            var promise = this._promise;
                            if (result === errorObj) {
                                this._cleanup();
                                if (this._cancellationPhase) {
                                    return promise.cancel();
                                } else {
                                    return promise._rejectCallback(result.e, false);
                                }
                            }

                            var value = result.value;
                            if (result.done === true) {
                                this._cleanup();
                                if (this._cancellationPhase) {
                                    return promise.cancel();
                                } else {
                                    return promise._resolveCallback(value);
                                }
                            } else {
                                var maybePromise = tryConvertToPromise(value, this._promise);
                                if (!(maybePromise instanceof Promise)) {
                                    maybePromise = promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise);
                                    if (maybePromise === null) {
                                        this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) + "From coroutine:\u000a" + this._stack.split("\n").slice(1, -7).join("\n")));
                                        return;
                                    }
                                }
                                maybePromise = maybePromise._target();
                                var bitField = maybePromise._bitField;
                                ;
                                if ((bitField & 50397184) === 0) {
                                    this._yieldedPromise = maybePromise;
                                    maybePromise._proxy(this, null);
                                } else if ((bitField & 33554432) !== 0) {
                                    Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value());
                                } else if ((bitField & 16777216) !== 0) {
                                    Promise._async.invoke(this._promiseRejected, this, maybePromise._reason());
                                } else {
                                    this._promiseCancelled();
                                }
                            }
                        };

                        Promise.coroutine = function (generatorFunction, options) {
                            if (typeof generatorFunction !== "function") {
                                throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var yieldHandler = Object(options).yieldHandler;
                            var PromiseSpawn$ = PromiseSpawn;
                            var stack = new Error().stack;
                            return function () {
                                var generator = generatorFunction.apply(this, arguments);
                                var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler, stack);
                                var ret = spawn.promise();
                                spawn._generator = generator;
                                spawn._promiseFulfilled(undefined);
                                return ret;
                            };
                        };

                        Promise.coroutine.addYieldHandler = function (fn) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            yieldHandlers.push(fn);
                        };

                        Promise.spawn = function (generatorFunction) {
                            debug.deprecated("Promise.spawn()", "Promise.coroutine()");
                            if (typeof generatorFunction !== "function") {
                                return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var spawn = new PromiseSpawn(generatorFunction, this);
                            var ret = spawn.promise();
                            spawn._run(Promise.spawn);
                            return ret;
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 17: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain) {
                        var util = _dereq_("./util");
                        var canEvaluate = util.canEvaluate;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var reject;

                        if (!true) {
                            if (canEvaluate) {
                                var thenCallback = function (i) {
                                    return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
                                };

                                var promiseSetter = function (i) {
                                    return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
                                };

                                var generateHolderClass = function (total) {
                                    var props = new Array(total);
                                    for (var i = 0; i < props.length; ++i) {
                                        props[i] = "this.p" + (i + 1);
                                    }
                                    var assignment = props.join(" = ") + " = null;";
                                    var cancellationCode = "var promise;\n" + props.map(function (prop) {
                                        return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
                                    }).join("\n");
                                    var passedArguments = props.join(", ");
                                    var name = "Holder$" + total;

                                    var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

                                    code = code.replace(/\[TheName\]/g, name).replace(/\[TheTotal\]/g, total).replace(/\[ThePassedArguments\]/g, passedArguments).replace(/\[TheProperties\]/g, assignment).replace(/\[CancellationCode\]/g, cancellationCode);

                                    return new Function("tryCatch", "errorObj", "Promise", "async", code)(tryCatch, errorObj, Promise, async);
                                };

                                var holderClasses = [];
                                var thenCallbacks = [];
                                var promiseSetters = [];

                                for (var i = 0; i < 8; ++i) {
                                    holderClasses.push(generateHolderClass(i + 1));
                                    thenCallbacks.push(thenCallback(i + 1));
                                    promiseSetters.push(promiseSetter(i + 1));
                                }

                                reject = function (reason) {
                                    this._reject(reason);
                                };
                            }
                        }

                        Promise.join = function () {
                            var last = arguments.length - 1;
                            var fn;
                            if (last > 0 && typeof arguments[last] === "function") {
                                fn = arguments[last];
                                if (!true) {
                                    if (last <= 8 && canEvaluate) {
                                        var ret = new Promise(INTERNAL);
                                        ret._captureStackTrace();
                                        var HolderClass = holderClasses[last - 1];
                                        var holder = new HolderClass(fn);
                                        var callbacks = thenCallbacks;

                                        for (var i = 0; i < last; ++i) {
                                            var maybePromise = tryConvertToPromise(arguments[i], ret);
                                            if (maybePromise instanceof Promise) {
                                                maybePromise = maybePromise._target();
                                                var bitField = maybePromise._bitField;
                                                ;
                                                if ((bitField & 50397184) === 0) {
                                                    maybePromise._then(callbacks[i], reject, undefined, ret, holder);
                                                    promiseSetters[i](maybePromise, holder);
                                                    holder.asyncNeeded = false;
                                                } else if ((bitField & 33554432) !== 0) {
                                                    callbacks[i].call(ret, maybePromise._value(), holder);
                                                } else if ((bitField & 16777216) !== 0) {
                                                    ret._reject(maybePromise._reason());
                                                } else {
                                                    ret._cancel();
                                                }
                                            } else {
                                                callbacks[i].call(ret, maybePromise, holder);
                                            }
                                        }

                                        if (!ret._isFateSealed()) {
                                            if (holder.asyncNeeded) {
                                                var domain = getDomain();
                                                if (domain !== null) {
                                                    holder.fn = util.domainBind(domain, holder.fn);
                                                }
                                            }
                                            ret._setAsyncGuaranteed();
                                            ret._setOnCancel(holder);
                                        }
                                        return ret;
                                    }
                                }
                            }
                            var args = [].slice.call(arguments);;
                            if (fn) args.pop();
                            var ret = new PromiseArray(args).promise();
                            return fn !== undefined ? ret.spread(fn) : ret;
                        };
                    };
                }, { "./util": 36 }], 18: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                        var getDomain = Promise._getDomain;
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var async = Promise._async;

                        function MappingPromiseArray(promises, fn, limit, _filter) {
                            this.constructor$(promises);
                            this._promise._captureStackTrace();
                            var domain = getDomain();
                            this._callback = domain === null ? fn : util.domainBind(domain, fn);
                            this._preservedValues = _filter === INTERNAL ? new Array(this.length()) : null;
                            this._limit = limit;
                            this._inFlight = 0;
                            this._queue = [];
                            async.invoke(this._asyncInit, this, undefined);
                        }
                        util.inherits(MappingPromiseArray, PromiseArray);

                        MappingPromiseArray.prototype._asyncInit = function () {
                            this._init$(undefined, -2);
                        };

                        MappingPromiseArray.prototype._init = function () {};

                        MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            var values = this._values;
                            var length = this.length();
                            var preservedValues = this._preservedValues;
                            var limit = this._limit;

                            if (index < 0) {
                                index = index * -1 - 1;
                                values[index] = value;
                                if (limit >= 1) {
                                    this._inFlight--;
                                    this._drainQueue();
                                    if (this._isResolved()) return true;
                                }
                            } else {
                                if (limit >= 1 && this._inFlight >= limit) {
                                    values[index] = value;
                                    this._queue.push(index);
                                    return false;
                                }
                                if (preservedValues !== null) preservedValues[index] = value;

                                var promise = this._promise;
                                var callback = this._callback;
                                var receiver = promise._boundValue();
                                promise._pushContext();
                                var ret = tryCatch(callback).call(receiver, value, index, length);
                                var promiseCreated = promise._popContext();
                                debug.checkForgottenReturns(ret, promiseCreated, preservedValues !== null ? "Promise.filter" : "Promise.map", promise);
                                if (ret === errorObj) {
                                    this._reject(ret.e);
                                    return true;
                                }

                                var maybePromise = tryConvertToPromise(ret, this._promise);
                                if (maybePromise instanceof Promise) {
                                    maybePromise = maybePromise._target();
                                    var bitField = maybePromise._bitField;
                                    ;
                                    if ((bitField & 50397184) === 0) {
                                        if (limit >= 1) this._inFlight++;
                                        values[index] = maybePromise;
                                        maybePromise._proxy(this, (index + 1) * -1);
                                        return false;
                                    } else if ((bitField & 33554432) !== 0) {
                                        ret = maybePromise._value();
                                    } else if ((bitField & 16777216) !== 0) {
                                        this._reject(maybePromise._reason());
                                        return true;
                                    } else {
                                        this._cancel();
                                        return true;
                                    }
                                }
                                values[index] = ret;
                            }
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= length) {
                                if (preservedValues !== null) {
                                    this._filter(values, preservedValues);
                                } else {
                                    this._resolve(values);
                                }
                                return true;
                            }
                            return false;
                        };

                        MappingPromiseArray.prototype._drainQueue = function () {
                            var queue = this._queue;
                            var limit = this._limit;
                            var values = this._values;
                            while (queue.length > 0 && this._inFlight < limit) {
                                if (this._isResolved()) return;
                                var index = queue.pop();
                                this._promiseFulfilled(values[index], index);
                            }
                        };

                        MappingPromiseArray.prototype._filter = function (booleans, values) {
                            var len = values.length;
                            var ret = new Array(len);
                            var j = 0;
                            for (var i = 0; i < len; ++i) {
                                if (booleans[i]) ret[j++] = values[i];
                            }
                            ret.length = j;
                            this._resolve(ret);
                        };

                        MappingPromiseArray.prototype.preservedValues = function () {
                            return this._preservedValues;
                        };

                        function map(promises, fn, options, _filter) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }

                            var limit = 0;
                            if (options !== undefined) {
                                if (typeof options === "object" && options !== null) {
                                    if (typeof options.concurrency !== "number") {
                                        return Promise.reject(new TypeError("'concurrency' must be a number but it is " + util.classString(options.concurrency)));
                                    }
                                    limit = options.concurrency;
                                } else {
                                    return Promise.reject(new TypeError("options argument must be an object but it is " + util.classString(options)));
                                }
                            }
                            limit = typeof limit === "number" && isFinite(limit) && limit >= 1 ? limit : 0;
                            return new MappingPromiseArray(promises, fn, limit, _filter).promise();
                        }

                        Promise.prototype.map = function (fn, options) {
                            return map(this, fn, options, null);
                        };

                        Promise.map = function (promises, fn, options, _filter) {
                            return map(promises, fn, options, _filter);
                        };
                    };
                }, { "./util": 36 }], 19: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;

                        Promise.method = function (fn) {
                            if (typeof fn !== "function") {
                                throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
                            }
                            return function () {
                                var ret = new Promise(INTERNAL);
                                ret._captureStackTrace();
                                ret._pushContext();
                                var value = tryCatch(fn).apply(this, arguments);
                                var promiseCreated = ret._popContext();
                                debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret);
                                ret._resolveFromSyncValue(value);
                                return ret;
                            };
                        };

                        Promise.attempt = Promise["try"] = function (fn) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            ret._pushContext();
                            var value;
                            if (arguments.length > 1) {
                                debug.deprecated("calling Promise.try with more than 1 argument");
                                var arg = arguments[1];
                                var ctx = arguments[2];
                                value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg) : tryCatch(fn).call(ctx, arg);
                            } else {
                                value = tryCatch(fn)();
                            }
                            var promiseCreated = ret._popContext();
                            debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret);
                            ret._resolveFromSyncValue(value);
                            return ret;
                        };

                        Promise.prototype._resolveFromSyncValue = function (value) {
                            if (value === util.errorObj) {
                                this._rejectCallback(value.e, false);
                            } else {
                                this._resolveCallback(value, true);
                            }
                        };
                    };
                }, { "./util": 36 }], 20: [function (_dereq_, module, exports) {
                    "use strict";

                    var util = _dereq_("./util");
                    var maybeWrapAsError = util.maybeWrapAsError;
                    var errors = _dereq_("./errors");
                    var OperationalError = errors.OperationalError;
                    var es5 = _dereq_("./es5");

                    function isUntypedError(obj) {
                        return obj instanceof Error && es5.getPrototypeOf(obj) === Error.prototype;
                    }

                    var rErrorKey = /^(?:name|message|stack|cause)$/;
                    function wrapAsOperationalError(obj) {
                        var ret;
                        if (isUntypedError(obj)) {
                            ret = new OperationalError(obj);
                            ret.name = obj.name;
                            ret.message = obj.message;
                            ret.stack = obj.stack;
                            var keys = es5.keys(obj);
                            for (var i = 0; i < keys.length; ++i) {
                                var key = keys[i];
                                if (!rErrorKey.test(key)) {
                                    ret[key] = obj[key];
                                }
                            }
                            return ret;
                        }
                        util.markAsOriginatingFromRejection(obj);
                        return obj;
                    }

                    function nodebackForPromise(promise, multiArgs) {
                        return function (err, value) {
                            if (promise === null) return;
                            if (err) {
                                var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
                                promise._attachExtraTrace(wrapped);
                                promise._reject(wrapped);
                            } else if (!multiArgs) {
                                promise._fulfill(value);
                            } else {
                                var args = [].slice.call(arguments, 1);;
                                promise._fulfill(args);
                            }
                            promise = null;
                        };
                    }

                    module.exports = nodebackForPromise;
                }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var util = _dereq_("./util");
                        var async = Promise._async;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;

                        function spreadAdapter(val, nodeback) {
                            var promise = this;
                            if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
                            var ret = tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }

                        function successAdapter(val, nodeback) {
                            var promise = this;
                            var receiver = promise._boundValue();
                            var ret = val === undefined ? tryCatch(nodeback).call(receiver, null) : tryCatch(nodeback).call(receiver, null, val);
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }
                        function errorAdapter(reason, nodeback) {
                            var promise = this;
                            if (!reason) {
                                var newReason = new Error(reason + "");
                                newReason.cause = reason;
                                reason = newReason;
                            }
                            var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }

                        Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback, options) {
                            if (typeof nodeback == "function") {
                                var adapter = successAdapter;
                                if (options !== undefined && Object(options).spread) {
                                    adapter = spreadAdapter;
                                }
                                this._then(adapter, errorAdapter, undefined, this, nodeback);
                            }
                            return this;
                        };
                    };
                }, { "./util": 36 }], 22: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function () {
                        var makeSelfResolutionError = function () {
                            return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                        };
                        var reflectHandler = function () {
                            return new Promise.PromiseInspection(this._target());
                        };
                        var apiRejection = function (msg) {
                            return Promise.reject(new TypeError(msg));
                        };
                        function Proxyable() {}
                        var UNDEFINED_BINDING = {};
                        var util = _dereq_("./util");

                        var getDomain;
                        if (util.isNode) {
                            getDomain = function () {
                                var ret = process.domain;
                                if (ret === undefined) ret = null;
                                return ret;
                            };
                        } else {
                            getDomain = function () {
                                return null;
                            };
                        }
                        util.notEnumerableProp(Promise, "_getDomain", getDomain);

                        var es5 = _dereq_("./es5");
                        var Async = _dereq_("./async");
                        var async = new Async();
                        es5.defineProperty(Promise, "_async", { value: async });
                        var errors = _dereq_("./errors");
                        var TypeError = Promise.TypeError = errors.TypeError;
                        Promise.RangeError = errors.RangeError;
                        var CancellationError = Promise.CancellationError = errors.CancellationError;
                        Promise.TimeoutError = errors.TimeoutError;
                        Promise.OperationalError = errors.OperationalError;
                        Promise.RejectionError = errors.OperationalError;
                        Promise.AggregateError = errors.AggregateError;
                        var INTERNAL = function () {};
                        var APPLY = {};
                        var NEXT_FILTER = {};
                        var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
                        var PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable);
                        var Context = _dereq_("./context")(Promise);
                        /*jshint unused:false*/
                        var createContext = Context.create;
                        var debug = _dereq_("./debuggability")(Promise, Context);
                        var CapturedTrace = debug.CapturedTrace;
                        var PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
                        var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
                        var nodebackForPromise = _dereq_("./nodeback");
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        function check(self, executor) {
                            if (self == null || self.constructor !== Promise) {
                                throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            if (typeof executor !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(executor));
                            }
                        }

                        function Promise(executor) {
                            if (executor !== INTERNAL) {
                                check(this, executor);
                            }
                            this._bitField = 0;
                            this._fulfillmentHandler0 = undefined;
                            this._rejectionHandler0 = undefined;
                            this._promise0 = undefined;
                            this._receiver0 = undefined;
                            this._resolveFromExecutor(executor);
                            this._promiseCreated();
                            this._fireEvent("promiseCreated", this);
                        }

                        Promise.prototype.toString = function () {
                            return "[object Promise]";
                        };

                        Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
                            var len = arguments.length;
                            if (len > 1) {
                                var catchInstances = new Array(len - 1),
                                    j = 0,
                                    i;
                                for (i = 0; i < len - 1; ++i) {
                                    var item = arguments[i];
                                    if (util.isObject(item)) {
                                        catchInstances[j++] = item;
                                    } else {
                                        return apiRejection("Catch statement predicate: " + "expecting an object but got " + util.classString(item));
                                    }
                                }
                                catchInstances.length = j;
                                fn = arguments[i];
                                return this.then(undefined, catchFilter(catchInstances, fn, this));
                            }
                            return this.then(undefined, fn);
                        };

                        Promise.prototype.reflect = function () {
                            return this._then(reflectHandler, reflectHandler, undefined, this, undefined);
                        };

                        Promise.prototype.then = function (didFulfill, didReject) {
                            if (debug.warnings() && arguments.length > 0 && typeof didFulfill !== "function" && typeof didReject !== "function") {
                                var msg = ".then() only accepts functions but was passed: " + util.classString(didFulfill);
                                if (arguments.length > 1) {
                                    msg += ", " + util.classString(didReject);
                                }
                                this._warn(msg);
                            }
                            return this._then(didFulfill, didReject, undefined, undefined, undefined);
                        };

                        Promise.prototype.done = function (didFulfill, didReject) {
                            var promise = this._then(didFulfill, didReject, undefined, undefined, undefined);
                            promise._setIsFinal();
                        };

                        Promise.prototype.spread = function (fn) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            return this.all()._then(fn, undefined, undefined, APPLY, undefined);
                        };

                        Promise.prototype.toJSON = function () {
                            var ret = {
                                isFulfilled: false,
                                isRejected: false,
                                fulfillmentValue: undefined,
                                rejectionReason: undefined
                            };
                            if (this.isFulfilled()) {
                                ret.fulfillmentValue = this.value();
                                ret.isFulfilled = true;
                            } else if (this.isRejected()) {
                                ret.rejectionReason = this.reason();
                                ret.isRejected = true;
                            }
                            return ret;
                        };

                        Promise.prototype.all = function () {
                            if (arguments.length > 0) {
                                this._warn(".all() was passed arguments but it does not take any");
                            }
                            return new PromiseArray(this).promise();
                        };

                        Promise.prototype.error = function (fn) {
                            return this.caught(util.originatesFromRejection, fn);
                        };

                        Promise.getNewLibraryCopy = module.exports;

                        Promise.is = function (val) {
                            return val instanceof Promise;
                        };

                        Promise.fromNode = Promise.fromCallback = function (fn) {
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : false;
                            var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
                            if (result === errorObj) {
                                ret._rejectCallback(result.e, true);
                            }
                            if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
                            return ret;
                        };

                        Promise.all = function (promises) {
                            return new PromiseArray(promises).promise();
                        };

                        Promise.cast = function (obj) {
                            var ret = tryConvertToPromise(obj);
                            if (!(ret instanceof Promise)) {
                                ret = new Promise(INTERNAL);
                                ret._captureStackTrace();
                                ret._setFulfilled();
                                ret._rejectionHandler0 = obj;
                            }
                            return ret;
                        };

                        Promise.resolve = Promise.fulfilled = Promise.cast;

                        Promise.reject = Promise.rejected = function (reason) {
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            ret._rejectCallback(reason, true);
                            return ret;
                        };

                        Promise.setScheduler = function (fn) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            return async.setScheduler(fn);
                        };

                        Promise.prototype._then = function (didFulfill, didReject, _, receiver, internalData) {
                            var haveInternalData = internalData !== undefined;
                            var promise = haveInternalData ? internalData : new Promise(INTERNAL);
                            var target = this._target();
                            var bitField = target._bitField;

                            if (!haveInternalData) {
                                promise._propagateFrom(this, 3);
                                promise._captureStackTrace();
                                if (receiver === undefined && (this._bitField & 2097152) !== 0) {
                                    if (!((bitField & 50397184) === 0)) {
                                        receiver = this._boundValue();
                                    } else {
                                        receiver = target === this ? undefined : this._boundTo;
                                    }
                                }
                                this._fireEvent("promiseChained", this, promise);
                            }

                            var domain = getDomain();
                            if (!((bitField & 50397184) === 0)) {
                                var handler,
                                    value,
                                    settler = target._settlePromiseCtx;
                                if ((bitField & 33554432) !== 0) {
                                    value = target._rejectionHandler0;
                                    handler = didFulfill;
                                } else if ((bitField & 16777216) !== 0) {
                                    value = target._fulfillmentHandler0;
                                    handler = didReject;
                                    target._unsetRejectionIsUnhandled();
                                } else {
                                    settler = target._settlePromiseLateCancellationObserver;
                                    value = new CancellationError("late cancellation observer");
                                    target._attachExtraTrace(value);
                                    handler = didReject;
                                }

                                async.invoke(settler, target, {
                                    handler: domain === null ? handler : typeof handler === "function" && util.domainBind(domain, handler),
                                    promise: promise,
                                    receiver: receiver,
                                    value: value
                                });
                            } else {
                                target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
                            }

                            return promise;
                        };

                        Promise.prototype._length = function () {
                            return this._bitField & 65535;
                        };

                        Promise.prototype._isFateSealed = function () {
                            return (this._bitField & 117506048) !== 0;
                        };

                        Promise.prototype._isFollowing = function () {
                            return (this._bitField & 67108864) === 67108864;
                        };

                        Promise.prototype._setLength = function (len) {
                            this._bitField = this._bitField & -65536 | len & 65535;
                        };

                        Promise.prototype._setFulfilled = function () {
                            this._bitField = this._bitField | 33554432;
                            this._fireEvent("promiseFulfilled", this);
                        };

                        Promise.prototype._setRejected = function () {
                            this._bitField = this._bitField | 16777216;
                            this._fireEvent("promiseRejected", this);
                        };

                        Promise.prototype._setFollowing = function () {
                            this._bitField = this._bitField | 67108864;
                            this._fireEvent("promiseResolved", this);
                        };

                        Promise.prototype._setIsFinal = function () {
                            this._bitField = this._bitField | 4194304;
                        };

                        Promise.prototype._isFinal = function () {
                            return (this._bitField & 4194304) > 0;
                        };

                        Promise.prototype._unsetCancelled = function () {
                            this._bitField = this._bitField & ~65536;
                        };

                        Promise.prototype._setCancelled = function () {
                            this._bitField = this._bitField | 65536;
                            this._fireEvent("promiseCancelled", this);
                        };

                        Promise.prototype._setWillBeCancelled = function () {
                            this._bitField = this._bitField | 8388608;
                        };

                        Promise.prototype._setAsyncGuaranteed = function () {
                            if (async.hasCustomScheduler()) return;
                            this._bitField = this._bitField | 134217728;
                        };

                        Promise.prototype._receiverAt = function (index) {
                            var ret = index === 0 ? this._receiver0 : this[index * 4 - 4 + 3];
                            if (ret === UNDEFINED_BINDING) {
                                return undefined;
                            } else if (ret === undefined && this._isBound()) {
                                return this._boundValue();
                            }
                            return ret;
                        };

                        Promise.prototype._promiseAt = function (index) {
                            return this[index * 4 - 4 + 2];
                        };

                        Promise.prototype._fulfillmentHandlerAt = function (index) {
                            return this[index * 4 - 4 + 0];
                        };

                        Promise.prototype._rejectionHandlerAt = function (index) {
                            return this[index * 4 - 4 + 1];
                        };

                        Promise.prototype._boundValue = function () {};

                        Promise.prototype._migrateCallback0 = function (follower) {
                            var bitField = follower._bitField;
                            var fulfill = follower._fulfillmentHandler0;
                            var reject = follower._rejectionHandler0;
                            var promise = follower._promise0;
                            var receiver = follower._receiverAt(0);
                            if (receiver === undefined) receiver = UNDEFINED_BINDING;
                            this._addCallbacks(fulfill, reject, promise, receiver, null);
                        };

                        Promise.prototype._migrateCallbackAt = function (follower, index) {
                            var fulfill = follower._fulfillmentHandlerAt(index);
                            var reject = follower._rejectionHandlerAt(index);
                            var promise = follower._promiseAt(index);
                            var receiver = follower._receiverAt(index);
                            if (receiver === undefined) receiver = UNDEFINED_BINDING;
                            this._addCallbacks(fulfill, reject, promise, receiver, null);
                        };

                        Promise.prototype._addCallbacks = function (fulfill, reject, promise, receiver, domain) {
                            var index = this._length();

                            if (index >= 65535 - 4) {
                                index = 0;
                                this._setLength(0);
                            }

                            if (index === 0) {
                                this._promise0 = promise;
                                this._receiver0 = receiver;
                                if (typeof fulfill === "function") {
                                    this._fulfillmentHandler0 = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                }
                                if (typeof reject === "function") {
                                    this._rejectionHandler0 = domain === null ? reject : util.domainBind(domain, reject);
                                }
                            } else {
                                var base = index * 4 - 4;
                                this[base + 2] = promise;
                                this[base + 3] = receiver;
                                if (typeof fulfill === "function") {
                                    this[base + 0] = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                }
                                if (typeof reject === "function") {
                                    this[base + 1] = domain === null ? reject : util.domainBind(domain, reject);
                                }
                            }
                            this._setLength(index + 1);
                            return index;
                        };

                        Promise.prototype._proxy = function (proxyable, arg) {
                            this._addCallbacks(undefined, undefined, arg, proxyable, null);
                        };

                        Promise.prototype._resolveCallback = function (value, shouldBind) {
                            if ((this._bitField & 117506048) !== 0) return;
                            if (value === this) return this._rejectCallback(makeSelfResolutionError(), false);
                            var maybePromise = tryConvertToPromise(value, this);
                            if (!(maybePromise instanceof Promise)) return this._fulfill(value);

                            if (shouldBind) this._propagateFrom(maybePromise, 2);

                            var promise = maybePromise._target();

                            if (promise === this) {
                                this._reject(makeSelfResolutionError());
                                return;
                            }

                            var bitField = promise._bitField;
                            if ((bitField & 50397184) === 0) {
                                var len = this._length();
                                if (len > 0) promise._migrateCallback0(this);
                                for (var i = 1; i < len; ++i) {
                                    promise._migrateCallbackAt(this, i);
                                }
                                this._setFollowing();
                                this._setLength(0);
                                this._setFollowee(promise);
                            } else if ((bitField & 33554432) !== 0) {
                                this._fulfill(promise._value());
                            } else if ((bitField & 16777216) !== 0) {
                                this._reject(promise._reason());
                            } else {
                                var reason = new CancellationError("late cancellation observer");
                                promise._attachExtraTrace(reason);
                                this._reject(reason);
                            }
                        };

                        Promise.prototype._rejectCallback = function (reason, synchronous, ignoreNonErrorWarnings) {
                            var trace = util.ensureErrorObject(reason);
                            var hasStack = trace === reason;
                            if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
                                var message = "a promise was rejected with a non-error: " + util.classString(reason);
                                this._warn(message, true);
                            }
                            this._attachExtraTrace(trace, synchronous ? hasStack : false);
                            this._reject(reason);
                        };

                        Promise.prototype._resolveFromExecutor = function (executor) {
                            if (executor === INTERNAL) return;
                            var promise = this;
                            this._captureStackTrace();
                            this._pushContext();
                            var synchronous = true;
                            var r = this._execute(executor, function (value) {
                                promise._resolveCallback(value);
                            }, function (reason) {
                                promise._rejectCallback(reason, synchronous);
                            });
                            synchronous = false;
                            this._popContext();

                            if (r !== undefined) {
                                promise._rejectCallback(r, true);
                            }
                        };

                        Promise.prototype._settlePromiseFromHandler = function (handler, receiver, value, promise) {
                            var bitField = promise._bitField;
                            if ((bitField & 65536) !== 0) return;
                            promise._pushContext();
                            var x;
                            if (receiver === APPLY) {
                                if (!value || typeof value.length !== "number") {
                                    x = errorObj;
                                    x.e = new TypeError("cannot .spread() a non-array: " + util.classString(value));
                                } else {
                                    x = tryCatch(handler).apply(this._boundValue(), value);
                                }
                            } else {
                                x = tryCatch(handler).call(receiver, value);
                            }
                            var promiseCreated = promise._popContext();
                            bitField = promise._bitField;
                            if ((bitField & 65536) !== 0) return;

                            if (x === NEXT_FILTER) {
                                promise._reject(value);
                            } else if (x === errorObj) {
                                promise._rejectCallback(x.e, false);
                            } else {
                                debug.checkForgottenReturns(x, promiseCreated, "", promise, this);
                                promise._resolveCallback(x);
                            }
                        };

                        Promise.prototype._target = function () {
                            var ret = this;
                            while (ret._isFollowing()) ret = ret._followee();
                            return ret;
                        };

                        Promise.prototype._followee = function () {
                            return this._rejectionHandler0;
                        };

                        Promise.prototype._setFollowee = function (promise) {
                            this._rejectionHandler0 = promise;
                        };

                        Promise.prototype._settlePromise = function (promise, handler, receiver, value) {
                            var isPromise = promise instanceof Promise;
                            var bitField = this._bitField;
                            var asyncGuaranteed = (bitField & 134217728) !== 0;
                            if ((bitField & 65536) !== 0) {
                                if (isPromise) promise._invokeInternalOnCancel();

                                if (receiver instanceof PassThroughHandlerContext && receiver.isFinallyHandler()) {
                                    receiver.cancelPromise = promise;
                                    if (tryCatch(handler).call(receiver, value) === errorObj) {
                                        promise._reject(errorObj.e);
                                    }
                                } else if (handler === reflectHandler) {
                                    promise._fulfill(reflectHandler.call(receiver));
                                } else if (receiver instanceof Proxyable) {
                                    receiver._promiseCancelled(promise);
                                } else if (isPromise || promise instanceof PromiseArray) {
                                    promise._cancel();
                                } else {
                                    receiver.cancel();
                                }
                            } else if (typeof handler === "function") {
                                if (!isPromise) {
                                    handler.call(receiver, value, promise);
                                } else {
                                    if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                    this._settlePromiseFromHandler(handler, receiver, value, promise);
                                }
                            } else if (receiver instanceof Proxyable) {
                                if (!receiver._isResolved()) {
                                    if ((bitField & 33554432) !== 0) {
                                        receiver._promiseFulfilled(value, promise);
                                    } else {
                                        receiver._promiseRejected(value, promise);
                                    }
                                }
                            } else if (isPromise) {
                                if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                if ((bitField & 33554432) !== 0) {
                                    promise._fulfill(value);
                                } else {
                                    promise._reject(value);
                                }
                            }
                        };

                        Promise.prototype._settlePromiseLateCancellationObserver = function (ctx) {
                            var handler = ctx.handler;
                            var promise = ctx.promise;
                            var receiver = ctx.receiver;
                            var value = ctx.value;
                            if (typeof handler === "function") {
                                if (!(promise instanceof Promise)) {
                                    handler.call(receiver, value, promise);
                                } else {
                                    this._settlePromiseFromHandler(handler, receiver, value, promise);
                                }
                            } else if (promise instanceof Promise) {
                                promise._reject(value);
                            }
                        };

                        Promise.prototype._settlePromiseCtx = function (ctx) {
                            this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
                        };

                        Promise.prototype._settlePromise0 = function (handler, value, bitField) {
                            var promise = this._promise0;
                            var receiver = this._receiverAt(0);
                            this._promise0 = undefined;
                            this._receiver0 = undefined;
                            this._settlePromise(promise, handler, receiver, value);
                        };

                        Promise.prototype._clearCallbackDataAtIndex = function (index) {
                            var base = index * 4 - 4;
                            this[base + 2] = this[base + 3] = this[base + 0] = this[base + 1] = undefined;
                        };

                        Promise.prototype._fulfill = function (value) {
                            var bitField = this._bitField;
                            if ((bitField & 117506048) >>> 16) return;
                            if (value === this) {
                                var err = makeSelfResolutionError();
                                this._attachExtraTrace(err);
                                return this._reject(err);
                            }
                            this._setFulfilled();
                            this._rejectionHandler0 = value;

                            if ((bitField & 65535) > 0) {
                                if ((bitField & 134217728) !== 0) {
                                    this._settlePromises();
                                } else {
                                    async.settlePromises(this);
                                }
                            }
                        };

                        Promise.prototype._reject = function (reason) {
                            var bitField = this._bitField;
                            if ((bitField & 117506048) >>> 16) return;
                            this._setRejected();
                            this._fulfillmentHandler0 = reason;

                            if (this._isFinal()) {
                                return async.fatalError(reason, util.isNode);
                            }

                            if ((bitField & 65535) > 0) {
                                async.settlePromises(this);
                            } else {
                                this._ensurePossibleRejectionHandled();
                            }
                        };

                        Promise.prototype._fulfillPromises = function (len, value) {
                            for (var i = 1; i < len; i++) {
                                var handler = this._fulfillmentHandlerAt(i);
                                var promise = this._promiseAt(i);
                                var receiver = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i);
                                this._settlePromise(promise, handler, receiver, value);
                            }
                        };

                        Promise.prototype._rejectPromises = function (len, reason) {
                            for (var i = 1; i < len; i++) {
                                var handler = this._rejectionHandlerAt(i);
                                var promise = this._promiseAt(i);
                                var receiver = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i);
                                this._settlePromise(promise, handler, receiver, reason);
                            }
                        };

                        Promise.prototype._settlePromises = function () {
                            var bitField = this._bitField;
                            var len = bitField & 65535;

                            if (len > 0) {
                                if ((bitField & 16842752) !== 0) {
                                    var reason = this._fulfillmentHandler0;
                                    this._settlePromise0(this._rejectionHandler0, reason, bitField);
                                    this._rejectPromises(len, reason);
                                } else {
                                    var value = this._rejectionHandler0;
                                    this._settlePromise0(this._fulfillmentHandler0, value, bitField);
                                    this._fulfillPromises(len, value);
                                }
                                this._setLength(0);
                            }
                            this._clearCancellationData();
                        };

                        Promise.prototype._settledValue = function () {
                            var bitField = this._bitField;
                            if ((bitField & 33554432) !== 0) {
                                return this._rejectionHandler0;
                            } else if ((bitField & 16777216) !== 0) {
                                return this._fulfillmentHandler0;
                            }
                        };

                        function deferResolve(v) {
                            this.promise._resolveCallback(v);
                        }
                        function deferReject(v) {
                            this.promise._rejectCallback(v, false);
                        }

                        Promise.defer = Promise.pending = function () {
                            debug.deprecated("Promise.defer", "new Promise");
                            var promise = new Promise(INTERNAL);
                            return {
                                promise: promise,
                                resolve: deferResolve,
                                reject: deferReject
                            };
                        };

                        util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError);

                        _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug);
                        _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
                        _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
                        _dereq_("./direct_resolve")(Promise);
                        _dereq_("./synchronous_inspection")(Promise);
                        _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
                        Promise.Promise = Promise;
                        Promise.version = "3.5.1";
                        _dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                        _dereq_('./call_get.js')(Promise);
                        _dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
                        _dereq_('./timers.js')(Promise, INTERNAL, debug);
                        _dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
                        _dereq_('./nodeify.js')(Promise);
                        _dereq_('./promisify.js')(Promise, INTERNAL);
                        _dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
                        _dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
                        _dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                        _dereq_('./settle.js')(Promise, PromiseArray, debug);
                        _dereq_('./some.js')(Promise, PromiseArray, apiRejection);
                        _dereq_('./filter.js')(Promise, INTERNAL);
                        _dereq_('./each.js')(Promise, INTERNAL);
                        _dereq_('./any.js')(Promise);

                        util.toFastProperties(Promise);
                        util.toFastProperties(Promise.prototype);
                        function fillTypes(value) {
                            var p = new Promise(INTERNAL);
                            p._fulfillmentHandler0 = value;
                            p._rejectionHandler0 = value;
                            p._promise0 = value;
                            p._receiver0 = value;
                        }
                        // Complete slack tracking, opt out of field-type tracking and           
                        // stabilize map                                                         
                        fillTypes({ a: 1 });
                        fillTypes({ b: 2 });
                        fillTypes({ c: 3 });
                        fillTypes(1);
                        fillTypes(function () {});
                        fillTypes(undefined);
                        fillTypes(false);
                        fillTypes(new Promise(INTERNAL));
                        debug.setBounds(Async.firstLineError, util.lastLineError);
                        return Promise;
                    };
                }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
                        var util = _dereq_("./util");
                        var isArray = util.isArray;

                        function toResolutionValue(val) {
                            switch (val) {
                                case -2:
                                    return [];
                                case -3:
                                    return {};
                                case -6:
                                    return new Map();
                            }
                        }

                        function PromiseArray(values) {
                            var promise = this._promise = new Promise(INTERNAL);
                            if (values instanceof Promise) {
                                promise._propagateFrom(values, 3);
                            }
                            promise._setOnCancel(this);
                            this._values = values;
                            this._length = 0;
                            this._totalResolved = 0;
                            this._init(undefined, -2);
                        }
                        util.inherits(PromiseArray, Proxyable);

                        PromiseArray.prototype.length = function () {
                            return this._length;
                        };

                        PromiseArray.prototype.promise = function () {
                            return this._promise;
                        };

                        PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
                            var values = tryConvertToPromise(this._values, this._promise);
                            if (values instanceof Promise) {
                                values = values._target();
                                var bitField = values._bitField;
                                ;
                                this._values = values;

                                if ((bitField & 50397184) === 0) {
                                    this._promise._setAsyncGuaranteed();
                                    return values._then(init, this._reject, undefined, this, resolveValueIfEmpty);
                                } else if ((bitField & 33554432) !== 0) {
                                    values = values._value();
                                } else if ((bitField & 16777216) !== 0) {
                                    return this._reject(values._reason());
                                } else {
                                    return this._cancel();
                                }
                            }
                            values = util.asArray(values);
                            if (values === null) {
                                var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
                                this._promise._rejectCallback(err, false);
                                return;
                            }

                            if (values.length === 0) {
                                if (resolveValueIfEmpty === -5) {
                                    this._resolveEmptyArray();
                                } else {
                                    this._resolve(toResolutionValue(resolveValueIfEmpty));
                                }
                                return;
                            }
                            this._iterate(values);
                        };

                        PromiseArray.prototype._iterate = function (values) {
                            var len = this.getActualLength(values.length);
                            this._length = len;
                            this._values = this.shouldCopyValues() ? new Array(len) : this._values;
                            var result = this._promise;
                            var isResolved = false;
                            var bitField = null;
                            for (var i = 0; i < len; ++i) {
                                var maybePromise = tryConvertToPromise(values[i], result);

                                if (maybePromise instanceof Promise) {
                                    maybePromise = maybePromise._target();
                                    bitField = maybePromise._bitField;
                                } else {
                                    bitField = null;
                                }

                                if (isResolved) {
                                    if (bitField !== null) {
                                        maybePromise.suppressUnhandledRejections();
                                    }
                                } else if (bitField !== null) {
                                    if ((bitField & 50397184) === 0) {
                                        maybePromise._proxy(this, i);
                                        this._values[i] = maybePromise;
                                    } else if ((bitField & 33554432) !== 0) {
                                        isResolved = this._promiseFulfilled(maybePromise._value(), i);
                                    } else if ((bitField & 16777216) !== 0) {
                                        isResolved = this._promiseRejected(maybePromise._reason(), i);
                                    } else {
                                        isResolved = this._promiseCancelled(i);
                                    }
                                } else {
                                    isResolved = this._promiseFulfilled(maybePromise, i);
                                }
                            }
                            if (!isResolved) result._setAsyncGuaranteed();
                        };

                        PromiseArray.prototype._isResolved = function () {
                            return this._values === null;
                        };

                        PromiseArray.prototype._resolve = function (value) {
                            this._values = null;
                            this._promise._fulfill(value);
                        };

                        PromiseArray.prototype._cancel = function () {
                            if (this._isResolved() || !this._promise._isCancellable()) return;
                            this._values = null;
                            this._promise._cancel();
                        };

                        PromiseArray.prototype._reject = function (reason) {
                            this._values = null;
                            this._promise._rejectCallback(reason, false);
                        };

                        PromiseArray.prototype._promiseFulfilled = function (value, index) {
                            this._values[index] = value;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                this._resolve(this._values);
                                return true;
                            }
                            return false;
                        };

                        PromiseArray.prototype._promiseCancelled = function () {
                            this._cancel();
                            return true;
                        };

                        PromiseArray.prototype._promiseRejected = function (reason) {
                            this._totalResolved++;
                            this._reject(reason);
                            return true;
                        };

                        PromiseArray.prototype._resultCancelled = function () {
                            if (this._isResolved()) return;
                            var values = this._values;
                            this._cancel();
                            if (values instanceof Promise) {
                                values.cancel();
                            } else {
                                for (var i = 0; i < values.length; ++i) {
                                    if (values[i] instanceof Promise) {
                                        values[i].cancel();
                                    }
                                }
                            }
                        };

                        PromiseArray.prototype.shouldCopyValues = function () {
                            return true;
                        };

                        PromiseArray.prototype.getActualLength = function (len) {
                            return len;
                        };

                        return PromiseArray;
                    };
                }, { "./util": 36 }], 24: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var THIS = {};
                        var util = _dereq_("./util");
                        var nodebackForPromise = _dereq_("./nodeback");
                        var withAppended = util.withAppended;
                        var maybeWrapAsError = util.maybeWrapAsError;
                        var canEvaluate = util.canEvaluate;
                        var TypeError = _dereq_("./errors").TypeError;
                        var defaultSuffix = "Async";
                        var defaultPromisified = { __isPromisified__: true };
                        var noCopyProps = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"];
                        var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

                        var defaultFilter = function (name) {
                            return util.isIdentifier(name) && name.charAt(0) !== "_" && name !== "constructor";
                        };

                        function propsFilter(key) {
                            return !noCopyPropsPattern.test(key);
                        }

                        function isPromisified(fn) {
                            try {
                                return fn.__isPromisified__ === true;
                            } catch (e) {
                                return false;
                            }
                        }

                        function hasPromisified(obj, key, suffix) {
                            var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
                            return val ? isPromisified(val) : false;
                        }
                        function checkValid(ret, suffix, suffixRegexp) {
                            for (var i = 0; i < ret.length; i += 2) {
                                var key = ret[i];
                                if (suffixRegexp.test(key)) {
                                    var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
                                    for (var j = 0; j < ret.length; j += 2) {
                                        if (ret[j] === keyWithoutAsyncSuffix) {
                                            throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a".replace("%s", suffix));
                                        }
                                    }
                                }
                            }
                        }

                        function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
                            var keys = util.inheritedDataKeys(obj);
                            var ret = [];
                            for (var i = 0; i < keys.length; ++i) {
                                var key = keys[i];
                                var value = obj[key];
                                var passesDefaultFilter = filter === defaultFilter ? true : defaultFilter(key, value, obj);
                                if (typeof value === "function" && !isPromisified(value) && !hasPromisified(obj, key, suffix) && filter(key, value, obj, passesDefaultFilter)) {
                                    ret.push(key, value);
                                }
                            }
                            checkValid(ret, suffix, suffixRegexp);
                            return ret;
                        }

                        var escapeIdentRegex = function (str) {
                            return str.replace(/([$])/, "\\$");
                        };

                        var makeNodePromisifiedEval;
                        if (!true) {
                            var switchCaseArgumentOrder = function (likelyArgumentCount) {
                                var ret = [likelyArgumentCount];
                                var min = Math.max(0, likelyArgumentCount - 1 - 3);
                                for (var i = likelyArgumentCount - 1; i >= min; --i) {
                                    ret.push(i);
                                }
                                for (var i = likelyArgumentCount + 1; i <= 3; ++i) {
                                    ret.push(i);
                                }
                                return ret;
                            };

                            var argumentSequence = function (argumentCount) {
                                return util.filledRange(argumentCount, "_arg", "");
                            };

                            var parameterDeclaration = function (parameterCount) {
                                return util.filledRange(Math.max(parameterCount, 3), "_arg", "");
                            };

                            var parameterCount = function (fn) {
                                if (typeof fn.length === "number") {
                                    return Math.max(Math.min(fn.length, 1023 + 1), 0);
                                }
                                return 0;
                            };

                            makeNodePromisifiedEval = function (callback, receiver, originalName, fn, _, multiArgs) {
                                var newParameterCount = Math.max(0, parameterCount(fn) - 1);
                                var argumentOrder = switchCaseArgumentOrder(newParameterCount);
                                var shouldProxyThis = typeof callback === "string" || receiver === THIS;

                                function generateCallForArgumentCount(count) {
                                    var args = argumentSequence(count).join(", ");
                                    var comma = count > 0 ? ", " : "";
                                    var ret;
                                    if (shouldProxyThis) {
                                        ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
                                    } else {
                                        ret = receiver === undefined ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
                                    }
                                    return ret.replace("{{args}}", args).replace(", ", comma);
                                }

                                function generateArgumentSwitchCase() {
                                    var ret = "";
                                    for (var i = 0; i < argumentOrder.length; ++i) {
                                        ret += "case " + argumentOrder[i] + ":" + generateCallForArgumentCount(argumentOrder[i]);
                                    }

                                    ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", shouldProxyThis ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n");
                                    return ret;
                                }

                                var getFunctionCode = typeof callback === "string" ? "this != null ? this['" + callback + "'] : fn" : "fn";
                                var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase()).replace("[GetFunctionCode]", getFunctionCode);
                                body = body.replace("Parameters", parameterDeclaration(newParameterCount));
                                return new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", body)(Promise, fn, receiver, withAppended, maybeWrapAsError, nodebackForPromise, util.tryCatch, util.errorObj, util.notEnumerableProp, INTERNAL);
                            };
                        }

                        function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
                            var defaultThis = function () {
                                return this;
                            }();
                            var method = callback;
                            if (typeof method === "string") {
                                callback = fn;
                            }
                            function promisified() {
                                var _receiver = receiver;
                                if (receiver === THIS) _receiver = this;
                                var promise = new Promise(INTERNAL);
                                promise._captureStackTrace();
                                var cb = typeof method === "string" && this !== defaultThis ? this[method] : callback;
                                var fn = nodebackForPromise(promise, multiArgs);
                                try {
                                    cb.apply(_receiver, withAppended(arguments, fn));
                                } catch (e) {
                                    promise._rejectCallback(maybeWrapAsError(e), true, true);
                                }
                                if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
                                return promise;
                            }
                            util.notEnumerableProp(promisified, "__isPromisified__", true);
                            return promisified;
                        }

                        var makeNodePromisified = canEvaluate ? makeNodePromisifiedEval : makeNodePromisifiedClosure;

                        function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
                            var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
                            var methods = promisifiableMethods(obj, suffix, suffixRegexp, filter);

                            for (var i = 0, len = methods.length; i < len; i += 2) {
                                var key = methods[i];
                                var fn = methods[i + 1];
                                var promisifiedKey = key + suffix;
                                if (promisifier === makeNodePromisified) {
                                    obj[promisifiedKey] = makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                } else {
                                    var promisified = promisifier(fn, function () {
                                        return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                    });
                                    util.notEnumerableProp(promisified, "__isPromisified__", true);
                                    obj[promisifiedKey] = promisified;
                                }
                            }
                            util.toFastProperties(obj);
                            return obj;
                        }

                        function promisify(callback, receiver, multiArgs) {
                            return makeNodePromisified(callback, receiver, undefined, callback, null, multiArgs);
                        }

                        Promise.promisify = function (fn, options) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            if (isPromisified(fn)) {
                                return fn;
                            }
                            options = Object(options);
                            var receiver = options.context === undefined ? THIS : options.context;
                            var multiArgs = !!options.multiArgs;
                            var ret = promisify(fn, receiver, multiArgs);
                            util.copyDescriptors(fn, ret, propsFilter);
                            return ret;
                        };

                        Promise.promisifyAll = function (target, options) {
                            if (typeof target !== "function" && typeof target !== "object") {
                                throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            options = Object(options);
                            var multiArgs = !!options.multiArgs;
                            var suffix = options.suffix;
                            if (typeof suffix !== "string") suffix = defaultSuffix;
                            var filter = options.filter;
                            if (typeof filter !== "function") filter = defaultFilter;
                            var promisifier = options.promisifier;
                            if (typeof promisifier !== "function") promisifier = makeNodePromisified;

                            if (!util.isIdentifier(suffix)) {
                                throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }

                            var keys = util.inheritedDataKeys(target);
                            for (var i = 0; i < keys.length; ++i) {
                                var value = target[keys[i]];
                                if (keys[i] !== "constructor" && util.isClass(value)) {
                                    promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs);
                                    promisifyAll(value, suffix, filter, promisifier, multiArgs);
                                }
                            }

                            return promisifyAll(target, suffix, filter, promisifier, multiArgs);
                        };
                    };
                }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, tryConvertToPromise, apiRejection) {
                        var util = _dereq_("./util");
                        var isObject = util.isObject;
                        var es5 = _dereq_("./es5");
                        var Es6Map;
                        if (typeof Map === "function") Es6Map = Map;

                        var mapToEntries = function () {
                            var index = 0;
                            var size = 0;

                            function extractEntry(value, key) {
                                this[index] = value;
                                this[index + size] = key;
                                index++;
                            }

                            return function mapToEntries(map) {
                                size = map.size;
                                index = 0;
                                var ret = new Array(map.size * 2);
                                map.forEach(extractEntry, ret);
                                return ret;
                            };
                        }();

                        var entriesToMap = function (entries) {
                            var ret = new Es6Map();
                            var length = entries.length / 2 | 0;
                            for (var i = 0; i < length; ++i) {
                                var key = entries[length + i];
                                var value = entries[i];
                                ret.set(key, value);
                            }
                            return ret;
                        };

                        function PropertiesPromiseArray(obj) {
                            var isMap = false;
                            var entries;
                            if (Es6Map !== undefined && obj instanceof Es6Map) {
                                entries = mapToEntries(obj);
                                isMap = true;
                            } else {
                                var keys = es5.keys(obj);
                                var len = keys.length;
                                entries = new Array(len * 2);
                                for (var i = 0; i < len; ++i) {
                                    var key = keys[i];
                                    entries[i] = obj[key];
                                    entries[i + len] = key;
                                }
                            }
                            this.constructor$(entries);
                            this._isMap = isMap;
                            this._init$(undefined, isMap ? -6 : -3);
                        }
                        util.inherits(PropertiesPromiseArray, PromiseArray);

                        PropertiesPromiseArray.prototype._init = function () {};

                        PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            this._values[index] = value;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                var val;
                                if (this._isMap) {
                                    val = entriesToMap(this._values);
                                } else {
                                    val = {};
                                    var keyOffset = this.length();
                                    for (var i = 0, len = this.length(); i < len; ++i) {
                                        val[this._values[i + keyOffset]] = this._values[i];
                                    }
                                }
                                this._resolve(val);
                                return true;
                            }
                            return false;
                        };

                        PropertiesPromiseArray.prototype.shouldCopyValues = function () {
                            return false;
                        };

                        PropertiesPromiseArray.prototype.getActualLength = function (len) {
                            return len >> 1;
                        };

                        function props(promises) {
                            var ret;
                            var castValue = tryConvertToPromise(promises);

                            if (!isObject(castValue)) {
                                return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            } else if (castValue instanceof Promise) {
                                ret = castValue._then(Promise.props, undefined, undefined, undefined, undefined);
                            } else {
                                ret = new PropertiesPromiseArray(castValue).promise();
                            }

                            if (castValue instanceof Promise) {
                                ret._propagateFrom(castValue, 2);
                            }
                            return ret;
                        }

                        Promise.prototype.props = function () {
                            return props(this);
                        };

                        Promise.props = function (promises) {
                            return props(promises);
                        };
                    };
                }, { "./es5": 13, "./util": 36 }], 26: [function (_dereq_, module, exports) {
                    "use strict";

                    function arrayMove(src, srcIndex, dst, dstIndex, len) {
                        for (var j = 0; j < len; ++j) {
                            dst[j + dstIndex] = src[j + srcIndex];
                            src[j + srcIndex] = void 0;
                        }
                    }

                    function Queue(capacity) {
                        this._capacity = capacity;
                        this._length = 0;
                        this._front = 0;
                    }

                    Queue.prototype._willBeOverCapacity = function (size) {
                        return this._capacity < size;
                    };

                    Queue.prototype._pushOne = function (arg) {
                        var length = this.length();
                        this._checkCapacity(length + 1);
                        var i = this._front + length & this._capacity - 1;
                        this[i] = arg;
                        this._length = length + 1;
                    };

                    Queue.prototype.push = function (fn, receiver, arg) {
                        var length = this.length() + 3;
                        if (this._willBeOverCapacity(length)) {
                            this._pushOne(fn);
                            this._pushOne(receiver);
                            this._pushOne(arg);
                            return;
                        }
                        var j = this._front + length - 3;
                        this._checkCapacity(length);
                        var wrapMask = this._capacity - 1;
                        this[j + 0 & wrapMask] = fn;
                        this[j + 1 & wrapMask] = receiver;
                        this[j + 2 & wrapMask] = arg;
                        this._length = length;
                    };

                    Queue.prototype.shift = function () {
                        var front = this._front,
                            ret = this[front];

                        this[front] = undefined;
                        this._front = front + 1 & this._capacity - 1;
                        this._length--;
                        return ret;
                    };

                    Queue.prototype.length = function () {
                        return this._length;
                    };

                    Queue.prototype._checkCapacity = function (size) {
                        if (this._capacity < size) {
                            this._resizeTo(this._capacity << 1);
                        }
                    };

                    Queue.prototype._resizeTo = function (capacity) {
                        var oldCapacity = this._capacity;
                        this._capacity = capacity;
                        var front = this._front;
                        var length = this._length;
                        var moveItemsCount = front + length & oldCapacity - 1;
                        arrayMove(this, 0, this, oldCapacity, moveItemsCount);
                    };

                    module.exports = Queue;
                }, {}], 27: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection) {
                        var util = _dereq_("./util");

                        var raceLater = function (promise) {
                            return promise.then(function (array) {
                                return race(array, promise);
                            });
                        };

                        function race(promises, parent) {
                            var maybePromise = tryConvertToPromise(promises);

                            if (maybePromise instanceof Promise) {
                                return raceLater(maybePromise);
                            } else {
                                promises = util.asArray(promises);
                                if (promises === null) return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
                            }

                            var ret = new Promise(INTERNAL);
                            if (parent !== undefined) {
                                ret._propagateFrom(parent, 3);
                            }
                            var fulfill = ret._fulfill;
                            var reject = ret._reject;
                            for (var i = 0, len = promises.length; i < len; ++i) {
                                var val = promises[i];

                                if (val === undefined && !(i in promises)) {
                                    continue;
                                }

                                Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
                            }
                            return ret;
                        }

                        Promise.race = function (promises) {
                            return race(promises, undefined);
                        };

                        Promise.prototype.race = function () {
                            return race(this, undefined);
                        };
                    };
                }, { "./util": 36 }], 28: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                        var getDomain = Promise._getDomain;
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;

                        function ReductionPromiseArray(promises, fn, initialValue, _each) {
                            this.constructor$(promises);
                            var domain = getDomain();
                            this._fn = domain === null ? fn : util.domainBind(domain, fn);
                            if (initialValue !== undefined) {
                                initialValue = Promise.resolve(initialValue);
                                initialValue._attachCancellationCallback(this);
                            }
                            this._initialValue = initialValue;
                            this._currentCancellable = null;
                            if (_each === INTERNAL) {
                                this._eachValues = Array(this._length);
                            } else if (_each === 0) {
                                this._eachValues = null;
                            } else {
                                this._eachValues = undefined;
                            }
                            this._promise._captureStackTrace();
                            this._init$(undefined, -5);
                        }
                        util.inherits(ReductionPromiseArray, PromiseArray);

                        ReductionPromiseArray.prototype._gotAccum = function (accum) {
                            if (this._eachValues !== undefined && this._eachValues !== null && accum !== INTERNAL) {
                                this._eachValues.push(accum);
                            }
                        };

                        ReductionPromiseArray.prototype._eachComplete = function (value) {
                            if (this._eachValues !== null) {
                                this._eachValues.push(value);
                            }
                            return this._eachValues;
                        };

                        ReductionPromiseArray.prototype._init = function () {};

                        ReductionPromiseArray.prototype._resolveEmptyArray = function () {
                            this._resolve(this._eachValues !== undefined ? this._eachValues : this._initialValue);
                        };

                        ReductionPromiseArray.prototype.shouldCopyValues = function () {
                            return false;
                        };

                        ReductionPromiseArray.prototype._resolve = function (value) {
                            this._promise._resolveCallback(value);
                            this._values = null;
                        };

                        ReductionPromiseArray.prototype._resultCancelled = function (sender) {
                            if (sender === this._initialValue) return this._cancel();
                            if (this._isResolved()) return;
                            this._resultCancelled$();
                            if (this._currentCancellable instanceof Promise) {
                                this._currentCancellable.cancel();
                            }
                            if (this._initialValue instanceof Promise) {
                                this._initialValue.cancel();
                            }
                        };

                        ReductionPromiseArray.prototype._iterate = function (values) {
                            this._values = values;
                            var value;
                            var i;
                            var length = values.length;
                            if (this._initialValue !== undefined) {
                                value = this._initialValue;
                                i = 0;
                            } else {
                                value = Promise.resolve(values[0]);
                                i = 1;
                            }

                            this._currentCancellable = value;

                            if (!value.isRejected()) {
                                for (; i < length; ++i) {
                                    var ctx = {
                                        accum: null,
                                        value: values[i],
                                        index: i,
                                        length: length,
                                        array: this
                                    };
                                    value = value._then(gotAccum, undefined, undefined, ctx, undefined);
                                }
                            }

                            if (this._eachValues !== undefined) {
                                value = value._then(this._eachComplete, undefined, undefined, this, undefined);
                            }
                            value._then(completed, completed, undefined, value, this);
                        };

                        Promise.prototype.reduce = function (fn, initialValue) {
                            return reduce(this, fn, initialValue, null);
                        };

                        Promise.reduce = function (promises, fn, initialValue, _each) {
                            return reduce(promises, fn, initialValue, _each);
                        };

                        function completed(valueOrReason, array) {
                            if (this.isFulfilled()) {
                                array._resolve(valueOrReason);
                            } else {
                                array._reject(valueOrReason);
                            }
                        }

                        function reduce(promises, fn, initialValue, _each) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
                            return array.promise();
                        }

                        function gotAccum(accum) {
                            this.accum = accum;
                            this.array._gotAccum(accum);
                            var value = tryConvertToPromise(this.value, this.array._promise);
                            if (value instanceof Promise) {
                                this.array._currentCancellable = value;
                                return value._then(gotValue, undefined, undefined, this, undefined);
                            } else {
                                return gotValue.call(this, value);
                            }
                        }

                        function gotValue(value) {
                            var array = this.array;
                            var promise = array._promise;
                            var fn = tryCatch(array._fn);
                            promise._pushContext();
                            var ret;
                            if (array._eachValues !== undefined) {
                                ret = fn.call(promise._boundValue(), value, this.index, this.length);
                            } else {
                                ret = fn.call(promise._boundValue(), this.accum, value, this.index, this.length);
                            }
                            if (ret instanceof Promise) {
                                array._currentCancellable = ret;
                            }
                            var promiseCreated = promise._popContext();
                            debug.checkForgottenReturns(ret, promiseCreated, array._eachValues !== undefined ? "Promise.each" : "Promise.reduce", promise);
                            return ret;
                        }
                    };
                }, { "./util": 36 }], 29: [function (_dereq_, module, exports) {
                    "use strict";

                    var util = _dereq_("./util");
                    var schedule;
                    var noAsyncScheduler = function () {
                        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                    };
                    var NativePromise = util.getNativePromise();
                    if (util.isNode && typeof MutationObserver === "undefined") {
                        var GlobalSetImmediate = global.setImmediate;
                        var ProcessNextTick = process.nextTick;
                        schedule = util.isRecentNode ? function (fn) {
                            GlobalSetImmediate.call(global, fn);
                        } : function (fn) {
                            ProcessNextTick.call(process, fn);
                        };
                    } else if (typeof NativePromise === "function" && typeof NativePromise.resolve === "function") {
                        var nativePromise = NativePromise.resolve();
                        schedule = function (fn) {
                            nativePromise.then(fn);
                        };
                    } else if (typeof MutationObserver !== "undefined" && !(typeof window !== "undefined" && window.navigator && (window.navigator.standalone || window.cordova))) {
                        schedule = function () {
                            var div = document.createElement("div");
                            var opts = { attributes: true };
                            var toggleScheduled = false;
                            var div2 = document.createElement("div");
                            var o2 = new MutationObserver(function () {
                                div.classList.toggle("foo");
                                toggleScheduled = false;
                            });
                            o2.observe(div2, opts);

                            var scheduleToggle = function () {
                                if (toggleScheduled) return;
                                toggleScheduled = true;
                                div2.classList.toggle("foo");
                            };

                            return function schedule(fn) {
                                var o = new MutationObserver(function () {
                                    o.disconnect();
                                    fn();
                                });
                                o.observe(div, opts);
                                scheduleToggle();
                            };
                        }();
                    } else if (typeof setImmediate !== "undefined") {
                        schedule = function (fn) {
                            setImmediate(fn);
                        };
                    } else if (typeof setTimeout !== "undefined") {
                        schedule = function (fn) {
                            setTimeout(fn, 0);
                        };
                    } else {
                        schedule = noAsyncScheduler;
                    }
                    module.exports = schedule;
                }, { "./util": 36 }], 30: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, debug) {
                        var PromiseInspection = Promise.PromiseInspection;
                        var util = _dereq_("./util");

                        function SettledPromiseArray(values) {
                            this.constructor$(values);
                        }
                        util.inherits(SettledPromiseArray, PromiseArray);

                        SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
                            this._values[index] = inspection;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                this._resolve(this._values);
                                return true;
                            }
                            return false;
                        };

                        SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            var ret = new PromiseInspection();
                            ret._bitField = 33554432;
                            ret._settledValueField = value;
                            return this._promiseResolved(index, ret);
                        };
                        SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
                            var ret = new PromiseInspection();
                            ret._bitField = 16777216;
                            ret._settledValueField = reason;
                            return this._promiseResolved(index, ret);
                        };

                        Promise.settle = function (promises) {
                            debug.deprecated(".settle()", ".reflect()");
                            return new SettledPromiseArray(promises).promise();
                        };

                        Promise.prototype.settle = function () {
                            return Promise.settle(this);
                        };
                    };
                }, { "./util": 36 }], 31: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection) {
                        var util = _dereq_("./util");
                        var RangeError = _dereq_("./errors").RangeError;
                        var AggregateError = _dereq_("./errors").AggregateError;
                        var isArray = util.isArray;
                        var CANCELLATION = {};

                        function SomePromiseArray(values) {
                            this.constructor$(values);
                            this._howMany = 0;
                            this._unwrap = false;
                            this._initialized = false;
                        }
                        util.inherits(SomePromiseArray, PromiseArray);

                        SomePromiseArray.prototype._init = function () {
                            if (!this._initialized) {
                                return;
                            }
                            if (this._howMany === 0) {
                                this._resolve([]);
                                return;
                            }
                            this._init$(undefined, -5);
                            var isArrayResolved = isArray(this._values);
                            if (!this._isResolved() && isArrayResolved && this._howMany > this._canPossiblyFulfill()) {
                                this._reject(this._getRangeError(this.length()));
                            }
                        };

                        SomePromiseArray.prototype.init = function () {
                            this._initialized = true;
                            this._init();
                        };

                        SomePromiseArray.prototype.setUnwrap = function () {
                            this._unwrap = true;
                        };

                        SomePromiseArray.prototype.howMany = function () {
                            return this._howMany;
                        };

                        SomePromiseArray.prototype.setHowMany = function (count) {
                            this._howMany = count;
                        };

                        SomePromiseArray.prototype._promiseFulfilled = function (value) {
                            this._addFulfilled(value);
                            if (this._fulfilled() === this.howMany()) {
                                this._values.length = this.howMany();
                                if (this.howMany() === 1 && this._unwrap) {
                                    this._resolve(this._values[0]);
                                } else {
                                    this._resolve(this._values);
                                }
                                return true;
                            }
                            return false;
                        };
                        SomePromiseArray.prototype._promiseRejected = function (reason) {
                            this._addRejected(reason);
                            return this._checkOutcome();
                        };

                        SomePromiseArray.prototype._promiseCancelled = function () {
                            if (this._values instanceof Promise || this._values == null) {
                                return this._cancel();
                            }
                            this._addRejected(CANCELLATION);
                            return this._checkOutcome();
                        };

                        SomePromiseArray.prototype._checkOutcome = function () {
                            if (this.howMany() > this._canPossiblyFulfill()) {
                                var e = new AggregateError();
                                for (var i = this.length(); i < this._values.length; ++i) {
                                    if (this._values[i] !== CANCELLATION) {
                                        e.push(this._values[i]);
                                    }
                                }
                                if (e.length > 0) {
                                    this._reject(e);
                                } else {
                                    this._cancel();
                                }
                                return true;
                            }
                            return false;
                        };

                        SomePromiseArray.prototype._fulfilled = function () {
                            return this._totalResolved;
                        };

                        SomePromiseArray.prototype._rejected = function () {
                            return this._values.length - this.length();
                        };

                        SomePromiseArray.prototype._addRejected = function (reason) {
                            this._values.push(reason);
                        };

                        SomePromiseArray.prototype._addFulfilled = function (value) {
                            this._values[this._totalResolved++] = value;
                        };

                        SomePromiseArray.prototype._canPossiblyFulfill = function () {
                            return this.length() - this._rejected();
                        };

                        SomePromiseArray.prototype._getRangeError = function (count) {
                            var message = "Input array must contain at least " + this._howMany + " items but contains only " + count + " items";
                            return new RangeError(message);
                        };

                        SomePromiseArray.prototype._resolveEmptyArray = function () {
                            this._reject(this._getRangeError(0));
                        };

                        function some(promises, howMany) {
                            if ((howMany | 0) !== howMany || howMany < 0) {
                                return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var ret = new SomePromiseArray(promises);
                            var promise = ret.promise();
                            ret.setHowMany(howMany);
                            ret.init();
                            return promise;
                        }

                        Promise.some = function (promises, howMany) {
                            return some(promises, howMany);
                        };

                        Promise.prototype.some = function (howMany) {
                            return some(this, howMany);
                        };

                        Promise._SomePromiseArray = SomePromiseArray;
                    };
                }, { "./errors": 12, "./util": 36 }], 32: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        function PromiseInspection(promise) {
                            if (promise !== undefined) {
                                promise = promise._target();
                                this._bitField = promise._bitField;
                                this._settledValueField = promise._isFateSealed() ? promise._settledValue() : undefined;
                            } else {
                                this._bitField = 0;
                                this._settledValueField = undefined;
                            }
                        }

                        PromiseInspection.prototype._settledValue = function () {
                            return this._settledValueField;
                        };

                        var value = PromiseInspection.prototype.value = function () {
                            if (!this.isFulfilled()) {
                                throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            return this._settledValue();
                        };

                        var reason = PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function () {
                            if (!this.isRejected()) {
                                throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            return this._settledValue();
                        };

                        var isFulfilled = PromiseInspection.prototype.isFulfilled = function () {
                            return (this._bitField & 33554432) !== 0;
                        };

                        var isRejected = PromiseInspection.prototype.isRejected = function () {
                            return (this._bitField & 16777216) !== 0;
                        };

                        var isPending = PromiseInspection.prototype.isPending = function () {
                            return (this._bitField & 50397184) === 0;
                        };

                        var isResolved = PromiseInspection.prototype.isResolved = function () {
                            return (this._bitField & 50331648) !== 0;
                        };

                        PromiseInspection.prototype.isCancelled = function () {
                            return (this._bitField & 8454144) !== 0;
                        };

                        Promise.prototype.__isCancelled = function () {
                            return (this._bitField & 65536) === 65536;
                        };

                        Promise.prototype._isCancelled = function () {
                            return this._target().__isCancelled();
                        };

                        Promise.prototype.isCancelled = function () {
                            return (this._target()._bitField & 8454144) !== 0;
                        };

                        Promise.prototype.isPending = function () {
                            return isPending.call(this._target());
                        };

                        Promise.prototype.isRejected = function () {
                            return isRejected.call(this._target());
                        };

                        Promise.prototype.isFulfilled = function () {
                            return isFulfilled.call(this._target());
                        };

                        Promise.prototype.isResolved = function () {
                            return isResolved.call(this._target());
                        };

                        Promise.prototype.value = function () {
                            return value.call(this._target());
                        };

                        Promise.prototype.reason = function () {
                            var target = this._target();
                            target._unsetRejectionIsUnhandled();
                            return reason.call(target);
                        };

                        Promise.prototype._value = function () {
                            return this._settledValue();
                        };

                        Promise.prototype._reason = function () {
                            this._unsetRejectionIsUnhandled();
                            return this._settledValue();
                        };

                        Promise.PromiseInspection = PromiseInspection;
                    };
                }, {}], 33: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var util = _dereq_("./util");
                        var errorObj = util.errorObj;
                        var isObject = util.isObject;

                        function tryConvertToPromise(obj, context) {
                            if (isObject(obj)) {
                                if (obj instanceof Promise) return obj;
                                var then = getThen(obj);
                                if (then === errorObj) {
                                    if (context) context._pushContext();
                                    var ret = Promise.reject(then.e);
                                    if (context) context._popContext();
                                    return ret;
                                } else if (typeof then === "function") {
                                    if (isAnyBluebirdPromise(obj)) {
                                        var ret = new Promise(INTERNAL);
                                        obj._then(ret._fulfill, ret._reject, undefined, ret, null);
                                        return ret;
                                    }
                                    return doThenable(obj, then, context);
                                }
                            }
                            return obj;
                        }

                        function doGetThen(obj) {
                            return obj.then;
                        }

                        function getThen(obj) {
                            try {
                                return doGetThen(obj);
                            } catch (e) {
                                errorObj.e = e;
                                return errorObj;
                            }
                        }

                        var hasProp = {}.hasOwnProperty;
                        function isAnyBluebirdPromise(obj) {
                            try {
                                return hasProp.call(obj, "_promise0");
                            } catch (e) {
                                return false;
                            }
                        }

                        function doThenable(x, then, context) {
                            var promise = new Promise(INTERNAL);
                            var ret = promise;
                            if (context) context._pushContext();
                            promise._captureStackTrace();
                            if (context) context._popContext();
                            var synchronous = true;
                            var result = util.tryCatch(then).call(x, resolve, reject);
                            synchronous = false;

                            if (promise && result === errorObj) {
                                promise._rejectCallback(result.e, true, true);
                                promise = null;
                            }

                            function resolve(value) {
                                if (!promise) return;
                                promise._resolveCallback(value);
                                promise = null;
                            }

                            function reject(reason) {
                                if (!promise) return;
                                promise._rejectCallback(reason, synchronous, true);
                                promise = null;
                            }
                            return ret;
                        }

                        return tryConvertToPromise;
                    };
                }, { "./util": 36 }], 34: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, debug) {
                        var util = _dereq_("./util");
                        var TimeoutError = Promise.TimeoutError;

                        function HandleWrapper(handle) {
                            this.handle = handle;
                        }

                        HandleWrapper.prototype._resultCancelled = function () {
                            clearTimeout(this.handle);
                        };

                        var afterValue = function (value) {
                            return delay(+this).thenReturn(value);
                        };
                        var delay = Promise.delay = function (ms, value) {
                            var ret;
                            var handle;
                            if (value !== undefined) {
                                ret = Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
                                if (debug.cancellation() && value instanceof Promise) {
                                    ret._setOnCancel(value);
                                }
                            } else {
                                ret = new Promise(INTERNAL);
                                handle = setTimeout(function () {
                                    ret._fulfill();
                                }, +ms);
                                if (debug.cancellation()) {
                                    ret._setOnCancel(new HandleWrapper(handle));
                                }
                                ret._captureStackTrace();
                            }
                            ret._setAsyncGuaranteed();
                            return ret;
                        };

                        Promise.prototype.delay = function (ms) {
                            return delay(ms, this);
                        };

                        var afterTimeout = function (promise, message, parent) {
                            var err;
                            if (typeof message !== "string") {
                                if (message instanceof Error) {
                                    err = message;
                                } else {
                                    err = new TimeoutError("operation timed out");
                                }
                            } else {
                                err = new TimeoutError(message);
                            }
                            util.markAsOriginatingFromRejection(err);
                            promise._attachExtraTrace(err);
                            promise._reject(err);

                            if (parent != null) {
                                parent.cancel();
                            }
                        };

                        function successClear(value) {
                            clearTimeout(this.handle);
                            return value;
                        }

                        function failureClear(reason) {
                            clearTimeout(this.handle);
                            throw reason;
                        }

                        Promise.prototype.timeout = function (ms, message) {
                            ms = +ms;
                            var ret, parent;

                            var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
                                if (ret.isPending()) {
                                    afterTimeout(ret, message, parent);
                                }
                            }, ms));

                            if (debug.cancellation()) {
                                parent = this.then();
                                ret = parent._then(successClear, failureClear, undefined, handleWrapper, undefined);
                                ret._setOnCancel(handleWrapper);
                            } else {
                                ret = this._then(successClear, failureClear, undefined, handleWrapper, undefined);
                            }

                            return ret;
                        };
                    };
                }, { "./util": 36 }], 35: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
                        var util = _dereq_("./util");
                        var TypeError = _dereq_("./errors").TypeError;
                        var inherits = _dereq_("./util").inherits;
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        var NULL = {};

                        function thrower(e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }

                        function castPreservingDisposable(thenable) {
                            var maybePromise = tryConvertToPromise(thenable);
                            if (maybePromise !== thenable && typeof thenable._isDisposable === "function" && typeof thenable._getDisposer === "function" && thenable._isDisposable()) {
                                maybePromise._setDisposable(thenable._getDisposer());
                            }
                            return maybePromise;
                        }
                        function dispose(resources, inspection) {
                            var i = 0;
                            var len = resources.length;
                            var ret = new Promise(INTERNAL);
                            function iterator() {
                                if (i >= len) return ret._fulfill();
                                var maybePromise = castPreservingDisposable(resources[i++]);
                                if (maybePromise instanceof Promise && maybePromise._isDisposable()) {
                                    try {
                                        maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
                                    } catch (e) {
                                        return thrower(e);
                                    }
                                    if (maybePromise instanceof Promise) {
                                        return maybePromise._then(iterator, thrower, null, null, null);
                                    }
                                }
                                iterator();
                            }
                            iterator();
                            return ret;
                        }

                        function Disposer(data, promise, context) {
                            this._data = data;
                            this._promise = promise;
                            this._context = context;
                        }

                        Disposer.prototype.data = function () {
                            return this._data;
                        };

                        Disposer.prototype.promise = function () {
                            return this._promise;
                        };

                        Disposer.prototype.resource = function () {
                            if (this.promise().isFulfilled()) {
                                return this.promise().value();
                            }
                            return NULL;
                        };

                        Disposer.prototype.tryDispose = function (inspection) {
                            var resource = this.resource();
                            var context = this._context;
                            if (context !== undefined) context._pushContext();
                            var ret = resource !== NULL ? this.doDispose(resource, inspection) : null;
                            if (context !== undefined) context._popContext();
                            this._promise._unsetDisposable();
                            this._data = null;
                            return ret;
                        };

                        Disposer.isDisposer = function (d) {
                            return d != null && typeof d.resource === "function" && typeof d.tryDispose === "function";
                        };

                        function FunctionDisposer(fn, promise, context) {
                            this.constructor$(fn, promise, context);
                        }
                        inherits(FunctionDisposer, Disposer);

                        FunctionDisposer.prototype.doDispose = function (resource, inspection) {
                            var fn = this.data();
                            return fn.call(resource, resource, inspection);
                        };

                        function maybeUnwrapDisposer(value) {
                            if (Disposer.isDisposer(value)) {
                                this.resources[this.index]._setDisposable(value);
                                return value.promise();
                            }
                            return value;
                        }

                        function ResourceList(length) {
                            this.length = length;
                            this.promise = null;
                            this[length - 1] = null;
                        }

                        ResourceList.prototype._resultCancelled = function () {
                            var len = this.length;
                            for (var i = 0; i < len; ++i) {
                                var item = this[i];
                                if (item instanceof Promise) {
                                    item.cancel();
                                }
                            }
                        };

                        Promise.using = function () {
                            var len = arguments.length;
                            if (len < 2) return apiRejection("you must pass at least 2 arguments to Promise.using");
                            var fn = arguments[len - 1];
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var input;
                            var spreadArgs = true;
                            if (len === 2 && Array.isArray(arguments[0])) {
                                input = arguments[0];
                                len = input.length;
                                spreadArgs = false;
                            } else {
                                input = arguments;
                                len--;
                            }
                            var resources = new ResourceList(len);
                            for (var i = 0; i < len; ++i) {
                                var resource = input[i];
                                if (Disposer.isDisposer(resource)) {
                                    var disposer = resource;
                                    resource = resource.promise();
                                    resource._setDisposable(disposer);
                                } else {
                                    var maybePromise = tryConvertToPromise(resource);
                                    if (maybePromise instanceof Promise) {
                                        resource = maybePromise._then(maybeUnwrapDisposer, null, null, {
                                            resources: resources,
                                            index: i
                                        }, undefined);
                                    }
                                }
                                resources[i] = resource;
                            }

                            var reflectedResources = new Array(resources.length);
                            for (var i = 0; i < reflectedResources.length; ++i) {
                                reflectedResources[i] = Promise.resolve(resources[i]).reflect();
                            }

                            var resultPromise = Promise.all(reflectedResources).then(function (inspections) {
                                for (var i = 0; i < inspections.length; ++i) {
                                    var inspection = inspections[i];
                                    if (inspection.isRejected()) {
                                        errorObj.e = inspection.error();
                                        return errorObj;
                                    } else if (!inspection.isFulfilled()) {
                                        resultPromise.cancel();
                                        return;
                                    }
                                    inspections[i] = inspection.value();
                                }
                                promise._pushContext();

                                fn = tryCatch(fn);
                                var ret = spreadArgs ? fn.apply(undefined, inspections) : fn(inspections);
                                var promiseCreated = promise._popContext();
                                debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise);
                                return ret;
                            });

                            var promise = resultPromise.lastly(function () {
                                var inspection = new Promise.PromiseInspection(resultPromise);
                                return dispose(resources, inspection);
                            });
                            resources.promise = promise;
                            promise._setOnCancel(resources);
                            return promise;
                        };

                        Promise.prototype._setDisposable = function (disposer) {
                            this._bitField = this._bitField | 131072;
                            this._disposer = disposer;
                        };

                        Promise.prototype._isDisposable = function () {
                            return (this._bitField & 131072) > 0;
                        };

                        Promise.prototype._getDisposer = function () {
                            return this._disposer;
                        };

                        Promise.prototype._unsetDisposable = function () {
                            this._bitField = this._bitField & ~131072;
                            this._disposer = undefined;
                        };

                        Promise.prototype.disposer = function (fn) {
                            if (typeof fn === "function") {
                                return new FunctionDisposer(fn, this, createContext());
                            }
                            throw new TypeError();
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 36: [function (_dereq_, module, exports) {
                    "use strict";

                    var es5 = _dereq_("./es5");
                    var canEvaluate = typeof navigator == "undefined";

                    var errorObj = { e: {} };
                    var tryCatchTarget;
                    var globalObject = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this !== undefined ? this : null;

                    function tryCatcher() {
                        try {
                            var target = tryCatchTarget;
                            tryCatchTarget = null;
                            return target.apply(this, arguments);
                        } catch (e) {
                            errorObj.e = e;
                            return errorObj;
                        }
                    }
                    function tryCatch(fn) {
                        tryCatchTarget = fn;
                        return tryCatcher;
                    }

                    var inherits = function (Child, Parent) {
                        var hasProp = {}.hasOwnProperty;

                        function T() {
                            this.constructor = Child;
                            this.constructor$ = Parent;
                            for (var propertyName in Parent.prototype) {
                                if (hasProp.call(Parent.prototype, propertyName) && propertyName.charAt(propertyName.length - 1) !== "$") {
                                    this[propertyName + "$"] = Parent.prototype[propertyName];
                                }
                            }
                        }
                        T.prototype = Parent.prototype;
                        Child.prototype = new T();
                        return Child.prototype;
                    };

                    function isPrimitive(val) {
                        return val == null || val === true || val === false || typeof val === "string" || typeof val === "number";
                    }

                    function isObject(value) {
                        return typeof value === "function" || typeof value === "object" && value !== null;
                    }

                    function maybeWrapAsError(maybeError) {
                        if (!isPrimitive(maybeError)) return maybeError;

                        return new Error(safeToString(maybeError));
                    }

                    function withAppended(target, appendee) {
                        var len = target.length;
                        var ret = new Array(len + 1);
                        var i;
                        for (i = 0; i < len; ++i) {
                            ret[i] = target[i];
                        }
                        ret[i] = appendee;
                        return ret;
                    }

                    function getDataPropertyOrDefault(obj, key, defaultValue) {
                        if (es5.isES5) {
                            var desc = Object.getOwnPropertyDescriptor(obj, key);

                            if (desc != null) {
                                return desc.get == null && desc.set == null ? desc.value : defaultValue;
                            }
                        } else {
                            return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
                        }
                    }

                    function notEnumerableProp(obj, name, value) {
                        if (isPrimitive(obj)) return obj;
                        var descriptor = {
                            value: value,
                            configurable: true,
                            enumerable: false,
                            writable: true
                        };
                        es5.defineProperty(obj, name, descriptor);
                        return obj;
                    }

                    function thrower(r) {
                        throw r;
                    }

                    var inheritedDataKeys = function () {
                        var excludedPrototypes = [Array.prototype, Object.prototype, Function.prototype];

                        var isExcludedProto = function (val) {
                            for (var i = 0; i < excludedPrototypes.length; ++i) {
                                if (excludedPrototypes[i] === val) {
                                    return true;
                                }
                            }
                            return false;
                        };

                        if (es5.isES5) {
                            var getKeys = Object.getOwnPropertyNames;
                            return function (obj) {
                                var ret = [];
                                var visitedKeys = Object.create(null);
                                while (obj != null && !isExcludedProto(obj)) {
                                    var keys;
                                    try {
                                        keys = getKeys(obj);
                                    } catch (e) {
                                        return ret;
                                    }
                                    for (var i = 0; i < keys.length; ++i) {
                                        var key = keys[i];
                                        if (visitedKeys[key]) continue;
                                        visitedKeys[key] = true;
                                        var desc = Object.getOwnPropertyDescriptor(obj, key);
                                        if (desc != null && desc.get == null && desc.set == null) {
                                            ret.push(key);
                                        }
                                    }
                                    obj = es5.getPrototypeOf(obj);
                                }
                                return ret;
                            };
                        } else {
                            var hasProp = {}.hasOwnProperty;
                            return function (obj) {
                                if (isExcludedProto(obj)) return [];
                                var ret = [];

                                /*jshint forin:false */
                                enumeration: for (var key in obj) {
                                    if (hasProp.call(obj, key)) {
                                        ret.push(key);
                                    } else {
                                        for (var i = 0; i < excludedPrototypes.length; ++i) {
                                            if (hasProp.call(excludedPrototypes[i], key)) {
                                                continue enumeration;
                                            }
                                        }
                                        ret.push(key);
                                    }
                                }
                                return ret;
                            };
                        }
                    }();

                    var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
                    function isClass(fn) {
                        try {
                            if (typeof fn === "function") {
                                var keys = es5.names(fn.prototype);

                                var hasMethods = es5.isES5 && keys.length > 1;
                                var hasMethodsOtherThanConstructor = keys.length > 0 && !(keys.length === 1 && keys[0] === "constructor");
                                var hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

                                if (hasMethods || hasMethodsOtherThanConstructor || hasThisAssignmentAndStaticMethods) {
                                    return true;
                                }
                            }
                            return false;
                        } catch (e) {
                            return false;
                        }
                    }

                    function toFastProperties(obj) {
                        /*jshint -W027,-W055,-W031*/
                        function FakeConstructor() {}
                        FakeConstructor.prototype = obj;
                        var l = 8;
                        while (l--) new FakeConstructor();
                        return obj;
                        eval(obj);
                    }

                    var rident = /^[a-z$_][a-z$_0-9]*$/i;
                    function isIdentifier(str) {
                        return rident.test(str);
                    }

                    function filledRange(count, prefix, suffix) {
                        var ret = new Array(count);
                        for (var i = 0; i < count; ++i) {
                            ret[i] = prefix + i + suffix;
                        }
                        return ret;
                    }

                    function safeToString(obj) {
                        try {
                            return obj + "";
                        } catch (e) {
                            return "[no string representation]";
                        }
                    }

                    function isError(obj) {
                        return obj instanceof Error || obj !== null && typeof obj === "object" && typeof obj.message === "string" && typeof obj.name === "string";
                    }

                    function markAsOriginatingFromRejection(e) {
                        try {
                            notEnumerableProp(e, "isOperational", true);
                        } catch (ignore) {}
                    }

                    function originatesFromRejection(e) {
                        if (e == null) return false;
                        return e instanceof Error["__BluebirdErrorTypes__"].OperationalError || e["isOperational"] === true;
                    }

                    function canAttachTrace(obj) {
                        return isError(obj) && es5.propertyIsWritable(obj, "stack");
                    }

                    var ensureErrorObject = function () {
                        if (!("stack" in new Error())) {
                            return function (value) {
                                if (canAttachTrace(value)) return value;
                                try {
                                    throw new Error(safeToString(value));
                                } catch (err) {
                                    return err;
                                }
                            };
                        } else {
                            return function (value) {
                                if (canAttachTrace(value)) return value;
                                return new Error(safeToString(value));
                            };
                        }
                    }();

                    function classString(obj) {
                        return {}.toString.call(obj);
                    }

                    function copyDescriptors(from, to, filter) {
                        var keys = es5.names(from);
                        for (var i = 0; i < keys.length; ++i) {
                            var key = keys[i];
                            if (filter(key)) {
                                try {
                                    es5.defineProperty(to, key, es5.getDescriptor(from, key));
                                } catch (ignore) {}
                            }
                        }
                    }

                    var asArray = function (v) {
                        if (es5.isArray(v)) {
                            return v;
                        }
                        return null;
                    };

                    if (typeof Symbol !== "undefined" && Symbol.iterator) {
                        var ArrayFrom = typeof Array.from === "function" ? function (v) {
                            return Array.from(v);
                        } : function (v) {
                            var ret = [];
                            var it = v[Symbol.iterator]();
                            var itResult;
                            while (!(itResult = it.next()).done) {
                                ret.push(itResult.value);
                            }
                            return ret;
                        };

                        asArray = function (v) {
                            if (es5.isArray(v)) {
                                return v;
                            } else if (v != null && typeof v[Symbol.iterator] === "function") {
                                return ArrayFrom(v);
                            }
                            return null;
                        };
                    }

                    var isNode = typeof process !== "undefined" && classString(process).toLowerCase() === "[object process]";

                    var hasEnvVariables = typeof process !== "undefined" && typeof process.env !== "undefined";

                    function env(key) {
                        return hasEnvVariables ? process.env[key] : undefined;
                    }

                    function getNativePromise() {
                        if (typeof Promise === "function") {
                            try {
                                var promise = new Promise(function () {});
                                if ({}.toString.call(promise) === "[object Promise]") {
                                    return Promise;
                                }
                            } catch (e) {}
                        }
                    }

                    function domainBind(self, cb) {
                        return self.bind(cb);
                    }

                    var ret = {
                        isClass: isClass,
                        isIdentifier: isIdentifier,
                        inheritedDataKeys: inheritedDataKeys,
                        getDataPropertyOrDefault: getDataPropertyOrDefault,
                        thrower: thrower,
                        isArray: es5.isArray,
                        asArray: asArray,
                        notEnumerableProp: notEnumerableProp,
                        isPrimitive: isPrimitive,
                        isObject: isObject,
                        isError: isError,
                        canEvaluate: canEvaluate,
                        errorObj: errorObj,
                        tryCatch: tryCatch,
                        inherits: inherits,
                        withAppended: withAppended,
                        maybeWrapAsError: maybeWrapAsError,
                        toFastProperties: toFastProperties,
                        filledRange: filledRange,
                        toString: safeToString,
                        canAttachTrace: canAttachTrace,
                        ensureErrorObject: ensureErrorObject,
                        originatesFromRejection: originatesFromRejection,
                        markAsOriginatingFromRejection: markAsOriginatingFromRejection,
                        classString: classString,
                        copyDescriptors: copyDescriptors,
                        hasDevTools: typeof chrome !== "undefined" && chrome && typeof chrome.loadTimes === "function",
                        isNode: isNode,
                        hasEnvVariables: hasEnvVariables,
                        env: env,
                        global: globalObject,
                        getNativePromise: getNativePromise,
                        domainBind: domainBind
                    };
                    ret.isRecentNode = ret.isNode && function () {
                        var version = process.versions.node.split(".").map(Number);
                        return version[0] === 0 && version[1] > 10 || version[0] > 0;
                    }();

                    if (ret.isNode) ret.toFastProperties(process);

                    try {
                        throw new Error();
                    } catch (e) {
                        ret.lastLineError = e;
                    }
                    module.exports = ret;
                }, { "./es5": 13 }] }, {}, [4])(4);
        });;if (typeof window !== 'undefined' && window !== null) {
            window.P = window.Promise;
        } else if (typeof self !== 'undefined' && self !== null) {
            self.P = self.Promise;
        }
    })(this);

    return _retrieveGlobal();
});
$__System.registerDynamic("npm:bluebird@3.5.1.js", ["npm:bluebird@3.5.1/js/browser/bluebird.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:bluebird@3.5.1/js/browser/bluebird.js");
});
$__System.register('lib/http.js', ['github:components/jquery@1.11.3.js', 'npm:lodash@4.17.5.js', 'npm:bluebird@3.5.1.js'], function (_export) {
    'use strict';

    var $, _, Promise, Http;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_bluebird) {
            Promise = _bluebird['default'];
        }],
        execute: function () {
            Http = function () {
                function Http() {
                    _classCallCheck(this, Http);
                }

                _createClass(Http, null, [{
                    key: 'get',
                    value: function get(url) {
                        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        var _ref$type = _ref.type;
                        var type = _ref$type === undefined ? 'json' : _ref$type;
                        var data = _ref.data;
                        var cb = _ref.cb;

                        return new Promise(function (resolve, reject, onCancel) {
                            return $.ajax(url, {
                                method: 'get',
                                data: data,
                                dataType: type,
                                contentType: type
                            }).done(function (data) {
                                if (typeof cb === 'function') {
                                    cb(data);
                                }
                                return resolve(data);
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                return reject(console.error(errorThrown));
                            }).always(resolve);
                        });
                    }
                }, {
                    key: 'post',
                    value: function post(url, _ref2) {
                        var _ref2$type = _ref2.type;
                        var type = _ref2$type === undefined ? 'json' : _ref2$type;
                        var data = _ref2.data;
                        var cb = _ref2.cb;

                        return new Promise(function (resolve, reject, onCancel) {
                            type = type || 'json';

                            $.ajax(url, {
                                method: 'post',
                                data: data,
                                dataType: type,
                                contentType: type
                            }).then(function (data) {
                                resolve(data);
                                if (typeof cb === 'function') {
                                    cb(data);
                                }
                            }, function (jqXHR, textStatus, errorThrown) {
                                reject(new Error(errorThrown));
                            });
                        });
                    }
                }, {
                    key: 'list',
                    value: function list() {}
                }, {
                    key: 'put',
                    value: function put() {}
                }]);

                return Http;
            }();

            _export('Http', Http);
        }
    };
});
$__System.register('lib/data-service.js', ['helpers/helpers.js', 'lib/http.js', 'npm:lodash@4.17.5.js', 'github:ElliotNB/observable-slim@master.js'], function (_export) {
    'use strict';

    var Helpers, Http, _, ObservableSlim, DataService;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_jsLibHttp) {
            Http = _jsLibHttp.Http;
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_observableSlim) {
            ObservableSlim = _observableSlim['default'];
        }],
        execute: function () {
            DataService = function () {
                function DataService() {
                    _classCallCheck(this, DataService);

                    this._handleObservingDataChanges = this._handleObservingDataChanges.bind(this);

                    this._data = {};

                    this._observers = new Map();

                    this._subscribers = new Set();
                }

                _createClass(DataService, [{
                    key: 'subscribe',
                    value: function subscribe(keyPath, handler, instance) {

                        if (Object.is(keyPath, undefined)) {
                            throw new Error('keyPath is required to subscribe data service');
                        }
                        if (Object.is(handler, undefined)) {
                            throw new Error('fn is required to subscribe data service');
                        }
                        var subscriber = {
                            instance: instance,
                            id: Helpers.Strings.random(6),
                            keyPath: keyPath,
                            handler: handler,
                            proxy: this._getObserver(keyPath)
                        };
                        this._subscribers.add(subscriber);
                        return subscriber;
                    }
                }, {
                    key: 'unsubscribe',
                    value: function unsubscribe(subscriber) {
                        this._subscribers['delete'](subscriber);
                    }
                }, {
                    key: 'unsubscribeAll',
                    value: function unsubscribeAll() {
                        this._subscribers.clear();
                    }
                }, {
                    key: 'broadcastDataChanges',
                    value: function broadcastDataChanges(keyPath, excluded) {
                        var data = this._data[keyPath];

                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this._subscribers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var subscriber = _step.value;

                                if (Object.is(subscriber, undefined)) {
                                    return;
                                }
                                if (Object.is(subscriber.keyPath, keyPath) && !Object.is(excluded, subscriber)) {
                                    subscriber.handler(keyPath, data);
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unsubscribeAll();
                        for (var prop in this) {
                            if (this.hasOwnProperty(prop)) {
                                delete this[prop];
                            }
                        }
                    }
                }, {
                    key: '_getObserver',
                    value: function _getObserver(keyPath) {
                        var handler = arguments.length <= 1 || arguments[1] === undefined ? this._handleObservingDataChanges : arguments[1];

                        if (!this._observers.has(keyPath)) {
                            this._observers.set(keyPath, ObservableSlim.create(this._data[keyPath], true, function (changes) {
                                handler(changes, keyPath);
                            }));
                        }
                        return this._observers.get(keyPath);
                    }
                }, {
                    key: '_handleObservingDataChanges',
                    value: function _handleObservingDataChanges(changes, keyPath) {
                        this.broadcastDataChanges(keyPath);
                        return true;
                    }
                }]);

                return DataService;
            }();

            _export('default', DataService);
        }
    };
});
$__System.register('components/_cat-clicker/cat-service.js', ['helpers/helpers.js', 'lib/http.js', 'lib/data-service.js', 'npm:lodash@4.17.5.js'], function (_export) {
    'use strict';

    var Helpers, Http, DataService, _, dataUrl, CatService;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(_x2, _x3, _x4) {
        var _again = true;_function: while (_again) {
            var object = _x2,
                property = _x3,
                receiver = _x4;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);if (parent === null) {
                    return undefined;
                } else {
                    _x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;if (getter === undefined) {
                    return undefined;
                }return getter.call(receiver);
            }
        }
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_jsHelpersHelpers) {
            Helpers = _jsHelpersHelpers.Helpers;
        }, function (_jsLibHttp) {
            Http = _jsLibHttp.Http;
        }, function (_jsLibDataService) {
            DataService = _jsLibDataService['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }],
        execute: function () {
            dataUrl = "../../assets/data/example/cat.json";

            CatService = function (_DataService) {
                _inherits(CatService, _DataService);

                function CatService() {
                    _classCallCheck(this, CatService);

                    _get(Object.getPrototypeOf(CatService.prototype), 'constructor', this).call(this);

                    this._data = {
                        selectedCat: {},
                        state: { selectedCat: this.SELECTED_CAT_STATE_READ },
                        cats: []
                    };

                    this.fetchData();
                }

                _createClass(CatService, [{
                    key: 'fetchData',
                    value: function fetchData() {
                        var _this = this;

                        var uri = arguments.length <= 0 || arguments[0] === undefined ? dataUrl : arguments[0];

                        Http.get(uri).then(function (result) {
                            Object.assign(_this._data.cats, result);
                            _this.broadcastDataChanges("cats");
                        });
                    }
                }, {
                    key: '_handleObservingDataChanges',
                    value: function _handleObservingDataChanges(changes, keyPath) {

                        if (Object.is(keyPath, "cats")) {
                            this._syncSelectedCat(changes);
                        }
                        if (Object.is(keyPath, "selectedCat")) {
                            this._syncCatInCats(changes);
                        }
                        this.broadcastDataChanges(keyPath);

                        return true;
                    }
                }, {
                    key: '_syncSelectedCat',
                    value: function _syncSelectedCat(changes) {
                        var change = changes[changes.length - 1];
                        if (this._data.selectedCat && change.target.name === this._data.selectedCat.name) {
                            Object.assign(this._data.selectedCat, change.target);
                            this.broadcastDataChanges("selectedCat");
                        }
                    }
                }, {
                    key: '_syncCatInCats',
                    value: function _syncCatInCats(changes) {
                        var change = changes[changes.length - 1];
                        var cat = _.find(this._data.cats, function (cat) {
                            return cat.name === change.target.name;
                        });
                        if (Object.is(cat, undefined)) {
                            return;
                        }
                        Object.assign(cat, change.target);
                        this.broadcastDataChanges("cats");
                    }
                }]);

                return CatService;
            }(DataService);

            _export('default', new CatService());
        }
    };
});
$__System.register('components/_cat-clicker/cat-description-panel/cat-description-panel.js', ['lib/featured-component.js', 'npm:lodash@4.17.5.js', 'lib/config.js', 'components/_cat-clicker/cat-service.js'], function (_export) {
    'use strict';

    var FeaturedComponent, _, configurable, CatService, CatDescriptionPanel;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(_x, _x2, _x3) {
        var _again = true;_function: while (_again) {
            var object = _x,
                property = _x2,
                receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);if (parent === null) {
                    return undefined;
                } else {
                    _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;if (getter === undefined) {
                    return undefined;
                }return getter.call(receiver);
            }
        }
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_jsLibFeaturedComponent) {
            FeaturedComponent = _jsLibFeaturedComponent['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_jsLibConfig) {
            configurable = _jsLibConfig.configurable;
        }, function (_catService) {
            CatService = _catService['default'];
        }],
        execute: function () {
            CatDescriptionPanel = function (_FeaturedComponent) {
                _inherits(CatDescriptionPanel, _FeaturedComponent);

                function CatDescriptionPanel(el, options) {
                    _classCallCheck(this, _CatDescriptionPanel);

                    _get(Object.getPrototypeOf(_CatDescriptionPanel.prototype), 'constructor', this).call(this, el, options);

                    this._data = this._createSubscriptionData(CatService, "selectedCat", this.handleNotification);
                    this._childElements.$buttonLike.click(this.onClickButtonLike);
                }

                _createClass(CatDescriptionPanel, [{
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {
                        this._childElements.$name.html(data.name ? data.name : '');
                        this._childElements.$counter.html(data.counter ? data.counter : '');
                    }
                }, {
                    key: 'onClickButtonLike',
                    value: function onClickButtonLike(e) {
                        if (this._data.selectedCat) {
                            this._data.selectedCat.counter += 1;
                            this._childElements.$counter.html(this._data.selectedCat.counter);
                        }
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatDescriptionPanel(el, options);
                    }
                }]);

                var _CatDescriptionPanel = CatDescriptionPanel;
                CatDescriptionPanel = configurable({})(CatDescriptionPanel) || CatDescriptionPanel;
                return CatDescriptionPanel;
            }(FeaturedComponent);

            _export('CatDescriptionPanel', CatDescriptionPanel);
        }
    };
});
$__System.register("helpers/booleans.js", [], function (_export) {
  "use strict";

  var Booleans;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      Booleans = function () {
        function Booleans() {
          _classCallCheck(this, Booleans);
        }

        _createClass(Booleans, null, [{
          key: "isTruthyValue",
          value: function isTruthyValue(val) {
            return val || parseInt(val, 10) === 0 ? true : false;
          }
        }]);

        return Booleans;
      }();

      _export("Booleans", Booleans);
    }
  };
});
$__System.register('helpers/browser.js', ['github:components/jquery@1.11.3.js'], function (_export) {
    'use strict';

    var $, Browser;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            Browser = function () {
                function Browser() {
                    _classCallCheck(this, Browser);
                }

                _createClass(Browser, null, [{
                    key: 'getAgent',
                    value: function getAgent() {
                        var ua = navigator.userAgent,
                            tem,
                            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                        if (/trident/i.test(M[1])) {
                            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                            return 'IE ' + (tem[1] || '');
                        }
                        if (M[1] === 'Chrome') {
                            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                            if (tem !== null) {
                                return tem.slice(1).join(' ').replace('OPR', 'Opera');
                            }
                        }
                        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                        if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);
                        return M.join(' ');
                    }
                }, {
                    key: 'getScrollTopPosition',
                    value: function getScrollTopPosition() {
                        if (typeof pageYOffset !== 'undefined') {
                            return pageYOffset;
                        } else {
                            var B = document.body;
                            var D = document.documentElement;
                            D = D.clientHeight ? D : B;
                            return D.scrollTop;
                        }
                    }
                }, {
                    key: 'getScrollLeftPosition',
                    value: function getScrollLeftPosition() {
                        return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
                    }
                }, {
                    key: 'getUserAgent',
                    value: function getUserAgent() {
                        return navigator.userAgent;
                    }
                }, {
                    key: 'getWindowSize',
                    value: function getWindowSize() {

                        return {
                            width: $(window).width() || window.innerWidth || window.document.documentElement.clientWidth || (window.document.body || window.document.getElementsByTagName('body')[0]).clientWidth,

                            height: $(window).height() || window.innerHeight || window.document.documentElement.clientHeight || (window.document.body || window.document.getElementsByTagName('body')[0]).clientHeight
                        };
                    }
                }]);

                return Browser;
            }();

            _export('Browser', Browser);
        }
    };
});
$__System.register("helpers/colors.js", [], function (_export) {
    "use strict";

    var Colors;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            Colors = function () {
                function Colors() {
                    _classCallCheck(this, Colors);
                }

                _createClass(Colors, null, [{
                    key: "rgb2rgba",
                    value: function rgb2rgba(rgb, alpha) {
                        var rgba = undefined;
                        if (!rgb) {
                            return null;
                        }
                        alpha = Helpers.Booleans.isTruthyValue(alpha) ? alpha : 1;
                        rgba = rgb.replace(/rgb/i, "rgba");
                        return rgba.replace(/\)/i, ", " + alpha + ")");
                    }
                }, {
                    key: "hex2rgb",
                    value: function hex2rgb(hex) {
                        if (!hex) {
                            return null;
                        }
                        var result, shorthandRegex;
                        shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                            return r + r + g + g + b + b;
                        });
                        result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                        if (result) {
                            return "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")";
                        } else {
                            return null;
                        }
                    }
                }, {
                    key: "rgb2hex",
                    value: function rgb2hex(r, g, b) {
                        if (!r || !g || !b) {
                            return null;
                        }
                        if (r > 255 || g > 255 || b > 255) {
                            return null;
                        }
                        if (r < 0 || g < 0 || b < 0) {
                            return null;
                        }
                        var componentToHex;
                        componentToHex = function (c) {
                            var hex;
                            hex = c.toString(16);
                            if (hex.length === 1) {
                                return '0' + hex;
                            } else {
                                return hex;
                            }
                        };
                        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
                    }
                }, {
                    key: "colorLuminance",
                    value: function colorLuminance(hex, lum) {
                        if (!this.hex2rgb(hex) || lum > 1 || lum < -1) {
                            return null;
                        }
                        var c,
                            i,
                            j,
                            rgb = "#";
                        hex = String(hex).replace(/[^0-9a-f]/gi, '');
                        if (hex.length < 6) {
                            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                        }
                        lum = lum || 0;
                        for (i = j = 0; j <= 2; i = j += 1) {
                            c = parseInt(hex.substr(i * 2, 2), 16);
                            c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
                            rgb += ("00" + c).substr(c.length);
                        }
                        return rgb;
                    }
                }]);

                return Colors;
            }();

            _export("Colors", Colors);
        }
    };
});
(function() {
var define = $__System.amdDefine;
"format amd";
;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define("npm:moment@2.11.1/moment.js", [], factory) : global.moment = factory();
}(this, function() {
  'use strict';
  var hookCallback;
  function utils_hooks__hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }
  function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function create_utc__createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  function valid__isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;
      if (m._strict) {
        m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }
    }
    return m._isValid;
  }
  function valid__createInvalid(flags) {
    var m = create_utc__createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  function isUndefined(input) {
    return input === void 0;
  }
  var momentProperties = utils_hooks__hooks.momentProperties = [];
  function copyConfig(to, from) {
    var i,
        prop,
        val;
    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }
    if (momentProperties.length > 0) {
      for (i in momentProperties) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }
    return to;
  }
  var updateInProgress = false;
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (updateInProgress === false) {
      updateInProgress = true;
      utils_hooks__hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
      if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function Locale() {}
  var locales = {};
  var globalLocale;
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }
  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return null;
  }
  function loadLocale(name) {
    var oldLocale = null;
    if (!locales[name] && (typeof module !== 'undefined') && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        require('./locale/' + name);
        locale_locales__getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }
    return locales[name];
  }
  function locale_locales__getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = locale_locales__getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, values) {
    if (values !== null) {
      values.abbr = name;
      locales[name] = locales[name] || new Locale();
      locales[name].set(values);
      locale_locales__getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function locale_locales__getLocale(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        get_set__set(this, unit, value);
        utils_hooks__hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get_set__get(this, unit);
      }
    };
  }
  function get_set__get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }
  function get_set__set(mom, unit, value) {
    if (mom.isValid()) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
  function getSet(units, value) {
    var unit;
    if (typeof units === 'object') {
      for (unit in units) {
        this.set(unit, units[unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {};
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function() {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function() {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = '';
      for (i = 0; i < length; i++) {
        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  var match1 = /\d/;
  var match2 = /\d\d/;
  var match3 = /\d{3}/;
  var match4 = /\d{4}/;
  var match6 = /[+-]?\d{6}/;
  var match1to2 = /\d\d?/;
  var match3to4 = /\d\d\d\d?/;
  var match5to6 = /\d\d\d\d\d\d?/;
  var match1to3 = /\d{1,3}/;
  var match1to4 = /\d{1,4}/;
  var match1to6 = /[+-]?\d{1,6}/;
  var matchUnsigned = /\d+/;
  var matchSigned = /[+-]?\d+/;
  var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
  var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var regexes = {};
  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
      return (isStrict && strictRegex) ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }
    return regexes[token](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var tokens = {};
  function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
      token = [token];
    }
    if (typeof callback === 'number') {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }
  function addWeekParseToken(token, callback) {
    addParseToken(token, function(input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }
  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }
  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;
  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  addFormatToken('M', ['MM', 2], 'Mo', function() {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function(format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function(format) {
    return this.localeData().months(this, format);
  });
  addUnitAlias('month', 'M');
  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function(isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function(isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function(input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths(m, format) {
    return isArray(this._months) ? this._months[m.month()] : this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort(m, format) {
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  function localeMonthsParse(monthName, format, strict) {
    var i,
        mom,
        regex;
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === 'string') {
      value = mom.localeData().monthsParse(value);
      if (typeof value !== 'number') {
        return mom;
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      utils_hooks__hooks.updateOffset(this, true);
      return this;
    } else {
      return get_set__get(this, 'Month');
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  var defaultMonthsRegex = matchWord;
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
  }
  function checkOverflow(m) {
    var overflow;
    var a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  function warn(msg) {
    if (utils_hooks__hooks.suppressDeprecationWarnings === false && (typeof console !== 'undefined') && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (firstTime) {
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  utils_hooks__hooks.suppressDeprecationWarnings = false;
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];
  var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
  function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  utils_hooks__hooks.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });
  function createDate(y, m, d, h, M, s, ms) {
    var date = new Date(y, m, d, h, M, s, ms);
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
    return date;
  }
  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
    return date;
  }
  addFormatToken('Y', 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
  addUnitAlias('year', 'y');
  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function(input, array) {
    array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function(input, array) {
    array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  utils_hooks__hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };
  var getSetYear = makeGetSet('FullYear', false);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy,
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(utils_hooks__hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse)) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w,
        weekYear,
        week,
        weekday,
        dow,
        doy,
        temp,
        weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
      week = defaults(w.w, 1);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  utils_hooks__hooks.ISO_8601 = function() {};
  function configFromStringAndFormat(config) {
    if (config._f === utils_hooks__hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore;
    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (!valid__isValid(tempConfig)) {
        continue;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i,
        format = config._f;
    config._locale = config._locale || locale_locales__getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
      return valid__createInvalid({nullInput: true});
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else if (isDate(input)) {
      config._d = input;
    } else {
      configFromInput(config);
    }
    if (!valid__isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
      config._d = new Date(utils_hooks__hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(+input);
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (typeof(input) === 'object') {
      configFromObject(config);
    } else if (typeof(input) === 'number') {
      config._d = new Date(input);
    } else {
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};
    if (typeof(locale) === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }
  function local__createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }
  var prototypeMin = deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  var prototypeMax = deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  function pickBy(fn, moments) {
    var res,
        i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return local__createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }
  var now = function() {
    return Date.now ? Date.now() : +(new Date());
  };
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
    this._days = +days + weeks * 7;
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = locale_locales__getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function offset(token, separator) {
    addFormatToken(token, 0, 0, function() {
      var offset = this.utcOffset();
      var sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
  }
  offset('Z', ':');
  offset('ZZ', '');
  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = ((string || '').match(matcher) || []);
    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);
    return parts[0] === '+' ? minutes : -minutes;
  }
  function cloneWithOffset(input, model) {
    var res,
        diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
      res._d.setTime(+res._d + diff);
      utils_hooks__hooks.updateOffset(res, false);
      return res;
    } else {
      return local__createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }
  utils_hooks__hooks.updateOffset = function() {};
  function getSetOffset(input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
      } else if (Math.abs(input) < 16) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          utils_hooks__hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm) {
      this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
      this.utcOffset(offsetFromString(matchOffset, this._i));
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? local__createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset());
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;
  var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  function create__createDuration(input, key) {
    var duration = input,
        match = null,
        sign,
        ret,
        diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (typeof input === 'number') {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(match[MILLISECOND]) * sign
      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        d: parseIso(match[4], sign),
        h: parseIso(match[5], sign),
        m: parseIso(match[6], sign),
        s: parseIso(match[7], sign),
        w: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    return ret;
  }
  create__createDuration.fn = Duration.prototype;
  function parseIso(inp, sign) {
    var res = inp && parseFloat(inp.replace(',', '.'));
    return (isNaN(res) ? 0 : res) * sign;
  }
  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur,
          tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
        tmp = val;
        val = period;
        period = tmp;
      }
      val = typeof val === 'string' ? +val : val;
      dur = create__createDuration(val, period);
      add_subtract__addSubtract(this, dur, direction);
      return this;
    };
  }
  function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = duration._days,
        months = duration._months;
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (milliseconds) {
      mom._d.setTime(+mom._d + milliseconds * isAdding);
    }
    if (days) {
      get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
    }
    if (months) {
      setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
      utils_hooks__hooks.updateOffset(mom, days || months);
    }
  }
  var add_subtract__add = createAdder(1, 'add');
  var add_subtract__subtract = createAdder(-1, 'subtract');
  function moment_calendar__calendar(time, formats) {
    var now = time || local__createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        diff = this.diff(sod, 'days', true),
        format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return +this > +localInput;
    } else {
      return +localInput < +this.clone().startOf(units);
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return +this < +localInput;
    } else {
      return +this.clone().endOf(units) < +localInput;
    }
  }
  function isBetween(from, to, units) {
    return this.isAfter(from, units) && this.isBefore(to, units);
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
      return +this === +localInput;
    } else {
      inputMs = +localInput;
      return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that,
        zoneDelta,
        delta,
        output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    if (units === 'year' || units === 'month' || units === 'quarter') {
      output = monthDiff(this, that);
      if (units === 'quarter') {
        output = output / 3;
      } else if (units === 'year') {
        output = output / 12;
      }
    } else {
      delta = this - that;
      output = units === 'second' ? delta / 1e3 : units === 'minute' ? delta / 6e4 : units === 'hour' ? delta / 36e5 : units === 'day' ? (delta - zoneDelta) / 864e5 : units === 'week' ? (delta - zoneDelta) / 6048e5 : delta;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust);
  }
  utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }
  function moment_format__toISOString() {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
      if (isFunction(Date.prototype.toISOString)) {
        return this.toDate().toISOString();
      } else {
        return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
    } else {
      return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
  }
  function format(inputString) {
    var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(local__createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(local__createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = locale_locales__getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }
  function startOf(units) {
    units = normalizeUnits(units);
    switch (units) {
      case 'year':
        this.month(0);
      case 'quarter':
      case 'month':
        this.date(1);
      case 'week':
      case 'isoWeek':
      case 'day':
        this.hours(0);
      case 'hour':
        this.minutes(0);
      case 'minute':
        this.seconds(0);
      case 'second':
        this.milliseconds(0);
    }
    if (units === 'week') {
      this.weekday(0);
    }
    if (units === 'isoWeek') {
      this.isoWeekday(1);
    }
    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }
    return this;
  }
  function endOf(units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
      return this;
    }
    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
  }
  function to_type__valueOf() {
    return +this._d - ((this._offset || 0) * 60000);
  }
  function unix() {
    return Math.floor(+this / 1000);
  }
  function toDate() {
    return this._offset ? new Date(+this) : this._d;
  }
  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : 'null';
  }
  function moment_valid__isValid() {
    return valid__isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken(0, ['gg', 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }
  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');
  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');
  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function(input, week, config, token) {
    week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken('Q', 0, 'Qo', 'quarter');
  addUnitAlias('quarter', 'Q');
  addRegexToken('Q', match1);
  addParseToken('Q', function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');
  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function(input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  addFormatToken('D', ['DD', 2], 'Do', 'date');
  addUnitAlias('date', 'D');
  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function(isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
  });
  var getSetDayOfMonth = makeGetSet('Date', true);
  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function(format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function(format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function(format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');
  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');
  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', matchWord);
  addRegexToken('ddd', matchWord);
  addRegexToken('dddd', matchWord);
  addWeekParseToken(['dd', 'ddd', 'dddd'], function(input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function(input, week, config, token) {
    week[token] = toInt(input);
  });
  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }
    return null;
  }
  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays(m, format) {
    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }
  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort(m) {
    return this._weekdaysShort[m.day()];
  }
  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin(m) {
    return this._weekdaysMin[m.day()];
  }
  function localeWeekdaysParse(weekdayName, format, strict) {
    var i,
        mom,
        regex;
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = local__createLocal([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
  }
  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
  addUnitAlias('dayOfYear', 'DDD');
  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('hmm', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem('a', true);
  meridiem('A', false);
  addUnitAlias('hour', 'h');
  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['a', 'A'], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return ((input + '').toLowerCase().charAt(0) === 'p');
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }
  var getSetHour = makeGetSet('Hours', true);
  addFormatToken('m', ['mm', 2], 0, 'minute');
  addUnitAlias('minute', 'm');
  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);
  var getSetMinute = makeGetSet('Minutes', false);
  addFormatToken('s', ['ss', 2], 0, 'second');
  addUnitAlias('second', 's');
  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);
  var getSetSecond = makeGetSet('Seconds', false);
  addFormatToken('S', 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function() {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function() {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function() {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function() {
    return this.millisecond() * 1000000;
  });
  addUnitAlias('millisecond', 'ms');
  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }
  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
  var getSetMillisecond = makeGetSet('Milliseconds', false);
  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');
  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }
  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }
  var momentPrototype__proto = Moment.prototype;
  momentPrototype__proto.add = add_subtract__add;
  momentPrototype__proto.calendar = moment_calendar__calendar;
  momentPrototype__proto.clone = clone;
  momentPrototype__proto.diff = diff;
  momentPrototype__proto.endOf = endOf;
  momentPrototype__proto.format = format;
  momentPrototype__proto.from = from;
  momentPrototype__proto.fromNow = fromNow;
  momentPrototype__proto.to = to;
  momentPrototype__proto.toNow = toNow;
  momentPrototype__proto.get = getSet;
  momentPrototype__proto.invalidAt = invalidAt;
  momentPrototype__proto.isAfter = isAfter;
  momentPrototype__proto.isBefore = isBefore;
  momentPrototype__proto.isBetween = isBetween;
  momentPrototype__proto.isSame = isSame;
  momentPrototype__proto.isSameOrAfter = isSameOrAfter;
  momentPrototype__proto.isSameOrBefore = isSameOrBefore;
  momentPrototype__proto.isValid = moment_valid__isValid;
  momentPrototype__proto.lang = lang;
  momentPrototype__proto.locale = locale;
  momentPrototype__proto.localeData = localeData;
  momentPrototype__proto.max = prototypeMax;
  momentPrototype__proto.min = prototypeMin;
  momentPrototype__proto.parsingFlags = parsingFlags;
  momentPrototype__proto.set = getSet;
  momentPrototype__proto.startOf = startOf;
  momentPrototype__proto.subtract = add_subtract__subtract;
  momentPrototype__proto.toArray = toArray;
  momentPrototype__proto.toObject = toObject;
  momentPrototype__proto.toDate = toDate;
  momentPrototype__proto.toISOString = moment_format__toISOString;
  momentPrototype__proto.toJSON = toJSON;
  momentPrototype__proto.toString = toString;
  momentPrototype__proto.unix = unix;
  momentPrototype__proto.valueOf = to_type__valueOf;
  momentPrototype__proto.creationData = creationData;
  momentPrototype__proto.year = getSetYear;
  momentPrototype__proto.isLeapYear = getIsLeapYear;
  momentPrototype__proto.weekYear = getSetWeekYear;
  momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
  momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
  momentPrototype__proto.month = getSetMonth;
  momentPrototype__proto.daysInMonth = getDaysInMonth;
  momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
  momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
  momentPrototype__proto.weeksInYear = getWeeksInYear;
  momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
  momentPrototype__proto.date = getSetDayOfMonth;
  momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
  momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
  momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
  momentPrototype__proto.dayOfYear = getSetDayOfYear;
  momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
  momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
  momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
  momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
  momentPrototype__proto.utcOffset = getSetOffset;
  momentPrototype__proto.utc = setOffsetToUTC;
  momentPrototype__proto.local = setOffsetToLocal;
  momentPrototype__proto.parseZone = setOffsetToParsedOffset;
  momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
  momentPrototype__proto.isDST = isDaylightSavingTime;
  momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
  momentPrototype__proto.isLocal = isLocal;
  momentPrototype__proto.isUtcOffset = isUtcOffset;
  momentPrototype__proto.isUtc = isUtc;
  momentPrototype__proto.isUTC = isUtc;
  momentPrototype__proto.zoneAbbr = getZoneAbbr;
  momentPrototype__proto.zoneName = getZoneName;
  momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
  var momentPrototype = momentPrototype__proto;
  function moment__createUnix(input) {
    return local__createLocal(input * 1000);
  }
  function moment__createInZone() {
    return local__createLocal.apply(null, arguments).parseZone();
  }
  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };
  function locale_calendar__calendar(key, mom, now) {
    var output = this._calendar[key];
    return isFunction(output) ? output.call(mom, now) : output;
  }
  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };
  function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = 'Invalid date';
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = '%d';
  var defaultOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }
  function preParsePostFormat(string) {
    return string;
  }
  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  function relative__relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }
  function locale_set__set(config) {
    var prop,
        i;
    for (i in config) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
  }
  var prototype__proto = Locale.prototype;
  prototype__proto._calendar = defaultCalendar;
  prototype__proto.calendar = locale_calendar__calendar;
  prototype__proto._longDateFormat = defaultLongDateFormat;
  prototype__proto.longDateFormat = longDateFormat;
  prototype__proto._invalidDate = defaultInvalidDate;
  prototype__proto.invalidDate = invalidDate;
  prototype__proto._ordinal = defaultOrdinal;
  prototype__proto.ordinal = ordinal;
  prototype__proto._ordinalParse = defaultOrdinalParse;
  prototype__proto.preparse = preParsePostFormat;
  prototype__proto.postformat = preParsePostFormat;
  prototype__proto._relativeTime = defaultRelativeTime;
  prototype__proto.relativeTime = relative__relativeTime;
  prototype__proto.pastFuture = pastFuture;
  prototype__proto.set = locale_set__set;
  prototype__proto.months = localeMonths;
  prototype__proto._months = defaultLocaleMonths;
  prototype__proto.monthsShort = localeMonthsShort;
  prototype__proto._monthsShort = defaultLocaleMonthsShort;
  prototype__proto.monthsParse = localeMonthsParse;
  prototype__proto._monthsRegex = defaultMonthsRegex;
  prototype__proto.monthsRegex = monthsRegex;
  prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
  prototype__proto.monthsShortRegex = monthsShortRegex;
  prototype__proto.week = localeWeek;
  prototype__proto._week = defaultLocaleWeek;
  prototype__proto.firstDayOfYear = localeFirstDayOfYear;
  prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
  prototype__proto.weekdays = localeWeekdays;
  prototype__proto._weekdays = defaultLocaleWeekdays;
  prototype__proto.weekdaysMin = localeWeekdaysMin;
  prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
  prototype__proto.weekdaysShort = localeWeekdaysShort;
  prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
  prototype__proto.weekdaysParse = localeWeekdaysParse;
  prototype__proto.isPM = localeIsPM;
  prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
  prototype__proto.meridiem = localeMeridiem;
  function lists__get(format, index, field, setter) {
    var locale = locale_locales__getLocale();
    var utc = create_utc__createUTC().set(setter, index);
    return locale[field](utc, format);
  }
  function list(format, index, field, count, setter) {
    if (typeof format === 'number') {
      index = format;
      format = undefined;
    }
    format = format || '';
    if (index != null) {
      return lists__get(format, index, field, setter);
    }
    var i;
    var out = [];
    for (i = 0; i < count; i++) {
      out[i] = lists__get(format, i, field, setter);
    }
    return out;
  }
  function lists__listMonths(format, index) {
    return list(format, index, 'months', 12, 'month');
  }
  function lists__listMonthsShort(format, index) {
    return list(format, index, 'monthsShort', 12, 'month');
  }
  function lists__listWeekdays(format, index) {
    return list(format, index, 'weekdays', 7, 'day');
  }
  function lists__listWeekdaysShort(format, index) {
    return list(format, index, 'weekdaysShort', 7, 'day');
  }
  function lists__listWeekdaysMin(format, index) {
    return list(format, index, 'weekdaysMin', 7, 'day');
  }
  locale_locales__getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10,
          output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
      return number + output;
    }
  });
  utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
  utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
  var mathAbs = Math.abs;
  function duration_abs__abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function duration_add_subtract__addSubtract(duration, input, value, direction) {
    var other = create__createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function duration_add_subtract__add(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, 1);
  }
  function duration_add_subtract__subtract(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds,
        minutes,
        hours,
        years,
        monthsFromDays;
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) || (milliseconds <= 0 && days <= 0 && months <= 0))) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }
    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }
  function daysToMonths(days) {
    return days * 4800 / 146097;
  }
  function monthsToDays(months) {
    return months * 146097 / 4800;
  }
  function as(units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;
    units = normalizeUnits(units);
    if (units === 'month' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  }
  function duration_as__valueOf() {
    return (this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6);
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asYears = makeAs('y');
  function duration_get__get(units) {
    units = normalizeUnits(units);
    return this[units + 's']();
  }
  function makeGetter(name) {
    return function() {
      return this._data[name];
    };
  }
  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round;
  var thresholds = {
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = create__createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds < thresholds.s && ['s', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }
  function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
  }
  function humanize(withSuffix) {
    var locale = this.localeData();
    var output = duration_humanize__relativeTime(this, !withSuffix, locale);
    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }
    return locale.postformat(output);
  }
  var iso_string__abs = Math.abs;
  function iso_string__toISOString() {
    var seconds = iso_string__abs(this._milliseconds) / 1000;
    var days = iso_string__abs(this._days);
    var months = iso_string__abs(this._months);
    var minutes,
        hours,
        years;
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    years = absFloor(months / 12);
    months %= 12;
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();
    if (!total) {
      return 'P0D';
    }
    return (total < 0 ? '-' : '') + 'P' + (Y ? Y + 'Y' : '') + (M ? M + 'M' : '') + (D ? D + 'D' : '') + ((h || m || s) ? 'T' : '') + (h ? h + 'H' : '') + (m ? m + 'M' : '') + (s ? s + 'S' : '');
  }
  var duration_prototype__proto = Duration.prototype;
  duration_prototype__proto.abs = duration_abs__abs;
  duration_prototype__proto.add = duration_add_subtract__add;
  duration_prototype__proto.subtract = duration_add_subtract__subtract;
  duration_prototype__proto.as = as;
  duration_prototype__proto.asMilliseconds = asMilliseconds;
  duration_prototype__proto.asSeconds = asSeconds;
  duration_prototype__proto.asMinutes = asMinutes;
  duration_prototype__proto.asHours = asHours;
  duration_prototype__proto.asDays = asDays;
  duration_prototype__proto.asWeeks = asWeeks;
  duration_prototype__proto.asMonths = asMonths;
  duration_prototype__proto.asYears = asYears;
  duration_prototype__proto.valueOf = duration_as__valueOf;
  duration_prototype__proto._bubble = bubble;
  duration_prototype__proto.get = duration_get__get;
  duration_prototype__proto.milliseconds = milliseconds;
  duration_prototype__proto.seconds = seconds;
  duration_prototype__proto.minutes = minutes;
  duration_prototype__proto.hours = hours;
  duration_prototype__proto.days = days;
  duration_prototype__proto.weeks = weeks;
  duration_prototype__proto.months = months;
  duration_prototype__proto.years = years;
  duration_prototype__proto.humanize = humanize;
  duration_prototype__proto.toISOString = iso_string__toISOString;
  duration_prototype__proto.toString = iso_string__toISOString;
  duration_prototype__proto.toJSON = iso_string__toISOString;
  duration_prototype__proto.locale = locale;
  duration_prototype__proto.localeData = localeData;
  duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
  duration_prototype__proto.lang = lang;
  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');
  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function(input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  utils_hooks__hooks.version = '2.11.1';
  setHookCallback(local__createLocal);
  utils_hooks__hooks.fn = momentPrototype;
  utils_hooks__hooks.min = min;
  utils_hooks__hooks.max = max;
  utils_hooks__hooks.now = now;
  utils_hooks__hooks.utc = create_utc__createUTC;
  utils_hooks__hooks.unix = moment__createUnix;
  utils_hooks__hooks.months = lists__listMonths;
  utils_hooks__hooks.isDate = isDate;
  utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
  utils_hooks__hooks.invalid = valid__createInvalid;
  utils_hooks__hooks.duration = create__createDuration;
  utils_hooks__hooks.isMoment = isMoment;
  utils_hooks__hooks.weekdays = lists__listWeekdays;
  utils_hooks__hooks.parseZone = moment__createInZone;
  utils_hooks__hooks.localeData = locale_locales__getLocale;
  utils_hooks__hooks.isDuration = isDuration;
  utils_hooks__hooks.monthsShort = lists__listMonthsShort;
  utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
  utils_hooks__hooks.defineLocale = defineLocale;
  utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
  utils_hooks__hooks.normalizeUnits = normalizeUnits;
  utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
  utils_hooks__hooks.prototype = momentPrototype;
  var _moment = utils_hooks__hooks;
  return _moment;
}));

})();
(function() {
var define = $__System.amdDefine;
define("npm:moment@2.11.1.js", ["npm:moment@2.11.1/moment.js"], function(main) {
  return main;
});

})();
$__System.register('helpers/dates.js', ['npm:moment@2.11.1.js'], function (_export) {
    'use strict';

    var moment, Dates;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_moment) {
            moment = _moment['default'];
        }],
        execute: function () {
            Dates = function () {
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
            }();

            _export('Dates', Dates);
        }
    };
});
$__System.register('helpers/objects.js', ['npm:lodash@4.17.5.js'], function (_export) {
    'use strict';

    var _, Objects;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_lodash) {
            _ = _lodash['default'];
        }],
        execute: function () {
            Objects = function () {
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
            }();

            _export('Objects', Objects);
        }
    };
});
$__System.register('helpers/numbers.js', [], function (_export) {
  'use strict';

  var Numbers;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  return {
    setters: [],
    execute: function () {
      Numbers = function () {
        function Numbers() {
          _classCallCheck(this, Numbers);
        }

        _createClass(Numbers, null, [{
          key: 'isNumber',
          value: function isNumber(val) {
            return !isNaN(parseFloat(val)) && isFinite(val);
          }
        }, {
          key: 'stripNonNumericCharacters',
          value: function stripNonNumericCharacters(val) {
            return parseFloat(val.toString().replace(/[^\d.-]/g, ''), 10);
          }
        }]);

        return Numbers;
      }();

      _export('Numbers', Numbers);
    }
  };
});
$__System.registerDynamic('npm:html-truncate@1.2.2/lib/truncate.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    function truncate(string, maxLength, options) {
      var EMPTY_OBJECT = {},
          EMPTY_STRING = '',
          DEFAULT_TRUNCATE_SYMBOL = '...',
          DEFAULT_SLOP = 10 > maxLength ? maxLength : 10,
          EXCLUDE_TAGS = ['img', 'br'],
          items = [],
          total = 0,
          content = EMPTY_STRING,
          KEY_VALUE_REGEX = '([\\w|-]+\\s*(=\\s*"[^"]*")?\\s*)*',
          IS_CLOSE_REGEX = '\\s*\\/?\\s*',
          CLOSE_REGEX = '\\s*\\/\\s*',
          SELF_CLOSE_REGEX = new RegExp('<\\/?\\w+\\s*' + KEY_VALUE_REGEX + CLOSE_REGEX + '>'),
          HTML_TAG_REGEX = new RegExp('<\\/?\\w+\\s*' + KEY_VALUE_REGEX + IS_CLOSE_REGEX + '>'),
          URL_REGEX = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w\-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g,
          IMAGE_TAG_REGEX = new RegExp('<img\\s*' + KEY_VALUE_REGEX + IS_CLOSE_REGEX + '>'),
          WORD_BREAK_REGEX = new RegExp('\\W+', 'g'),
          matches = true,
          result,
          index,
          tail,
          tag,
          selfClose;
      function _removeImageTag(string) {
        var match = IMAGE_TAG_REGEX.exec(string),
            index,
            len;
        if (!match) {
          return string;
        }
        index = match.index;
        len = match[0].length;
        return string.substring(0, index) + string.substring(index + len);
      }
      function _dumpCloseTag(tags) {
        var html = '';
        tags.reverse().forEach(function (tag, index) {
          if (-1 === EXCLUDE_TAGS.indexOf(tag)) {
            html += '</' + tag + '>';
          }
        });
        return html;
      }
      function _getTag(string) {
        var tail = string.indexOf(' ');
        if (-1 === tail) {
          tail = string.indexOf('>');
          if (-1 === tail) {
            throw new Error('HTML tag is not well-formed : ' + string);
          }
        }
        return string.substring(1, tail);
      }
      function _getEndPosition(string, tailPos) {
        var defaultPos = maxLength - total,
            position = defaultPos,
            isShort = defaultPos < options.slop,
            slopPos = isShort ? defaultPos : options.slop - 1,
            substr,
            startSlice = isShort ? 0 : defaultPos - options.slop,
            endSlice = tailPos || defaultPos + options.slop,
            result;
        if (!options.truncateLastWord) {
          substr = string.slice(startSlice, endSlice);
          if (tailPos && substr.length <= tailPos) {
            position = substr.length;
          } else {
            while ((result = WORD_BREAK_REGEX.exec(substr)) !== null) {
              if (result.index < slopPos) {
                position = defaultPos - (slopPos - result.index);
                if (result.index === 0 && defaultPos <= 1) break;
              } else if (result.index === slopPos) {
                position = defaultPos;
                break;
              } else {
                position = defaultPos + (result.index - slopPos);
                break;
              }
            }
          }
          if (string.charAt(position - 1).match(/\s$/)) position--;
        }
        return position;
      }
      options = options || EMPTY_OBJECT;
      options.ellipsis = undefined !== options.ellipsis ? options.ellipsis : DEFAULT_TRUNCATE_SYMBOL;
      options.truncateLastWord = undefined !== options.truncateLastWord ? options.truncateLastWord : true;
      options.slop = undefined !== options.slop ? options.slop : DEFAULT_SLOP;
      while (matches) {
        matches = HTML_TAG_REGEX.exec(string);
        if (!matches) {
          if (total >= maxLength) {
            break;
          }
          matches = URL_REGEX.exec(string);
          if (!matches || matches.index >= maxLength) {
            content += string.substring(0, _getEndPosition(string));
            break;
          }
          while (matches) {
            result = matches[0];
            index = matches.index;
            content += string.substring(0, index + result.length - total);
            string = string.substring(index + result.length);
            matches = URL_REGEX.exec(string);
          }
          break;
        }
        result = matches[0];
        index = matches.index;
        if (total + index > maxLength) {
          content += string.substring(0, _getEndPosition(string, index));
          break;
        } else {
          total += index;
          content += string.substring(0, index);
        }
        if ('/' === result[1]) {
          items.pop();
          selfClose = null;
        } else {
          selfClose = SELF_CLOSE_REGEX.exec(result);
          if (!selfClose) {
            tag = _getTag(result);
            items.push(tag);
          }
        }
        if (selfClose) {
          content += selfClose[0];
        } else {
          content += result;
        }
        string = string.substring(index + result.length);
      }
      if (string.length > maxLength - total && options.ellipsis) {
        content += options.ellipsis;
      }
      content += _dumpCloseTag(items);
      if (!options.keepImageTag) {
        content = _removeImageTag(content);
      }
      return content;
    }
    module.exports = truncate;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
$__System.registerDynamic("npm:html-truncate@1.2.2.js", ["npm:html-truncate@1.2.2/lib/truncate.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:html-truncate@1.2.2/lib/truncate.js");
});
$__System.register('helpers/strings.js', ['npm:html-truncate@1.2.2.js', 'github:components/jquery@1.11.3.js'], function (_export) {
    'use strict';

    var htmlTruncate, $, Strings;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_htmlTruncate) {
            htmlTruncate = _htmlTruncate['default'];
        }, function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            Strings = function () {
                function Strings() {
                    _classCallCheck(this, Strings);
                }

                _createClass(Strings, null, [{
                    key: 'random',
                    value: function random(length) {
                        return Math.random().toString(36).substr(2, length && length <= 12 ? length : 12);
                    }
                }, {
                    key: 'truncate',
                    value: function truncate(str, n, useWordBoundary) {
                        useWordBoundary = useWordBoundary || true;
                        var isTooLong = str.length > n,
                            s_ = isTooLong ? str.substr(0, n - 1) : str;
                        s_ = useWordBoundary && isTooLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
                        return isTooLong ? s_ + '...' : s_;
                    }
                }, {
                    key: 'truncateHtmlContent',
                    value: function truncateHtmlContent($el, candidateStr, maxLength, maxHeight, ellipsis) {
                        maxLength = maxLength || 250;
                        maxHeight = maxHeight || 64;
                        ellipsis = ellipsis || '...';
                        var tagLength = 10;
                        var truncatedString = htmlTruncate(candidateStr, maxLength, { ellipsis: ellipsis });

                        if ($el.html(truncatedString).height() % maxHeight > 0) {
                            return htmlTruncate(truncatedString, truncatedString.length / ($el.html(truncatedString).height() / maxHeight * 2), { ellipsis: ellipsis });
                        }
                        var filterString = this.removeEmptyHtmlTags(truncatedString, ellipsis);
                        if (filterString !== truncatedString) {
                            return htmlTruncate(truncatedString, filterString.length - tagLength, { ellipsis: ellipsis });
                        }
                        return truncatedString;
                    }
                }, {
                    key: 'trimEmptyTags',
                    value: function trimEmptyTags($el) {
                        $el.each(function () {
                            if ('' === $.trim($(this).text())) {
                                $(this).remove();
                            }
                        });
                        return $el;
                    }
                }, {
                    key: 'removeEmptyHtmlTags',
                    value: function removeEmptyHtmlTags(str, includedStr) {
                        return str.replace(includedStr, '').replace(/(<(?!\/)[^>]+>)+(<\/[^>]+>)/gm, '');
                    }
                }, {
                    key: 'strip',
                    value: function strip(html) {
                        var tmp = document.createElement("DIV");
                        tmp.innerHTML = html;
                        return tmp.textContent || tmp.innerText || "";
                    }
                }, {
                    key: 'removeLineBreaks',
                    value: function removeLineBreaks(str) {
                        return str.replace(/\r?\n|\r|&lt;br&gt;|<br>|<br\/>/g, '');
                    }
                }, {
                    key: 'getMediaTimeStringFromSeconds',
                    value: function getMediaTimeStringFromSeconds() {
                        var secs = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

                        var seconds = parseInt(secs);
                        var hours = Math.floor(secs / (60 * 60));
                        seconds = seconds - hours * (60 * 60);
                        var minutes = Math.floor(seconds / 60);
                        seconds = seconds - minutes * 60;

                        var timeString = "";
                        if (hours > 0) {
                            timeString = timeString + hours + ' hour ';
                        }
                        if (minutes > 0) {
                            timeString = timeString + minutes + ' min ';
                        }
                        timeString = timeString + seconds + ' sec';

                        return timeString;
                    }
                }]);

                return Strings;
            }();

            _export('Strings', Strings);
        }
    };
});
$__System.register("helpers/uri.js", [], function (_export) {
    "use strict";

    var URI;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            URI = function () {
                function URI() {
                    _classCallCheck(this, URI);
                }

                _createClass(URI, null, [{
                    key: "getParams",
                    value: function getParams() {
                        var params = {};
                        window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
                            params[$1] = $3;
                        });
                        return params;
                    }
                }, {
                    key: "setUriParams",
                    value: function setUriParams(params) {
                        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + (params ? '?' + params : '');
                        window.history.pushState({ path: newurl }, '', newurl);
                    }
                }]);

                return URI;
            }();

            _export("URI", URI);
        }
    };
});
$__System.register('lib/constants.js', [], function (_export) {
  'use strict';

  var Constants;
  return {
    setters: [],
    execute: function () {
      Constants = {
        ELEMENT_PROPERTY: 'data-js-el',
        GLOBAL_INSTANCE: 'SuperCat'
      };

      _export('Constants', Constants);
    }
  };
});
$__System.register('lib/grab.js', ['github:components/jquery@1.11.3.js'], function (_export) {
    'use strict';

    var $, grab;
    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            grab = function grab(target, scope) {
                var direction = arguments.length <= 2 || arguments[2] === undefined ? 'inside' : arguments[2];

                if (target instanceof $) {
                    return target;
                }

                if (target instanceof Element) {
                    return $(target);
                }

                if (typeof target !== 'string') {
                    console.warn("Invalid target type.");
                    return $();
                }

                if (target.charAt(0) == '@') {
                    target = $(scope).data()[$.camelCase(target.substring(1))];
                }

                if (target.charAt(0) == '#') {
                    if (direction && direction != 'inside') {
                        console.warn('ID selector (' + direction + ') combined with direction \'' + direction + '\' won\'t work as expected.');
                    }

                    return $(target);
                }

                var method = undefined;
                if (direction == 'before') {
                    method = 'prevAll';
                } else if (direction == 'next') {
                    method = 'nextAll';
                } else {
                    if (direction && direction != 'inside') {
                        console.warn('Trying to use invalid grab direction \'' + direction + '\'.');
                    }
                    method = 'find';
                }

                return $(scope)[method](target);
            };

            _export('default', grab);
        }
    };
});
$__System.register('helpers/element.js', ['github:components/jquery@1.11.3.js', 'npm:lodash@4.17.5.js', 'lib/constants.js', 'lib/grab.js'], function (_export) {
    'use strict';

    var $, _, Constants, grab, Element;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_libConstants) {
            Constants = _libConstants.Constants;
        }, function (_libGrab) {
            grab = _libGrab['default'];
        }],
        execute: function () {
            Element = function () {
                function Element() {
                    _classCallCheck(this, Element);
                }

                _createClass(Element, null, [{
                    key: 'get',
                    value: function get(name, $target) {
                        var options = arguments.length <= 2 || arguments[2] === undefined ? { attribute: Constants.ELEMENT_PROPERTY } : arguments[2];

                        if (name.startsWith("$")) {
                            return $(Element.get(name.substr(1), $target));
                        }

                        return name ? grab('[' + options.attribute + '=\'' + _.kebabCase(name) + '\']', $target)[0] : null;
                    }
                }, {
                    key: 'addProperty',
                    value: function addProperty(name, element) {
                        var options = arguments.length <= 2 || arguments[2] === undefined ? { attribute: Constants.ELEMENT_PROPERTY } : arguments[2];

                        $(element).attr(options.attribute, _.kebabCase(name));
                    }
                }, {
                    key: 'listElements',
                    value: function listElements(name, $container) {
                        var options = arguments.length <= 2 || arguments[2] === undefined ? { attribute: Constants.ELEMENT_PROPERTY } : arguments[2];

                        if (Array.isArray(name)) {
                            return _.map(name, function (candidate) {
                                return { name: candidate, el: Element.get(candidate, $container) };
                            });
                        }
                        if (_.isString(name)) {
                            return _.map(grab('[' + options.attribute + '="' + _.kebabCase(name) + '"]', $container), function (el) {
                                return $(el);
                            });
                        }
                        return undefined;
                    }
                }]);

                return Element;
            }();

            _export('Element', Element);
        }
    };
});
$__System.registerDynamic('npm:dom-delegate@2.0.3/lib/delegate.js', [], true, function ($__require, exports, module) {
  /*jshint browser:true, node:true*/

  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = Delegate;

  /**
   * DOM event delegator
   *
   * The delegator will listen
   * for events that bubble up
   * to the root node.
   *
   * @constructor
   * @param {Node|string} [root] The root node or a selector string matching the root node
   */
  function Delegate(root) {

    /**
     * Maintain a map of listener
     * lists, keyed by event name.
     *
     * @type Object
     */
    this.listenerMap = [{}, {}];
    if (root) {
      this.root(root);
    }

    /** @type function() */
    this.handle = Delegate.prototype.handle.bind(this);
  }

  /**
   * Start listening for events
   * on the provided DOM element
   *
   * @param  {Node|string} [root] The root node or a selector string matching the root node
   * @returns {Delegate} This method is chainable
   */
  Delegate.prototype.root = function (root) {
    var listenerMap = this.listenerMap;
    var eventType;

    // Remove master event listeners
    if (this.rootElement) {
      for (eventType in listenerMap[1]) {
        if (listenerMap[1].hasOwnProperty(eventType)) {
          this.rootElement.removeEventListener(eventType, this.handle, true);
        }
      }
      for (eventType in listenerMap[0]) {
        if (listenerMap[0].hasOwnProperty(eventType)) {
          this.rootElement.removeEventListener(eventType, this.handle, false);
        }
      }
    }

    // If no root or root is not
    // a dom node, then remove internal
    // root reference and exit here
    if (!root || !root.addEventListener) {
      if (this.rootElement) {
        delete this.rootElement;
      }
      return this;
    }

    /**
     * The root node at which
     * listeners are attached.
     *
     * @type Node
     */
    this.rootElement = root;

    // Set up master event listeners
    for (eventType in listenerMap[1]) {
      if (listenerMap[1].hasOwnProperty(eventType)) {
        this.rootElement.addEventListener(eventType, this.handle, true);
      }
    }
    for (eventType in listenerMap[0]) {
      if (listenerMap[0].hasOwnProperty(eventType)) {
        this.rootElement.addEventListener(eventType, this.handle, false);
      }
    }

    return this;
  };

  /**
   * @param {string} eventType
   * @returns boolean
   */
  Delegate.prototype.captureForType = function (eventType) {
    return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
  };

  /**
   * Attach a handler to one
   * event for all elements
   * that match the selector,
   * now or in the future
   *
   * The handler function receives
   * three arguments: the DOM event
   * object, the node that matched
   * the selector while the event
   * was bubbling and a reference
   * to itself. Within the handler,
   * 'this' is equal to the second
   * argument.
   *
   * The node that actually received
   * the event can be accessed via
   * 'event.target'.
   *
   * @param {string} eventType Listen for these events
   * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
   * @param {function()} handler Handler function - event data passed here will be in event.data
   * @param {Object} [eventData] Data to pass in event.data
   * @returns {Delegate} This method is chainable
   */
  Delegate.prototype.on = function (eventType, selector, handler, useCapture) {
    var root, listenerMap, matcher, matcherParam;

    if (!eventType) {
      throw new TypeError('Invalid event type: ' + eventType);
    }

    // handler can be passed as
    // the second or third argument
    if (typeof selector === 'function') {
      useCapture = handler;
      handler = selector;
      selector = null;
    }

    // Fallback to sensible defaults
    // if useCapture not set
    if (useCapture === undefined) {
      useCapture = this.captureForType(eventType);
    }

    if (typeof handler !== 'function') {
      throw new TypeError('Handler must be a type of Function');
    }

    root = this.rootElement;
    listenerMap = this.listenerMap[useCapture ? 1 : 0];

    // Add master handler for type if not created yet
    if (!listenerMap[eventType]) {
      if (root) {
        root.addEventListener(eventType, this.handle, useCapture);
      }
      listenerMap[eventType] = [];
    }

    if (!selector) {
      matcherParam = null;

      // COMPLEX - matchesRoot needs to have access to
      // this.rootElement, so bind the function to this.
      matcher = matchesRoot.bind(this);

      // Compile a matcher for the given selector
    } else if (/^[a-z]+$/i.test(selector)) {
      matcherParam = selector;
      matcher = matchesTag;
    } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
      matcherParam = selector.slice(1);
      matcher = matchesId;
    } else {
      matcherParam = selector;
      matcher = matches;
    }

    // Add to the list of listeners
    listenerMap[eventType].push({
      selector: selector,
      handler: handler,
      matcher: matcher,
      matcherParam: matcherParam
    });

    return this;
  };

  /**
   * Remove an event handler
   * for elements that match
   * the selector, forever
   *
   * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
   * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
   * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
   * @returns {Delegate} This method is chainable
   */
  Delegate.prototype.off = function (eventType, selector, handler, useCapture) {
    var i, listener, listenerMap, listenerList, singleEventType;

    // Handler can be passed as
    // the second or third argument
    if (typeof selector === 'function') {
      useCapture = handler;
      handler = selector;
      selector = null;
    }

    // If useCapture not set, remove
    // all event listeners
    if (useCapture === undefined) {
      this.off(eventType, selector, handler, true);
      this.off(eventType, selector, handler, false);
      return this;
    }

    listenerMap = this.listenerMap[useCapture ? 1 : 0];
    if (!eventType) {
      for (singleEventType in listenerMap) {
        if (listenerMap.hasOwnProperty(singleEventType)) {
          this.off(singleEventType, selector, handler);
        }
      }

      return this;
    }

    listenerList = listenerMap[eventType];
    if (!listenerList || !listenerList.length) {
      return this;
    }

    // Remove only parameter matches
    // if specified
    for (i = listenerList.length - 1; i >= 0; i--) {
      listener = listenerList[i];

      if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
        listenerList.splice(i, 1);
      }
    }

    // All listeners removed
    if (!listenerList.length) {
      delete listenerMap[eventType];

      // Remove the main handler
      if (this.rootElement) {
        this.rootElement.removeEventListener(eventType, this.handle, useCapture);
      }
    }

    return this;
  };

  /**
   * Handle an arbitrary event.
   *
   * @param {Event} event
   */
  Delegate.prototype.handle = function (event) {
    var i,
        l,
        type = event.type,
        root,
        phase,
        listener,
        returned,
        listenerList = [],
        target,
        /** @const */EVENTIGNORE = 'ftLabsDelegateIgnore';

    if (event[EVENTIGNORE] === true) {
      return;
    }

    target = event.target;

    // Hardcode value of Node.TEXT_NODE
    // as not defined in IE8
    if (target.nodeType === 3) {
      target = target.parentNode;
    }

    root = this.rootElement;

    phase = event.eventPhase || (event.target !== event.currentTarget ? 3 : 2);

    switch (phase) {
      case 1:
        //Event.CAPTURING_PHASE:
        listenerList = this.listenerMap[1][type];
        break;
      case 2:
        //Event.AT_TARGET:
        if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
        if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
        break;
      case 3:
        //Event.BUBBLING_PHASE:
        listenerList = this.listenerMap[0][type];
        break;
    }

    // Need to continuously check
    // that the specific list is
    // still populated in case one
    // of the callbacks actually
    // causes the list to be destroyed.
    l = listenerList.length;
    while (target && l) {
      for (i = 0; i < l; i++) {
        listener = listenerList[i];

        // Bail from this loop if
        // the length changed and
        // no more listeners are
        // defined between i and l.
        if (!listener) {
          break;
        }

        // Check for match and fire
        // the event if there's one
        //
        // TODO:MCG:20120117: Need a way
        // to check if event#stopImmediatePropagation
        // was called. If so, break both loops.
        if (listener.matcher.call(target, listener.matcherParam, target)) {
          returned = this.fire(event, target, listener);
        }

        // Stop propagation to subsequent
        // callbacks if the callback returned
        // false
        if (returned === false) {
          event[EVENTIGNORE] = true;
          event.preventDefault();
          return;
        }
      }

      // TODO:MCG:20120117: Need a way to
      // check if event#stopPropagation
      // was called. If so, break looping
      // through the DOM. Stop if the
      // delegation root has been reached
      if (target === root) {
        break;
      }

      l = listenerList.length;
      target = target.parentElement;
    }
  };

  /**
   * Fire a listener on a target.
   *
   * @param {Event} event
   * @param {Node} target
   * @param {Object} listener
   * @returns {boolean}
   */
  Delegate.prototype.fire = function (event, target, listener) {
    return listener.handler.call(target, event, target);
  };

  /**
   * Check whether an element
   * matches a generic selector.
   *
   * @type function()
   * @param {string} selector A CSS selector
   */
  var matches = function (el) {
    if (!el) return;
    var p = el.prototype;
    return p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
  }(Element);

  /**
   * Check whether an element
   * matches a tag selector.
   *
   * Tags are NOT case-sensitive,
   * except in XML (and XML-based
   * languages such as XHTML).
   *
   * @param {string} tagName The tag name to test against
   * @param {Element} element The element to test with
   * @returns boolean
   */
  function matchesTag(tagName, element) {
    return tagName.toLowerCase() === element.tagName.toLowerCase();
  }

  /**
   * Check whether an element
   * matches the root.
   *
   * @param {?String} selector In this case this is always passed through as null and not used
   * @param {Element} element The element to test with
   * @returns boolean
   */
  function matchesRoot(selector, element) {
    /*jshint validthis:true*/
    if (this.rootElement === window) return element === document;
    return this.rootElement === element;
  }

  /**
   * Check whether the ID of
   * the element in 'this'
   * matches the given ID.
   *
   * IDs are case-sensitive.
   *
   * @param {string} id The ID to test against
   * @param {Element} element The element to test with
   * @returns boolean
   */
  function matchesId(id, element) {
    return id === element.id;
  }

  /**
   * Short hand for off()
   * and root(), ie both
   * with no parameters
   *
   * @return void
   */
  Delegate.prototype.destroy = function () {
    this.off();
    this.root();
  };
});
$__System.registerDynamic('npm:dom-delegate@2.0.3/lib/index.js', ['npm:dom-delegate@2.0.3/lib/delegate.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var Delegate = $__require('npm:dom-delegate@2.0.3/lib/delegate.js');
  module.exports = function (root) {
    return new Delegate(root);
  };
  module.exports.Delegate = Delegate;
});
$__System.registerDynamic("npm:dom-delegate@2.0.3.js", ["npm:dom-delegate@2.0.3/lib/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:dom-delegate@2.0.3/lib/index.js");
});
$__System.registerDynamic('npm:superviews.js@3.0.4/delegator.js', ['npm:dom-delegate@2.0.3.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:dom-delegate@2.0.3.js');
});
$__System.registerDynamic("npm:is-property@1.0.2/is-property.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  function isProperty(str) {
    return (/^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(str)
    );
  }
  module.exports = isProperty;
});
$__System.registerDynamic("npm:is-property@1.0.2.js", ["npm:is-property@1.0.2/is-property.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:is-property@1.0.2/is-property.js");
});
$__System.registerDynamic('npm:generate-object-property@1.2.0/index.js', ['npm:is-property@1.0.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isProperty = $__require('npm:is-property@1.0.2.js');

  var gen = function (obj, prop) {
    return isProperty(prop) ? obj + '.' + prop : obj + '[' + JSON.stringify(prop) + ']';
  };

  gen.valid = isProperty;
  gen.property = function (prop) {
    return isProperty(prop) ? prop : JSON.stringify(prop);
  };

  module.exports = gen;
});
$__System.registerDynamic("npm:generate-object-property@1.2.0.js", ["npm:generate-object-property@1.2.0/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:generate-object-property@1.2.0/index.js");
});
$__System.registerDynamic('npm:util@0.10.3/support/isBufferBrowser.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
  };
});
$__System.registerDynamic('npm:inherits@2.0.1/inherits_browser.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
});
$__System.registerDynamic("npm:inherits@2.0.1.js", ["npm:inherits@2.0.1/inherits_browser.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:inherits@2.0.1/inherits_browser.js");
});
$__System.registerDynamic('npm:util@0.10.3/util.js', ['npm:util@0.10.3/support/isBufferBrowser.js', 'npm:inherits@2.0.1.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var formatRegExp = /%[sdj%]/g;
    exports.format = function (f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function (x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch (x) {
          case '%s':
            return String(args[i++]);
          case '%d':
            return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function (fn, msg) {
      if (isUndefined(global.process)) {
        return function () {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      if (process.noDeprecation === true) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function (set) {
      if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function () {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function () {};
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      'bold': [1, 22],
      'italic': [3, 23],
      'underline': [4, 24],
      'inverse': [7, 27],
      'white': [37, 39],
      'grey': [90, 39],
      'black': [30, 39],
      'blue': [34, 39],
      'cyan': [36, 39],
      'green': [32, 39],
      'magenta': [35, 39],
      'red': [31, 39],
      'yellow': [33, 39]
    };
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      'regexp': 'red'
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function (val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = '',
          array = false,
          braces = ['{', '}'];
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = ' ' + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function (key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value)) return ctx.stylize('' + value, 'number');
      if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
      if (isNull(value)) return ctx.stylize('null', 'null');
    }
    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function (line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function (line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }
      return name + ': ' + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function (prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }
      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = $__require('npm:util@0.10.3/support/isBufferBrowser.js');
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }
    exports.log = function () {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = $__require('npm:inherits@2.0.1.js');
    exports._extend = function (origin, add) {
      if (!add || !isObject(add)) return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
$__System.registerDynamic("npm:util@0.10.3.js", ["npm:util@0.10.3/util.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:util@0.10.3/util.js");
});
$__System.registerDynamic('github:jspm/nodelibs-util@0.1.0/index.js', ['npm:util@0.10.3.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('util') : $__require('npm:util@0.10.3.js');
});
$__System.registerDynamic("github:jspm/nodelibs-util@0.1.0.js", ["github:jspm/nodelibs-util@0.1.0/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:jspm/nodelibs-util@0.1.0/index.js");
});
$__System.registerDynamic('npm:generate-function@2.0.0/index.js', ['github:jspm/nodelibs-util@0.1.0.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var util = $__require('github:jspm/nodelibs-util@0.1.0.js');
  var INDENT_START = /[\{\[]/;
  var INDENT_END = /[\}\]]/;
  module.exports = function () {
    var lines = [];
    var indent = 0;
    var push = function (str) {
      var spaces = '';
      while (spaces.length < indent * 2) spaces += '  ';
      lines.push(spaces + str);
    };
    var line = function (fmt) {
      if (!fmt) return line;
      if (INDENT_END.test(fmt.trim()[0]) && INDENT_START.test(fmt[fmt.length - 1])) {
        indent--;
        push(util.format.apply(util, arguments));
        indent++;
        return line;
      }
      if (INDENT_START.test(fmt[fmt.length - 1])) {
        push(util.format.apply(util, arguments));
        indent++;
        return line;
      }
      if (INDENT_END.test(fmt.trim()[0])) {
        indent--;
        push(util.format.apply(util, arguments));
        return line;
      }
      push(util.format.apply(util, arguments));
      return line;
    };
    line.toString = function () {
      return lines.join('\n');
    };
    line.toFunction = function (scope) {
      var src = 'return (' + line.toString() + ')';
      var keys = Object.keys(scope || {}).map(function (key) {
        return key;
      });
      var vals = keys.map(function (key) {
        return scope[key];
      });
      return Function.apply(null, keys.concat(src)).apply(null, vals);
    };
    if (arguments.length) line.apply(null, arguments);
    return line;
  };
});
$__System.registerDynamic("npm:generate-function@2.0.0.js", ["npm:generate-function@2.0.0/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:generate-function@2.0.0/index.js");
});
$__System.registerDynamic('npm:jsonpointer@4.0.1/jsonpointer.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasExcape = /~/;
  var escapeMatcher = /~[01]/g;
  function escapeReplacer(m) {
    switch (m) {
      case '~1':
        return '/';
      case '~0':
        return '~';
    }
    throw new Error('Invalid tilde escape: ' + m);
  }

  function untilde(str) {
    if (!hasExcape.test(str)) return str;
    return str.replace(escapeMatcher, escapeReplacer);
  }

  function setter(obj, pointer, value) {
    var part;
    var hasNextPart;

    for (var p = 1, len = pointer.length; p < len;) {
      part = untilde(pointer[p++]);
      hasNextPart = len > p;

      if (typeof obj[part] === 'undefined') {
        // support setting of /-
        if (Array.isArray(obj) && part === '-') {
          part = obj.length;
        }

        // support nested objects/array when setting values
        if (hasNextPart) {
          if (pointer[p] !== '' && pointer[p] < Infinity || pointer[p] === '-') obj[part] = [];else obj[part] = {};
        }
      }

      if (!hasNextPart) break;
      obj = obj[part];
    }

    var oldValue = obj[part];
    if (value === undefined) delete obj[part];else obj[part] = value;
    return oldValue;
  }

  function compilePointer(pointer) {
    if (typeof pointer === 'string') {
      pointer = pointer.split('/');
      if (pointer[0] === '') return pointer;
      throw new Error('Invalid JSON pointer.');
    } else if (Array.isArray(pointer)) {
      return pointer;
    }

    throw new Error('Invalid JSON pointer.');
  }

  function get(obj, pointer) {
    if (typeof obj !== 'object') throw new Error('Invalid input object.');
    pointer = compilePointer(pointer);
    var len = pointer.length;
    if (len === 1) return obj;

    for (var p = 1; p < len;) {
      obj = obj[untilde(pointer[p++])];
      if (len === p) return obj;
      if (typeof obj !== 'object') return undefined;
    }
  }

  function set(obj, pointer, value) {
    if (typeof obj !== 'object') throw new Error('Invalid input object.');
    pointer = compilePointer(pointer);
    if (pointer.length === 0) throw new Error('Invalid JSON pointer for set.');
    return setter(obj, pointer, value);
  }

  function compile(pointer) {
    var compiled = compilePointer(pointer);
    return {
      get: function (object) {
        return get(object, compiled);
      },
      set: function (object, value) {
        return set(object, compiled, value);
      }
    };
  }

  exports.get = get;
  exports.set = set;
  exports.compile = compile;
});
$__System.registerDynamic("npm:jsonpointer@4.0.1.js", ["npm:jsonpointer@4.0.1/jsonpointer.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:jsonpointer@4.0.1/jsonpointer.js");
});
$__System.registerDynamic("npm:xtend@4.0.1/immutable.js", [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    module.exports = extend;

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function extend() {
        var target = {};

        for (var i = 0; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    }
});
$__System.registerDynamic("npm:xtend@4.0.1.js", ["npm:xtend@4.0.1/immutable.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:xtend@4.0.1/immutable.js");
});
$__System.registerDynamic('npm:is-my-json-valid@2.15.0/formats.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  exports['date-time'] = /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}[tT ]\d{2}:\d{2}:\d{2}(\.\d+)?([zZ]|[+-]\d{2}:\d{2})$/;
  exports['date'] = /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}$/;
  exports['time'] = /^\d{2}:\d{2}:\d{2}$/;
  exports['email'] = /^\S+@\S+$/;
  exports['ip-address'] = exports['ipv4'] = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  exports['ipv6'] = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  exports['uri'] = /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/;
  exports['color'] = /(#?([0-9A-Fa-f]{3,6})\b)|(aqua)|(black)|(blue)|(fuchsia)|(gray)|(green)|(lime)|(maroon)|(navy)|(olive)|(orange)|(purple)|(red)|(silver)|(teal)|(white)|(yellow)|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\))/;
  exports['hostname'] = /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*$/;
  exports['alpha'] = /^[a-zA-Z]+$/;
  exports['alphanumeric'] = /^[a-zA-Z0-9]+$/;
  exports['style'] = /\s*(.+?):\s*([^;]+);?/g;
  exports['phone'] = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  exports['utc-millisec'] = /^[0-9]{1,15}\.?[0-9]{0,15}$/;
});
$__System.registerDynamic('npm:is-my-json-valid@2.15.0/index.js', ['npm:generate-object-property@1.2.0.js', 'npm:generate-function@2.0.0.js', 'npm:jsonpointer@4.0.1.js', 'npm:xtend@4.0.1.js', 'npm:is-my-json-valid@2.15.0/formats.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var genobj = $__require('npm:generate-object-property@1.2.0.js');
  var genfun = $__require('npm:generate-function@2.0.0.js');
  var jsonpointer = $__require('npm:jsonpointer@4.0.1.js');
  var xtend = $__require('npm:xtend@4.0.1.js');
  var formats = $__require('npm:is-my-json-valid@2.15.0/formats.js');
  var get = function (obj, additionalSchemas, ptr) {
    var visit = function (sub) {
      if (sub && sub.id === ptr) return sub;
      if (typeof sub !== 'object' || !sub) return null;
      return Object.keys(sub).reduce(function (res, k) {
        return res || visit(sub[k]);
      }, null);
    };
    var res = visit(obj);
    if (res) return res;
    ptr = ptr.replace(/^#/, '');
    ptr = ptr.replace(/\/$/, '');
    try {
      return jsonpointer.get(obj, decodeURI(ptr));
    } catch (err) {
      var end = ptr.indexOf('#');
      var other;
      if (end !== 0) {
        if (end === -1) {
          other = additionalSchemas[ptr];
        } else {
          var ext = ptr.slice(0, end);
          other = additionalSchemas[ext];
          var fragment = ptr.slice(end).replace(/^#/, '');
          try {
            return jsonpointer.get(other, fragment);
          } catch (err) {}
        }
      } else {
        other = additionalSchemas[ptr];
      }
      return other || null;
    }
  };
  var formatName = function (field) {
    field = JSON.stringify(field);
    var pattern = /\[([^\[\]"]+)\]/;
    while (pattern.test(field)) field = field.replace(pattern, '."+$1+"');
    return field;
  };
  var types = {};
  types.any = function () {
    return 'true';
  };
  types.null = function (name) {
    return name + ' === null';
  };
  types.boolean = function (name) {
    return 'typeof ' + name + ' === "boolean"';
  };
  types.array = function (name) {
    return 'Array.isArray(' + name + ')';
  };
  types.object = function (name) {
    return 'typeof ' + name + ' === "object" && ' + name + ' && !Array.isArray(' + name + ')';
  };
  types.number = function (name) {
    return 'typeof ' + name + ' === "number"';
  };
  types.integer = function (name) {
    return 'typeof ' + name + ' === "number" && (Math.floor(' + name + ') === ' + name + ' || ' + name + ' > 9007199254740992 || ' + name + ' < -9007199254740992)';
  };
  types.string = function (name) {
    return 'typeof ' + name + ' === "string"';
  };
  var unique = function (array) {
    var list = [];
    for (var i = 0; i < array.length; i++) {
      list.push(typeof array[i] === 'object' ? JSON.stringify(array[i]) : array[i]);
    }
    for (var i = 1; i < list.length; i++) {
      if (list.indexOf(list[i]) !== i) return false;
    }
    return true;
  };
  var isMultipleOf = function (name, multipleOf) {
    var res;
    var factor = (multipleOf | 0) !== multipleOf ? Math.pow(10, multipleOf.toString().split('.').pop().length) : 1;
    if (factor > 1) {
      var factorName = (name | 0) !== name ? Math.pow(10, name.toString().split('.').pop().length) : 1;
      if (factorName > factor) res = true;else res = Math.round(factor * name) % (factor * multipleOf);
    } else res = name % multipleOf;
    return !res;
  };
  var toType = function (node) {
    return node.type;
  };
  var compile = function (schema, cache, root, reporter, opts) {
    var fmts = opts ? xtend(formats, opts.formats) : formats;
    var scope = {
      unique: unique,
      formats: fmts,
      isMultipleOf: isMultipleOf
    };
    var verbose = opts ? !!opts.verbose : false;
    var greedy = opts && opts.greedy !== undefined ? opts.greedy : false;
    var syms = {};
    var gensym = function (name) {
      return name + (syms[name] = (syms[name] || 0) + 1);
    };
    var reversePatterns = {};
    var patterns = function (p) {
      if (reversePatterns[p]) return reversePatterns[p];
      var n = gensym('pattern');
      scope[n] = new RegExp(p);
      reversePatterns[p] = n;
      return n;
    };
    var vars = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
    var genloop = function () {
      var v = vars.shift();
      vars.push(v + v[0]);
      return v;
    };
    var visit = function (name, node, reporter, filter) {
      var properties = node.properties;
      var type = node.type;
      var tuple = false;
      if (Array.isArray(node.items)) {
        properties = {};
        node.items.forEach(function (item, i) {
          properties[i] = item;
        });
        type = 'array';
        tuple = true;
      }
      var indent = 0;
      var error = function (msg, prop, value) {
        validate('errors++');
        if (reporter === true) {
          validate('if (validate.errors === null) validate.errors = []');
          if (verbose) {
            validate('validate.errors.push({field:%s,message:%s,value:%s,type:%s})', formatName(prop || name), JSON.stringify(msg), value || name, JSON.stringify(type));
          } else {
            validate('validate.errors.push({field:%s,message:%s})', formatName(prop || name), JSON.stringify(msg));
          }
        }
      };
      if (node.required === true) {
        indent++;
        validate('if (%s === undefined) {', name);
        error('is required');
        validate('} else {');
      } else {
        indent++;
        validate('if (%s !== undefined) {', name);
      }
      var valid = [].concat(type).map(function (t) {
        return types[t || 'any'](name);
      }).join(' || ') || 'true';
      if (valid !== 'true') {
        indent++;
        validate('if (!(%s)) {', valid);
        error('is the wrong type');
        validate('} else {');
      }
      if (tuple) {
        if (node.additionalItems === false) {
          validate('if (%s.length > %d) {', name, node.items.length);
          error('has additional items');
          validate('}');
        } else if (node.additionalItems) {
          var i = genloop();
          validate('for (var %s = %d; %s < %s.length; %s++) {', i, node.items.length, i, name, i);
          visit(name + '[' + i + ']', node.additionalItems, reporter, filter);
          validate('}');
        }
      }
      if (node.format && fmts[node.format]) {
        if (type !== 'string' && formats[node.format]) validate('if (%s) {', types.string(name));
        var n = gensym('format');
        scope[n] = fmts[node.format];
        if (typeof scope[n] === 'function') validate('if (!%s(%s)) {', n, name);else validate('if (!%s.test(%s)) {', n, name);
        error('must be ' + node.format + ' format');
        validate('}');
        if (type !== 'string' && formats[node.format]) validate('}');
      }
      if (Array.isArray(node.required)) {
        var isUndefined = function (req) {
          return genobj(name, req) + ' === undefined';
        };
        var checkRequired = function (req) {
          var prop = genobj(name, req);
          validate('if (%s === undefined) {', prop);
          error('is required', prop);
          validate('missing++');
          validate('}');
        };
        validate('if ((%s)) {', type !== 'object' ? types.object(name) : 'true');
        validate('var missing = 0');
        node.required.map(checkRequired);
        validate('}');
        if (!greedy) {
          validate('if (missing === 0) {');
          indent++;
        }
      }
      if (node.uniqueItems) {
        if (type !== 'array') validate('if (%s) {', types.array(name));
        validate('if (!(unique(%s))) {', name);
        error('must be unique');
        validate('}');
        if (type !== 'array') validate('}');
      }
      if (node.enum) {
        var complex = node.enum.some(function (e) {
          return typeof e === 'object';
        });
        var compare = complex ? function (e) {
          return 'JSON.stringify(' + name + ')' + ' !== JSON.stringify(' + JSON.stringify(e) + ')';
        } : function (e) {
          return name + ' !== ' + JSON.stringify(e);
        };
        validate('if (%s) {', node.enum.map(compare).join(' && ') || 'false');
        error('must be an enum value');
        validate('}');
      }
      if (node.dependencies) {
        if (type !== 'object') validate('if (%s) {', types.object(name));
        Object.keys(node.dependencies).forEach(function (key) {
          var deps = node.dependencies[key];
          if (typeof deps === 'string') deps = [deps];
          var exists = function (k) {
            return genobj(name, k) + ' !== undefined';
          };
          if (Array.isArray(deps)) {
            validate('if (%s !== undefined && !(%s)) {', genobj(name, key), deps.map(exists).join(' && ') || 'true');
            error('dependencies not set');
            validate('}');
          }
          if (typeof deps === 'object') {
            validate('if (%s !== undefined) {', genobj(name, key));
            visit(name, deps, reporter, filter);
            validate('}');
          }
        });
        if (type !== 'object') validate('}');
      }
      if (node.additionalProperties || node.additionalProperties === false) {
        if (type !== 'object') validate('if (%s) {', types.object(name));
        var i = genloop();
        var keys = gensym('keys');
        var toCompare = function (p) {
          return keys + '[' + i + '] !== ' + JSON.stringify(p);
        };
        var toTest = function (p) {
          return '!' + patterns(p) + '.test(' + keys + '[' + i + '])';
        };
        var additionalProp = Object.keys(properties || {}).map(toCompare).concat(Object.keys(node.patternProperties || {}).map(toTest)).join(' && ') || 'true';
        validate('var %s = Object.keys(%s)', keys, name)('for (var %s = 0; %s < %s.length; %s++) {', i, i, keys, i)('if (%s) {', additionalProp);
        if (node.additionalProperties === false) {
          if (filter) validate('delete %s', name + '[' + keys + '[' + i + ']]');
          error('has additional properties', null, JSON.stringify(name + '.') + ' + ' + keys + '[' + i + ']');
        } else {
          visit(name + '[' + keys + '[' + i + ']]', node.additionalProperties, reporter, filter);
        }
        validate('}')('}');
        if (type !== 'object') validate('}');
      }
      if (node.$ref) {
        var sub = get(root, opts && opts.schemas || {}, node.$ref);
        if (sub) {
          var fn = cache[node.$ref];
          if (!fn) {
            cache[node.$ref] = function proxy(data) {
              return fn(data);
            };
            fn = compile(sub, cache, root, false, opts);
          }
          var n = gensym('ref');
          scope[n] = fn;
          validate('if (!(%s(%s))) {', n, name);
          error('referenced schema does not match');
          validate('}');
        }
      }
      if (node.not) {
        var prev = gensym('prev');
        validate('var %s = errors', prev);
        visit(name, node.not, false, filter);
        validate('if (%s === errors) {', prev);
        error('negative schema matches');
        validate('} else {')('errors = %s', prev)('}');
      }
      if (node.items && !tuple) {
        if (type !== 'array') validate('if (%s) {', types.array(name));
        var i = genloop();
        validate('for (var %s = 0; %s < %s.length; %s++) {', i, i, name, i);
        visit(name + '[' + i + ']', node.items, reporter, filter);
        validate('}');
        if (type !== 'array') validate('}');
      }
      if (node.patternProperties) {
        if (type !== 'object') validate('if (%s) {', types.object(name));
        var keys = gensym('keys');
        var i = genloop();
        validate('var %s = Object.keys(%s)', keys, name)('for (var %s = 0; %s < %s.length; %s++) {', i, i, keys, i);
        Object.keys(node.patternProperties).forEach(function (key) {
          var p = patterns(key);
          validate('if (%s.test(%s)) {', p, keys + '[' + i + ']');
          visit(name + '[' + keys + '[' + i + ']]', node.patternProperties[key], reporter, filter);
          validate('}');
        });
        validate('}');
        if (type !== 'object') validate('}');
      }
      if (node.pattern) {
        var p = patterns(node.pattern);
        if (type !== 'string') validate('if (%s) {', types.string(name));
        validate('if (!(%s.test(%s))) {', p, name);
        error('pattern mismatch');
        validate('}');
        if (type !== 'string') validate('}');
      }
      if (node.allOf) {
        node.allOf.forEach(function (sch) {
          visit(name, sch, reporter, filter);
        });
      }
      if (node.anyOf && node.anyOf.length) {
        var prev = gensym('prev');
        node.anyOf.forEach(function (sch, i) {
          if (i === 0) {
            validate('var %s = errors', prev);
          } else {
            validate('if (errors !== %s) {', prev)('errors = %s', prev);
          }
          visit(name, sch, false, false);
        });
        node.anyOf.forEach(function (sch, i) {
          if (i) validate('}');
        });
        validate('if (%s !== errors) {', prev);
        error('no schemas match');
        validate('}');
      }
      if (node.oneOf && node.oneOf.length) {
        var prev = gensym('prev');
        var passes = gensym('passes');
        validate('var %s = errors', prev)('var %s = 0', passes);
        node.oneOf.forEach(function (sch, i) {
          visit(name, sch, false, false);
          validate('if (%s === errors) {', prev)('%s++', passes)('} else {')('errors = %s', prev)('}');
        });
        validate('if (%s !== 1) {', passes);
        error('no (or more than one) schemas match');
        validate('}');
      }
      if (node.multipleOf !== undefined) {
        if (type !== 'number' && type !== 'integer') validate('if (%s) {', types.number(name));
        validate('if (!isMultipleOf(%s, %d)) {', name, node.multipleOf);
        error('has a remainder');
        validate('}');
        if (type !== 'number' && type !== 'integer') validate('}');
      }
      if (node.maxProperties !== undefined) {
        if (type !== 'object') validate('if (%s) {', types.object(name));
        validate('if (Object.keys(%s).length > %d) {', name, node.maxProperties);
        error('has more properties than allowed');
        validate('}');
        if (type !== 'object') validate('}');
      }
      if (node.minProperties !== undefined) {
        if (type !== 'object') validate('if (%s) {', types.object(name));
        validate('if (Object.keys(%s).length < %d) {', name, node.minProperties);
        error('has less properties than allowed');
        validate('}');
        if (type !== 'object') validate('}');
      }
      if (node.maxItems !== undefined) {
        if (type !== 'array') validate('if (%s) {', types.array(name));
        validate('if (%s.length > %d) {', name, node.maxItems);
        error('has more items than allowed');
        validate('}');
        if (type !== 'array') validate('}');
      }
      if (node.minItems !== undefined) {
        if (type !== 'array') validate('if (%s) {', types.array(name));
        validate('if (%s.length < %d) {', name, node.minItems);
        error('has less items than allowed');
        validate('}');
        if (type !== 'array') validate('}');
      }
      if (node.maxLength !== undefined) {
        if (type !== 'string') validate('if (%s) {', types.string(name));
        validate('if (%s.length > %d) {', name, node.maxLength);
        error('has longer length than allowed');
        validate('}');
        if (type !== 'string') validate('}');
      }
      if (node.minLength !== undefined) {
        if (type !== 'string') validate('if (%s) {', types.string(name));
        validate('if (%s.length < %d) {', name, node.minLength);
        error('has less length than allowed');
        validate('}');
        if (type !== 'string') validate('}');
      }
      if (node.minimum !== undefined) {
        if (type !== 'number' && type !== 'integer') validate('if (%s) {', types.number(name));
        validate('if (%s %s %d) {', name, node.exclusiveMinimum ? '<=' : '<', node.minimum);
        error('is less than minimum');
        validate('}');
        if (type !== 'number' && type !== 'integer') validate('}');
      }
      if (node.maximum !== undefined) {
        if (type !== 'number' && type !== 'integer') validate('if (%s) {', types.number(name));
        validate('if (%s %s %d) {', name, node.exclusiveMaximum ? '>=' : '>', node.maximum);
        error('is more than maximum');
        validate('}');
        if (type !== 'number' && type !== 'integer') validate('}');
      }
      if (properties) {
        Object.keys(properties).forEach(function (p) {
          if (Array.isArray(type) && type.indexOf('null') !== -1) validate('if (%s !== null) {', name);
          visit(genobj(name, p), properties[p], reporter, filter);
          if (Array.isArray(type) && type.indexOf('null') !== -1) validate('}');
        });
      }
      while (indent--) validate('}');
    };
    var validate = genfun('function validate(data) {')('if (data === undefined) data = null')('validate.errors = null')('var errors = 0');
    visit('data', schema, reporter, opts && opts.filter);
    validate('return errors === 0')('}');
    validate = validate.toFunction(scope);
    validate.errors = null;
    if (Object.defineProperty) {
      Object.defineProperty(validate, 'error', { get: function () {
          if (!validate.errors) return '';
          return validate.errors.map(function (err) {
            return err.field + ' ' + err.message;
          }).join('\n');
        } });
    }
    validate.toJSON = function () {
      return schema;
    };
    return validate;
  };
  module.exports = function (schema, opts) {
    if (typeof schema === 'string') schema = JSON.parse(schema);
    return compile(schema, {}, schema, true, opts);
  };
  module.exports.filter = function (schema, opts) {
    var validate = module.exports(schema, xtend(opts, { filter: true }));
    return function (sch) {
      validate(sch);
      return sch;
    };
  };
});
$__System.registerDynamic("npm:is-my-json-valid@2.15.0.js", ["npm:is-my-json-valid@2.15.0/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:is-my-json-valid@2.15.0/index.js");
});
$__System.registerDynamic('npm:superviews.js@3.0.4/validator.js', ['npm:is-my-json-valid@2.15.0.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:is-my-json-valid@2.15.0.js');
});
$__System.registerDynamic('npm:superviews.js@3.0.4/client/index.js', ['npm:superviews.js@3.0.4/delegator.js', 'npm:superviews.js@3.0.4/validator.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  const delegator = $__require('npm:superviews.js@3.0.4/delegator.js');
  const validator = $__require('npm:superviews.js@3.0.4/validator.js');
  const validatorOptions = {
    greedy: true,
    formats: {
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      objectid: /^[a-f\d]{24}$/i
    }
  };
  const convertValue = function (value, type) {
    if (typeof value !== 'string' || type === 'string') {
      return value;
    }
    if (type === 'integer' || type === 'number') {
      var convertedVal = 1 * value;
      if (convertedVal || convertedVal === 0 && (type === 'number' || value.indexOf('.') === -1)) {
        return convertedVal;
      }
    } else if (type === 'boolean') {
      if (value === 'true') {
        return true;
      } else if (value === 'false') {
        return false;
      }
    }
    return value;
  };
  function isSimple(item) {
    return item.type === 'number' || item.type === 'string' || item.type === 'boolean';
  }
  const superviews = (options, Base = window.HTMLElement) => class Superviews extends Base {
    constructor() {
      super();
      const cache = { options: options };
      let renderTimeoutId = 0;
      const render = function () {
        if (!renderTimeoutId) {
          renderTimeoutId = setTimeout(() => {
            renderTimeoutId = 0;
            this.renderCallback();
          });
        }
      }.bind(this);
      cache.render = render;
      const schema = options.schema;
      if (schema && schema.properties) {
        const opts = options.validatorOptions || validatorOptions;
        const validate = validator(schema, opts);
        const props = schema.properties;
        const keys = Object.keys(props);
        keys.forEach(key => {
          const item = props[key];
          const isAttr = isSimple(item);
          let dflt;
          if ('default' in item) {
            dflt = item.default;
          }
          if (isAttr) {
            Object.defineProperty(this, key, {
              get() {
                return this.hasAttribute(key) ? convertValue(this.getAttribute(key), item.type) : dflt;
              },
              set(value) {
                return this.setAttribute(key, value);
              }
            });
          } else {
            let val;
            Object.defineProperty(this, key, {
              get() {
                return typeof val === 'undefined' ? dflt : val;
              },
              set(value) {
                const oldval = val;
                const newval = convertValue(value, item.type);
                if (newval !== oldval) {
                  val = newval;
                  this.propertyChangedCallback(key, oldval, newval);
                }
              }
            });
          }
        });
        cache.validate = validate;
      }
      const del = delegator(this);
      this.on = del.on.bind(del);
      this.off = del.off.bind(del);
      cache.delegate = del;
      cache.events = options.events;
      this.__superviews = cache;
    }
    static get observedAttributes() {
      const properties = options.schema && options.schema.properties;
      if (properties) {
        return Object.keys(properties).filter(key => isSimple(properties[key])).map(key => key.toLowerCase());
      }
    }
    renderCallback() {
      console.log('Not implemented!');
    }
    propertyChangedCallback(name, oldValue, newValue) {
      this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
    render(immediatley) {
      if (immediatley) {
        this.renderCallback();
      } else {
        this.__superviews.render();
      }
    }
    emit(name, customEventInit) {
      const events = this.__superviews.events;
      if (!events || !(name in events)) {
        return;
      }
      const event = new window.CustomEvent(name, customEventInit);
      const eventName = 'on' + name;
      if (this[eventName]) {
        this[eventName](event);
      }
      this.dispatchEvent(event);
    }
    validate() {
      const schema = options && options.schema;
      const validate = this.__superviews.validate;
      if (schema && validate) {
        const props = schema.properties;
        const keys = Object.keys(props);
        const data = {};
        keys.forEach(key => {
          data[key] = this[key];
        });
        const result = { ok: validate(data) };
        if (!result.ok) {
          result.errors = validate.errors;
        }
        return result;
      }
    }
    static get schema() {
      return options.schema;
    }
    static get events() {
      return options.events;
    }
  };
  module.exports = superviews;
});
$__System.registerDynamic("npm:superviews.js@3.0.4.js", ["npm:superviews.js@3.0.4/client/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:superviews.js@3.0.4/client/index.js");
});
$__System.register('helpers/view.js', ['helpers/element.js', 'npm:superviews.js@3.0.4.js'], function (_export) {
    'use strict';

    var Element, superviews, argstr, mode, View;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_element) {
            Element = _element.Element;
        }, function (_superviews) {
            superviews = _superviews['default'];
        }],
        execute: function () {
            argstr = "m";
            mode = "browser";

            View = function () {
                function View() {
                    _classCallCheck(this, View);
                }

                _createClass(View, null, [{
                    key: 'createTemplateFn',
                    value: function createTemplateFn(tpl, name) {
                        return superviews(tpl, name, argstr, mode);
                    }
                }, {
                    key: 'convertToTemplateFn',
                    value: function convertToTemplateFn($el) {
                        var result = $el.html();
                    }
                }]);

                return View;
            }();

            _export('View', View);
        }
    };
});
$__System.register('helpers/xml.js', ['npm:lodash@4.17.5.js'], function (_export) {
    'use strict';

    var _, XML;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_lodash) {
            _ = _lodash['default'];
        }],
        execute: function () {
            XML = function () {
                function XML() {
                    _classCallCheck(this, XML);
                }

                _createClass(XML, null, [{
                    key: 'flatten',
                    value: function flatten(object) {
                        var check = _.isPlainObject(object) && _.size(object) === 1;
                        return check ? XML.flatten(_.values(object)[0]) : object;
                    }
                }, {
                    key: 'parse',
                    value: function parse(xml) {
                        var data = {};

                        var isText = xml.nodeType === 3,
                            isElement = xml.nodeType === 1,
                            body = xml.textContent && xml.textContent.trim(),
                            hasChildren = xml.children && xml.children.length,
                            hasAttributes = xml.attributes && xml.attributes.length;

                        if (isText) {
                            return xml.nodeValue.trim();
                        }

                        if (!hasChildren && !hasAttributes) {
                            return body;
                        }

                        if (!hasChildren && body.length) {
                            data.text = body;
                        }

                        if (isElement && hasAttributes) {
                            data.attributes = _.reduce(xml.attributes, function (obj, name, id) {
                                var attr = xml.attributes.item(id);
                                obj[attr.name] = attr.value;
                                return obj;
                            }, {});
                        }

                        _.each(xml.children, function (child) {
                            var name = child.nodeName;

                            if (!_.has(data, name)) {
                                data[name] = XML.parse(child);
                                return;
                            }

                            if (!_.isArray(data[name])) {
                                data[name] = [data[name]];
                            }

                            data[name].push(XML.parse(child));
                        });

                        _.each(data.attributes, function (value, key) {
                            if (data[key] != null) {
                                return;
                            }
                            data[key] = value;
                            delete data.attributes[key];
                        });

                        if (_.isEmpty(data.attributes)) {
                            delete data.attributes;
                        }

                        return XML.flatten(data);
                    }
                }]);

                return XML;
            }();

            _export('XML', XML);
        }
    };
});
$__System.register('helpers/helpers.js', ['helpers/booleans.js', 'helpers/browser.js', 'helpers/colors.js', 'helpers/dates.js', 'helpers/element.js', 'helpers/objects.js', 'helpers/numbers.js', 'helpers/strings.js', 'helpers/uri.js', 'helpers/view.js', 'helpers/xml.js'], function (_export) {
    'use strict';

    var Booleans, Browser, Colors, Dates, Element, Objects, Numbers, Strings, URI, View, XML, Helpers;
    return {
        setters: [function (_booleans) {
            Booleans = _booleans.Booleans;
        }, function (_browser) {
            Browser = _browser.Browser;
        }, function (_colors) {
            Colors = _colors.Colors;
        }, function (_dates) {
            Dates = _dates.Dates;
        }, function (_element) {
            Element = _element.Element;
        }, function (_objects) {
            Objects = _objects.Objects;
        }, function (_numbers) {
            Numbers = _numbers.Numbers;
        }, function (_strings) {
            Strings = _strings.Strings;
        }, function (_uri) {
            URI = _uri.URI;
        }, function (_view) {
            View = _view.View;
        }, function (_xml) {
            XML = _xml.XML;
        }],
        execute: function () {
            Helpers = {
                Booleans: Booleans,
                Browser: Browser,
                Colors: Colors,
                Dates: Dates,
                Element: Element,
                Numbers: Numbers,
                Objects: Objects,
                Strings: Strings,
                URI: URI,
                View: View,
                XML: XML
            };

            _export('Helpers', Helpers);
        }
    };
});
$__System.register('lib/dynamic-view.js', ['github:components/jquery@1.11.3.js', 'helpers/helpers.js', 'npm:incremental-dom@0.5.1.js'], function (_export) {
    'use strict';

    var $, Helpers, idom, DynamicView;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_helpersHelpers) {
            Helpers = _helpersHelpers.Helpers;
        }, function (_incrementalDom) {
            idom = _incrementalDom['default'];
        }],
        execute: function () {
            DynamicView = function () {
                function DynamicView() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? { templateFn: templateFn, $container: $container, vm: vm, id: id } : arguments[0];

                    _classCallCheck(this, DynamicView);

                    if (Object.is(options, undefined)) {
                        throw new Error('options params is not provided');
                    }
                    if (Object.is(options.templateFn, undefined)) {
                        throw new Error('to initialise a view template function is necessary ');
                    }
                    if (Object.is(options.$container, undefined)) {
                        throw new Error('to initialise a container to mount template on is necessary ');
                    }

                    this._id = options.id ? options.id + '-view' : Helpers.Strings.random(8) + '-view';
                    this._el = document.createElement('div');
                    Helpers.Element.addProperty(this._id, this._el);

                    this._$container = options.$container;
                    this._templateFn = options.templateFn;
                    this._vm = options.vm;

                    this.render();
                    $(this._$container).append(this._el);
                }

                _createClass(DynamicView, [{
                    key: 'render',
                    value: function render() {
                        idom.patch(this._el, this._templateFn, this._vm);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        $(this._el).empty();
                        $(this._$container).empty();
                        for (var prop in this) {
                            if (this.hasOwnProperty(prop)) {
                                delete this[prop];
                            }
                        }
                    }
                }]);

                return DynamicView;
            }();

            _export('DynamicView', DynamicView);
        }
    };
});
$__System.registerDynamic('npm:lodash@4.17.5/lodash.js', ['@empty'], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
  (function (Buffer, process) {
    ;
    (function () {
      var undefined;
      var VERSION = '4.17.5';
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
          FUNC_ERROR_TEXT = 'Expected a function';
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = '__lodash_placeholder__';
      var CLONE_DEEP_FLAG = 1,
          CLONE_FLAT_FLAG = 2,
          CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1,
          WRAP_BIND_KEY_FLAG = 2,
          WRAP_CURRY_BOUND_FLAG = 4,
          WRAP_CURRY_FLAG = 8,
          WRAP_CURRY_RIGHT_FLAG = 16,
          WRAP_PARTIAL_FLAG = 32,
          WRAP_PARTIAL_RIGHT_FLAG = 64,
          WRAP_ARY_FLAG = 128,
          WRAP_REARG_FLAG = 256,
          WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30,
          DEFAULT_TRUNC_OMISSION = '...';
      var HOT_COUNT = 800,
          HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1,
          LAZY_MAP_FLAG = 2,
          LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0,
          MAX_SAFE_INTEGER = 9007199254740991,
          MAX_INTEGER = 1.7976931348623157e+308,
          NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295,
          MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
          HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          asyncTag = '[object AsyncFunction]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          domExcTag = '[object DOMException]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          nullTag = '[object Null]',
          objectTag = '[object Object]',
          promiseTag = '[object Promise]',
          proxyTag = '[object Proxy]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]',
          undefinedTag = '[object Undefined]',
          weakMapTag = '[object WeakMap]',
          weakSetTag = '[object WeakSet]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var reEmptyStringLeading = /\b__p \+= '';/g,
          reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
          reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
          reUnescapedHtml = /[&<>"']/g,
          reHasEscapedHtml = RegExp(reEscapedHtml.source),
          reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g,
          reEvaluate = /<%([\s\S]+?)%>/g,
          reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
          reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrim = /^\s+|\s+$/g,
          reTrimStart = /^\s+/,
          reTrimEnd = /\s+$/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
          reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = '\\ud800-\\udfff',
          rsComboMarksRange = '\\u0300-\\u036f',
          reComboHalfMarksRange = '\\ufe20-\\ufe2f',
          rsComboSymbolsRange = '\\u20d0-\\u20ff',
          rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
          rsDingbatRange = '\\u2700-\\u27bf',
          rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
          rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
          rsPunctuationRange = '\\u2000-\\u206f',
          rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          rsVarRange = '\\ufe0e\\ufe0f',
          rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]",
          rsAstral = '[' + rsAstralRange + ']',
          rsBreak = '[' + rsBreakRange + ']',
          rsCombo = '[' + rsComboRange + ']',
          rsDigits = '\\d+',
          rsDingbat = '[' + rsDingbatRange + ']',
          rsLower = '[' + rsLowerRange + ']',
          rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
          rsFitz = '\\ud83c[\\udffb-\\udfff]',
          rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
          rsNonAstral = '[^' + rsAstralRange + ']',
          rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          rsUpper = '[' + rsUpperRange + ']',
          rsZWJ = '\\u200d';
      var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
          rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
          rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
          rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
          reOptMod = rsModifier + '?',
          rsOptVar = '[' + rsVarRange + ']?',
          rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
          rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
          rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
      var reApos = RegExp(rsApos, 'g');
      var reComboMark = RegExp(rsCombo, 'g');
      var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
      var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
      var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = ['Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object', 'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcc': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xec': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u0104': 'A',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u0105': 'a',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010a': 'C',
        '\u010c': 'C',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010b': 'c',
        '\u010d': 'c',
        '\u010e': 'D',
        '\u0110': 'D',
        '\u010f': 'd',
        '\u0111': 'd',
        '\u0112': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u0118': 'E',
        '\u011a': 'E',
        '\u0113': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u0119': 'e',
        '\u011b': 'e',
        '\u011c': 'G',
        '\u011e': 'G',
        '\u0120': 'G',
        '\u0122': 'G',
        '\u011d': 'g',
        '\u011f': 'g',
        '\u0121': 'g',
        '\u0123': 'g',
        '\u0124': 'H',
        '\u0126': 'H',
        '\u0125': 'h',
        '\u0127': 'h',
        '\u0128': 'I',
        '\u012a': 'I',
        '\u012c': 'I',
        '\u012e': 'I',
        '\u0130': 'I',
        '\u0129': 'i',
        '\u012b': 'i',
        '\u012d': 'i',
        '\u012f': 'i',
        '\u0131': 'i',
        '\u0134': 'J',
        '\u0135': 'j',
        '\u0136': 'K',
        '\u0137': 'k',
        '\u0138': 'k',
        '\u0139': 'L',
        '\u013b': 'L',
        '\u013d': 'L',
        '\u013f': 'L',
        '\u0141': 'L',
        '\u013a': 'l',
        '\u013c': 'l',
        '\u013e': 'l',
        '\u0140': 'l',
        '\u0142': 'l',
        '\u0143': 'N',
        '\u0145': 'N',
        '\u0147': 'N',
        '\u014a': 'N',
        '\u0144': 'n',
        '\u0146': 'n',
        '\u0148': 'n',
        '\u014b': 'n',
        '\u014c': 'O',
        '\u014e': 'O',
        '\u0150': 'O',
        '\u014d': 'o',
        '\u014f': 'o',
        '\u0151': 'o',
        '\u0154': 'R',
        '\u0156': 'R',
        '\u0158': 'R',
        '\u0155': 'r',
        '\u0157': 'r',
        '\u0159': 'r',
        '\u015a': 'S',
        '\u015c': 'S',
        '\u015e': 'S',
        '\u0160': 'S',
        '\u015b': 's',
        '\u015d': 's',
        '\u015f': 's',
        '\u0161': 's',
        '\u0162': 'T',
        '\u0164': 'T',
        '\u0166': 'T',
        '\u0163': 't',
        '\u0165': 't',
        '\u0167': 't',
        '\u0168': 'U',
        '\u016a': 'U',
        '\u016c': 'U',
        '\u016e': 'U',
        '\u0170': 'U',
        '\u0172': 'U',
        '\u0169': 'u',
        '\u016b': 'u',
        '\u016d': 'u',
        '\u016f': 'u',
        '\u0171': 'u',
        '\u0173': 'u',
        '\u0174': 'W',
        '\u0175': 'w',
        '\u0176': 'Y',
        '\u0177': 'y',
        '\u0178': 'Y',
        '\u0179': 'Z',
        '\u017b': 'Z',
        '\u017d': 'Z',
        '\u017a': 'z',
        '\u017c': 'z',
        '\u017e': 'z',
        '\u0132': 'IJ',
        '\u0133': 'ij',
        '\u0152': 'Oe',
        '\u0153': 'oe',
        '\u0149': "'n",
        '\u017f': 's'
      };
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
      };
      var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };
      var freeParseFloat = parseFloat,
          freeParseInt = parseInt;
      var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function('return this')();
      var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function () {
        try {
          return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {}
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
          nodeIsDate = nodeUtil && nodeUtil.isDate,
          nodeIsMap = nodeUtil && nodeUtil.isMap,
          nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
          nodeIsSet = nodeUtil && nodeUtil.isSet,
          nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty('length');
      function asciiToArray(string) {
        return string.split('');
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function (value, key, collection) {
          if (predicate(value, key, collection)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function (object) {
          return object == null ? undefined : object[key];
        };
      }
      function basePropertyOf(object) {
        return function (key) {
          return object == null ? undefined : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function (value, index, collection) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result,
            index = -1,
            length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined) {
            result = result === undefined ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function (key) {
          return [key, object[key]];
        });
      }
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function (key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1,
            length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length,
            result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data,
            result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function (value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function safeGet(object, key) {
        return key == '__proto__' ? undefined : object[key];
      }
      function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function (value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function (value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array = context.Array,
            Date = context.Date,
            Error = context.Error,
            Function = context.Function,
            Math = context.Math,
            Object = context.Object,
            RegExp = context.RegExp,
            String = context.String,
            TypeError = context.TypeError;
        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;
        var coreJsData = context['__core-js_shared__'];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object);
        var oldDash = root._;
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var Buffer = moduleExports ? context.Buffer : undefined,
            Symbol = context.Symbol,
            Uint8Array = context.Uint8Array,
            allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
            getPrototype = overArg(Object.getPrototypeOf, Object),
            objectCreate = Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice,
            spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
            symIterator = Symbol ? Symbol.iterator : undefined,
            symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = function () {
          try {
            var func = getNative(Object, 'defineProperty');
            func({}, '', {});
            return func;
          } catch (e) {}
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
            ctxNow = Date && Date.now !== root.Date.now && Date.now,
            ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math.ceil,
            nativeFloor = Math.floor,
            nativeGetSymbols = Object.getOwnPropertySymbols,
            nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
            nativeIsFinite = context.isFinite,
            nativeJoin = arrayProto.join,
            nativeKeys = overArg(Object.keys, Object),
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeNow = Date.now,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random,
            nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, 'DataView'),
            Map = getNative(context, 'Map'),
            Promise = getNative(context, 'Promise'),
            Set = getNative(context, 'Set'),
            WeakMap = getNative(context, 'WeakMap'),
            nativeCreate = getNative(Object, 'create');
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, '__wrapped__')) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function () {
          function object() {}
          return function (proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result = new object();
            object.prototype = undefined;
            return result;
          };
        }();
        function baseLodash() {}
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined;
        }
        lodash.templateSettings = {
          'escape': reEscape,
          'evaluate': reEvaluate,
          'interpolate': reInterpolate,
          'variable': '',
          'imports': { '_': lodash }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result = new LazyWrapper(this.__wrapped__);
          result.__actions__ = copyArray(this.__actions__);
          result.__dir__ = this.__dir__;
          result.__filtered__ = this.__filtered__;
          result.__iteratees__ = copyArray(this.__iteratees__);
          result.__takeCount__ = this.__takeCount__;
          result.__views__ = copyArray(this.__views__);
          return result;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result = new LazyWrapper(this);
            result.__dir__ = -1;
            result.__filtered__ = true;
          } else {
            result = this.clone();
            result.__dir__ *= -1;
          }
          return result;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(),
              dir = this.__dir__,
              isArr = isArray(array),
              isRight = dir < 0,
              arrLength = isArr ? array.length : 0,
              view = getView(0, arrLength, this.__views__),
              start = view.start,
              end = view.end,
              length = end - start,
              index = isRight ? end : start - 1,
              iteratees = this.__iteratees__,
              iterLength = iteratees.length,
              resIndex = 0,
              takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1,
                value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex],
                  iteratee = data.iteratee,
                  type = data.type,
                  computed = iteratee(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result[resIndex++] = value;
          }
          return result;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result = this.has(key) && delete this.__data__[key];
          this.size -= result ? 1 : 0;
          return result;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result = getMapData(this, key)['delete'](key);
          this.size -= result ? 1 : 0;
          return result;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key),
              size = data.size;
          data.set(key, value);
          this.size += data.size == size ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values) {
          var index = -1,
              length = values == null ? 0 : values.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__,
              result = data['delete'](key);
          this.size = data.size;
          return result;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value),
              isArg = !isArr && isArguments(value),
              isBuff = !isArr && !isArg && isBuffer(value),
              isType = !isArr && !isArg && !isBuff && isTypedArray(value),
              skipIndexes = isArr || isArg || isBuff || isType,
              result = skipIndexes ? baseTimes(value.length, String) : [],
              length = result.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || isIndex(key, length)))) {
              result.push(key);
            }
          }
          return result;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee, accumulator) {
          baseEach(collection, function (value, key, collection) {
            setter(accumulator, value, iteratee(value), collection);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == '__proto__' && defineProperty) {
            defineProperty(object, key, {
              'configurable': true,
              'enumerable': true,
              'value': value,
              'writable': true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1,
              length = paths.length,
              result = Array(length),
              skip = object == null;
          while (++index < length) {
            result[index] = skip ? undefined : get(object, paths[index]);
          }
          return result;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result,
              isDeep = bitmask & CLONE_DEEP_FLAG,
              isFlat = bitmask & CLONE_FLAT_FLAG,
              isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result);
            }
          } else {
            var tag = getTag(value),
                isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result);
          if (isSet(value)) {
            value.forEach(function (subValue) {
              result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
            return result;
          }
          if (isMap(value)) {
            value.forEach(function (subValue, key) {
              result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            return result;
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined : keysFunc(value);
          arrayEach(props || value, function (subValue, key) {
            if (props) {
              key = subValue;
              subValue = value[key];
            }
            assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
          });
          return result;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function (object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (length--) {
            var key = props[length],
                predicate = source[key],
                value = object[key];
            if (value === undefined && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function () {
            func.apply(undefined, args);
          }, wait);
        }
        function baseDifference(array, values, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              isCommon = true,
              length = array.length,
              result = [],
              valuesLength = values.length;
          if (!length) {
            return result;
          }
          if (iteratee) {
            values = arrayMap(values, baseUnary(iteratee));
          }
          if (comparator) {
            includes = arrayIncludesWith;
            isCommon = false;
          } else if (values.length >= LARGE_ARRAY_SIZE) {
            includes = cacheHas;
            isCommon = false;
            values = new SetCache(values);
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee == null ? value : iteratee(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result.push(value);
            } else if (!includes(values, computed, comparator)) {
              result.push(value);
            }
          }
          return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result = true;
          baseEach(collection, function (value, index, collection) {
            result = !!predicate(value, index, collection);
            return result;
          });
          return result;
        }
        function baseExtremum(array, iteratee, comparator) {
          var index = -1,
              length = array.length;
          while (++index < length) {
            var value = array[index],
                current = iteratee(value);
            if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current,
                  result = value;
            }
          }
          return result;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result = [];
          baseEach(collection, function (value, index, collection) {
            if (predicate(value, index, collection)) {
              result.push(value);
            }
          });
          return result;
        }
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1,
              length = array.length;
          predicate || (predicate = isFlattenable);
          result || (result = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
          return object && baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function (key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0,
              length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee, comparator) {
          var includes = comparator ? arrayIncludesWith : arrayIncludes,
              length = arrays[0].length,
              othLength = arrays.length,
              othIndex = othLength,
              caches = Array(othLength),
              maxLength = Infinity,
              result = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee) {
              array = arrayMap(array, baseUnary(iteratee));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
          }
          array = arrays[0];
          var index = -1,
              seen = caches[0];
          outer: while (++index < length && result.length < maxLength) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseInverter(object, setter, iteratee, accumulator) {
          baseForOwn(object, function (value, key, object) {
            setter(accumulator, iteratee(value), key, object);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = objIsArr ? arrayTag : getTag(object),
              othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag,
              othIsObj = othTag == objectTag,
              isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                  othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == 'function') {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == 'object') {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != 'constructor') {
              result.push(key);
            }
          }
          return result;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object),
              result = [];
          for (var key in object) {
            if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee) {
          var index = -1,
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function (value, key, collection) {
            result[++index] = iteratee(value, key, collection);
          });
          return result;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function (object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function (object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function (srcValue, key) {
            if (isObject(srcValue)) {
              stack || (stack = new Stack());
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key),
              srcValue = safeGet(source, key),
              stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
          var isCommon = newValue === undefined;
          if (isCommon) {
            var isArr = isArray(srcValue),
                isBuff = !isArr && isBuffer(srcValue),
                isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || srcIndex && isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack['delete'](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined;
        }
        function baseOrderBy(collection, iteratees, orders) {
          var index = -1;
          iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
          var result = baseMap(collection, function (value, key, collection) {
            var criteria = arrayMap(iteratees, function (iteratee) {
              return iteratee(value);
            });
            return {
              'criteria': criteria,
              'index': ++index,
              'value': value
            };
          });
          return baseSortBy(result, function (object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function (value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1,
              length = paths.length,
              result = {};
          while (++index < length) {
            var path = paths[index],
                value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result, castPath(path, object), value);
            }
          }
          return result;
        }
        function basePropertyDeep(path) {
          return function (object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values, iteratee, comparator) {
          var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
              index = -1,
              length = values.length,
              seen = array;
          if (array === values) {
            values = copyArray(values);
          }
          if (iteratee) {
            seen = arrayMap(array, baseUnary(iteratee));
          }
          while (++index < length) {
            var fromIndex = 0,
                value = values[index],
                computed = iteratee ? iteratee(value) : value;
            while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0,
              lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);
          while (length--) {
            result[fromRight ? length : ++index] = start;
            start += step;
          }
          return result;
        }
        function baseRepeat(string, n) {
          var result = '';
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result;
          }
          do {
            if (n % 2) {
              result += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + '');
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1,
              length = path.length,
              lastIndex = length - 1,
              nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]),
                newValue = value;
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined;
              if (newValue === undefined) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function (func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function (func, string) {
          return defineProperty(func, 'toString', {
            'configurable': true,
            'enumerable': false,
            'value': constant(string),
            'writable': true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }
        function baseSome(collection, predicate) {
          var result;
          baseEach(collection, function (value, index, collection) {
            result = predicate(value, index, collection);
            return !result;
          });
          return !!result;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0,
              high = array == null ? low : array.length;
          if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1,
                  computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee, retHighest) {
          value = iteratee(value);
          var low = 0,
              high = array == null ? 0 : array.length,
              valIsNaN = value !== value,
              valIsNull = value === null,
              valIsSymbol = isSymbol(value),
              valIsUndefined = value === undefined;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2),
                computed = iteratee(array[mid]),
                othIsDefined = computed !== undefined,
                othIsNull = computed === null,
                othIsReflexive = computed === computed,
                othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee) {
          var index = -1,
              length = array.length,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result;
        }
        function baseToNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == 'string') {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + '';
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function baseUniq(array, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              length = array.length,
              isCommon = true,
              result = [],
              seen = result;
          if (comparator) {
            isCommon = false;
            includes = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set = iteratee ? null : createSet(array);
            if (set) {
              return setToArray(set);
            }
            isCommon = false;
            includes = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee ? [] : result;
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee) {
                seen.push(computed);
              }
              result.push(value);
            } else if (!includes(seen, computed, comparator)) {
              if (seen !== result) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length,
              index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result = value;
          if (result instanceof LazyWrapper) {
            result = result.value();
          }
          return arrayReduce(actions, function (result, action) {
            return action.func.apply(action.thisArg, arrayPush([result], action.args));
          }, result);
        }
        function baseXor(arrays, iteratee, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1,
              result = Array(length);
          while (++index < length) {
            var array = arrays[index],
                othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result, 1), iteratee, comparator);
        }
        function baseZipObject(props, values, assignFunc) {
          var index = -1,
              length = props.length,
              valsLength = values.length,
              result = {};
          while (++index < length) {
            var value = index < valsLength ? values[index] : undefined;
            assignFunc(result, props[index], value);
          }
          return result;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == 'function' ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function (id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length,
              result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result);
          return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result).set(new Uint8Array(arrayBuffer));
          return result;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result.lastIndex = regexp.lastIndex;
          return result;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined,
                valIsNull = value === null,
                valIsReflexive = value === value,
                valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined,
                othIsNull = other === null,
                othIsReflexive = other === other,
                othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1,
              objCriteria = object.criteria,
              othCriteria = other.criteria,
              length = objCriteria.length,
              ordersLength = orders.length;
          while (++index < length) {
            var result = compareAscending(objCriteria[index], othCriteria[index]);
            if (result) {
              if (index >= ordersLength) {
                return result;
              }
              var order = orders[index];
              return result * (order == 'desc' ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersLength = holders.length,
              leftIndex = -1,
              leftLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(leftLength + rangeLength),
              isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result[leftIndex++] = args[argsIndex++];
          }
          return result;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersIndex = -1,
              holdersLength = holders.length,
              rightIndex = -1,
              rightLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(rangeLength + rightLength),
              isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result;
        }
        function copyArray(source, array) {
          var index = -1,
              length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1,
              length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
            if (newValue === undefined) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function (collection, iteratee) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator,
                accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function (object, sources) {
            var index = -1,
                length = sources.length,
                customizer = length > 1 ? sources[length - 1] : undefined,
                guard = length > 2 ? sources[2] : undefined;
            customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function (collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function (object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG,
              Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function (string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function (string) {
            return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
          };
        }
        function createCtor(Ctor) {
          return function () {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype),
                result = Ctor.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length,
                placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function (collection, predicate, fromIndex) {
            var iterable = Object(collection);
            if (!isArrayLike(collection)) {
              var iteratee = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function (key) {
                return iteratee(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function (funcs) {
            var length = funcs.length,
                index = length,
                prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func),
                  data = funcName == 'wrapper' ? getData(func) : undefined;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function () {
              var args = arguments,
                  value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index = 0,
                  result = length ? funcs[index].apply(this, args) : value;
              while (++index < length) {
                result = funcs[index].call(this, result);
              }
              return result;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG,
              isBind = bitmask & WRAP_BIND_FLAG,
              isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
              isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
              isFlip = bitmask & WRAP_FLIP_FLAG,
              Ctor = isBindKey ? undefined : createCtor(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper),
                  holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
            }
            var thisBinding = isBind ? thisArg : this,
                fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary < length) {
              args.length = ary;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function (object, iteratee) {
            return baseInverter(object, setter, toIteratee(iteratee), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function (value, other) {
            var result;
            if (value === undefined && other === undefined) {
              return defaultValue;
            }
            if (value !== undefined) {
              result = value;
            }
            if (other !== undefined) {
              if (result === undefined) {
                return other;
              }
              if (typeof value == 'string' || typeof other == 'string') {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result = operator(value, other);
            }
            return result;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function (iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function (args) {
              var thisArg = this;
              return arrayFunc(iteratees, function (iteratee) {
                return apply(iteratee, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined ? ' ' : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG,
              Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1,
                argsLength = arguments.length,
                leftIndex = -1,
                leftLength = partials.length,
                args = Array(leftLength + argsLength),
                fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function (start, end, step) {
            if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
              end = step = undefined;
            }
            start = toFinite(start);
            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function (value, other) {
            if (!(typeof value == 'string' && typeof other == 'string')) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG,
              newHolders = isCurry ? holders : undefined,
              newHoldersRight = isCurry ? undefined : holders,
              newPartials = isCurry ? partials : undefined,
              newPartialsRight = isCurry ? undefined : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
          var result = wrapFunc.apply(undefined, newData);
          if (isLaziable(func)) {
            setData(result, newData);
          }
          result.placeholder = placeholder;
          return setWrapToString(result, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function (number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision) {
              var pair = (toString(number) + 'e').split('e'),
                  value = func(pair[0] + 'e' + (+pair[1] + precision));
              pair = (toString(value) + 'e').split('e');
              return +(pair[0] + 'e' + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
          return new Set(values);
        };
        function createToPairs(keysFunc) {
          return function (object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
          }
          ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
          arity = arity === undefined ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials,
                holdersRight = holders;
            partials = holders = undefined;
          }
          var data = isBindKey ? undefined : getData(func);
          var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result = createPartial(func, bitmask, thisArg, partials);
          } else {
            result = createHybrid.apply(undefined, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
            stack['delete'](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
              arrLength = array.length,
              othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var stacked = stack.get(array);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var index = -1,
              result = true,
              seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function (othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result = false;
              break;
            }
          }
          stack['delete'](array);
          stack['delete'](other);
          return result;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + '';
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack['delete'](object);
              return result;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
              objProps = getAllKeys(object),
              objLength = objProps.length,
              othProps = getAllKeys(other),
              othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var stacked = stack.get(object);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == 'constructor');
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;
            if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack['delete'](object);
          stack['delete'](other);
          return result;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined, flatten), func + '');
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function (func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result = func.name + '',
              array = realNames[result],
              length = hasOwnProperty.call(realNames, result) ? array.length : 0;
          while (length--) {
            var data = array[length],
                otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result = lodash.iteratee || iteratee;
          result = result === iteratee ? baseIteratee : result;
          return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }
        function getMatchData(object) {
          var result = keys(object),
              length = result.length;
          while (length--) {
            var key = result[length],
                value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
          }
          return result;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined;
            var unmasked = true;
          } catch (e) {}
          var result = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
          if (object == null) {
            return [];
          }
          object = Object(object);
          return arrayFilter(nativeGetSymbols(object), function (symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
          var result = [];
          while (object) {
            arrayPush(result, getSymbols(object));
            object = getPrototype(object);
          }
          return result;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function (value) {
            var result = baseGetTag(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : '';
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        function getView(start, end, transforms) {
          var index = -1,
              length = transforms.length;
          while (++index < length) {
            var data = transforms[index],
                size = data.size;
            switch (data.type) {
              case 'drop':
                start += size;
                break;
              case 'dropRight':
                end -= size;
                break;
              case 'take':
                end = nativeMin(end, start + size);
                break;
              case 'takeRight':
                start = nativeMax(start, end - size);
                break;
            }
          }
          return {
            'start': start,
            'end': end
          };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1,
              length = path.length,
              result = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result || ++index != length) {
            return result;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length,
              result = new array.constructor(length);
          if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
          }
          return result;
        }
        function initCloneObject(object) {
          return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
          details = details.join(length > 2 ? ', ' : ' ');
          return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func),
              other = lodash[funcName];
          if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function (object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
          };
        }
        function memoizeCapped(func) {
          var result = memoize(func, function (key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result.cache;
          return result;
        }
        function mergeData(data, source) {
          var bitmask = data[1],
              srcBitmask = source[1],
              newBitmask = bitmask | srcBitmask,
              isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result = [];
          if (object != null) {
            for (var key in Object(object)) {
              result.push(key);
            }
          }
          return result;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function () {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length,
              length = nativeMin(indexes.length, arrLength),
              oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
          }
          return array;
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function (func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + '';
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0,
              lastCalled = 0;
          return function () {
            var stamp = nativeNow(),
                remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined, arguments);
          };
        }
        function shuffleSelf(array, size) {
          var index = -1,
              length = array.length,
              lastIndex = length - 1;
          size = size === undefined ? length : size;
          while (++index < size) {
            var rand = baseRandom(index, lastIndex),
                value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size;
          return array;
        }
        var stringToPath = memoizeCapped(function (string) {
          var result = [];
          if (string.charCodeAt(0) === 46) {
            result.push('');
          }
          string.replace(rePropName, function (match, number, quote, subString) {
            result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
          });
          return result;
        });
        function toKey(value) {
          if (typeof value == 'string' || isSymbol(value)) {
            return value;
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function (pair) {
            var value = '_.' + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result.__actions__ = copyArray(wrapper.__actions__);
          result.__index__ = wrapper.__index__;
          result.__values__ = wrapper.__values__;
          return result;
        }
        function chunk(array, size, guard) {
          if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
            size = 1;
          } else {
            size = nativeMax(toInteger(size), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size < 1) {
            return [];
          }
          var index = 0,
              resIndex = 0,
              result = Array(nativeCeil(length / size));
          while (index < length) {
            result[resIndex++] = baseSlice(array, index, index += size);
          }
          return result;
        }
        function compact(array) {
          var index = -1,
              length = array == null ? 0 : array.length,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array(length - 1),
              array = arguments[0],
              index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function (array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function (array, values) {
          var iteratee = last(values);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
        });
        var differenceWith = baseRest(function (array, values) {
          var comparator = last(values);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1,
              length = pairs == null ? 0 : pairs.length,
              result = {};
          while (++index < length) {
            var pair = pairs[index];
            result[pair[0]] = pair[1];
          }
          return result;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function (arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function (arrays) {
          var iteratee = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee === last(mapped)) {
            iteratee = undefined;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
        });
        var intersectionWith = baseRest(function (arrays) {
          var comparator = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == 'function' ? comparator : undefined;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? '' : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values) {
          return array && array.length && values && values.length ? basePullAll(array, values) : array;
        }
        function pullAllBy(array, values, iteratee) {
          return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
        }
        function pullAllWith(array, values, comparator) {
          return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
        }
        var pullAt = flatRest(function (array, indexes) {
          var length = array == null ? 0 : array.length,
              result = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function (index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result;
        });
        function remove(array, predicate) {
          var result = [];
          if (!(array && array.length)) {
            return result;
          }
          var index = -1,
              indexes = [],
              length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function (arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function (arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
        });
        var unionWith = baseRest(function (arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == 'function' ? comparator : undefined;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == 'function' ? comparator : undefined;
          return array && array.length ? baseUniq(array, undefined, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function (group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function (index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee) {
          if (!(array && array.length)) {
            return [];
          }
          var result = unzip(array);
          if (iteratee == null) {
            return result;
          }
          return arrayMap(result, function (group) {
            return apply(iteratee, undefined, group);
          });
        }
        var without = baseRest(function (array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        var xor = baseRest(function (arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function (arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
        });
        var xorWith = baseRest(function (arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == 'function' ? comparator : undefined;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values) {
          return baseZipObject(props || [], values || [], assignValue);
        }
        function zipObjectDeep(props, values) {
          return baseZipObject(props || [], values || [], baseSet);
        }
        var zipWith = baseRest(function (arrays) {
          var length = arrays.length,
              iteratee = length > 1 ? arrays[length - 1] : undefined;
          iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
          return unzipWith(arrays, iteratee);
        });
        function chain(value) {
          var result = lodash(value);
          result.__chain__ = true;
          return result;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function (paths) {
          var length = paths.length,
              start = length ? paths[0] : 0,
              value = this.__wrapped__,
              interceptor = function (object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
          });
          return new LodashWrapper(value, this.__chain__).thru(function (array) {
            if (length && !array.length) {
              array.push(undefined);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length,
              value = done ? undefined : this.__values__[this.__index__++];
          return {
            'done': done,
            'value': value
          };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result,
              parent = this;
          while (parent instanceof baseLodash) {
            var clone = wrapperClone(parent);
            clone.__index__ = 0;
            clone.__values__ = undefined;
            if (result) {
              previous.__wrapped__ = clone;
            } else {
              result = clone;
            }
            var previous = clone;
            parent = parent.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              'func': thru,
              'args': [reverse],
              'thisArg': undefined
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function (result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            ++result[key];
          } else {
            baseAssignValue(result, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), 1);
        }
        function flatMapDeep(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), INFINITY);
        }
        function flatMapDepth(collection, iteratee, depth) {
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee), depth);
        }
        function forEach(collection, iteratee) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee, 3));
        }
        function forEachRight(collection, iteratee) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee, 3));
        }
        var groupBy = createAggregator(function (result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            result[key].push(value);
          } else {
            baseAssignValue(result, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function (collection, path, args) {
          var index = -1,
              isFunc = typeof path == 'function',
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function (value) {
            result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result;
        });
        var keyBy = createAggregator(function (result, value, key) {
          baseAssignValue(result, key, value);
        });
        function map(collection, iteratee) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function (result, value, key) {
          result[key ? 0 : 1].push(value);
        }, function () {
          return [[], []];
        });
        function reduce(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function (collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function () {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function () {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
          var result;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function () {
            if (--n > 0) {
              result = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined;
            }
            return result;
          };
        }
        var bind = baseRest(function (func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function (object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curry.placeholder;
          return result;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curryRight.placeholder;
          return result;
        }
        function debounce(func, wait, options) {
          var lastArgs,
              lastThis,
              maxWait,
              result,
              timerId,
              lastCallTime,
              lastInvokeTime = 0,
              leading = false,
              maxing = false,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = 'maxWait' in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs,
                thisArg = lastThis;
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
          }
          function cancel() {
            if (timerId !== undefined) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
          }
          function flush() {
            return timerId === undefined ? result : trailingEdge(now());
          }
          function debounced() {
            var time = now(),
                isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function (func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function (func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function () {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result) || cache;
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function () {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function (func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function (args) {
            var index = -1,
                length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function (func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
        });
        var partialRight = baseRest(function (func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        var rearg = flatRest(function (func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
        });
        function rest(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function (args) {
            var array = args[start],
                otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            'leading': leading,
            'maxWait': wait,
            'trailing': trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function (value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function () {
          return arguments;
        }()) ? baseIsArguments : function (value) {
          return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
        };
        var isArray = Array.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          var result = customizer ? customizer(value, other) : undefined;
          return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == 'number' && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == 'number' && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == 'object' || type == 'function');
        }
        function isObjectLike(value) {
          return value != null && typeof value == 'object';
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
          return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function (value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value),
              func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result = toFinite(value),
              remainder = result % 1;
          return result === result ? remainder ? result - remainder : result : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? other + '' : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? '' : baseToString(value);
        }
        var assign = createAssigner(function (object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function (object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function (object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result = baseCreate(prototype);
          return properties == null ? result : baseAssign(result, properties);
        }
        var defaults = baseRest(function (object, sources) {
          object = Object(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function (args) {
          args.push(undefined, customDefaultsMerge);
          return apply(mergeWith, undefined, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee) {
          return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        function forInRight(object, iteratee) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        function forOwn(object, iteratee) {
          return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        function forOwnRight(object, iteratee) {
          return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function (result, value, key) {
          if (value != null && typeof value.toString != 'function') {
            value = nativeObjectToString.call(value);
          }
          result[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function (result, value, key) {
          if (value != null && typeof value.toString != 'function') {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function (value, key, object) {
            baseAssignValue(result, iteratee(value, key, object), value);
          });
          return result;
        }
        function mapValues(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function (value, key, object) {
            baseAssignValue(result, key, iteratee(value, key, object));
          });
          return result;
        }
        var merge = createAssigner(function (object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function (object, paths) {
          var result = {};
          if (object == null) {
            return result;
          }
          var isDeep = false;
          paths = arrayMap(paths, function (path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result);
          if (isDeep) {
            result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result, paths[length]);
          }
          return result;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function (object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function (prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function (value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1,
              length = path.length;
          if (!length) {
            length = 1;
            object = undefined;
          }
          while (++index < length) {
            var value = object == null ? undefined : object[toKey(path[index])];
            if (value === undefined) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee, accumulator) {
          var isArr = isArray(object),
              isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee = getIteratee(iteratee, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
            return iteratee(accumulator, value, index, object);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined) {
            upper = lower;
            lower = undefined;
          }
          if (upper !== undefined) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined;
          }
          if (floating === undefined) {
            if (typeof upper == 'boolean') {
              floating = upper;
              upper = undefined;
            } else if (typeof lower == 'boolean') {
              floating = lower;
              lower = undefined;
            }
          }
          if (lower === undefined && upper === undefined) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function (result, word, index) {
          word = word.toLowerCase();
          return result + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        var kebabCase = createCompounder(function (result, word, index) {
          return result + (index ? '-' : '') + word.toLowerCase();
        });
        var lowerCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst('toLowerCase');
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments,
              string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function (result, word, index) {
          return result + (index ? '_' : '') + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined;
          }
          limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
              importsKeys = keys(imports),
              importsValues = baseValues(imports, importsKeys);
          var isEscaping,
              isEvaluating,
              index = 0,
              interpolate = options.interpolate || reNoMatch,
              source = "__p += '";
          var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
          var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
          string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = options.variable;
          if (!variable) {
            source = 'with (obj) {\n' + source + '\n}\n';
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
          source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
          var result = attempt(function () {
            return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
          });
          result.source = source;
          if (isError(result)) {
            throw result;
          }
          return result;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrim, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              chrSymbols = stringToArray(chars),
              start = charsStartIndex(strSymbols, chrSymbols),
              end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join('');
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimEnd, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join('');
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimStart, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join('');
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH,
              omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = 'separator' in options ? options.separator : separator;
            length = 'length' in options ? toInteger(options.length) : length;
            omission = 'omission' in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
          if (separator === undefined) {
            return result + omission;
          }
          if (strSymbols) {
            end += result.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match,
                  substring = result;
              if (!separator.global) {
                separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result = result.slice(0, newEnd === undefined ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result.lastIndexOf(separator);
            if (index > -1) {
              result = result.slice(0, index);
            }
          }
          return result + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function (result, word, index) {
          return result + (index ? ' ' : '') + word.toUpperCase();
        });
        var upperFirst = createCaseFirst('toUpperCase');
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;
          if (pattern === undefined) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function (func, args) {
          try {
            return apply(func, undefined, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = flatRest(function (object, methodNames) {
          arrayEach(methodNames, function (key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length,
              toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function (pair) {
            if (typeof pair[1] != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function (args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function () {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function (path, args) {
          return function (object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function (object, args) {
          return function (path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source),
              methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
              isFunc = isFunction(object);
          arrayEach(methodNames, function (methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function () {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__),
                      actions = result.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    'func': func,
                    'args': arguments,
                    'thisArg': object
                  });
                  result.__chain__ = chainAll;
                  return result;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {}
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function (args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function (path) {
            return object == null ? undefined : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return '';
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH,
              length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee = getIteratee(iteratee);
          n -= MAX_ARRAY_LENGTH;
          var result = baseTimes(length, iteratee);
          while (++index < n) {
            iteratee(index);
          }
          return result;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function (augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound('ceil');
        var divide = createMathOperation(function (dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound('floor');
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
        }
        function maxBy(array, iteratee) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee) {
          return baseMean(array, getIteratee(iteratee, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
        }
        function minBy(array, iteratee) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
        }
        var multiply = createMathOperation(function (multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound('round');
        var subtract = createMathOperation(function (minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee) {
          return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function () {
          var source = {};
          baseForOwn(lodash, function (func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { 'chain': false });
        lodash.VERSION = VERSION;
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(['drop', 'take'], function (methodName, index) {
          LazyWrapper.prototype[methodName] = function (n) {
            n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
            var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result.__filtered__) {
              result.__takeCount__ = nativeMin(n, result.__takeCount__);
            } else {
              result.__views__.push({
                'size': nativeMin(n, MAX_ARRAY_LENGTH),
                'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
              });
            }
            return result;
          };
          LazyWrapper.prototype[methodName + 'Right'] = function (n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(['filter', 'map', 'takeWhile'], function (methodName, index) {
          var type = index + 1,
              isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function (iteratee) {
            var result = this.clone();
            result.__iteratees__.push({
              'iteratee': getIteratee(iteratee, 3),
              'type': type
            });
            result.__filtered__ = result.__filtered__ || isFilter;
            return result;
          };
        });
        arrayEach(['head', 'last'], function (methodName, index) {
          var takeName = 'take' + (index ? 'Right' : '');
          LazyWrapper.prototype[methodName] = function () {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(['initial', 'tail'], function (methodName, index) {
          var dropName = 'drop' + (index ? '' : 'Right');
          LazyWrapper.prototype[methodName] = function () {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function () {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function (predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function (predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {
          if (typeof path == 'function') {
            return new LazyWrapper(this);
          }
          return this.map(function (value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function (predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function (start, end) {
          start = toInteger(start);
          var result = this;
          if (result.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result);
          }
          if (start < 0) {
            result = result.takeRight(-start);
          } else if (start) {
            result = result.drop(start);
          }
          if (end !== undefined) {
            end = toInteger(end);
            result = end < 0 ? result.dropRight(-end) : result.take(end - start);
          }
          return result;
        };
        LazyWrapper.prototype.takeRightWhile = function (predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function () {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
              isTaker = /^(?:head|last)$/.test(methodName),
              lodashFunc = lodash[isTaker ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName],
              retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function () {
            var value = this.__wrapped__,
                args = isTaker ? [1] : arguments,
                isLazy = value instanceof LazyWrapper,
                iteratee = args[0],
                useLazy = isLazy || isArray(value);
            var interceptor = function (value) {
              var result = lodashFunc.apply(lodash, arrayPush([value], args));
              return isTaker && chainAll ? result[0] : result;
            };
            if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__,
                isHybrid = !!this.__actions__.length,
                isUnwrapped = retUnwrapped && !chainAll,
                onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result = func.apply(value, args);
              result.__actions__.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': undefined
              });
              return new LodashWrapper(result, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
          };
        });
        arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (methodName) {
          var func = arrayProto[methodName],
              chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
              retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function () {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function (value) {
              return func.apply(isArray(value) ? value : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + '',
                names = realNames[key] || (realNames[key] = []);
            names.push({
              'name': methodName,
              'func': lodashFunc
            });
          }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
          'name': 'wrapper',
          'func': undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _ = runInContext();
      if (typeof undefined == 'function' && typeof define.amd == 'object' && define.amd) {
        root._ = _;
        define(function () {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(this);
  })($__require('@empty').Buffer, $__require('@empty'));
});
$__System.registerDynamic("npm:lodash@4.17.5.js", ["npm:lodash@4.17.5/lodash.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:lodash@4.17.5/lodash.js");
});
$__System.registerDynamic("github:ElliotNB/observable-slim@master/observable-slim.js", [], false, function ($__require, $__exports, $__module) {
	var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

	(function ($__global) {
		var ObservableSlim = $__global["ObservableSlim"];
		/*
   * 	Observable Slim
   *	Version 0.0.1
   * 	https://github.com/elliotnb/observable-slim
   *
   * 	Licensed under the MIT license:
   * 	http://www.opensource.org/licenses/MIT
   *
   *	Observable Slim is a singleton that allows you to observe changes made to an object and any nested
   *	children of that object. It is intended to assist with one-way data binding, that is, in MVC parlance, 
   *	reflecting changes in the model to the view. Observable Slim aspires to be as lightweight and easily
   *	understood as possible. Minifies down to roughly 1500 characters.
   *	Usage:
   *	
   *		var test = {};
   *		var p = ObservableSlim.create(test, true, function(changes) {
   *			console.log(JSON.stringify(changes));
   *		});
   *		
   *		p.hello = "world";  		// [{"type":"add","target":{"hello":"world"},"property":"hello","newValue":"world","currentPath":"hello"}]
   *		p.testing = {}; 			// [{"type":"add","target":{"hello":"world","testing":{}},"property":"testing","newValue":{},"currentPath":"testing"}]
   *		p.testing.blah = 42;		// [{"type":"add","target":{"blah":42},"property":"blah","newValue":42,"currentPath":"testing.blah"}]
   *		p.arr = [];					// [{"type":"add","target":{"hello":"world","testing":{"blah":42},"arr":[]},"property":"arr","newValue":[],"currentPath":"arr"}]
   *		p.arr.push("hello world");	// [{"type":"add","target":["hello world"],"property":"0","newValue":"hello world","currentPath":"arr"}]
   *		delete p.hello;				// [{"type":"delete","target":{"testing":{"blah":42},"arr":["hello world"]},"property":"hello","newValue":null,"previousValue":"world","currentPath":"hello"}]
   *		p.arr.splice(0,1);			// [{"type":"delete","target":[],"property":"0","newValue":null,"previousValue":"hello world","currentPath":"arr"},{"type":"update","target":[],"property":"length","newValue":0,"previousValue":1,"currentPath":"arr"}]
   *		console.log(test);			// {"testing":{"blah":42},"arr":[]}
   */
		var ObservableSlim = function () {

			// An array that stores all of the observables created through the public create() method below.
			var observables = [];

			// An array of all the objects that we have assigned Proxies to
			var targets = [];

			// An array of arrays containing the Proxies created for each target object. targetsProxy is index-matched with 
			// 'targets' -- together, the pair offer a Hash table where the key is not a string nor number, but the actual target object
			var targetsProxy = [];

			// this variable tracks duplicate proxies assigned to the same target.
			// the 'set' handler below will trigger the same change on all other Proxies tracking the same target.
			// however, in order to avoid an infinite loop of Proxies triggering and re-triggering one another, we use dupProxy
			// to track that a given Proxy was modified from the 'set' handler
			var dupProxy = null;

			var _getProperty = function (obj, path) {
				return path.split('.').reduce(function (prev, curr) {
					return prev ? prev[curr] : undefined;
				}, obj || self);
			};

			/*	Function: _create
   			Private internal function that is invoked to create a new ES6 Proxy whose changes we can observe through 
   			the Observerable.observe() method.
   		
   		Parameters:
   			target 				- required, plain JavaScript object that we want to observe for changes.
   			domDelay 			- batch up changes on a 10ms delay so a series of changes can be processed in one DOM update.
   			originalObservable 	- object, the original observable created by the user, exists for recursion purposes, 
   								  allows one observable to observe change on any nested/child objects.
   			originalPath 		- string, the path of the property in relation to the target on the original observable, 
   								  exists for recursion purposes, allows one observable to observe change on any nested/child objects.
   								  
   		Returns:
   			An ES6 Proxy object.
   */
			var _create = function (target, domDelay, originalObservable, originalPath) {

				var observable = originalObservable || null;
				var path = originalPath || "";

				var changes = [];

				var _getPath = function (target, property) {
					if (target instanceof Array) {
						return path !== "" ? path : property;
					} else {
						return path !== "" ? path + "." + property : property;
					}
				};

				var _notifyObservers = function (numChanges) {

					// if the observable is paused, then we don't want to execute any of the observer functions
					if (observable.paused === true) return;

					// execute observer functions on a 10ms settimeout, this prevents the observer functions from being executed 
					// separately on every change -- this is necessary because the observer functions will often trigger UI updates
					if (domDelay === true) {
						setTimeout(function () {
							if (numChanges === changes.length) {
								// invoke any functions that are observing changes
								for (var i = 0; i < observable.observers.length; i++) observable.observers[i](changes);
								changes = [];
							}
						}, 10);
					} else {
						// invoke any functions that are observing changes
						for (var i = 0; i < observable.observers.length; i++) observable.observers[i](changes);
						changes = [];
					}
				};

				var handler = {
					get: function (target, property) {

						// implement a simple check for whether or not the object is a proxy, this helps the .create() method avoid
						// creating Proxies of Proxies.
						if (property === "__isProxy") return true;
						if (property === "__getParent") {
							return function (i) {
								if (typeof i === "undefined") var i = 1;
								var parentPath = _getPath(target, "__getParent").split(".");
								parentPath.splice(-(i + 1), i + 1);
								return _getProperty(observable.proxy, parentPath.join("."));
							};
						}

						// if we are traversing into a new object, then we want to record path to that object and return a new observable.
						// recursively returning a new observable allows us a single Observable.observe() to monitor all changes on 
						// the target object and any objects nested within.
						if (target[property] !== null && typeof target[property] === "object") {

							// if we've previously setup a proxy on this target, then...
							var a = targets.indexOf(target[property]);
							if (a > -1) {
								var b = targetsProxy[a].length;
								// loop through the proxies we've already created, if a given observable has already created the same proxy
								// for the same target object, then we can return that proxy (we don't need to create a new proxy).
								while (b--) if (targetsProxy[a][b].observable === observable) return targetsProxy[a][b].proxy;
							}

							// if we're arrived here, then that means there is no proxy for the object the user just accessed, so we
							// have to create a new proxy for it
							var newPath = path !== "" ? path + "." + property : property;
							return _create(target[property], domDelay, observable, newPath);
						} else {
							return target[property];
						}
					},
					deleteProperty: function (target, property) {

						// was this change an original change or was it a change that was re-triggered below
						var originalChange = true;
						if (dupProxy === proxy) {
							originalChange = false;
							dupProxy = null;
						}

						// in order to report what the previous value was, we must make a copy of it before it is deleted
						var previousValue = Object.assign({}, target);

						// get the path of the property being deleted
						var currentPath = _getPath(target, property);

						// record the deletion that just took place
						changes.push({ "type": "delete", "target": target, "property": property, "newValue": null, "previousValue": previousValue[property], "currentPath": currentPath, "proxy": proxy });

						if (originalChange === true) {

							// if we have already setup a proxy on this target, then...
							var a = targets.indexOf(target);
							if (a > -1) {

								// loop over each proxy and see if the target for this change has any other proxies
								var b = targetsProxy[a].length;
								while (b--) {
									// if the same target has a different proxy
									if (targetsProxy[a][b].proxy !== proxy) {
										// !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
										// prevent a change on dupProxy from re-triggering the same change on other proxies)
										dupProxy = targetsProxy[a][b].proxy;

										// make the same delete on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
										// on any other proxies so that the previousValue can show up correct for the other proxies
										delete targetsProxy[a][b].proxy[property];
									}
								}
							}

							// perform the delete that we've trapped
							delete target[property];
						}

						_notifyObservers(changes.length);

						return true;
					},
					set: function (target, property, value, receiver) {

						// was this change an original change or was it a change that was re-triggered below
						var originalChange = true;
						if (dupProxy === proxy) {
							originalChange = false;
							dupProxy = null;
						}

						// only record a change if the new value differs from the old one OR if this proxy was not the original proxy to receive the change
						if (target[property] !== value || originalChange === false) {

							// get the path of the object property being modified
							var currentPath = _getPath(target, property);

							// determine if we're adding something new or modifying somethat that already existed
							var type = "update";
							if (typeof receiver[property] === "undefined") type = "add";

							// store the change that just occurred. it is important that we store the change before invoking the other proxies so that the previousValue is correct
							changes.push({ "type": type, "target": target, "property": property, "newValue": value, "previousValue": receiver[property], "currentPath": currentPath, "proxy": proxy });

							// !!IMPORTANT!! if this proxy was the first proxy to receive the change, then we need to go check and see
							// if there are other proxies for the same project. if there are, then we will modify those proxies as well so the other
							// observers can be modified of the change that has occurred.
							if (originalChange === true) {

								// if we have already setup a proxy on this target, then...
								var a = targets.indexOf(target);
								if (a > -1) {

									// loop over each proxy and see if the target for this change has any other proxies
									var b = targetsProxy[a].length;
									while (b--) {
										// if the same target has a different proxy
										if (targetsProxy[a][b].proxy !== proxy) {

											// !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
											// prevent a change on dupProxy from re-triggering the same change on other proxies)
											dupProxy = targetsProxy[a][b].proxy;

											// invoke the same change on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
											// on any other proxies so that the previousValue can show up correct for the other proxies
											targetsProxy[a][b].proxy[property] = value;
										}
									}
								};

								// because the value actually differs than the previous value
								// we need to store the new value on the original target object
								target[property] = value;

								// if an object was just assigned to a property on the target, then we need to iterate through that object
								// so all portions of it are observed
								if (typeof value == "object") {
									(function iterate(obj) {
										for (var property in obj) {
											if (obj.hasOwnProperty(property)) {
												if (obj[property] !== null && typeof obj[property] === "object") iterate(obj[property]);
											}
										}
									})(proxy[property]);
								}
							};

							// notify the observer functions that the target has been modified
							_notifyObservers(changes.length);
						}
						return true;
					}

					// create the proxy that we'll use to observe any changes
				};var proxy = new Proxy(target, handler);

				// we don't want to create a new observable if this function was invoked recursively
				if (observable === null) {
					observable = { "target": target, "domDelay": domDelay, "proxy": proxy, "observers": [], "paused": false, "path": path };
					observables.push(observable);
				}

				// store the proxy we've created so it isn't re-created unnecessairly via get handler
				var proxyItem = { "target": target, "proxy": proxy, "observable": observable };

				var i = targets.indexOf(target);

				// if we have already created a Proxy for this target object then we add it to the corresponding array 
				// on targetsProxy (targets and targetsProxy work together as a Hash table indexed by the actual target object).
				if (i > -1) {
					targetsProxy[i].push(proxyItem);
					// else this is a target object that we have not yet created a Proxy for, so we must add it to targets,
					// and push a new array on to targetsProxy containing the new Proxy
				} else {
					targets.push(target);
					targetsProxy.push([proxyItem]);
				}

				return proxy;
			};

			return {
				/*	Method:
    		Public method that is invoked to create a new ES6 Proxy whose changes we can observe 
    		through the Observerable.observe() method.
    	
    	Parameters
    		target - Object, required, plain JavaScript object that we want to observe for changes.
    		domDelay - Boolean, required, if true, then batch up changes on a 10ms delay so a series of changes can be processed in one DOM update.
    		observer - Function, optional, will be invoked when a change is made to the proxy.
    	
    	Returns:
    		An ES6 Proxy object.
    */
				create: function (target, domDelay, observer) {

					// test if the target is a Proxy, if it is, then we should throw an error. we do not allow creating proxies of proxies
					// because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
					if (target.__isProxy === true) throw new Error("ObservableSlim.create() cannot create a Proxy for a target object that is also a Proxy.");

					// fire off the _create() method -- it will create a new observable and proxy and return the proxy
					var proxy = _create(target, domDelay);

					// assign the observer function
					if (typeof observer === "function") this.observe(proxy, observer);

					// initialize Proxies recursively through the object. the Proxy 'get' handler returns a Proxy whenever a nested object is accessed
					(function iterate(obj) {
						for (var property in obj) {
							if (obj.hasOwnProperty(property)) {
								if (obj[property] !== null && typeof obj[property] === "object") iterate(obj[property]);
							}
						}
					})(proxy);

					return proxy;
				},

				/*	Method: observe
    		This method is used to add a new observer function to an existing proxy.
    
    	Parameters:
    		proxy 	- the ES6 Proxy returned by the create() method. We want to observe changes made to this object.
    		observer 	- this function will be invoked when a change is made to the observable (not to be confused with the 
    					  observer defined in the create() method).
    	
    	Returns:
    		Nothing.
    */
				observe: function (proxy, observer) {
					// loop over all the observables created by the _create() function
					var i = observables.length;
					while (i--) {
						if (observables[i].proxy === proxy) {
							observables[i].observers.push(observer);
							break;
						}
					};
				},

				/*	Method: pause
    		This method will prevent any observer functions from being invoked when a change occurs to a proxy.
    	
    	Parameters:
    		proxy 	- the ES6 Proxy returned by the create() method.
    */
				pause: function (proxy) {
					var i = observables.length;
					var foundMatch = false;
					while (i--) {
						if (observables[i].proxy === proxy) {
							observables[i].paused = true;
							foundMatch = true;
							break;
						}
					};

					if (foundMatch == false) throw new Error("ObseravableSlim could not pause observable -- matching proxy not found.");
				},

				/*	Method: resume
    		This method will resume execution of any observer functions when a change is made to a proxy.
    	
    	Parameters:
    		proxy 	- the ES6 Proxy returned by the create() method.
    */
				resume: function (proxy) {
					var i = observables.length;
					var foundMatch = false;
					while (i--) {
						if (observables[i].proxy === proxy) {
							observables[i].paused = false;
							foundMatch = true;
							break;
						}
					};

					if (foundMatch == false) throw new Error("ObseravableSlim could not resume observable -- matching proxy not found.");
				},

				/*	Method: remove
    		This method will remove the observable and proxy thereby preventing any further callback observers for 
    		changes occuring to the target object.
    	
    	Parameters:
    		proxy 	- the ES6 Proxy returned by the create() method.
    */
				remove: function (proxy) {

					var matchedObservable = null;
					var foundMatch = false;

					var c = observables.length;
					while (c--) {
						if (observables[c].proxy === proxy) {
							matchedObservable = observables[c];
							foundMatch = true;
							break;
						}
					};

					var a = targetsProxy.length;
					while (a--) {
						var b = targetsProxy[a].length;
						while (b--) {
							if (targetsProxy[a][b].observable === matchedObservable) {
								targetsProxy[a].splice(b, 1);
								if (targetsProxy[a].length == 0) {
									targetsProxy.splice(a, 1);
									targets.splice(a, 1);
								};
							}
						};
					};

					if (foundMatch === true) {
						observables.splice(c, 1);
					}
				}
			};
		}();
		$__global["ObservableSlim"] = ObservableSlim;
	})(this);

	return _retrieveGlobal();
});
$__System.registerDynamic("github:ElliotNB/observable-slim@master.js", ["github:ElliotNB/observable-slim@master/observable-slim.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:ElliotNB/observable-slim@master/observable-slim.js");
});
$__System.register('lib/featured-component.js', ['github:components/jquery@1.11.3.js', 'lib/constants.js', 'helpers/helpers.js', 'lib/dynamic-view.js', 'npm:lodash@4.17.5.js', 'github:ElliotNB/observable-slim@master.js'], function (_export) {
    'use strict';

    var $, Constants, Helpers, DynamicView, _, ObservableSlim, FeaturedComponent;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_constants) {
            Constants = _constants.Constants;
        }, function (_helpersHelpers) {
            Helpers = _helpersHelpers.Helpers;
        }, function (_dynamicView) {
            DynamicView = _dynamicView.DynamicView;
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_observableSlim) {
            ObservableSlim = _observableSlim['default'];
        }],
        execute: function () {
            FeaturedComponent = function () {
                function FeaturedComponent(el, options) {
                    _classCallCheck(this, FeaturedComponent);

                    this.$el = $(el);
                    this._id = this.constructor.name + '-' + Helpers.Strings.random(4);

                    if (typeof this.configure === 'function') {
                        this.configure(options, this.$el);
                    }

                    this._childElements = this._createChildElements(this.$el);

                    this._data = {};

                    this._dynamicPartials = new Set();

                    this._notifications = this._initNotifications();

                    this._bindThisToHandlers();
                }

                _createClass(FeaturedComponent, [{
                    key: '_createDynamicPartial',
                    value: function _createDynamicPartial() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? { templateFn: templateFn, $container: $container, vm: { data: data, proxy: proxy, handlers: handlers }, data: data, proxy: proxy, handlers: handlers, callback: callback } : arguments[0];
                        return function () {
                            if (Object.is(options, undefined)) {
                                console.error('options params is not provided');
                                return undefined;
                            }
                            if (Object.is(options.templateFn, undefined)) {
                                console.error('to initialise an dynamic partial, a template function is necessary ');
                                return undefined;
                            }

                            var id = this._id + '-' + Helpers.Strings.random(4);
                            var $container = options.$container || this.$el;
                            var view = undefined,
                                vm = undefined,
                                data = undefined,
                                handlers = undefined,
                                proxy = undefined,
                                partial = undefined;

                            var callback = options.callback || function (changes) {
                                if (view) {
                                    view.render();
                                }
                            };

                            if (Object.is(options.vm, undefined)) {
                                data = options.data || this._data;
                                handlers = options.handlers || this._createDefaultViewHandlers();
                                proxy = options.proxy || this._createProxy(data, options.callback || callback);
                                vm = this._createViewModel({ data: data, proxy: proxy, handlers: handlers, id: id });
                            } else {
                                vm = options.vm;
                            }

                            view = this._createDynamicView({ templateFn: options.templateFn, $container: $container, vm: vm, id: id });
                            partial = { id: id, view: view, vm: vm, $container: $container, callback: callback };

                            this._dynamicPartials.add(partial);

                            return partial;
                        }.apply(this, arguments);
                    }
                }, {
                    key: '_createDefaultViewHandlers',
                    value: function _createDefaultViewHandlers() {
                        var _this = this;

                        return new Proxy({}, {
                            get: function get(target, property, receiver) {
                                if (!_this._validateHandlerProperty(property)) {
                                    console.error("a view handler shouldn't be a private function or compnent destroy function");
                                    return undefined;
                                }
                                return _this[property];
                            }
                        });
                    }
                }, {
                    key: '_createDynamicView',
                    value: function _createDynamicView(_ref) {
                        var templateFn = _ref.templateFn;
                        var _ref$$container = _ref.$container;
                        var $container = _ref$$container === undefined ? this.$el : _ref$$container;
                        var vm = _ref.vm;
                        var id = _ref.id;

                        return new DynamicView({ templateFn: templateFn, $container: $container, vm: vm, id: id });
                    }
                }, {
                    key: '_createViewModel',
                    value: function _createViewModel() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? { data: data, proxy: proxy, handlers: handlers, id: id } : arguments[0];

                        return {
                            id: options.id ? options.id + '-vm' : 'vm-' + Helpers.Strings.random(8),
                            data: options.data,
                            proxy: options.proxy,
                            handlers: options.handlers
                        };
                    }
                }, {
                    key: '_createProxy',
                    value: function _createProxy(data, callback) {
                        return ObservableSlim.create(data, true, callback);
                    }
                }, {
                    key: '_createChildElements',
                    value: function _createChildElements(candidate) {
                        return new Proxy(candidate, {
                            get: function get(target, property, receiver) {
                                return Helpers.Element.get(property, target);
                            }
                        });
                    }
                }, {
                    key: '_getElement',
                    value: function _getElement(name) {
                        var attribute = arguments.length <= 1 || arguments[1] === undefined ? Constants.ELEMENT_PROPERTY : arguments[1];

                        return Helpers.Element.get(name, this.$el, { attribute: attribute });
                    }
                }, {
                    key: '_listElements',
                    value: function _listElements(name) {
                        var attribute = arguments.length <= 1 || arguments[1] === undefined ? Constants.ELEMENT_PROPERTY : arguments[1];

                        return Helpers.Element.listElements(name, this.$el, { attribute: attribute });
                    }
                }, {
                    key: '_bindThisToHandlers',
                    value: function _bindThisToHandlers() {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = Object.getOwnPropertyNames(Object.getPrototypeOf(this))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var _name = _step.value;

                                var method = this[_name];

                                if (!(method instanceof Function) || method === this || !this._validateHandlerProperty(_name)) {
                                    continue;
                                }
                                this[_name] = this[_name].bind(this);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }, {
                    key: '_validateHandlerProperty',
                    value: function _validateHandlerProperty(property) {
                        var excludedNames = ["destroy", "on", "off", "configure"];
                        return !(property.startsWith("_") || typeof this[property] !== "function" || !Object.is(excludedNames.find(function (name) {
                            return name === property;
                        }), undefined));
                    }
                }, {
                    key: '_callHook',
                    value: function _callHook() {
                        var container = arguments.length <= 0 || arguments[0] === undefined ? this.$el[0] : arguments[0];

                        if (window[Constants.GLOBAL_INSTANCE]) {
                            window[Constants.GLOBAL_INSTANCE].garfield.init(container);
                        } else {
                            throw new Error("Global instance missing, call hook fail");
                        }
                    }
                }, {
                    key: '_subscribeToData',
                    value: function _subscribeToData(dataService, keyPath) {
                        var notifier = arguments.length <= 2 || arguments[2] === undefined ? this.handleNotification : arguments[2];

                        if (Object.is(dataService, undefined)) {
                            console.error('dataService is not provided');
                            return;
                        }

                        if (Object.is(keyPath, undefined)) {
                            console.error('mapping keyPath is not provided');
                            return;
                        }

                        this._notifications.push(dataService.subscribe(keyPath, notifier, this._id));
                    }
                }, {
                    key: '_createSubscriptionData',
                    value: function _createSubscriptionData(dataService, keyPaths) {
                        var _this2 = this;

                        var preset = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                        var notifier = arguments.length <= 3 || arguments[3] === undefined ? this.handleNotification : arguments[3];

                        if (Object.is(dataService, undefined)) {
                            console.error('dataService is not provided');
                            return;
                        }

                        if (Object.is(keyPaths, undefined)) {
                            console.error('mapping keyPaths are not provided');
                            return;
                        }

                        if (Object.is(this._notifications, undefined)) {
                            this._notifications = this._initNotifications();
                        }

                        var mappedData = Object.assign({}, preset);
                        var _keyPaths = Array.isArray(keyPaths) ? keyPaths : [keyPaths];

                        if (Array.isArray(_keyPaths)) {
                            _.forEach(_keyPaths, function (keyPath) {
                                var notification = dataService.subscribe(keyPath, notifier, _this2._id);
                                _this2._notifications.push(notification);
                                mappedData[keyPath] = notification.proxy;
                            });
                        }

                        return mappedData;
                    }
                }, {
                    key: '_initNotifications',
                    value: function _initNotifications() {
                        return new Proxy([], {
                            get: function get(notifications, prop) {
                                if (prop in notifications) {
                                    return notifications[prop];
                                }

                                var result = undefined;
                                var _iteratorNormalCompletion2 = true;
                                var _didIteratorError2 = false;
                                var _iteratorError2 = undefined;

                                try {
                                    for (var _iterator2 = notifications[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var notification = _step2.value;

                                        if (notification.keyPath === prop) {
                                            result = notification;
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                            _iterator2['return']();
                                        }
                                    } finally {
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }

                                return result;
                            }
                        });
                    }
                }, {
                    key: 'handleNotification',
                    value: function handleNotification(keyPath, data) {}
                }, {
                    key: '_unsubscribe',
                    value: function _unsubscribe(dataService, keyPath) {
                        if (dataService) {
                            dataService.unsubscribe(this._notifications[keyPath]);
                        }
                        this._notifications.splice(this._notifications.indexOf(this._notifications[keyPath]), 1);
                    }
                }, {
                    key: '_namespaceEvents',
                    value: function _namespaceEvents(events) {
                        var _this3 = this;

                        if (!this.config || !this.config.jqNs) {
                            console.warn("You need to set this.config.jqNs for event auto-namespacing to work.");
                            return events;
                        }

                        if (typeof events !== 'string') {
                            console.warn("Auto-namespacing doesn't work for events passed as an object; calling 'off' won't work as expected and may break your code.");
                            return events;
                        }

                        return events.split(/\s+/).map(function (event) {
                            return event + '.' + _this3.config.jqNs;
                        }).join(' ');
                    }
                }, {
                    key: 'on',
                    value: function on(events) {
                        var _$el$on;

                        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key];
                        }

                        return (_$el$on = this.$el.on).call.apply(_$el$on, [this.$el, this._namespaceEvents(events)].concat(args));
                    }
                }, {
                    key: 'one',
                    value: function one(events) {
                        var _$el$one;

                        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                            args[_key2 - 1] = arguments[_key2];
                        }

                        return (_$el$one = this.$el.one).call.apply(_$el$one, [this.$el, this._namespaceEvents(events)].concat(args));
                    }
                }, {
                    key: 'off',
                    value: function off(events) {
                        var _$el$off;

                        if (!events && this.config && this.config.jqNs) {
                            events = '.' + this.config.jqNs;
                        } else {
                            events = this._namespaceEvents(events);
                        }

                        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                            args[_key3 - 1] = arguments[_key3];
                        }

                        return (_$el$off = this.$el.off).call.apply(_$el$off, [this.$el, events].concat(args));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        delete this._data;
                        this._dynamicPartials.clear();
                        this.$el.empty();
                        Helpers.Objects.destroy(this);
                        this.off();
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        console.warn("Using inherited init method from Component may not work in IE9.");
                        return new this(el, options);
                    }
                }]);

                return FeaturedComponent;
            }();

            _export('default', FeaturedComponent);
        }
    };
});
$__System.register('lib/config.js', ['github:components/jquery@1.11.3.js'], function (_export) {
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
$__System.registerDynamic('npm:process@0.11.9/browser.js', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
$__System.registerDynamic("npm:process@0.11.9.js", ["npm:process@0.11.9/browser.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:process@0.11.9/browser.js");
});
$__System.registerDynamic('github:jspm/nodelibs-process@0.1.2/index.js', ['npm:process@0.11.9.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('npm:process@0.11.9.js');
});
$__System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:jspm/nodelibs-process@0.1.2/index.js");
});
$__System.registerDynamic('npm:incremental-dom@0.5.1/dist/incremental-dom-cjs.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function Blank() {}
    Blank.prototype = Object.create(null);
    var has = function (map, property) {
      return hasOwnProperty.call(map, property);
    };
    var createMap = function () {
      return new Blank();
    };
    function NodeData(nodeName, key) {
      this.attrs = createMap();
      this.attrsArr = [];
      this.newAttrs = createMap();
      this.staticsApplied = false;
      this.key = key;
      this.keyMap = createMap();
      this.keyMapValid = true;
      this.focused = false;
      this.nodeName = nodeName;
      this.text = null;
    }
    var initData = function (node, nodeName, key) {
      var data = new NodeData(nodeName, key);
      node['__incrementalDOMData'] = data;
      return data;
    };
    var getData = function (node) {
      importNode(node);
      return node['__incrementalDOMData'];
    };
    var importNode = function (node) {
      if (node['__incrementalDOMData']) {
        return;
      }
      var isElement = node instanceof Element;
      var nodeName = isElement ? node.localName : node.nodeName;
      var key = isElement ? node.getAttribute('key') : null;
      var data = initData(node, nodeName, key);
      if (key) {
        getData(node.parentNode).keyMap[key] = node;
      }
      if (isElement) {
        var attributes = node.attributes;
        var attrs = data.attrs;
        var newAttrs = data.newAttrs;
        var attrsArr = data.attrsArr;
        for (var i = 0; i < attributes.length; i += 1) {
          var attr = attributes[i];
          var name = attr.name;
          var value = attr.value;
          attrs[name] = value;
          newAttrs[name] = undefined;
          attrsArr.push(name);
          attrsArr.push(value);
        }
      }
      for (var child = node.firstChild; child; child = child.nextSibling) {
        importNode(child);
      }
    };
    var getNamespaceForTag = function (tag, parent) {
      if (tag === 'svg') {
        return 'http://www.w3.org/2000/svg';
      }
      if (getData(parent).nodeName === 'foreignObject') {
        return null;
      }
      return parent.namespaceURI;
    };
    var createElement = function (doc, parent, tag, key) {
      var namespace = getNamespaceForTag(tag, parent);
      var el = undefined;
      if (namespace) {
        el = doc.createElementNS(namespace, tag);
      } else {
        el = doc.createElement(tag);
      }
      initData(el, tag, key);
      return el;
    };
    var createText = function (doc) {
      var node = doc.createTextNode('');
      initData(node, '#text', null);
      return node;
    };
    var notifications = {
      nodesCreated: null,
      nodesDeleted: null
    };
    function Context() {
      this.created = notifications.nodesCreated && [];
      this.deleted = notifications.nodesDeleted && [];
    }
    Context.prototype.markCreated = function (node) {
      if (this.created) {
        this.created.push(node);
      }
    };
    Context.prototype.markDeleted = function (node) {
      if (this.deleted) {
        this.deleted.push(node);
      }
    };
    Context.prototype.notifyChanges = function () {
      if (this.created && this.created.length > 0) {
        notifications.nodesCreated(this.created);
      }
      if (this.deleted && this.deleted.length > 0) {
        notifications.nodesDeleted(this.deleted);
      }
    };
    var inAttributes = false;
    var inSkip = false;
    var assertInPatch = function (functionName, context) {
      if (!context) {
        throw new Error('Cannot call ' + functionName + '() unless in patch.');
      }
    };
    var assertNoUnclosedTags = function (openElement, root) {
      if (openElement === root) {
        return;
      }
      var currentElement = openElement;
      var openTags = [];
      while (currentElement && currentElement !== root) {
        openTags.push(currentElement.nodeName.toLowerCase());
        currentElement = currentElement.parentNode;
      }
      throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
    };
    var assertNotInAttributes = function (functionName) {
      if (inAttributes) {
        throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
      }
    };
    var assertNotInSkip = function (functionName) {
      if (inSkip) {
        throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
      }
    };
    var assertInAttributes = function (functionName) {
      if (!inAttributes) {
        throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
      }
    };
    var assertVirtualAttributesClosed = function () {
      if (inAttributes) {
        throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
      }
    };
    var assertCloseMatchesOpenTag = function (nodeName, tag) {
      if (nodeName !== tag) {
        throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
      }
    };
    var assertNoChildrenDeclaredYet = function (functionName, previousNode) {
      if (previousNode !== null) {
        throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
      }
    };
    var assertPatchElementNoExtras = function (startNode, currentNode, expectedNextNode, expectedPrevNode) {
      var wasUpdated = currentNode.nextSibling === expectedNextNode && currentNode.previousSibling === expectedPrevNode;
      var wasChanged = currentNode.nextSibling === startNode.nextSibling && currentNode.previousSibling === expectedPrevNode;
      var wasRemoved = currentNode === startNode;
      if (!wasUpdated && !wasChanged && !wasRemoved) {
        throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
      }
    };
    var setInAttributes = function (value) {
      var previous = inAttributes;
      inAttributes = value;
      return previous;
    };
    var setInSkip = function (value) {
      var previous = inSkip;
      inSkip = value;
      return previous;
    };
    var isDocumentRoot = function (node) {
      return node instanceof Document || node instanceof DocumentFragment;
    };
    var getAncestry = function (node, root) {
      var ancestry = [];
      var cur = node;
      while (cur !== root) {
        ancestry.push(cur);
        cur = cur.parentNode;
      }
      return ancestry;
    };
    var getRoot = function (node) {
      var cur = node;
      var prev = cur;
      while (cur) {
        prev = cur;
        cur = cur.parentNode;
      }
      return prev;
    };
    var getActiveElement = function (node) {
      var root = getRoot(node);
      return isDocumentRoot(root) ? root.activeElement : null;
    };
    var getFocusedPath = function (node, root) {
      var activeElement = getActiveElement(node);
      if (!activeElement || !node.contains(activeElement)) {
        return [];
      }
      return getAncestry(activeElement, root);
    };
    var moveBefore = function (parentNode, node, referenceNode) {
      var insertReferenceNode = node.nextSibling;
      var cur = referenceNode;
      while (cur !== node) {
        var next = cur.nextSibling;
        parentNode.insertBefore(cur, insertReferenceNode);
        cur = next;
      }
    };
    var context = null;
    var currentNode = null;
    var currentParent = null;
    var doc = null;
    var markFocused = function (focusPath, focused) {
      for (var i = 0; i < focusPath.length; i += 1) {
        getData(focusPath[i]).focused = focused;
      }
    };
    var patchFactory = function (run) {
      var f = function (node, fn, data) {
        var prevContext = context;
        var prevDoc = doc;
        var prevCurrentNode = currentNode;
        var prevCurrentParent = currentParent;
        var previousInAttributes = false;
        var previousInSkip = false;
        context = new Context();
        doc = node.ownerDocument;
        currentParent = node.parentNode;
        if ('production' !== 'production') {
          previousInAttributes = setInAttributes(false);
          previousInSkip = setInSkip(false);
        }
        var focusPath = getFocusedPath(node, currentParent);
        markFocused(focusPath, true);
        var retVal = run(node, fn, data);
        markFocused(focusPath, false);
        if ('production' !== 'production') {
          assertVirtualAttributesClosed();
          setInAttributes(previousInAttributes);
          setInSkip(previousInSkip);
        }
        context.notifyChanges();
        context = prevContext;
        doc = prevDoc;
        currentNode = prevCurrentNode;
        currentParent = prevCurrentParent;
        return retVal;
      };
      return f;
    };
    var patchInner = patchFactory(function (node, fn, data) {
      currentNode = node;
      enterNode();
      fn(data);
      exitNode();
      if ('production' !== 'production') {
        assertNoUnclosedTags(currentNode, node);
      }
      return node;
    });
    var patchOuter = patchFactory(function (node, fn, data) {
      var startNode = { nextSibling: node };
      var expectedNextNode = null;
      var expectedPrevNode = null;
      if ('production' !== 'production') {
        expectedNextNode = node.nextSibling;
        expectedPrevNode = node.previousSibling;
      }
      currentNode = startNode;
      fn(data);
      if ('production' !== 'production') {
        assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
      }
      if (node !== currentNode && node.parentNode) {
        removeChild(currentParent, node, getData(currentParent).keyMap);
      }
      return startNode === currentNode ? null : currentNode;
    });
    var matches = function (matchNode, nodeName, key) {
      var data = getData(matchNode);
      return nodeName === data.nodeName && key == data.key;
    };
    var alignWithDOM = function (nodeName, key) {
      if (currentNode && matches(currentNode, nodeName, key)) {
        return;
      }
      var parentData = getData(currentParent);
      var currentNodeData = currentNode && getData(currentNode);
      var keyMap = parentData.keyMap;
      var node = undefined;
      if (key) {
        var keyNode = keyMap[key];
        if (keyNode) {
          if (matches(keyNode, nodeName, key)) {
            node = keyNode;
          } else if (keyNode === currentNode) {
            context.markDeleted(keyNode);
          } else {
            removeChild(currentParent, keyNode, keyMap);
          }
        }
      }
      if (!node) {
        if (nodeName === '#text') {
          node = createText(doc);
        } else {
          node = createElement(doc, currentParent, nodeName, key);
        }
        if (key) {
          keyMap[key] = node;
        }
        context.markCreated(node);
      }
      if (getData(node).focused) {
        moveBefore(currentParent, node, currentNode);
      } else if (currentNodeData && currentNodeData.key && !currentNodeData.focused) {
        currentParent.replaceChild(node, currentNode);
        parentData.keyMapValid = false;
      } else {
        currentParent.insertBefore(node, currentNode);
      }
      currentNode = node;
    };
    var removeChild = function (node, child, keyMap) {
      node.removeChild(child);
      context.markDeleted(child);
      var key = getData(child).key;
      if (key) {
        delete keyMap[key];
      }
    };
    var clearUnvisitedDOM = function () {
      var node = currentParent;
      var data = getData(node);
      var keyMap = data.keyMap;
      var keyMapValid = data.keyMapValid;
      var child = node.lastChild;
      var key = undefined;
      if (child === currentNode && keyMapValid) {
        return;
      }
      while (child !== currentNode) {
        removeChild(node, child, keyMap);
        child = node.lastChild;
      }
      if (!keyMapValid) {
        for (key in keyMap) {
          child = keyMap[key];
          if (child.parentNode !== node) {
            context.markDeleted(child);
            delete keyMap[key];
          }
        }
        data.keyMapValid = true;
      }
    };
    var enterNode = function () {
      currentParent = currentNode;
      currentNode = null;
    };
    var getNextNode = function () {
      if (currentNode) {
        return currentNode.nextSibling;
      } else {
        return currentParent.firstChild;
      }
    };
    var nextNode = function () {
      currentNode = getNextNode();
    };
    var exitNode = function () {
      clearUnvisitedDOM();
      currentNode = currentParent;
      currentParent = currentParent.parentNode;
    };
    var coreElementOpen = function (tag, key) {
      nextNode();
      alignWithDOM(tag, key);
      enterNode();
      return currentParent;
    };
    var coreElementClose = function () {
      if ('production' !== 'production') {
        setInSkip(false);
      }
      exitNode();
      return currentNode;
    };
    var coreText = function () {
      nextNode();
      alignWithDOM('#text', null);
      return currentNode;
    };
    var currentElement = function () {
      if ('production' !== 'production') {
        assertInPatch('currentElement', context);
        assertNotInAttributes('currentElement');
      }
      return currentParent;
    };
    var currentPointer = function () {
      if ('production' !== 'production') {
        assertInPatch('currentPointer', context);
        assertNotInAttributes('currentPointer');
      }
      return getNextNode();
    };
    var skip = function () {
      if ('production' !== 'production') {
        assertNoChildrenDeclaredYet('skip', currentNode);
        setInSkip(true);
      }
      currentNode = currentParent.lastChild;
    };
    var skipNode = nextNode;
    var symbols = { default: '__default' };
    var getNamespace = function (name) {
      if (name.lastIndexOf('xml:', 0) === 0) {
        return 'http://www.w3.org/XML/1998/namespace';
      }
      if (name.lastIndexOf('xlink:', 0) === 0) {
        return 'http://www.w3.org/1999/xlink';
      }
    };
    var applyAttr = function (el, name, value) {
      if (value == null) {
        el.removeAttribute(name);
      } else {
        var attrNS = getNamespace(name);
        if (attrNS) {
          el.setAttributeNS(attrNS, name, value);
        } else {
          el.setAttribute(name, value);
        }
      }
    };
    var applyProp = function (el, name, value) {
      el[name] = value;
    };
    var setStyleValue = function (style, prop, value) {
      if (prop.indexOf('-') >= 0) {
        style.setProperty(prop, value);
      } else {
        style[prop] = value;
      }
    };
    var applyStyle = function (el, name, style) {
      if (typeof style === 'string') {
        el.style.cssText = style;
      } else {
        el.style.cssText = '';
        var elStyle = el.style;
        var obj = style;
        for (var prop in obj) {
          if (has(obj, prop)) {
            setStyleValue(elStyle, prop, obj[prop]);
          }
        }
      }
    };
    var applyAttributeTyped = function (el, name, value) {
      var type = typeof value;
      if (type === 'object' || type === 'function') {
        applyProp(el, name, value);
      } else {
        applyAttr(el, name, value);
      }
    };
    var updateAttribute = function (el, name, value) {
      var data = getData(el);
      var attrs = data.attrs;
      if (attrs[name] === value) {
        return;
      }
      var mutator = attributes[name] || attributes[symbols.default];
      mutator(el, name, value);
      attrs[name] = value;
    };
    var attributes = createMap();
    attributes[symbols.default] = applyAttributeTyped;
    attributes['style'] = applyStyle;
    var ATTRIBUTES_OFFSET = 3;
    var argsBuilder = [];
    var elementOpen = function (tag, key, statics, var_args) {
      if ('production' !== 'production') {
        assertNotInAttributes('elementOpen');
        assertNotInSkip('elementOpen');
      }
      var node = coreElementOpen(tag, key);
      var data = getData(node);
      if (!data.staticsApplied) {
        if (statics) {
          for (var _i = 0; _i < statics.length; _i += 2) {
            var name = statics[_i];
            var value = statics[_i + 1];
            updateAttribute(node, name, value);
          }
        }
        data.staticsApplied = true;
      }
      var attrsArr = data.attrsArr;
      var newAttrs = data.newAttrs;
      var isNew = !attrsArr.length;
      var i = ATTRIBUTES_OFFSET;
      var j = 0;
      for (; i < arguments.length; i += 2, j += 2) {
        var _attr = arguments[i];
        if (isNew) {
          attrsArr[j] = _attr;
          newAttrs[_attr] = undefined;
        } else if (attrsArr[j] !== _attr) {
          break;
        }
        var value = arguments[i + 1];
        if (isNew || attrsArr[j + 1] !== value) {
          attrsArr[j + 1] = value;
          updateAttribute(node, _attr, value);
        }
      }
      if (i < arguments.length || j < attrsArr.length) {
        for (; i < arguments.length; i += 1, j += 1) {
          attrsArr[j] = arguments[i];
        }
        if (j < attrsArr.length) {
          attrsArr.length = j;
        }
        for (i = 0; i < attrsArr.length; i += 2) {
          var name = attrsArr[i];
          var value = attrsArr[i + 1];
          newAttrs[name] = value;
        }
        for (var _attr2 in newAttrs) {
          updateAttribute(node, _attr2, newAttrs[_attr2]);
          newAttrs[_attr2] = undefined;
        }
      }
      return node;
    };
    var elementOpenStart = function (tag, key, statics) {
      if ('production' !== 'production') {
        assertNotInAttributes('elementOpenStart');
        setInAttributes(true);
      }
      argsBuilder[0] = tag;
      argsBuilder[1] = key;
      argsBuilder[2] = statics;
    };
    var attr = function (name, value) {
      if ('production' !== 'production') {
        assertInAttributes('attr');
      }
      argsBuilder.push(name);
      argsBuilder.push(value);
    };
    var elementOpenEnd = function () {
      if ('production' !== 'production') {
        assertInAttributes('elementOpenEnd');
        setInAttributes(false);
      }
      var node = elementOpen.apply(null, argsBuilder);
      argsBuilder.length = 0;
      return node;
    };
    var elementClose = function (tag) {
      if ('production' !== 'production') {
        assertNotInAttributes('elementClose');
      }
      var node = coreElementClose();
      if ('production' !== 'production') {
        assertCloseMatchesOpenTag(getData(node).nodeName, tag);
      }
      return node;
    };
    var elementVoid = function (tag, key, statics, var_args) {
      elementOpen.apply(null, arguments);
      return elementClose(tag);
    };
    var text = function (value, var_args) {
      if ('production' !== 'production') {
        assertNotInAttributes('text');
        assertNotInSkip('text');
      }
      var node = coreText();
      var data = getData(node);
      if (data.text !== value) {
        data.text = value;
        var formatted = value;
        for (var i = 1; i < arguments.length; i += 1) {
          var fn = arguments[i];
          formatted = fn(formatted);
        }
        node.data = formatted;
      }
      return node;
    };
    exports.patch = patchInner;
    exports.patchInner = patchInner;
    exports.patchOuter = patchOuter;
    exports.currentElement = currentElement;
    exports.currentPointer = currentPointer;
    exports.skip = skip;
    exports.skipNode = skipNode;
    exports.elementVoid = elementVoid;
    exports.elementOpenStart = elementOpenStart;
    exports.elementOpenEnd = elementOpenEnd;
    exports.elementOpen = elementOpen;
    exports.elementClose = elementClose;
    exports.text = text;
    exports.attr = attr;
    exports.symbols = symbols;
    exports.attributes = attributes;
    exports.applyAttr = applyAttr;
    exports.applyProp = applyProp;
    exports.notifications = notifications;
    exports.importNode = importNode;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
$__System.registerDynamic("npm:incremental-dom@0.5.1.js", ["npm:incremental-dom@0.5.1/dist/incremental-dom-cjs.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:incremental-dom@0.5.1/dist/incremental-dom-cjs.js");
});
$__System.register("components/_cat-clicker/cat-list-counter/cat-list-counter-tpl.js", ["npm:incremental-dom@0.5.1.js"], function($__export) {
  "use strict";
  var patch,
      elementOpen,
      elementClose,
      text,
      skip,
      currentElement,
      hoisted1,
      hoisted2,
      hoisted3,
      hoisted4,
      __target;
  function catListCounterTplFn(vm) {
    elementOpen("p");
    text("Cat list counter");
    elementClose("p");
    __target = vm.proxy;
    if (__target) {
      ;
      (__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var cat = $value;
        var $key = "9952384a-6706-4e90-932c-1197edd13271_" + $item;
        elementOpen("div", $key, hoisted1);
        elementOpen("div", "b8818df9-dafa-4af4-a1d7-3a7a6b896ea8_" + $key, hoisted2);
        elementOpen("div", "348b9a98-c062-44de-b49d-32b881ec1e67_" + $key, hoisted3);
        elementOpen("a", "580f7949-f316-456c-a3df-c0ef5cd3d737_" + $key, hoisted4, "onclick", function($event) {
          var $element = this;
          vm.handlers.clickCat(cat);
        });
        elementOpen("span");
        text("NAME: " + (cat.name) + " COUNTS: " + (cat.counter) + "");
        elementClose("span");
        elementClose("a");
        elementClose("div");
        elementClose("div");
        elementClose("div");
      }, this);
    }
  }
  $__export("catListCounterTplFn", catListCounterTplFn);
  return {
    setters: [function($__m) {
      patch = $__m.patch;
      elementOpen = $__m.elementOpen;
      elementClose = $__m.elementClose;
      text = $__m.text;
      skip = $__m.skip;
      currentElement = $__m.currentElement;
    }],
    execute: function() {
      hoisted1 = ["class", "b-component--tighter"];
      hoisted2 = ["class", "grid"];
      hoisted3 = ["class", "1/2 grid__cell"];
      hoisted4 = ["href", "javascript:void(0);", "class", "b-link--block b-link--no-underline", "title", "show cat details"];
    }
  };
});

$__System.register('components/_cat-clicker/cat-list-counter/cat-list-counter.js', ['lib/featured-component.js', 'lib/config.js', 'components/_cat-clicker/cat-list-counter/cat-list-counter-tpl.js'], function (_export) {
    'use strict';

    var FeaturedComponent, configurable, catListCounterTplFn, CatListCounter;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(_x, _x2, _x3) {
        var _again = true;_function: while (_again) {
            var object = _x,
                property = _x2,
                receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);if (parent === null) {
                    return undefined;
                } else {
                    _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;if (getter === undefined) {
                    return undefined;
                }return getter.call(receiver);
            }
        }
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_jsLibFeaturedComponent) {
            FeaturedComponent = _jsLibFeaturedComponent['default'];
        }, function (_jsLibConfig) {
            configurable = _jsLibConfig.configurable;
        }, function (_catListCounterTpl) {
            catListCounterTplFn = _catListCounterTpl.catListCounterTplFn;
        }],
        execute: function () {
            CatListCounter = function (_FeaturedComponent) {
                _inherits(CatListCounter, _FeaturedComponent);

                function CatListCounter(el, options) {
                    _classCallCheck(this, _CatListCounter);

                    _get(Object.getPrototypeOf(_CatListCounter.prototype), 'constructor', this).call(this, el, options);

                    this._data = [{ name: "cat 1", counter: 1 }, { name: "cat 2", counter: 2 }, { name: "cat 3", counter: 3 }];

                    this._createDynamicPartial({
                        templateFn: catListCounterTplFn,
                        data: this._data
                    });

                    this._childElements.$title.html(this.config.title);
                }

                _createClass(CatListCounter, [{
                    key: 'clickCat',
                    value: function clickCat(cat) {
                        cat.counter += 1;
                    }
                }], [{
                    key: 'init',
                    value: function init(el, options) {
                        return new CatListCounter(el, options);
                    }
                }]);

                var _CatListCounter = CatListCounter;
                CatListCounter = configurable({
                    title: null
                })(CatListCounter) || CatListCounter;
                return CatListCounter;
            }(FeaturedComponent);

            _export('CatListCounter', CatListCounter);
        }
    };
});
$__System.register('example.js', ['lib/garfield.js', 'github:components/jquery@1.11.3.js', 'npm:bluebird@3.5.1.js', 'lib/constants.js', 'components/_cat-clicker/cat-list/cat-list.js', 'components/_cat-clicker/cat-detail-panel/cat-detail-panel.js', 'components/_cat-clicker/cat-description-panel/cat-description-panel.js', 'components/_cat-clicker/cat-list-counter/cat-list-counter.js'], function (_export) {
    'use strict';

    var $, BluePromise, Constants, CatList, CatDetailPanel, CatDescriptionPanel, CatListCounter, garfield;
    return {
        setters: [function (_libGarfield) {}, function (_jquery) {
            $ = _jquery['default'];
        }, function (_bluebird) {
            BluePromise = _bluebird['default'];
        }, function (_libConstants) {
            Constants = _libConstants.Constants;
        }, function (_components_catClickerCatListCatList) {
            CatList = _components_catClickerCatListCatList.CatList;
        }, function (_components_catClickerCatDetailPanelCatDetailPanel) {
            CatDetailPanel = _components_catClickerCatDetailPanelCatDetailPanel.CatDetailPanel;
        }, function (_components_catClickerCatDescriptionPanelCatDescriptionPanel) {
            CatDescriptionPanel = _components_catClickerCatDescriptionPanelCatDescriptionPanel.CatDescriptionPanel;
        }, function (_components_catClickerCatListCounterCatListCounter) {
            CatListCounter = _components_catClickerCatListCounterCatListCounter.CatListCounter;
        }],
        execute: function () {
            try {
                BluePromise.config({
                    cancellation: true });
            } catch (e) {
                console.warn(e);
            }

            if (!window[Constants.GLOBAL_INSTANCE]) {
                window[Constants.GLOBAL_INSTANCE] = {};
            }

            if (!window[Constants.GLOBAL_INSTANCE].garfield) {
                window[Constants.GLOBAL_INSTANCE].garfield = new Garfield();
            }

            garfield = window[Constants.GLOBAL_INSTANCE].garfield;

            garfield.bind('.b-js-cat-detail-panel', CatDetailPanel);
            garfield.bind('.b-js-cat-description-panel', CatDescriptionPanel);
            garfield.bind('.b-js-cat-list', CatList);
            garfield.bind('.b-js-cat-list-counter', CatListCounter);

            garfield.init();
        }
    };
});
})
(function(factory) {
  factory(jQuery);
});
//# sourceMappingURL=example.sfx.js.map
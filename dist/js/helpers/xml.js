System.register(['lodash'], function (_export) {
    'use strict';

    var _, XML;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_lodash) {
            _ = _lodash['default'];
        }],
        execute: function () {
            XML = (function () {
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
            })();

            _export('XML', XML);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBRSxVQUFTLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDekMsZ0NBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUFFLHVDQUFPOzZCQUFFO0FBQ2xDLGdDQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLG1DQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQy9CLENBQUMsQ0FBQzs7QUFHSCw0QkFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUFFLG1DQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7eUJBQUU7O0FBRzNELCtCQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzVCOzs7dUJBbkVDLEdBQUc7OzsyQkF1RUQsR0FBRyIsImZpbGUiOiJqcy9oZWxwZXJzL3htbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8qKlxuICogUmVmZXJlbmNlOiBodHRwczovL2FuZHJldy5zdHdydC5jYS9wb3N0cy9qcy14bWwtcGFyc2luZy9cbiAqXG4gKi9cbmNsYXNzIFhNTCB7XG5cbiAgICAvLyBmbGF0dGVucyBhbiBvYmplY3QgKHJlY3Vyc2l2ZWx5ISksIHNpbWlsYXJseSB0byBBcnJheSNmbGF0dGVuXG4vLyBlLmcuIGZsYXR0ZW4oeyBhOiB7IGI6IHsgYzogXCJoZWxsbyFcIiB9IH0gfSk7IC8vID0+IFwiaGVsbG8hXCJcbiAgICBzdGF0aWMgZmxhdHRlbihvYmplY3QpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gXy5pc1BsYWluT2JqZWN0KG9iamVjdCkgJiYgXy5zaXplKG9iamVjdCkgPT09IDE7XG4gICAgICAgIHJldHVybiBjaGVjayA/IFhNTC5mbGF0dGVuKF8udmFsdWVzKG9iamVjdClbMF0pIDogb2JqZWN0O1xuICAgIH1cblxuICAgIHN0YXRpYyBwYXJzZSh4bWwpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcblxuICAgICAgICB2YXIgaXNUZXh0ID0geG1sLm5vZGVUeXBlID09PSAzLFxuICAgICAgICAgICAgaXNFbGVtZW50ID0geG1sLm5vZGVUeXBlID09PSAxLFxuICAgICAgICAgICAgYm9keSA9IHhtbC50ZXh0Q29udGVudCAmJiB4bWwudGV4dENvbnRlbnQudHJpbSgpLFxuICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB4bWwuY2hpbGRyZW4gJiYgeG1sLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc0F0dHJpYnV0ZXMgPSB4bWwuYXR0cmlidXRlcyAmJiB4bWwuYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAgICAgLy8gaWYgaXQncyB0ZXh0IGp1c3QgcmV0dXJuIGl0XG4gICAgICAgIGlmIChpc1RleHQpIHsgcmV0dXJuIHhtbC5ub2RlVmFsdWUudHJpbSgpOyB9XG5cbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZHJlbiBvciBhdHRyaWJ1dGVzLCBqdXN0IHJldHVybiB0aGUgY29udGVudHNcbiAgICAgICAgaWYgKCFoYXNDaGlsZHJlbiAmJiAhaGFzQXR0cmlidXRlcykgeyByZXR1cm4gYm9keTsgfVxuXG4gICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiBidXQgX2RvZXNfIGhhdmUgYm9keSBjb250ZW50LCB3ZSdsbCB1c2UgdGhhdFxuICAgICAgICBpZiAoIWhhc0NoaWxkcmVuICYmIGJvZHkubGVuZ3RoKSB7IGRhdGEudGV4dCA9IGJvZHk7IH1cblxuICAgICAgICAvLyBpZiBpdCdzIGFuIGVsZW1lbnQgd2l0aCBhdHRyaWJ1dGVzLCBhZGQgdGhlbSB0byBkYXRhLmF0dHJpYnV0ZXNcbiAgICAgICAgaWYgKGlzRWxlbWVudCAmJiBoYXNBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMgPSBfLnJlZHVjZSh4bWwuYXR0cmlidXRlcywgZnVuY3Rpb24ob2JqLCBuYW1lLCBpZCkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyID0geG1sLmF0dHJpYnV0ZXMuaXRlbShpZCk7XG4gICAgICAgICAgICAgICAgb2JqW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWN1cnNpdmVseSBjYWxsICNwYXJzZSBvdmVyIGNoaWxkcmVuLCBhZGRpbmcgcmVzdWx0cyB0byBkYXRhXG4gICAgICAgIF8uZWFjaCh4bWwuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGNoaWxkLm5vZGVOYW1lO1xuXG4gICAgICAgICAgICAvLyBpZiB3ZSd2ZSBub3QgY29tZSBhY3Jvc3MgYSBjaGlsZCB3aXRoIHRoaXMgbm9kZVR5cGUsIGFkZCBpdCBhcyBhbiBvYmplY3RcbiAgICAgICAgICAgIC8vIGFuZCByZXR1cm4gaGVyZVxuICAgICAgICAgICAgaWYgKCFfLmhhcyhkYXRhLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgIGRhdGFbbmFtZV0gPSBYTUwucGFyc2UoY2hpbGQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgd2UndmUgZW5jb3VudGVyZWQgYSBzZWNvbmQgaW5zdGFuY2Ugb2YgdGhlIHNhbWUgbm9kZVR5cGUsIG1ha2Ugb3VyXG4gICAgICAgICAgICAvLyByZXByZXNlbnRhdGlvbiBvZiBpdCBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKCFfLmlzQXJyYXkoZGF0YVtuYW1lXSkpIHsgZGF0YVtuYW1lXSA9IFtkYXRhW25hbWVdXTsgfVxuXG4gICAgICAgICAgICAvLyBhbmQgZmluYWxseSwgYXBwZW5kIHRoZSBuZXcgY2hpbGRcbiAgICAgICAgICAgIGRhdGFbbmFtZV0ucHVzaChYTUwucGFyc2UoY2hpbGQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaWYgd2UgY2FuLCBsZXQncyBmb2xkIHNvbWUgYXR0cmlidXRlcyBpbnRvIHRoZSBib2R5XG4gICAgICAgIF8uZWFjaChkYXRhLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2tleV0gIT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEuYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpZiBkYXRhLmF0dHJpYnV0ZXMgaXMgbm93IGVtcHR5LCBnZXQgcmlkIG9mIGl0XG4gICAgICAgIGlmIChfLmlzRW1wdHkoZGF0YS5hdHRyaWJ1dGVzKSkgeyBkZWxldGUgZGF0YS5hdHRyaWJ1dGVzOyB9XG5cbiAgICAgICAgLy8gc2ltcGxpZnkgdG8gcmVkdWNlIG51bWJlciBvZiBmaW5hbCBsZWFmIG5vZGVzIGFuZCByZXR1cm5cbiAgICAgICAgcmV0dXJuIFhNTC5mbGF0dGVuKGRhdGEpO1xuICAgIH1cblxufVxuXG5leHBvcnQge1hNTH07XG4iXX0=

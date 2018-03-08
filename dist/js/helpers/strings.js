System.register(['html-truncate', 'jquery'], function (_export) {
    'use strict';

    var htmlTruncate, $, Strings;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_htmlTruncate) {
            htmlTruncate = _htmlTruncate['default'];
        }, function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            Strings = (function () {
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
            })();

            _export('Strings', Strings);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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TyxHQUFHLE9BQU8sQ0FBQzt5QkFDL0M7QUFDRCxrQ0FBVSxHQUFHLFVBQVUsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDOztBQUUzQywrQkFBTyxVQUFVLENBQUM7cUJBQ3JCOzs7dUJBbkhDLE9BQU87OzsrQkF1SEwsT0FBTyIsImZpbGUiOiJqcy9oZWxwZXJzL3N0cmluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHRtbFRydW5jYXRlIGZyb20gJ2h0bWwtdHJ1bmNhdGUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBTdHJpbmdzIENsYXNzXG4gKi9cbmNsYXNzIFN0cmluZ3Mge1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgcmFuZG9tIHN0cmluZywgZGVmYXVsdCBpcyB0aGUgbWF4aW11bSAxMiBjaGFyYWN0ZXJzLiBUaGUgdG9TdHJpbmcgbWV0aG9kIG9mIGEgbnVtYmVyIHR5cGVcbiAgICAgKiBpbiBqYXZhc2NyaXB0IHRha2VzIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0byBjb252ZXJ0IHRoZSBudW1iZXIgaW50byBhIGdpdmVuIGJhc2UuIFNpbWlsYXIgdG8gaGV4XG4gICAgICogKGJhc2UgMTYpLCBiYXNlIDM2IHVzZXMgbGV0dGVycyB0byByZXByZXNlbnQgZGlnaXRzIGJleW9uZCA5LlxuICAgICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzQ5NDA0L2dlbmVyYXRlLWEtc3RyaW5nLW9mLTUtcmFuZG9tLWNoYXJhY3RlcnMtaW4tamF2YXNjcmlwdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgbGVuZ3RoIG9mIHRoZSByYW5kb20gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgcmFuZG9tIHN0cmluZyAsIGRlZmF1bHQgaXMgMTIgbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHJhbmRvbShsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAoIGxlbmd0aCAmJiBsZW5ndGggPD0xMiApID8gbGVuZ3RoIDogMTIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbW9yZSBzb3BoaXN0aWNhdGVkIHNvbHV0aW9uL2xpYnJhcnkgZm9yIHNob3J0ZW5pbmcgc3RyaW5nc1xuICAgICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTk5MzUyL3NtYXJ0LXdheS10by1zaG9ydGVuLWxvbmctc3RyaW5ncy13aXRoLWphdmFzY3JpcHRcbiAgICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9IC0gY2FuZGlkYXRlIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0gbiB7bnVtYmVyfSAtIGxlbmd0aCBvZiB0aGUgc3RyaW5nXG4gICAgICogQHBhcmFtIHVzZVdvcmRCb3VuZGFyeSB7Ym9vbGVhbn0gLSBkZWZhdWx0IHRydWUgZm9yIHVzaW5nIHdvcmQgYm91bmRhcnksIGVsc2UgZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgdHJ1bmNhdGUoIHN0ciwgbiwgdXNlV29yZEJvdW5kYXJ5ICkge1xuICAgICAgICB1c2VXb3JkQm91bmRhcnkgPSB1c2VXb3JkQm91bmRhcnkgfHwgdHJ1ZTtcbiAgICAgICAgdmFyIGlzVG9vTG9uZyA9IHN0ci5sZW5ndGggPiBuLFxuICAgICAgICAgICAgc18gPSBpc1Rvb0xvbmcgPyBzdHIuc3Vic3RyKDAsbi0xKSA6IHN0cjtcbiAgICAgICAgc18gPSAodXNlV29yZEJvdW5kYXJ5ICYmIGlzVG9vTG9uZykgPyBzXy5zdWJzdHIoMCxzXy5sYXN0SW5kZXhPZignICcpKSA6IHNfO1xuICAgICAgICByZXR1cm4gIGlzVG9vTG9uZyA/IHNfICsgJy4uLicgOiBzXztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVuY2F0ZWQgaHRtbCBjb250ZW50XG4gICAgICogQHBhcmFtICRlbFxuICAgICAqIEBwYXJhbSBjYW5kaWRhdGVTdHIge3N0cmluZ30gLSBpbnB1dCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gbWF4TGVuZ3RoIHtudW1iZXJ9IC0gbWF4aW11bSBjaGFyYWN0ZXIgbGVuZ3RoXG4gICAgICogQHBhcmFtIG1heEhlaWdodCB7bnVtYmVyfSAtIG1heEhlaWdodCBvZiB0aGUgY29udGVudCwgZGVmYXVsdCBpcyA2NFxuICAgICAqIEBwYXJhbSBlbGxpcHNpcyAge3N0cmluZ30gLSBlbGxpcHNpcywgZGVmYXVsdCBpcyAnLi4uJ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gdHJ1bmNhdGUgc3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlSHRtbENvbnRlbnQoICRlbCwgY2FuZGlkYXRlU3RyICxtYXhMZW5ndGgsIG1heEhlaWdodCwgZWxsaXBzaXMpIHtcbiAgICAgICAgbWF4TGVuZ3RoID0gbWF4TGVuZ3RoIHx8IDI1MDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0IHx8IDY0O1xuICAgICAgICBlbGxpcHNpcyA9IGVsbGlwc2lzIHx8ICcuLi4nO1xuICAgICAgICBjb25zdCB0YWdMZW5ndGggPSAxMDtcbiAgICAgICAgdmFyIHRydW5jYXRlZFN0cmluZyA9IGh0bWxUcnVuY2F0ZShjYW5kaWRhdGVTdHIsIG1heExlbmd0aCwgeyBlbGxpcHNpczogZWxsaXBzaXMgfSk7XG4gICAgICAgIC8vVE9ETyBjb21tZW50cyBmb3IgdGhlIGxvZ2ljXG4gICAgICAgIGlmICgkZWwuaHRtbCh0cnVuY2F0ZWRTdHJpbmcpLmhlaWdodCgpICUgbWF4SGVpZ2h0ID4gMCApIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sVHJ1bmNhdGUodHJ1bmNhdGVkU3RyaW5nLCB0cnVuY2F0ZWRTdHJpbmcubGVuZ3RoIC8gKCAoICRlbC5odG1sKHRydW5jYXRlZFN0cmluZykuaGVpZ2h0KCkgLyBtYXhIZWlnaHQgKSAqIDIgKSwgeyBlbGxpcHNpczogZWxsaXBzaXN9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsdGVyU3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eUh0bWxUYWdzKHRydW5jYXRlZFN0cmluZywgZWxsaXBzaXMpO1xuICAgICAgICBpZiggZmlsdGVyU3RyaW5nICE9PSB0cnVuY2F0ZWRTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sVHJ1bmNhdGUodHJ1bmNhdGVkU3RyaW5nLCBmaWx0ZXJTdHJpbmcubGVuZ3RoIC0gdGFnTGVuZ3RoLCB7IGVsbGlwc2lzOiBlbGxpcHNpc30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVuY2F0ZWRTdHJpbmc7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyaW1FbXB0eVRhZ3MoJGVsKSB7XG4gICAgICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgnJyA9PT0gJC50cmltKCQodGhpcykudGV4dCgpKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gJGVsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHRhZ3NcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlRW1wdHlIdG1sVGFncyhzdHIsIGluY2x1ZGVkU3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShpbmNsdWRlZFN0ciwgJycpLnJlcGxhY2UoLyg8KD8hXFwvKVtePl0rPikrKDxcXC9bXj5dKz4pL2dtLCAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xlYW4gaHRtbFxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHJldHVybnMge3N0cmluZ3xzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIHN0cmlwKGh0bWwpIHtcbiAgICAgICAgdmFyIHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4gICAgICAgIHRtcC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQgfHwgXCJcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmUgbGluZSBicmVha3MsIGFuZCBiciB0YWdzXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVMaW5lQnJlYWtzKHN0cil7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxyP1xcbnxcXHJ8Jmx0O2JyJmd0O3w8YnI+fDxiclxcLz4vZywgJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhdWRpby92aWRlbyB0aW1lIHN0cmluZyBmcm9tIHNlY29uZHNcbiAgICAgKiBAcGFyYW0gc2VjcyB7TnVtYmVyfSAtIHNlY29uZHMgXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSB0aW1lIHN0cmluZ1xuICAgICAqIEBleGFtcGxlIDEwMCBzZWNvbmRzIC0gMSBtaW4gNDAgc2VjXG4gICAgICovXG4gICAgc3RhdGljIGdldE1lZGlhVGltZVN0cmluZ0Zyb21TZWNvbmRzKHNlY3M9MCkge1xuICAgICAgICB2YXIgc2Vjb25kcyA9IHBhcnNlSW50KHNlY3MpO1xuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHNlY3MgLyAoNjAgKiA2MCkpO1xuICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAtIChob3VycyAqICg2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAtIChtaW51dGVzICogNjApO1xuXG4gICAgICAgIHZhciB0aW1lU3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYoaG91cnMgPiAwKSB7XG4gICAgICAgICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZyArIGhvdXJzICsgJyBob3VyICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYobWludXRlcyA+IDApIHtcbiAgICAgICAgICAgIHRpbWVTdHJpbmcgPSB0aW1lU3RyaW5nICsgbWludXRlcyArICcgbWluICc7XG4gICAgICAgIH1cbiAgICAgICAgdGltZVN0cmluZyA9IHRpbWVTdHJpbmcgKyBzZWNvbmRzICsgJyBzZWMnO1xuXG4gICAgICAgIHJldHVybiB0aW1lU3RyaW5nO1xuICAgIH1cblxufVxuXG5leHBvcnQge1N0cmluZ3N9OyJdfQ==

System.register([], function (_export) {
    "use strict";

    var Colors;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            Colors = (function () {
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
            })();

            _export("Colors", Colors);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDdEM7QUFDRCwrQkFBTyxHQUFHLENBQUM7cUJBQ2Q7Ozt1QkFuR0MsTUFBTTs7OzhCQXVHSixNQUFNIiwiZmlsZSI6ImpzL2hlbHBlcnMvY29sb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbG9ycyBoZWxwZXIgY2xhc3NcbiAqL1xuY2xhc3MgQ29sb3JzIHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHJnYiBjb2xvciB0byByZ2JhIGNvbG9yIHdpdGggYWRkaW5nIGFscGhhIGNoYW5uZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmdiIC0gJ3JnYihyZWQsIGdyZWVuLCBibHVlKScgKGUuZy46IHJnYig4NSw4NSw4NSkpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFscGhhIC0gWzAgLSAxXSwgZGVmYXVsdCBpcyAxXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmdiYSAtICdyZ2IocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpJyAoZS5nLjogcmdiKDg1LDg1LDg1LCAxKSlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHJiZzJyZ2JhKCdyZ2IoODUsODUsODUpJywgMC41KVxuICAgICAqIC8vLT4gcmdiYSg4NSw4NSw4NSwgMC41KVxuICAgICAqL1xuICAgIHN0YXRpYyByZ2IycmdiYSAocmdiLCBhbHBoYSkge1xuICAgICAgICBsZXQgcmdiYTtcbiAgICAgICAgaWYgKCFyZ2IpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGFscGhhID0gSGVscGVycy5Cb29sZWFucy5pc1RydXRoeVZhbHVlKGFscGhhKSA/IGFscGhhIDogMTtcbiAgICAgICAgcmdiYSA9IHJnYi5yZXBsYWNlKC9yZ2IvaSwgYHJnYmFgKTtcbiAgICAgICAgcmV0dXJuIHJnYmEucmVwbGFjZSgvXFwpL2ksIGAsICR7YWxwaGF9KWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvdmVydCBoZXggY29kZSB0byByZ2IgY29sb3IsIGhleCBjb2RlIHN1cHBvcnRlZCBmb3JtYXRzOiBcIiNGRkZcIiwgXCJGRkZcIiwgXCIjZmZmXCIsIFwiZmZmXCIsIFwiRkZGRkZGXCIsIFwiI0ZGRkZGRlwiXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhleCAtIGhleCBjb2RlXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSAtIHJldHVybiByZ2IgY29sb3IgaWYgaXQgaXMgdmFsaWQsIGVsc2UgbnVsbFxuICAgICAqIEBleGFtcGxlXG4gICAgICogaGV4MnJnYihcIiNGRkYwMDBcIikgcmVzdWx0IFwicmdiKDI1NSwyNDAsMClcIlxuICAgICAqL1xuICAgIHN0YXRpYyBoZXgycmdiIChoZXgpIHtcbiAgICAgICAgaWYoIWhleCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0LCBzaG9ydGhhbmRSZWdleDtcbiAgICAgICAgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICAgICAgICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgZnVuY3Rpb24obSwgciwgZywgYikge1xuICAgICAgICAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZ2IoXCIgKyBwYXJzZUludChyZXN1bHRbMV0sIDE2KSArIFwiLFwiICsgcGFyc2VJbnQocmVzdWx0WzJdLCAxNikgKyBcIixcIiArIHBhcnNlSW50KHJlc3VsdFszXSwgMTYpICsgXCIpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgcmdiIGNvbG9yIHRvIGhleCBjb2RlXG4gICAgICogQHBhcmFtIHshbnVtYmVyfSByIC0gcmdiIGNvbG9yIHJlZFxuICAgICAqIEBwYXJhbSB7IW51bWJlcn0gZyAtIHJnYiBjb2xvciBncmVlblxuICAgICAqIEBwYXJhbSB7IW51bWJlcn0gYiAtIHJnYiBjb2xvciBibHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSBoZXggY29kZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogcmdiMmhleCgxNzUsMjEwLDgwKTtcbiAgICAgKiAvLyAtPiBcIiNhZmQyNTBcIlxuICAgICAqL1xuICAgIHN0YXRpYyByZ2IyaGV4IChyLCBnLCBiKSB7XG4gICAgICAgIGlmKCFyIHx8ICFnIHx8ICFiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiggciA+IDI1NSB8fCBnID4gMjU1IHx8IGIgPiAyNTUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKCByIDwgMCB8fCBnIDwgMCB8fCBiIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBvbmVudFRvSGV4O1xuICAgICAgICBjb21wb25lbnRUb0hleCA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHZhciBoZXg7XG4gICAgICAgICAgICBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcwJyArIGhleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICcjJyArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgY29sb3IgbHVtaW5hbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhleCAtIGhleCBjb2RlIChlLmcuIFwiI2FmZDI1MFwiKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsdW0gLSBbLTEgfiAxXVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gbmV3IGhleCBjb2RlXG4gICAgICovXG4gICAgc3RhdGljIGNvbG9yTHVtaW5hbmNlIChoZXgsIGx1bSkge1xuICAgICAgICBpZighdGhpcy5oZXgycmdiKGhleCkgfHwgbHVtID4gMSB8fCBsdW0gPCAtMSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYywgaSwgaiwgcmdiID0gXCIjXCI7XG4gICAgICAgIGhleCA9IFN0cmluZyhoZXgpLnJlcGxhY2UoL1teMC05YS1mXS9naSwgJycpO1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgICAgICAgfVxuICAgICAgICBsdW0gPSBsdW0gfHwgMDtcbiAgICAgICAgZm9yIChpID0gaiA9IDA7IGogPD0gMjsgaSA9IGogKz0gMSkge1xuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGhleC5zdWJzdHIoaSAqIDIsIDIpLCAxNik7XG4gICAgICAgICAgICBjID0gTWF0aC5yb3VuZChNYXRoLm1pbihNYXRoLm1heCgwLCBjICsgKGMgKiBsdW0pKSwgMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgcmdiICs9IChcIjAwXCIgKyBjKS5zdWJzdHIoYy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7Q29sb3JzfTsiXX0=

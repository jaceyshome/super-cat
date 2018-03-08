System.register([], function (_export) {
  'use strict';

  var Numbers;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Numbers = (function () {
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
      })();

      _export('Numbers', Numbers);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2hlbHBlcnMvbnVtYmVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFJTSxPQUFPOzs7Ozs7Ozs7QUFBUCxhQUFPO2lCQUFQLE9BQU87Z0NBQVAsT0FBTzs7O3FCQUFQLE9BQU87O2lCQU9PLGtCQUFDLEdBQUcsRUFBRTtBQUNsQixtQkFBTyxBQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUN0RDs7O2lCQVErQixtQ0FBQyxHQUFHLEVBQUU7QUFDbEMsbUJBQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1dBQ2pFOzs7ZUFuQkMsT0FBTzs7O3lCQXNCTCxPQUFPIiwiZmlsZSI6ImpzL2hlbHBlcnMvbnVtYmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBOdW1iZXJzIGhlbHBlciBjbGFzc1xuICovXG5jbGFzcyBOdW1iZXJzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgdmFyaWFibGUgaXMgYSB2YWxpZCBuZWdhdGl2ZSBvciBwb3NpdGl2ZSBudW1iZXIgb3Igbm90LFxuICAgICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTE1MzEwL2lzLXRoZXJlLWEtc3RhbmRhcmQtZnVuY3Rpb24tdG8tY2hlY2stZm9yLW51bGwtdW5kZWZpbmVkLW9yLWJsYW5rLXZhcmlhYmxlcy1pblxuICAgICAqIEBwYXJhbSB7TnVtYmVyfCp9IHZhbCAtIHZhbHVlIHRvIHRlc3QsIHN1cHBvcnQgc3RyaW5nIHR5cGUgbnVtYmVyIGxpa2UgXCIxMjNcIlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgZWxzZSBmYWxzZVxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bWJlciAodmFsKSB7XG4gICAgICAgIHJldHVybiAoICFpc05hTihwYXJzZUZsb2F0KHZhbCkpKSAmJiBpc0Zpbml0ZSh2YWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0cmlwIG5vbi1udW1lcmljIGNoYXJhY3RlcnMgZnJvbSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsIC0gbm9uLW51bWVyaWMgY2hhcmFjdGVycyBzdHJpbmcsIGZvciBleGFtcGxlOiAnPHNwYW4+MTIzLjg8L3NwYW4+J1xuICAgICAqIEByZXR1cm5zIHtGbG9hdH0gMTAgYml0IGRpZ2l0YWwgcG9zaXRpdmUgb3IgbmVnYXRpdmUgZmxvYXQgcG9pbnQgbnVtYmVyXG4gICAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4NjIxMzAvc3RyaXAtbm9uLW51bWVyaWMtY2hhcmFjdGVycy1mcm9tLXN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBzdHJpcE5vbk51bWVyaWNDaGFyYWN0ZXJzKHZhbCkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJyksIDEwKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7TnVtYmVyc307Il19

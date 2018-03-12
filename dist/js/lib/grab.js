System.register(['jquery'], function (_export) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9ncmFiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztXQW1ESSxJQUFJOzs7Ozs7QUFBSixnQkFBSSxHQUFHLFNBQVAsSUFBSSxDQUFZLE1BQU0sRUFBRSxLQUFLLEVBQXdCO29CQUF0QixTQUFTLHlEQUFHLFFBQVE7O0FBQ25ELG9CQUFJLE1BQU0sWUFBWSxDQUFDLEVBQUU7QUFDckIsMkJBQU8sTUFBTSxDQUFDO2lCQUNqQjs7QUFFRCxvQkFBSSxNQUFNLFlBQVksT0FBTyxFQUFFO0FBQzNCLDJCQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDcEI7O0FBRUQsb0JBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO0FBQzVCLDJCQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDckMsMkJBQU8sQ0FBQyxFQUFFLENBQUM7aUJBQ2Q7O0FBRUQsb0JBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDekIsMEJBQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7O0FBRUQsb0JBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDekIsd0JBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7QUFDcEMsK0JBQU8sQ0FBQyxJQUFJLG1CQUFpQixTQUFTLG9DQUE4QixTQUFTLGlDQUE0QixDQUFDO3FCQUM3Rzs7QUFFRCwyQkFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3BCOztBQUVELG9CQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsb0JBQUksU0FBUyxJQUFJLFFBQVEsRUFBRTtBQUN2QiwwQkFBTSxHQUFHLFNBQVMsQ0FBQztpQkFDdEIsTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7QUFDNUIsMEJBQU0sR0FBRyxTQUFTLENBQUM7aUJBQ3RCLE1BQU07QUFDSCx3QkFBSSxTQUFTLElBQUksU0FBUyxJQUFJLFFBQVEsRUFBRztBQUNyQywrQkFBTyxDQUFDLElBQUksNkNBQTBDLFNBQVMsU0FBSyxDQUFDO3FCQUN4RTtBQUNELDBCQUFNLEdBQUcsTUFBTSxDQUFDO2lCQUNuQjs7QUFFRCx1QkFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7OytCQUVjLElBQUkiLCJmaWxlIjoianMvbGliL2dyYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFVuaXZlcnNpdHkgb2YgU3lkbmV5IERPTSBlbGVtZW50IGhlbHBlclxuICogUmVmZXJlbmNl77yaIGh0dHBzOi8vYml0YnVja2V0Lm9yZy9zeWRuZXl1bmkvZ2FyZmllbGRcbiAqIEhlbHBzIHlvdSBcImdyYWJcIiBET00gZWxlbWVudCB0YXJnZXRzIHJlbGF0aXZlIHRvIGEgc2NvcGUgRWxlbWVudC4gVGhpbmsgb2YgaXQgYXMgYSBzZW1pLXNjb3BlZCBpbnN0YW5jZSBvZiAkIHdpdGggZXh0cmEgc3VnYXIuXG4gKiBUaGUgdGFyZ2V0IGNhbiBiZSBzcGVjaWZpZWQgaW4gZm91ciB3YXlzOlxuICpcbiAqIC0gQSByZWd1bGFyIHNlbGVjdG9yICguZXhhbXBsZSksIGluIHdoaWNoIGNhc2UgZWxlbWVudHMgd2lsbCBiZSBzZWxlY3RlZCByZWxhdGl2ZSB0byB0aGUgc2NvcGUsIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uXG4gKiAtIEEgc2VsZWN0b3Igc3RhcnRpbmcgd2l0aCBhbiBJRCAoI2V4YW1wbGUgLmV4YW1wbGUpLCBpbiB3aGljaCBjYXNlIGFuIGVsZW1lbnQgd2lsbCBiZSBzZWxlY3RlZCBmcm9tIGFueXdoZXJlIGluIHRoZSBkb2N1bWVudFxuICogLSBBIGRhdGEgYXR0cmlidXRlIGtleSAoQGV4YW1wbGUpLCBpbiB3aGljaCBjYXNlIHRoZSBhdHRyaWJ1dGUgc3BlY2lmaWVkIHdpbGwgYmUgdXNlZCB0byB0cnkgdG8gZmluZCBhbiBlbGVtZW50IHVzaW5nIHRoZSBmaXJzdCB0d28gcnVsZXNcbiAqIC0gQSBqUXVlcnkgb3IgRE9NIGVsZW1lbnQsIGluIHdoaWNoIGNhc2UgaXQgd2lsbCBiZSBpbW1lZGlhdGVseSByZXR1cm5lZCBhcyBhIGpRdWVyeSBvYmplY3RcbiAqXG4gKiBgZ3JhYmAgaXMgaW50ZW5kZWQgdG8gbWFrZSBpdCBlYXN5IHRvIHdvcmsgd2l0aCBjb25maWd1cmFibGUgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIEJhc2ljIHVzYWdlOlxuICpcbiAqIGBgYFxuICogPGRpdiBjbGFzcz1cIml0ZW1zXCIgZGF0YS1pdGVtcz1cIi5pdGVtXCI+XG4gKiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgaWQ9XCJpdGVtXCI+PC9kaXY+XG4gKiA8L2Rpdj5cbiAqICBgYGBcbiAqIEFsbCB0aGVzZSB3aWxsIHJldHVybiB0aGUgc2FtZSBlbGVtZW50OlxuICpcbiAqIGBgYFxuICogZ3JhYignLml0ZW0nLCAkKCcuaXRlbXMnKSk7XG4gKiBncmFiKCcjaXRlbScsICQoJy5pdGVtcycpKTtcbiAqIGdyYWIoJ0BpdGVtJywgJCgnLml0ZW1zJykpO1xuICogYGBgXG4gKlxuICogU2luY2UgYGdyYWJgIGlzIGludGVuZGVkIG1haW5seSBmb3IgdXNlIHdpdGggY29uZmlnIG9wdGlvbnMsIGl0J3MgbW9yZSB1c2VmdWwgd2hlbiB5b3UgY29tYmluZSBpdCB3aXRoIGEgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gYWxsb3cgdXNlcnMgdG8gcGFzcyBpbiBhIHZhcmlldHkgb2Ygb3B0aW9uIHZhbHVlczpcbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIG15QmVoYXZpb3VyKGNvbmZpZywgZWwpIHtcbiAqICAgICAgbGV0ICRlbCA9ICQoZWwpO1xuICogICAgICBsZXQgJGl0ZW1zID0gZ3JhYihjb25maWcuaXRlbXMsICRlbCk7XG4gKiAgICAgICRpdGVtcy5kb1NvbWV0aGluZ0FtYXppbmcoKTtcbiAqIH1cbiAqXG4gKiBteUJlaGF2aW91cih7IGl0ZW1zOiAnLml0ZW0nIH0sICcuc29tZS1lbGVtZW50Jyk7XG4gKiBteUJlaGF2aW91cih7IGl0ZW1zOiAkKCc8ZGl2IGNsYXNzPVwiaXRlbVwiPjwvZGl2PicpIH0sICcuc29tZS1vdGhlci1lbGVtZW50Jyk7XG4gKiBteUJlaGF2aW91cih7IGl0ZW1zOiAnQGl0ZW1zJyB9LCAkKCc8ZGl2IGNsYXNzPVwic29tZS10aGlyZC1lbGVtZW50XCIgZGF0YS1pdGVtcz1cIi5pdGVtXCI+PGRpdiBjbGFzcz1cIml0ZW1cIj48L2Rpdj48L2Rpdj4nKSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQsIHNlbGVjdG9yIG9yIGF0dHJpYnV0ZSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGUgLSBUaGUgZWxlbWVudCB0byBncmFiIHJlbGF0aXZlIHRvIChlLmcuIHNlbGVjdCBpbnNpZGUsIG9yIGJlZm9yZSBvciBhZnRlciwgb3IgdGhlIGxvY2F0aW9uIG9mIHRoZSBzZWxlY3RvciBhdHRyaWJ1dGUpXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIC0gVGhlIGRpcmVjdGlvbiB0byBzZWxlY3QgaW4gKFwiYmVmb3JlXCI7IGJlZm9yZSBzY29wZSBlbGVtZW50LCBcImFmdGVyXCI7IGFmdGVyIHNjb3BlIGVsZW1lbnQsIFwiaW5zaWRlXCI7IERlZmF1bHQsIGluc2lkZSBzY29wZSBlbGVtZW50KVxuICogQHJldHVybnMge09iamVjdH0gLSBqUXVlcnkgZWxlbWVudFxuICovXG5sZXQgZ3JhYiA9IGZ1bmN0aW9uKHRhcmdldCwgc2NvcGUsIGRpcmVjdGlvbiA9ICdpbnNpZGUnKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mICQpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gJCh0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHRhcmdldCB0eXBlLlwiKTtcbiAgICAgICAgcmV0dXJuICQoKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmNoYXJBdCgwKSA9PSAnQCcpIHtcbiAgICAgICAgdGFyZ2V0ID0gJChzY29wZSkuZGF0YSgpWyQuY2FtZWxDYXNlKHRhcmdldC5zdWJzdHJpbmcoMSkpXTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmNoYXJBdCgwKSA9PSAnIycpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gIT0gJ2luc2lkZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSUQgc2VsZWN0b3IgKCR7ZGlyZWN0aW9ufSkgY29tYmluZWQgd2l0aCBkaXJlY3Rpb24gJyR7ZGlyZWN0aW9ufScgd29uJ3Qgd29yayBhcyBleHBlY3RlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkKHRhcmdldCk7XG4gICAgfVxuXG4gICAgbGV0IG1ldGhvZDtcbiAgICBpZiAoZGlyZWN0aW9uID09ICdiZWZvcmUnKSB7XG4gICAgICAgIG1ldGhvZCA9ICdwcmV2QWxsJztcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnbmV4dCcpIHtcbiAgICAgICAgbWV0aG9kID0gJ25leHRBbGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gJiYgZGlyZWN0aW9uICE9ICdpbnNpZGUnICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gdXNlIGludmFsaWQgZ3JhYiBkaXJlY3Rpb24gJyR7ZGlyZWN0aW9ufScuYCk7XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kID0gJ2ZpbmQnO1xuICAgIH1cblxuICAgIHJldHVybiAkKHNjb3BlKVttZXRob2RdKHRhcmdldCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBncmFiO1xuIl19

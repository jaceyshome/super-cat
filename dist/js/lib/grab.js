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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYi9ncmFiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztXQWtESSxJQUFJOzs7Ozs7QUFBSixnQkFBSSxHQUFHLFNBQVAsSUFBSSxDQUFZLE1BQU0sRUFBRSxLQUFLLEVBQXdCO29CQUF0QixTQUFTLHlEQUFHLFFBQVE7O0FBQ25ELG9CQUFJLE1BQU0sWUFBWSxDQUFDLEVBQUU7QUFDckIsMkJBQU8sTUFBTSxDQUFDO2lCQUNqQjs7QUFFRCxvQkFBSSxNQUFNLFlBQVksT0FBTyxFQUFFO0FBQzNCLDJCQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDcEI7O0FBRUQsb0JBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO0FBQzVCLDJCQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDckMsMkJBQU8sQ0FBQyxFQUFFLENBQUM7aUJBQ2Q7O0FBRUQsb0JBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDekIsMEJBQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7O0FBRUQsb0JBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDekIsd0JBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7QUFDcEMsK0JBQU8sQ0FBQyxJQUFJLG1CQUFpQixTQUFTLG9DQUE4QixTQUFTLGlDQUE0QixDQUFDO3FCQUM3Rzs7QUFFRCwyQkFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3BCOztBQUVELG9CQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsb0JBQUksU0FBUyxJQUFJLFFBQVEsRUFBRTtBQUN2QiwwQkFBTSxHQUFHLFNBQVMsQ0FBQztpQkFDdEIsTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7QUFDNUIsMEJBQU0sR0FBRyxTQUFTLENBQUM7aUJBQ3RCLE1BQU07QUFDSCx3QkFBSSxTQUFTLElBQUksU0FBUyxJQUFJLFFBQVEsRUFBRztBQUNyQywrQkFBTyxDQUFDLElBQUksNkNBQTBDLFNBQVMsU0FBSyxDQUFDO3FCQUN4RTtBQUNELDBCQUFNLEdBQUcsTUFBTSxDQUFDO2lCQUNuQjs7QUFFRCx1QkFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7OytCQUVjLElBQUkiLCJmaWxlIjoianMvbGliL2dyYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFJlZmVyZW5jZe+8miBodHRwczovL2JpdGJ1Y2tldC5vcmcvc3lkbmV5dW5pL2dhcmZpZWxkXG4gKiBIZWxwcyB5b3UgXCJncmFiXCIgRE9NIGVsZW1lbnQgdGFyZ2V0cyByZWxhdGl2ZSB0byBhIHNjb3BlIEVsZW1lbnQuIFRoaW5rIG9mIGl0IGFzIGEgc2VtaS1zY29wZWQgaW5zdGFuY2Ugb2YgJCB3aXRoIGV4dHJhIHN1Z2FyLlxuICogVGhlIHRhcmdldCBjYW4gYmUgc3BlY2lmaWVkIGluIGZvdXIgd2F5czpcbiAqXG4gKiAtIEEgcmVndWxhciBzZWxlY3RvciAoLmV4YW1wbGUpLCBpbiB3aGljaCBjYXNlIGVsZW1lbnRzIHdpbGwgYmUgc2VsZWN0ZWQgcmVsYXRpdmUgdG8gdGhlIHNjb3BlLCBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvblxuICogLSBBIHNlbGVjdG9yIHN0YXJ0aW5nIHdpdGggYW4gSUQgKCNleGFtcGxlIC5leGFtcGxlKSwgaW4gd2hpY2ggY2FzZSBhbiBlbGVtZW50IHdpbGwgYmUgc2VsZWN0ZWQgZnJvbSBhbnl3aGVyZSBpbiB0aGUgZG9jdW1lbnRcbiAqIC0gQSBkYXRhIGF0dHJpYnV0ZSBrZXkgKEBleGFtcGxlKSwgaW4gd2hpY2ggY2FzZSB0aGUgYXR0cmlidXRlIHNwZWNpZmllZCB3aWxsIGJlIHVzZWQgdG8gdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCB1c2luZyB0aGUgZmlyc3QgdHdvIHJ1bGVzXG4gKiAtIEEgalF1ZXJ5IG9yIERPTSBlbGVtZW50LCBpbiB3aGljaCBjYXNlIGl0IHdpbGwgYmUgaW1tZWRpYXRlbHkgcmV0dXJuZWQgYXMgYSBqUXVlcnkgb2JqZWN0XG4gKlxuICogYGdyYWJgIGlzIGludGVuZGVkIHRvIG1ha2UgaXQgZWFzeSB0byB3b3JrIHdpdGggY29uZmlndXJhYmxlIHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBCYXNpYyB1c2FnZTpcbiAqXG4gKiBgYGBcbiAqIDxkaXYgY2xhc3M9XCJpdGVtc1wiIGRhdGEtaXRlbXM9XCIuaXRlbVwiPlxuICogICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIGlkPVwiaXRlbVwiPjwvZGl2PlxuICogPC9kaXY+XG4gKiAgYGBgXG4gKiBBbGwgdGhlc2Ugd2lsbCByZXR1cm4gdGhlIHNhbWUgZWxlbWVudDpcbiAqXG4gKiBgYGBcbiAqIGdyYWIoJy5pdGVtJywgJCgnLml0ZW1zJykpO1xuICogZ3JhYignI2l0ZW0nLCAkKCcuaXRlbXMnKSk7XG4gKiBncmFiKCdAaXRlbScsICQoJy5pdGVtcycpKTtcbiAqIGBgYFxuICpcbiAqIFNpbmNlIGBncmFiYCBpcyBpbnRlbmRlZCBtYWlubHkgZm9yIHVzZSB3aXRoIGNvbmZpZyBvcHRpb25zLCBpdCdzIG1vcmUgdXNlZnVsIHdoZW4geW91IGNvbWJpbmUgaXQgd2l0aCBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGFsbG93IHVzZXJzIHRvIHBhc3MgaW4gYSB2YXJpZXR5IG9mIG9wdGlvbiB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiBteUJlaGF2aW91cihjb25maWcsIGVsKSB7XG4gKiAgICAgIGxldCAkZWwgPSAkKGVsKTtcbiAqICAgICAgbGV0ICRpdGVtcyA9IGdyYWIoY29uZmlnLml0ZW1zLCAkZWwpO1xuICogICAgICAkaXRlbXMuZG9Tb21ldGhpbmdBbWF6aW5nKCk7XG4gKiB9XG4gKlxuICogbXlCZWhhdmlvdXIoeyBpdGVtczogJy5pdGVtJyB9LCAnLnNvbWUtZWxlbWVudCcpO1xuICogbXlCZWhhdmlvdXIoeyBpdGVtczogJCgnPGRpdiBjbGFzcz1cIml0ZW1cIj48L2Rpdj4nKSB9LCAnLnNvbWUtb3RoZXItZWxlbWVudCcpO1xuICogbXlCZWhhdmlvdXIoeyBpdGVtczogJ0BpdGVtcycgfSwgJCgnPGRpdiBjbGFzcz1cInNvbWUtdGhpcmQtZWxlbWVudFwiIGRhdGEtaXRlbXM9XCIuaXRlbVwiPjxkaXYgY2xhc3M9XCJpdGVtXCI+PC9kaXY+PC9kaXY+JykpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBlbGVtZW50LCBzZWxlY3RvciBvciBhdHRyaWJ1dGUgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlIC0gVGhlIGVsZW1lbnQgdG8gZ3JhYiByZWxhdGl2ZSB0byAoZS5nLiBzZWxlY3QgaW5zaWRlLCBvciBiZWZvcmUgb3IgYWZ0ZXIsIG9yIHRoZSBsb2NhdGlvbiBvZiB0aGUgc2VsZWN0b3IgYXR0cmlidXRlKVxuICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiAtIFRoZSBkaXJlY3Rpb24gdG8gc2VsZWN0IGluIChcImJlZm9yZVwiOyBiZWZvcmUgc2NvcGUgZWxlbWVudCwgXCJhZnRlclwiOyBhZnRlciBzY29wZSBlbGVtZW50LCBcImluc2lkZVwiOyBEZWZhdWx0LCBpbnNpZGUgc2NvcGUgZWxlbWVudClcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0galF1ZXJ5IGVsZW1lbnRcbiAqL1xubGV0IGdyYWIgPSBmdW5jdGlvbih0YXJnZXQsIHNjb3BlLCBkaXJlY3Rpb24gPSAnaW5zaWRlJykge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiAkKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICQodGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCB0YXJnZXQgdHlwZS5cIik7XG4gICAgICAgIHJldHVybiAkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5jaGFyQXQoMCkgPT0gJ0AnKSB7XG4gICAgICAgIHRhcmdldCA9ICQoc2NvcGUpLmRhdGEoKVskLmNhbWVsQ2FzZSh0YXJnZXQuc3Vic3RyaW5nKDEpKV07XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5jaGFyQXQoMCkgPT0gJyMnKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gJiYgZGlyZWN0aW9uICE9ICdpbnNpZGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYElEIHNlbGVjdG9yICgke2RpcmVjdGlvbn0pIGNvbWJpbmVkIHdpdGggZGlyZWN0aW9uICcke2RpcmVjdGlvbn0nIHdvbid0IHdvcmsgYXMgZXhwZWN0ZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJCh0YXJnZXQpO1xuICAgIH1cblxuICAgIGxldCBtZXRob2Q7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAnYmVmb3JlJykge1xuICAgICAgICBtZXRob2QgPSAncHJldkFsbCc7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ25leHQnKSB7XG4gICAgICAgIG1ldGhvZCA9ICduZXh0QWxsJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGlyZWN0aW9uICYmIGRpcmVjdGlvbiAhPSAnaW5zaWRlJyApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIHVzZSBpbnZhbGlkIGdyYWIgZGlyZWN0aW9uICcke2RpcmVjdGlvbn0nLmApO1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZCA9ICdmaW5kJztcbiAgICB9XG5cbiAgICByZXR1cm4gJChzY29wZSlbbWV0aG9kXSh0YXJnZXQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhYjtcbiJdfQ==

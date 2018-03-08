System.register(['./lib/garfield', 'jquery', 'bluebird', './lib/constants', 'components/_cat-clicker/cat-list/cat-list', 'components/_cat-clicker/cat-detail-panel/cat-detail-panel', 'components/_cat-clicker/cat-description-panel/cat-description-panel', 'components/_cat-clicker/cat-list-counter/cat-list-counter'], function (_export) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lHQTZCSSxRQUFROzs7Ozs7O3NDQXpCSixTQUFTOzsyREFpQ1IsT0FBTzs7Z0ZBQ1AsY0FBYzs7K0ZBQ2QsbUJBQW1COztnRkFDbkIsY0FBYzs7O0FBL0J2QixnQkFBSTtBQUVBLDJCQUFXLENBQUMsTUFBTSxDQUFDO0FBR2YsZ0NBQVksRUFBRSxJQUFJLEVBRXJCLENBQUMsQ0FBQzthQUNOLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDUix1QkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjs7QUFFRCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7QUFDcEMsc0JBQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQzFDOztBQUVELGdCQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDN0Msc0JBQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7YUFDL0Q7O0FBRUcsb0JBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVE7O0FBbUJ6RCxvQkFBUSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN4RCxvQkFBUSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2xFLG9CQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLG9CQUFRLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLGNBQWMsQ0FBQyxDQUFDOztBQU94RCxvQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImpzL2V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dsb2JhbCBvYmplY3QsIGV2ZXJ5dGhpbmcgc2hvdWxkIGJlIGluIHRoaXMgZ2xvYmFsIG9iamVjdCB0byBhdm9pZCBnbG9iYWwgZW52aXJvbm1lbnQgcG9sbHV0aW9uXG5pbXBvcnQgJy4vbGliL2dhcmZpZWxkJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQmx1ZVByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vbGliL2NvbnN0YW50cyc7XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgY29uZmlnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG50cnkge1xuICAgIC8vQVBJOiBodHRwOi8vYmx1ZWJpcmRqcy5jb20vZG9jcy9hcGkvcHJvbWlzZS5jb25maWcuaHRtbFxuICAgIEJsdWVQcm9taXNlLmNvbmZpZyh7XG4gICAgICAgIC8vd2FybmluZ3M6IHRydWUsICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSB3YXJuaW5nc1xuICAgICAgICAvL2xvbmdTdGFja1RyYWNlczogdHJ1ZSwgICAgICAgICAgICAvLyBFbmFibGUgbG9uZyBzdGFjayB0cmFjZXNcbiAgICAgICAgY2FuY2VsbGF0aW9uOiB0cnVlLCAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGNhbmNlbGxhdGlvbiwgZm9yIGNhbmNlbGxpbmcgcHJvbWlzZVxuICAgICAgICAvL21vbml0b3Jpbmc6IHRydWUgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgbW9uaXRvcmluZ1xuICAgIH0pO1xufSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihlKTtcbn1cblxuaWYgKCF3aW5kb3dbQ29uc3RhbnRzLkdMT0JBTF9JTlNUQU5DRV0pIHtcbiAgICB3aW5kb3dbQ29uc3RhbnRzLkdMT0JBTF9JTlNUQU5DRV0gPSB7fTtcbn1cblxuaWYgKCF3aW5kb3dbQ29uc3RhbnRzLkdMT0JBTF9JTlNUQU5DRV0uZ2FyZmllbGQpIHtcbiAgICB3aW5kb3dbQ29uc3RhbnRzLkdMT0JBTF9JTlNUQU5DRV0uZ2FyZmllbGQgPSBuZXcgR2FyZmllbGQoKTtcbn1cblxubGV0IGdhcmZpZWxkID0gd2luZG93W0NvbnN0YW50cy5HTE9CQUxfSU5TVEFOQ0VdLmdhcmZpZWxkO1xuXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEltcG9ydCBjb21wb25lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBJbXBvcnQgY29tcG9uZW50cyB0byBiZSB1c2VkIGZvciBiaW5kaW5nIChiZWxvdykuIElmIHlvdSB3YW50IHRvIHJlZ2lzdGVyIHlvdXIgY29tcG9uZW50IHlvdSBoYXZlIHRvIGltcG9ydCBpdCwgaGVyZSBmaXJzdCB0aGVuIGJpbmQgaXQgYmVsb3cuXG4gKi9cbmltcG9ydCB7IENhdExpc3QgfSBmcm9tICdjb21wb25lbnRzL19jYXQtY2xpY2tlci9jYXQtbGlzdC9jYXQtbGlzdCc7XG5pbXBvcnQgeyBDYXREZXRhaWxQYW5lbCB9IGZyb20gJ2NvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1kZXRhaWwtcGFuZWwvY2F0LWRldGFpbC1wYW5lbCc7XG5pbXBvcnQgeyBDYXREZXNjcmlwdGlvblBhbmVsIH0gZnJvbSAnY29tcG9uZW50cy9fY2F0LWNsaWNrZXIvY2F0LWRlc2NyaXB0aW9uLXBhbmVsL2NhdC1kZXNjcmlwdGlvbi1wYW5lbCc7XG5pbXBvcnQgeyBDYXRMaXN0Q291bnRlciB9IGZyb20gJ2NvbXBvbmVudHMvX2NhdC1jbGlja2VyL2NhdC1saXN0LWNvdW50ZXIvY2F0LWxpc3QtY291bnRlcic7XG5cblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQmluZCBjb21wb25lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi8vIEJpbmRpbmdzIGZvciByZWd1bGFyIGNvbXBvbmVudHMuIEFkZCB5b3VyIGNvbXBvbmVudCBoZXJlIHRvIHJlZ2lzdGVyIGl0LlxuZ2FyZmllbGQuYmluZCgnLmItanMtY2F0LWRldGFpbC1wYW5lbCcsIENhdERldGFpbFBhbmVsKTtcbmdhcmZpZWxkLmJpbmQoJy5iLWpzLWNhdC1kZXNjcmlwdGlvbi1wYW5lbCcsIENhdERlc2NyaXB0aW9uUGFuZWwpO1xuZ2FyZmllbGQuYmluZCgnLmItanMtY2F0LWxpc3QnLCBDYXRMaXN0KTtcbmdhcmZpZWxkLmJpbmQoJy5iLWpzLWNhdC1saXN0LWNvdW50ZXInLCBDYXRMaXN0Q291bnRlcik7XG5cblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW5pdCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuZ2FyZmllbGQuaW5pdCgpO1xuIl19

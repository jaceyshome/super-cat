//jshint-ignore
import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["class", "b-component--tighter"]
var hoisted2 = ["class", "grid"]
var hoisted3 = ["class", "1/2 grid__cell"]
var hoisted4 = ["href", "javascript:void(0);", "class", "b-link--block b-link--no-underline", "title", "show cat details"]
var __target

export function catListCounterTplFn (vm) {
elementOpen("p")
  text("Cat list counter")
elementClose("p")
__target = vm.proxy
if (__target) {
  ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
    var cat = $value
    var $key = "16b4be09-a771-4a16-938a-e507f229afe5_" + $item
    elementOpen("div", $key, hoisted1)
      elementOpen("div", "39e95b2a-8e7c-42cd-9daa-6ebf617ab906_" + $key, hoisted2)
        elementOpen("div", "53f4c932-a8c1-4e19-9683-8d590bbfe0c2_" + $key, hoisted3)
          elementOpen("a", "eff08e48-9e41-4918-ba34-e766088db2e0_" + $key, hoisted4, "onclick", function ($event) {
            var $element = this;
          vm.handlers.clickCat(cat)})
            elementOpen("span")
              text("NAME: " + (cat.name) + " COUNTS: " + (cat.counter) + "")
            elementClose("span")
          elementClose("a")
        elementClose("div")
      elementClose("div")
    elementClose("div")
  }, this)
}
}

//jshint-ignore-end
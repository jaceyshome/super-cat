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
    var $key = "9952384a-6706-4e90-932c-1197edd13271_" + $item
    elementOpen("div", $key, hoisted1)
      elementOpen("div", "b8818df9-dafa-4af4-a1d7-3a7a6b896ea8_" + $key, hoisted2)
        elementOpen("div", "348b9a98-c062-44de-b49d-32b881ec1e67_" + $key, hoisted3)
          elementOpen("a", "580f7949-f316-456c-a3df-c0ef5cd3d737_" + $key, hoisted4, "onclick", function ($event) {
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
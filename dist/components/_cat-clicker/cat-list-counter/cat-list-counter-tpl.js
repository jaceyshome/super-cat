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
    var $key = "65b106bd-28f5-404a-8e96-6c74e2b71af2_" + $item
    elementOpen("div", $key, hoisted1)
      elementOpen("div", "d4b7dae4-8ed9-4272-9272-923f4cf0fd49_" + $key, hoisted2)
        elementOpen("div", "a18e48d0-1960-4211-abb2-ffc1bcfa96d9_" + $key, hoisted3)
          elementOpen("a", "842fc674-7786-43ae-8270-0e2b4f845aa5_" + $key, hoisted4, "onclick", function ($event) {
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
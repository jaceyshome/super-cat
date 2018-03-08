//jshint-ignore
import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["style", "background-color: rgba(255,243,205,0.39); margin-bottom: 20px; padding: 20px;"]
var hoisted2 = ["class", "grid"]
var hoisted3 = ["class", "2/3 grid__cell"]
var hoisted4 = ["class", "grid"]
var hoisted5 = ["class", "2/3 grid__cell"]
var hoisted6 = ["href", "javascript:void(0);", "class", "btn btn-primary", "style", "padding: 2px 5px; margin-bottom: 10px;", "title", "add a cat"]
var hoisted7 = ["style", "margin-bottom: 5px;"]
var hoisted8 = ["class", "grid"]
var hoisted9 = ["class", "1/2 grid__cell"]
var hoisted10 = ["href", "javascript:void(0);", "class", "b-link--block b-link--no-underline", "title", "show cat details"]
var hoisted11 = ["class", "1/4 grid__cell"]
var hoisted12 = ["href", "javascript:void(0);", "class", "btn btn-primary", "style", "padding: 2px 5px;", "title", "edit cat"]
var hoisted13 = ["class", "1/4 grid__cell"]
var hoisted14 = ["href", "javascript:void(0);", "class", "btn btn-primary", "style", "padding: 2px 5px;", "title", "delete cat"]
var hoisted15 = ["class", "b-js-cat-description-panel b-component", "style", "background-color: rgba(173,184,230,0.49); padding: 10px;"]
var hoisted16 = ["data-js-el", "name"]
var hoisted17 = ["data-js-el", "counter"]
var hoisted18 = ["href", "javascript:void(0);", "class", "btn btn-primary", "title", "like cat", "data-js-el", "button-like"]
var __target

export function catListTplFn (vm) {
elementOpen("div", "5d63f97c-f6df-401b-9748-477198370cdd", hoisted1)
  elementOpen("h3")
    text("Cat list component")
  elementClose("h3")
  elementOpen("div", "963e11eb-e4db-4c8d-9a84-5e4280c206a2", hoisted2)
    elementOpen("div", "5e038fc3-b10e-4bc9-9069-8765ac9d15b3", hoisted3)
      elementOpen("p")
        text("" + (vm.proxy.description) + "")
      elementClose("p")
    elementClose("div")
  elementClose("div")
  elementOpen("div", "19e06a47-acdb-4a29-bfc0-8fe5bb76e95d", hoisted4)
    elementOpen("div", "9802aa46-c774-407a-b21f-21c38e000f08", hoisted5)
      elementOpen("a", "61372640-47de-43ce-87e5-20d32569228e", hoisted6, "onclick", function ($event) {
        var $element = this;
      vm.handlers.addCat()})
        text("create")
      elementClose("a")
    elementClose("div")
  elementClose("div")
  __target = vm.proxy.cats
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var cat = $value
      var $key = "96ca3e83-08c2-4dda-bbe2-a312520ab7b5_" + $item
      elementOpen("div", $key, hoisted7)
        elementOpen("div", "1822a389-4bfd-4ff3-b72a-8e9068298ccf_" + $key, hoisted8)
          elementOpen("div", "5171a616-6ccc-4343-a2a8-fe76d4a07d8f_" + $key, hoisted9)
            elementOpen("a", "14b7e48c-ac00-4ba0-b4fc-fc532d79ded8_" + $key, hoisted10, "onclick", function ($event) {
              var $element = this;
            vm.handlers.clickCat(cat)})
              elementOpen("span")
                text("" + (cat.name) + " counts: " + (cat.counter) + "")
              elementClose("span")
              if (vm.proxy.selectedCat.name == cat.name) {
                text("                             (Selected)                         ")
              }
            elementClose("a")
          elementClose("div")
          elementOpen("div", "292c0c5d-142a-4b0e-baba-b51d28e96a08_" + $key, hoisted11)
            elementOpen("a", "ac5cb2ef-7fcf-49cb-8cd9-e0a21b719cb7_" + $key, hoisted12, "onclick", function ($event) {
              var $element = this;
            vm.handlers.selectCat(cat)})
              text("select")
            elementClose("a")
          elementClose("div")
          elementOpen("div", "a7c1324e-c9ca-4da9-88f4-7292fe136695_" + $key, hoisted13)
            elementOpen("a", "78ac1c02-a6dd-46ef-aeaa-8f78fd15a2e5_" + $key, hoisted14, "onclick", function ($event) {
              var $element = this;
            vm.handlers.deleteCat(cat)})
              text("delete")
            elementClose("a")
          elementClose("div")
        elementClose("div")
      elementClose("div")
    }, this)
  }
elementClose("div")
elementOpen("div", "aee83fc8-d99e-4334-8f06-94f493723f70", hoisted15)
  elementOpen("h3")
    text("Cat description panel component")
  elementClose("h3")
  elementOpen("p")
    text("I have a ")
    elementOpen("b", "1d263b47-4b76-4b90-8411-fbc8d4bbc096", hoisted16)
      text("" + (vm.proxy.selectedCat.name) + "")
    elementClose("b")
    text(" and I have visited he/she ")
    elementOpen("b", "8824afcb-51ad-4764-9c5a-7cf46d4f7666", hoisted17)
      text("" + (vm.proxy.selectedCat.counter) + "")
    elementClose("b")
    text(" times. ")
  elementClose("p")
  elementOpen("a", "0b28ed5c-2fd4-4ba0-9c80-1bb5ed28cf8f", hoisted18)
    text("like")
  elementClose("a")
elementClose("div")
}

//jshint-ignore-end
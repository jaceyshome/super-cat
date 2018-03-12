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
elementOpen("div", "25fdd2c8-5e05-463a-bc96-32749f3c8a4f", hoisted1)
  elementOpen("h3")
    text("Cat list component")
  elementClose("h3")
  elementOpen("div", "65da92fe-cc01-4000-a551-1e4c3cc7dbbc", hoisted2)
    elementOpen("div", "729848a3-aa92-42fc-b306-417eb082af1c", hoisted3)
      elementOpen("p")
        text("" + (vm.proxy.description) + "")
      elementClose("p")
    elementClose("div")
  elementClose("div")
  elementOpen("div", "4d7dbea5-b3be-4270-88d2-ba5e14457613", hoisted4)
    elementOpen("div", "549bf84c-ef0d-430e-a219-401f75a5f242", hoisted5)
      elementOpen("a", "432c523c-4dc3-44f1-8e03-722fc856f988", hoisted6, "onclick", function ($event) {
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
      var $key = "352ab5ac-a4bd-4182-b819-e8e4680f3a46_" + $item
      elementOpen("div", $key, hoisted7)
        elementOpen("div", "7470d983-62f1-464f-8a2a-0c538280add2_" + $key, hoisted8)
          elementOpen("div", "e31cfa2d-a17a-400d-a8c9-b4512cde364b_" + $key, hoisted9)
            elementOpen("a", "aa1441b0-427b-43a4-84ec-e60712df99b8_" + $key, hoisted10, "onclick", function ($event) {
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
          elementOpen("div", "0f2b6bbe-ac33-4a37-b538-7503f3f242a7_" + $key, hoisted11)
            elementOpen("a", "1613b0b9-6b13-4983-8d37-d500e0be4f00_" + $key, hoisted12, "onclick", function ($event) {
              var $element = this;
            vm.handlers.selectCat(cat)})
              text("select")
            elementClose("a")
          elementClose("div")
          elementOpen("div", "6eab4f5c-3ccd-43be-9b24-c9566b707755_" + $key, hoisted13)
            elementOpen("a", "62186afc-8d74-45e3-b76a-daaa18bfbf4b_" + $key, hoisted14, "onclick", function ($event) {
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
elementOpen("div", "e4ea2c7c-3420-4d9b-b554-c4bee7d1ec5a", hoisted15)
  elementOpen("h3")
    text("Cat description panel component")
  elementClose("h3")
  elementOpen("p")
    text("I have a ")
    elementOpen("b", "d9f96866-de27-4cf3-bdf2-641d1dc33476", hoisted16)
      text("" + (vm.proxy.selectedCat.name) + "")
    elementClose("b")
    text(" and I have visited he/she ")
    elementOpen("b", "fb02949c-9925-4816-97db-e403304cba0c", hoisted17)
      text("" + (vm.proxy.selectedCat.counter) + "")
    elementClose("b")
    text(" times. ")
  elementClose("p")
  elementOpen("a", "24bcfc90-391b-4c71-ae16-f7bdb091538b", hoisted18)
    text("like")
  elementClose("a")
elementClose("div")
}

//jshint-ignore-end
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
elementOpen("div", "ee45746b-3958-4cb8-9121-4aeef4694af1", hoisted1)
  elementOpen("h3")
    text("Cat list component")
  elementClose("h3")
  elementOpen("div", "fbf8bd5c-c103-4c2f-973d-0a47bd15f46f", hoisted2)
    elementOpen("div", "67b6294a-a891-48ae-9c3d-0e189e39902a", hoisted3)
      elementOpen("p")
        text("" + (vm.proxy.description) + "")
      elementClose("p")
    elementClose("div")
  elementClose("div")
  elementOpen("div", "9f3e517f-79e1-4fdd-be64-260eb2468f96", hoisted4)
    elementOpen("div", "3c0f22aa-e247-4cae-a5e8-f24e8c470ea6", hoisted5)
      elementOpen("a", "87949559-9b04-4a32-b674-16f4a17087e5", hoisted6, "onclick", function ($event) {
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
      var $key = "a1379b6d-3024-4c3a-9ca7-f3366dbb77bc_" + $item
      elementOpen("div", $key, hoisted7)
        elementOpen("div", "7ac16113-788c-4eca-88b9-9b5b8369cd4e_" + $key, hoisted8)
          elementOpen("div", "e9783f3b-26ab-4e03-94f5-e01f07675f26_" + $key, hoisted9)
            elementOpen("a", "007a4098-adb5-4e51-b271-af4e1676b815_" + $key, hoisted10, "onclick", function ($event) {
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
          elementOpen("div", "8d7e1cb3-c073-4695-9966-d0b4f9edc4d9_" + $key, hoisted11)
            elementOpen("a", "495a7b9d-3ca4-4436-8564-835bd280d1fc_" + $key, hoisted12, "onclick", function ($event) {
              var $element = this;
            vm.handlers.selectCat(cat)})
              text("select")
            elementClose("a")
          elementClose("div")
          elementOpen("div", "8396c6fb-d1f4-49a2-9e06-fb5839a7588b_" + $key, hoisted13)
            elementOpen("a", "75eaab4f-6e6f-487c-813d-01d9aab035ab_" + $key, hoisted14, "onclick", function ($event) {
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
elementOpen("div", "b42d6f61-11b4-4dbd-a6f2-853936a0fea8", hoisted15)
  elementOpen("h3")
    text("Cat description panel component")
  elementClose("h3")
  elementOpen("p")
    text("I have a ")
    elementOpen("b", "ef2a4357-f493-4afd-9b5b-58499e4dc5d9", hoisted16)
      text("" + (vm.proxy.selectedCat.name) + "")
    elementClose("b")
    text(" and I have visited he/she ")
    elementOpen("b", "18c8e496-b3fb-48c9-817d-ebe844b1d992", hoisted17)
      text("" + (vm.proxy.selectedCat.counter) + "")
    elementClose("b")
    text(" times. ")
  elementClose("p")
  elementOpen("a", "d3392a5f-477e-416d-9774-11ee31aff372", hoisted18)
    text("like")
  elementClose("a")
elementClose("div")
}

//jshint-ignore-end
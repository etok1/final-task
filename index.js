"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var closeButtons = document.getElementsByClassName("close");
var _loop_1 = function () {
  var closeButton = closeButtons[i];
  closeButton.addEventListener("click", function () {
    var li = closeButton.parentElement;
    if (!!li) {
      li.style.display = "none";
    }
  });
};
for (i = 0; i < closeButtons.length; i++) {
  _loop_1();
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
if (list) {
  list.addEventListener(
    "click",
    function (ev) {
      var target = ev.target;
      if (target) {
        if (target.tagName === "LI") {
          target.classList.toggle("checked");
        }
      }
    },
    false
  );
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var input = document.getElementById("myInput");
  if (!input) return;
  var inputValue = input.value;
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    var ul = document.getElementById("myUL");
    if (ul) {
      ul.appendChild(li);
    }
  }
  input.value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  span.addEventListener("click", function () {
    var li = span.parentElement;
    if (!!li) {
      li.style.display = "none";
    }
  });
}
var addBtn = document.getElementById("addBtn");
addBtn === null || addBtn === void 0
  ? void 0
  : addBtn.addEventListener("click", function () {
      newElement();
    });

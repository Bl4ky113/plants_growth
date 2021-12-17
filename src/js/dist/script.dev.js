"use strict";

// Made By Bl4ky113
var nextStepBtn = document.getElementById("input_next_step");
var popupSection = document.getElementById("popup");
var documentWrapper = document.getElementsByClassName("wrapper")[0];

window.onload = function () {};

var showPopUp = function showPopUp() {
  popupSection.classList.toggle("section--popup-show");
};

nextStepBtn.onclick = function () {
  var pageHeight = documentWrapper.offsetHeight;
  var closePopUpBtn = document.getElementById("close_popup_btn");
  popupSection.style.height = "".concat(pageHeight, "px");
  closePopUpBtn.onclick = showPopUp;
  showPopUp();
};
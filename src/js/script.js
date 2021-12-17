// Made By Bl4ky113

const nextStepBtn = document.getElementById("input_next_step");
const popupSection = document.getElementById("popup");
const documentWrapper = document.getElementsByClassName("wrapper")[0];

window.onload = () => { };

const showPopUp = () => {
  popupSection.classList.toggle(`section--popup-show`);
};

nextStepBtn.onclick = () => {
  const pageHeight = documentWrapper.offsetHeight;
  const closePopUpBtn = document.getElementById("close_popup_btn");
  popupSection.style.height = `${pageHeight}px`;
  closePopUpBtn.onclick = showPopUp;

  showPopUp();
};
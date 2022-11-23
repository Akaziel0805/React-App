const OpenPopUp = () => {
  document.querySelector(".openpop").className = "openpopup";
  document.querySelector(".openpopup").style.backgroundColor =
    "rgba(21, 21, 21, 0.573)";
};

const ClosePopUp = () => {
  document.querySelector(".openpopup").className = "openpop";
};

export { OpenPopUp, ClosePopUp };

const OpenForm = () => {
  document.querySelector(".myForm").style.opacity = 1;
};

const CloseForm = () => {
  document.querySelector(".myForm").style.opacity = 0;
};

export { OpenForm, CloseForm };

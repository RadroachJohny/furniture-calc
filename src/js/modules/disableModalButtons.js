const disableBtns = () => {
  document.querySelector('.popup_calc_button').disabled = true;
  document.querySelector('.popup_calc_profile_button').disabled = true;
};

const enableBtns = (selector) => {
  document.querySelector(selector).disabled = false;
};



export  {disableBtns, enableBtns};

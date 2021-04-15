// import { unescapeHTML } from "core-js/core/string";
import clearInputs from './clearInputs';
import resetForm from './resetForm';
import noBodyJumpModal from './noBodyJumpModal';

const modals = (state) => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, clear) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');

     

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });
  
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        noBodyJumpModal();
        if (clear) {
          for(let key in state) {
            delete state[key];
          }
        }
      });
    })

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      clearInputs();
      resetForm();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        clearInputs();
        resetForm();
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function() {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = '';
    }, time);
  }


  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close' );
  bindModal('.phone_link', '.popup', '.popup_dialog .popup_close');

  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', true, true);
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

  // showModalByTime('.popup', 60000);
};

export default modals;
import checkNumInputs from './checkNumInputs';
import {disableBtns, enableBtns} from './disableModalButtons';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');


    function bindActionToElems(event, elem, prop) {
      elem.forEach((item, i) => {
        item.addEventListener(event, () => {          
            switch(item.nodeName) {
              case 'SPAN':
                state[prop] = i;                
                if (state[prop] && state.width && state.height) {
                  console.log('true');
                  enableBtns('.popup_calc_button');
                }
                break;
              case 'INPUT':
                if (item.getAttribute('type') === 'checkbox') {
                  i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Тёплое';
                  elem.forEach((box, j) => {
                    box.checked = false;
                    if (i == j) {
                      box.checked = true;
                    }
                  });
                  if (state.profile && state.type) {
                    enableBtns('.popup_calc_profile_button');
                  }
                }else {
                  state[prop] = item.value;
                  if (state[prop] && state.width && state.height) {
                    console.log('true');
                    enableBtns('.popup_calc_button');
                  }
                }
                break;
              case 'SELECT':
                state[prop] = item.value;
                if (state.profile && state.type) {
                  enableBtns('.popup_calc_profile_button');
                }
                break;
            }
            console.log(state);
        });
      });
    }

   
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;


// export default changeModalState;

const resetForm = () => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

  function resetModal(elem) {
    elem.forEach(item => {
      switch(item.nodeName) {
        case 'SPAN':            
          elem.forEach(span => {
            span.classList.remove('do_image_more');
          });
          elem[0].classList.add('do_image_more');
          break;
        case 'INPUT':
          if (item.getAttribute('type') === 'checkbox') {
            elem.forEach((box, j) => {
              box.checked = false;                
            });
          }else {
            item.value = '';
          }
          break;
        case 'SELECT':
          item.selectedIndex = 0;
          break;
      }
    });

  }

  resetModal(windowForm);
  resetModal(windowWidth);
  resetModal(windowHeight);
  resetModal(windowType);
  resetModal(windowProfile);


};

export default resetForm;
  const inputs = document.querySelectorAll('input');
  const clearInputs = () => {    
    inputs.forEach(item => {
      item.value = '';
    });
  };

export default clearInputs;
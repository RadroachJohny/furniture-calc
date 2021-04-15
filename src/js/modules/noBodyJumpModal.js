const noBodyJumpModal = () => {
    const block = document.createElement('div');
    block.style.cssText = `
      position: absolute;
      top: -9999px;
      width: 50px;
      height: 50px;
      overflow: scroll;
      visibility: hidden;
    `;
    
    document.body.appendChild(block);
    const scrollBarWidth = block.offsetWidth - block.clientWidth;
    document.body.style.paddingRight = scrollBarWidth + 'px';
    document.body.removeChild(block);
    
};

export default noBodyJumpModal;
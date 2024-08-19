function handleScrollHeadImage() {
    const scrollY = window.scrollY;
    
    const image = document.getElementById('image');
    const imageScale = Math.max(0.7, 1 - scrollY / 400);
    const imageTranslateY = Math.min(scrollY , 250);
    image.style.transform = `scaleY(${imageScale}) translateY(-${imageTranslateY}px)`; 

  }

  function handleScrollSidePanel() {
    const scrollY = window.scrollY;
    const sidePanel = document.querySelector('.side-panel');
    const sidePanelTranslateY = Math.min(scrollY, 205);
    sidePanel.style.transform = `translateY(-${sidePanelTranslateY}px)`;

  }

  function handleScrollSideMenu() {
    const scrollY = window.scrollY;
    const sideMenu = document.getElementById('sideMenu');
    const sideMenuTranslateY = Math.min(scrollY, 205);
    sideMenu.style.transform = `translateY(-${sideMenuTranslateY}px)`;
  }

  function handleScrollText() {
    const scrollY = window.scrollY;
    const overlay = document.getElementById('overlay');
    const textTranslateX = Math.min(scrollY, 600); 
    const textFontSize = Math.max(3, 4 - scrollY / 400); 
    overlay.style.transform = `translate(-${textTranslateX}px, 30%)`;
    overlay.style.fontSize = `${textFontSize}rem`; 
  }

  window.addEventListener('scroll', handleScrollHeadImage);
  window.addEventListener('scroll', handleScrollSidePanel);
  window.addEventListener('scroll', handleScrollSideMenu);
  window.addEventListener('scroll', handleScrollText);
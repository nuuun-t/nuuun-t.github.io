
'use strict'; 

{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      // if (currentIndex > 2) {
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 4000);
  }


  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  // setTimeout(() => {
  //   images[currentIndex].classList.remove('current');
  //   currentIndex++;
  //   images[currentIndex].classList.add('current');
  // }, 1000);

  play();
}
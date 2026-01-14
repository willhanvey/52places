const images = [
    'images/pamirhighway.jpg',
    'images/larioja.avif',
    'images/zhangjiajie.jpg',
    'images/Seville.jpg',
    'images/Bagan.avif',
    'images/Zermatt.jpg',
    'images/gilboa.avif'
  ];
  
  let current = 0;
  let slide1 = document.querySelector('.slide1');
  let slide2 = document.querySelector('.slide2');
  
  // Initialize
  slide1.style.backgroundImage = `url('${images[current]}')`;
  slide1.style.opacity = 1;
  slide2.style.opacity = 0;
  
  function crossfade() {
    // Determine next image index
    const next = (current + 1) % images.length;
  
    // fade in slide2
    slide2.style.backgroundImage = `url('${images[next]}')`;
    slide2.style.opacity = 1;
  
    // fade out slide1
    slide1.style.opacity = 0;
  
    setTimeout(() => {
      const temp = slide1;
      slide1 = slide2;
      slide2 = temp;
  
      current = next;
    }, 2000); 
  }

  setInterval(crossfade, 5000);
  
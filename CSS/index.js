const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const indicators = document.querySelectorAll('.carousel-indicators button');
  let index = 0;
  const slideCount = document.querySelectorAll('.carousel img').length;
  const slideInterval = 3000; // 3 seconds

  prevButton.addEventListener('click', () => {
    prevSlide();
  });

  nextButton.addEventListener('click', () => {
    nextSlide();
  });

  function prevSlide() {
    if (index > 0) {
      index--;
    } else {
      index = slideCount - 1;
    }
    updateCarousel();
  }

  function nextSlide() {
    if (index < slideCount - 1) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
  }

  function startSlideShow() {
    setInterval(nextSlide, slideInterval);
  }

  // Start the slideshow
  startSlideShow();

    function updateCounter(targetDate) {
        const now = new Date();
        const difference = targetDate - now;
  
        if (difference <= 0) {
          document.getElementById('counter').textContent = 'O período já passou';
          return;
        }
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        const timeString = ` ${days}D:${hours}:${minutes}:${seconds} ${targetDate.toLocaleDateString()}`;
        document.getElementById('counter').textContent = timeString;
      }
  
      function startCounter(targetDate) {
        updateCounter(targetDate); // Atualiza imediatamente ao carregar a página
  
        setInterval(() => {
          updateCounter(targetDate);
        }, 1000); // Atualiza a cada segundo
      }

      // Definir a data alvo
      const targetDate = new Date('2024-07-30T00:00:00');
  
      // Inicia o contador com a data alvo especificada
      startCounter(targetDate);
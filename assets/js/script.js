document.addEventListener('DOMContentLoaded', function() {
    const partners = document.querySelector('.partners');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    // Slide to the left
    prevBtn.addEventListener('click', function() {
      partners.scrollLeft -= 200;
    });
  
    // Slide to the right
    nextBtn.addEventListener('click', function() {
      partners.scrollLeft += 200;
    });
  });
  var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000,  // velocidad en milisegundos
    ride: 'carousel'
  });
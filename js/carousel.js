carousel.innerHTML = `<div class="carousel__contenedor">
<button aria-label="Anterior" class="carousel__anterior">
  <i class="fas fa-chevron-left"></i>
</button>

<div class="carousel__lista">

 <div class="carousel__elemento">
     <img src="/assets/img/c01.png" alt="">

 </div>

 <div class="carousel__elemento">
      <img src="/assets/img/c02.png" alt="">
 </div>

 <div class="carousel__elemento">
      <img src="/assets/img/c03.png" alt="">

 </div>

 <div class="carousel__elemento">
      <img src="/assets/img/c04.png" alt="">

 </div>

 <div class="carousel__elemento">
  <img src="/assets/img/c05.png" alt="">

 </div>

 <div class="carousel__elemento">
  <img src="/assets/img/c06.png" alt="">

 </div>
</div><hr>

<button aria-label="Siguiente" class="carousel__siguiente">
  <i class="fas fa-chevron-right"></i>
</button>
</div>
<div role="tablist" class="carousel__indicadores"></div>
`;

window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    duration: 0.25,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
  });
});

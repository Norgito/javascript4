carousel.innerHTML = `<div class="carousel__contenedor">
<button aria-label="Anterior" class="carousel__anterior">
  <i class="fas fa-chevron-left"></i>
</button>

<div class="carousel__lista">

 <div class="carousel__elemento">
     <img src="https://i.ibb.co/G3HccBT/c01.png" alt="">

 </div>

 <div class="carousel__elemento">
      <img src="https://i.ibb.co/Sn6nH84/c03.png" alt="">
 </div>

 <div class="carousel__elemento">
      <img src="https://i.ibb.co/f4FpyB3/c02.png" alt="">

 </div>

 <div class="carousel__elemento">
      <img src="https://i.ibb.co/TPBR9Nq/c04.png" alt="">

 </div>

 <div class="carousel__elemento">
  <img src="https://i.ibb.co/hghzGp4/c05.png" alt="">

 </div>

 <div class="carousel__elemento">
  <img src="https://i.ibb.co/9rY8YHx/c06.png" alt="">

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

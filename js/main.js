// ARRAY GLOBAL
products.push(new Item(1, "Nike Air Zoom", 3000, 'Running', 'assets/img/running-01.png'));
products.push(new Item(2, "Nike Pegasus", 3000, 'Running', 'assets/img/running-02.png'));
products.push(new Item(3, "Nike React", 4000, 'Walking', 'assets/img/walking-01.png'));
products.push(new Item(4, "Nike Flex", 4000, 'Walking', 'assets/img/walking-02.png'));
products.push(new Item(5, "Nike Vapor", 5000, 'Football', 'assets/img/football-01.png'));
products.push(new Item(6, "Nike Alpha", 5000, 'Football', 'assets/img/football-02.png'));
products.push(new Item(7, "Nike Renew", 6000, 'Training Gym', 'assets/img/gym-01.png'));
products.push(new Item(8, "Nike SuperRep", 6000, 'Training Gym', 'assets/img/gym-02.png'));

//INTERFAZES
productsUI(products);
filtroUI(products);

confirmar.onclick = () =>{
    localStorage.clear();
    carrito.splice(0,carrito.length);
    carritoHTML(carrito);
    Swal.fire(
        'Thank You!',
        'Order Completed.',
        'success'
      )
}

//SETTIME OUT

setTimeout (()=>{
  Toastify({
    text: `¿Necesitas ayuda? 🤔`,
    duration: 5000,
    style: {
      background: "linear-gradient(to right, #fe6915, #55beec)",
    },
    onclick: function () {
      console.log('Abrir chat de ayuda');
    },
    gravity: 'bottom'
    }).showToast();

}, 5000);
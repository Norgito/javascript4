// FETCH ARRAY PRODUCTOS
fetch('data/Products.json')
      .then (respuesta => respuesta.json())
      .then (data => {
        for (const literal of data) {
          products.push(new Item(literal.id, literal.nombre, literal.precio, literal.tag, literal.img, literal.cantidad))

        }
        productsUI(products);
        filtroUI(products);

      }).catch(mensaje => console.error(mensaje))




//COMPRA CONFIRMACION
confirmar.onclick = () =>{
    localStorage.clear();
    carrito.splice(0,carrito.length);
    carritoHTML(carrito);
    totalCarritoInterfaz.innerHTML= "Total: $"+0;
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
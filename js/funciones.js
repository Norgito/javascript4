//FUNCIONES

//UI
function productsUI(products) {
  bsItems.innerHTML = "";
  for (const Item of products) {
    let divProducts = document.createElement("div");

    divProducts.innerHTML = `
       <section id="prod">
       <div class="contenedor">
         <div class="card bg-transparent">
           <div class="imgBx">
             <img src="${Item.img}">
             <h4 class="textCard">${Item.nombre}</h4>
             <h6 class="tag">${Item.tag}</h6>
             <h5 class="precios">$${Item.precio.toLocaleString()}</h5>
           </div>
           <div class="content"> 
             <div class="size">
               <h4>Size :</h4>
                 <span>7</span>
                 <span>8</span>
                 <span>9</span>
                 <span>10</span>
             </div>
             <div class="color">
               <h4>Color :</h4>
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
             <i id="${Item.id}" class=" liquid btn btnShop">COMPRAR</i>
           </div>
         </div>
       </div>
      </section>
      `;

    divProd.append(divProducts);
  }
  seleccionarProducto();
}

// fUNCION PRECIO COMA
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//BOTON
function seleccionarProducto() {
  let botones = document.getElementsByClassName("btnShop");
  for (const boton of botones) {
    boton.addEventListener("click", function () {
      let selection = carrito.find((Item) => Item.id == this.id);

      if (selection) {
        selection.addCantidad();
      } else {
        selection = products.find((Item) => Item.id == this.id);
        carrito.push(selection);
      }

      localStorage.setItem("Carrito", JSON.stringify(carrito));
      carritoHTML(carrito);
      totalCarrito();
      Toastify({
          text: ` ✅ ${selection.nombre} Agregado al carrito`,
          duration: 2000,
          style: {
          background: "linear-gradient(to right, #fe6915, #55beec)",
        },
      }).showToast();
    });
  }
}

//Carrito
function carritoHTML(lista) {
  cantidadCarrito.innerHTML = lista.length;
  productosCarrito.innerHTML = "";
  for (const Item of lista) {
    let prod = document.createElement("div");
    prod.innerHTML = `
                                 <section id="cart-container" class="container">
                                   <table width="100%">
                                     <tbody class="cart-container">
                                       <tr>
                                         <td><img src="${
                                           Item.img
                                         }" width="80" height="40"></td>
                                         <td><h5>${Item.nombre}</h5></td>
                                         <td><h5>$${Item.precio.toLocaleString()}</h5></td>
                                         <td><h5>$${Item.subTotal().toLocaleString()}</h5></td>
                                         <td><h5>${Item.cantidad}</h5></td>
                                         <td>
                                         <a id="${
                                           Item.id
                                         }" class="btn btn-info btn-add">+</a>
                                         <a id="${
                                           Item.id
                                         }" class="btn btn-info btn-sub">-</a>
                                         <a id="${
                                           Item.id
                                         }" class="btn btn-info btn-delete"><i class="fas fa-trash-alt"></i></a>
                                         </td>
                                       </tr>
                                     </tbody><br>
                                   </table>
                                 </section>`;
    productosCarrito.append(prod);
  }
  document
    .querySelectorAll(".btn-delete")
    .forEach((boton) => (boton.onclick = deleteCarrito));
  document
    .querySelectorAll(".btn-add")
    .forEach((boton) => (boton.onclick = addCarrito));
  document
    .querySelectorAll(".btn-sub")
    .forEach((boton) => (boton.onclick = subCarrito));
  totalCarrito();
}

//Total Carrito
function totalCarrito() {
  let total = carrito.reduce(
    (totalCompra, actual) => (totalCompra += actual.subTotal()),
    0
  );
  totalCarritoInterfaz.innerHTML =
    `
  <section id="cart-container" class="container pt-3">
   <table width="100%">
    <thead>
      <tr>
        <td class="text-center bgc">Total: $` + total.toLocaleString();`
        </td>     
      </tr>
     </thead>
    </table>
  </section>
  `;
  return total;
}

//Boton confirmar carrito
function promesaCompra(saldo) {
  return new Promise(function (aceptado, rechazado) {
    if (saldo > 0) {
      localStorage.clear();
      carrito.splice(0, carrito.length);
      carritoHTML(carrito);
      aceptado("Compra aceptada");
    } else {
      localStorage.clear();
      carrito.splice(0, carrito.length);
      carritoHTML(carrito);
      rechazado("Compra rechazada, saldo insuficiente");
    }
  });
}

function alertaEstado(mensaje, tipo) {
  Swal.fire("Estado de compra", mensaje, tipo);
}

//Funcion Botones (Del > Add > Sub)
function deleteCarrito(e) {
  let posicion = carrito.findIndex((Item) => Item.id == e.target.id);
  carrito.splice(posicion, 1);
  carritoHTML(carrito);
  localStorage.setItem("Carrito", JSON.stringify(carrito));
}

function addCarrito() {
  let Item = carrito.find((i) => i.id == this.id);
  Item.agregarCantidad(1);
  this.parentNode.parentNode.children[4].innerHTML = `<td><h5>${Item.cantidad}</h5></td>`;
  this.parentNode.parentNode.children[3].innerHTML = `<td><h5>$${Item.subTotal().toLocaleString()}</h5></td>`;
  totalCarrito();
  localStorage.setItem("Carrito", JSON.stringify(carrito));
}

function subCarrito() {
  let Item = carrito.find((i) => i.id == this.id);
  if (Item.cantidad > 1) {
    Item.agregarCantidad(-1);
    this.parentNode.parentNode.children[4].innerHTML = `<td><h5>${Item.cantidad}</h5></td>`;
    this.parentNode.parentNode.children[3].innerHTML = `<td><h5>$${Item.subTotal().toLocaleString()}</h5></td>`;
    totalCarrito();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
  }
}

//FILTROS
filtroNombre.addEventListener("input", function () {
  const filtrados = products.filter((Item) =>
    Item.nombre.includes(filtroNombre.value.toUpperCase())
  );
  productsUI(filtrados);
});

limpiar.onclick = () => {
  filtroNombre.value = "";
  productsUI(products);
};

function filtroUI(Item) {
  filtroItems.innerHTML = "";
  filtroItems.append("CATEGORIA: ");
  const porCategorias = Item.map((Item) => Item.tag);
  crearSelect(arraySinDuplicados(porCategorias), "tag");

  filtroItems.append(" PRECIO: $");
  const porPrecio = Item.map((Item) => Item.precio);
  crearSelect(arraySinDuplicados(porPrecio), "precio");
}

//SELECT
function crearSelect(lista, clave) {
  let newSelect = document.createElement("select");
  newSelect.innerHTML =
    "<option>" + lista.join("</option><option>") + "</option>";
  filtroItems.append(newSelect);

  newSelect.addEventListener("change", function () {
    const filtrados = products.filter((Item) => Item[clave] == this.value);
    productsUI(filtrados);
  });
}

//NO DUPLICADOS
function arraySinDuplicados(lista) {
  let unicos = [];
  lista.forEach((Item) => {
    if (!unicos.includes(Item)) {
      unicos.push(Item);
    }
  });
  return unicos;
}

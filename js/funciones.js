
//FUNCIONES

//UI
function productsUI(products) {
  bsItems.innerHTML = '';
  for (const Item of products) {
       
       let divProducts = document.createElement("div");
      
       divProducts.innerHTML = `<img id="images" src='${Item.img}'>
                                <h2 id='textProd'>${Item.nombre}</h2>
                                <label>Size:&nbsp</label><select><option>38</option><option>39</option><option>40</option><option>41</option></select>
                                <h3 id='textPrecio'>$ ${Item.precio}</h3>
                                <h6>${Item.tag}</h6>
                                <button id="${Item.id}" class = "btnShop">Comprar</button>
                                <hr>`;
       
       divProd.append(divProducts);
      }
      seleccionarProducto();
}


//BOTON
function seleccionarProducto(){
  let botones = document.getElementsByClassName('btnShop');
  for (const boton of botones) {
    boton.addEventListener('click', function () {
           let selection = carrito.find(Item => Item.id == this.id);
           
           if(selection){
                 selection.addCantidad();
           }else{
                 selection = products.find(Item => Item.id == this.id);
                 carrito.push(selection);
           }
           localStorage.setItem('Carrito', JSON.stringify(carrito));
           carritoHTML(carrito);
           Toastify({
                    text: ` ✅ ${selection.nombre} Added to Cart`,
                    duration: 2000,
                    style: {
                      background: "linear-gradient(to right, #fe6915, #55beec)",
                    }
            }).showToast();
  
    })


  }
}
//Carrito 
function carritoHTML(lista) {
        cantidadCarrito.innerHTML = lista.length;
        productosCarrito.innerHTML="";
        for (const Item of lista) {
                   let prod = document.createElement('div');
                   prod.innerHTML = `${Item.nombre}
                   <span class="badge badge-warning text-dark">Precio: $ ${Item.precio}</span>
                   <span class="badge badge-primary">Cantidad: ${Item.cantidad}</span>
                   <span class="badge badge-success">Subtotal: $${Item.subTotal()}</span>`;
                   productosCarrito.append(prod);
        }
}


//FILTROS
const filtroNombre = document.getElementById ('filtroNombre');
      filtroNombre.addEventListener('input', function () {
      const filtrados = products.filter(Item=> Item.nombre.includes(filtroNombre.value.toUpperCase()))
      productsUI(filtrados);
    })
let limpiar = document.getElementById('limpiar');
limpiar.onclick=()=>{
  filtroNombre.value= '';
  productsUI(products);
}

function filtroUI(Item) {
         filtroItems.innerHTML='';
         filtroItems.append('Categorias: ');
         const porCategorias = Item.map (Item => Item.tag);
         crearSelect(arraySinDuplicados(porCategorias), 'tag');

         filtroItems.append(' Precio: $');
         const porPrecio = Item.map (Item => Item.precio);
         crearSelect(arraySinDuplicados(porPrecio), 'precio');      
}


//SELECT
function crearSelect(lista, clave) {
        
         let newSelect = document.createElement('select');
         newSelect.innerHTML = '<option>'+lista.join('</option><option>')+ '</option>';
         filtroItems.append(newSelect);
         
         newSelect.addEventListener('change', function(){
                  const filtrados = products.filter(Item => Item[clave] == this.value);
                  productsUI(filtrados);
         })
}


//NO DUPLICADOS
function arraySinDuplicados(lista) {
         let unicos =[];
         lista.forEach(Item => {
               if(!unicos.includes(Item)){
                          unicos.push(Item);
               }
         });
         return unicos;
}

//Entrega 05
//E-commerce

//DECLARACION CLASE PRODUCTO
class Item {
  constructor(id, nombre, precio, tag, URL) {
             this.id = parseInt(id);
             this.nombre = nombre.toUpperCase();
             this.precio = parseFloat(precio) * 1.21;
             this.tag = tag;
             this.img = URL;
  }
}

// OBJECTOS Y ARRAY
const products = [];
const products2 = [];

products2.push(new Item(1, "Nike Air", 3000, 'Running', 'https://www.shoesvalley.cn/image/cache/nike/2019/270Ract/2712/2ef299d0-250x250.jpg'));
products2.push(new Item(2, "Nike React", 4000, 'Walking', 'https://www.shoesvalley.cn/image/cache/nike/2019/270Ract/2712/2ef299d0-250x250.jpg'));
products2.push(new Item(3, "Nike Vapor", 5000, 'Football', 'https://www.shoesvalley.cn/image/cache/nike/2019/270Ract/2712/2ef299d0-250x250.jpg'));
products2.push(new Item(4, "Nike Legend", 6000, 'Training Gym', 'https://www.shoesvalley.cn/image/cache/nike/2019/270Ract/2712/2ef299d0-250x250.jpg'));

const comprar = document.getElementById ('compra');
const divProd = document.getElementById("bsItems");
const divCarr = document.getElementById ('carrito');
const filtroItems = document.getElementById('filtroItems');

productsUI(products2);
filtroUI(products2);
AgregarProd(products);

//UI
function productsUI(products2) {
  bsItems.innerHTML = '';
  for (const Item of products2) {
       
       let divProducts = document.createElement("div");
      
       divProducts.innerHTML = `<img id="images" src='https://www.shoesvalley.cn/image/cache/nike/2019/270Ract/2712/2ef299d0-250x250.jpg'>
                                <h2 id='textProd'>${Item.nombre}</h2>
                                <label>Size:&nbsp</label><select><option>38</option><option>39</option><option>40</option><option>41</option></select>
                                <h3 id='textPrecio'>$ ${Item.precio}</h3>
                                <h6>${Item.tag}</h6>
                                <button id="${Item.id}" class = "btnShop">Comprar</button>
                                <hr>`;
       
       divProd.append(divProducts);
      }
      eventoBoton();
}

function AgregarProd(products) {
  carrito.innerHTML = '';
  for (const Item of products) {
       let divCarritos = document.createElement("div");
       divCarritos.innerHTML = `<img id="images" src='https://www.shoesvalley.cn/image/cache/nike/2019/270Ract/2712/2ef299d0-250x250.jpg'>
                                <h2 id='textProd'>${Item.nombre}</h2>
                                <label>Size:&nbsp</label><select><option>38</option><option>39</option><option>40</option><option>41</option></select>
                                <h3 id='textPrecio'>$ ${Item.precio}</h3>
                                <h6>${Item.tag}</h6>
                                <button id="${Item.id}" class = "btnShop">Comprar</button>
                                <hr>`;
       divCarr.append(divCarritos);
      }
    }


//BOTON
function eventoBoton(){
         let botones = document.getElementsByClassName('btnShop');
         for (const boton of botones) {
           boton.addEventListener('click',function () {
    
                  let selection = products2.find(Item => Item.id == this.id);
                  bsText.innerHTML = 'Producto Seleccionado: '+selection.nombre;
           })
         }
}

//FILTROS
const filtroNombre = document.getElementById ('filtroNombre');
      filtroNombre.addEventListener('input', function () {
      const filtrados = products2.filter(Item=> Item.nombre.includes(filtroNombre.value.toUpperCase()))
      productsUI(filtrados);
    })
let limpiar = document.getElementById('limpiar');
limpiar.onclick=()=>{
  filtroNombre.value= '';
  productsUI(products2);
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
                  const filtrados = products2.filter(Item => Item[clave] == this.value);
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

//FORMULARIO
let formItems = document.getElementById('registroProducto');

formItems.onsubmit = (e) => {
  e.preventDefault();

  const inputs = formItems.children;

  products.push(new Item(products.length+1, inputs[0].value, inputs[1].value, inputs[2].value));
  localStorage.setItem('ListaProductos', JSON.stringify(products));
  AgregarProd(products);
  e.target.reset();
}

if ('ListaProductos' in localStorage){
  const guardados = JSON.parse(localStorage.getItem('ListaProductos'));

  for (const literal of guardados) 
  products.push(new Item(literal.id, literal.nombre, literal.precio, literal.tag));
  
  AgregarProd(products);
  }

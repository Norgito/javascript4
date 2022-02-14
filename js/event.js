//Entrega 05
//E-commerce

const categorias = ["ropa", "accesorio", "calzado"];
class Item {
  constructor(id, nombre, precio, categoria) {
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio) * 1.21;
    this.categoria = categoria.toUpperCase();
  }
}

const products = [];

products.push(new Item(1, "Jeans", 3000, categorias[0]));
products.push(new Item(2, "Camisa", 1500, categorias[0]));
products.push(new Item(3, "Billetera", 2000, categorias[1]));
products.push(new Item(4, "Cinturon", 1700, categorias[1]));
products.push(new Item(5, "Zapatillas", 5000, categorias[2]));
products.push(new Item(6, "Lentes", 7000, categorias[1]));
products.push(new Item(7, "Ojotas", 2700, categorias[2]));
console.log(products);

// Modificar Banner Text -> Español
let tituloEs = document.getElementById("tituloEs");
console.log(tituloEs.innerHTML);

tituloEs.innerHTML = "Accesorios Masculino";

let btnEs = document.getElementById("btnEs");
console.log(btnEs.innerHTML);

btnEs.innerHTML = "Comprar";

// Crear Elementos
//01 - Best Sellers h1
let divText = document.getElementById("bsText");

let divCat = document.createElement("h1");
divCat.innerHTML = "Best Sellers<hr>";
divText.appendChild(divCat);

//02 - Best Sellers Items
let divProd = document.getElementById("bsItems");

for (const Item of products) {
  let divProducts = document.createElement("div");

  divProducts.innerHTML = `<h2 id='textProd'>${Item.nombre}</h2>
                           <h3>Precio: $ ${Item.precio}</h3>
                           <button id="${Item.id}" class="btnShop">Comprar</button>`;

  divProd.append(divProducts);
}

let botones = document.getElementsByClassName('btnShop');
console.log(botones);

for (const boton of botones) {
  boton.addEventListener('click',function () {
    console.log(this.id);
    let selection = products.find(Item => Item.id == this.id);
    console.log(selection);
  })
}

document.querySelector("#bsText").innerHTML +=
  '<HR><h3 style="color: red" color: red;"">NOW WITH 30% OFF!</h3><hr><HR>';

/* //Select Items
const colores = ['Rojo','Azul','Negro'];

let idSelect = document.getElementById('idSelect');
console.log(idSelect);

for (const color of colores) {
  idSelect.innerHTML +="<option>"+color+"</option>";
} */

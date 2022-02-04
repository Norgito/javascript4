//Entrega 04
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

//Filtro Categoria
let userFilter1 = prompt("FILTRO: SELECCIONE CATEGORIA\n\nRopa\nAccesorio\nCalzado");
let filtrados = products.filter((Item) => Item.categoria == userFilter1.toUpperCase());
console.log(filtrados);

let mensaje1 = "Los Productos Encontrados son:\n\n";

if (filtrados.length > 0) {
  for (const Item of filtrados) {
    mensaje1 =
      mensaje1 +
      "Producto: " +
      Item.nombre +
      "\nPrecio: $" +
      Item.precio +
      "\n\n";
  }
  alert(mensaje1);
} else {
  alert("Producto no encontrado");
}

//Filtro Precio
let userFilter2 = prompt("FILTRO: Precio menor o igual\n\nIngrese monto");
const cheap = products.filter((Item) => Item.precio <= userFilter2);
console.log(cheap);

let mensaje2 = "Los Productos Encontrados son:\n\n";

if (cheap.length > 0) {
  for (const Item of cheap) {
    mensaje2 =
      mensaje2 +
      "Producto: " +
      Item.nombre +
      "\nPrecio: $" +
      Item.precio +
      "\n\n";
  }
  alert(mensaje2);
} else {
  alert("Producto no encontrado");
}

//DECLARACION CLASE PRODUCTO
class Item {
    constructor(id, nombre, precio, tag, URL) {
               this.id = parseInt(id);
               this.nombre = nombre.toUpperCase();
               this.precio = parseFloat(precio) * 1.21;
               this.tag = tag;
               this.img = URL;
               this.cantidad = 1;
    }
    addCantidad(){
               this.cantidad++;
    }
    subTotal(){
        return this.precio * this.cantidad;
    }
  }
// VARIALBLES GLOBALES
const products = [];
const carrito = [];

const productosCarrito = document.getElementById("productosCarrito");
const cantidadCarrito = document.getElementById("cantidad");
const totalCarritoInterfaz = document.getElementById("totalCarrito");
const divCarr = document.getElementById("carrito");

const filtroNombre = document.getElementById("filtroNombre");
const filtroItems = document.getElementById("filtroItems");

const divProd = document.getElementById("bsItems");
const bsText = document.getElementById("bsText");

const finalizar = document.getElementById("btnCompra");
const tarjeta = document.getElementById("tarjeta");
const limpiar = document.getElementById("limpiar");

const carousel = document.getElementById("carouselFotos");

// SALDO CLIENTE
let saldoCliente = 200000;

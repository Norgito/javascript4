//Entrega 02
//E-commerce

var accesorio,precio,descuento,operacion1,operacion2,operacion3,iva,compra,pagar,cantidad,porcentaje;

//Entrada Prompt
accesorio = prompt ('Ingresar Accesorio');
precio = parseFloat(prompt('Ingresar Precio'));
cantidad = parseFloat(prompt("Ingresar Cantidad"));

//Descuento e Impuestos
descuento = 0.30;
iva = 0.21;

//Operaciones
compra = precio * cantidad;

operacion1 = compra * descuento;
operacion2 = compra - operacion1; //Descuento
operacion3 = operacion2 * iva; //IVA

pagar = operacion2 + operacion3;

total = pagar.toFixed(2);
descuento = operacion1.toFixed(2);
iva = operacion3.toFixed(2);

//Salida
alert('Descuento (30%): -$'+ descuento + '\nI.V.A. (21%): $'+ iva + '\nTotal a pagar: $'+ total + '\n\n✨ Gracias por su compra! ✨');

















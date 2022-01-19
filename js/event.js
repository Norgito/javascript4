//Agendar 3 Contactos

for (let i = 0; i < 3; i++) {
  let nombre = prompt("Ingrese su Nombre");
  let telefono = prompt("Ingrese su Telefono");
  let dni = prompt("Ingrese su DNI");

  if (nombre == "") {
    alert("No cargaste el nombre correctamente");
    break;
  }
  if (telefono == "") {
    alert("No cargaste el telefono correctamente");
    break;
  }
  if (dni == "") {
    alert("No cargaste el DNI correctamente");
    break;
  }

  let contacto =
    "Contacto: " + nombre + " \n Nro: " + telefono + " \n DNI: " + dni;

  alert(contacto);
  console.log(contacto);
}

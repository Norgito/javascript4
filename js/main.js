// FETCH ARRAY PRODUCTOS
fetch("data/Products.json")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    for (const literal of data) {
      products.push(
        new Item(
          literal.id,
          literal.nombre,
          literal.precio,
          literal.tag,
          literal.img,
          literal.cantidad
        )
      );
    }
    productsUI(products);
    filtroUI(products);
  })
  .catch((mensaje) => console.error(mensaje));

confirmar.onclick = () => {
  let total = totalCarrito();
  saldoCliente -= total;
  promesaCompra(saldoCliente)
    .then((mensaje) => {
      productosCarrito.innerHTML = `<div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span></div>`;

      fetch("https://apis.datos.gob.ar/georef/api/provincias")
        //fetch('prov/provincias.json')

        .then((respuesta) => {
          return respuesta.json();
        })
        .then((datos) => {
          tarjeta.innerHTML = `<div class="containerEnvio">
              <div class="titleEnvio">Informacion de Envio</div>
              <div class="contentEnvio">
      
                <form action="#">
                  <div class="user-details">
                    <div class="input-box-Envio">
                      <span class="details">NOMBRE COMPLETO</span>
                      <input type="text" placeholder="Ingresar Nombre" required>
                    </div>
                    <div class="input-box-Envio">
                      <span class="details">DIRECCION</span>
                      <input type="text" placeholder="Ingresar Direccion" required>
                    </div>
                    <span class="details">PROVINCIA</span>
                    <select id="provFiltro"></select>
                    <span class="details">MUNICIPIO</span>
                    <select id="munFiltro"></select>
                  </div><br><br>
                  <div class="titleEnvio">Informacion de Pago</div>
                </form>
            </div>
          </div>
      
         <div class="tarjetaContainer">
              <div class="card-contenedor">
                  <div class="front">
                      <div class="imagen">
                          <img src="/assets/img/chip.png" alt="">
                          <img src="/assets/img/visa.png" alt="">
                      </div>
                      <div class="card-number-box">################</div>
                      <div class="flexbox">
                          <div class="box">
                              <span>Titular</span>
                              <div class="card-holder-name">nombre completo</div>
                          </div>
                          <div class="box">
                              <span>expira</span>
                              <div class="expiration">
                                  <span class="exp-month">mes</span>
                                  <span class="exp-year">año</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="back">
                      <div class="stripe"></div>
                      <div class="box">
                          <span>cvv</span>
                          <div class="cvv-box"></div>
                          <img src="/assets/img/visa.png" alt="">
                      </div>
                  </div>
              </div>
                 <form action="">
                       <div class="inputBox">
                            <span>Numero Tarjeta</span>
                            <input type="text" maxlength="16" class="card-number-input">
                        </div>    
                        <div class="inputBox">
                            <span>Nombre</span>  
                            <input type="text" maxlength="16" class="card-holder-input">
                       </div>
                       <div class="flexbox">
                            <div class="inputBox">
                                 <span>Expira Mes</span>
                                 <select name="" id="" class="month-input">
                                       <option value="month"selected disabled>mes</option>
                                       <option value="01">01</option>
                                       <option value="02">02</option>
                                       <option value="03">03</option>
                                       <option value="04">04</option>
                                       <option value="05">05</option>
                                       <option value="06">06</option>
                                       <option value="07">07</option>
                                       <option value="08">08</option>
                                       <option value="09">09</option>
                                       <option value="10">10</option>
                                       <option value="11">11</option>
                                       <option value="12">12</option>
                                 </select>
                            </div>
                            <div class="inputBox">
                              <span>Expira Año</span>
                              <select name="" id="" class="year-input">
                                <option value="year"selected disabled>año</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                              </select>
                         </div>
                         <div class="inputBox">
                             <span>cvv</span>
                             <input type="text" maxlength="3" class="cvv-input">
                         </div>
                       </div>
                       <button id="btnEnvio" data-dismiss="modal" class="submit-btn">Finalizar</button>              
                 </form>
             </div>`;

          document.querySelector(".card-number-input").oninput = () => {
            document.querySelector(".card-number-box").innerText =
              document.querySelector(".card-number-input").value;
          };

          document.querySelector(".card-holder-input").oninput = () => {
            document.querySelector(".card-holder-name").innerText =
              document.querySelector(".card-holder-input").value;
          };

          document.querySelector(".month-input").oninput = () => {
            document.querySelector(".exp-month").innerText =
              document.querySelector(".month-input").value;
          };

          document.querySelector(".year-input").oninput = () => {
            document.querySelector(".exp-year").innerText =
              document.querySelector(".year-input").value;
          };

          document.querySelector(".cvv-input").onmouseenter = () => {
            document.querySelector(".front").style.transform =
              "perspective(1000px) rotateY(-180deg)";
            document.querySelector(".back").style.transform =
              "perspective(1000px) rotateY(0deg)";
          };

          document.querySelector(".cvv-input").onmouseleave = () => {
            document.querySelector(".front").style.transform =
              "perspective(1000px) rotateY(0deg)";
            document.querySelector(".back").style.transform =
              "perspective(1000px) rotateY(180deg)";
          };

          document.querySelector(".cvv-input").oninput = () => {
            document.querySelector(".cvv-box").innerText =
              document.querySelector(".cvv-input").value;
          };

          const provFiltro = document.getElementById("provFiltro");
          for (const provincia of datos.provincias) {
            provFiltro.innerHTML += `<option value="${provincia.id}">${provincia.nombre}</option>`;
          }

          provFiltro.onchange = () => {
            let idProvincia = provFiltro.value;
            console.log(idProvincia);
            let rutaBusqueda = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`;
            fetch(rutaBusqueda)
              .then((respuesta) => respuesta.json())
              .then((datos) => {
                console.log(datos);
                let munFiltro = document.getElementById("munFiltro");
                for (const municipio of datos.municipios) {
                  munFiltro.innerHTML += `<option value="${municipio.id}">${municipio.nombre}</option>`;
                }

                document.getElementById("btnEnvio").onclick = () => {
                  console.log(
                    "ENVIAR A " +
                      munFiltro.value +
                      " EN  PROVINCIA ID " +
                      idProvincia
                  );
                  fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    body: JSON.stringify({
                      carrito: carrito,
                      idProvincia: idProvincia,
                      idMunicipio: munFiltro.value,
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  })
                    .then((respuesta) => respuesta.json())
                    .then((data) => {
                      Swal.fire(
                        "Compra Finalizada",
                        "ORDEN N° " + data.id + " EN CAMINO",
                        "success"
                      ).then(function () {
                        window.location = "https://norgito.github.io/javascript4/";
                      });
                    });
                };
              });
          };
        })
        .catch((mensaje) => {
          console.log(mensaje);
        });
    })
    .catch((mensaje) => {
      alertaEstado(mensaje, "error");
    });
};

//SETTIME OUT
setTimeout(() => {
  Toastify({
    text: `¿Necesitas ayuda? 🤔`,
    duration: 5000,
    style: {
      background: "linear-gradient(to right, #fe6915, #55beec)",
    },
    onclick: function () {
      console.log("Abrir chat de ayuda");
    },
    gravity: "bottom",
  }).showToast();
}, 5000);

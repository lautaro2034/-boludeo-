document.addEventListener("DOMContentLoaded", function () {
  const frases = ["beso", "cachetada", "elegir vos"];
  const imagenesFondo = {
    beso: "descarga.jpeg",
    cachetada: "cachetada.webp",
    "elegir vos": "elegir.png",
  };

  const botonGenerar = document.getElementById("boton-generar");
  const alertBox = document.getElementById("alert-box");
  const alertContent = alertBox.querySelector(".alert-content");
  const ruleta = document.getElementById("ruleta");
  const body = document.body;

  let palabraAnterior = ""; // Variable para almacenar la palabra anterior

  function mostrarAlerta(palabraActual) {
    alertContent.innerHTML =
      "ación anterior: " +
      palabraAnterior +
      "<br>ación actual: " +
      palabraActual;
    alertBox.style.display = "block";
    palabraAnterior = palabraActual; // Actualizar la palabra anterior

    // Cambiar el fondo según la palabra actual
    if (palabraActual in imagenesFondo) {
      body.style.backgroundImage = "url(" + imagenesFondo[palabraActual] + ")";
    } else {
      body.style.backgroundImage = 'url("ruleta.gif")'; // Fondo por defecto
    }
  }

  function girarRuletaYGenerarFrase() {
    // Cambiar el fondo a la imagen de la ruleta
    body.style.backgroundImage = 'url("ruleta.gif")';

    // Comenzar la animación de giro de la ruleta
    ruleta.classList.add("girando");

    setTimeout(function () {
      ruleta.classList.remove("girando"); // Detener la animación de la ruleta
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
      mostrarAlerta(fraseAleatoria); // Mostrar la alerta con la palabra anterior y actual

      // Cambiar el fondo según la palabra actual
      setTimeout(function () {
        if (fraseAleatoria in imagenesFondo) {
          body.style.backgroundImage =
            "url(" + imagenesFondo[fraseAleatoria] + ")";
        } else {
          body.style.backgroundImage = 'url("ruleta.gif")'; // Fondo por defecto
        }
      }, 1000); // Cambiar el fondo después de 2 segundos
    }, 1500); // Detener la ruleta después de 5 segundos
  }

  // Agregar un evento de clic al botón
  botonGenerar.addEventListener("click", girarRuletaYGenerarFrase);
});

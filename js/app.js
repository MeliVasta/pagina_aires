

// slider zonas
let contenedorZonas = document.querySelector(".container-zonas");
let siguiente = document.getElementById("derecha");
let atras = document.getElementById("izquierda");


let index = 0;
let cantidadCartas = 1;


let slider = () => {

    let cartas = document.querySelectorAll(".zonas-cajas");
    let anchoCarta = cartas[0].offsetWidth;

    // Botón para adelante
    siguiente.addEventListener("click", () => {
        if (index < cartas.length - cantidadCartas) {
            index += cantidadCartas;
            desplazamientos();
        }
    });


    // Botón para atrás
    atras.addEventListener("click", () => {
        if (index >= cantidadCartas) {
            index -= cantidadCartas;
            desplazamientos();
        }
    });


    let desplazamientos = () => {

        // Calcula el desplazamiento en función del ancho del contenedor
        let desplazamiento = -index * 100 + "%";

        // Media Querie 951px
        let widthQuery = window.matchMedia("(max-width: 951px)");

        // Media Querie 576px
        let widthQuerys = window.matchMedia("(max-width: 576px)");


        if (widthQuery.matches) {
            desplazamiento = -index * window.innerWidth + "px";
        }


        if (widthQuerys.matches) {
            cantidadCartas = 1;
            desplazamiento = -index * 300 + "px";
        }
        contenedorZonas.style.transform = `translateX(${desplazamiento})`;
    }
};

slider();



// felcha hacia arriba

document.addEventListener("DOMContentLoaded", function () {
    let flechaArriba = document.getElementById("flechaArriba");

    // Mostrar u ocultar la flecha basada en la posición de desplazamiento
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            flechaArriba.style.display = "block";
        } else {
            flechaArriba.style.display = "none";
        }
    });

    // Desplazarse hacia arriba al hacer clic en la flecha
    flechaArriba.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// mensaje pop-up whatsapp

document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup");
    let cerrarPopupBtn = document.getElementById("cerrarPopup");

    // Mostrar el popup al cargar la página
    popup.style.display = "block";

    // Cerrar el popup después de 5 segundos
    setTimeout(function () {
        popup.style.display = "none";
    }, 10000);

    // Ocultar el popup al hacer clic en el botón de cerrar
    cerrarPopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

const estrellas = document.getElementById("estrellas");
const particulas = document.getElementById("particulas");

// Crear estrellas distribuidas por todo el cielo
function crearEstrellas() {
    for (let i = 0; i < 120; i++) {
        const estrella = document.createElement("span");

        estrella.classList.add("estrella");

        const tamano = Math.random() * 2.5 + 1;

        estrella.style.width = tamano + "px";
        estrella.style.height = tamano + "px";
        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";

        estrella.style.animationDelay =
            Math.random() * 4 + "s";

        estrella.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        estrellas.appendChild(estrella);
    }
}

// Crear partículas luminosas
function crearParticula() {
    const particula = document.createElement("span");

    particula.classList.add("particula");

    const tamano = Math.random() * 4 + 2;

    particula.style.width = tamano + "px";
    particula.style.height = tamano + "px";
    particula.style.left = Math.random() * 100 + "%";
    particula.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    particulas.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 11000);
}

// Revelar la carta
function mostrarCarta() {
    const carta = document.getElementById("carta");
    const boton = document.getElementById("boton");

    if (carta.classList.contains("visible")) {
        return;
    }

    carta.classList.remove("oculta");
    carta.classList.add("visible");

    boton.style.display = "none";

    setTimeout(() => {
        carta.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }, 150);
}

// Iniciar las animaciones
crearEstrellas();

for (let i = 0; i < 8; i++) {
    crearParticula();
}

setInterval(crearParticula, 700);

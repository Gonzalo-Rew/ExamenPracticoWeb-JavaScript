document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("header").classList.add("visible");
    }, 2000); 

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const ships = document.querySelectorAll(".nave");

        ships.forEach(ship => {
            const maxScroll = documentHeight - windowHeight;
            const scrollFactor = scrollPosition / maxScroll;
            let translateY;

            if (ship.id === "nave1") {
                translateY = -scrollFactor * Math.max(windowHeight * 1.2, 3000); 
            } else if (ship.id === "nave2") {
                translateY = -scrollFactor * Math.max(windowHeight * 1.1, 3000); 
            } else {
                translateY = -scrollFactor * Math.max(windowHeight * 1.3, 3000); 
            }

            ship.style.transform = `translateY(${translateY}px)`;
        });
    });

    setTimeout(function() {
        document.querySelector("header").classList.add("visible");
    }, 2000); 

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const ships = document.querySelectorAll(".nave");

        ships.forEach(ship => {
            const maxScroll = documentHeight - windowHeight;
            const scrollFactor = scrollPosition / maxScroll;
            let translateY;

            if (ship.id === "nave1") {
                translateY = -scrollFactor * Math.max(windowHeight * 1.2, 3000); 
            } else if (ship.id === "nave2") {
                translateY = -scrollFactor * Math.max(windowHeight * 1.1, 3000); 
            } else {
                translateY = -scrollFactor * Math.max(windowHeight * 1.3, 3000); 
            }

            ship.style.transform = `translateY(${translateY}px)`;
        });
    });

    const enlaceJuego = document.getElementById("enlaceJuego");
    const imagenJuego = document.getElementById("juego");
    
    if(enlaceJuego && imagenJuego) {
        enlaceJuego.addEventListener("mousedown", function() {
            const juegoActual = juegos - 1;
            imagenJuego.src = imagenesPulsadas[juegoActual];
        });
        
        enlaceJuego.addEventListener("mouseup", function() {
            const juegoActual = juegos - 1;
            imagenJuego.src = imagenesJuegos[juegoActual];
        });
        
        enlaceJuego.addEventListener("mouseleave", function() {
            const juegoActual = juegos - 1;
            imagenJuego.src = imagenesJuegos[juegoActual];
        });
    }
});

let juegos = 1;
const imagenesJuegos = ["src/maquinaSnake.png", "src/maquinaSpaceInvaders.png", "src/maquinaHundirFlota.png", "src/maquinaTetris.png"];
const imagenesPulsadas = ["src/maquinaSnakePulsado.png", "src/maquinaSpaceInvadersPulsado.png", "src/maquinaHundirFlotaPulsado.png", "src/maquinaTetrisPulsado.png"];
const nombreJuegos = ["Snake", "Space Invaders", "Hundir la Flota", "Tetris"];
const enlacesJuegos = ["snake/index.html", "spaceInvaders/index.html", "hundirFlota/index.html", "tetris/index.html"];

function cambiarJuego(juego) {
    if(juego == "anterior") {
        juegos--;
    } else {
        juegos++;
    }

    if(juegos == 0) {
        juegos = 4;
    }

    if(juegos == 5) {
        juegos = 1;
    }

    document.getElementById("juego").src = imagenesJuegos[juegos-1];
    document.getElementById("nombreJuego").innerHTML = nombreJuegos[juegos-1];
    document.getElementById("enlaceJuego").href = enlacesJuegos[juegos-1];


    // Cargar comentarios guardados o crear ejemplos
    let comentariosGuardados = localStorage.getItem("comentarios");
    let comentarios = [];
    
    if (comentariosGuardados) {
        comentarios = JSON.parse(comentariosGuardados);
    } else {
        // Crear algunos comentarios de ejemplo
        for (let i = 0; i < 5; i++) {
            const fecha = new Date();
            fecha.setDate(fecha.getDate());
            
            comentarios.push({
                usuario: nombresUsuarios[i],
                texto: comentariosEjemplo[i],
                fecha: fecha.toLocaleDateString()
            });
        }
        
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }
    
    // Mostrar los comentarios
    mostrarComentarios(comentarios);
}

const nombresUsuarios = ["Player1", "RetroGamer", "Arcade_Fan", "8Bit_Master", "PixelQueen"];
const comentariosEjemplo = [
    "¡Me encanta este sitio! Los juegos retro son lo mejor.",
    "La decoración del café me transporta a los 80s, ¡increíble!",
    "El Snake en pantalla grande es toda una experiencia nostálgica.",
    "Venir a tomar café y jugar al Space Invaders es mi plan favorito.",
    "Recomiendo 100% visitar este lugar si te gustan los videojuegos clásicos."
];



// Función para mostrar los comentarios en el DOM
function mostrarComentarios(comentarios) {
    const comentariosLista = document.getElementById("comentarios-lista");
    comentariosLista.innerHTML = "";
    
    comentarios.forEach(comentario => {
        const div = document.createElement("div");
        div.className = "comentario";
        
        div.innerHTML = `
            <div class="comentario-usuario">${comentario.usuario}</div>
            <div class="comentario-texto">${comentario.texto}</div>
            <div class="comentario-fecha">${comentario.fecha}</div>
        `;
        
        comentariosLista.appendChild(div);
    });
    
    // Desplazar al final para ver los comentarios más recientes
    comentariosLista.scrollTop = comentariosLista.scrollHeight;
}

// Función para enviar un nuevo comentario
function enviarComentario() {
    const textoComentario = document.getElementById("comentario").value.trim();
    
    if (textoComentario) {
        // Obtener comentarios existentes
        let comentarios = JSON.parse(localStorage.getItem("comentarios") || "[]");
        
        // Crear nuevo comentario
        const nuevoComentario = {
            usuario: "Visitante" + Math.floor(Math.random() * 1000),
            texto: textoComentario,
            fecha: new Date().toLocaleDateString()
        };
        
        // Añadir al inicio para que aparezca arriba
        comentarios.push(nuevoComentario);
        
        // Guardar en localStorage
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
        
        // Actualizar visualización
        mostrarComentarios(comentarios);
        
        // Limpiar campo de texto
        document.getElementById("comentario").value = "";
    }
}
// 1. Guarda las rutas de las imágenes que quieres en el slider
const imagenesHero = [
    "assets/hero.png",          // Tu imagen actual
    "assets/hero-promo1.png",   // Segunda imagen de propaganda
    "assets/hero-promo2.png"    // Tercera imagen de propaganda
];

let indiceActual = 0;
const heroSection = document.querySelector('.hero');

// 2. Función que cambia el fondo aplicando el degradado oscuro para el texto
function cambiarImagenHero() {
    // Definimos el degradado idéntico al que tenías en CSS
    const degradado = "linear-gradient(to right, rgba(4, 10, 20, 0.9) 30%, rgba(4, 10, 20, 0.4) 70%)";
    const nuevaImagen = imagenesHero[indiceActual];
    
    // Cambiamos el estilo del fondo en el HTML
    heroSection.style.backgroundImage = `${degradado}, url('${nuevaImagen}')`;
    
    // Pasamos a la siguiente imagen (y volvemos a la primera si llegamos al final)
    indiceActual = (indiceActual + 1) % imagenesHero.length;
}

// 3. Ejecutar la función por primera vez de inmediato
cambiarImagenHero();

// 4. Configurar el temporizador para que cambie automáticamente cada 5000 milisegundos (5 segundos)
setInterval(cambiarImagenHero, 5000);

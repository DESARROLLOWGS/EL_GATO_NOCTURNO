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
    // Cambiamos la opacidad de 0.9 a 0.6 en la izquierda, y de 0.4 a 0.1 en la derecha
    // const degradado = "linear-gradient(to right, rgba(4, 10, 20, 0.6) 20%, rgba(4, 10, 20, 0.1) 80%)";
    // En lugar de usar negro (rgba de 4,10,20), usamos un velo blanco/transparente levísimo (255,255,255) que actúa como iluminación frontal
    const degradado = "linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)";
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

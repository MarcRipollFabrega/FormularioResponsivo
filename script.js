const buscador = document.getElementById('buscador');
const tabla = document.getElementById('miTabla');
const filas = tabla.getElementsByTagName('tr');
const vistaPrevia = document.getElementById('vistaPrevia');

buscador.addEventListener('keyup', function() {
    const filtro = buscador.value.toLowerCase();
    for (let i = 1; i < filas.length; i++) { // Comienza desde 1 para omitir el encabezado
        const celdas = filas[i].getElementsByTagName('td');
        let mostrarFila = false;
        for (let j = 0; j < celdas.length; j++) {
            if (celdas[j].textContent.toLowerCase().includes(filtro)) {
                mostrarFila = true;
                break;
            }
        }
        filas[i].style.display = mostrarFila ? '' : 'none';
    }
});

for (let i = 1; i < filas.length; i++) {
    filas[i].addEventListener('mouseover', function() {
        const celdas = this.getElementsByTagName('td');
        const nombre = celdas[0].textContent.replace(/\s+/g, ''); // Elimina espacios en blanco para el nombre del archivo
        const rutaImagen = `img/${nombre}.jpg`; // Ajusta la extensión según el tipo de imagen
        vistaPrevia.innerHTML = `
            <h3>Vista Previa</h3>
            <img src="${rutaImagen}" alt="${nombre}" style="max-width: 500px;">
            <p>Nombre: ${celdas[0].textContent}</p>
            <p>Edad: ${celdas[1].textContent}</p>
    
        `;
    });
}
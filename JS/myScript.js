

//Código final
//Borra las ofertas - Borrar
function borrarOfertas(){
    const ofertas = document.querySelector(".ofertas")
    ofertas.remove()
    const interesante = document.querySelector(".interesante")
    interesante.remove()
}
//Cambia el precio de uno de los productos por "Fuera de Stock", en este caso el primer álbum - Modificar y añadir
function cambiarDisponibilidadDelProducto(){
    const productos = document.querySelector(".productos")
    const disponibilidad = document.createElement("p");
    disponibilidad.textContent = "Fuera de Stock";
    const productos_text = productos.lastElementChild;
    const productos_text_info = productos_text.lastElementChild;
    productos_text.replaceChild(disponibilidad, productos_text_info);
}
//Quita links
function quitarLinksDelMain() {
    const lanzamientos = document.querySelector(".lanzamientos__seccion");
    const lanzamientosLink = document.querySelector(".lanzamientos__seccion--texto");
    const textoSinLink = document.createElement("h3")
    textoSinLink.textContent = "Lanzamientos populares";
    textoSinLink.className = "lanzamientos__seccion--texto"
    lanzamientos.replaceChild(textoSinLink, lanzamientosLink)
    const lanzamientos2 = document.querySelector(".lanzamientos__seccion").lastElementChild;
    const lazamientosLink2 = document.querySelector(".lanzamientos__seccion--texto");
    const textoSinLink2 = document.createElement("h3")
    textoSinLink.textContent = "Lanzamientos recientes";
    textoSinLink.className = "lanzamientos__seccion--texto"
    lanzamientos.replaceChild(textoSinLink2, lanzamientosLink2)
}

//Eliminar las sugerencias
const recomendaciones = document.querySelector(".recomendaciones")
recomendaciones.remove()

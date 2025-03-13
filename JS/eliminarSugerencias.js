//Quita links
function quitarLinksDelMain() {
    const lanzamientos = document.querySelector(".lanzamientos__seccion");
    const lanzamientosLink = document.querySelector(".lanzamientos__seccion--texto");
    const textoSinLink = document.createElement("h3")
    textoSinLink.textContent = "Fuera de Stock";
    textoSinLink.className = "lanzamientos__seccion--texto"
    lanzamientos.replaceChild(textoSinLink, lanzamientosLink);
}

//Eliminar las sugerencias
function eliminarSugerencias(){
const recomendaciones = document.querySelector(".recomendaciones")
recomendaciones.remove()

}
function eliminarIntereses(){
    const lanzamientos2 = document.querySelector(".lanzamientos").lastElementChild
    lanzamientos2.remove()
}

function cambiarPosicionFooter(){
    const footer = document.querySelector(".footer")
    footer.style.position = "fixed"
    footer.style.width = "100%"
}

quitarLinksDelMain()
eliminarSugerencias()
eliminarIntereses()
cambiarPosicionFooter()
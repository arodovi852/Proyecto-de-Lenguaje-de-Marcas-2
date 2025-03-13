

//Código final
//Borra las ofertas
function borrarOfertas(){
    const ofertas = document.querySelector(".ofertas")
    ofertas.remove()
    const interesante = document.querySelector(".interesante")
    interesante.remove()
}
//Cambia el precio de uno de los productos por "Fuera de Stock", en este caso el primer álbum
function cambiarDisponibilidadDelProducto(){
    const productos = document.querySelector(".productos")
    const disponibilidad = document.createElement("p");
    disponibilidad.textContent = "Fuera de Stock";
    const productos_text = productos.lastElementChild;
    const productos_text_info = productos_text.lastElementChild;
    productos_text.replaceChild(disponibilidad, productos_text_info);
}
//Quita animaciones
function quitarLinksyAnimacionesDelMain() {
    const lanzamientos = document.querySelector(".lanzamientos__seccion");
    const lanzamientosLink = document.querySelector(".lanzamientos__seccion--texto");
    const textoSinLink = document.createElement("h3")
    textoSinLink.textContent = "Fuera de Stock";
    textoSinLink.className = "lanzamientos__seccion--texto"
    lanzamientos.replaceChild(textoSinLink, lanzamientosLink);
    const lanzamientos2 = document.querySelector(".lanzamientos.lastElementChild");
    const lanzamientosLink2 = document.querySelector(lanzamientos2);
    const textoSinLink2 = document.createElement("h3")
    textoSinLink.textContent = "Fuera de Stock";
    textoSinLink.className = "lanzamientos__seccion--texto"
    lanzamientos.replaceChild(textoSinLink2, lanzamientosLink2);
}
//

const lista = element.classList
list.add("")


/*
function cambiarDisponibilidadDelProducto(){
    const productos = document.querySelector(".productos")
    const disponibilidad = document.createElement("p");
    disponibilidad.textContent = "Fuera de Stock";
    const productos_text = productos.lastElementChild;
    const productos_text_info = productos_text.lastElementChild;
    productos_text.replaceChild(disponibilidad, productos_text_info);
}
    --primary: #77685D;
    --secondary: #8e8177;
    --terciary: #c1b7a9;
    --primaryhover: #615145;
    --font: "Arial Black", sans-serif;
    --secondfont: "Helvetica Neue", sans-serif;
    --darkprimary: #534942;
    --darksecondary: #605650;
    --darkterciary: #857f6c;
    --darkprimaryhover: #42372f;
*/

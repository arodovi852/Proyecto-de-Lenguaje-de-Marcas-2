function cambiarDisponibilidadDelProducto(){
    const productos = document.querySelector(".productos")
    const disponibilidad = document.createElement("p");
    disponibilidad.textContent = "Fuera de Stock";
    const productos_text = productos.lastElementChild;
    const productos_text_info = productos_text.lastElementChild;
    productos_text.replaceChild(disponibilidad, productos_text_info);
}

cambiarDisponibilidadDelProducto();
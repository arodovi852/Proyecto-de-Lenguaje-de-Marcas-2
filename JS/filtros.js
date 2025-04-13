document.addEventListener('DOMContentLoaded', () => {
    const minInput = document.getElementById('precio-min');
    const maxInput = document.getElementById('precio-max');
    const ordenarSelect = document.getElementById('ordenar-por');

    const contenedorProductos = document.querySelector('.cuerpo__derecha');
    let productos = Array.from(contenedorProductos.querySelectorAll('.productos'));

    function getDatosProducto(producto) {
        const info = producto.querySelector('.productos__text');
        return {
            nodo: producto,
            precio: parseFloat(info.dataset.precio),
            nombre: info.dataset.nombre,
            artista: info.dataset.artista,
            genero: info.dataset.genero,
            relevancia: parseInt(info.dataset.relevancia)
        };
    }

    function aplicarFiltrosYOrden() {
        const min = parseFloat(minInput.value) || 0;
        const max = parseFloat(maxInput.value) || Infinity;
        const criterio = ordenarSelect.value;

        let productosDatos = productos.map(getDatosProducto);

        productosDatos = productosDatos.filter(p => p.precio >= min && p.precio <= max);

        productosDatos.sort((a, b) => {
            switch (criterio) {
                case 'precio-asc':
                    return a.precio - b.precio;
                case 'precio-desc':
                    return b.precio - a.precio;
                case 'artista':
                    return a.artista.localeCompare(b.artista);
                case 'alfabetico':
                    return a.nombre.localeCompare(b.nombre);
                case 'genero':
                    return a.genero.localeCompare(b.genero);
                case 'relevancia':
                default:
                    return a.relevancia - b.relevancia;
            }
        });

        contenedorProductos.innerHTML = '';
        productosDatos.forEach(p => contenedorProductos.appendChild(p.nodo));
    }

    [minInput, maxInput, ordenarSelect].forEach(e => e.addEventListener('input', aplicarFiltrosYOrden));

    aplicarFiltrosYOrden();
});

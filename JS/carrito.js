let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener('DOMContentLoaded', () => {
    actualizarCarritoUI();

    const botones = document.querySelectorAll('.btn-agregar-carrito');
    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const nombre = btn.dataset.nombre;
            const precio = parseFloat(btn.dataset.precio);

            carrito.push({ nombre, precio });
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarritoUI();
            alert(`${nombre} agregado al carrito.`);
        });
    });
});

function actualizarCarritoUI() {
    const contenedor = document.getElementById('carrito-contenido');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.precio.toFixed(2)} $`;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.addEventListener('click', () => {
            eliminarDelCarrito(index);
        });

        li.appendChild(btnEliminar);
        contenedor.appendChild(li);
    });

    const total = carrito.reduce((acc, item) => acc + item.precio, 0).toFixed(2);
    document.getElementById('carrito-total').textContent = `Total: ${total} $`;
}
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarritoUI();
}
document.getElementById('vaciar-carrito')?.addEventListener('click', () => {
    carrito = [];
    localStorage.removeItem('carrito');
    actualizarCarritoUI();
});

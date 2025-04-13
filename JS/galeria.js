document.addEventListener('DOMContentLoaded', () => {
    const galeria = document.getElementById('galeria');
    const fileInput = document.getElementById('file-upload');

    fileInput.addEventListener('change', () => {
        const archivo = fileInput.files[0];
        if (archivo && archivo.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = archivo.name;
                img.classList.add('galeria__imagen');
                img.addEventListener('click', () => img.remove());
                galeria.appendChild(img);
            };
            reader.readAsDataURL(archivo);
        }
    });
});

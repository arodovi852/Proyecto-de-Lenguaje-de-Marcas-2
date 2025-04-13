document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[type="email"]');

    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        const errorMsg = document.getElementById('email-error');

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMsg.textContent = 'Introduce un email valido.';
            emailInput.classList.add('error');
        } else {
            errorMsg.textContent = '';
            emailInput.classList.remove('error');
        }
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (emailInput.classList.contains('error') || emailInput.value === '') {
            alert('Por favor, corrige el email antes de enviar.');
            return;
        }
        alert('Formulario enviado correctamente.');
        form.reset();
    });
});

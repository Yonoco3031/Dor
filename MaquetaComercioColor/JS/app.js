const body = document.body;
const toggleThemeButton = document.querySelector('.toggle-theme');
const toggleContrastButton = document.querySelector('.toggle-contrast')

// Detecta el modo del sistema y aplica el tema nocturno si está activado
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}

// Alternar entre modo diurno y nocturno
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.remove('high-contrast-day', 'high-contrast-night');
});

// Alternar entre modos de contraste
toggleContrastButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.toggle('high-contrast-night');
    } else {
        body.classList.toggle('high-contrast-day');
    }
});

const cajaTexto = document.querySelector('#cajaTexto')
const ahora = new Date()

    // Hora en formato HH:MM:SS
    const hora = ahora.toLocaleTimeString('es-AR', { hour12: false });

    // Fecha en formato DD/MM/YYYY
    const fecha = ahora.toLocaleDateString(
                    'es-AR', {
                                weekday: 'long',
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                              }
                    );

cajaTexto.textContent = fecha
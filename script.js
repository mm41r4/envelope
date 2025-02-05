const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const respuesta = document.getElementById('respuesta');
const btnSi = document.getElementById('si');
const btnNo = document.getElementById('no');

// Abrir el sobre y mostrar la carta
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
});

// Botón "Sí"
btnSi.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el sobre se cierre
    letter.style.display = 'none'; // Oculta la carta
    respuesta.style.display = 'flex'; // Muestra la respuesta
});

// Botón "No"

btnNo.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el sobre se cierre
    alert("¡Oh no! 😢");
});
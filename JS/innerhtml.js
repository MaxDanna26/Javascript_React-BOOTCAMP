const escribir = () => {
  document.querySelector('.yellow').innerHTML = 'Has hecho mouseover sobre la capa roja';
}

document.querySelector('.red').addEventListener('mouseover', escribir);

document.getElementById('input').addEventListener("input", (e) => {
  // val es el value del evento, accedo a el mediante Evento.Target.value
  const val = e.target.value;
  let phrase = '';
  for (let i = 0; i < val; i++) {
    phrase += '<p>Cositas guays</p>';
  }
  document.getElementById('repetir').innerHTML = phrase;
})

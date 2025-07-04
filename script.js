function reproducirNotas() {
  const texto = document.getElementById('notaInput').value;
  const notas = texto.split(" ");
  const instrumentoSeleccionado = document.getElementById('instrumento').value;

  const synth = new Tone[instrumentoSeleccionado]().toDestination();

  let tiempo = 0;
  notas.forEach(nota => {
    synth.triggerAttackRelease(nota, "8n", Tone.now() + tiempo);
    tiempo += 0.5;
  });
}

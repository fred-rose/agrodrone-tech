function filtrarServicosAgro() {
  const campoBusca = document.getElementById('campoBusca');

  if (!campoBusca) {
    return;
  }

  const busca = campoBusca.value.toLowerCase();
  const servicos = document.querySelectorAll('.aviao-item');

  servicos.forEach(servico => {
    const nome = servico.querySelector('h5').textContent.toLowerCase();
    const desc = servico.querySelector('p').textContent.toLowerCase();

    if (nome.includes(busca) || desc.includes(busca)) {
      servico.style.display = 'block';
    } else {
      servico.style.display = 'none';
    }
  });
}
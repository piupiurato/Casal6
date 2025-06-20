// Criar estrelas dinamicamente
for (let i = 0; i < 150; i++) {
  let estrela = document.createElement('div');
  estrela.className = 'estrela';
  estrela.style.top = Math.random() * 100 + '%';
  estrela.style.left = Math.random() * 100 + '%';
  estrela.style.animationDelay = Math.random() * 3 + 's';
  estrela.style.width = estrela.style.height = Math.random() * 2 + 1 + 'px';
  document.querySelector('.ceu').appendChild(estrela);
}

// Mostrar frase e tocar música
function mostrarMensagem() {
  const mensagemExtra = document.getElementById('extra');
  mensagemExtra.style.display = 'block';

  const musica = document.getElementById('musica');
  musica.play();
}

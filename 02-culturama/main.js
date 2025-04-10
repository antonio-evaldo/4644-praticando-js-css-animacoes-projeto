const classeVisivel = 'animar-visivel';

const observadorImagens = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add(classeVisivel);
    } else {
      entrada.target.classList.remove(classeVisivel);
    }
  });
});

const imagens = document.querySelectorAll('.animar-escondido');

imagens.forEach((imagem) => observadorImagens.observe(imagem));

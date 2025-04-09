const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('animar-visivel');
    }
  });
}, {
  threshold: 0.3,
});

const elementos = document.querySelectorAll('.animar-escondido');
elementos.forEach((elemento) => observador.observe(elemento));

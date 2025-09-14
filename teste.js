const itens = document.querySelectorAll('#lista li');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada, index) => {
    if (entrada.isIntersecting) {
      setTimeout(() => {
        entrada.target.classList.add('aparecer');
      }, index * 200); // atraso entre os itens
      observer.unobserve(entrada.target); // para de observar depois de animar
    }
  });
}, {
  threshold: 0.1 // quando 10% do item estiver visível
});

itens.forEach(item => {
  observer.observe(item);
});

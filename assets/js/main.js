document.getElementById('year').textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    filters.forEach((b) => {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');

    const cat = btn.dataset.filter;
    cards.forEach((card) => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('is-hidden', !match);
    });
  });
});

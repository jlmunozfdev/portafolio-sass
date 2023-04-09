const themeToggle = document.querySelector('#toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

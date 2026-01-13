// 1. Переключение темы День/Ночь
const themeToggler = document.getElementById('themeToggler');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

themeToggler.addEventListener('click', () => {
    if (html.getAttribute('data-bs-theme') === 'light') {
        html.setAttribute('data-bs-theme', 'dark');
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-bs-theme', 'light');
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        localStorage.setItem('theme', 'light');
    }
});

// 2. Логика корзины (счетчик)
let count = 0;
const cartCount = document.getElementById('cartCount');
const addButtons = document.querySelectorAll('.addToCartBtn');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
        // Эффект нажатия
        btn.innerText = 'Добавлено!';
        btn.classList.replace('btn-success', 'btn-outline-success');
        setTimeout(() => {
            btn.innerText = 'В корзину';
            btn.classList.replace('btn-outline-success', 'btn-success');
        }, 1000);
    });
});

// Проверка сохраненной темы при загрузке
if (localStorage.getItem('theme') === 'dark') {
    html.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
}
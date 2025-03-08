// Функция переключения страниц
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'flex';
}

// Инициализация конфетти
document.querySelectorAll('.confetti').forEach((confetti, index) => {
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 5 + 's';
    confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ce7e'][Math.floor(Math.random()*4)];
});

// Инициализация первой страницы
document.getElementById('home').style.display = 'flex';

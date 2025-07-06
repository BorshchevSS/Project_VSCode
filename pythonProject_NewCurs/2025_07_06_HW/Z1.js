
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const increaseBtn = document.querySelector('.increase');
    const decreaseBtn = document.querySelector('.decrease');
    
    let count = 0;
    
    // Функция обновления отображаемого значения
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    // Обработчик для кнопки "+"
    increaseBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    // Обработчик для кнопки "-"
    decreaseBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    // Запрещаем ввод с клавиатуры
    counterElement.addEventListener('keydown', function(e) {
        e.preventDefault();
    });
    
    // Запрещаем вставку текста
    counterElement.addEventListener('paste', function(e) {
        e.preventDefault();
    });
    
    // Инициализация счетчика
    updateCounter();
});
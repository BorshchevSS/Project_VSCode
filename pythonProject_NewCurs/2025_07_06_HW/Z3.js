document.addEventListener('DOMContentLoaded', function() {
    const colorBoxes = document.querySelectorAll('.color-box');// Массив с имеющимеся цветами со страницы html
    const textContent = document.getElementById('text-content');
    let activeColorBox = null;
    
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Получаем цвет из data-атрибута
            const color = this.getAttribute('data-color');
            
            // Применяем цвет к тексту
            textContent.style.color = color;
            
            // Удаляем активный класс с предыдущей выбранной кнопки
            if (activeColorBox) {
                activeColorBox.classList.remove('active');
            }
            
            // Добавляем активный класс к текущей кнопке
            this.classList.add('active');
            activeColorBox = this;
        });
    });
    
    // По умолчанию выбираем первый цвет
    colorBoxes[0].click();
});
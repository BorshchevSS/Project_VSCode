
document.addEventListener('DOMContentLoaded', function() {
    const tree = document.getElementById('directoryTree');
    
    // Добавляем обработчики событий для всех элементов списка
    const items = tree.querySelectorAll('li');
    items.forEach(item => {
        // Пропускаем элементы без вложенных списков
        if (item.querySelector('ul')) {
            // Добавляем обработчик клика
            item.addEventListener('click', function(e) {
                // Останавливаем всплытие события, чтобы не сворачивались родительские элементы
                e.stopPropagation();
                this.classList.toggle('collapsed');
            });
            
            // Сворачиваем все вложенные списки при загрузке
            item.classList.add('collapsed');
        }
    });
    
    // Разворачиваем корневой элемент
    tree.querySelector('> li').classList.remove('collapsed');
});
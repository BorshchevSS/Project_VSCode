document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем значения из формы
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    
    // Получаем выбранные навыки
    const skillCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
    const skills = Array.from(skillCheckboxes).map(cb => cb.value).join(', ');
    
    // Форматируем дату для вывода
    const formattedDate = formatDate(birthday);
    
    // Заполняем таблицу результатами
    document.getElementById('resultFirstname').textContent = firstname;
    document.getElementById('resultLastname').textContent = lastname;
    document.getElementById('resultBirthday').textContent = formattedDate;
    document.getElementById('resultGender').textContent = gender;
    document.getElementById('resultCountry').textContent = country;
    document.getElementById('resultCity').textContent = city;
    document.getElementById('resultSkills').textContent = skills;
    
    // Показываем результаты
    document.getElementById('result').style.display = 'block';
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Проверка университета
            const university = document.getElementById('university');
            if (!university.value.trim()) {
                university.classList.add('error');
                document.getElementById('university-error').style.display = 'block';
                isValid = false;
            } else {
                university.classList.remove('error');
                document.getElementById('university-error').style.display = 'none';
            }
            
            // Проверка института
            const institute = document.getElementById('institute');
            if (!institute.value.trim()) {
                institute.classList.add('error');
                document.getElementById('institute-error').style.display = 'block';
                isValid = false;
            } else {
                institute.classList.remove('error');
                document.getElementById('institute-error').style.display = 'none';
            }
            
            // Проверка отделения
            const branch = document.getElementById('branch');
            if (!branch.value) {
                branch.classList.add('error');
                document.getElementById('branch-error').style.display = 'block';
                isValid = false;
            } else {
                branch.classList.remove('error');
                document.getElementById('branch-error').style.display = 'none';
            }
            
            // Проверка степени
            const degree = document.getElementById('degree');
            if (!degree.value) {
                degree.classList.add('error');
                document.getElementById('degree-error').style.display = 'block';
                isValid = false;
            } else {
                degree.classList.remove('error');
                document.getElementById('degree-error').style.display = 'none';
            }
            
            // Проверка CPI
            const cpi = document.getElementById('cpi');
            if (!cpi.value || cpi.value < 0 || cpi.value > 10) {
                cpi.classList.add('error');
                document.getElementById('cpi-error').style.display = 'block';
                isValid = false;
            } else {
                cpi.classList.remove('error');
                document.getElementById('cpi-error').style.display = 'none';
            }
            
            // Проверка опыта
            const experience = document.getElementById('experience');
            if (!experience.value || experience.value < 0 || experience.value > 50) {
                experience.classList.add('error');
                document.getElementById('experience-error').style.display = 'block';
                isValid = false;
            } else {
                experience.classList.remove('error');
                document.getElementById('experience-error').style.display = 'none';
            }
            
            // Проверка веб-сайта (необязательное поле)
            const website = document.getElementById('website');
            if (website.value && !website.value.match(/^https?:\/\/.+/)) {
                website.classList.add('error');
                document.getElementById('website-error').style.display = 'block';
                isValid = false;
            } else {
                website.classList.remove('error');
                document.getElementById('website-error').style.display = 'none';
            }
            
            if (isValid) {
                alert('Форма успешно отправлена!');
                // Здесь можно отправить форму на сервер
                // this.submit();
            }
        });
        
        // Добавляем обработчики для снятия подсветки ошибок при вводе
        document.querySelectorAll('input, select').forEach(element => {
            element.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    this.classList.remove('error');
                    const errorElement = document.getElementById(this.id + '-error');
                    if (errorElement) errorElement.style.display = 'none';
                }
            });
        });
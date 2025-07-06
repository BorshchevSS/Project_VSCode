        // Класс для описания работника
        class Employee {
            constructor(id, fullName, position, department, salary) {
                this.id = id;
                this.fullName = fullName;
                this.position = position;
                this.department = department;
                this.salary = salary;
            }
        }

        // Класс для генерации HTML таблицы
        class EmpTable {
            constructor(employees) {
                this.employees = employees;
            }

            getHtml() {
                let html = '<table>';
                html += '<thead><tr><th>ID</th><th>ФИО</th><th>Должность</th><th>Отдел</th><th>Зарплата</th></tr></thead>';
                html += '<tbody>';

                this.employees.forEach(employee => {
                    html += `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.fullName}</td>
                        <td>${employee.position}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>`;
                });

                html += '</tbody></table>';
                return html;
            }
        }

        // Создаем массив работников банка
        const bankEmployees = [
            new Employee(1, 'Иванов Иван Иванович', 'Менеджер', 'Кредитный отдел', 75000),
            new Employee(2, 'Петрова Анна Сергеевна', 'Старший кассир', 'Операционный отдел', 65000),
            new Employee(3, 'Сидоров Алексей Владимирович', 'Аналитик', 'Аналитический отдел', 85000),
            new Employee(4, 'Кузнецова Елена Дмитриевна', 'Начальник отдела', 'Кредитный отдел', 95000),
            new Employee(5, 'Васильев Дмитрий Петрович', 'Кассир', 'Операционный отдел', 55000),
            new Employee(6, 'Васильев2 Дмитрий2 Петрович2', 'Кассир2', 'Операционный отдел2', 55002)
        ];

        // Создаем объект таблицы и выводим ее
        const empTable = new EmpTable(bankEmployees);
        document.getElementById('employees-table').innerHTML = empTable.getHtml();
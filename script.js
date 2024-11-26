// Загрузка данных
fetch('cfg.txt')
  .then(response => response.text())
  .then(data => {
        // Список героев и контр-пиков
        const heroes = {
            "Эстес": "Баксий",
            "Баксий": "Эстес",
            "Джонсон": "Минотавр",
            "Минотавр": "Джонсон",
            // Добавьте больше героев и контр-пиков в формате "Герой": "Контрпик"
        };

        // Обработка выбора героя
        const myTeamSelect = document.getElementById('my-team-select');
        const enemyTeamSelect = document.getElementById('enemy-team-select');
        const counterPickName = document.getElementById('counter-pick-name');

        // Добавление героев в селекты
        Object.keys(heroes).forEach(hero => {
            const option = document.createElement('option');
            option.value = hero;
            option.text = hero;
            myTeamSelect.appendChild(option);
            enemyTeamSelect.appendChild(option);
        });

        // Обработка выбора героя
        myTeamSelect.addEventListener('change', () => {
            const selectedHero = myTeamSelect.value;
            const counterPick = heroes[selectedHero];
            counterPickName.textContent = counterPick;
            counterPickName.classList.remove('selected');
        });

        enemyTeamSelect.addEventListener('change', () => {
            const selectedHero = enemyTeamSelect.value;
            const counterPick = heroes[selectedHero];
            counterPickName.textContent = counterPick;
            if (myTeamSelect.value === counterPick) {
                counterPickName.classList.add('selected');
            } else {
                counterPickName.classList.remove('selected');
            }
        });
    });

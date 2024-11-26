// Загрузка файла cfg
fetch('cfg.txt')
   .then(response => response.text())
   .then(data => {
        const heroes = data.split('\n');
        const heroMap = {};

        heroes.forEach(hero => {
            const [name, counterPick] = hero.split('-');
            heroMap[name.trim()] = counterPick.trim();
        });

        // Добавление героев в селекты
        const myTeamSelect = document.getElementById('my-team-select');
        const enemyTeamSelect = document.getElementById('enemy-team-select');

        Object.keys(heroMap).forEach(hero => {
            const option = document.createElement('option');
            option.value = hero;
            option.text = hero;
            myTeamSelect.appendChild(option);
            enemyTeamSelect.appendChild(option);
        });

        // Обработка выбора героя
        myTeamSelect.addEventListener('change', () => {
            const selectedHero = myTeamSelect.value;
            const counterPick = heroMap[selectedHero];
            const counterPickName = document.getElementById('counter-pick-name');
            counterPickName.textContent = counterPick;
            counterPickName.classList.remove('selected');
        });

        enemyTeamSelect.addEventListener('change', () => {
            const selectedHero = enemyTeamSelect.value;
            const counterPick = heroMap[selectedHero];
            const counterPickName = document.getElementById('counter-pick-name');
            counterPickName.textContent = counterPick;
            if (myTeamSelect.value === counterPick) {
                counterPickName.classList.add('selected');
            } else {
                counterPickName.classList.remove('selected');
            }
        });
    });

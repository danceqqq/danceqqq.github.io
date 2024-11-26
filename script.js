// Список героев и контр-пиков
const heroes = {
    "Эстес": {
        "counterPick": "Баксий",
        "img": "estes.png"
    },
    "Баксий": {
        "counterPick": "Эстес",
        "img": "baxi.png"
    },
    "Джонсон": {
        "counterPick": "Минотавр",
        "img": "johnson.jpg"
    },
    "Минотавр": {
        "counterPick": "Джонсон",
        "img": "minotavr.png"
    },
    // Добавьте больше героев и контр-пиков в формате "Герой": { "Контрпик": "Имя", "img": "Имя файла" }
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

// Установка значений для селекта "Моя команда"
myTeamSelect.value = Object.keys(heroes)[0];

// Обработка выбора героя
myTeamSelect.addEventListener('change', () => {
    const selectedHero = myTeamSelect.value;
    const counterPick = heroes[selectedHero].counterPick;
    counterPickName.textContent = counterPick;
    counterPickName.classList.remove('selected');
});

enemyTeamSelect.addEventListener('change', () => {
    const selectedHero = enemyTeamSelect.value;
    const counterPick = heroes[selectedHero].counterPick;
    counterPickName.textContent = counterPick;
    if (myTeamSelect.value === counterPick) {
        counterPickName.classList.add('selected');
    } else {
        counterPickName.classList.remove('selected');
    }
});

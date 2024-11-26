// Список героев и контр-пиков
const heroes = {
    "Эстес": {
        "counterPick": "Баксий",
        "img": "estes.png"
    },
    "Баксий": {
        "counterPick": "Эстес",
        "img": "baksij.png"
    },
    "Джонсон": {
        "counterPick": "Минотавр",
        "img": "johnson.png"
    },
    "Минотавр": {
        "counterPick": "Джонсон",
        "img": "minotavr.png"
    },
    // Добавьте больше героев и контр-пиков в формате "Герой": { "Контрпик": "Имя", "img": "Имя файла" }
};

// Обработка выбора героя
const heroSelects = document.querySelectorAll('.hero-select select');
const counterPickContainer = document.getElementById('counter-pick-container');
const counterPickImgs = [];

heroSelects.forEach((select) => {
    Object.keys(heroes).forEach((hero) => {
        const option = document.createElement('option');
        option.value = hero;
        const img = document.createElement('img');
        img.src = heroes[hero].img;
        option.appendChild(img);
        select.appendChild(option);
    });
});

heroSelects.forEach((select) => {
    select.addEventListener('change', () => {
        const selectedHero = select.value;
        if (selectedHero === '') {
            counterPickImgs.forEach((img) => {
                img.remove();
            });
            counterPickImgs.length = 0;
        } else {
            const counterPick = heroes[selectedHero].counterPick;
            const counterPickImg = document.createElement('img');
            counterPickImg.src = heroes[counterPick].img;
            counterPickContainer.appendChild(counterPickImg);
            counterPickImgs.push(counterPickImg);
        }
    });
});

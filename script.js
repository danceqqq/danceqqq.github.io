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
        "img": "johnson.png"
    },
    "Минотавр": {
        "counterPick": "Джонсон",
        "img": "minotavr.png"
    },
    // Добавьте больше героев и контр-пиков в формате "Герой": { "Контрпик": "Имя", "img": "Имя файла" }
};

// Обработка выбора героя
const heroImgs = document.querySelectorAll('.hero-select img');
const counterPickImg = document.getElementById('counter-pick-img');

heroImgs.forEach((img, index) => {
    img.src = heroes[Object.keys(heroes)[index]].img;
    img.addEventListener('click', () => {
        const selectedHero = Object.keys(heroes)[index];
        const counterPick = heroes[selectedHero].counterPick;
        counterPickImg.src = heroes[counterPick].img;
    });
});

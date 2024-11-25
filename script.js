// Получаем данные с сайта
fetch('https://mlcounter.com/')
   .then(response => response.json())
   .then(data => {
        // Создаем список персонажей
        const characterList = document.querySelector('.character-list');
        data.forEach(character => {
            const characterElement = document.createElement('div');
            characterElement.classList.add('character');
            characterElement.style.backgroundImage = `url(${character.image})`;
            characterElement.addEventListener('click', () => {
                // Получаем данные о персонаже
                fetch(`https://mlcounter.com/${character.name}`)
                   .then(response => response.json())
                   .then(characterData => {
                        // Выводим данные о персонаже
                        const dataContainer = document.querySelector('.data-container');
                        dataContainer.innerHTML = `
                            <h2>${character.name}</h2>
                            <p>Описание: ${characterData.description}</p>
                            <p>Данные: ${characterData.data}</p>
                        `;
                    });
            });
            characterList.appendChild(characterElement);
        });
    });

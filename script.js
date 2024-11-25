const axios = require('axios');
const cheerio = require('cheerio');

// Список героев
const heroes = [
  'fredrinn',
  'x.borg',
  'karrie',
  'valir',
  'dyrroth',
  'thamuz',
  // Добавьте остальных героев в этот список
];

// Функция для парсинга HTML-страницы
function parseHeroPage(hero) {
  const url = `https://mlcounter.com/heroes/${hero}/`;
  axios.get(url)
   .then(response => {
      const $ = cheerio.load(response.data);
      const heroName = $('h1').text();
      const weakAgainst = [];
      $('.hero-counter-list.hero-counter').each((index, element) => {
        weakAgainst.push($(element).find('.hero-name').text());
      });
      console.log(`${heroName} is Weak Against:`);
      console.log(weakAgainst.join(', '));
    })
   .catch(error => {
      console.error(error);
    });
}

// Парсинг страниц героев
heroes.forEach(hero => {
  parseHeroPage(hero);
});

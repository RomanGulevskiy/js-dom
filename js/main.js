'use strict';

document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';
const books = document.querySelectorAll('.book');
const heads = document.querySelectorAll('a');

books[0].before(books[1]);
books[5].after(books[2]);
books[0].after(books[4]);

heads[4].textContent = 'Книга 3. this и Прототипы Объектов';

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
books[2].querySelectorAll('li')[8].after(newChapter);

const chapters2 = books[0].querySelectorAll('li');
const chapters5 = books[5].querySelectorAll('li');

chapters2[10].before(chapters2[2]);
chapters2[3].after(chapters2[6]);
chapters2[4].before(chapters2[8]);

chapters5[1].after(chapters5[9]);
chapters5[4].after(chapters5[2]);
chapters5[7].after(chapters5[5]);

document.querySelector('.adv').remove();
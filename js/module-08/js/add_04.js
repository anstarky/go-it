/*
  Напишите скрипт для создания галлереи изображений.

  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [{
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
},
{
  url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
},
{
  url: 'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Two Brown Hen and One Red Rooster',
},
{
  url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
},
{
  url: 'https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Macaw Birds',
},
{
  url: 'https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: '2 Lion on Grass Field during Daytime',
},
];

const gallery = document.querySelector('.gallery');
const list = galleryItems.map((item) => {
  const li = document.createElement('li');
  li.style.listStyle = 'none';
  li.style.display = 'inline';

  const img = document.createElement('img');
  img.setAttribute('src', item.url);
  img.setAttribute('alt', item.alt);
  img.setAttribute('width', '300px');
  img.setAttribute('height', '210px');
  img.style.padding = '15px';

  li.append(img);

  return li;
});

gallery.append(...list);


/* Альтернативный вариант:

const ref = {
  gallery: document.querySelector(".gallery")
};

function createElem(tag, className, url = null, alt = null) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e))
  if (url) {
    element.src = url
  }
  if (alt) {
    element.alt = alt;
  }
  return element;
}

function createItem ({url, alt}) {
  const li = createElem('li', 'gallery-item');
  const img = createElem('img', 'gallery-img', url, alt);
  li.append(img);
  return li;
}

function renderNoteList(ref, arr) {
  // клонируем без дочерних элементов
  const elem = ref.cloneNode(false);
  //  добавляем новые дочерние элементы
  elem.append(...arr.map(e => createItem(e)));
  // заменяем исходный элемент
  ref.replaceWith(elem);
}

renderNoteList(document.querySelector(".gallery"), galleryItems)
renderNoteList(document.querySelector(".gallery"), galleryItems2)
*/

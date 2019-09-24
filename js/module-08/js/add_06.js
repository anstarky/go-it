/*
  Создайте функцию createMovieCard(), которая
  создает и возвращает DOM-узел карточки кинофильма.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

const card = {
  Title: 'The Godfather',
  ImgSrc: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
  AltOfImg: 'movie image',
  Description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
  Released: 'Released: 1972-03-14',
  Rating: 'Rating: 8.6',
};

const thirdTask = document.querySelector('.container').lastElementChild;

const createMovieCard = ({
  Title,
  ImgSrc,
  AltOfImg,
  Description,
  Released,
  Rating,
}) => {
  const div = document.createElement('div');
  div.classList.add('movie');

  const img = document.createElement('img');
  img.setAttribute('src', ImgSrc);
  img.setAttribute('alt', AltOfImg);
  img.classList.add('movie__image');

  const divBody = document.createElement('div');
  divBody.classList.add('movie__body');

  const h2 = document.createElement('h2');
  h2.classList.add('movie__title');
  h2.textContent = Title;

  const p = document.createElement('p');
  p.classList.add('movie__description');
  p.textContent = Description;

  const date = document.createElement('p');
  date.classList.add('movie__date');
  date.textContent = Released;

  const rating = document.createElement('p');
  rating.classList.add('movie__rating');
  rating.textContent = Rating;


  div.append(img, divBody);
  divBody.append(h2, p, date, rating);

  return div;
};

thirdTask.append(createMovieCard(card));

/* Альтернативній вариант:
const ref = {
  result: document.querySelector(".result-wrp")
};

const item = {
  imdbID: "tt0372784",
  Title: "The Godfather",
  Released: "69368400000",
  Poster: "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
  Description:
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  Rating: 8.6
};

function createMovieCard({ imdbID, Poster, Title, Released, Rating }) {
  const movie = createElem("div", "movie", null, imdbID);
  const image = createElem("img", "movie__image", null, null, Poster, Title);
  const body = createElem("div", "movie__body");
  const title = createElem("h2", "movie__title", Title);
  const description = createElem("p", "movie__date", Title);
  const date = createElem(
    "p",
    "movie__date",
    `Released: ${new Date(+Released).toLocaleDateString('uk-UA', {year: 'numeric', month: 'numeric', day: 'numeric'})}`
  );
  const rating = createElem("p", "movie__rating", `Rating: ${Rating}`);
  movie.append(image, body);
  body.append(title, description, date, rating);
  return movie;
}

function createElem(
  tag,
  className,
  text = null,
  id = null,
  src = null,
  alt = null
) {
  const element = document.createElement(tag);
  className.split(" ").map(e => element.classList.add(e));
  if (text) {
    element.textContent = text;
  }
  if (id) {
    element.id = id;
  }
  if (src) {
    element.src = src;
  }
  if (alt) {
    element.alt = alt;
  }
  return element;
}
ref.result.append(createMovieCard(item));
*/

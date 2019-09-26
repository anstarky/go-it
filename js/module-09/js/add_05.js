/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

const images = document.querySelector('.images');

function showSRC({
  target,
}) {
  console.log(target);
  const {
    src,
  } = target;
  alert(src);
}

images.addEventListener('click', showSRC);

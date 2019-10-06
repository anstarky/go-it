/*
 * Ознакомься с содержанием панелей HTML и CSS.
 *
 * Напиши скрипт который сохраняет выбранную пользователем
 * тему в localStorage и, при следующих посещениях страницы,
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 *
 * При выборе темы, добавляй на элемент body соответствующий класс.
 */

/*
 * Ознакомься с содержанием панелей HTML и CSS.
 * 
 * Напиши скрипт который сохраняет выбранную пользователем
 * тему в localStorage и, при следующих посещениях страницы, 
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 * 
 * При выборе темы, добавляй на элемент body соответствующий класс. 
 */

body = document.querySelector('.theme-manager');
btnLight = document.querySelector('button[data-theme="light"]');
btnDark = document.querySelector('button[data-theme="dark"]')

/* -------------   init   -------------------- */
const theme = localStorage.getItem('theme');
if (theme !== null) {
    body.classList.add(theme);
}
/* -------------  END: init   -------------------- */

const clickLight = btnLight.addEventListener('click', setLightTheme);
const clickDark = btnDark.addEventListener('click', setDarkTheme);


function setLightTheme() {
    body.classList.toggle('theme-light');

    if (body.classList.contains('theme-dark')) {
        body.classList.remove('theme-dark');
    }

    localStorage.setItem('theme', 'theme-light');
}


function setDarkTheme() {
    body.classList.toggle('theme-dark');

    if (body.classList.contains('theme-light')) {
        body.classList.remove('theme-light');
    }

    localStorage.setItem('theme', 'theme-dark');
}
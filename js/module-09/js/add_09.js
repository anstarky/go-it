/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.

  Напишите скрипт который реализует следующее поведение:

  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal,
    должно появляться. Для этого необходимо убрать класс modal-hidden.
    Для выбора модального модального окна используйте класс js-modal-backdrop

  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const refs = {
  openBtn: document.querySelector('.btn'),
  closeBtn: document.querySelector('.close-btn'),
  modal: document.querySelector('.modal'),
  modalBackDrop: document.querySelector('.js-modal-backdrop'),
};

// console.log(refs.modalBackDrop);

function openModal() {
  refs.modal.classList.remove('modal-hidden');
}

function closeModal() {
  refs.modal.classList.add('modal-hidden');
}

function backDropModal({
  target,
}) {
  // Проверяем есть ли внутри элемента класс modal
  if (target.classList.contains('modal')) {
    refs.modal.classList.add('modal-hidden');
  }
}

refs.openBtn.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.modalBackDrop.addEventListener('click', backDropModal);

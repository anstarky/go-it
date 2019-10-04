import {
    notepad
} from '../main_01';

function removeListItem(elem) {
    const li = elem.closest('.note-list__item');
    const {
        id,
    } = li.dataset;
    li.remove();
    notepad.deleteNote(id);
}

export default removeListItem;
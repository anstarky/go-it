import {
    notepad
} from '../main_01';
import removeListItem from './removeListItem';

function increasePriority(event) {
    event.preventDefault();
    const {
        target
    } = event;

    const li = target.closest('.note-list__item');
    const {
        id
    } = li.dataset;

    const note = notepad.findNoteById(id);
    const notePriority = note.priority;
    if (notePriority < 3) {
        const newPriority = notePriority + 1;

        if (
            target.dataset.action === 'increase-priority' ||
            target.parentNode.dataset.action === 'increase-priority') {

            notepad.updateNotePriority(id, newPriority);
            target.closest('section').lastElementChild.textContent = `Priority: ${newPriority}`;
        }
    } else return;
}

export default increasePriority;
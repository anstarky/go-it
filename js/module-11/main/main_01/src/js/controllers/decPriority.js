import {
    notepad
} from '../mvc/model';

function decreasePriority(event) {
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
    if (notePriority > 0) {
        const newPriority = notePriority - 1;

        if (
            target.dataset.action === 'decrease-priority' ||
            target.parentNode.dataset.action === 'decrease-priority') {

            notepad.updateNotePriority(id, newPriority);
            target.closest('section').lastElementChild.textContent = `Priority: ${newPriority}`;
        }
    } else return;
}

export default decreasePriority;
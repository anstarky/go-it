import {
    notepad
} from '../model';

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
        const priority = notePriority + 1;

        if (
            target.dataset.action === 'increase-priority' ||
            target.parentNode.dataset.action === 'increase-priority') {

            target.closest('section').lastElementChild.textContent = `Priority: ${priority}`;
            notepad.updateNoteContent(id, {
                priority
            });
        }
    } else return;
}

export default increasePriority;
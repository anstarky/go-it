import {
    notepad
} from '../model';

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
        const priority = notePriority - 1;

        if (
            target.dataset.action === 'decrease-priority' ||
            target.parentNode.dataset.action === 'decrease-priority') {

            notepad.updateNoteContent(id, {
                priority
            });
            target.closest('section').lastElementChild.textContent = `Priority: ${priority}`;
        }
    } else return;
}

export default decreasePriority;
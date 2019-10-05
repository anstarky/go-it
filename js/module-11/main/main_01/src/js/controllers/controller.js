import refs from '../utils/refs';
import resetSearch from './resetSearch';
import filterByText from './filterByText';
import openModalEditor from './openModalEditor';
import editData from './editData';
import deleteData from './deleteData';
import saveData from './saveData';
import increasePriority from './incPriority';
import decreasePriority from './decPriority';

refs.list.addEventListener('click', increasePriority);
refs.list.addEventListener('click', decreasePriority);
refs.editorSave.addEventListener('click', saveData);
refs.list.addEventListener('click', deleteData);
refs.list.addEventListener('click', editData);
refs.search.addEventListener('input', filterByText);
refs.search.addEventListener('blur', resetSearch);
refs.openEditor.addEventListener('click', openModalEditor);
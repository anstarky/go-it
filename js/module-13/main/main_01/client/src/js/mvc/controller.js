import debounce from 'lodash.debounce'

import refs from '../utils/refs';
import resetSearch from './controller/resetSearch';
import filterByText from './controller/filterByText';
import openModalEditor from './controller/openModalEditor';
import editData from './controller/editData';
import deleteData from './controller/deleteData';
import saveData from './controller/saveData';
import increasePriority from './controller/incPriority';
import decreasePriority from './controller/decPriority';

refs.list.addEventListener('click', increasePriority);
refs.list.addEventListener('click', decreasePriority);

refs.editorSave.addEventListener('click', saveData);

refs.list.addEventListener('click', deleteData);
refs.list.addEventListener('click', editData);

refs.search.addEventListener('input', debounce(filterByText, 300));

refs.search.addEventListener('blur', resetSearch);

refs.openEditor.addEventListener('click', openModalEditor);
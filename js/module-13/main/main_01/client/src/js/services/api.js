import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3330/notes';

export const getNotes = () => {
  return axios
    .get()
    .then(response => response.data)
    .catch(error => console.log(error));
};

export const saveNotes = note => {
  return axios
    .post('', note)
    .then(response => response.data)
    .catch(error => console.log(error));
};

export const deleteNotes = id => {
  return axios
    .delete(`/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

export const updateNotes = (id, updatedNote) => {
  return axios
    .patch(`/${id}`, updatedNote)
    .then(response => response.data)
    .catch(error => console.log(error));
};
import './sass/main.scss';

import posts from './js/posts';
import postTemplate from './tamplates/posts.hbs';

console.log(posts);

const refPost = document.querySelector('.posts');

const createPostListItemsMarkup = (posts) => posts.map(book => postTemplate(book)).join('');

const markup = createPostListItemsMarkup(posts);

refPost.insertAdjacentHTML('beforeend', markup);
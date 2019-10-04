import '../sass/main.scss';
import products from './js/products';
import productTemplate from './tamplates/products.hbs';

const refProduct = document.querySelector('.products');

const createProductListItemsMarkup = (products) => products.map(product => productTemplate(product)).join('');

const markup = createProductListItemsMarkup(products);

refProduct.insertAdjacentHTML('beforeend', markup);

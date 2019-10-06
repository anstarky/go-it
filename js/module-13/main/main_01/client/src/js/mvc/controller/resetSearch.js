import refs from '../../utils/refs';

export default function resetSearch(e) {
  e.preventDefault();
  refs.search.parentNode.reset();
}

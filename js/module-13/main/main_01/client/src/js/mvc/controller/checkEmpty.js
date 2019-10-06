import refs from '../../utils/refs';

export default function checkEmpty() {
  const title = refs.title.value.trim() || '';
  const body = refs.body.value.trim() || '';
  if (title.length === 0 || body.length === 0) {
    return true;
  }
  return false;
}

import refs from '../utils/refs';
import {
  notificationError
} from '../utils/libraries';

export default function checkEmpty() {
  const title = refs.title.value.trim() || '';
  const body = refs.body.value.trim() || '';
  if (title.length === 0 || body.length === 0) {
    notificationError();
    return true;
  }
  return false;
}
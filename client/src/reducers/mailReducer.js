import { SEND_CONTACT } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SEND_CONTACT:
      return state;
    default:
      return state;
  }
}

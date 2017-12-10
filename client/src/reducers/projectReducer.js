import { FETCH_PROJECTS } from '../actions/types';

const INITIAL_STATE = {
  all: []
}

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return [ action.payload, ...state ];
    default:
      return state;
  }
}

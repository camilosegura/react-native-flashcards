import { SAVE_DECK_TITLE } from '../utils/constants';

function decks (state = {}, action) {
  const { type, title } = action;
  let newState;

  switch (type) {
    case SAVE_DECK_TITLE:
      newState = JSON.parse(JSON.stringify(state));
      newState[title] = {
        title,
        questions: []
      };
      return newState;
    default :
      return state
  }
}

export default decks;

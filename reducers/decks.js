import { SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from '../utils/constants';

function decks (state = {}, action) {
  const { type, title, card } = action;
  console.log(state)
  let newState = JSON.parse(JSON.stringify(state));;

  switch (type) {
    case SAVE_DECK_TITLE:
      newState[title] = {
        title,
        questions: []
      };
      return newState;
    case ADD_CARD_TO_DECK:
      newState[title]
        .questions.push(card);

      return newState;
    default :
      return state
  }
}

export default decks;

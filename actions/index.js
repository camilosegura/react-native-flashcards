import {
  GET_DECK,
  GET_DECKS,
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK
} from './types';

export const getDecks = () => {
  return {
    type: GET_DECKS,
  }
};

export const getDeck = (id) => {
  return {
    type: GET_DECK,
    id
  }
};

export const saveDeckTitle = (title) => {
  return {
    type: SAVE_DECK_TITLE,
    title
  }
};

export const addCardToDeck = (title, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  }
};

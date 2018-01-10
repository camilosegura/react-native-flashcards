import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import reducer from '../reducers';
import { STORE_DECK } from './constants';

const configureStore = () => {
  const store = createStore(reducer);

  store.subscribe(() => {
    AsyncStorage.setItem(STORE_DECK, JSON.stringify(store.getState()));
  });

  return store;
}

export default configureStore;

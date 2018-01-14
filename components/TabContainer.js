import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { white, black } from '../utils/colors';
import DeckList from './DeckList';
import DeckAdd from './DeckAdd';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list' size={30} color={tintColor} />
    },
  },
  DeckAdd: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: black,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

export default Tabs;

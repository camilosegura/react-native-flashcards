import { StackNavigator } from 'react-navigation';
import TabContainer from './TabContainer';
import { ADD_CARD } from '../utils/constants';
import DeckView from './DeckView';
import CardAdd from './CardAdd';

const MainNavigator = StackNavigator({
  Home: {
    screen: TabContainer,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }),
  },
  CardAdd: {
    screen: CardAdd,
    navigationOptions: ({ navigation }) => ({
      title: ADD_CARD,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }),
  }
});

export default MainNavigator;

import { StackNavigator } from 'react-navigation';
import TabContainer from './TabContainer';
import { ADD_CARD, QUIZ } from '../utils/constants';
import DeckView from './DeckView';
import CardAdd from './CardAdd';
import QuizStart from './QuizStart';
import QuizEnd from './QuizEnd';

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
  },
  QuizStart: {
    screen: QuizStart,
    navigationOptions: ({ navigation }) => ({
      title: QUIZ,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }),
  },
  QuizEnd: {
    screen: QuizEnd,
    navigationOptions: ({ navigation }) => ({
      title: QUIZ,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }),
  }
});

export default MainNavigator;

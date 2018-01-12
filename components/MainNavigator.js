import { StackNavigator } from 'react-navigation';
import TabContainer from './TabContainer';
import DeckView from './DeckView';

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
  }
});

export default MainNavigator;

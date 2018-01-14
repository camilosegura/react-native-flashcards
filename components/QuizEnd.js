import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { QUIZ_FINISHED, CORRECT_ANSWERS, RESTART_QUIZ, BACK_DECK } from '../utils/constants';
import styles from '../styles';

const QuizEnd = ({navigation}) => {
  const { title, correctCount } = navigation.state.params;
  return (
    <View style={ styles.component }>
      <Text style={ styles.title } >
        { QUIZ_FINISHED }
      </Text>
      <Text style={ styles.copy } >
        { CORRECT_ANSWERS } { correctCount }
      </Text>
      <TouchableOpacity style={ [styles.btn, styles.btnGray] }
        onPress={ ()=> navigation.navigate(
          'QuizStart',
          {
            title: title
          }
        ) }>
        <Text style={ styles.txtWhite }>{ RESTART_QUIZ }</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ [styles.btn, styles.btnBlack] }
        onPress={ ()=> navigation.navigate(
          'DeckView',
          {
            title: title
          }
        ) }>
        <Text style={ styles.txtWhite }>{ BACK_DECK }</Text>
      </TouchableOpacity>
    </View>
  )
};

export default QuizEnd;

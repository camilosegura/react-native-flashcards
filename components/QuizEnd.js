import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { QUIZ_FINISHED, CORRECT_ANSWERS, RESTART_QUIZ, BACK_DECK } from '../utils/constants';
import styles from '../styles';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';

const QuizEnd = ({navigation}) => {
  const { title, correctCount, totalQuestions } = navigation.state.params;

  clearLocalNotification()
    .then(setLocalNotification);

  return (
    <View style={ styles.component }>
      <Text style={ styles.title } >
        { QUIZ_FINISHED }
      </Text>
      <Text style={ styles.copy } >
        { CORRECT_ANSWERS } { correctCount }/{ totalQuestions }
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

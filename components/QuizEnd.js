import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const QuizEnd = ({navigation}) => (
  <View>
    <Text>
      QuizEnd - {navigation.state.params.correctCount}
    </Text>
  </View>
);

export default QuizEnd;

import React from 'react';
import { View, Text } from 'react-native';

const DeckView = ({navigation}) => (
  <View>
    <Text>
      DeckView
      {navigation.state.params.title}
    </Text>
  </View>
);

export default DeckView;

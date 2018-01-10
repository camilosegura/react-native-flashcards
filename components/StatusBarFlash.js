import React from 'react'
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

const StatusBarFlash = () => {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent />
    </View>
  )
};

export default StatusBarFlash;

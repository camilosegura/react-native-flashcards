import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './utils/store';
import MainNavigator from './components/MainNavigator';
import StatusBarFlash from './components/StatusBarFlash';
import styles from './styles';
import { setLocalNotification } from './utils/notifications';


export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={configureStore()} >
        <View style={styles.container}>
          <StatusBarFlash />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

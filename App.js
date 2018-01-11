import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './utils/store';
import TabContainer from './components/TabContainer';
import StatusBarFlash from './components/StatusBarFlash';
import styles from './styles';


export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()} >
        <View style={styles.container}>
          <StatusBarFlash />
          <TabContainer />
        </View>
      </Provider>
    );
  }
}

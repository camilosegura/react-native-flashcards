import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';
import TabContainer from './components/TabContainer';
import StatusBarFlash from './components/StatusBarFlash';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)} >
        <View style={styles.container}>
          <StatusBarFlash />
          <TabContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

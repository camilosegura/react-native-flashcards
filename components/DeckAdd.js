import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { NEW_DECK_TITLE, SUBMIT } from '../utils/copy';
import styles from '../styles';

class DeckAdd extends Component {

  render() {
    return (
      <View style={ styles.component }>
        <Text style={ styles.title } >{ NEW_DECK_TITLE }</Text>
        <TextInput style={ styles.input } />
        <TouchableOpacity style={ [styles.btn, styles.btnBlack] } onPress={ () => {} }>
          <Text style={ styles.txtWhite }>{ SUBMIT }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckAdd;

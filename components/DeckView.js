import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CARDS, ADD_CARD, START_QUIZ } from '../utils/constants';
import styles from '../styles';

const DeckView = ({navigation, deck}) => (
  <View style={ styles.component }>
    <Text style={ styles.title } >{ deck.title }</Text>
    <Text style={ styles.copy } >{ deck.questions.length } {CARDS}</Text>
    <TouchableOpacity style={ [styles.btn, styles.btnWhite] } onPress={ ()=> navigation.navigate(
      'CardAdd',
      {
        title: deck.title
      }
    ) }>
      <Text style={ styles.txtBlack }>{ ADD_CARD }</Text>
    </TouchableOpacity>
    <TouchableOpacity style={ [styles.btn, styles.btnBlack] } onPress={ ()=> navigation.navigate(
      'QuizStart',
      {
        title: deck.title
      }
    ) }>
      <Text style={ styles.txtWhite }>{ START_QUIZ }</Text>
    </TouchableOpacity>
  </View>
);



const mapStateToProps = (state, ownState) => {
  const title = ownState.navigation.state.params.title;

  return {
    deck: state.decks[title]
  }
};

export default connect(mapStateToProps)(DeckView);

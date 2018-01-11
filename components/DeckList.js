import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

const DeckView = ({item}) => (
  <View style={ styles.listDeck }>
    <Text style={ styles.subTitle } >{item.title}</Text>
    <Text style={ styles.subCopy }>{item.questions.length} cards</Text>
  </View>
)

const DeckList = ({decks}) => (
  <View>
    <FlatList
      data={decks}
      renderItem={ DeckView }
      keyExtractor={(item, index) => index}
    />
  </View>
);

const mapStateToProps = (state, ownState) => {
  const decks = [];
  for (let key in state.decks) {
    decks.push(state.decks[key]);
  }
  return {
    decks
  }
};

const mapDispatchToProps = dispatch => ({
  save: title => dispatch(saveDeckTitle(title))
});

export default connect(mapStateToProps)(DeckList);

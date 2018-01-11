import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const DeckList = ({decks}) => (
  <View>
    <Text>{JSON.stringify(decks)}</Text>
  </View>
);

const mapStateToProps = (state, ownState) => ({
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  save: title => dispatch(saveDeckTitle(title))
});

export default connect(mapStateToProps)(DeckList);

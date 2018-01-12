import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

class DeckList extends Component {
  constructor(props) {
    super(props);

    this.DeckView = this.DeckView.bind(this);
  }

  goToView(title) {
    this.props.navigation.navigate(
      'DeckView',
      { title }
    )
  }

  DeckView({ item }) {
    return (
      <TouchableOpacity style={styles.listDeck}
        onPress={ this.goToView.bind(this, item.title) }>
        <Text style={ styles.subTitle } >{ item.title }</Text>
        <Text style={ styles.subCopy }>{ item.questions.length } cards</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={ this.props.decks }
          renderItem={ this.DeckView }
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

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

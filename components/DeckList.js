import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import { CARDS, NO_DECKS, ADD_DECK } from '../utils/constants';

class DeckList extends Component {
  constructor(props) {
    super(props);

    this.deckView = this.deckView.bind(this);
    this.list = this.list.bind(this);
  }

  goToView(title) {
    this.props.navigation.navigate(
      'DeckView',
      { title }
    )
  }

  deckView({ item }) {
    return (
      <TouchableOpacity style={styles.listDeck}
        onPress={ this.goToView.bind(this, item.title) }>
        <Text style={ styles.subTitle } >{ item.title }</Text>
        <Text style={ styles.subCopy }>{ item.questions.length } { CARDS }</Text>
      </TouchableOpacity>
    )
  }

  list() {
    if (this.props.decks.length) {
      return (
        <View>
          <FlatList
            data={ this.props.decks }
            renderItem={ this.deckView }
            keyExtractor={(item, index) => index}
          />
        </View>
      )
    } else {
      return (
        <View style={ styles.component }>
          <Text style={ styles.title }>
            { NO_DECKS }
          </Text>
        </View>
      )
    }
  }

  render() {
    return this.list();
  }
}

const mapStateToProps = (state) => {
  const decks = [];
  for (let key in state.decks) {
    decks.push(state.decks[key]);
  }
  return {
    decks
  }
};

export default connect(mapStateToProps)(DeckList);

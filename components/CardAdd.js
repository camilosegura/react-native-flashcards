import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';
import styles from '../styles';

class CardAdd extends Component {
  render() {
    return (
      <View>
        <TextInput style={ styles.input }
          onChangeText={(title) => {}}
          value={} />
        <Text>
        Add Card
        {this.props.navigation.state.params.title}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownState) => ({

});

const mapDispatchToProps = dispatch => ({
  save: (title, card) => dispatch(addCardToDeck(title, card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardAdd);

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { saveDeckTitle } from '../actions';
import { NEW_DECK_TITLE, SUBMIT } from '../utils/constants';
import styles from '../styles';

class DeckAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    const { title } = this.state;
    this.props.save(title);
    this.setState({title: ''});

    this.props.navigation.navigate(
      'DeckView',
      { title }
    )
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={ styles.component }
        behavior="padding">
        <Text style={ styles.title } >{ NEW_DECK_TITLE }</Text>
        <TextInput style={ styles.input }
          onChangeText={(title) => this.setState({title})}
          value={this.state.title} />
        <TouchableOpacity style={ [styles.btn, styles.btnBlack] } onPress={ this.onSave }>
          <Text style={ styles.txtWhite }>{ SUBMIT }</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  save: title => dispatch(saveDeckTitle(title))
});

export default connect(null, mapDispatchToProps)(DeckAdd);

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';
import styles from '../styles';
import { QUESTION, ANSWER, SUBMIT } from '../utils/constants';

class CardAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange() {
    this.setState({
      question: this.question,
      answer: this.answer
    })
  }

  onSave() {
    const card = this.state;
    const title = this.props.navigation.state.params.title;
    this.props.save(title, card);
    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView
        style={ styles.component }
        behavior="padding">
        <TextInput style={ styles.input }
          onChangeText={ question => this.setState({ question }) }
          value={ question }
          placeholder={ QUESTION } />
        <TextInput style={ styles.input }
          onChangeText={ this.onChange }
          onChangeText={ answer => this.setState({ answer }) }
          value={ answer }
          placeholder={ ANSWER } />
        <TouchableOpacity style={ [styles.btn, styles.btnBlack] } onPress={ this.onSave }>
          <Text style={ styles.txtWhite }>{ SUBMIT }</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state, ownState) => ({

});

const mapDispatchToProps = dispatch => ({
  save: (title, card) => dispatch(addCardToDeck(title, card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardAdd);

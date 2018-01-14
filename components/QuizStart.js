import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Easing
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import {
  QUESTION,
  ANSWER,
  SUBMIT,
  NO_CARDS,
  CORRECT,
  INCORRECT
} from '../utils/constants';
import FlipView from 'react-native-flip-view-next';

class QuizStart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalQuestions: 0,
      questions: [],
      correctCount: 0,
      incorrectCount: 0,
      currentCount: 0,
      isFlipped: false
    };

    this.increaseIncorrect = this.increaseIncorrect.bind(this);
    this.increaseCorrect = this.increaseCorrect.bind(this);
    this.moveNext = this.moveNext.bind(this);
  }

  componentDidMount() {
    const { deck } = this.props;
    this.setState({
      totalQuestions: deck.questions.length,
      questions: deck.questions,
    });
  }

  increaseCorrect() {
    this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1
      }),
      this.moveNext
    );
  }

  increaseIncorrect() {
    this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1
      }),
      this.moveNext
    );
  }

  moveNext() {
    if ( this.state.currentCount + 1 === this.state.totalQuestions ) {
      this.props.navigation.navigate(
        'QuizEnd',
        {
          correctCount: this.state.correctCount,
          title: this.props.navigation.state.params.title
        }
      )

      this.setState({
        correctCount: 0,
        incorrectCount: 0,
        currentCount: 0,
        isFlipped: false
      })
    } else {
      this.setState((prevState) => ({
        currentCount: prevState.currentCount + 1,
        isFlipped: false
      }));
    }
  }

  flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  };

  renderQuestion() {
    const question = this.state.questions[this.state.currentCount] ?
      this.state.questions[this.state.currentCount].question :
      '';
    return (
      <View style={ styles.component }>
        <Text style={ styles.title }>
          { question }
        </Text>
        <TouchableOpacity onPress={this.flip}>
          <Text style={ styles.flip }>{ ANSWER }</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderAnswer() {
    const answer = this.state.questions[this.state.currentCount] ?
      this.state.questions[this.state.currentCount].answer :
      '';
    return (
      <View style={ styles.component }>
        <Text style={ styles.title }>
          { answer }
        </Text>
        <TouchableOpacity onPress={this.flip}>
          <Text style={ styles.flip }>{ QUESTION }</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { deck } = this.props;
    const { currentCount, totalQuestions, isFlipped } = this.state;

    if (deck.questions.length) {
      return (
        <View style={{ flex: 1 }}>
          <Text>{ `${currentCount + 1}/${totalQuestions}` }</Text>
          <FlipView style={ styles.component }
            front={ this.renderQuestion() }
            back={ this.renderAnswer() }
            isFlipped={ isFlipped }
            onFlipped={(val) => {console.log('Flipped: ' + val);}}
            flipAxis="y"
            flipEasing={Easing.out(Easing.ease)}
            flipDuration={500}
            perspective={1000}/>
            <View style={ styles.component }>
              <TouchableOpacity style={ [styles.btn, styles.btnGreen] }
                onPress={ this.increaseCorrect }>
                <Text style={ styles.txtWhite }>{ CORRECT }</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ [styles.btn, styles.btnRed] }
                onPress={ this.increaseIncorrect }>
                <Text style={ styles.txtWhite }>{ INCORRECT }</Text>
              </TouchableOpacity>
            </View>
        </View>
      )
    } else {
      return (
        <View style={ styles.component }>
          <Text style={ styles.title }>{ NO_CARDS }</Text>
          <TouchableOpacity style={ [styles.btn, styles.btnWhite] } onPress={ ()=> navigation.navigate(
            'CardAdd',
            {
              title: deck.title
            }
          ) }>
            <Text style={ styles.txtBlack }>{ ADD_CARD }</Text>
          </TouchableOpacity>
        </View>
      )
    }

  }
}

const mapStateToProps = (state, ownState) => {
  const title = ownState.navigation.state.params.title;

  return {
    deck: state.decks[title]
  }
};

export default connect(mapStateToProps)(QuizStart);

import { StyleSheet } from 'react-native'
import {
  gray,
  white,
  red,
  green,
  black
 } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,

  },
  component: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  copy: {
    color: gray,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subCopy: {
    color: gray,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  listDeck: {
    borderColor: black,
    borderBottomWidth: 2,
    paddingBottom: 40,
    paddingTop: 40
  },
  btn: {
    borderColor: black,
    borderRadius: 7,
    borderWidth: 1,
    marginTop: 20,
    paddingBottom: 7,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 7,
  },
  btnGray: {
    backgroundColor: gray,
  },
  btnBlack: {
    backgroundColor: black,
  },
  btnWhite: {
    backgroundColor: white,
  },
  btnRed: {
    backgroundColor: red
  },
  btnGreen: {
    backgroundColor: green
  },
  txtWhite: {
    color: white
  },
  txtBlack: {
    color: black
  },
  input: {
    height: 40,
    borderColor: gray,
    borderRadius: 7,
    borderWidth: 1,
    marginTop: 20,
    width: 300
  },
  flip: {
    color: red
  }
});

export default styles;

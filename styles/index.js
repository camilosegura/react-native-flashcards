import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

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
    color: 'gray',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subCopy: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  listDeck: {
    borderColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 40,
    paddingTop: 40
  },
  btn: {
    borderColor: '#000',
    borderRadius: 7,
    borderWidth: 1,
    marginTop: 20,
    paddingBottom: 7,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 7,
  },
  btnBlack: {
    backgroundColor: 'black',
  },
  btnWhite: {
    backgroundColor: 'white',
  },
  btnRed: {
    backgroundColor: '#C4392A'
  },
  btnGreen: {
    backgroundColor: '#377D22'
  },
  txtWhite: {
    color: 'white'
  },
  txtBlack: {
    color: 'black'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 7,
    borderWidth: 1,
    marginTop: 20,
    width: 300
  },
  flip: {
    color: '#C4392A'
  }
});

export default styles;

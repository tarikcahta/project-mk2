import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // general styles
  textStyle: {
    color: 'white',
  },

  //log in screen
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#201f37',
  },
  headerPosition: {
    // flex: 1,
    width: '80%',
    marginTop: '30%',
    marginBottom: '15%',
  },
  headerTextStyle: {
    fontSize: 30,
  },
  middleContentPosition: {
    flex: 2,
    width: '80%',
  },
  inputContainers: {
    marginBottom: '8%',
  },
  inputStyle: {
    backgroundColor: '#25273e',
    borderColor: '#e63e57',
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 50,
    // textAlign: 'center',
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e63e57',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
  },

  hintTextPosition: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hintText: {
    // textAlign: 'center',
    fontSize: 15,
  },
  footerContentPosition: {
    flex: 1,
    width: '80%',
  },
  signUpStyle: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signUpTextStyle: {
    //
  },
  signUpButtonStyle: {
    color: '#e63e57',
  },

  // Home screen styles
  cardsPositionStyles: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  cardStyle: {
    backgroundColor: '#c3c4ce',
    borderRadius: 35,
    marginVertical: 20,
    width: '95%',
    height: 150,
  },
});

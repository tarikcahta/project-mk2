import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(37,39,62,255)',
  },
  headerPosition: {
    // flex: 1,
    width: '80%',
    marginTop: '30%',
    marginBottom: '15%',
  },
  headerTextStyle: {
    color: 'white',
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
    borderColor: '#ee3a57',
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
    backgroundColor: '#ee3a57',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 18,
  },

  hintTextPosition: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hintText: {
    // textAlign: 'center',
    color: 'white',
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
    color: 'white',
  },
  signUpButtonStyle: {
    color: '#ee3a57',
  },
});

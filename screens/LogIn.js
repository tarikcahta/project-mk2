import {
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SocialLoginScreen from 'react-native-social-login-screen';

import GoogleSVG from '../assets/images/googleLogo.svg';
import FacebookSVG from '../assets/images/facebookLogo.svg';
import TwitterSVG from '../assets/images/twitterLogo.svg';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <View style={styles.headerPosition}>
        <View>
          <Text style={styles.headerTextStyle}>Log In</Text>
        </View>
      </View>
      <View style={styles.middleContentPosition}>
        <View style={styles.inputContainers}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Username"
            placeholderTextColor={'white'}
          />
        </View>
        <View style={styles.inputContainers}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor={'white'}
          />
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContentPosition}>
        <View style={styles.hintTextPosition}>
          <Text style={styles.hintText}>Or Sign in with </Text>
        </View>
        <View style={styles.socialMediaBtns}>
          <View>
            <TouchableOpacity>
              <GoogleSVG height={24} width={24} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <FacebookSVG height={24} width={24} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <TwitterSVG height={24} width={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signUpStyle}>
          <Text style={styles.signUpTextStyle}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpButtonStyle}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  socialMediaBtns: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
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

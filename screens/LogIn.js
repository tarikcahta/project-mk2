import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles/styles';
import LogInInput from '../components/LogInInput';
import SocialMediaBtns from '../components/SocialMediaBtns';
import SocialLoginScreen from 'react-native-social-login-screen';

export const LogIn = ({ navigation }) => {
  const handleLogIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerPosition}>
        <View>
          <Text style={[styles.headerTextStyle, styles.textStyle]}>Log In</Text>
        </View>
      </View>
      <View style={styles.middleContentPosition}>
        <LogInInput placeholder="Username" />
        <LogInInput placeholder="Password" />

        <TouchableOpacity onPress={handleLogIn} style={styles.buttonStyle}>
          <Text style={[styles.buttonTextStyle, styles.textStyle]}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContentPosition}>
        <View style={styles.hintTextPosition}>
          <Text style={[styles.hintText, styles.textStyle]}>
            Or Sign in with{' '}
          </Text>
        </View>
        <SocialMediaBtns />
        <View style={styles.signUpStyle}>
          <Text style={[styles.signUpTextStyle, styles.textStyle]}>
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text style={styles.signUpButtonStyle}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

import { View, TouchableOpacity, StyleSheet } from 'react-native';

import GoogleSVG from '../assets/images/googleLogo.svg';
import FacebookSVG from '../assets/images/facebookLogo.svg';
import TwitterSVG from '../assets/images/twitterLogo.svg';

export default function SocialMediaBtns() {
  return (
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
  );
}

const styles = StyleSheet.create({
  socialMediaBtns: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

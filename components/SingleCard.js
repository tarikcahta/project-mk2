import { View, Text } from 'react-native';
import { stylesComponents } from './styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

export const SingleCard = () => {
  return (
    <View style={stylesComponents.cardStyle}>
      <LinearGradient
        colors={['#c5f7d1', '#dffbca', '#f0f7dc']}
        style={stylesComponents.gradient}
      >
        <View styles={{ flexDirection: 'row', width: '100%' }}>
          <View>
            <Text style={stylesComponents.tempStyle}>17 °</Text>
          </View>
          <View>
            {/* <Text style={stylesComponents.decimalTempStyle}>.0</Text> */}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

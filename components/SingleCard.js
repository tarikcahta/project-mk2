import { View, Text, Image } from 'react-native';
import { stylesComponents } from './styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThermostatIcon from '../assets/images/thermostatIcon.png';

export const SingleCard = ({ value }) => {
  const [integer, decimal] = value.toString().split('.');
  return (
    <View style={stylesComponents.cardStyle}>
      <LinearGradient
        colors={['#c5f7d1', '#dffbca', '#f0f7dc']}
        style={stylesComponents.gradient}
      >
        <View style={stylesComponents.tempStyles}>
          <View style={stylesComponents.container}>
            <Text style={stylesComponents.integer}>{integer}</Text>
            <View style={stylesComponents.decimalContainer}>
              <Text style={stylesComponents.decimal}>.{decimal}</Text>
              <Text style={stylesComponents.degree}>°</Text>
            </View>
          </View>
          <View style={stylesComponents.homeTempContainer}>
            <Icon name="home" size={30} color="#020" />
            <Text style={stylesComponents.homeTempStyle}>
              {integer}.{decimal}°
            </Text>
          </View>
        </View>
        <View>
          <Image source={ThermostatIcon} style={stylesComponents.thermoIcon} />
        </View>
      </LinearGradient>
    </View>
  );
};

import { View, Text } from 'react-native';
import { stylesComponents } from './styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

export const SingleCard = ({ value }) => {
  const [integer, decimal] = value.toString().split('.');
  return (
    <View style={stylesComponents.cardStyle}>
      <LinearGradient
        colors={['#c5f7d1', '#dffbca', '#f0f7dc']}
        style={stylesComponents.gradient}
      >
        <View style={stylesComponents.container}>
          <Text style={stylesComponents.integer}>{integer}</Text>
          <View style={stylesComponents.decimalContainer}>
            <Text style={stylesComponents.decimal}>.{decimal}</Text>
            <Text style={stylesComponents.degree}>°</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

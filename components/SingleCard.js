import { View, Text } from 'react-native';
import { styles } from './styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

export const SingleCard = () => {
  return (
    <View style={styles.cardStyle}>
      <LinearGradient
        colors={['#c5f7d1', '#dffbca', '#f0f7dc']}
        style={styles.gradient}
      >
        <View styles={{ flexDirection: 'row', width: '100%' }}>
          <View>
            <Text style={styles.tempStyle}>17 °</Text>
          </View>
          <View>
            {/* <Text style={styles.decimalTempStyle}>.0</Text> */}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

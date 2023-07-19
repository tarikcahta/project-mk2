import { Text, View } from 'react-native';
import { styles } from './styles/styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>
      <View style={styles.cardsPositionStyles}>
        <View style={styles.cardStyle}>
          <Text style={{ marginLeft: 20, marginTop: 20 }}>Howdy</Text>
        </View>
      </View>
    </View>
  );
};

import { Text, View } from 'react-native';
import { styles } from './styles/styles';

import { SingleCard } from '../components/SingleCard';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.homeScreenHeaderStyle}>Home</Text>
      </View>
      <View style={styles.cardsPositionStyles}>
        <SingleCard value={18.2} />
      </View>
    </View>
  );
}

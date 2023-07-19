import { View, TextInput, StyleSheet } from 'react-native';

export default function LogInInput({ placeholder }) {
  return (
    <View style={styles.inputContainers}>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor={'#c3c4ce'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

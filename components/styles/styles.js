import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const integerFontSize = width * 0.2;
const decimalFontSize = integerFontSize * 0.25;
const unitFontSize = integerFontSize * 0.5;
const degreeTop = -integerFontSize * 0.02;

export const stylesComponents = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#c3c4ce',
    borderRadius: 35,
    marginVertical: 25,
    width: '95%',
    height: 150,
  },
  gradient: {
    flex: 1,
    borderRadius: 35,
  },
  // temperature card styles
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    marginLeft: 40,
  },
  integer: {
    fontSize: integerFontSize,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  decimalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
    marginTop: '45%',
  },
  decimal: {
    fontSize: decimalFontSize,
    lineHeight: integerFontSize,
  },
  degree: {
    fontSize: decimalFontSize,
    position: 'absolute',
    top: degreeTop,
    paddingBottom: 10,
  },
  unit: {
    fontSize: unitFontSize,
    marginLeft: 5,
  },
});

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const integerFontSize = width * 0.2;
const decimalFontSize = integerFontSize * 0.25;
const unitFontSize = integerFontSize * 0.5;
const degreeTop = -integerFontSize * 0.02;

export const stylesComponents = StyleSheet.create({
  cardStyle: {
    flexDirection: 'column',
    backgroundColor: '#c3c4ce',
    borderRadius: 35,
    marginVertical: 25,
    width: '95%',
    height: 200,
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  tempStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    // borderStyle: 'dotted',
    // borderWidth: 1,
  },
  // temperature card styles
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    marginLeft: 40,
    // borderStyle: 'dashed',
    // borderWidth: 1,
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
  homeTempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    // borderStyle: 'dashed',
    // borderWidth: 1,

  },
  homeTempStyle: {
    fontSize: integerFontSize * 0.25,
    marginLeft: 5,
  },
  thermoIcon: {
    height: 150,
    width: 175,
    tintColor: 'black',
  },
});

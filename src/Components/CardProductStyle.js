import {Dimensions, StyleSheet} from 'react-native';

const solution = Dimensions.get('window');
const widthDevice = solution.width;
const heightDevice = solution.height;
const CardProductStyle = StyleSheet.create({
  backgroundColorFlatList: {
    backgroundColor: 'rgba(213, 205, 205, 1)',
  },
  eachProduct: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    // flexWrap:'wrap',
    // alignItems: 'stretch',
    // // flexWrap: 'wrap',
    // marginBottom: 10,
    width: widthDevice / 2.09,
    height: heightDevice / 3,
    // marginRight: 10,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  descriptionStyle:{
    fontSize:13
  },
  directionOfBottomInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },

  directionOfBottomViewOfProduct: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  priceTextStyle: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});

export default CardProductStyle;

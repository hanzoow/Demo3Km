import {StyleSheet} from 'react-native';

const ListProduct3kmStyle = StyleSheet.create({
  headerFinder: {
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  directionForFlatList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  styleForSearchbar: {
    paddingLeft: 30,
    zIndex: 1,
    flexWrap: 'wrap',
  },
  headerDirection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#F05C61',
    width:'100%'
  },
  footer:{
    width:'100%',
    height:80
  }
});


export default ListProduct3kmStyle;
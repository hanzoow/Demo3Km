import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
// import {Image} from 'react-native-elements';

import {ScrollView} from 'react-native-gesture-handler';
import CardProductStyle from './CardProductStyle';
const imagesData = [];

const deviceWidth = Dimensions.get('window').width;
export default class CardProductComponents extends React.PureComponent {
  constructor(props) {
    super(props);
    try {
      this.image = props.images[0].medium.image_url;
    } catch (e) {
      this.image =
        'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg';
    }

    // console.log(widthDevice)
  }
 
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    const solution = Dimensions.get('window');
    const widthDevice = solution.width;
    const heightDevice = solution.height;
    // let _id = this.props._id;
    let object = this.props;
    //console.log(object);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ProductDetailComponent', {object});
            // this.props.onPress();
            //console.log(object);
            // this.props.navigation.navigate('ProductDetailComponent', {_image});
            // this.props.navigation.navigate('ProductDetailComponent', {_id});
            // this.props.navigation.navigate('ProductDetailComponent', {_id});
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[CardProductStyle.backgroundColorFlatList]}>
              <View style={CardProductStyle.eachProduct}>
                <View>
                  <Image
                    style={{
                      height: heightDevice / 4.6,
                      width: '100%',
                      paddingTop: 20,
                    }}
                    source={{uri: this.image}}
                  />
                </View>
                <View style={CardProductStyle.directionOfBottomInfo}>
                  <Text style={CardProductStyle.descriptionStyle}>
                    {this.props.name}
                  </Text>
                  <View style={CardProductStyle.directionOfBottomViewOfProduct}>
                    <Text style={CardProductStyle.priceTextStyle}>
                      {this.props.price}đ
                    </Text>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        alignItems: 'flex-end',
                      }}
                      source={require('../../assets/heart.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </View>
    );
  }
}

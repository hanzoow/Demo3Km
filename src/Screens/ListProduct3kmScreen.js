import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  Image,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import CardProductComponents from '../../src/Components/CardProductComponents';
import ProductDetailComponent from '../Components/ProductDetailComponent';
import ListProduct3kmStyle, {
  ListProduct3kmStyle as Styles,
} from './ListProduct3kmStyle';
// import {Image} from 'react-native-elements';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

class ListProduct3KmScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.page = 1;
    this.state = {
      search: '',
      productList: [],
      // isLoading: true,
      loading: false,
      isRefreshing: false,
      error: '',
    };
  }

  handleLoadMore = () => {
    console.log('go load more');
    this.setState({loading: true});
    if (!this.state.loading) {
      // this.page = this.page + 1; // increase page by 1
      this.fetchProduct(); // method for API call
    }
  };
  updateSearch = search => {
    this.setState({search});
  };
  // UNSAFE_componentWillMount() {
  //   this.fetchProduct();
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.isUpdated == this.props.isUpdated) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  fetchProduct() {
    axios
      .get(`http://api-qa2.3km.vn/api/products`)
      .then(res => {
        let listData = this.state.productList;
        let data = listData.concat(res.data.data); //concat list with response
        this.setState({productList: data, loading: false});
      })
      .catch(error =>
        this.setState({loading: false, error: 'Something just went wrong'}),
      );
  }
  componentDidUpdate() {
    console.log('go did update');
  }

  componentDidMount() {
    console.log('go did mount');
    setTimeout(() => {
      this.fetchProduct();
    }, 3000);
  }
  onRefresh() {
    this.setState({isRefreshing: true}); // true isRefreshing flag for enable pull to refresh indicator
    const url = `http://api-qa2.3km.vn/api/products`;
    axios
      .get(url)
      .then(res => {
        const products = res.data.data;
        // this.setState(...this.state.productList, products);

        this.setState({
          productList: [...this.state.productList, products],
          isRefreshing: true,
        });
      })
      .catch(error => {
        this.setState({
          isRefreshing: false,
          error: 'Something just went wrong',
        }); // false isRefreshing flag for disable pull to refresh
      });
  }
  static navigationOptions = {
    headerShown: false,
  };
  renderItem(data) {
    return (
      <View>
        <View style={{backgroundColor: 'black', height: 100}}></View>
        <CardProductComponents {...data.item} />
      </View>
    );
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    //if (!this.state.loading) return null;
    return (
      <View style={ListProduct3kmStyle.footer}>
        <ActivityIndicator size="small" style={{color: '#000'}} />
      </View>
    );
  };
  render() {
    const solution = Dimensions.get('window');
    const widthDevice = solution.width;
    const heightDevice = solution.height;
    const {search} = this.state;

    const {productList, loading} = this.state;
    const {navigation} = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={ListProduct3kmStyle.headerDirection}>
          <View style={ListProduct3kmStyle.headerBarContainer}>
            <Image
              source={require('../../assets/3km.png')}
              style={{
                alignSelf: 'center',
                height: 30,
                width: 30,
                borderRadius: 20,
                overflow: 'hidden',
                marginLeft: 15,
              }}
            />
            <View style={ListProduct3kmStyle.styleForSearchbar}>
              <SearchBar
                inputContainerStyle={{
                  marginTop: 0,
                  backgroundColor: '#F48D8E',
                  alignItems: 'center',
                  height: heightDevice / 16,
                }}
                lightTheme
                platform="ios"
                placeholder="Bạn tìm gì hôm nay ?"
                placeholderTextColor="white"
                containerStyle={{
                  backgroundColor: '#F05C61',
                  width: 300,
                  height: 60,
                  marginBottom: 5,
                  alignItems: 'center',
                }}
                style={{fontSize: 1, elevation: 0}}
                cancelButtonProps={{
                  color: 'white',
                }}
              />
            </View>
          </View>
        </View>
        <View style={ListProduct3kmStyle.headerFinder}>
          <View>
            <Text>20km từ</Text>
            {/* <Dropdown
                label="Test"
                containerStyle={LocalCss.dropdownStyle}
                rippleCentered={true}
                inputContainerStyle={{borderBottomColor: 'transparent'}}
              /> */}
          </View>
          <View>
            <Text>Sắp xếp theo</Text>
            {/* <Dropdown
                label="Test"
                containerStyle={LocalCss.dropdownStyle}
                overlayStyle={LocalCss.overlayStyleFinder}
                inputContainerStyle={{borderBottomColor: 'transparent'}}
                rippleCentered={true}
              /> */}
          </View>
        </View>
        <FlatList
          extraData={this.state}
          refreshControl={
            <RefreshControl
              refreshing={this.setState.isRefreshing}
              onRefresh={this.onRefresh}
            />
          }
          style={ListProduct3kmStyle.directionForFlatList}
          numColumns={2}
          data={productList}
          renderItem={data => (
            <CardProductComponents {...data.item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore}
          // disableVirtualization
          maxToRenderPerBatch={15}
          removeClippedSubviews={true}
          initialNumToRender={10}
          windowSize={15}
          // getItemLayout={getItemLayout}
        />
      </View>
    );
  }
}
const getItemLayout = (data, index) => ({
  length: 200,
  offset: 200 * index,
  index,
});
const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    height: 40,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
  },
});
export default ListProduct3KmScreen;

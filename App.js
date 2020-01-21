import {AppRegister} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ListProduct3KmScreen from './src/Screens/ListProduct3kmScreen';
import CardProductComponents from './src/Components/CardProductComponents';
import ProductDetailComponent from './src/Components/ProductDetailComponent';
import TestScreen from './src/Screens/test.screen';
import MakeDecisionDialog from './src/Components/MakeDecisionDialogComponents'
const navigator = createStackNavigator(
  {
    CardProductComponents: CardProductComponents,
    Home: ListProduct3KmScreen,
    ProductDetailComponent: ProductDetailComponent,
    Test: TestScreen,
    MakeDecisionDialog: MakeDecisionDialog,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Demo Reddit',
    },
  },
);

export default createAppContainer(navigator);

import React, {useReducer} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import MakeDecisionDialog from '../Components/MakeDecisionDialogComponents';
import ShowPopupScreen from '../Components/Popup';
const TestScreen = props => {
  console.log(props);
		return (
      <View>
        <Button
          title="Open"
          onPress={()=>{
            <ShowPopupScreen
              state={true}
            />
          }}
        />
      </View>
		);
}

export default TestScreen;

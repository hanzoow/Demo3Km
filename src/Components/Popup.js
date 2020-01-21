import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Dialog from 'react-native-dialog';
import * as LANGUAGE from './Language';
import {CheckBox, Button} from 'react-native-elements';
import {PopupStyle as Styles} from './PopupBookingStyle';

// const DismissKeyboard = ({children}) => (
//   <TouchableWithoutFeedback
//     onPress={() => {
//       Keyboard.dismiss();
//     }}>
//     {children}
//   </TouchableWithoutFeedback>
// );

export class ShowPopupScreen extends Component {
  constructor(props){
    super(props);
     state = {
       dialogVisible: false,
     };
     console.log("aaaa");
  }
 

  showDialog = () => {
    this.setState({dialogVisible: true});
  };

  handleCancel = () => {
    this.setState({dialogVisible: false});
  };
  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({dialogVisible: false});
  };

  render() {
    return (
      <View>
        <Button
          title={LANGUAGE.MakeAReservationPopup.ButtonShowPopupMakeAReservation}
          onPress={this.showDialog}
        />
          <Dialog.Container visible={this.state.dialogVisible}>
            <View style={Styles.closeIcon}>
              <TouchableOpacity
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                onPress={() => {
                  this.handleCancel();
                }}>
                <Image
                  style={{height: 22, width: 22}}
                  source={require('../image/cross.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.rootContainer}>
              <View style={Styles.popupContainer}>
                <Text style={Styles.titlePopup}>
                  {LANGUAGE.MakeAReservationPopup.MakeAReservationTitle}
                </Text>
                <View style={Styles.textInputContainerStyle}>
                  <TextInput
                    style={Styles.roomNumberStyle}
                    placeholder={
                      LANGUAGE.MakeAReservationPopup.MakeAReservationRoomNumber
                    }
                    textStyle={Styles.textStyleInput}
                  />

                  <TextInput
                    style={Styles.nameStyle}
                    placeholder={
                      LANGUAGE.MakeAReservationPopup.MakeAReservationName
                    }
                    textStyle={Styles.textStyleInput}
                  />
                </View>
                  <CheckBox
                    containerStyle={Styles.checkBoxContainer}
                    title={
                      LANGUAGE.MakeAReservationPopup.MakeAReservationCheckBox
                    }
                    checked={this.state.checked}
                    textStyle={Styles.textStyleCheckBox}
                  />
                  <Button
                    containerStyle={Styles.buttonSubmitContainerStyle}
                    buttonStyle={Styles.buttonSubmitStyle}
                    title={
                      LANGUAGE.MakeAReservationPopup
                        .MakeAReservationSubmitButton
                    }
                    titleStyle={Styles.titleSubmitButtonStyle}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      this.handleCancel();
                    }}>
                    <Text style={Styles.cancelTextStyle}>
                      {
                        LANGUAGE.MakeAReservationPopup
                          .MakeAReservationButtonCloseDialog
                      }
                    </Text>
                  </TouchableOpacity>
              </View>
            </View>
          </Dialog.Container>
      </View>
    );
  }
}

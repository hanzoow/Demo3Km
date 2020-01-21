import {StyleSheet, Dimensions} from 'react-native';

const marginScreen = 40;
const resolution = Dimensions.get('screen');
const widthScreen = resolution.width - marginScreen;
const heightScreen = resolution.height;
export const PopupStyle = StyleSheet.create({
         rootContainer: {
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'space-evenly',
           flexWrap: 'wrap',
         },

         popupContainer: {
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           marginLeft: 20,
           marginRight: 20,
           alignSelf: 'baseline',
           flexWrap: 'wrap',
           flex: 0.97,
         },
         titlePopup: {
           fontSize: 35,
           marginTop: 25,
         },
         closeIcon: {
           position: 'absolute',
           alignSelf: 'flex-end',
           paddingTop: 30,
           paddingRight: 26,
         },
         textStyleInput: {
           fontSize: 16,
           fontWeight: '600',
           flexWrap: 'wrap',
           flex: 1,
           flexGrow: 1,
         },
         textInputContainerStyle: {
           alignSelf: 'flex-start',
           alignSelf: 'stretch',
           marginTop: 20,
         },
         roomNumberStyle: {
           borderWidth: 2,
           marginTop: 10,
           borderRadius: 4,
           paddingLeft: 20,
           borderColor: '#ccccc2',
           alignSelf: 'stretch',
           paddingHorizontal: 10,
           marginRight: 3,
           fontSize: 20,
           fontWeight: 'bold',
           color: '#e9ebee',
           height: heightScreen / 11,
         },

         nameStyle: {
           borderWidth: 2,
           borderRadius: 4,
           paddingLeft: 20,
           borderColor: '#ccccc2',
           alignSelf: 'stretch',
           paddingHorizontal: 10,
           marginRight: 3,
           fontWeight: 'bold',
           color: '#e9ebee',
           fontSize: 20,
           marginTop: 25,
           height: heightScreen / 11,
         },
         bottomViewContainer: {
           alignSelf: 'flex-start',
           alignSelf: 'stretch',
           marginBottom: 130,
         },
         checkBoxContainer: {
           backgroundColor: 'white',
           borderColor: 'white',
           alignContent: 'center',
           display: 'flex',
           alignSelf: 'center',
           marginTop: 20,
           // marginBottom: 5,
         },
         textStyleCheckBox: {
           fontWeight: 'normal',
         },
         buttonSubmitStyle: {
           backgroundColor: '#0099ff',
           height: 60,
           width: '100%',
           marginTop: 40,
         },
         buttonSubmitContainerStyle: {
           flexWrap: 'wrap',
           justifyContent: 'center',
           flexDirection: 'row',
           paddingRight: 30,
           paddingLeft: 30,
           borderRadius: 6,
           // marginTop: 30,
         },
         titleSubmitButtonStyle: {
           alignSelf: 'center',
         },
         cancelTextStyle: {
           marginTop: 60,
           color: '#ccccc2',
           fontWeight: 'bold',
           fontSize: 15,
           alignSelf: 'center',
         },
       });

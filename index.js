/**
 * @format
 */
import CodePush from 'react-native-code-push';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  App: CodePush.InstallMode.ON_NEXT_RESUME,
};

AppRegistry.registerComponent(appName, () => CodePush(codePushOptions)(App));

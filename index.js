/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Login, Welcome} from './src/screeens'

AppRegistry.registerComponent(appName, () => Login);

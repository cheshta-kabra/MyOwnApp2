import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppStackNavigator } from './components/AppStackNavigator';
import WelcomeScreen from './screens/welcomescreen';



export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppStackNavigator:{screen:AppStackNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

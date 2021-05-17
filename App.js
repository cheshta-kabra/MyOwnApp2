import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppStackNavigator } from './components/AppStackNavigator';
import WelcomeScreen from './screens/welcomescreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import OrderRequestScreen from './screens/OrderRequestScreen';
import contactScreen from './screens/contactScreen'
import SettingScreen from './screens/SettingScreen';
import { Image } from 'react-native';


export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  OrderRequestScreen:{screen:OrderRequestScreen,
  navigationOptions : {
    tabBarIcon:<Image source={require('./assets/product.jpg')} style={{width:30,height:30}} />,
    tabBarLabel:'Request Product'
  }},
  contactScreen:{screen:contactScreen,
    navigationOptions : {
      tabBarIcon:<Image source={require('./assets/about.png')} style={{width:30,height:30}} />,
      tabBarLabel:'Contact Us'
    }},
  SettingScreen:{screen:SettingScreen ,
    navigationOptions : {
      tabBarIcon:<Image source={require('./assets/setting.jpg')} style={{width:30,height:30}} />,
      tabBarLabel:'Settings'}
    }
})
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppTabNavigator:{screen:TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

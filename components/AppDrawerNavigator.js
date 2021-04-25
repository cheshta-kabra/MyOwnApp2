import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedOrdersScreen from '../screens/MyReceivedOrdersScreen'; 

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },
  MyReceivedOrders :{
    screen: MyReceivedOrdersScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "My Received Orders"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  },
  ProductRequest :{
    screen: ProductRequestScreen,
    navigationOptions:{
      drawerIcon : <Icon name="list" type ="fontawesome5" />,
      drawerLabel : "Product Request"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

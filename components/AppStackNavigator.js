import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import OrderRequestScreen from '../screens/OrderRequestScreen';
import cartScreen  from '../screens/cartScreen';




export const AppStackNavigator = createStackNavigator({
  OrderRequestList : {
    screen : OrderRequestScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  cartScreen : {
    screen : cartScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'OrderRequestList'
  }
);

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import OrderRequestScreen from '../screens/OrderRequestScreen';





export const AppStackNavigator = createStackNavigator({
  OrderRequestList : {
    screen : OrderRequestScreen,
    navigationOptions:{
      headerShown : false
    }
  },
},
  {
    initialRouteName: 'OrderRequestList'
  }
);

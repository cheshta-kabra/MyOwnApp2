import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

export default class CartScreen extends Component{
  componentDidMount(){
    console.log("CartScreen")
  }
  render(){
    return(
      <View>
        <View>
                <Text>List Of All Products Added To Cart</Text>
              </View>
       
        <TouchableOpacity
        onPress={()=>{this.props.navigation.goBack()}}>
            <Text>Add more Products</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'right'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
  }
})

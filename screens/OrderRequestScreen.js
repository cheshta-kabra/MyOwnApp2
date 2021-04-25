import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class OrderRequestScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedProductsList : []
    }
  this.requestRef= null
  }

  getRequestedProductsList =()=>{
    this.requestRef = db.collection("products")
    .onSnapshot((snapshot)=>{
      var requestedProductsList = snapshot.docs.map(document => document.data());
      this.setState({
        requestedProductsList : requestedProductsList
      });
    })
  }

  componentDidMount(){
    this.getRequestedProductsList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.ProductName}
        subtitle={item.ProductPrice}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
          <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("working")
            this.props.navigation.navigate("cartScreen", {
              details: item,
            });
          }}
        >
          <Text style={{ color: "#ffff" }}>Add to cart</Text>
        </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Request Products"/>
        <View style={{flex:1}}>
          {
            this.state.requestedProductsList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Products</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestedProductsList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})

import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import { Avatar } from "react-native-elements";
import { TextInput } from 'react-native-gesture-handler';
export default class OrderRequestScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedProductsList : [],
      amount:0,
      finalProductsList:[],
      email:firebase.auth().currentUser.email,
      //timestamp: firebase.database.ServerValue.TIMESTAMP
    }
  this.requestRef= null
  }
  getTime(timestamp_){
    //timestamp=new Date().getTime().toString()
    var timestamp_ = new Date(new Date().getTime());

  //timestamp.toString().slice(0,10);
    timestamp_.toString().slice(0,10)
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
  addToDB = ()=>{
    try{
      db.collection("order").add({
        finalorder:this.state.finalProductsList,
        timestamp:this.getTime(timestamp_),
        email_id:this.state.email,
        status:'placed'
      })
    }
    catch(error){
      console.log(error)
    }
    Alert.alert('Products Ordered')
  }
  addProductOrder = (item)=>{
    console.log(item)
    this.setState({
      finalProductsList:[...this.state.finalProductsList,item]
    })
    console.log(this.state.finalProductsList)
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.ProductName}
        subtitle={item.ProductPrice}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        leftElement={
          <Avatar
            rounded
            source={{
              uri: item.ProductImage,
            }}
            size={"large"}
          />
        }
        rightElement={
          <View>
            <TextInput placeholder='Enter the Quantity' onChangeText={(text)=>{this.setState({
         amount:text
       })}} value={this.state.productAmount} style={styles.loginBox} />
            <TouchableOpacity
          style={styles.button}
          onPress={() => {
            item['Quantity']=this.state.amount
            this.addProductOrder(item)
            console.log("working")
          }}
        >
          <Text style={{ color: "#ffff" }}>Add</Text>
        </TouchableOpacity>
          </View>
          
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
        <View>
          <TouchableOpacity
          style={styles.button_}
          onPress={()=>{this.addToDB()}}>
            <Text> ORDER </Text>
            </TouchableOpacity>
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
  },
  loginBox:{
    justifyContent:'center',
    width:150,
    height:40,
    borderWidth:1.5,
    margin:10,
},
button_:{
  width:100,
  height:30,
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  backgroundColor:"#ff5722",
},
})
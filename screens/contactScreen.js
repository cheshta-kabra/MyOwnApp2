import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet,Linking} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import * as WebBrowser from 'expo-web-browser';
import MyHeader from '../components/MyHeader';


export default class ProductUpdateScreen extends React.Component {
    _handleOpenWithLinking = () => {
        Linking.openURL('https://www.facebook.com/pages/%E0%A4%AA%E0%A4%BE%E0%A4%81%E0%A4%9A-%E0%A4%AD%E0%A4%BE%E0%A4%88-%E0%A4%A1%E0%A5%87%E0%A4%AF%E0%A4%B0%E0%A5%80/300888113864498?nr');
      };
    
       _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync('https://www.instagram.com/panchbhaidairy/?hl=en');
      }; 
    render(){
        return(
            <View style={{flex:1}}>
               
                <MyHeader title="Contact Us" /> 
                <View style={styles.subContainer}>            
                <Text style={styles.label}>Name : Mr. Ashish Kabra & Mr. OmPrakesh ji Kabra </Text> 
                <Text style={styles.label}> Contact No. : 9829476124 , 9414352100 </Text> 
                <Text style={styles.label}> Email : dairy.pbdskr@gmail.com </Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                onPress={()=>{this._handleOpenWithLinking()}}>
                  <Image source={require("../assets/Facebook-logo.png")}
                  style={{width:100,height:100,}} />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{this._handleOpenWithWebBrowser()}}>
                  <Image source={require("../assets/Instagram.jpg")}
                  style={{width:100,height:100}} />
                </TouchableOpacity>
                </View>
                </View> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    registerButton: {
        width: "75%",
        height: RFValue(50),
        marginTop: RFValue(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(3),
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        }
    },
    label: {
      fontSize: RFValue(20),
      backgroundColor: "black",
      padding: RFValue(10),
      margin: RFValue(20),
      color:'lime',
    },
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
})
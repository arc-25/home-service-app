import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
  return (
  <View style={{alignItems:"center"}}>
     <Image source={require('./../../../assets/pic2.jpg')}
     style={styles.loginImage}
      />
     <View style={styles.subComponent}>
          <Text style={{fontSize:27, color:Colors.WHITE, textAlign:'center'}}> Let's Find
            <Text style={{fontWeight:'bold'}}> Professional Cleaning and repair </Text> Services
          </Text>
            <Text style={{fontSize:18,color:Colors.WHITE,textAlign:'center',marginTop:20}}>
              Best App to find services near you which deliver you a professional services
            </Text>


            <TouchableOpacity style={styles.button} onPress={()=>console.log("Button Click")}>  
                <Text style={{textAlign:'center',fontSize:17,color:Colors.PRIMARY}}>
                     Let's get started
                </Text>

            </TouchableOpacity>

    </View >
    
  </View>
  )
}
const styles = StyleSheet.create({
    loginImage: {
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15
    },
    subComponent: {
      width:"100%",
      backgroundColor:Colors.PRIMARY,
      height:"70%",
      marginTop:-20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      // justifyContent:"center",
      // alignItems:"center",
      // flexDirection:"row",
      padding:20
    },
    button:{
      padding:20,
      backgroundColor:Colors.WHITE,
      borderRadius:99,
      marginTop:18

        }

})







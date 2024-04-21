import { View, Text,Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    // for creating user profile
    const {user,isLoading}=useUser();
  return user&& (
    //profile section
    <View style={styles.container}>
     <View style={styles.profileMaincontainer}>
      <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}}
        style={styles.userImage}/>
        <View>
            <Text style={{color:Colors.WHITE}}> Welcome,</Text>
            <Text  style={{color:Colors.WHITE,
            fontSize:20,fontFamily:'outfit-bold'
            }}>{user?.fullName}</Text>
        </View>
       
        </View>
      <Entypo name="bookmark" size={24} color="white" />
      </View>
     {/* serach bar section */}
     <View style={styles.searchbarcontainer}>
        <TextInput placeholder='Search'
        style={styles.textInput}/>
        
        <FontAwesome name="search"
        style={styles.searchbtn} 
        size={24} color={Colors.PRIMARY} />
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY

    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
       
        alignItems: 'center',
        gap:10
    },
    profileMaincontainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        justifyContent:'space-between',
       
    },
    textInput:{
        padding:10,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16


    },
    searchbarcontainer:{
   
    marginTop:10,
    display:'flex',
    flexDirection: 'row',
    gap:10,
    marginBottom:10,
   
    },
    
    searchbtn:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8
    },


    userImage:{
        width:45,
        height:45,
        borderRadius:99,
        borderWidth:1,
        borderColor:'#000000'
    }
})
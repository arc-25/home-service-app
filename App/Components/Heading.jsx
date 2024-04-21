import { View, Text, StyleSheet, FlatListComponent } from 'react-native'
import React from 'react'

export default function Heading({text,isViewAll=false}) {
  return (
    <View style={styles.container}>
     
     <Text style ={styles.heading}>
        {text}
     </Text>
     {isViewAll?<Text>View All</Text>:null}
    </View>
  )
}

const styles=StyleSheet.create({
    heading:{
        fontsize:20,
        fontfamily:'outfit-medium',
        marginBottom:10
    },
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'

    }
})
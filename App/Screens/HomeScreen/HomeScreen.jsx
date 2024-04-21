import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Catogeries from './Catogeries'

export default function HomeScreen() {
  return (
    <View>
      {/* Header */}
     <Header/>
     <View style ={{padding:20}}>
       {/* slider */}
       <Slider/>
       {/* catogeries */}
       <Catogeries/>
       
     </View>
    
    </View>
  )
}
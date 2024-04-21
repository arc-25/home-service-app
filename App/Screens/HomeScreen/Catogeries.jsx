import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';

export default function Catogeries() {
  const [categories,setCategories] = useState([]);
   useEffect(()=>{
    getCategories();
    
   },[])
  console.log('adi',categories[0].icon)
  //  get category list
  const getCategories=()=>{
    GlobalApi.getCategories().then(resp=>{
      //console.log(resp)


      setCategories(resp?.categories);
    })
  }
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Categories'}/>
      <FlatList
      data={categories}
      renderItem={({item,index})=>{
        console.log("hey",item)
        return(
        <View>
          <View>
            {/* <Image source={{uri:item?.icon}}
            style={{width:0,height:30}}
            /> */}
          </View>
        </View>
      )}}
      />
    </View>
  )
}
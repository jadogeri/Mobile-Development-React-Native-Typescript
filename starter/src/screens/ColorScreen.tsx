import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '../types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ColorProps = NativeStackScreenProps<RootStackParamList, 'Color'>;

const ColorScreen : React.FC<ColorProps> = () => {
  const [colors, setColors] = useState<string[]>([]);
  return (
    <View>
      <Text>ColorScreen</Text>
      <Button title='Add Color' onPress={()=>{setColors([...colors, randomRGB()])   }}
      />
      <FlatList
        data={colors}
        keyExtractor={(color)=>{ return color.toString()}}
        renderItem={({item} : {item: string})=>{
          return (
            <View style={{width: 100, height: 100, backgroundColor: item, marginBottom: 5, marginTop: 5}}><Text>{item}</Text></View>
          )
        }}
     
      />
    </View>
  )
}

const randomRGB = () : string => {

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  let colorString = `rgb(${red}, ${green}, ${blue})`
  console.log(colorString)
  return colorString;
}

export default ColorScreen

const styles = StyleSheet.create({})
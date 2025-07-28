import { StyleSheet, Text, View, Image } from 'react-native'
import { ImageSourcePropType } from 'react-native';
import React from 'react'
import { foods } from '../data/foods';

type ImageProps = {
    title : string;
    imageUrl: string ;
    index: number
}

const ImageDetail : React.FC<ImageProps> = (props) => {
  console.log(props);
  const source: ImageSourcePropType = { uri: props.imageUrl };
  console.log("source == "+ JSON.stringify(source))
  const image = foods[props.index];

  return (
    <View style={{marginBottom:5}}>
        <Image source={image} style={{height:170, width:200}}
        />
      <Text>{props.title}</Text>
    </View>
  )
}

export default ImageDetail


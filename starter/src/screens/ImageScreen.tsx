import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

type ImageProps = NativeStackScreenProps<RootStackParamList, 'Image'>;

const ImageScreen : React.FC<ImageProps> = () => {
  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageDetail title={'Donut'} imageUrl={'../assets/food/donut.png'} index={0} />
      <ImageDetail title={'Muffin'} imageUrl={'../assets/food/muffin.png'} index={2}/>
      <ImageDetail title={'Croissant'} imageUrl={'../assets/food/croissant.png'} index={1}/>

    </View>
  )
}

export default ImageScreen


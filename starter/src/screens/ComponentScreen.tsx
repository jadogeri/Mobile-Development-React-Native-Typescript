import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { styles } from '../styles/global';

type ComponentProps = NativeStackScreenProps<RootStackParamList, 'Component'>;

const ComponentScreen : React.FC<ComponentProps> = () => {
    const myEmotion : string = "Love";
  return (
    <View style={styles.container}>
      <Text>This is component screen</Text>
      <Text>I {myEmotion} mobile development with typescript</Text>
      <Text>Typescript improved my code quality</Text>
    </View>
  )
}

export default ComponentScreen


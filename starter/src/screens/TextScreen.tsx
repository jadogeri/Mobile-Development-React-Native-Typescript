import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

type TextProps = NativeStackScreenProps<RootStackParamList, 'Text'>;

const TextScreen : React.FC<TextProps> = () => {
    const [input, setInput] = useState<string>("");
  return (
    <View>
      <Text>TextScreen</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'      
        autoCorrect={false}
        value={input}
        placeholder='Enter text here'
        onChangeText={(text: string)=>{ setInput(text)}}
      />
      <Text>{input}</Text>
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
    input:{
        margin: 20,
        borderColor: "black",
        borderWidth: 1
    }
})
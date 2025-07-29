import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { RootStackParamList } from '../types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CounterProps = NativeStackScreenProps<RootStackParamList, 'Counter'>;

const CounterScreen : React.FC<CounterProps>= () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrease = () =>{
        setCount(count + 1);
        console.log("count: " + (count + 1));
    }

    const handleDecrease = () =>{
        setCount(count - 1);
        console.log("count: " + (count - 1));
    }
  return (
    <View>
      <Text>CounterScreen</Text>
      <Button
        title='Increase' onPress={()=>{handleIncrease()}}
      />
      <Button
        title='Decrease' onPress={()=>{handleDecrease()}}
      />
      <Text>count = {count}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})
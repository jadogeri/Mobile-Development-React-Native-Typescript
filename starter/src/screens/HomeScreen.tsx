// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, TouchableOpacity, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList'; // Import your RootStackParamList

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View >
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 86, otherParam: 'anything' })}
      />
      <Button
        title="ListScreen" 
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Imagecreen" 
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="CounterScreen" 
        onPress={() => navigation.navigate('Counter')}
      />
      <Pressable
        onPress={() => navigation.navigate('List')}
      ><Text>List</Text></Pressable>
      <TouchableOpacity         
        onPress={() => navigation.navigate('Component')}
      ><Text>ComponentScreen</Text></TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { RootStackParamList } from './src/types/RootStackParamList'; 
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
        <Stack.Screen name="Component" component={ComponentScreen} options={{ title: 'Component' }} />
        <Stack.Screen name="List" component={ListScreen} options={{ title: 'List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
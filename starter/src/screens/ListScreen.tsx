import {Text, View, FlatList } from 'react-native'
import React from 'react'
import {Teacher} from "../entities/Teacher"
import { styles } from '../styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

type ListProps = NativeStackScreenProps<RootStackParamList, 'List'>;

const teacherList : Teacher[] = [
  new Teacher("Ben"),
  new Teacher("Ted"),
  new Teacher("Chris"),
  new Teacher("Matt"),
  new Teacher("James")
];
const ListScreen : React.FC<ListProps>= (props) => {
  return (
    <View style={styles.container}>
      <Text>ListScreen</Text>
      <FlatList 
        data={teacherList}
        keyExtractor={(teacher: Teacher)=>{ return teacher.getName()}}
        renderItem={({item} : {item: Teacher})=>{
          return (
            <Text>{item.getName()}</Text>
          )
        }}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
      
      />
    </View>
  )
}

export default ListScreen


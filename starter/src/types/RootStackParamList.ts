// types.ts
export type RootStackParamList = {
  Home: undefined; // No parameters for the Home screen
  Details: { itemId: number; otherParam: string }; // Parameters for the Details screen
  Component: undefined;
  List:undefined;
  Image: undefined;
  Counter: undefined;
  Color: undefined;
  Text: undefined;
};
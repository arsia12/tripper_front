import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/pages/MainPage/index';


const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
        >
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App;
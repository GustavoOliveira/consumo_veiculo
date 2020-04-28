import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import Result from './src/pages/Result'
import Form from './src/pages/Form'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen 
          name="Form" 
          component={Form}
          options={{
            title : "Informe os Dados",
            headerTitleAlign: "center",
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}
        />

        <Stack.Screen 
          name="Result" 
          component={Result}
          options={{
            title : "Resultado",
            headerTitleAlign: "center",
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}
        />
       </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

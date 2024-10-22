import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationPage from './components/RegistrationPage'; 
import HomePage from './components/HomePage';
 import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        {/* Registration Screen */}
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={{ headerShown: false }} // Hide the default header
        />
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
      </Stack.Navigator>

    </NavigationContainer>
  
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    
  }
});
export default App;

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserRegistration from '../screens/UserRegistration';
import DriverRegistration from '../screens/DriverRegistration';
import VerificationScreen from '../screens/VerificationScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name="UserRegistration" component={UserRegistration} options={{ title: 'User Registration' }} />
      <Stack.Screen name="DriverRegistration" component={DriverRegistration} options={{ title: 'Driver Registration' }} />
      <Stack.Screen name="Verification" component={VerificationScreen} options={{ title: 'Verification' }} />
    </Stack.Navigator>
  );
}
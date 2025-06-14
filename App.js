
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import LiveTVScreen from './screens/LiveTVScreen';
import OnDemandScreen from './screens/OnDemandScreen';
import EPGScreen from './screens/EPGScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LiveTV" component={LiveTVScreen} />
        <Stack.Screen name="OnDemand" component={OnDemandScreen} />
        <Stack.Screen name="EPG" component={EPGScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

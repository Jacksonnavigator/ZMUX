
import React from 'react';
import { View, Button, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>ZMUX Home</Text>
      <Button title="Live TV" onPress={() => navigation.navigate('LiveTV')} />
      <Button title="On-Demand" onPress={() => navigation.navigate('OnDemand')} />
      <Button title="TV Guide" onPress={() => navigation.navigate('EPG')} />
      <Button title="Subscription" onPress={() => navigation.navigate('Subscription')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

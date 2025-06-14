
import React from 'react';
import { View, Text, Button } from 'react-native';
import user from '../data/user.json';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Name: {user.name}</Text>
      <Text>Smart Card: {user.card}</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

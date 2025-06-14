
import React from 'react';
import { View, Text, Button } from 'react-native';
import subscription from '../data/subscription.json';

export default function SubscriptionScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Current Plan: {subscription.plan}</Text>
      <Text>Status: {subscription.status}</Text>
      <Button title="Renew (mock)" onPress={() => alert("Renewed!")}/>
    </View>
  );
}

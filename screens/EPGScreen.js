
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import epg from '../data/epg.json';

export default function EPGScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>TV Guide</Text>
      <FlatList
        data={epg}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.channel}: {item.program} at {item.time}</Text>
        )}
      />
    </View>
  );
}

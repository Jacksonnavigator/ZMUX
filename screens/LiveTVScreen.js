
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import channels from '../data/channels.json';

export default function LiveTVScreen() {
  const [selected, setSelected] = React.useState(null);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {selected ? (
        <VideoPlayer uri={selected.stream} />
      ) : (
        <Text>Select a channel to watch</Text>
      )}
      <FlatList
        data={channels}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelected(item)}>
            <Text style={{ padding: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

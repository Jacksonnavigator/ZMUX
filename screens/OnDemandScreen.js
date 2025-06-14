
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import movies from '../data/movies.json';

export default function OnDemandScreen() {
  const [selected, setSelected] = React.useState(null);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {selected ? (
        <VideoPlayer uri={selected.url} />
      ) : (
        <Text>Select a movie to play</Text>
      )}
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelected(item)}>
            <Text style={{ padding: 10 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

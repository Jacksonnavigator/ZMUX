
import React from 'react';
import { Video } from 'expo-av';
import { View } from 'react-native';

export default function VideoPlayer({ uri }) {
  return (
    <View style={{ height: 200 }}>
      <Video
        source={{ uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        useNativeControls
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
}

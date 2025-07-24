import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListItem({ text }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginVertical: 4 }}>
      <Icon name="check" color="#FFC107" size={16} style={{ marginRight: 8 }} />
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  );
}
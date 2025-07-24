import React from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

export default function ProgressBar({ label, value }) {
  return (
    <View style={{ marginVertical: 6, paddingHorizontal: 16 }}>
      <Text style={{ color: 'white', marginBottom: 4 }}>{label}</Text>
      <Progress.Bar progress={value} width={null} height={8} color="#FFC107" borderColor="#444" borderWidth={3}/>
    </View>
  );
}
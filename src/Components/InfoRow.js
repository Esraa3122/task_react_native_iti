import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoRow({ label, value, valueColor = 'white' }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoLabelBox}>
        <Text style={styles.infoLabelText}>{label}</Text>
      </View>
      <Text style={[styles.infoValueText, { color: valueColor }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  infoLabelBox: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  infoLabelText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  infoValueText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
});
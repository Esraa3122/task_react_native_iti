import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

export default function SocialIcon({ name, url }) {
  return (
    <Pressable
      style={styles.socialIcon}
      onPress={() => Linking.openURL(url)}
    >
      <Icon name={name} size={16} color="#1f1f1f" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  socialIcon: {
    backgroundColor: '#FFC107',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
});


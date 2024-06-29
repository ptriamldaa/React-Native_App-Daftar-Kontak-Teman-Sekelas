import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contact({ gambar, judul, telpon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.telpon}>{telpon}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  telpon: {
    color: '#888',
  },
});
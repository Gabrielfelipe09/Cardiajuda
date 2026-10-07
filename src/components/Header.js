import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>cardiajuda</Text>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Nome</Text>
        <Ionicons name="person-circle" size={32} color="#2D0A2E" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  logo: {
    color: '#2D0A2E',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: -1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  userName: {
    color: '#5A465B',
    fontSize: 15,
    fontWeight: '600',
  },
});

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const menuItems = [
  {
    icon: 'calendar-alt',
    title: 'Cardápio semanal',
    subtitle: 'Dicas de alimentação semanal',
    screen: 'home',
  },
  {
    icon: 'user-md',
    title: 'Histórico de consultas',
    subtitle: 'Visualize suas consultas anteriores',
    screen: 'consultas',
  },
  {
    icon: 'star',
    title: 'Planos e Assinaturas',
    subtitle: 'Gerencie seus planos e assinaturas',
    screen: 'home',
  },
];

export default function MenuList({ onPressItem }) {
  return (
    <View style={styles.container}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.title}
          style={styles.item}
          activeOpacity={0.8}
          onPress={() => onPressItem?.(item)}
        >
          <View style={styles.iconContainer}>
            <FontAwesome5 name={item.icon} size={28} color="#FFFFFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

MenuList.propTypes = {
  onPressItem: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 94,
    paddingHorizontal: 18,
    borderRadius: 24,
    backgroundColor: '#7D0080',
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 5,
    color: 'rgba(255, 255, 255, 0.76)',
    fontSize: 13,
  },
});

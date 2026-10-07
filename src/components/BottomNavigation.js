import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const items = [
  { key: 'inicio', icon: 'home-outline', label: 'Início' },
  { key: 'consulta', icon: 'calendar-outline', label: 'Consulta' },
  { key: 'saude', icon: 'heart-outline', label: 'Saúde' },
  { key: 'medico', icon: 'medical-outline', label: 'Médico' },
];

export default function BottomNavigation({ activeTab = 'inicio', onTabPress }) {
  return (
    <View style={styles.navigation}>
      {items.map((item) => {
        const isActive = activeTab === item.key;

        return (
          <TouchableOpacity
            key={item.label}
            style={styles.item}
            activeOpacity={0.8}
            onPress={() => onTabPress?.(item.key)}
          >
            <Ionicons
              name={item.icon}
              size={24}
              color={isActive ? '#7D0080' : '#2D0A2E'}
            />
            <Text
              style={[
                styles.label,
                isActive && styles.activeLabel,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

BottomNavigation.propTypes = {
  activeTab: PropTypes.string,
  onTabPress: PropTypes.func,
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E7DDE7',
    backgroundColor: '#FFFFFF',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 64,
    paddingVertical: 4,
  },
  label: {
    marginTop: 4,
    color: '#2D0A2E',
    fontSize: 11,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#7D0080',
  },
});

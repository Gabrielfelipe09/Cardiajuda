import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from '../components/ActionButton';
import BottomNavigation from '../components/BottomNavigation';
import Header from '../components/Header';
import MenuList from '../components/MenuList';

export default function HomeScreen({ onGoToConsultas, onSelectTab }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.subtitleTitle}>Paciente</Text>
          </View>

          <View style={styles.gridContainer}>
            <ActionButton
              icon="bell-ring"
              title="Lembretes"
              subtitle="Diários"
              onPress={() => {}}
            />
            <ActionButton
              icon="information-circle"
              title="Informações"
              subtitle="Diárias"
              onPress={() => {}}
            />
          </View>

          <View style={styles.menuContainer}>
            <MenuList
              onPressItem={(item) => {
                if (item.screen === 'consultas') {
                  onGoToConsultas?.();
                }
              }}
            />
          </View>
        </ScrollView>

        <BottomNavigation
          activeTab="inicio"
          onTabPress={(tab) => {
            if (tab === 'consulta') {
              onGoToConsultas?.();
            }

            onSelectTab?.(tab);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {
  onGoToConsultas: PropTypes.func,
  onSelectTab: PropTypes.func,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F2F7',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F2F7',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  titleContainer: {
    marginBottom: 24,
  },
  title: {
    color: '#2D0A2E',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -1,
  },
  subtitleTitle: {
    marginTop: 2,
    color: '#7D0080',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -1,
  },
  gridContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  menuContainer: {
    flex: 1,
  },
});

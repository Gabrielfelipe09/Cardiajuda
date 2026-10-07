import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

const quickCards = [
  {
    id: 'consulta-hoje',
    title: 'Consulta\npara hoje',
    icon: 'calendar-check',
    type: 'primary',
  },
  {
    id: 'historico-pacientes',
    title: 'Histórico de\npacientes',
    icon: 'clipboard-list',
    type: 'secondary',
  },
];

const menuItems = [
  {
    id: 'historico-consultas',
    title: 'Histórico de\nconsultas',
    subtitle: 'Visualize suas últimas consultas\nrealizadas',
    icon: 'history',
    iconType: 'fontAwesome',
  },
  {
    id: 'planos',
    title: 'Planos e\nAssinaturas',
    subtitle: 'Gerencie seus planos e assinaturas',
    icon: 'star',
    iconType: 'fontAwesome',
  },
];

export default function DoctorHomeScreen({ onGoToHome, onGoToConsultas, onSelectTab }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.welcomeTitle}>{`Bem-Vindo\nDoutor(a)`}</Text>

          <View style={styles.topGrid}>
            {quickCards.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={[
                  styles.quickCard,
                  card.type === 'primary' ? styles.primaryCard : styles.secondaryCard,
                ]}
                activeOpacity={0.9}
                onPress={() => {
                  if (card.id === 'consulta-hoje') {
                    onGoToConsultas?.();
                  }
                }}
              >
                <View style={styles.cardIconContainer}>
                  <FontAwesome5
                    name={card.icon}
                    size={22}
                    color="#FFFFFF"
                  />
                </View>
                <Text style={styles.cardTitle}>{card.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.alertBanner} activeOpacity={0.9}>
            <View style={styles.alertLeft}>
              <View style={styles.alertIconContainer}>
                <Ionicons name="alert-circle" size={24} color="#FFFFFF" />
              </View>
              <View>
                <Text style={styles.alertTitle}>{`Alerta do\nPaciente`}</Text>
                <Text style={styles.alertSubtitle}>Veja a situação dos seus pacientes.</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={26} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.menuList}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                activeOpacity={0.9}
                onPress={() => {
                  if (item.id === 'historico-consultas') {
                    onSelectTab?.('historico');
                  }
                }}
              >
                <View style={styles.menuLeft}>
                  <View style={styles.menuIconContainer}>
                    <FontAwesome5 name={item.icon} size={22} color="#FFFFFF" />
                  </View>
                  <View style={styles.menuTextWrap}>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={28} color="#FFFFFF" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <BottomNavigation
          activeTab="inicio"
          onTabPress={(tab) => {
            if (tab === 'inicio') {
              onGoToHome?.();
              return;
            }

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

DoctorHomeScreen.propTypes = {
  onGoToHome: PropTypes.func,
  onGoToConsultas: PropTypes.func,
  onSelectTab: PropTypes.func,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8EAF3',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8EAF3',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 2,
    paddingBottom: 20,
  },
  welcomeTitle: {
    color: '#2D0A2E',
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
    lineHeight: 40,
  },
  topGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  quickCard: {
    flex: 1,
    minHeight: 120,
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'space-between',
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryCard: {
    backgroundColor: '#7D0080',
  },
  secondaryCard: {
    backgroundColor: '#8F3B8F',
  },
  cardIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24,
  },
  alertBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#7D0080',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 18,
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  alertLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  alertIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  alertTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 22,
  },
  alertSubtitle: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 12,
    marginTop: 2,
  },
  menuList: {
    gap: 14,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#7D0080',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuTextWrap: {
    flex: 1,
  },
  menuTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  menuSubtitle: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 12,
    marginTop: 4,
  },
});

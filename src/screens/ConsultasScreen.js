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

export default function ConsultasScreen({ onGoToHome, onGoToHistorico, onSelectTab }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Consultas</Text>

          <View style={styles.summaryCard}>
            <View style={styles.summaryLeft}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="calendar-alt" size={24} color="#7D0080" />
              </View>
              <View style={styles.summaryText}> 
                <Text style={styles.summaryLabel}>Consulta</Text>
                <Text style={styles.summarySubtitle}>Registro de Consulta</Text>
              </View>
            </View>

            <View style={styles.counterBadge}>
              <Text style={styles.counter}>0</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Ações Rápidas</Text>

          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickAction} activeOpacity={0.85}>
              <View style={styles.quickActionIconContainer}>
                <Ionicons name="add-circle-outline" size={26} color="#FFFFFF" />
              </View>
              <Text style={styles.quickActionText}>Nova Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAction}
              activeOpacity={0.85}
              onPress={onGoToHistorico}
            >
              <View style={styles.quickActionIconContainer}>
                <Ionicons name="document-text-outline" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickActionText}>Ver Histórico</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <BottomNavigation
          activeTab="consulta"
          onTabPress={(tab) => {
            if (tab === 'inicio') {
              onGoToHome?.();
              return;
            }

            onSelectTab?.(tab);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

ConsultasScreen.propTypes = {
  onGoToHome: PropTypes.func,
  onGoToHistorico: PropTypes.func,
  onSelectTab: PropTypes.func,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9E7F0',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9E7F0',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 28,
  },
  title: {
    color: '#2D0A2E',
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 20,
    letterSpacing: -1,
  },
  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5DDEB',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 32,
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  summaryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#F2E4F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  summaryText: {
    flex: 1,
  },
  summaryLabel: {
    color: '#2D0A2E',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  summarySubtitle: {
    color: '#5A465B',
    fontSize: 12,
    fontWeight: '500',
  },
  counterBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#7D0080',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  counter: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 28,
  },
  sectionTitle: {
    color: '#7D0080',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 12,
    letterSpacing: -0.8,
  },
  quickActions: {
    gap: 14,
  },
  quickAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7D0080',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 4,
  },
  quickActionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  quickActionText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});

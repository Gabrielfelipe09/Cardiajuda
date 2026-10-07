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
import { FontAwesome5 } from '@expo/vector-icons';

export default function HistoricoScreen({ onBack }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.logoWrap}>
            <Text style={styles.logo}>cardiajuda</Text>
          </View>
          <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={onBack}>
            <FontAwesome5 name="chevron-left" size={26} color="#7D0080" />
          </TouchableOpacity>
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.title}>Histórico</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>Sem consultas e triagens salvas...</Text>
          </View>

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
            <Text style={styles.primaryButtonText}>Nova Triagem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
            <Text style={styles.primaryButtonText}>Nova Consulta</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.backFooterButton} activeOpacity={0.9} onPress={onBack}>
            <Text style={styles.backFooterButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

HistoricoScreen.propTypes = {
  onBack: PropTypes.func,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8EAF3',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8EAF3',
    paddingHorizontal: 18,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 8,
  },
  logoWrap: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    color: '#7D0080',
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: -1.5,
    fontFamily: 'serif',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  titleRow: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#2D0A2E',
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1.3,
    lineHeight: 50,
  },
  content: {
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: 20,
  },
  emptyCard: {
    backgroundColor: '#F4DDE9',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 22,
  },
  emptyText: {
    color: '#5E3A5A',
    fontSize: 17,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#7D0080',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  footer: {
    paddingBottom: 30,
  },
  backFooterButton: {
    backgroundColor: '#7D0080',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7D0080',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 4,
  },
  backFooterButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
});

import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ConsultasScreen from './src/screens/ConsultasScreen';
import DoctorHomeScreen from './src/screens/DoctorHomeScreen';
import HistoricoScreen from './src/screens/HistoricoScreen';

export default function App() {
  const [screen, setScreen] = useState('doctor');
  const [returnScreen, setReturnScreen] = useState('doctor');

  const openHistorico = (fromScreen = 'doctor') => {
    setReturnScreen(fromScreen);
    setScreen('historico');
  };

  if (screen === 'consultas') {
    return (
      <ConsultasScreen
        onGoToHome={() => setScreen('home')}
        onGoToHistorico={() => openHistorico('consultas')}
        onSelectTab={(tab) => {
          if (tab === 'inicio') {
            setScreen('home');
          }

          if (tab === 'medico') {
            setScreen('doctor');
          }

          if (tab === 'historico') {
            openHistorico('consultas');
          }
        }}
      />
    );
  }

  if (screen === 'historico') {
    return <HistoricoScreen onBack={() => setScreen(returnScreen)} />;
  }

  if (screen === 'doctor') {
    return (
      <DoctorHomeScreen
        onGoToHome={() => setScreen('home')}
        onGoToConsultas={() => setScreen('consultas')}
        onSelectTab={(tab) => {
          if (tab === 'inicio') {
            setScreen('home');
          }

          if (tab === 'consulta') {
            setScreen('consultas');
          }

          if (tab === 'historico') {
            openHistorico('doctor');
          }

          if (tab === 'medico') {
            setScreen('doctor');
          }
        }}
      />
    );
  }

  return (
    <HomeScreen
      onGoToConsultas={() => setScreen('consultas')}
      onSelectTab={(tab) => {
        if (tab === 'consulta') {
          setScreen('consultas');
        }

        if (tab === 'historico') {
          openHistorico('home');
        }

        if (tab === 'medico') {
          setScreen('doctor');
        }
      }}
    />
  );
}

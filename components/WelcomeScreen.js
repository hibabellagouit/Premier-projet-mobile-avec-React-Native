import * as React from 'react';
import { ScrollView, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle="white"
      style={{ flex: 1 }}
    >
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          color: '#EDEFEE',
          textAlign: 'center',
        }}
      >
        Bienvenue dans l’application Mobile Academy.
        Ce texte d’accueil est volontairement long pour tester le défilement.
        Ajoute des phrases supplémentaires pour simuler un vrai texte de présentation,
        des consignes d’utilisation et quelques informations sur l’objectif
        du module ou de l’application.
        Plus le texte est long, plus l’effet de défilement sera visible
        sur l’émulateur ou l’appareil réel.
      </Text>
    </ScrollView>
  );
}
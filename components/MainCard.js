// WelcomeScreen.js
import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          color: '#EDEFEE',
          textAlign: 'center',
        }}
      >
        Bienvenue dans l’application Mobile Academy.
        Ce texte d’accueil est assez long, avec une grande taille de police,
        et ne tient pas entièrement sur un seul écran.
        L’utilisateur doit pouvoir faire défiler pour lire l’intégralité du message.
      </Text>
    </View>
  );
}
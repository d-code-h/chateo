import { Slot } from 'expo-router';
import {
  Mulish_700Bold,
  Mulish_600SemiBold,
  Mulish_400Regular,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import './global.css';

export default function RootLayout() {
  const [loaded] = useFonts({
    Mulish: Mulish_400Regular,
    'Mulish-SemiBold': Mulish_600SemiBold,
    'Mulish-Bold': Mulish_700Bold,
  });

  if (!loaded) return null;

  return (
    <>
      <Slot />

      {/* Set the status bar color */}
      <StatusBar style="dark" />
    </>
  );
}

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VerificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Your documents are being verified. Please wait.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
  },
});
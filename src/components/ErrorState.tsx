import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button } from 'react-native-paper';

type ErrorStateProps = {
  message?: string;
  onRetry: () => void;
};

export const ErrorState = ({ message = 'Something went wrong.', onRetry }: ErrorStateProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onRetry} mode="contained">
        Try again
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: 'red',
  },
});

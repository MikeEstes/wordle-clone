import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Stage from './src/screens/Stage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stage />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import KeyboardKey from './KeyboardKey';

const KeyboardRow = ({ letters, onKeyPress }) => {
  return (
    <View style={styles.container}>
      {letters.map(letter => (
        <KeyboardKey letter={letter} onKeyPress={onKeyPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default KeyboardRow;

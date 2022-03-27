import React from 'react';
import { StyleSheet, View } from 'react-native';

import KeyboardRow from './KeyboardRow';
import KeyboardKey from './KeyboardKey';

const Keyboard = ({ onKeyPress }) => {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'];

  return (
    // TODO: Keys should also change colors when guessed.
    <View style={styles.container}>
      <KeyboardRow letters={row1} onKeyPress={onKeyPress} />
      <KeyboardRow letters={row2} onKeyPress={onKeyPress} />
      <KeyboardRow letters={row3} onKeyPress={onKeyPress} />
      <View style={styles.keyboardRow}>
        <KeyboardKey letter="ENTER" onKeyPress={() => onKeyPress('enter')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default Keyboard;

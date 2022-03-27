import React from 'react';
import { StyleSheet, View } from 'react-native';

import LetterTile from './LetterTile';

const GuessRow = ({ guess = '', word = '', guessed }) => {
  const letters = guess.toUpperCase().split('');

  return (
    <View style={styles.container}>
      <LetterTile index={0} guess={guess} word={word} guessed={guessed} />
      <LetterTile index={1} guess={guess} word={word} guessed={guessed} />
      <LetterTile index={2} guess={guess} word={word} guessed={guessed} />
      <LetterTile index={3} guess={guess} word={word} guessed={guessed} />
      <LetterTile index={4} guess={guess} word={word} guessed={guessed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default GuessRow;

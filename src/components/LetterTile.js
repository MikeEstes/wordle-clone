import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../styles/colors';

const LetterTile = ({ index, guess = '', word = '', guessed }) => {
  const letter = guess[index];
  const wordLetter = word[index];

  const tileStyles = [styles.tile];
  const textStyles = [styles.letter];

  if (letter === wordLetter && guessed) {
    tileStyles.push(styles.correctTile);
    textStyles.push(styles.guessedLetter);
  } else if (word.includes(letter) && guessed) {
    tileStyles.push(styles.inWordTile);
    textStyles.push(styles.guessedLetter);
  } else if (guessed) {
    tileStyles.push(styles.notInWordTile);
    textStyles.push(styles.guessedLetter);
  }

  return (
    <View style={tileStyles}>
      <Text style={textStyles}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    borderColor: Colors.borderDefault,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  letter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textDefault,
  },
  guessedLetter: {
    color: Colors.textGuessed,
  },
  correctTile: {
    backgroundColor: Colors.backgroundCorrect,
    borderColor: Colors.borderCorrect,
  },
  inWordTile: {
    backgroundColor: Colors.backgroundInWord,
    borderColor: Colors.borderInWord,
  },
  notInWordTile: {
    backgroundColor: Colors.backgroundIncorrect,
    borderColor: Colors.borderIncorrect,
  },
});

export default LetterTile;

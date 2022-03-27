import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import GuessRow from '../components/GuessRow';
import Keyboard from '../components/Keyboard';
import Words from '../constants/words';

const defaultGuess = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
};

const Stage = () => {
  const [activeWord, setActiveWord] = useState(
    Words[Math.floor(Math.random() * Words.length)],
  );
  const [guessIndex, setGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState(defaultGuess);
  const [gameComplete, setGameComplete] = useState(false);

  const handleKeyPress = letter => {
    const guess = guesses[guessIndex];

    // Handle Word Submit
    if (letter === 'enter') {
      if (guess.length !== 5) {
        alert('Word too short!');
        return;
      }

      if (!Words.includes(guess)) {
        alert('Not a valid word.');
        return;
      }

      if (guess === activeWord) {
        // TODO: Update with local statistics
        setGuessIndex(guessIndex + 1);
        setGameComplete(true);
        alert('You win!');
        return;
      }

      if (guessIndex < 5) {
        setGuessIndex(guessIndex + 1);
      } else {
        setGameComplete(true);
        alert('You lose!');
      }
    }

    // Handle Delete
    if (letter === '⌫') {
      setGuesses({ ...guesses, [guessIndex]: guess.slice(0, -1) });
      return;
    }

    // Handle Guess
    if (guess.length >= 5) {
      // TODO: Set length to var for longer games.
      return;
    }

    setGuesses({ ...guesses, [guessIndex]: guess + letter });
  };

  useEffect(() => {
    if (!gameComplete) {
      setActiveWord(Words[Math.floor(Math.random() * Words.length)]);
      setGuesses(defaultGuess);
      setGuessIndex(0);
    }
  }, [gameComplete]);

  return (
    <View style={styles.container}>
      <View>
        <GuessRow
          guess={guesses[0]}
          word={activeWord}
          guessed={guessIndex > 0}
        />
        <GuessRow
          guess={guesses[1]}
          word={activeWord}
          guessed={guessIndex > 1}
        />
        <GuessRow
          guess={guesses[2]}
          word={activeWord}
          guessed={guessIndex > 2}
        />
        <GuessRow
          guess={guesses[3]}
          word={activeWord}
          guessed={guessIndex > 3}
        />
        <GuessRow
          guess={guesses[4]}
          word={activeWord}
          guessed={guessIndex > 4}
        />
        <GuessRow
          guess={guesses[5]}
          word={activeWord}
          guessed={guessIndex > 5}
        />
      </View>
      <View>
        {gameComplete ? (
          <View style={styles.gameCompleteWrapper}>
            <Text>
              <Text style={styles.bold}>Correct Word:</Text> {activeWord}
            </Text>
            <View>
              <Button
                title="Reset"
                onPress={() => {
                  setGameComplete(false);
                }}
              />
            </View>
          </View>
        ) : null}
        <Keyboard onKeyPress={handleKeyPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    justifyContent: 'space-between',
    backgroundColor: '#0d1726',
  },
  gameCompleteWrapper: {
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Stage;

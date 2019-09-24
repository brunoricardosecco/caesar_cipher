const word = "Logar na nina";

const LETTER_JUMP = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const vectorAlphabet = alphabet.split("");

decode(encode(word));

function encode(phrase) {
  let cipherWord = "";
  const vectorWord = phrase.toLowerCase().split("");

  for (var i = 0; i < vectorWord.length; i++) {
    if (!/\s/g.test(vectorWord[i])) {
      for (var j = 0; j < vectorAlphabet.length; j++) {
        if (vectorWord[i] == vectorAlphabet[j]) {
          if (j + LETTER_JUMP > vectorAlphabet.length - 1) {
            let nextLap = j + LETTER_JUMP - vectorAlphabet.length;
            cipherWord += vectorAlphabet[nextLap];
          } else {
            cipherWord += vectorAlphabet[j + LETTER_JUMP];
          }
          break;
        }
      }
    } else {
      cipherWord += " ";
    }
  }
  console.log(cipherWord);
  return cipherWord;
}

function decode(phrase) {
  let cipherWord = "";
  const vectorWord = phrase.toLowerCase().split("");

  for (var i = 0; i < vectorWord.length; i++) {
    if (!/\s/g.test(vectorWord[i])) {
      for (var j = 0; j < vectorAlphabet.length; j++) {
        if (vectorWord[i] == vectorAlphabet[j]) {
          if (j - LETTER_JUMP < 0) {
            let nextLap = j - LETTER_JUMP + vectorAlphabet.length;
            cipherWord += vectorAlphabet[nextLap];
          } else {
            cipherWord += vectorAlphabet[j - LETTER_JUMP];
          }
          break;
        }
      }
    } else {
      cipherWord += " ";
    }
  }
  console.log(cipherWord);
}

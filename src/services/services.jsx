export function getRandomNumber(times) {
  const numberArray = [];

  while (numberArray.length < times) {
    const number = Math.floor(Math.random() * (20 - 1) + 1);
    if (!numberArray.includes(number)) {
      numberArray.push(number);
    }
  }
  return numberArray;
}

export function checkScore(score, callbackFn, setCardQuantity) {
  if (score === 3) {
    callbackFn();
    setCardQuantity(6);
  } else if (score === 9) {
    callbackFn();
    setCardQuantity(8);
  } else if (score === 17) {
    callbackFn();
    setCardQuantity(10);
  } else if (score === 27) {
    callbackFn();
    setCardQuantity(12);
  } else if (score === 39) {
    callbackFn();
    setCardQuantity(14);
  } else if (score === 53) {
    callbackFn();
    setCardQuantity(16);
  } else if (score === 69) {
    alert("You win!");
  }
}

export function checkCards(e, usedCards, setUsedCards, score, setScore, bestScore, setBestScore) {
  if (!usedCards.includes(e.target.id)) {
    setUsedCards((card) => [...card, e.target.id]);
    setScore((x) => x + 1);
    if(score >= bestScore) setBestScore(score+1);
  } else {
    alert("You lose");
  }
}

export const randomize = (array,setCardArray) => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledCards = shuffleArray(array);
  setCardArray(shuffledCards);
};
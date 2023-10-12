/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../css/cards.css";
import Tilt from "react-parallax-tilt";
import {
  checkCards,
  checkScore,
  getRandomNumber,
  randomize,
} from "../services/services";

export default function CardComponent({
  cards,
  score,
  setScore,
  bestScore,
  setBestScore,
  incrementPage,
  setIsGameOver,
}) {
  const [usedCards, setUsedCards] = useState([]);
  const [cardQuantity, setCardQuantity] = useState(4);
  const [cardArray, setCardArray] = useState(getRandomNumber(cardQuantity));
  const [gameCards, setGameCards] = useState(null);

  useEffect(() => {
    setCardArray(getRandomNumber(cardQuantity));
  }, [cardQuantity]);

  useEffect(() => {
    const array = [];
    cardArray.map((id) => {
      array.push(cards[id]);
    });
    setGameCards(array);
  }, [cardArray, cards]);

  return (
    <>
      <div className="card-container">
        {gameCards?.map((card) => (
          <Tilt
            key={card.id}
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="20px"
          >
            <div
              id={card?.id}
              key={card?.id}
              className="card"
              style={{ backgroundImage: `url(${card?.image})` }}
              onClick={(e) => {
                checkCards(
                  e,
                  usedCards,
                  setUsedCards,
                  score,
                  setScore,
                  bestScore,
                  setBestScore,
                  setIsGameOver
                );
                checkScore(
                  score,
                  incrementPage,
                  setCardQuantity,
                  setCardArray,
                  setIsGameOver
                );
                randomize(gameCards, setGameCards);
              }}
            >
              <span className="card-name">{card?.name}</span>
            </div>
          </Tilt>
        ))}
      </div>
    </>
  );
}

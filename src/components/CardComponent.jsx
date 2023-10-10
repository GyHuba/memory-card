/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../css/cards.css";
import { checkCards, checkScore, getRandomNumber } from "../services/services";

export default function CardComponent({
  cards,
  score,
  setScore,
  incrementPage,
}) {
  const [usedCards, setUsedCards] = useState([]);
  const [cardQuantity, setCardQuantity] = useState(4);
  const [cardArray, setCardArray] = useState(getRandomNumber(cardQuantity));

  const [gameCards, setGameCards] = useState([]);

  useEffect(()=>{
    setCardArray(getRandomNumber(cardQuantity))
  },[cardQuantity])

  useEffect(() => {
    const array = [];
    cardArray.map((id)=>{
        array.push(cards[id])
    })
      setGameCards(array)
      console.log(array)
  }, [cardArray, cards]);

  return (
    <>
      <div className="card-container">
        { 
         gameCards?.map((card)=>(
          
            <div
            id={card?.id}
            key={card?.id}
            className="card"
            style={{ backgroundImage: `url(${card?.image})` }}
            onClick={(e) => {
              checkCards(e, usedCards, setUsedCards, setScore);
              checkScore(score, incrementPage, setCardQuantity, setCardArray);
              console.log("cardArray:",cardArray, "CardQuantity",cardQuantity, "cardID:", e.target.id);
            }}
          >
            <span className="card-name">{card?.name}</span>
          </div> 
        ))
    }      
    </div>
    </>
  );
}

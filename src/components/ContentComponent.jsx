import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import GameStartComponent from "./GameStartComponent";
import RestartGameComponent from "./RestartGameComponent";

export default function ContentComponent() {
  const [characterData, setCharacterData] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [page, setPage] = useState(1);
  const [isGammeStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  function incrementPage() {
    setPage((page) => page + 1);
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacterData(data.results);
      });
  }, [page]);

  return (
    <>
      {!isGammeStarted && (
        <GameStartComponent setIsGameStarted={setIsGameStarted} />
      )}
      {isGammeStarted && (
        <div className="game-board">
          <div className="title">Rick and Memorty</div>
          <div className="scores">
            <div className="score">Score:{score}</div>
            <div className="best-score">Best Score:{bestScore}</div>
          </div>

          {isGameOver && (
            <RestartGameComponent
              setIsGameOver={setIsGameOver}
              score={score}
              setScore={setScore}
            />
          )}
          {!isGameOver && characterData && (
            <CardComponent
              cards={characterData}
              score={score}
              setScore={setScore}
              bestScore={bestScore}
              setBestScore={setBestScore}
              incrementPage={incrementPage}
              setIsGameOver={setIsGameOver}
            />
          )}
        </div>
      )}
    </>
  );
}

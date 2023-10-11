import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function ContentComponent() {
  const [characterData, setCharacterData] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [page, setPage] = useState(1);

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
      <div className="game-board">
        <div className="scores">
          Score:{score}.... Best Score:{bestScore}
        </div>
        {characterData && (
          <CardComponent
            cards={characterData}
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
            incrementPage={incrementPage}
          />
        )}
      </div>

    </>
  );
}

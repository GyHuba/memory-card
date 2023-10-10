import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function ContentComponent() {
  const [characterData, setCharacterData] = useState(null);
  const [score, setScore] = useState(0);
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
      <h1>CONTENT</h1>
      <div>
        Score:{score}.... Page:{page}
      </div>
      {characterData && (
        <CardComponent
          cards={characterData}
          score={score}
          setScore={setScore}
          incrementPage={incrementPage}
        />
      )}
    </>
  );
}

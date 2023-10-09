import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { getRandomNumber } from "../services/services";

export default function ContentComponent() {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    console.log(getRandomNumber(8, 80));
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setCharacterData(data.results);
      });
  }, []);

  return (
    <>
      <h1>CONTENT</h1>
      {characterData && <CardComponent cards={characterData} />}
      {characterData && <div>{characterData[0].name}</div>}
    </>
  );
}

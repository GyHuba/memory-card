/* eslint-disable react/prop-types */
export default function GameStartComponent({ setIsGameStarted }) {
  return (
    <>
      <div className="game-menu">
        <div
          className="game-btn"
          onClick={() => {
            setIsGameStarted(true);
          }}
        >
          Start Game
        </div>
      </div>
    </>
  );
}

/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
export default function GameStartComponent({ setIsGameStarted }) {
  return (
    <>
      <div className="game-menu">
      <Tilt
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="20px"
          >
        <div
          className="game-btn start-btn"
          onClick={() => {
            setIsGameStarted(true);
          }}
        >
          Start Game
        </div>
          </Tilt>
      </div>
    </>
  );
}

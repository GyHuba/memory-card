/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";

export default function RestartGameComponent({
  setIsGameOver,
  score,
  setScore,
}) {
  function scoreCheck() {
    if (score === 87) {
      return "Congratulation little fan! You win the Game!";
    } else {
      return "You lose!";
    }
  }

  return (
    <>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="20px"
        className="game-menu-tilt"
      >
        <div
          className={"game-menu lose"}
          onClick={() => {
            setIsGameOver(false);
            setScore(0);
          }}
        >
          <div className="message">{scoreCheck()}</div>
          <div className="game-btn">Restart Game</div>
        </div>
      </Tilt>
    </>
  );
}

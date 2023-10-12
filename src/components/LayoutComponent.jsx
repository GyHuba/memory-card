import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import "../css/global.css";

export default function LayoutComponent() {
  return (
    <>
      <div className="game-screen">
        <ContentComponent />
        <FooterComponent />
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import splashVideo from "../assets/videos/splashpage-loop.mp4";
import "../styles/splash.css";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="splash">
      {/* Background video */}
      <video
        className="splash__video"
        src={splashVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Center content */}
      <div className="splash__content">
        <h2 className="splash__tagline">Float in, zone out.</h2>
        <button className="enter-btn" onClick={() => navigate("/home")}>
          ENTER
        </button>
      </div>
    </div>
  );
}

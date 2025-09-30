import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import splashVideo from "../assets/videos/splashpage-loop.mp4";
import "../styles/splash.css";

export default function Splash() {
  const navigate = useNavigate();
  const [showAgeGate, setShowAgeGate] = useState<boolean>(true);

  // Check if already verified
  useEffect(() => {
    const ok = localStorage.getItem("ageVerified") === "true";
    setShowAgeGate(!ok);
    // Lock scroll when modal is open
    document.body.style.overflow = !ok ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleOver21 = () => {
    localStorage.setItem("ageVerified", "true");
    setShowAgeGate(false);
    document.body.style.overflow = "";
  };

  const handleUnder21 = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="splash">
      {/* BG video */}
      <video className="splash__video" src={splashVideo} autoPlay muted loop playsInline />

      {/* Content */}
      <div className="splash__content">
        <h2 className="splash__tagline">Float in, zone out.</h2>
        <button className="enter-btn" onClick={() => navigate("/home")}>ENTER</button>
      </div>

      {/* Age Verification Modal */}
      {showAgeGate && (
        <div className="agegate" role="dialog" aria-modal="true" aria-labelledby="age-title">
          <div className="agegate__backdrop" />
          <div className="agegate__card">
            <h3 id="age-title" className="agegate__title">AGE VERIFICATION</h3>
            <p className="agegate__text">
              The legal age to use our products is 21. Do you confirm you are of legal age?
            </p>
            <div className="agegate__actions">
              <button className="agegate__btn agegate__btn--yes" onClick={handleOver21}>
                I’M OVER 21
              </button>
              <button className="agegate__btn agegate__btn--no" onClick={handleUnder21}>
                I’M UNDER 21
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import bgVideo from "../assets/videos/homepage-loop.mp4";
import bannerEx from "../assets/images/banner-ex.png";

type Banner = {
  id: number;
  img: string;
  eyebrow: string;
  title: string;
  cta: string;
};

export default function Home() {
  const banners: Banner[] = [
    { id: 1, img: bannerEx, eyebrow: "DELIVERED", title: "LEGAL THC!", cta: "SHOP BEST SELLERS" },
    { id: 2, img: bannerEx, eyebrow: "NEW ARRIVALS", title: "FRESH DROPS", cta: "SHOP NEW" },
    { id: 3, img: bannerEx, eyebrow: "BULK DEALS", title: "SAVE MORE", cta: "VIEW DEALS" },
    { id: 4, img: bannerEx, eyebrow: "WELLNESS", title: "REST & RELAX", cta: "SHOP GUMMIES" },
  ];

  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "[placeholder]",
    price: "$0.00",
  }));

  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Snap to slide when current changes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children.item(current) as HTMLElement | null;
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [current]);

  // Update current when user scrolls manually (drag/trackpad)
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const w = track.clientWidth;
    const idx = Math.round(track.scrollLeft / w);
    if (idx !== current) setCurrent(idx);
  };

  const prev = () => setCurrent((c) => (c - 1 + banners.length) % banners.length);
  const next = () => setCurrent((c) => (c + 1) % banners.length);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="home">
      {/* Top Banner Slider */}
      <section className="banner-slider" aria-label="Featured">
        <button className="arrow left" onClick={prev} aria-label="Previous banner">
          ‹
        </button>

        <div
          className="banner-track"
          ref={trackRef}
          onScroll={handleScroll}
          role="region"
          aria-roledescription="carousel"
          aria-live="polite"
        >
          {banners.map((b, i) => (
            <div
              key={b.id}
              className={`banner-item ${i === current ? "is-active" : ""}`}
              aria-hidden={i !== current}
            >
              <img src={b.img} alt={b.title} />
              <div className="banner-copy">
                <span className="eyebrow">{b.eyebrow}</span>
                <h2 className="headline">{b.title}</h2>
                <button className="cta" type="button">{b.cta}</button>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next} aria-label="Next banner">
          ›
        </button>
      </section>

      {/* Background video */}
      <div className="bg">
        <video
          className="bg__video"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="bg__scrim" />
      </div>

      {/* Hero */}
      <section className="container hero">
        <h1>THE NEXT LEVEL OF WELLNESS</h1>
        <h2>ROOTED IN NATURE, BUILT FOR YOU</h2>
        <p>For your everyday needs.</p>
      </section>

      {/* Product grid */}
      <section className="container">
        <div className="grid">
          {items.map((it) => (
            <article key={it.id} className="card">
              <div className="card__thumb" />
              <h4 className="card__title">{it.title}</h4>
              <p className="card__price">{it.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

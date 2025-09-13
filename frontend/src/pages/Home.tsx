import "../styles/home.css";
import bgVideo from "../assets/videos/homepage-loop.mp4";

export default function Home() {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "[placeholder]",
    price: "$0.00",
  }));

  return (
    <main className="home">
      {/* BG video */}
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

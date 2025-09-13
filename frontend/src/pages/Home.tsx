import "../styles/home.css";

export default function Home() {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "[placeholder]",
    price: "$0.00",
  }));

  return (
    <main className="home">
      <section className="container hero">
        <h1>THE NEXT LEVEL OF WELLNESS</h1>
        <h2>ROOTED IN NATURE, BUILT FOR YOU</h2>
        <p>For your everyday needs.</p>
      </section>

      <section className="container">
        <div className="grid">
          {items.map((it) => (
            <article key={it.id} className="card">
              <div className="thumb" />
              <h3>{it.title}</h3>
              <p className="price">{it.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

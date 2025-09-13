import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link to="/home" className="brand">Kushagram</Link>
        <nav className="nav">
          <Link to="/home">Shop</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link to="/" className="brand">pureskin-ish</Link>
        <nav className="nav">
          <Link to="/">Shop</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

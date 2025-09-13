import "../styles/login.css";
export default function Login() {
  return (
    <main className="login-wrap">
      <form className="login-card">
        <header>
          <h2>LOGIN</h2>
          <a className="alt" href="#">Create account</a>
        </header>

        <label>Email</label>
        <input type="email" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button type="submit" className="btn-primary">SIGN IN</button>

        <a className="muted" href="#">Return to Store</a>
        <a className="muted" href="#">Forgot your password?</a>

        <button type="button" className="btn-social fb">Sign in with Facebook</button>
        <button type="button" className="btn-social google">Sign in with Google</button>
      </form>
    </main>
  );
}
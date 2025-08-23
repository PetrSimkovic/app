import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header>
      <h1>Recepty</h1>
      <nav>
        <Link to="/">Domů</Link>
        <Link to="/about">O aplikaci</Link>
      </nav>
    </header>
  );
}

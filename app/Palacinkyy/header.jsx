import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Header() {
  const colors = ["#f8f5f2", "#d1f7c4", "#fddde6", "#e0f7fa", "#ffe4b5"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);

  function changeColor() {
    setColorIndex((colorIndex + 1) % colors.length);
  }

  return (
    <header>
      <h1>Recepty</h1>
      <nav>
        <Link to="/">Domů</Link>
        <Link to="/about">O aplikaci</Link>
      </nav>
      <button type="button" onClick={changeColor}>
        Změnit barvu
      </button>
    </header>
  );
}

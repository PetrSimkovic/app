// komponenta s parametrem copyright

export default function Footer({ copyright }) {
  return (
    <footer>
      <p>Vytvořeno v roce {copyright}</p>
    </footer>
  );
}

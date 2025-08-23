// app/components/FooterLocation.jsx
import React from 'react';
import './footerlocation.module.css';  // Import CSS pro FooterLocation komponentu

const FooterLocation = () => {
  return (
    <footer className="footer-location">
      <p>Adresa: Krkonošská 123, Rokytnice nad Jizerou</p>
      <p>Telefon: +420 123 456 789</p>
    </footer>
  );
};

export default FooterLocation;

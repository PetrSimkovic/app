import React from 'react';

interface FooterProps {
  copyright: string;
}

export default function Footer({ copyright }: FooterProps) {
  return <footer>Vytvořeno v roce {copyright}</footer>;
}

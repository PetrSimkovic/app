import React from 'react';
import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header>
      <h1>Blog</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

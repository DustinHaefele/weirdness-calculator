import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="appHeader" role="banner">
      <h1 className="headerTitle">
        {/* Change this to a link to landing page when you impliment routes */}
        Weirdness Calculator
      </h1>
    </header>
  );
}

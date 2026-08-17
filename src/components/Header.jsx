'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__inner">
        <Link href="/" className="header__logo">
          <Image
            src="/images/LOGO TRIANGULO TRANSPARENTE.png"
            alt="SOBEI Logo"
            width={40}
            height={40}
            style={{ width: '40px', height: 'auto', objectFit: 'contain' }}
          />
          <span className="header__logo-text">
            Congresso <span>SOBEI</span>
          </span>
        </Link>

        <nav className="header__nav">
          <a href="https://sobei.org.br" className="header__link" target="_blank" rel="noopener noreferrer">
            Site Institucional
          </a>
        </nav>
      </div>
    </header>
  );
}

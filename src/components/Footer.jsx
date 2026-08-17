import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo">
            <Image
              src="/images/LOGO BRANCO.png"
              alt="SOBEI Logo"
              width={250}
              height={81}
              style={{ width: '100%', maxWidth: '250px', height: 'auto', objectFit: 'contain' }}
            />
            <p className="footer__description">
              Sociedade Beneficente Equilíbrio de Interlagos — promovendo assistência social, educação e capacitação profissional há mais de 42 anos.
            </p>
          </div>

          <div className="footer__socials">
            <a href="https://www.facebook.com/sobeimatriz?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/sobeimatriz/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>

          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} SOBEI - Sociedade Beneficente Equilíbrio de Interlagos. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero__content">
          <div className="hero__logo">
            <Image
              src="/images/LOGO BRANCO.png"
              alt="SOBEI Logo"
              width={320}
              height={104}
              priority
              style={{ width: '100%', maxWidth: '320px', height: 'auto', objectFit: 'contain' }}
            />
          </div>

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Em breve
          </div>

          <h1 className="hero__title">
            Congresso <span>SOBEI</span>
          </h1>

          <p className="hero__subtitle">
            Estamos preparando algo especial. Em breve, você terá acesso a todas as informações sobre o Congresso da Sociedade Beneficente Equilíbrio de Interlagos.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section" id="sobre">
        <div className="container info-section__inner">
          <h2 className="info-section__title">O que esperar</h2>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="info-card__title">Palestras e Debates</h3>
              <p className="info-card__text">
                Conteúdos relevantes sobre assistência social, educação e desenvolvimento comunitário com profissionais renomados.
              </p>
            </div>

            <div className="info-card">
              <div className="info-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="info-card__title">Programação</h3>
              <p className="info-card__text">
                A programação completa será divulgada em breve. Fique atento às nossas redes sociais para mais informações.
              </p>
            </div>

            <div className="info-card">
              <div className="info-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="info-card__title">Local e Inscrições</h3>
              <p className="info-card__text">
                Informações sobre local, data e inscrições serão publicadas assim que confirmadas. Acompanhe as atualizações.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

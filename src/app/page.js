import React from 'react';

export default function Home() {
  return (
    <>
      <section className="congress-canvas" aria-label="20 Anos de Congresso de Educação Infantil SOBEI">
      {/* Decorative Corner Waves — Top Left */}
      <div className="corner-decor corner-decor--top-left" aria-hidden="true">
        <svg viewBox="0 0 500 340" preserveAspectRatio="none" className="wave-svg">
          {/* Yellow outer curve */}
          <path
            d="M -10,-10 L 500,-10 C 370,40 220,130 95,240 C 40,290 -10,340 -10,340 Z"
            fill="#FFC400"
          />
          {/* Main Dark Navy curve */}
          <path
            d="M -10,-10 L 460,-10 C 335,35 190,115 70,225 C 20,270 -10,310 -10,310 Z"
            fill="#0A193F"
          />
        </svg>
      </div>

      {/* Decorative Corner Waves — Bottom Right */}
      <div className="corner-decor corner-decor--bottom-right" aria-hidden="true">
        <svg viewBox="0 0 540 360" preserveAspectRatio="none" className="wave-svg">
          {/* Yellow outer curve */}
          <path
            d="M 550,370 L 550,20 C 420,80 290,180 140,275 C 60,325 -10,370 -10,370 Z"
            fill="#FFC400"
          />
          {/* Main Dark Navy curve */}
          <path
            d="M 550,370 L 550,60 C 440,110 320,200 180,290 C 95,335 15,370 15,370 Z"
            fill="#0A193F"
          />
        </svg>
      </div>

      {/* Background SOBEI Watermark Logo with High Transparency */}
      <div className="sobei-watermark" aria-hidden="true">
        <img
          src="/images/LOGO TRIANGULO TRANSPARENTE.png"
          alt=""
          className="sobei-watermark-img"
        />
      </div>

      {/* Main Interactive Poster Layout */}
      <div className="congress-layout">
        
        {/* LEFT COLUMN: 20 Anos + Slogan Ribbon */}
        <div className="congress-left">
          <div className="anniversary-block">
            <div className="anniversary-number-group">
              <span className="anniversary-num">20</span>
              <span className="anniversary-script">anos</span>
              <div className="anniversary-sub">
                <span>DE CONGRESSO DE</span>
                <span>EDUCAÇÃO INFANTIL</span>
              </div>
            </div>
            <div className="anniversary-divider" aria-hidden="true" />
          </div>

          {/* Yellow Ribbon Banner */}
          <div className="ribbon-wrapper">
            <div className="ribbon-banner">
              <div className="ribbon-tail ribbon-tail--left" aria-hidden="true">
                <span className="ribbon-tail-fold" />
              </div>
              <div className="ribbon-body">
                <span className="ribbon-text-1">CELEBRANDO HISTÓRIAS,</span>
                <span className="ribbon-text-2">INSPIRANDO FUTUROS!</span>
              </div>
              <div className="ribbon-tail ribbon-tail--right" aria-hidden="true">
                <span className="ribbon-tail-fold" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Title, Subtitle, Heart Flourish & 5 Pillars */}
        <div className="congress-right">
          
          {/* Golden Heart Flourish (Top Right) */}
          <div className="heart-flourish" aria-hidden="true">
            <svg viewBox="0 0 160 140" className="heart-flourish-svg">
              <path
                d="M 68,48 C 52,18 20,22 22,46 C 24,72 68,98 84,108 C 100,98 144,72 146,46 C 148,22 116,18 100,48 C 94,58 74,58 68,48 Z"
                fill="none"
                stroke="#FFC400"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 84,108 C 100,122 135,124 152,95"
                fill="none"
                stroke="#FFC400"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Main Congress Title */}
          <div className="title-block">
            <h1 className="congress-title">
              <span className="congress-title__line1">CONGRESSO</span>
              <span className="congress-title__line2">DE EDUCAÇÃO INFANTIL</span>
            </h1>

            {/* Subtitle / Theme */}
            <div className="congress-theme">
              <p className="congress-theme__script">Cuidar, acolher e incluir:</p>
              <p className="congress-theme__desc">construindo vínculos na primeiríssima infância.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* ============================================
        SECTION: Programação & Palestras
        ============================================ */}
    <section className="schedule-section" id="programacao" aria-label="Programação do Congresso">
      
      {/* 1. Header Transition Full-Width Banner */}
      <div className="schedule-banner-full">
        <div className="schedule-banner-inner">
          <div className="schedule-badge-group">
            <div className="schedule-badge-box">
              <span className="schedule-badge-xx">XX</span>
              <span className="schedule-badge-congresso">CONGRESSO</span>
            </div>
            <span className="schedule-badge-sub">DE EDUCAÇÃO INFANTIL SOBEI</span>
          </div>
        </div>
      </div>

      {/* Flowing Organic Background Waves (Behind Cards - Left & Right) */}
      <div className="schedule-bg-decor" aria-hidden="true">
        {/* Left Wave Flow */}
        <div className="schedule-bg-wave schedule-bg-wave--left">
          <svg viewBox="0 0 500 1400" preserveAspectRatio="none" className="schedule-bg-wave-svg">
            <path
              d="M -20,0 C 220,180 80,480 260,750 C 360,920 160,1180 60,1400 L -20,1400 Z"
              fill="#EDE5D3"
              opacity="0.5"
            />
            <path
              d="M -20,0 C 140,160 30,420 180,680 C 260,840 90,1080 -20,1250 Z"
              fill="#F3ECE0"
              opacity="0.65"
            />
            <path
              d="M -20,300 C 100,450 40,700 150,950 C 80,1150 -20,1300 -20,1400 Z"
              fill="#FAF5EB"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Right Wave Flow */}
        <div className="schedule-bg-wave schedule-bg-wave--right">
          <svg viewBox="0 0 500 1400" preserveAspectRatio="none" className="schedule-bg-wave-svg">
            <path
              d="M 520,0 C 300,220 440,520 250,820 C 150,980 340,1220 450,1400 L 520,1400 Z"
              fill="#EDE5D3"
              opacity="0.45"
            />
            <path
              d="M 520,100 C 360,300 480,600 320,880 C 240,1040 420,1280 520,1350 Z"
              fill="#F3ECE0"
              opacity="0.6"
            />
            <path
              d="M 520,400 C 380,580 450,850 350,1100 C 420,1260 520,1380 520,1400 Z"
              fill="#FAF5EB"
              opacity="0.75"
            />
          </svg>
        </div>
      </div>

      <div className="schedule-container">

        {/* 2. Credenciamento & Recepção Card */}
        <div className="reception-card">
          {/* Left: Date Box */}
          <div className="reception-date-box">
            <div className="reception-date-num">11</div>
            <div className="reception-date-meta">
              <svg viewBox="0 0 24 24" className="reception-date-icon" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              <div className="reception-date-labels">
                <span>SEX</span>
                <span className="reception-date-sep">|</span>
                <span>SET</span>
              </div>
            </div>
          </div>

          {/* Middle: Content */}
          <div className="reception-info">
            <h2 className="reception-title">CREDENCIAMENTO &amp; RECEPÇÃO</h2>
            <p className="reception-time">
              <strong>Horário:</strong> 18h00 às 19h00
            </p>
            <p className="reception-instructions">
              <strong>Instruções:</strong> Apresente o seu QR Code ou documento com foto para a leitura, validação e retirada do seu kit do congresso.
            </p>
          </div>

          {/* Right: Check-in Badge */}
          <div className="reception-checkin-badge">
            <div className="checkin-icon-circle">
              <svg viewBox="0 0 24 24" className="checkin-icon" fill="currentColor">
                <path d="M4 4h6v6H4V4zm2 2v2h2V6H6zm8-2h6v6h-6V4zm2 2v2h2V6h-2zM4 14h6v6H4v-6zm2 2v2h2v-2H6zm10-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
              </svg>
            </div>
            <span className="checkin-label">Check-in</span>
          </div>
        </div>

        {/* 3. Section Title: PALESTRAS */}
        <div className="lectures-header">
          <h2 className="lectures-heading">PALESTRAS</h2>
          <div className="lectures-heading-line" aria-hidden="true" />
        </div>

        {/* 4. DAY 1: Sexta-Feira | 11 de Set */}
        <div className="day-card day-card--friday">
          <div className="day-badge">
            <span>SEXTA-FEIRA | 11 DE SET</span>
          </div>

          <div className="speakers-list">
            <div className="speaker-item">
              <div className="speaker-avatar-frame speaker-avatar-frame--shape1">
                <div className="speaker-avatar-placeholder">
                  <svg viewBox="0 0 24 24" className="speaker-avatar-icon" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="speaker-details">
                <span className="speaker-time">20h00</span>
                <h3 className="speaker-name">Nome do Palestrante</h3>
                <p className="speaker-theme"><strong>Tema:</strong> XXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. DAY 2: Sábado | 12 de Set */}
        <div className="day-card day-card--saturday">
          <div className="day-badge">
            <span>SÁBADO | 12 DE SET</span>
          </div>

          {/* Decorative Honeycomb Pattern Background */}
          <div className="honeycomb-decor" aria-hidden="true">
            <svg viewBox="0 0 280 280" className="honeycomb-svg">
              <polygon points="140,20 185,46 185,98 140,124 95,98 95,46" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
              <polygon points="230,72 275,98 275,150 230,176 185,150 185,98" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
              <polygon points="140,124 185,150 185,202 140,228 95,202 95,150" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
              <polygon points="50,72 95,98 95,150 50,176 5,150 5,98" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
              <polygon points="230,176 275,202 275,254 230,280 185,254 185,202" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
            </svg>
            
            {/* Soft decorative golden line art */}
            <div className="honeycomb-icons">
              <div className="honeycomb-icon-box honeycomb-icon-box--puzzle">
                <svg viewBox="0 0 24 24" className="honeycomb-icon-svg" fill="none" stroke="#D49B2A" strokeWidth="1.6">
                  <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z" />
                </svg>
              </div>
              <div className="honeycomb-icon-box honeycomb-icon-box--handshake">
                <svg viewBox="0 0 24 24" className="honeycomb-icon-svg" fill="none" stroke="#D49B2A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </div>
            </div>
          </div>

          <div className="speakers-list">
            {/* Speaker 1: Bárbara Alencar */}
            <div className="speaker-item">
              <div className="speaker-avatar-frame speaker-avatar-frame--shape2">
                <div className="speaker-avatar-placeholder">
                  <svg viewBox="0 0 24 24" className="speaker-avatar-icon" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="speaker-details">
                <span className="speaker-time">08h30</span>
                <h3 className="speaker-name">Bárbara Alencar</h3>
                <p className="speaker-theme"><strong>Tema:</strong> XXX</p>
              </div>
            </div>

            {/* Speaker 2: Fabíola Dobrillovich */}
            <div className="speaker-item">
              <div className="speaker-avatar-frame speaker-avatar-frame--shape3">
                <div className="speaker-avatar-placeholder">
                  <svg viewBox="0 0 24 24" className="speaker-avatar-icon" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="speaker-details">
                <span className="speaker-time">10h00</span>
                <h3 className="speaker-name">Fabíola Dobrillovich</h3>
                <p className="speaker-theme">
                  <strong>Tema:</strong> Transtorno do Espectro Autista. Os desafios de uma educação inclusiva.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            OFICINAS PEDAGÓGICAS (Segunda Página / Bloco)
            ============================================ */}

        {/* 6. Card de Destaque: OFICINAS PEDAGÓGICAS */}
        <div className="workshops-banner-card" id="oficinas">
          {/* Left: Date Box */}
          <div className="reception-date-box">
            <div className="reception-date-num">12</div>
            <div className="reception-date-meta">
              <svg viewBox="0 0 24 24" className="reception-date-icon" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              <div className="reception-date-labels">
                <span>SÁB</span>
                <span className="reception-date-sep">|</span>
                <span>SET</span>
              </div>
            </div>
          </div>

          {/* Middle: Title */}
          <div className="workshops-banner-title">
            <h2 className="workshops-title-text">OFICINAS PEDAGÓGICAS</h2>
          </div>

          {/* Right: Creativity/Workshop Icon */}
          <div className="workshops-banner-icon-badge">
            <div className="checkin-icon-circle">
              <svg viewBox="0 0 24 24" className="checkin-icon" fill="currentColor">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 7. MANHÃ - 10H ÀS 13H */}
        <div className="workshop-period-block">
          <div className="lectures-header">
            <h3 className="lectures-heading">MANHÃ - 10H ÀS 13H</h3>
            <div className="lectures-heading-line" aria-hidden="true" />
          </div>

          <div className="day-card workshop-card workshop-card--morning">
            <div className="workshop-content-container">
              <div className="workshop-empty-state">
                <div className="workshop-empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D49B2A" strokeWidth="1.6" className="workshop-placeholder-svg">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="workshop-placeholder-text">Espaço reservado para as Oficinas Pedagógicas da Manhã.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. TARDE - 14H ÀS 17H */}
        <div className="workshop-period-block">
          <div className="lectures-header">
            <h3 className="lectures-heading">TARDE - 14H ÀS 17H</h3>
            <div className="lectures-heading-line" aria-hidden="true" />
          </div>

          <div className="day-card workshop-card workshop-card--afternoon">
            {/* Background Honeycomb Pattern */}
            <div className="honeycomb-decor honeycomb-decor--workshop" aria-hidden="true">
              <svg viewBox="0 0 280 280" className="honeycomb-svg">
                <polygon points="140,20 185,46 185,98 140,124 95,98 95,46" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
                <polygon points="230,72 275,98 275,150 230,176 185,150 185,98" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
                <polygon points="140,124 185,150 185,202 140,228 95,202 95,150" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
                <polygon points="50,72 95,98 95,150 50,176 5,150 5,98" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
                <polygon points="230,176 275,202 275,254 230,280 185,254 185,202" fill="none" stroke="#D49B2A" strokeWidth="1.2" opacity="0.3" />
              </svg>
            </div>

            <div className="workshop-content-container">
              <div className="workshop-empty-state">
                <div className="workshop-empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D49B2A" strokeWidth="1.6" className="workshop-placeholder-svg">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="workshop-placeholder-text">Espaço reservado para as Oficinas Pedagógicas da Tarde.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
    </>
  );
}

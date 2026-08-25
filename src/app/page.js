import React from 'react';
import Link from 'next/link';
import { PALESTRAS_SEXTA, PALESTRAS_SABADO } from '@/lib/congressoData';
import WorkshopsCatalog from '@/components/WorkshopsCatalog';

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
        SECTION: Programação, Palestras & Oficinas
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
        {/* Left Wave Flow (Simétrico ao Lado Direito) */}
        <div className="schedule-bg-wave schedule-bg-wave--left">
          <svg viewBox="0 0 500 1400" preserveAspectRatio="none" className="schedule-bg-wave-svg">
            <path
              d="M -20,0 C 200,220 60,520 250,820 C 350,980 160,1220 50,1400 L -20,1400 Z"
              fill="#DECBB0"
              opacity="0.4"
            />
            <path
              d="M -20,100 C 140,300 20,600 180,880 C 260,1040 80,1280 -20,1350 Z"
              fill="#EBDDC8"
              opacity="0.55"
            />
            <path
              d="M -20,400 C 120,580 50,850 150,1100 C 80,1260 -20,1380 -20,1400 Z"
              fill="#F5EDE1"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Right Wave Flow */}
        <div className="schedule-bg-wave schedule-bg-wave--right">
          <svg viewBox="0 0 500 1400" preserveAspectRatio="none" className="schedule-bg-wave-svg">
            <path
              d="M 520,0 C 300,220 440,520 250,820 C 150,980 340,1220 450,1400 L 520,1400 Z"
              fill="#DECBB0"
              opacity="0.4"
            />
            <path
              d="M 520,100 C 360,300 480,600 320,880 C 240,1040 420,1280 520,1350 Z"
              fill="#EBDDC8"
              opacity="0.55"
            />
            <path
              d="M 520,400 C 380,580 450,850 350,1100 C 420,1260 520,1380 520,1400 Z"
              fill="#F5EDE1"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      <div className="schedule-container">

        {/* 2. INSCRIÇÕES (Banner Dourado de Inscrições) */}
        <div className="workshops-banner-card" id="inscricoes">
          {/* Left: Ticket Icon Box */}
          <div className="banner-icon-wrapper">
            <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
              <line x1="13" y1="5" x2="13" y2="19" strokeDasharray="3 3" strokeWidth="2" />
            </svg>
          </div>

          {/* Middle: Title */}
          <div className="workshops-banner-title">
            <h2 className="workshops-title-text">INSCREVA-SE</h2>
          </div>
        </div>

        {/* Card de Informações e Chamada para Inscrição */}
        <div className="workshop-period-block info-card-period">
          <div className="day-card">
            <div className="info-card__body">
              <div>
                <h3 className="info-card__title">
                  Sobre o Congresso
                </h3>
                <p className="info-card__text">
                  Celebrando 20 anos de compromisso com a infância, o <strong>Congresso de Educação Infantil SOBEI</strong> tem como tema central <em>"Cuidar, acolher e incluir: construindo vínculos na primeiríssima infância"</em>. Um encontro transformador que reúne educadores, gestores e especialistas para debater práticas inovadoras e fortalecer vínculos pedagógicos.
                </p>
              </div>

              {/* Informações: Local, Dias e Horários */}
              <div className="info-card__details-grid">
                {/* Coluna 1: Local do Congresso */}
                <div className="info-card__detail-col">
                  <div className="info-card__detail-label">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>Local do Congresso</span>
                  </div>

                  <div className="info-card__address-group">
                    <p className="info-card__address-main">
                      Av. Rubens Montanaro de Borba, 459
                    </p>
                    <p className="info-card__address-sub">
                      Jardim Regis — São Paulo, SP
                    </p>
                  </div>

                  <div className="info-card__detail-footer">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Rubens+Montanaro+de+Borba,+459+-+Jardim+Regis,+S%C3%A3o+Paulo+-+SP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-card__maps-link"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>Ver no Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Coluna 2: Dias & Horários */}
                <div className="info-card__detail-col">
                  <div className="info-card__detail-label">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                    </svg>
                    <span>Dias &amp; Horários</span>
                  </div>

                  <div className="info-card__schedule-group">
                    <p className="info-card__schedule-item">
                      <strong>11/Set (Sexta-feira):</strong> 18h00 às 21h30
                    </p>
                    <p className="info-card__schedule-item">
                      <strong>12/Set (Sábado):</strong> 08h00 às 17h00
                    </p>
                  </div>

                  <div className="info-card__detail-footer">
                    <p className="info-card__schedule-note">
                      Credenciamento presencial no local
                    </p>
                  </div>
                </div>
              </div>

              {/* Ações: Inscrição e Consulta */}
              <div className="info-card__actions">
                <Link
                  href="/inscricao"
                  className="btn-inscricao-cta"
                >
                  Garantir Minha Vaga (Inscreva-se)
                </Link>

                <Link
                  href="/consulta"
                  className="btn-consulta-cta"
                >
                  Consultar Inscrição
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Credenciamento, Recepção & Abertura (Sexta - 11 de Setembro) */}
        <div className="reception-card">
          {/* Left: Date Box */}
          <div className="reception-date-box">
            <div className="reception-date-top">
              <div className="reception-date-num">11</div>
              <div className="reception-date-weekday">
                <span>S</span>
                <span>E</span>
                <span>X</span>
                <span>T</span>
                <span>A</span>
              </div>
            </div>
            <div className="reception-date-divider" />
            <div className="reception-date-month">SETEMBRO</div>
          </div>

          {/* Middle: Content */}
          <div className="reception-info">
            <div className="reception-block">
              <h2 className="reception-title">CREDENCIAMENTO &amp; RECEPÇÃO</h2>
              <p className="reception-time">
                <strong>Horário:</strong> 18h00 às 19h00
              </p>
              <p className="reception-instructions">
                <strong>Instruções:</strong> Informe o seu nome para a validação da inscrição e retirada do seu kit do congresso.
              </p>
            </div>

            <div className="reception-block">
              <h2 className="reception-title">ABERTURA SOLENE DO CONGRESSO</h2>
              <p className="reception-time">
                <strong>Horário:</strong> 19h00 às 19h30
              </p>
              <p className="reception-instructions">
                Apresentação cultural, boas-vindas institucionais e início oficial das atividades.
              </p>
            </div>
          </div>

          {/* Right: Check-in Badge */}
          <div className="reception-checkin-badge">
            <svg viewBox="0 0 40 40" className="checkin-icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 13L16 9L24 13L34 9V31L24 35L16 31L6 35V13Z" stroke="#FFFFFF" strokeWidth="2.2" />
              <line x1="16" y1="9" x2="16" y2="31" stroke="#FFFFFF" strokeWidth="2.2" />
              <line x1="24" y1="13" x2="24" y2="35" stroke="#FFFFFF" strokeWidth="2.2" />
              <circle cx="20" cy="18" r="6" fill="#B68425" stroke="#FFFFFF" strokeWidth="2.2" />
              <polyline points="18 18 19.5 19.5 22.5 16.5" stroke="#FFFFFF" strokeWidth="2.2" />
            </svg>
            <span className="checkin-label">Check-in</span>
          </div>
        </div>

        {/* 4. Section Title: PALESTRAS (Sexta-Feira) */}
        <div className="lectures-header">
          <h2 className="lectures-heading">PALESTRAS</h2>
          <div className="lectures-heading-line" aria-hidden="true" />
        </div>

        {/* 5. DAY 1: Sexta-Feira | 11 de Set (Palestra Principal) */}
        <div className="day-card day-card--friday">
          <div className="day-badge">
            <span>SEXTA-FEIRA | 11 DE SET</span>
          </div>

          {/* Decorative Pure Geometric Honeycomb Pattern Background */}
          <div className="honeycomb-decor" aria-hidden="true">
            <svg viewBox="0 0 340 340" className="honeycomb-svg">
              <polygon points="140,20 185,46 185,98 140,124 95,98 95,46" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="230,72 275,98 275,150 230,176 185,150 185,98" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="140,124 185,150 185,202 140,228 95,202 95,150" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="50,72 95,98 95,150 50,176 5,150 5,98" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="230,176 275,202 275,254 230,280 185,254 185,202" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="320,124 365,150 365,202 320,228 275,202 275,150" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="320,228 365,254 365,306 320,332 275,306 275,254" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="140,228 185,254 185,306 140,332 95,306 95,254" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
            </svg>
          </div>

          <div className="speakers-list">
            {PALESTRAS_SEXTA.map((palestra) => (
              <div key={palestra.id} className="speaker-item">
                <div className={`speaker-avatar-frame ${palestra.shapeClass}`}>
                  <img
                    src={palestra.foto}
                    alt={palestra.fotoAlt}
                    className="speaker-avatar-img"
                  />
                </div>
                <div className="speaker-details">
                  <span className="speaker-time">{palestra.horario}</span>
                  <h3 className="speaker-name">{palestra.nome}</h3>
                  <p className="speaker-theme">
                    <strong>Tema:</strong> {palestra.tema}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Credenciamento, Recepção & Almoço (Sábado - 12 de Setembro) */}
        <div className="reception-card">
          {/* Left: Date Box */}
          <div className="reception-date-box">
            <div className="reception-date-top">
              <div className="reception-date-num">12</div>
              <div className="reception-date-weekday">
                <span>S</span>
                <span>Á</span>
                <span>B</span>
                <span>A</span>
                <span>D</span>
                <span>O</span>
              </div>
            </div>
            <div className="reception-date-divider" />
            <div className="reception-date-month">SETEMBRO</div>
          </div>

          {/* Middle: Content */}
          <div className="reception-info">
            <div className="reception-block">
              <h2 className="reception-title">CREDENCIAMENTO &amp; RECEPÇÃO</h2>
              <p className="reception-time">
                <strong>Horário:</strong> 07h00 às 08h00
              </p>
              <p className="reception-instructions">
                <strong>Instruções:</strong> Validação da inscrição e acolhimento dos participantes.
              </p>
            </div>

            <div className="reception-block">
              <h2 className="reception-title">ALMOÇO</h2>
              <p className="reception-time">
                <strong>Horário:</strong> 12h00 às 14h00
              </p>
            </div>
          </div>

          {/* Right: Check-in Badge */}
          <div className="reception-checkin-badge">
            <svg viewBox="0 0 40 40" className="checkin-icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 13L16 9L24 13L34 9V31L24 35L16 31L6 35V13Z" stroke="#FFFFFF" strokeWidth="2.2" />
              <line x1="16" y1="9" x2="16" y2="31" stroke="#FFFFFF" strokeWidth="2.2" />
              <line x1="24" y1="13" x2="24" y2="35" stroke="#FFFFFF" strokeWidth="2.2" />
              <circle cx="20" cy="18" r="6" fill="#B68425" stroke="#FFFFFF" strokeWidth="2.2" />
              <polyline points="18 18 19.5 19.5 22.5 16.5" stroke="#FFFFFF" strokeWidth="2.2" />
            </svg>
            <span className="checkin-label">Check-in</span>
          </div>
        </div>

        {/* 7. Section Title: PALESTRAS (Sábado) */}
        <div className="lectures-header">
          <h2 className="lectures-heading">PALESTRAS</h2>
          <div className="lectures-heading-line" aria-hidden="true" />
        </div>

        {/* 8. DAY 2: Sábado | 12 de Set (Palestras do Sábado) */}
        <div className="day-card day-card--saturday">
          <div className="day-badge">
            <span>SÁBADO | 12 DE SET</span>
          </div>

          {/* Decorative Pure Geometric Honeycomb Pattern Background */}
          <div className="honeycomb-decor" aria-hidden="true">
            <svg viewBox="0 0 340 340" className="honeycomb-svg">
              <polygon points="140,20 185,46 185,98 140,124 95,98 95,46" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="230,72 275,98 275,150 230,176 185,150 185,98" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="140,124 185,150 185,202 140,228 95,202 95,150" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="50,72 95,98 95,150 50,176 5,150 5,98" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="230,176 275,202 275,254 230,280 185,254 185,202" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="320,124 365,150 365,202 320,228 275,202 275,150" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="320,228 365,254 365,306 320,332 275,306 275,254" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
              <polygon points="140,228 185,254 185,306 140,332 95,306 95,254" fill="none" stroke="#C48B1E" strokeWidth="1.2" opacity="0.32" />
            </svg>
          </div>

          <div className="speakers-list">
            {PALESTRAS_SABADO.map((palestra) => (
              <div key={palestra.id} className="speaker-item">
                <div className={`speaker-avatar-frame ${palestra.shapeClass}`}>
                  <img
                    src={palestra.foto}
                    alt={palestra.fotoAlt}
                    className="speaker-avatar-img"
                  />
                </div>
                <div className="speaker-details">
                  <span className="speaker-time">{palestra.horario}</span>
                  <h3 className="speaker-name">{palestra.nome}</h3>
                  <p className="speaker-theme">
                    <strong>Tema:</strong> {palestra.tema}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Section Title: OFICINAS PEDAGÓGICAS */}
        <div className="lectures-header" id="oficinas">
          <h2 className="lectures-heading">OFICINAS PEDAGÓGICAS</h2>
          <div className="lectures-heading-line" aria-hidden="true" />
        </div>

        {/* 10. Catálogo Completo das Oficinas Pedagógicas (Sábado 12 de Set) */}
        <WorkshopsCatalog />

        </div>
      </section>
    </>
  );
}


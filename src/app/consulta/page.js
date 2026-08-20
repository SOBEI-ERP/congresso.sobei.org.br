'use client';

import { useState } from 'react';
import Link from 'next/link';
import { consultarInscricaoCongresso } from '@/lib/api';

export default function ConsultaPage() {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const formatCpf = (value) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));
  };

  const handleConsultar = async (e) => {
    e.preventDefault();
    setErro('');
    setResultado(null);

    const cpfNumeros = cpf.replace(/\D/g, '');
    if (cpfNumeros.length !== 11) {
      setErro('Por favor, informe um CPF válido com 11 dígitos.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErro('Por favor, informe um e-mail válido.');
      return;
    }

    setLoading(true);
    const res = await consultarInscricaoCongresso(cpf.trim(), email.trim());
    setLoading(false);

    if (res.success && res.data) {
      setResultado(res.data);
    } else {
      setErro(res.message || 'Nenhuma inscrição encontrada com o CPF e e-mail informados.');
    }
  };

  return (
    <div className="schedule-section" style={{ minHeight: '100vh', padding: '0 0 clamp(6rem, 10vh, 9rem) 0', backgroundColor: '#F7F5EE' }}>
      
      {/* 1. Header Oficial do Congresso */}
      <div className="schedule-banner-full">
        <div className="schedule-banner-inner" style={{ justifyContent: 'space-between' }}>
          {/* Botão de Voltar em Branco */}
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: '700',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s ease',
              padding: '6px 12px',
              borderRadius: '8px',
            }}
            onMouseOver={(e) => { e.currentTarget.style.opacity = '0.8'; }}
            onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Voltar</span>
          </Link>

          <div className="schedule-badge-group">
            <div className="schedule-badge-box">
              <span className="schedule-badge-xx">XX</span>
              <span className="schedule-badge-congresso">CONGRESSO</span>
            </div>
            <span className="schedule-badge-sub">DE EDUCAÇÃO INFANTIL SOBEI</span>
          </div>

          <div style={{ width: '80px' }} />
        </div>
      </div>

      {/* 2. Ondulações Orgânicas de Fundo (Esquerda e Direita) */}
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

      {/* 3. Conteúdo Central de Consulta */}
      <div className="schedule-container" style={{ maxWidth: '940px', paddingTop: '3rem' }}>
        
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: 'clamp(2.8rem, 5.5vh, 4rem) clamp(2rem, 5.5vw, 4rem)',
            boxShadow: '0 16px 40px rgba(10, 25, 63, 0.07)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            marginBottom: '3.5rem',
          }}
        >
          {resultado ? (
            <div className="inscricao-sucesso" style={{ padding: '1rem 0' }}>
              <div className="inscricao-sucesso-icon" style={{ marginBottom: '1.2rem' }}>
                <svg viewBox="0 0 24 24" width="68" height="68" fill="#10b981">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h2 className="inscricao-sucesso-title" style={{ fontSize: '2rem', color: '#0A193F', fontWeight: '900', marginBottom: '0.6rem' }}>
                Inscrição Confirmada!
              </h2>
              <p className="inscricao-sucesso-desc" style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: '580px', margin: '0 auto 1.8rem' }}>
                Sua participação no <strong>XX Congresso de Educação Infantil SOBEI</strong> foi registrada com sucesso.
              </p>
              
              <div className="inscricao-sucesso-card" style={{ maxWidth: '560px', margin: '0 auto 1.8rem', padding: '1.6rem', backgroundColor: '#FAF5EB', borderRadius: '16px', border: '1px solid #EAE0CD' }}>
                <p style={{ fontSize: '1rem', margin: '0 0 0.5rem' }}><strong>Participante:</strong> {resultado.nomeCompleto}</p>
                <p style={{ fontSize: '1rem', margin: '0 0 0.5rem' }}><strong>CPF:</strong> {resultado.cpf}</p>
                <p style={{ fontSize: '1rem', margin: '0 0 0.5rem' }}><strong>E-mail:</strong> {resultado.email}</p>
                <p style={{ fontSize: '1rem', margin: '0 0 1rem' }}>
                  <strong>Instituição:</strong> {resultado.tipoOsc === 'SOBEI' ? `SOBEI — ${resultado.unidade}` : resultado.outraOsc}
                </p>

                {/* Status de Check-in por Dia */}
                <div style={{ borderTop: '1px solid #E5D9C3', paddingTop: '0.8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
                  <div style={{ background: resultado.presenteDia11 ? '#D1FAE5' : '#F3F4F6', padding: '10px 12px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', color: resultado.presenteDia11 ? '#065F46' : '#4B5563' }}>
                      11/SET (SEXTA-FEIRA)
                    </div>
                    <div style={{ fontSize: '0.78rem', color: resultado.presenteDia11 ? '#047857' : '#6B7280', marginTop: '2px', fontWeight: '600' }}>
                      {resultado.presenteDia11 ? '✓ Check-in Confirmado' : 'Aguardando Credenciamento'}
                    </div>
                  </div>

                  <div style={{ background: resultado.presenteDia12 ? '#D1FAE5' : '#F3F4F6', padding: '10px 12px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', color: resultado.presenteDia12 ? '#065F46' : '#4B5563' }}>
                      12/SET (SÁBADO)
                    </div>
                    <div style={{ fontSize: '0.78rem', color: resultado.presenteDia12 ? '#047857' : '#6B7280', marginTop: '2px', fontWeight: '600' }}>
                      {resultado.presenteDia12 ? '✓ Check-in Confirmado' : 'Aguardando Credenciamento'}
                    </div>
                  </div>
                </div>
              </div>

              <p className="inscricao-sucesso-instrucao" style={{ fontSize: '0.98rem', color: '#6b7280', maxWidth: '520px', margin: '0 auto 2.2rem', lineHeight: '1.6' }}>
                No dia do evento, compareça ao credenciamento com seu documento oficial com foto para retirar seu crachá e kit do congresso.
              </p>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '16px 42px',
                    backgroundColor: '#0A193F',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderRadius: '35px',
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    boxShadow: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#16285A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A193F';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  Voltar para a Programação
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setResultado(null);
                    setCpf('');
                    setEmail('');
                  }}
                  style={{
                    padding: '16px 28px',
                    backgroundColor: '#F3F4F6',
                    color: '#374151',
                    borderRadius: '35px',
                    border: '1px solid #D1D5DB',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  Nova Consulta
                </button>
              </div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '2.2rem' }}>
                <h1 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: '900', color: '#0A193F', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  Consultar Inscrição
                </h1>
                <p style={{ color: '#6b7280', fontSize: '1.02rem', lineHeight: '1.5' }}>
                  Informe o CPF e o e-mail cadastrados para visualizar os dados da sua inscrição no congresso.
                </p>
              </div>

              {erro && (
                <div className="inscricao-alerta-erro" style={{ marginBottom: '1.8rem', padding: '14px 18px', borderRadius: '12px' }}>
                  {erro}
                </div>
              )}

              <form onSubmit={handleConsultar} className="inscricao-form" style={{ gap: '1.8rem' }}>
                <div className="inscricao-grid-2" style={{ gap: '1.5rem' }}>
                  <div className="inscricao-field">
                    <label htmlFor="cpf" className="inscricao-label" style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                      CPF <span className="inscricao-required">*</span>
                    </label>
                    <input
                      id="cpf"
                      type="text"
                      className="inscricao-input"
                      placeholder="000.000.000-00"
                      value={cpf}
                      onChange={handleCpfChange}
                      maxLength={14}
                      disabled={loading}
                      required
                      style={{ padding: '15px 18px', fontSize: '1rem', borderRadius: '12px' }}
                    />
                  </div>

                  <div className="inscricao-field">
                    <label htmlFor="email" className="inscricao-label" style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                      E-mail <span className="inscricao-required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="inscricao-input"
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      required
                      style={{ padding: '15px 18px', fontSize: '1rem', borderRadius: '12px' }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      maxWidth: '460px',
                      padding: '18px 44px',
                      backgroundColor: '#0A193F',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '35px',
                      fontSize: '1.08rem',
                      fontWeight: '800',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: 'none',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseOver={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = '#16285A';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = '#0A193F';
                        e.currentTarget.style.transform = 'none';
                      }
                    }}
                  >
                    {loading ? 'Consultando...' : 'Consultar Inscrição'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { enviarInscricaoCongresso } from '@/lib/api';
import { formatCpf, validateCpf } from '@/lib/cpfValidator';
import CustomSelect from '@/components/CustomSelect';

const OSC_OPTIONS = [
  { value: 'SOBEI', label: 'SOBEI' },
  { value: 'OUTRA', label: 'Outra OSC' },
];

const UNIDADES_SOBEI = [
  'Acácias',
  'Araucárias',
  'Bela Vista',
  'CCINTER',
  'CEDESP',
  'Cedro',
  'Cerejeiras/Jacomo Tatto',
  'Imbuias',
  'Ipês',
  'Leblon',
  'Macaúbas',
  'Matriz',
  'Montanaro',
  'NCI Imbuias',
  'Oliveiras',
  'Orquídeas',
  'Sabiás',
  'Telecentro',
];

const UNIDADE_OPTIONS = UNIDADES_SOBEI.map((u) => ({ value: u, label: u }));

export default function InscricaoPage() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [tipoOsc, setTipoOsc] = useState('SOBEI');
  const [unidade, setUnidade] = useState('');
  const [outraOsc, setOutraOsc] = useState('');

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    if (!nomeCompleto.trim()) {
      setErro('Por favor, informe seu nome completo.');
      return;
    }

    if (!validateCpf(cpf)) {
      setErro('CPF inválido. Por favor, verifique os dígitos e digite um CPF válido.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErro('Por favor, informe um e-mail válido.');
      return;
    }

    if (tipoOsc === 'SOBEI' && !unidade) {
      setErro('Por favor, selecione sua unidade da SOBEI.');
      return;
    }

    if (tipoOsc === 'OUTRA' && !outraOsc.trim()) {
      setErro('Por favor, informe o nome da sua organização.');
      return;
    }

    setLoading(true);

    const payload = {
      nomeCompleto: nomeCompleto.trim(),
      cpf: cpf.trim(),
      email: email.trim(),
      tipoOsc,
      unidade: tipoOsc === 'SOBEI' ? unidade : null,
      outraOsc: tipoOsc === 'OUTRA' ? outraOsc.trim() : null,
    };

    const res = await enviarInscricaoCongresso(payload);
    setLoading(false);

    if (res.success) {
      setSucesso(true);
    } else {
      setErro(res.message || 'Ocorreu um erro ao realizar sua inscrição.');
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
              d="M -20,0 L 260,0 C 260,180 80,480 260,750 C 360,920 160,1180 60,1400 L -20,1400 Z"
              fill="#EDE5D3"
              opacity="0.5"
            />
            <path
              d="M -20,0 L 190,0 C 190,200 30,440 180,680 C 260,840 90,1080 -20,1250 L -20,1400 Z"
              fill="#F3ECE0"
              opacity="0.65"
            />
            <path
              d="M -20,0 L 120,0 C 120,300 40,700 150,950 C 80,1150 -20,1300 -20,1400 Z"
              fill="#FAF5EB"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Right Wave Flow */}
        <div className="schedule-bg-wave schedule-bg-wave--right">
          <svg viewBox="0 0 500 1400" preserveAspectRatio="none" className="schedule-bg-wave-svg">
            <path
              d="M 520,0 L 240,0 C 240,180 420,480 250,820 C 150,980 340,1220 450,1400 L 520,1400 Z"
              fill="#EDE5D3"
              opacity="0.45"
            />
            <path
              d="M 520,0 L 310,0 C 310,220 480,600 320,880 C 240,1040 420,1280 520,1350 L 520,1400 Z"
              fill="#F3ECE0"
              opacity="0.6"
            />
            <path
              d="M 520,0 L 380,0 C 380,300 450,850 350,1100 C 420,1260 520,1380 520,1400 Z"
              fill="#FAF5EB"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* 3. Conteúdo Central de Inscrição */}
      <div className="schedule-container" style={{ maxWidth: '940px', paddingTop: '3rem' }}>
        
        {/* Card Limpo e Espaçoso do Formulário */}
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
          {sucesso ? (
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
              
              {/* Informações Explícitas do Participante em Grid Limpo */}
              <div style={{ maxWidth: '640px', margin: '0 auto 1.8rem', textAlign: 'left' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.2rem 1.6rem',
                    padding: '1.6rem 0',
                    borderTop: '1px solid #E5E7EB',
                    borderBottom: '1px solid #E5E7EB',
                  }}
                >
                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>
                      Participante
                    </span>
                    <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0A193F' }}>
                      {nomeCompleto}
                    </span>
                  </div>

                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>
                      CPF
                    </span>
                    <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0A193F' }}>
                      {cpf}
                    </span>
                  </div>

                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>
                      E-mail
                    </span>
                    <span style={{ fontSize: '1.02rem', fontWeight: '600', color: '#0A193F', wordBreak: 'break-all' }}>
                      {email}
                    </span>
                  </div>

                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>
                      Instituição
                    </span>
                    <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0A193F' }}>
                      {tipoOsc === 'SOBEI' ? `SOBEI — ${unidade}` : outraOsc}
                    </span>
                  </div>
                </div>
              </div>

              {/* Orientação Explícita sobre Uso de E-mail e CPF para Consultas */}
              <div style={{ maxWidth: '560px', margin: '0 auto 1.8rem', padding: '12px 18px', backgroundColor: '#EFF6FF', borderRadius: '12px', border: '1px solid #BFDBFE', color: '#1E40AF', fontSize: '0.92rem', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>
                  <strong>Importante:</strong> Guarde o e-mail (<strong>{email}</strong>) e o CPF (<strong>{cpf}</strong>) cadastrados. Eles são utilizados para você consultar e validar sua inscrição a qualquer momento.
                </span>
              </div>

              <p className="inscricao-sucesso-instrucao" style={{ fontSize: '0.98rem', color: '#4B5563', maxWidth: '560px', margin: '0 auto 2.2rem', lineHeight: '1.6' }}>
                No dia do evento, compareça ao credenciamento na <strong>Av. Rubens Montanaro de Borba, 477, Jardim Regis</strong> com seu documento oficial com foto para retirar seu crachá e kit do congresso.
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

                <Link
                  href="/consulta"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '16px 28px',
                    backgroundColor: '#0A193F',
                    color: '#FFFFFF',
                    border: '1.5px solid #0A193F',
                    borderRadius: '35px',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#16285A';
                    e.currentTarget.style.borderColor = '#16285A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A193F';
                    e.currentTarget.style.borderColor = '#0A193F';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  Consultar Inscrição
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Cabeçalho Limpo do Formulário */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: '900', color: '#0A193F', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  Dados do Participante
                </h1>
                <p style={{ color: '#6b7280', fontSize: '1.02rem', lineHeight: '1.5' }}>
                  Preencha os campos abaixo para confirmar sua inscrição no congresso.
                </p>
              </div>

              {erro && (
                <div className="inscricao-alerta-erro" style={{ marginBottom: '1.8rem', padding: '14px 18px', borderRadius: '12px' }}>
                  {erro}
                </div>
              )}

              <form onSubmit={handleSubmit} className="inscricao-form" style={{ gap: '1.8rem' }}>
                {/* Nome Completo */}
                <div className="inscricao-field">
                  <label htmlFor="nomeCompleto" className="inscricao-label" style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                    Nome Completo <span className="inscricao-required">*</span>
                  </label>
                  <input
                    id="nomeCompleto"
                    type="text"
                    className="inscricao-input"
                    placeholder="Digite seu nome completo"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    disabled={loading}
                    required
                    style={{ padding: '15px 18px', fontSize: '1rem', borderRadius: '12px' }}
                  />
                </div>

                {/* CPF e E-mail */}
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

                {/* OSC e Condicional */}
                <div className="inscricao-grid-2" style={{ gap: '1.5rem' }}>
                  <div className="inscricao-field">
                    <label className="inscricao-label" style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                      Organização Social (OSC) <span className="inscricao-required">*</span>
                    </label>
                    <CustomSelect
                      value={tipoOsc}
                      onChange={(val) => {
                        setTipoOsc(val);
                        setUnidade('');
                        setOutraOsc('');
                      }}
                      options={OSC_OPTIONS}
                      placeholder="Selecione a OSC"
                      disabled={loading}
                    />
                  </div>

                  {tipoOsc === 'SOBEI' && (
                    <div className="inscricao-field inscricao-fade-in">
                      <label className="inscricao-label" style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                        Unidade SOBEI <span className="inscricao-required">*</span>
                      </label>
                      <CustomSelect
                        value={unidade}
                        onChange={(val) => setUnidade(val)}
                        options={UNIDADE_OPTIONS}
                        placeholder="Selecione sua unidade"
                        disabled={loading}
                        allowEmpty={true}
                        emptyLabel="Selecione sua unidade"
                      />
                    </div>
                  )}

                  {tipoOsc === 'OUTRA' && (
                    <div className="inscricao-field inscricao-fade-in">
                      <label htmlFor="outraOsc" className="inscricao-label" style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
                        Nome da Organização <span className="inscricao-required">*</span>
                      </label>
                      <input
                        id="outraOsc"
                        type="text"
                        className="inscricao-input"
                        placeholder="Digite o nome da organização"
                        value={outraOsc}
                        onChange={(e) => setOutraOsc(e.target.value)}
                        disabled={loading}
                        required
                        style={{ padding: '15px 18px', fontSize: '1rem', borderRadius: '12px' }}
                      />
                    </div>
                  )}
                </div>

                {/* Nota de Orientação sobre Consulta Futura */}
                <p style={{ fontSize: '0.88rem', color: '#6B7280', margin: '0.2rem 0 0', lineHeight: '1.4', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#D49B2A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>
                    O <strong>CPF</strong> e o <strong>e-mail</strong> informados serão utilizados para você consultar e validar sua inscrição a qualquer momento.
                  </span>
                </p>

                {/* Botão de Envio (Azul com Texto Branco) */}
                <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
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
                    {loading ? 'Processando Inscrição...' : 'Concluir Inscrição'}
                  </button>
                </div>

                {/* Link Discreto para Consultar */}
                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  <Link
                    href="/consulta"
                    style={{
                      color: '#4B5563',
                      fontSize: '0.92rem',
                      fontWeight: '600',
                      textDecoration: 'underline',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.color = '#0A193F'; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = '#4B5563'; }}
                  >
                    Já realizou sua inscrição? Consulte aqui
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

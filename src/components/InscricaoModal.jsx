'use client';

import { useState } from 'react';
import { enviarInscricaoCongresso } from '@/lib/api';
import { formatCpf, validateCpf } from '@/lib/cpfValidator';

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

export default function InscricaoModal({ isOpen, onClose }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [tipoOsc, setTipoOsc] = useState('SOBEI');
  const [unidade, setUnidade] = useState('');
  const [outraOsc, setOutraOsc] = useState('');

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  if (!isOpen) return null;

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
      setErro('Por favor, informe o nome da sua OSC.');
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

  const handleClose = () => {
    if (!loading) {
      setErro('');
      setSucesso(false);
      setNomeCompleto('');
      setCpf('');
      setEmail('');
      setTipoOsc('SOBEI');
      setUnidade('');
      setOutraOsc('');
      onClose();
    }
  };

  return (
    <div className="inscricao-modal-overlay" onClick={handleClose}>
      <div
        className="inscricao-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          className="inscricao-modal-close"
          onClick={handleClose}
          type="button"
          aria-label="Fechar"
        >
          &times;
        </button>

        {sucesso ? (
          <div className="inscricao-sucesso">
            <div className="inscricao-sucesso-icon">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="#10b981">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h2 className="inscricao-sucesso-title">Inscrição Confirmada!</h2>
            <p className="inscricao-sucesso-desc">
              Sua inscrição no <strong>XX Congresso de Educação Infantil SOBEI</strong> foi realizada com sucesso.
            </p>
            {/* Informações Explícitas */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                padding: '1.2rem 0',
                borderTop: '1px solid #E5E7EB',
                borderBottom: '1px solid #E5E7EB',
                textAlign: 'left',
                margin: '1.2rem 0',
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Participante
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0A193F' }}>
                  {nomeCompleto}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', marginBottom: '2px' }}>
                  CPF
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0A193F' }}>
                  {cpf}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', marginBottom: '2px' }}>
                  E-mail
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#0A193F', wordBreak: 'break-all' }}>
                  {email}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', marginBottom: '2px' }}>
                  OSC / Instituição
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0A193F' }}>
                  {tipoOsc === 'SOBEI' ? `SOBEI — ${unidade}` : outraOsc}
                </span>
              </div>
            </div>
            <p className="inscricao-sucesso-instrucao">
              No dia do evento, apresente seu documento com foto no credenciamento na <strong>Av. Rubens Montanaro de Borba, 459, Jardim Regis</strong> para retirada do seu kit.
            </p>
            <button
              className="inscricao-btn-submit"
              onClick={handleClose}
              type="button"
              style={{ marginTop: '1.5rem' }}
            >
              Concluir
            </button>
          </div>
        ) : (
          <>
            <div className="inscricao-modal-header">
              <span className="inscricao-modal-badge">XX CONGRESSO SOBEI</span>
              <h2 className="inscricao-modal-title">Ficha de Inscrição</h2>
              <p className="inscricao-modal-subtitle">
                Preencha os campos abaixo para garantir sua vaga no Congresso.
              </p>
            </div>

            {erro && (
              <div className="inscricao-alerta-erro">
                {erro}
              </div>
            )}

            <form onSubmit={handleSubmit} className="inscricao-form">
              {/* Nome Completo */}
              <div className="inscricao-field">
                <label htmlFor="nomeCompleto" className="inscricao-label">
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
                />
              </div>

              {/* CPF e E-mail */}
              <div className="inscricao-grid-2">
                <div className="inscricao-field">
                  <label htmlFor="cpf" className="inscricao-label">
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
                  />
                </div>

                <div className="inscricao-field">
                  <label htmlFor="email" className="inscricao-label">
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
                  />
                </div>
              </div>

              {/* OSC Dropdown */}
              <div className="inscricao-field">
                <label htmlFor="tipoOsc" className="inscricao-label">
                  Organização Social (OSC) <span className="inscricao-required">*</span>
                </label>
                <select
                  id="tipoOsc"
                  className="inscricao-select"
                  value={tipoOsc}
                  onChange={(e) => {
                    setTipoOsc(e.target.value);
                    setUnidade('');
                    setOutraOsc('');
                  }}
                  disabled={loading}
                >
                  <option value="SOBEI">SOBEI</option>
                  <option value="OUTRA">Outra OSC</option>
                </select>
              </div>

              {/* Condicional: Unidade SOBEI */}
              {tipoOsc === 'SOBEI' && (
                <div className="inscricao-field inscricao-fade-in">
                  <label htmlFor="unidade" className="inscricao-label">
                    Unidade SOBEI <span className="inscricao-required">*</span>
                  </label>
                  <select
                    id="unidade"
                    className="inscricao-select"
                    value={unidade}
                    onChange={(e) => setUnidade(e.target.value)}
                    disabled={loading}
                    required
                  >
                    <option value="">Selecione sua unidade</option>
                    {UNIDADES_SOBEI.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Condicional: Outra OSC */}
              {tipoOsc === 'OUTRA' && (
                <div className="inscricao-field inscricao-fade-in">
                  <label htmlFor="outraOsc" className="inscricao-label">
                    Nome da OSC <span className="inscricao-required">*</span>
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
                  />
                </div>
              )}

              {/* Botão de Envio */}
              <button
                type="submit"
                className="inscricao-btn-submit"
                disabled={loading}
              >
                {loading ? 'Processando Inscrição...' : 'Confirmar Inscrição'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

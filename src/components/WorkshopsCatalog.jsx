import React from 'react';
import { OFICINAS_DATA } from '@/lib/congressoData';

export default function WorkshopsCatalog() {
  return (
    <div className="workshops-list-container">
      {/* Banner de Horário das Oficinas */}
      <div className="workshops-time-banner">
        Todas as Oficinas acontecerão entre 14h e 17h30
      </div>

      {/* Lista de Linhas em Pílulas */}
      <div className="workshops-pill-list">
        {OFICINAS_DATA.map((oficina) => (
          <div key={oficina.id} className="workshop-pill-row">
            <div className="workshop-pill-speaker">
              {oficina.ministrante}
            </div>
            <div className="workshop-pill-theme">
              {oficina.tema}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/siteData';

/**
 * Botao Flutuante de WhatsApp (Sticky CTA)
 * Posicionado no canto inferior direito (bottom: 24px, right: 24px),
 * com icone vetorial de WhatsApp sobre fundo #111315 com borda #F5B014.
 */
export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={BRAND_INFO.whatsapp.baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento imediato via WhatsApp comercial Trinity Supply"
      style={{ bottom: '24px', right: '24px' }}
      className="fixed z-50 inline-flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#111315] hover:bg-[#1A1D20] active:scale-[0.97] text-white border-2 border-[#F5B014] shadow-[0_10px_28px_rgba(17,19,21,0.45)] transition-all group"
    >
      <span className="w-8 h-8 rounded-full bg-[#F5B014] text-[#111315] flex items-center justify-center shrink-0">
        <WhatsAppIcon className="w-5 h-5" />
      </span>
      <span className="hidden sm:inline-block pr-1 text-xs font-bold tracking-wide text-white group-hover:text-[#F5B014] transition-colors">
        Atendimento WhatsApp
      </span>
    </a>
  );
};

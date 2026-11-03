import React from 'react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/siteData';

/**
 * Botao Flutuante de WhatsApp (Sticky CTA)
 * Posicionado no canto inferior direito:
 * - Mobile (< 640px): fixed z-50 bottom-4 right-4 w-12 h-12 rounded-full
 * - Desktop (>= 640px): sm:bottom-6 sm:right-6 sm:w-auto sm:h-auto sm:px-4 sm:py-3 sm:rounded-full
 */
export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={BRAND_INFO.whatsapp.baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento imediato via WhatsApp comercial Trinity Supply"
      className="fixed z-50 bottom-4 right-4 w-12 h-12 sm:bottom-6 sm:right-6 sm:w-auto sm:h-auto sm:px-4 sm:py-3 flex items-center justify-center sm:inline-flex sm:gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl active:scale-[0.97] transition-all group"
    >
      <WhatsAppIcon className="w-6 h-6 shrink-0" />
      <span className="hidden sm:inline-block font-bold text-xs tracking-wide text-white">
        Atendimento WhatsApp
      </span>
    </a>
  );
};

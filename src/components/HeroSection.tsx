import React from 'react';
import { MapPin, Truck, Users } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative bg-[#FFFFFF] text-[#111827] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-[#E5E7EB]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-6 sm:space-y-7">
          {/* Headline Principal (H1) iniciando diretamente o fluxo textual sem pill badge */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] text-[#111827] tracking-tight leading-[1.12]">
            Abastecemos sua hamburgueria com os{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#111315] underline decoration-[#F5B014] decoration-[5px] sm:decoration-[6px] underline-offset-[6px]">
                melhores insumos e embalagens
              </span>
            </span>{' '}
            em um só lugar.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-[#4B5563] leading-relaxed max-w-3xl font-normal">
            Qualidade que impulsiona seu negócio. Fornecimento padronizado no atacado e varejo, entrega rápida e
            atendimento direto para hamburguerias, lanchonetes e restaurantes que não podem parar.
          </p>

          {/* Grupo de CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            {/* Botao Primario */}
            <a
              href={BRAND_INFO.whatsapp.heroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#F5B014] hover:bg-[#D99B0E] active:scale-[0.98] text-[#111315] font-bold text-sm sm:text-base transition-all shadow-[0_6px_20px_rgba(245,176,20,0.28)] whitespace-nowrap"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Solicitar Atendimento via WhatsApp</span>
            </a>

            {/* Botao Secundario */}
            <a
              href="#localizacao"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F8F9FA] active:scale-[0.98] border-2 border-[#111315] text-[#111315] font-semibold text-sm sm:text-base transition-all whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 shrink-0 text-[#111315]" />
              <span>Ver Localização no Mapa</span>
            </a>
          </div>

          {/* Indicadores de Credibilidade - Apenas 2 metricas oficiais: Instagram e Entrega Rapida */}
          <div className="pt-8 sm:pt-10 border-t border-[#E5E7EB]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-[#111827] leading-snug">
                    +4.500 Seguidores e Parceiros no Instagram
                  </p>
                  <p className="text-xs text-[#4B5563] mt-0.5">
                    Comunidade ativa de food service
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-[#111827] leading-snug">
                    Atendimento Direto e Entrega Rápida
                  </p>
                  <p className="text-xs text-[#4B5563] mt-0.5">
                    Logística ágil para Guarulhos e região
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

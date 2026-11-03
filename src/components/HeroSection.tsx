import React from 'react';
import { MapPin, ShieldCheck, Truck, Users } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative bg-[#FFFFFF] text-[#111827] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de duas colunas no desktop: 60% (7/12) esquerda, 40% (5/12) direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda (60%) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Tag Superior (Pill Badge) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E5E7EB]">
              <span
                className="w-2.5 h-2.5 rounded-full bg-[#F5B014] ring-4 ring-[#F5B014]/20 shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                DISTRIBUIDORA FOOD SERVICE EM GUARULHOS - SP
              </span>
            </div>

            {/* Headline Principal (H1) */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-[#111827] tracking-tight leading-[1.14]">
              Abastecemos sua hamburgueria com os{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#111315] underline decoration-[#F5B014] decoration-[5px] underline-offset-[6px]">
                  melhores insumos e embalagens
                </span>
              </span>{' '}
              em um só lugar.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              Qualidade que impulsiona seu negócio. Fornecimento B2B padronizado, entrega rápida e
              atendimento direto para hamburguerias, lanchonetes e restaurantes que não podem parar.
            </p>

            {/* Grupo de CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              {/* Botao Primario */}
              <a
                href={BRAND_INFO.whatsapp.heroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#F5B014] hover:bg-[#D99B0E] active:scale-[0.98] text-[#111315] font-bold text-sm sm:text-base transition-all shadow-[0_6px_20px_rgba(245,176,20,0.28)] whitespace-nowrap"
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

            {/* Indicadores de Credibilidade (Barra de Metricas Rapidas) */}
            <div className="pt-4 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                  <div className="w-9 h-9 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                      +4.500 Seguidores e Parceiros no Instagram
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                  <div className="w-9 h-9 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                      Atendimento Direto e Entrega Rápida
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                  <div className="w-9 h-9 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                      Sede Própria com Retirada e Estacionamento em Guarulhos/SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita (40%): Moldura Institucional com Fachada e Card Flutuante */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] p-3 sm:p-4 shadow-[0_16px_40px_rgba(17,24,39,0.07)]">
              {/* Barra superior de moldura arquitetonica */}
              <div className="flex items-center justify-between px-3 py-2 mb-2.5 rounded-lg bg-[#111315] text-white border-b-2 border-[#F5B014]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B014]">
                  Sede Oficial Guarulhos / SP
                </span>
                <span className="text-[11px] text-[#9CA3AF] font-medium">
                  Pronta Entrega B2B
                </span>
              </div>

              {/* Foto Principal da Fachada Fisica */}
              <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#111315]">
                <img
                  src="/images/fachada.png"
                  alt="Fachada fisica da sede da Trinity Supply Distribuidora De Paes e Embalagens em Guarulhos - SP"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                />
              </div>

              {/* Segunda Foto de Detalhe 3D da Fachada + Especificacao Operacional */}
              <div className="mt-3 grid grid-cols-12 gap-3 items-stretch">
                <div className="col-span-5 overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#111315]">
                  <img
                    src="/images/fachada-2.png"
                    alt="Detalhe do letreiro 3D da Trinity Supply - Tudo para sua hamburgueria em um so lugar"
                    className="w-full h-28 object-cover object-center"
                  />
                </div>
                <div className="col-span-7 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] p-3.5 flex flex-col justify-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B88208]">
                    Estrutura Food Service
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#111827] mt-1 leading-snug">
                    Galpão com recuo frontal próprio para carga e retirada rápida.
                  </p>
                </div>
              </div>

              {/* Card Flutuante Branco com Sombra Suave exigido no Passo 2 */}
              <div className="mt-3.5 rounded-xl bg-[#FFFFFF] border-l-4 border-l-[#F5B014] border border-[#E5E7EB] p-4 shadow-[0_10px_25px_rgba(17,24,39,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5B014] shrink-0" />
                  <p className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                    Distribuidora de Pães e Embalagens - Abastecimento Completo Food Service
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

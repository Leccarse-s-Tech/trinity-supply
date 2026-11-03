import React from 'react';
import { Building2, MapPin, ShieldCheck, Store, Truck, Users } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
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

          {/* Coluna Direita (40%): Composicao Grafica Limpa em Vetor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl facade-surface bg-[#111315] border border-white/10 p-6 sm:p-8 text-white shadow-[0_20px_50px_rgba(17,19,21,0.25)]">
              {/* Friso superior amarelo sutil no topo do card */}
              <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#F5B014] rounded-full" aria-hidden="true" />

              {/* Logotipo Oficial em Amarelo (#F5B014) */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-2 pb-5 border-b border-white/10">
                <BrandLogo size="lg" />
                <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 font-medium">
                  Tudo para sua <span className="text-[#F5B014] font-semibold">hamburgueria</span> em um só lugar
                </p>
              </div>

              {/* Selo de Destaque: "Distribuidora de Paes e Embalagens" */}
              <div className="my-5">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#F5B014] shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5B014]">
                    Distribuidora de Pães e Embalagens
                  </span>
                </div>
              </div>

              {/* 3 Badges Minimalistas com Icones SVG */}
              <div className="space-y-3">
                {/* 1. Atendimento Atacado e Varejo */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#F5B014] text-[#111315] flex items-center justify-center shrink-0">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">
                      Atendimento Atacado e Varejo
                    </span>
                    <span className="block text-xs text-[#9CA3AF]">
                      Fornecimento flexível para reposição e demandas programadas
                    </span>
                  </div>
                </div>

                {/* 2. Retirada no Galpao em Guarulhos/SP */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#F5B014] text-[#111315] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">
                      Retirada no Galpão em Guarulhos/SP
                    </span>
                    <span className="block text-xs text-[#9CA3AF]">
                      Estoque próprio com recuo frontal para estacionamento
                    </span>
                  </div>
                </div>

                {/* 3. Pedidos e Cotacoes via WhatsApp */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#F5B014] text-[#111315] flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">
                      Pedidos e Cotações via WhatsApp
                    </span>
                    <span className="block text-xs text-[#9CA3AF]">
                      Canal comercial ágil com atendimento direto sem burocracia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

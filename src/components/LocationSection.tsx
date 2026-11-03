import React from 'react';
import { Building, Compass, MapPin, Navigation, Store } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/siteData';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="localizacao"
      className="bg-[#FFFFFF] text-[#111827] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecalho da Secao */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight leading-tight">
            Localização e Estrutura de Atendimento em Guarulhos
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Sede estruturada para atendimento comercial B2B, retirada rápida de pedidos e suporte
            direto à sua operação de food service.
          </p>
        </div>

        {/* Grid de Duas Colunas: Ficha Institucional (Esquerda) e Iframe Google Maps (Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Coluna Esquerda (6/12): Ficha Institucional de Localizacao e Atendimento */}
          <div className="lg:col-span-6 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Nome Oficial no Google Maps */}
              <div className="pb-4 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B88208] mb-1">
                  <Store className="w-4 h-4 text-[#F5B014]" />
                  <span>Nome Oficial no Google Maps</span>
                </div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#111827]">
                  {BRAND_INFO.officialName}
                </h3>
              </div>

              {/* Categoria Oficial */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                    Categoria Oficial
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#111827] mt-0.5">
                    {BRAND_INFO.categoryLabel}
                  </p>
                </div>
              </div>

              {/* Cidade / Regiao e Coordenadas Oficiais */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                    Cidade / Região
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#111827] mt-0.5">
                    {BRAND_INFO.cityRegion}{' '}
                    <span className="text-xs sm:text-sm font-normal text-[#4B5563]">
                      (Coordenadas Oficiais: {BRAND_INFO.coordinates.display})
                    </span>
                  </p>
                </div>
              </div>

              {/* Estrutura Local */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                    Estrutura Local
                  </span>
                  <p className="text-sm sm:text-base text-[#111827] mt-0.5 leading-relaxed">
                    {BRAND_INFO.localStructure}
                  </p>
                </div>
              </div>

              {/* Canais de Atendimento Direto */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-3">
                  Canais de Atendimento Direto
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={BRAND_INFO.whatsapp.baseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#F5B014] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold text-[#4B5563]">
                        WhatsApp Comercial
                      </span>
                      <span className="block text-sm font-bold text-[#111827] truncate">
                        {BRAND_INFO.whatsapp.formatted}
                      </span>
                    </div>
                  </a>

                  <a
                    href={BRAND_INFO.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#F5B014] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold text-[#4B5563]">
                        Instagram Oficial
                      </span>
                      <span className="block text-sm font-bold text-[#111827] truncate">
                        {BRAND_INFO.instagram.handle}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Botoes de Acao na Ficha */}
            <div className="mt-7 pt-5 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Botao Primario (Amarelo): Chamar no WhatsApp Agora */}
              <a
                href={BRAND_INFO.whatsapp.baseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F5B014] hover:bg-[#D99B0E] active:scale-[0.98] text-[#111315] font-bold text-sm sm:text-base transition-all shadow-[0_4px_14px_rgba(245,176,20,0.28)] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp Agora</span>
              </a>

              {/* Botao Secundario (Contorno Escuro): Tracar Rota no Google Maps */}
              <a
                href={BRAND_INFO.googleMaps.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#111315] text-[#111315] hover:text-[#FFFFFF] active:scale-[0.98] border-2 border-[#111315] font-semibold text-sm sm:text-base transition-all whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita (6/12): Iframe Interativo do Google Maps */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full min-h-[420px] rounded-[12px] border border-[#E5E7EB] shadow-[0_8px_28px_rgba(17,24,39,0.06)] overflow-hidden bg-[#F8F9FA] flex flex-col">
              <div className="px-4 py-2.5 bg-[#111315] text-white border-b-2 border-[#F5B014] flex items-center justify-between text-xs">
                <span className="font-bold text-[#F5B014] uppercase tracking-wider">
                  Mapa Interativo Oficial
                </span>
                <span className="text-[#9CA3AF]">Guarulhos / SP</span>
              </div>
              <div className="flex-1 min-h-[420px]">
                <iframe
                  title="Localizacao Trinity Supply Distribuidora De Paes e Embalagens em Guarulhos"
                  src={BRAND_INFO.googleMaps.embedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0, height: '100%', minHeight: '420px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

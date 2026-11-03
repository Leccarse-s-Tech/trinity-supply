import React from 'react';
import { Building, MapPin, Navigation } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/siteData';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="localizacao"
      className="bg-[#FFFFFF] text-[#111827] py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch w-full">
          {/* Coluna Esquerda (6/12): Ficha Institucional Enxuta sem Duplicacoes */}
          <div className="lg:col-span-6 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Razao Social e Nome Institucional */}
              <div className="pb-4 border-b border-[#E5E7EB]">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111827] leading-snug">
                  {BRAND_INFO.officialName}
                </h3>
              </div>

              {/* Segmento */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                    Segmento
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#111827] mt-0.5">
                    Atacado e Varejo de Insumos para Hamburguerias e Food Service
                  </p>
                </div>
              </div>

              {/* Cidade */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                    Cidade
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#111827] mt-0.5">
                    Guarulhos - SP{' '}
                    <span className="font-normal text-[#4B5563]">
                      (Sede própria com recuo para carga e estacionamento)
                    </span>
                  </p>
                </div>
              </div>

              {/* Canal Social: Card com icone do Instagram + link para @trinitysupply_oficial */}
              <div className="pt-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-2.5">
                  Canal Social Oficial
                </span>
                <a
                  href={BRAND_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#F5B014] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
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

            {/* Botoes de Acao Direta (Abaixo dos dados institucionais, em linha flexivel) */}
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-6 pt-5 border-t border-[#E5E7EB]">
              {/* Botao Primario (Amarelo #F5B014, texto preto em negrito): Chamar no WhatsApp (11 94083-8995) */}
              <a
                href={BRAND_INFO.whatsapp.baseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center text-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F5B014] hover:bg-[#D99B0E] active:scale-[0.98] text-[#111315] font-bold text-sm sm:text-base transition-all shadow-[0_4px_14px_rgba(245,176,20,0.28)]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp (11 94083-8995)</span>
              </a>

              {/* Botao Secundario (Fundo branco, borda neutra cinza): Abrir no Google Maps */}
              <a
                href="https://maps.google.com/?q=-23.399886,-46.4415113"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center text-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#111315] text-[#111315] hover:text-[#FFFFFF] active:scale-[0.98] border border-[#E5E7EB] hover:border-[#111315] font-semibold text-sm sm:text-base transition-all"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita (6/12): Iframe Interativo do Google Maps (Sem barra escura de cabecalho) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full min-h-[450px] rounded-[12px] border border-[#E5E7EB] shadow-[0_8px_28px_rgba(17,24,39,0.06)] overflow-hidden bg-[#F8F9FA]">
              <iframe
                title="Localizacao Trinity Supply"
                src="https://maps.google.com/maps?q=-23.399886,-46.4415113&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0, height: '100%', minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

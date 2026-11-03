import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/siteData';

const FOOTER_NAV_LINKS = [
  { label: 'Início', href: '#sobre' },
  { label: 'Categorias de Insumos', href: '#insumos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
] as const;

export const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const resolveHref = (anchor: string) => (isHomePage ? anchor : `/${anchor}`);

  return (
    <div className="bg-[#FFFFFF]">
      {/* 1. Faixa Pre-Footer de Conversao - Ocupando a largura total util */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <div
          className="w-full relative overflow-hidden rounded-2xl facade-surface bg-[#111315] text-white p-8 lg:p-12 shadow-[0_18px_45px_rgba(17,19,21,0.18)]"
          style={{ borderTop: '4px solid #F5B014' }}
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full">
            <div className="w-full lg:max-w-3xl space-y-3">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Pronto para elevar o padrão de abastecimento da sua hamburgueria?
              </h2>
              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
                Fale diretamente com nossa equipe comercial em Guarulhos e receba atendimento
                imediato pelo WhatsApp.
              </p>
            </div>

            <div className="w-full sm:w-auto lg:shrink-0 flex justify-start lg:justify-end">
              <a
                href={BRAND_INFO.whatsapp.bannerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#F5B014] hover:bg-[#D99B0E] active:scale-[0.98] text-[#111315] font-bold text-sm sm:text-base transition-all shadow-[0_6px_22px_rgba(245,176,20,0.32)] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Iniciar Conversa no WhatsApp (11 94083-8995)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Footer Escuro (#111315) - Fechamento Arquitetonico Fiel a Fachada */}
      <footer className="facade-surface bg-[#111315] text-white border-t-4 border-[#F5B014]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            {/* Coluna 1 (Identidade - 5/12) */}
            <div className="md:col-span-5 space-y-4">
              <Link to="/" aria-label="Trinity Supply - Inicio" className="inline-block">
                <BrandLogo size="md" />
              </Link>

              <div className="facade-plaque inline-block px-3.5 py-1.5 rounded border border-white/10">
                <p className="text-xs sm:text-sm font-medium text-white">
                  Tudo para sua{' '}
                  <strong className="font-bold text-[#F5B014]">hamburgueria</strong>{' '}
                  em um só lugar
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-md">
                Distribuidora de Pães, Insumos e Embalagens para Food Service em Guarulhos/SP.
              </p>
            </div>

            {/* Coluna 2 (Navegacao Rapida - 3/12) */}
            <div className="md:col-span-3 space-y-4">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#F5B014]">
                Navegação Rápida
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={resolveHref(link.href)}
                      className="text-sm text-[#FFFFFF] hover:text-[#F5B014] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 (Contato Direto - 4/12) */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#F5B014]">
                Contato Direto
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={BRAND_INFO.whatsapp.baseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-white hover:text-[#F5B014] transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#F5B014] shrink-0" />
                    <span>
                      <strong className="font-semibold text-[#9CA3AF]">WhatsApp:</strong>{' '}
                      {BRAND_INFO.whatsapp.display}
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={BRAND_INFO.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-white hover:text-[#F5B014] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#F5B014] shrink-0" />
                    <span>
                      <strong className="font-semibold text-[#9CA3AF]">Instagram:</strong>{' '}
                      {BRAND_INFO.instagram.handle}
                    </span>
                  </a>
                </li>

                <li className="pt-2 border-t border-white/10">
                  <div className="flex items-start gap-2.5 text-white">
                    <MapPin className="w-4 h-4 text-[#F5B014] shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <p>
                        <strong className="font-semibold text-[#9CA3AF]">Endereço:</strong>{' '}
                        {BRAND_INFO.address.street}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#9CA3AF]">Bairro:</strong>{' '}
                        {BRAND_INFO.address.neighborhood}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#9CA3AF]">Cidade/UF:</strong>{' '}
                        {BRAND_INFO.address.cityState}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#9CA3AF]">CEP:</strong>{' '}
                        {BRAND_INFO.address.cep}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Direitos Autorais */}
        <div className="bg-[#1A1D20] border-t border-white/10 py-5">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-[#9CA3AF]">
              Trinity Supply Distribuidora De Pães e Embalagens. Todos os direitos reservados.
              Página institucional informativa.
            </p>
            <p className="text-xs text-[#9CA3AF]">Guarulhos - SP</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

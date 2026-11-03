import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BrandLogo, TrinityEmblemSvg } from './BrandLogo';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO, NAV_LINKS } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const resolveHref = (anchor: string) => (isHomePage ? anchor : `/${anchor}`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full shadow-[0_8px_28px_rgba(0,0,0,0.38)]">
      {/* 1. Friso Superior Amarelo (height: 4px, #F5B014) - Recolhe suavemente ao rolar */}
      <div
        className={`w-full bg-[#F5B014] transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-[4px] opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* 2. Fachada Digital Expandida (#111315) - Ao rolar (> 60px): h-0 opacity-0 overflow-hidden pointer-events-none transition-all duration-300 */}
      <div
        className={`relative facade-surface bg-[#111315] text-white transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'h-0 opacity-0 overflow-hidden pointer-events-none'
            : 'h-auto opacity-100 overflow-hidden'
        }`}
      >
        {/* Simulacao arquitetonica dos 8 spots circulares de LED no beiral superior da fachada */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-8 gap-2"
          aria-hidden="true"
        >
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <div className="w-3.5 h-1 rounded-b-full bg-[#FFF7D6]/80 shadow-[0_0_8px_2px_rgba(245,176,20,0.45)]" />
              <div className="w-full h-14 led-spot-beam opacity-85" />
            </div>
          ))}
        </div>

        {/* Container Principal da Fachada Digital Expandida */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-3 lg:py-3.5">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            {/* Esquerda: Logotipo Oficial TRINITY SUPPLY */}
            <Link
              to="/"
              aria-label="Trinity Supply - Voltar ao inicio"
              className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B014] rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BrandLogo size="md" />
            </Link>

            {/* Centro (Desktop XL): Placa de Assinatura Institucional em Relevo */}
            <div className="hidden xl:flex items-center justify-center">
              <div className="facade-plaque px-4 py-1.5 rounded-md border border-white/10">
                <p className="text-xs 2xl:text-sm font-medium tracking-wide whitespace-nowrap text-white">
                  Tudo para sua{' '}
                  <strong className="font-bold text-[#F5B014]">hamburgueria</strong>{' '}
                  em um só lugar
                </p>
              </div>
            </div>

            {/* Direita (Desktop LG+): Links de Navegacao Interna + CTA Falar com Consultor */}
            <nav
              className="hidden lg:flex items-center gap-5 xl:gap-6"
              aria-label="Navegacao principal"
            >
              <ul className="flex items-center gap-4 xl:gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={resolveHref(link.href)}
                      className="text-sm font-medium text-white hover:text-[#F5B014] transition-colors whitespace-nowrap py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={BRAND_INFO.whatsapp.consultantUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5B014] hover:bg-[#D99B0E] active:scale-[0.98] text-[#111315] font-bold text-sm tracking-tight transition-all shadow-[0_2px_10px_rgba(245,176,20,0.3)] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Falar com Consultor</span>
              </a>
            </nav>

            {/* Botao Menu Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BRAND_INFO.whatsapp.consultantUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#F5B014] hover:bg-[#D99B0E] text-[#111315] font-bold text-xs whitespace-nowrap"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Falar com Consultor</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Fechar menu de navegacao' : 'Abrir menu de navegacao'}
                className="p-2 rounded-md text-white hover:text-[#F5B014] hover:bg-white/5 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5B014]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Placa de Assinatura Institucional Visivel em Telas Menores que XL */}
          <div className="mt-2.5 xl:hidden flex justify-center">
            <div className="facade-plaque w-full sm:w-auto px-3.5 py-1 rounded border border-white/10 text-center">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-white">
                Tudo para sua{' '}
                <strong className="font-bold text-[#F5B014]">hamburgueria</strong>{' '}
                em um só lugar
              </p>
            </div>
          </div>
        </div>

        {/* Menu Mobile Retratil */}
        {mobileMenuOpen && (
          <nav
            className="lg:hidden border-t border-white/10 bg-[#111315] px-4 pt-3 pb-4 space-y-3"
            aria-label="Menu mobile"
          >
            <ul className="grid grid-cols-1 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={resolveHref(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-md text-sm font-medium text-white hover:bg-white/5 hover:text-[#F5B014] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <a
                href={BRAND_INFO.whatsapp.consultantUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#F5B014] hover:bg-[#D99B0E] text-[#111315] font-bold text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Falar com Consultor</span>
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* 3. Faixa Secundaria Fixa / Sub-barra da Marquise */}
      <div
        className={`w-full bg-[#1A1D20] border-t-2 border-[#F5B014] shadow-md transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 h-11'
            : 'relative h-9 sm:h-10'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs sm:text-sm">
          {/* Divisao Tripartite - Esquerda: Instagram @trinitysupply_oficial */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <a
              href={BRAND_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#F5B014] transition-colors font-medium truncate"
              aria-label="Instagram oficial @trinitysupply_oficial"
            >
              <InstagramIcon className="w-4 h-4 text-[#F5B014] shrink-0" />
              <span className="truncate">{BRAND_INFO.instagram.handle}</span>
            </a>
          </div>

          {/* Divisao Tripartite - Centro: Logotipo Compacto da Trinity Supply surgindo com transicao suave ao rolar */}
          <div className="flex items-center justify-center px-2">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 transition-all duration-300 ${
                isScrolled
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-90 pointer-events-none'
              }`}
              aria-label="Trinity Supply - Inicio"
            >
              <TrinityEmblemSvg className="w-6 h-6 shrink-0" />
              <span className="font-display font-black text-xs sm:text-sm tracking-tight text-[#F5B014] whitespace-nowrap">
                TRINITY SUPPLY
              </span>
            </Link>
          </div>

          {/* Divisao Tripartite - Direita: WhatsApp 11 94083-8995 */}
          <div className="flex-1 flex items-center justify-end min-w-0">
            <a
              href={BRAND_INFO.whatsapp.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#F5B014] transition-colors font-semibold whitespace-nowrap"
              aria-label="WhatsApp comercial 11 94083-8995"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#F5B014] shrink-0" />
              <span>{BRAND_INFO.whatsapp.display}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

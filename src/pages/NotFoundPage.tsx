import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, PackageCheck } from 'lucide-react';
import { LogoBoxZero } from '../components/BrandLogo';
import { WhatsAppIcon } from '../components/Icons';
import { BRAND_INFO } from '../data/siteData';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="bg-[#FFFFFF] text-[#111827] py-16 sm:py-24 lg:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag Institucional */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] mb-8">
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#F5B014]"
            aria-hidden="true"
          />
          <span className="text-xs font-bold uppercase tracking-wider text-[#111827]">
            ERRO 404 - ROTA NÃO ENCONTRADA
          </span>
        </div>

        {/* Composicao Tipografica 4 [CAIXA DO LOGO COMO 0] 4 */}
        <div
          className="flex items-center justify-center gap-2 sm:gap-5 md:gap-7 my-2 select-none"
          aria-label="Codigo 404 com o zero representado pela caixa 3D do logotipo da Trinity Supply"
        >
          <span className="font-display font-black text-[104px] sm:text-[148px] md:text-[180px] leading-none text-[#111315] drop-shadow-[4px_6px_0px_#F5B014]">
            4
          </span>

          {/* O digito 0 substituido pela Caixa 3D e Hexagono Oficial do Logotipo Trinity Supply */}
          <LogoBoxZero className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48" />

          <span className="font-display font-black text-[104px] sm:text-[148px] md:text-[180px] leading-none text-[#111315] drop-shadow-[4px_6px_0px_#F5B014]">
            4
          </span>
        </div>

        {/* Explicacao Institucional */}
        <h1 className="mt-6 font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight">
          Rota não encontrada em nosso endereço digital
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          A página que você tentou acessar não existe ou foi alterada. Mas o abastecimento de pães,
          insumos e embalagens para a sua hamburgueria continua disponível em um só lugar.
        </p>

        {/* Botoes de Acao */}
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#111315] hover:bg-[#1A1D20] text-[#FFFFFF] font-bold text-sm sm:text-base transition-all border-2 border-[#111315]"
          >
            <ArrowLeft className="w-4 h-4 text-[#F5B014] shrink-0" />
            <span>Voltar para o Início</span>
          </Link>

          <a
            href={BRAND_INFO.whatsapp.consultantUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#F5B014] hover:bg-[#D99B0E] text-[#111315] font-bold text-sm sm:text-base transition-all shadow-[0_6px_20px_rgba(245,176,20,0.28)]"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Falar com Consultor no WhatsApp</span>
          </a>
        </div>

        {/* Atalhos Rapidos Institucionais */}
        <div className="mt-12 pt-8 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          <Link
            to="/#insumos"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#F5B014] transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-bold text-[#111827]">
                Linha de Insumos e Embalagens
              </span>
              <span className="block text-xs text-[#4B5563]">
                Conheça as 6 categorias de abastecimento B2B
              </span>
            </div>
          </Link>

          <Link
            to="/#localizacao"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#F5B014] transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-bold text-[#111827]">
                Localização em Guarulhos - SP
              </span>
              <span className="block text-xs text-[#4B5563]">
                Galpão com pronta entrega e estacionamento frontal
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LogoBoxZero } from '../components/BrandLogo';
import { WhatsAppIcon } from '../components/Icons';
import { BRAND_INFO } from '../data/siteData';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto text-center w-full">
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
          <span className="font-display font-black text-[96px] sm:text-[140px] md:text-[170px] leading-none text-[#111315] drop-shadow-[4px_6px_0px_#F5B014]">
            4
          </span>

          {/* O digito 0 substituido pela Caixa 3D e Hexagono Oficial do Logotipo Trinity Supply */}
          <LogoBoxZero className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44" />

          <span className="font-display font-black text-[96px] sm:text-[140px] md:text-[170px] leading-none text-[#111315] drop-shadow-[4px_6px_0px_#F5B014]">
            4
          </span>
        </div>

        {/* Titulo Oficial */}
        <h1 className="mt-6 font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight">
          Rota não encontrada em nosso endereço digital
        </h1>

        {/* Descricao Oficial */}
        <p className="mt-4 text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto leading-relaxed">
          A página procurada não existe ou foi descontinuada. O abastecimento para a sua hamburgueria
          continua disponível diretamente com a nossa equipe.
        </p>

        {/* Botoes de Acao */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
          {/* Primario: Voltar ao Inicio */}
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111315] hover:bg-[#1A1D20] text-[#F5B014] font-bold text-sm sm:text-base transition-all border border-[#111315]"
          >
            <ArrowLeft className="w-4 h-4 text-[#F5B014] shrink-0" />
            <span>Voltar ao Início</span>
          </Link>

          {/* Secundario: Falar no WhatsApp */}
          <a
            href={BRAND_INFO.whatsapp.baseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#111827] border border-[#E5E7EB] hover:border-[#111315] font-semibold text-sm sm:text-base transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#111315] shrink-0" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
};

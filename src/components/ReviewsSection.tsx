import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GoogleMapsBadgeIcon, StarFilledIcon } from './Icons';
import { BRAND_INFO, GOOGLE_FIVE_STAR_REVIEWS } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="avaliacoes"
      className="bg-[#F8F9FA] text-[#111827] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Cabecalho da Secao */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          {/* Badge Google SVG + AVALIACOES VERIFICADAS NO GOOGLE MAPS */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E7EB] mb-4 shadow-xs">
            <GoogleMapsBadgeIcon className="w-4 h-4 text-[#111315] shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              AVALIAÇÕES VERIFICADAS NO GOOGLE MAPS
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight leading-tight">
            A confiança de quem abastece com a Trinity Supply
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Avaliações 5 estrelas de clientes e parceiros que contam com nossa estrutura em
            Guarulhos.
          </p>
        </div>

        {/* 2. Grid de Cards de Avaliacao (Exclusivamente 5 Estrelas Legitimas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_FIVE_STAR_REVIEWS.map((review, index) => (
            <article
              key={`${review.firstName}-${index}`}
              className="bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EB] p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(17,24,39,0.04)]"
            >
              <div>
                {/* Linha de 5 estrelas preenchidas com o amarelo oficial (#F5B014) */}
                <div
                  className="flex items-center gap-1 text-[#F5B014] mb-4"
                  aria-label="Avaliacao 5 de 5 estrelas"
                >
                  {Array.from({ length: review.rating }).map((_, starIdx) => (
                    <StarFilledIcon key={starIdx} className="w-5 h-5 text-[#F5B014]" />
                  ))}
                </div>

                {/* Texto do depoimento em aspas, tamanho 14px ou 15px, cor #4B5563 */}
                <blockquote className="text-[14px] sm:text-[15px] text-[#4B5563] leading-relaxed font-normal">
                  &ldquo;{review.comment}&rdquo;
                </blockquote>
              </div>

              {/* Nome do cliente em negrito (#111827) acompanhado do selo discreto */}
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#111315] text-[#F5B014] font-display font-bold text-xs flex items-center justify-center shrink-0">
                    {review.firstName.charAt(0).toUpperCase()}
                  </div>
                  <p className="font-display font-bold text-sm sm:text-base text-[#111827] leading-tight">
                    {review.firstName}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8F9FA] border border-[#E5E7EB] text-[11px] font-semibold text-[#4B5563]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88208] shrink-0" />
                  <span>Avaliação 5 Estrelas no Google Maps</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* 3. Botao de Verificacao Externa */}
        <div className="mt-10 flex justify-start sm:justify-center">
          <a
            href={BRAND_INFO.googleMaps.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#111315] text-[#111315] hover:text-[#FFFFFF] border border-[#111315] font-semibold text-sm sm:text-base transition-colors shadow-xs"
          >
            <GoogleMapsBadgeIcon className="w-4 h-4 text-[#F5B014] shrink-0" />
            <span>Ver Perfil Oficial no Google Maps</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

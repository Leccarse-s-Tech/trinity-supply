import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GoogleMapsBadgeIcon, StarFilledIcon } from './Icons';
import { BRAND_INFO, GOOGLE_FIVE_STAR_REVIEWS } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = carouselRef.current.firstElementChild as HTMLElement | null;
    if (card) {
      const cardWidth = card.offsetWidth + 24;
      const currentIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(currentIndex, 0), GOOGLE_FIVE_STAR_REVIEWS.length - 1));
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.firstElementChild as HTMLElement | null;
    if (card) {
      const cardWidth = card.offsetWidth + 24;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.firstElementChild as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 24 : 340;
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.firstElementChild as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 24 : 340;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="avaliacoes"
      className="bg-[#F8F9FA] text-[#111827] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]"
      aria-label="Avaliações de clientes no Google Maps"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* 1. Cabecalho da Secao sem pill badge e com subtitulo conciso */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight leading-tight">
              A confiança de quem abastece com a Trinity Supply
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Avaliações 5 estrelas de clientes e parceiros no Google Maps.
            </p>
          </div>

          {/* Botoes de Navegacao Anterior / Proximo do Carrossel */}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Avaliação anterior"
              className="w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#111315] hover:bg-[#111315] hover:text-white disabled:opacity-40 disabled:hover:bg-[#FFFFFF] disabled:hover:text-inherit disabled:hover:border-[#E5E7EB] disabled:cursor-not-allowed text-[#111315] flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Próxima avaliação"
              className="w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#111315] hover:bg-[#111315] hover:text-white disabled:opacity-40 disabled:hover:bg-[#FFFFFF] disabled:hover:text-inherit disabled:hover:border-[#E5E7EB] disabled:cursor-not-allowed text-[#111315] flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Trilho do Carrossel de Cards de Avaliacao */}
        <div
          ref={carouselRef}
          role="region"
          aria-roledescription="carrossel"
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {GOOGLE_FIVE_STAR_REVIEWS.map((review, index) => (
            <article
              key={`${review.firstName}-${index}`}
              className="snap-start shrink-0 w-[88vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#FFFFFF] rounded-[12px] border border-[#E5E7EB] p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(17,24,39,0.04)] hover:border-[#F5B014] transition-colors"
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
                <blockquote className="text-[14px] sm:text-[15px] text-[#4B5563] leading-relaxed font-normal min-h-[4.5rem]">
                  &ldquo;{review.comment}&rdquo;
                </blockquote>
              </div>

              {/* Nome do cliente em negrito (#111827) sem tags redundantes */}
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#111315] text-[#F5B014] font-display font-bold text-xs flex items-center justify-center shrink-0">
                  {review.firstName.charAt(0).toUpperCase()}
                </div>
                <p className="font-display font-bold text-sm sm:text-base text-[#111827] leading-tight">
                  {review.firstName}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Indicadores Visuais de Posicao (Pontos do Carrossel) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {GOOGLE_FIVE_STAR_REVIEWS.map((review, dotIdx) => (
            <button
              key={review.firstName + dotIdx}
              type="button"
              onClick={() => scrollToIndex(dotIdx)}
              aria-label={`Ir para avaliação de ${review.firstName}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === dotIdx
                  ? 'w-8 bg-[#F5B014]'
                  : 'w-2.5 bg-[#E5E7EB] hover:bg-[#9CA3AF]'
              }`}
            />
          ))}
        </div>

        {/* 3. Botao de Verificacao Externa */}
        <div className="mt-8 flex justify-start sm:justify-center">
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

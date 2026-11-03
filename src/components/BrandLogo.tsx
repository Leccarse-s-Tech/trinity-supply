import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

/**
 * Emblema vetorial fiel ao logotipo 3D da fachada fisica da Trinity Supply:
 * Hexagono amarelo-ouro (#F5B014) com linhas diagonais de velocidade e caixa 3D isometrica interna.
 */
export const TrinityEmblemSvg: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 140 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="trinityGoldGrad" x1="15" y1="10" x2="125" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFCA3A" />
        <stop offset="55%" stopColor="#F5B014" />
        <stop offset="100%" stopColor="#C98A06" />
      </linearGradient>
      <filter id="trinityDropShadow" x="-10%" y="-10%" width="125%" height="125%">
        <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.65" />
      </filter>
    </defs>

    <g filter="url(#trinityDropShadow)">
      {/* Corpo Hexagonal Principal + Linhas de Velocidade */}
      <path
        d="M80 10L128 37.5V92.5L80 120L42 98V32L80 10Z"
        fill="url(#trinityGoldGrad)"
      />

      {/* Feixes de velocidade diagonais inferiores/esquerdos fieis ao letreiro 3D */}
      <path d="M22 52L48 37" stroke="url(#trinityGoldGrad)" strokeWidth="7.5" strokeLinecap="round" />
      <circle cx="13" cy="57.2" r="4" fill="#F5B014" />

      <path d="M12 69L48 48" stroke="url(#trinityGoldGrad)" strokeWidth="7.5" strokeLinecap="round" />

      <path d="M24 73.5L50 58.5" stroke="url(#trinityGoldGrad)" strokeWidth="7.5" strokeLinecap="round" />
      <circle cx="15" cy="78.8" r="4" fill="#F5B014" />

      <path d="M14 91L54 68" stroke="url(#trinityGoldGrad)" strokeWidth="7.5" strokeLinecap="round" />

      <path d="M35 90.5L62 75" stroke="url(#trinityGoldGrad)" strokeWidth="7.5" strokeLinecap="round" />
      <circle cx="25.5" cy="96" r="4" fill="#F5B014" />

      <path d="M36 102L72 81" stroke="url(#trinityGoldGrad)" strokeWidth="7.5" strokeLinecap="round" />

      {/* Caixa 3D Isometrica Interna (Vazada em Preto Fosco #111315 com Fita Adesiva Amarela) */}
      {/* Base hexagonal da caixa */}
      <path
        d="M80 31L109 47.5V81.5L80 98L51 81.5V47.5L80 31Z"
        fill="#111315"
      />

      {/* Arestas internas de divisao das 3 faces da caixa 3D */}
      <path
        d="M51 47.5L80 64L109 47.5"
        stroke="#F5B014"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M80 64V98"
        stroke="#F5B014"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Fita de Fechamento da Caixa no Topo e Descendo na Face Frontal Esquerda */}
      <path
        d="M91 37.3L62 53.8V69.5L70 74V58.3L99 41.8L91 37.3Z"
        fill="#F5B014"
      />
    </g>
  </svg>
);

/**
 * Componente dedicado para representar o digito "0" na pagina 404
 * utilizando a Caixa 3D e o Hexagono Oficial do Logotipo da Trinity Supply.
 */
export const LogoBoxZero: React.FC<{ className?: string }> = ({ className = 'w-32 h-32 md:w-44 md:h-44' }) => (
  <div
    className={`relative inline-flex items-center justify-center select-none group ${className}`}
    title="Caixa 3D Oficial do Logotipo Trinity Supply representando o zero do erro 404"
  >
    {/* Halo luminoso sutil em amarelo-ouro */}
    <div className="absolute inset-2 rounded-full bg-[#F5B014]/15 blur-xl group-hover:bg-[#F5B014]/25 transition-all duration-500" />

    <svg
      viewBox="0 0 160 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative w-full h-full drop-shadow-[0_10px_25px_rgba(17,19,21,0.22)] transition-transform duration-300 group-hover:scale-105"
      role="img"
      aria-label="Numero zero estilizado como a caixa 3D do logotipo da Trinity Supply"
    >
      <defs>
        <linearGradient id="boxZeroGold" x1="15" y1="10" x2="145" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFCA3A" />
          <stop offset="50%" stopColor="#F5B014" />
          <stop offset="100%" stopColor="#B88208" />
        </linearGradient>
      </defs>

      {/* Camada de Extrusao 3D Escura imitando o relevo de ACM da fachada */}
      <path
        d="M92 16L146 47V109L92 140L49 115V41L92 16Z"
        fill="#111315"
        transform="translate(4, 5)"
      />

      {/* Hexagono Principal do Logotipo */}
      <path
        d="M92 16L146 47V109L92 140L49 115V41L92 16Z"
        fill="url(#boxZeroGold)"
        stroke="#111315"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Linhas de Velocidade Caracteristicas do Logo */}
      <path d="M26 63L55 46" stroke="#111315" strokeWidth="10.5" strokeLinecap="round" />
      <path d="M26 63L55 46" stroke="url(#boxZeroGold)" strokeWidth="7.5" strokeLinecap="round" />
      <circle cx="15" cy="69" r="4.5" fill="#F5B014" stroke="#111315" strokeWidth="1.5" />

      <path d="M14 82L55 58" stroke="#111315" strokeWidth="10.5" strokeLinecap="round" />
      <path d="M14 82L55 58" stroke="url(#boxZeroGold)" strokeWidth="7.5" strokeLinecap="round" />

      <path d="M28 87.5L58 70" stroke="#111315" strokeWidth="10.5" strokeLinecap="round" />
      <path d="M28 87.5L58 70" stroke="url(#boxZeroGold)" strokeWidth="7.5" strokeLinecap="round" />
      <circle cx="17.5" cy="93.5" r="4.5" fill="#F5B014" stroke="#111315" strokeWidth="1.5" />

      <path d="M17 107L62 81" stroke="#111315" strokeWidth="10.5" strokeLinecap="round" />
      <path d="M17 107L62 81" stroke="url(#boxZeroGold)" strokeWidth="7.5" strokeLinecap="round" />

      <path d="M40 107L70 89.5" stroke="#111315" strokeWidth="10.5" strokeLinecap="round" />
      <path d="M40 107L70 89.5" stroke="url(#boxZeroGold)" strokeWidth="7.5" strokeLinecap="round" />
      <circle cx="29.5" cy="113" r="4.5" fill="#F5B014" stroke="#111315" strokeWidth="1.5" />

      <path d="M42 120L82 97" stroke="#111315" strokeWidth="10.5" strokeLinecap="round" />
      <path d="M42 120L82 97" stroke="url(#boxZeroGold)" strokeWidth="7.5" strokeLinecap="round" />

      {/* A Caixa 3D Central da Trinity Supply funcionando como o nucleo do "0" */}
      <path
        d="M92 38L126 57.5V97.5L92 117L58 97.5V57.5L92 38Z"
        fill="#111315"
      />
      {/* Divisoes Isometricas da Caixa */}
      <path
        d="M58 57.5L92 77L126 57.5"
        stroke="#F5B014"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M92 77V117"
        stroke="#F5B014"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      {/* Fita de Embalagem Superior + Lateral */}
      <path
        d="M105 45.5L71 65V83.5L80.5 89V70.5L114.5 51L105 45.5Z"
        fill="#F5B014"
      />
    </svg>
  </div>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg leading-[0.95]',
    md: 'text-xl sm:text-2xl leading-[0.94]',
    lg: 'text-2xl sm:text-3xl leading-[0.92]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <TrinityEmblemSvg className={`${iconSizes[size]} shrink-0`} />
      <div className="flex flex-col justify-center">
        <span
          className={`font-display font-black uppercase tracking-tight text-[#F5B014] drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)] ${textSizes[size]}`}
        >
          TRINITY
        </span>
        <span
          className={`font-display font-black uppercase tracking-tight text-[#F5B014] drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)] ${textSizes[size]}`}
        >
          SUPPLY
        </span>
      </div>
    </div>
  );
};

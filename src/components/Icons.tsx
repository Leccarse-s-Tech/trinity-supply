import React from 'react';

interface IconProps {
  className?: string;
}

export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const GoogleMapsBadgeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z"
      fill="currentColor"
    />
  </svg>
);

export const StarFilledIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

/**
 * Icones vetoriais minimalistas em preto (#111315) e amarelo (#F5B014)
 * para as 6 categorias de insumos B2B da Trinity Supply.
 */
export const CategoryVectorIcon: React.FC<{
  type: 'bread' | 'packaging' | 'cheese' | 'meat' | 'sauces' | 'frozen';
  className?: string;
}> = ({ type, className = 'w-8 h-8' }) => {
  switch (type) {
    case 'bread':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Topo do pao de hamburguer com gergelim em destaque amarelo */}
          <path
            d="M5 17C5 10.9249 10.8203 6 18 6C25.1797 6 31 10.9249 31 17H5Z"
            fill="#F5B014"
            fillOpacity="0.2"
            stroke="#111315"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="11.5" r="1.2" fill="#111315" />
          <circle cx="18.5" cy="10" r="1.2" fill="#111315" />
          <circle cx="22.5" cy="12" r="1.2" fill="#111315" />
          <path
            d="M4 21.5H32"
            stroke="#F5B014"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M6 25.5H30C30 28.2614 27.7614 30 25 30H11C8.23858 30 6 28.2614 6 25.5Z"
            stroke="#111315"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'packaging':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Caixa isometrica B2B para delivery e embalagens */}
          <path
            d="M18 5L31 12.2V23.8L18 31L5 23.8V12.2L18 5Z"
            fill="#F5B014"
            fillOpacity="0.18"
            stroke="#111315"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M5 12.2L18 19.4L31 12.2" stroke="#111315" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M18 19.4V31" stroke="#111315" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M11.5 8.6L24.5 15.8" stroke="#F5B014" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      );
    case 'cheese':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Cunha e fatias de queijo cheddar/prato food service */}
          <path
            d="M5 16L22 7L31 16H5Z"
            fill="#F5B014"
            fillOpacity="0.28"
            stroke="#111315"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <rect
            x="5"
            y="16"
            width="26"
            height="13"
            rx="1.5"
            stroke="#111315"
            strokeWidth="2.2"
          />
          <circle cx="12" cy="22" r="2.2" fill="#F5B014" stroke="#111315" strokeWidth="1.6" />
          <circle cx="20" cy="24" r="1.6" fill="#F5B014" stroke="#111315" strokeWidth="1.5" />
          <circle cx="25" cy="20.5" r="2" fill="#F5B014" stroke="#111315" strokeWidth="1.6" />
        </svg>
      );
    case 'meat':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Blend de carne / tiras de bacon */}
          <ellipse
            cx="18"
            cy="15"
            rx="13"
            ry="6.5"
            fill="#F5B014"
            fillOpacity="0.2"
            stroke="#111315"
            strokeWidth="2.2"
          />
          <path
            d="M5 15V20.5C5 24.0899 10.8203 27 18 27C25.1797 27 31 24.0899 31 20.5V15"
            stroke="#111315"
            strokeWidth="2.2"
          />
          <path d="M12 13L16 17" stroke="#F5B014" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M18 12.5L23 17.5" stroke="#F5B014" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case 'sauces':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Bisnaga profissional food service para molhos e condimentos */}
          <path d="M18 4L20.5 10H15.5L18 4Z" fill="#F5B014" stroke="#111315" strokeWidth="2" strokeLinejoin="round" />
          <rect x="13" y="10" width="10" height="3.5" rx="1" stroke="#111315" strokeWidth="2" />
          <path
            d="M11 16.5C11 14.8431 12.3431 13.5 14 13.5H22C23.6569 13.5 25 14.8431 25 16.5V28C25 29.6569 23.6569 31 22 31H14C12.3431 31 11 29.6569 11 28V16.5Z"
            fill="#F5B014"
            fillOpacity="0.18"
            stroke="#111315"
            strokeWidth="2.2"
          />
          <path d="M11 21H25" stroke="#111315" strokeWidth="2" />
          <path d="M11 25.5H25" stroke="#F5B014" strokeWidth="2.4" />
        </svg>
      );
    case 'frozen':
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
          {/* Batatas pre-fritas / porcoes congeladas */}
          <path d="M11 15V7.5C11 6.67157 11.6716 6 12.5 6H14.5C15.3284 6 16 6.67157 16 7.5V15" stroke="#111315" strokeWidth="2.2" />
          <path d="M16 15V5.5C16 4.67157 16.6716 4 17.5 4H19.5C20.3284 4 21 4.67157 21 5.5V15" fill="#F5B014" fillOpacity="0.3" stroke="#111315" strokeWidth="2.2" />
          <path d="M21 15V8.5C21 7.67157 21.6716 7 22.5 7H24.5C25.3284 7 26 7.67157 26 8.5V15" stroke="#111315" strokeWidth="2.2" />
          <path
            d="M8 15H28L25.5 30H10.5L8 15Z"
            fill="#F5B014"
            fillOpacity="0.2"
            stroke="#111315"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M14 22.5H22" stroke="#F5B014" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      );
  }
};
